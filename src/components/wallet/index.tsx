import { FC } from 'react';
import s from './main-wallet.module.scss';


const Wallet = () => {
  return (
    <div className="wrapper">
      <WalletCard/>

    </div>
  );
};

export default Wallet;


export const WalletCard : FC = ()=>{
    return (
        <div>
            <section className={s.first_section}>
                <h2>Wallet </h2>
                <p>Email:tim@gmail.com
                Username: tim    
                </p>
            </section>
            <section className={s.second_section}>
                <h2>Balance</h2>
                <p>USD: 0</p>
                <p>BTC: 0</p>
            </section>
            <section className={s.third_section}>
                <h2>Exchange Currency</h2>
                <p>From Currency</p>
                <input type="text" placeholder='Select currency' />
                <p>To Currency</p>
                <input type="text" placeholder='Select currency' />
                <p>Amount</p>
                <input type="text" placeholder='Amount' />
<br></br>
            <button>Exchange</button>
            </section>
        </div>
    )
;};