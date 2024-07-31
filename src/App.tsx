import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '@/router';

import 'bulma/css/bulma.min.css';

const App: FC = () => {
    return (
        <Router>
            <AppRouter />
        </Router>
    );
};

export default App;
