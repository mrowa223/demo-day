import { HomePage } from '@/views/index';
import { LoginPage } from '@/views/login';
import { RatesPage } from '@/views/rates';
import { WalletPage } from '@/views/wallet';
import { TransactionsPage } from '@/views/transactions';
import { RegisterPage } from '@/views/register';

/**
 * Массив роутов.
 *
 * @returns {Array}
 */
export const routes = [
    {
        path:        '/login',
        label:       'Login',
        element:     <LoginPage />,
        isProtected: false,
    },
    {
        path:        '/',
        label:       'Home',
        element:     <HomePage />,
        isProtected: false,
    },
    {
        path:        '/rates',
        label:       'Rates',
        element:     <RatesPage />,
        isProtected: false,
    },
    {
        path:        '/wallet',
        label:       'Wallet',
        element:     <WalletPage />,
        isProtected: false,
    },
    {
        path:        '/transactions',
        label:       'Transactions',
        element:     <TransactionsPage />,
        isProtected: false,
    },
    {
        path:        '/register',
        label:       'Register',
        element:     <RegisterPage/>,
        isProtected: false

    }
];
