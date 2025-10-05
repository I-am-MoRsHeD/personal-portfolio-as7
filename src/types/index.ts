

export interface Blog {
    id: number;
    title: string;
    content: string;
    thumbnail?: string | null;
    author: {
        name: string;
        role: string;
    };
    createdAt: string;
    views?: number;
}