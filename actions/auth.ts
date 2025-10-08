import { FieldValues } from "react-hook-form";


export const login = async (data: FieldValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if (!res?.ok) {
        // console.error('User login failed!', await res.text());
        await res.text();
    };
    const result = await res.json();

    return result;
};