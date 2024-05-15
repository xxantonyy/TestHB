import {
    memo, useEffect, useRef, useState,
} from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../classNames/classNames';
import cls from './dropDown.module.scss';

interface dropDownProps {
    className?: string;
}

export const DropDown = memo((props: dropDownProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current
            && !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    const handleClickDropdown = () => {
        toggleMenu();
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div
            className={classNames(cls.dropDown, {}, [className])}
            ref={dropdownRef}
        >
            <div className={cls.dropDownBtn} onClick={toggleMenu}>
                Дополнительно
            </div>
            {isOpen && (
                <div className={cls.dropdownContent}>
                    <Link
                        className={cls.dropdownItem}
                        to="/faq"
                        onClick={handleClickDropdown}
                    >FAQ
                    </Link>
                    <Link
                        className={cls.dropdownItem}
                        to="/info"
                        onClick={handleClickDropdown}
                    >Информация о нас
                    </Link>
                </div>
            )}
        </div>
    );
});
