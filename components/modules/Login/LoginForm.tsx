/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Button } from "../../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Input } from "../../ui/input";
import { toast } from 'sonner';
import { useRouter } from "next/navigation";
import { login } from "../../../actions/auth";

const LoginForm = () => {
    const router = useRouter();
    const form = useForm();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const toastId = toast.loading('Please wait....');
        try {
            const res = await login(data);

            if (res?.statusCode === 200) {
                toast.success(res?.message, { id: toastId });
                router.push('/');
            }
        } catch (error: any) {
            toast.error("Wrong Credentials", { id: toastId })
        }
    };

    return (
        <div>
            <div className="flex flex-col gap-6 p-10 rounded-lg w-full">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Login to your account</h1>
                    <p className="text-balance text-sm text-muted-foreground">
                        Enter your email below to login to your account
                    </p>
                </div>
                <div className="grid gap-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="john@example.com"
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="********"
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;