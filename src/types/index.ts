

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
};


export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    projectLink: string;
    liveLink: string;
    features: string[];
    createdAt: string;
}