import { memo } from 'react';
import { Helmet } from 'react-helmet';
import { classNames } from '@/shared/classNames/classNames';
import cls from './Main.module.scss';

interface MainProps {
    className?: string;
}

const Main = memo((props: MainProps) => {
    const { className } = props;
    return (
        <>
            <Helmet>
                <title>Main</title>
            </Helmet>
            <div className={classNames(cls.Main, {}, [className])}>
                <h1>Главная страница нашего магзина безделушек =)</h1>
                <h2>{'В разделе \'Корзина\' можно оформить заказ!'}</h2>
            </div>
        </>
    );
});

export default Main;
