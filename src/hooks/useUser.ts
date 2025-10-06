'use client';

import { useEffect, useState } from 'react';
import { getMe } from '@/services/getServices';
import { User } from '@/types';

export function useUser() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const me = await getMe();
                setUser(me);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    return { user, setUser, loading };
}
