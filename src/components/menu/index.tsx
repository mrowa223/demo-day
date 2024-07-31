import { FC } from 'react';
import { MenuList } from '@/components/menu/list';

import s from './menu.module.scss';

export const Menu: FC = () => {
    return (
        <div className={s.menu}>
            <MenuList />
        </div>
    );
};
