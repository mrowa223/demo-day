import { authCheck } from '@/helpers/auth.ts';

/**
 * Хэлпер для защиты роутов.
 */
export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    if (!authCheck()) {
        return <div>You need to be logged in to view this page.</div>;
    }

    return children;
}
