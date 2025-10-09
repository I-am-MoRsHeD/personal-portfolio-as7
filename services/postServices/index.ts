'use server';

import { cookies } from "next/headers";



export const logOut = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-type": 'application/json'
        },
    });
    const result = await res.json();

    if (result?.success) {
        const cookieStore = await cookies();
        cookieStore.delete('token');
    };

    return result;
};