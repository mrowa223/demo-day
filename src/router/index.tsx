import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '@/router/routes.tsx';
import { ProtectedRoute } from '@/helpers/router.tsx';

/**
 * Роутер.
 */
const AppRouter: FC = () => {
    return (
        <Routes>
            {routes.map((route, index) => {
                if (!route.isProtected) {
                    return (
                        <Route key={index} path={route.path} element={route.element} />
                    );
                }

                return <Route
                    key={index}
                    path={route.path}
                    element={<ProtectedRoute>{ route.element }</ProtectedRoute>}
                />;
            })}
        </Routes>
    );
};

export default AppRouter;
