import { memo } from 'react';
import { Helmet } from 'react-helmet';
import { classNames } from '@/shared/classNames/classNames';
import cls from './Logo.module.scss';

interface LogoProps {
    className?: string;
}

const Logo = memo((props: LogoProps) => {
    const { className } = props;

    return (
        <>
            <Helmet>
                <title>Logo</title>
            </Helmet>
            <div className={classNames(cls.Logo, {}, [className])}>
                <h2>Логотип</h2>
            </div>
        </>
    );
});

export default Logo;
