import React, { FC, useState } from 'react';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { baseURL } from '@/baseApi/config.ts';
import { login } from '@/helpers/auth'; // Импорт функций из вашего файла с функциями для работы с токенами

import s from './main-login.module.scss';

export const LoginPage: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async () => {
        const credentials = {
            username,
            password
        };

        try {
            const response = await fetch(`${baseURL}/auth/authenticate`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Token:', data.accessToken);

            // Сохранение токена в куки
            login(data.accessToken);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className={s.container}>
                <h2 className={s.title}>Login Here</h2>
                <p>Welcome Back, you've been missed</p>
                <div>
                    <span>E-mail</span>
                    <input
                        type="text"
                        placeholder='e-mail'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={s.form}
                    />
                    <span>Password</span>
                    <input
                        type="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={s.form}
                    />
                    <p>Forgot password?</p>
                </div>
                <Button type={'button'} theme={'transparent'} classes={s.btn} onClick={handleClick}>
                    Login
                </Button>
                <Link to={'/register'}>Don't have an account?</Link>
            </div>
            <Footer />
        </div>
    );
};
