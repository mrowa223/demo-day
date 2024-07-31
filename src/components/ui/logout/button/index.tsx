import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { logout } from '@/helpers/auth'; // Импорт функции logout

import s from './ui-logout-btn.module.scss';

export const BtnLogout: FC = () => {
    const handleLogout = () => {
        logout();
        window.location.reload(); // Перезагрузка страницы после выхода
    };

    return (
        <Button
            type={'button'}
            theme={'bordered'}
            classes={s.btnLogout}
            onClick={handleLogout}
        >
            Logout
        </Button>
    );
};
