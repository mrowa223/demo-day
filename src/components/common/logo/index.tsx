import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import ILogo from '@/assets/icons/logo.svg?react';

import s from './logo.module.scss';

export const Logo: FC = () => {
    return (
        <Link
            to={'/'}
            className={cn(s.logoLink, s.logo)}
        >
            <ILogo
                className={s.logoIcon}
            />
        </Link>
    );
};
