

export const getMe = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`, {
        credentials: "include"
    });
    const { data } = await res.json();
    return data;
};