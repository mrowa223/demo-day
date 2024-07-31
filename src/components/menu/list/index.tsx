import { FC } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@/router/routes.tsx';
import { authCheck } from '@/helpers/auth.ts';
import IHome from '@/assets/icons/icon-home.svg?react';
import IRates from '@/assets/icons/icon-rates.svg?react';
import IWallet from '@/assets/icons/icon-wallet.svg?react';
import ITransactions from '@/assets/icons/icon-transactions.svg?react';

import s from './menu-list.module.scss';

export const MenuList: FC = () => {
    const menus = routes.filter(route => route.label !== 'Login' && (!route.isProtected || authCheck()));

    /**
     * Иконки для меню.
     *
     * @param {string} name
     */
    const icons = (name: string) => {
        const icon = name.toLowerCase();

        switch (icon) {
            case 'home':
                return <IHome />;
            case 'rates':
                return <IRates />;
            case 'wallet':
                return <IWallet />;
            case 'transactions':
                return <ITransactions />;
        }
    };

    return (
        <ul className={s.menuList}>
            {menus.map((route, index) => (
                <li
                    key={index}
                    className={s.menuListItem}
                >
                    <Link
                        to={route.path}
                        className={s.menuListItemLink}
                    >
                        { route.label }

                        { icons(route.label) }
                    </Link>
                </li>
            ))}
        </ul>
    );
};
