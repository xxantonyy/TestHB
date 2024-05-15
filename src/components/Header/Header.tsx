import { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { classNames } from '@/shared/classNames/classNames';
import { DropDown } from '@/shared/dropDown/dropDown';
import { UserCartActionCreator } from '@/store/reducers/userCart/action-creators';
import { createAdmin } from '@/store/reducers/userCart/services/createAdmin/createAdmin';
import { getShoppingCartHeader } from '@/store/reducers/userCart/services/shopingCardHeader/getShoppingCartHeader';
import cls from './Header.module.scss';

const Header = memo(() => {
    const dispatch = useTypedDispatch();
    const LogoImg = UserCartActionCreator.GetShoppingCartHeaderLogoImg();

    useEffect(() => {
        dispatch(createAdmin());
        dispatch(getShoppingCartHeader());
    }, [dispatch]);

    return (
        <div className={classNames(cls.Header, {}, [])}>
            <img
                className={cls.HeaderLogo}
                height={30} width={30} src={`data:image/png;base64,${LogoImg}`}
                alt="logoImg"
            />
            <Link className={cls.navLinks} to="/">Главная</Link>
            <Link className={cls.navLinks} to="/profile">Профиль</Link>
            <Link className={cls.navLinks} to="/logo">Логотип</Link>
            <DropDown />
            <Link className={cls.navLinks} to="/cart">Корзина</Link>
        </div>
    );
});

export default Header;
