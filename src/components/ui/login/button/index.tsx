import { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './ui-login-btn.module.scss';

export const BtnLogin: FC = () => {
    return (
        <Link
            to={'/login'}
            className={s.btnLogin}
        >
            Login
        </Link>
    );
};
