import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";


const BlogCard = ({ blog }: { blog: Blog }) => {
    const { id, title, content, thumbnail, author, createdAt, views = 0 } = blog;

    return (
        <Link href={`/all-blogs/${id}`} className="bg-background shadow-md rounded-2xl overflow-hidden border border-primary-foreground flex flex-col h-[420px] hover:shadow-lg transition max-w-full min-w-none xl:min-w-sm xl:max-w-none">

            {thumbnail && (
                <div className="relative h-48 w-full">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>
            )}

            {/* main Content */}
            <div className="flex flex-col justify-between flex-grow p-4">
                <div>
                    <h2 className="text-xl font-bold text-foreground mb-2 line-clamp-1">
                        {title}
                    </h2>
                    <p className="text-muted-foreground/110 text-sm leading-relaxed line-clamp-3">
                        {content?.length > 150 ? content?.slice(0, 150) + "...." : content}
                    </p>
                </div>

                <div className="mt-auto pt-4 border-t border-primary-foreground flex justify-between items-center text-sm text-muted-foreground">
                    <div>
                        <p className="font-medium text-foreground">{author.name}</p>
                        <p className="text-xs">{author.role}</p>
                    </div>
                    <div className="text-right">
                        <p>{new Date(createdAt).toLocaleDateString()}</p>
                        <p>{views} views</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
