import { memo } from 'react';
import { Helmet } from 'react-helmet';
import { classNames } from '@/shared/classNames/classNames';
import cls from './Info.module.scss';

interface InfoProps {
    className?: string;
}

const Info = memo((props: InfoProps) => {
    const { className } = props;

    return (
        <>
            <Helmet>
                <title>Info</title>
            </Helmet>
            <div className={classNames(cls.Info, {}, [className])}>
                <h2>Информация</h2>
            </div>
        </>
    );
});

export default Info;
