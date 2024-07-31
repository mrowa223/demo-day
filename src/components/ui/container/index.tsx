import { FC } from 'react';
import cn from 'classnames';
import type { ContainerPropsType } from '@/types/ui/Container';

import s from './ui-container.module.scss';

export const Container: FC<ContainerPropsType> = ({ classes, children }) => {
    return (
        <div className={cn(s.container, classes)}>
            { children }
        </div>
    );
};
