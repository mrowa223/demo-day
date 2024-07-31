import Cookies from 'js-cookie';
import { TOKEN_KEY } from '@/config.ts';

/**
 * Проверка аутентификации.
 *
 * @returns boolean
 */
export const authCheck = () => !!Cookies.get(TOKEN_KEY);

/**
 * Получить токен аутентификации.
 *
 * @returns {string}
 */
export const getToken = () => Cookies.get(TOKEN_KEY);

/**
 * Установить токен аутентификации.
 *
 * @param {string} token - токен, полученный с сервера
 */
export const login = (token: string) => {
    Cookies.set(TOKEN_KEY, token);
};

/**
 * Выйти и удалить токен аутентификации.
 */
export const logout = () => Cookies.remove(TOKEN_KEY);
