import { FC } from 'react';
import cn from 'classnames';
import type { ButtonPropsType } from '@/types/ui/Button';

import s from './ui-button.module.scss';

export const Button: FC<ButtonPropsType> = ({ type, theme, classes , children, onClick }) => {
    return (
        <button
            type={type}
            className={cn(s.button, classes, {
                [s.buttonBordered]: theme === 'bordered',
            })}
            onClick={onClick}
        >
            { children }
        </button>
    );
};
