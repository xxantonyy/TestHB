import { memo } from 'react';
import { Helmet } from 'react-helmet';
import { classNames } from '@/shared/classNames/classNames';
import cls from './Profile.module.scss';

interface ProfileProps {
    className?: string;
}

const Profile = memo((props: ProfileProps) => {
    const { className } = props;

    return (
        <>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className={classNames(cls.Profile, {}, [className])}>
                <h2>Профиль</h2>
            </div>
        </>
    );
});

export default Profile;
