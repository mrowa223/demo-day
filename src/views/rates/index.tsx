import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import Rates from '@/components/main/rates';
import { FC } from 'react';
import s from './main-hero.module.scss';


export const RatesPage: FC = () => {
    return (<div>
        <Header />
        <div className={s.rates}>
            
            <Rates/>
   
        </div>
        <Footer/>
        </div>
        
    );
};
