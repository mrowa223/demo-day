import { FC } from 'react';
import { useEffect, useState } from 'react';
import { Header } from '@/components/common/header';
import Wallet from '@/components/wallet';
import { Footer } from '@/components/common/footer';

export const WalletPage: FC = () => {
    return (
       
        <div>
            <Header />
            <div>
               Wallet
               <Wallet />
            </div>
            <Footer/>
        </div>
    );
};
