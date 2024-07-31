import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';

import s from './layout-default.module.scss';

function LayoutDefault({ children }: { children?: React.ReactNode }) {
    return (
        <div className={s.layoutDefault}>
            <Header />

            <main className={s.layoutDefaultMain}>
                { children }
            </main>

            <Footer />
        </div>
    );
}

export default LayoutDefault;
