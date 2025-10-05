"use server";

import { revalidatePath, revalidateTag } from "next/cache";


export const createProject = async (data: FormData) => {
    const thumbnail = data.get('thumbnail') as File;

    const datas = Object.fromEntries(data.entries());
    delete datas.thumbnail;

    const features = datas.features.toString().split(',').map(feature => feature.trim());
    const modifiedData = {
        ...datas,
        features
    };
    const rawData = JSON.stringify(modifiedData);

    const formData = new FormData();
    formData.append('file', thumbnail);
    formData.append('data', rawData);

    // console.log(formData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: formData
    });

    const result = await res.json();

    if (result?.id) {
        revalidateTag("PROJECT");
        revalidatePath("/projects");
    };

    return result;
};