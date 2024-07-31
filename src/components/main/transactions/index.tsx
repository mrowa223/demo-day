
import { FC } from 'react';


import s from './main-transaction.module.scss';



export const Transaction: FC = () => {
  return (
    <div>
    <p className={s.title}>Transaction </p>
         <div className={s.container}>

<button className={s.form}>Direct to User</button>
<button className={s.form}>QR-code generation</button>
<button className={s.form}>Scan QR-code</button>
<button className={s.form}>History of transactions</button>
         </div>
  </div>
  );
};
