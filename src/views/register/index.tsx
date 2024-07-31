import React, { FC, useState } from 'react';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { baseURL } from '@/baseApi/config.ts';
import { login } from '@/helpers/auth'; // Импорт функций из вашего файла с функциями для работы с токенами

import s from './main-register.module.scss';

export const RegisterPage: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleClick = async () => {
        const user = {
            username,
            password,
            name,
            email
        };

        try {
            const response = await fetch(`${baseURL}/auth/signup`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Token:', data);

            // Сохранение токена в куки
            login(data.accessToken); 
            // ?

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className={s.container}>
                <h2 className={s.title}>Register Here</h2>
                <p>Welcome Back, you've been missed</p>
                <div>
                    <span>E-mail</span>
                    <input
                        type="text"
                        placeholder='e-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={s.form}
                    />
                       <span>Name</span>
                    <input
                        type="text"
                        placeholder='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={s.form}
                    />
                       <span>UserName</span>
                    <input
                        type="text"
                        placeholder='username'
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
                    Register
                </Button>
                <Link to={'/login'}>Do you have an account?</Link>
            </div>
            <Footer />
        </div>
    );
};
