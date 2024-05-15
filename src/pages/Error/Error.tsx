import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import cls from './Error.module.scss';

const Error = memo(() => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/', { replace: true });
    }, [navigate]);
    return <div className={cls.error} />;
});

export default Error;
