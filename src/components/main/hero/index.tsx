import { FC } from 'react';
import {Link} from 'react-router-dom';
import { Container } from '@/components/ui/container';
import IHero from '@/assets/images/img-hero.png';

import s from './main-hero.module.scss';

export const Hero: FC = () => {
    return (
        <section className={s.hero}>
            
            <Container>
                
                <div className={s.heroWrapper}>
                    <div className={s.heroContent}>
                        <h2 className={s.heroTitle}>
                            Welcome to <span>BLUR!</span>
                        </h2>

                        <p className={s.heroDescription}>
                            We help people legally pay for goods and services with cryptocurrency using the Blur virtual card. With our card, you can quickly and safely make everyday purchases and international transfers without losing money on exchange rate differences. We combine the ease of transfers via banking apps with the security and anonymity of crypto transactions.
                        </p>

                        <div className={s.heroLinks}>
                            <Link
                                to={'/exchange'}
                                className={s.heroLink}
                            >
                                Exchange
                            </Link>

                            <Link
                                to={'/rates'}
                                className={s.heroLink}
                            >
                                Check rates
                            </Link>
                        </div>
                    </div>

                    <div className={s.heroImg}>
                        <img
                            src={IHero}
                            alt=""
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};
