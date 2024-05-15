import { memo } from 'react';
import { Helmet } from 'react-helmet';
import cls from './FAQ.module.scss';
import { classNames } from '@/shared/classNames/classNames';

interface FAQProps {
    className?: string;
}

const FAQ = memo((props: FAQProps) => {
    const { className } = props;

    return (
        <>
            <Helmet>
                <title>FAQ</title>
            </Helmet>
            <div className={classNames(cls.FAQ, {}, [className])}>
                <h2>FAQ</h2>
            </div>
        </>
    );
});

export default FAQ;
