import { FC } from 'react';
// import { Link } from 'react-router-dom';
// import { routes } from '@/router/routes.tsx';
// import { authCheck } from '@/helpers/auth.ts';

import { useEffect, useState } from 'react';
import { baseURL } from '@/baseApi/config.ts';

import bnb from '@/assets/svg/bnb.svg';
import btc from '@/assets/svg/btc.svg';
import eth from '@/assets/svg/eth.svg';
import sol from '@/assets/svg/sol.svg';
import usdt from '@/assets/svg/usdt.svg';
import xrp from '@/assets/svg/xrp.svg';


interface ExchangeRate {
    kzt_to_solana: number;
    bitcoin_to_kzt: number;
    usd_to_ethereum: number;
    solana_to_usd: number;
    ethereum_to_usd: number;
    usd_to_tether: number;
    kzt_to_bitcoin: number;
    tether_to_usd: number;
    binancecoin_to_kzt: number;
    kzt_to_binancecoin: number;
    usd_to_kzt: number;
    kzt_to_ethereum: number;
    ripple_to_kzt: number;
    kzt_to_usd: number;
    usd_to_binancecoin: number;
    usd_to_ripple: number;
    kzt_to_tether: number;
    bitcoin_to_usd: number;
    usd_to_solana: number;
    solana_to_kzt: number;
    usd_to_bitcoin: number;
    ethereum_to_kzt: number;
    binancecoin_to_usd: number;
    tether_to_kzt: number;
    usd_to_usd: number;
    ripple_to_usd: number;
    kzt_to_ripple: number;
  }

  




// import btcIcon from './assets/svg/btc.svg';


import s from './main-rates.module.scss';

export const Rates: FC = () => {
  return (
    <div>
        <section className={s.content}>
<div className="wrapper">
    <p className={s.title}>Current Exchange Rates</p>
    <CryptoCard></CryptoCard>
    </div>
</section>
 
    </div>
  );
};

export default Rates;

interface ExchangeRate {
    name: string;
    price: number;
    currency: string;
  }
  
  export const CryptoCard: FC = () => { const [data, setData] = useState<ExchangeRate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(`${baseURL}/api/exchange-rates/current`);
        const data: ExchangeRate = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <div className={s.loading}>Loading...</div>;
  }

  if (!data) {
    return <div  className={s.loading}>Error loading data</div>;
  }

  const cryptoData = [
    { name: 'BNB', currency: 'BNB', price: `$${(data.binancecoin_to_usd).toFixed(3)}`, imgSrc: bnb },
    { name: 'BTC', currency: 'BTC', price: `$${data.bitcoin_to_usd.toFixed(2)}`, imgSrc: btc },
    { name: 'ETH', currency: 'ETH', price: `$${data.ethereum_to_usd.toFixed(3)}`, imgSrc: eth },
    { name: 'SOL', currency: 'SOL', price: `$${data.solana_to_usd.toFixed(3)}`, imgSrc: sol },
    { name: 'USDT', currency: 'USDT', price: `$${data.usd_to_tether.toFixed(1)}`, imgSrc: usdt },
    { name: 'XRP', currency: 'XRP', price: `$${data.ripple_to_usd.toFixed(3)}`, imgSrc: xrp }
  ];

  return (
    <div className={s.container}>
      {cryptoData.map((crypto) => (
        <div className={s.crypto_card} key={crypto.name}>
          <img
            src={crypto.imgSrc}
            alt={crypto.name}
            width={50} // Вы можете изменить размеры по вашему усмотрению
            height={50}
            className={s.card_image}
          />
          <div className={s.crypto_card_info}>
            <h2 className={s.card_title}>{crypto.name}</h2>
            <p>{crypto.currency}</p>
          </div>
          <p className={s.crypto_card_price}>{crypto.price}</p>
        </div>
      ))}
    </div>
  );
};