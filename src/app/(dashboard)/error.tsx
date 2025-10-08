"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";

export default function ErrorPage() {
    const { user } = useUser();
    useEffect(() => {

    }, [user]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
            {!user && <div className="max-w-md rounded-lg border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-red-600">
                    You are not authorized to access this page.
                </h2>

                <div className="mt-4">
                    <Button asChild>
                        <Link href="/">Please Go Home</Link>
                    </Button>
                </div>
            </div>}
        </div>
    );
}
