import { FC } from 'react';
import LayoutDefault from '@/layouts/default';
import { UserCount } from '@/components/main/user';
import { Hero } from '@/components/main/hero';

export const HomePage: FC = () => {
    return (
        <LayoutDefault>
            <div className={'main-page'}>
                <UserCount />

                <Hero />
            </div>
        </LayoutDefault>
    );
};
