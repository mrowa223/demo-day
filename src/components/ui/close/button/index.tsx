import { FC } from 'react';
import { Button } from '@/components/ui/button';
import IClose from '@/assets/icons/icon-close-big.svg?react';

import s from './ui-close-btn.module.scss';

export const CloseButton: FC<{ onClick: () => void; }> = ({ onClick }) => {
    return (
        <Button
            type={'button'}
            theme={'transparent'}
            classes={s.closeBtn}
            onClick={onClick}
        >
            <IClose />
        </Button>
    );
};
