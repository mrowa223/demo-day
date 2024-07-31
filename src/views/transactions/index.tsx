import { FC } from 'react';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Transaction } from '@/components/main/transactions';   



export const TransactionsPage: FC = () => {
    return (
        <div>
            <Header />
        <div className={'transactions-page'}>
           
           <Transaction/> 
        </div>
       <Footer/>
        </div>
       
    );
};
