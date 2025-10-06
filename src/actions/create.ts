"use server";

import { revalidateTag, revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createProjectAction(formData: FormData) {
    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get('accessToken')?.value;
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/create`, {
            method: "POST",
            headers: {
                Cookie: `accessToken=${accessToken ?? ""}`
            },
            credentials: "include",
            body: formData,
        });

        const result = await res.json();

        if (result.success) {
            revalidateTag("PROJECT");
            revalidatePath("/projects");
        }
        return result;
    } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to create project" };
    }
}





















// "use server";

// import { revalidatePath, revalidateTag } from "next/cache";
// import { cookies } from "next/headers";


// export const createProject = async (data: FormData) => {
//     const cookieStore = await cookies();
//     const accessToken = cookieStore.get('accessToken')?.value;

//     const thumbnail = data.get('thumbnail') as File;
//     console.log({thumbnail});
//     const datas = Object.fromEntries(data.entries());
//     delete datas.thumbnail;

//     const features = datas.features.toString().split(',').map(feature => feature.trim());
//     const modifiedData = {
//         ...datas,
//         features
//     };
//     const rawData = JSON.stringify(modifiedData);

//     const formData = new FormData();
//     formData.append('file', thumbnail);
//     formData.append('data', rawData);
//     console.log(formData);
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/create`, {
//         method: "POST",
//         headers: {
//             Cookie: `accessToken=${accessToken ?? ""}`
//         },
//         body: formData,
//         credentials: 'include',
//     });

//     const result = await res.json();
//     console.log(result);
//     if (result?.data?.id) {
//         revalidateTag("PROJECT");
//         revalidatePath("/projects");
//         // toast.success("Project created successfully");
//     }
//     return result;
// };