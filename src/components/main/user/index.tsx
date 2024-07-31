import React, { FC, useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import IUser from '@/assets/icons/icon-user.svg?react';

import { baseURL } from '@/baseApi/config.ts';

import s from './main-user.module.scss';

export const UserCount: FC = () => {
    const [numberOfUsers, setNumberOfUsers] = useState<number | null>(null);

    useEffect(() => {
        // Запрос к endpoint для получения количества пользователей
        const fetchNumberOfUsers = async () => {
            try {
                const response = await fetch(`${baseURL}/public/numberOfUsers`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Number of Users ' + data);
                setNumberOfUsers(data); // Предполагаем, что ответ содержит поле numberOfUsers
            } catch (error) {
                console.error('Error fetching number of users:', error);
            }
        };

        fetchNumberOfUsers();
    }, []);

    return (
        <section className={s.userCount}>
            <Container>
                <div className={s.userCountWrapper}>
                    <h2 className={s.userCountTitle}>
                        Current Users in the system
                    </h2>

                    <div className={s.userCountNumber}>
                        <IUser className={s.userCountIcon} />
                        {numberOfUsers !== null ? numberOfUsers : 'Loading...'}
                    </div>
                </div>
            </Container>
        </section>
    );
};
