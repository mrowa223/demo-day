import React, { FC } from 'react';
import cn from 'classnames';
import { authCheck } from '@/helpers/auth.ts';
import { Logo } from '@/components/common/logo';
import { Menu } from '@/components/menu';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { CloseButton } from '@/components/ui/close/button';
import { BtnLogout } from '@/components/ui/logout/button';
import { BtnLogin } from '@/components/ui/login/button';
import IMenu from '@/assets/icons/icon-menu.svg?react';

import s from './header.module.scss';

export const Header: FC = () => {
    const [isShowMenu, setIsShowMenu] = React.useState<boolean>(false);

    /**
     * Показать меню.
     */
    const showMenu = () => {
        setIsShowMenu(true);
    };

    /**
     * Скрыть меню.
     */
    const hideMenu = () => {
        setIsShowMenu(false);
    };

    return (
        <header id={'header'} className={s.header}>
            <Container classes={s.mobile}>
                <Logo />

                <Button
                    type={'button'}
                    theme={'bordered'}
                    classes={s.menuBtn}
                    onClick={showMenu}
                >
                    <IMenu />
                </Button>
            </Container>

            <nav
                className={cn(s.menu, {
                    [s.menuActive]: isShowMenu,
                })}
            >
                <div className={s.menuContainer}>
                    <div className={s.menuHeader}>
                        <Logo />

                        <CloseButton
                            onClick={hideMenu}
                        />
                    </div>

                    <div className={s.menuContent}>
                        <Menu />

                        {authCheck()
                            ? <BtnLogout />
                            : <BtnLogin />
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};
