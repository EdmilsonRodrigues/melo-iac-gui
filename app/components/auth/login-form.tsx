import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";

const loginSchema = z.object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(1, "Password is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
    onSubmit: (data: LoginFormData) => Promise<void> | void;
    onGoogleLogin?: () => void;
}

export function LoginForm({
    onSubmit,
    onGoogleLogin,
}: LoginFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <div className="w-full space-y-6">

            {/* Header */}
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-semibold tracking-tight text-white">
                    Welcome back
                </h1>

                <p className="text-sm text-neutral-400">
                    Sign in to your account to continue.
                </p>
            </div>

            {/* Google Login */}
            <Button
                type="button"
                variant="outline"
                onClick={onGoogleLogin}
                className="h-11 w-full border-neutral-300 text-neutral-800 hover:bg-neutral-50"
            >
                Continue with Google
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4">
                <Separator className="flex-1" />

                <span className="text-xs text-neutral-400">OR</span>

                <Separator className="flex-1" />
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                {/* Email */}
                <div className="space-y-2 text-neutral-300">
                    <Label htmlFor="email">Email address</Label>

                    <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                    />

                    {errors.email && (
                        <p className="text-xs text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div className="space-y-2 text-neutral-300">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>

                        <Link
                            to="/forgot-password"
                            className="text-xs text-neutral-500 hover:text-neutral-950"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        aria-invalid={!!errors.password}
                        {...register("password")}
                    />

                    {errors.password && (
                        <p className="text-xs text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 w-full bg-white text-neutral-950 hover:bg-neutral-800"
                >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                </Button>
            </form>
        </div>
    );
}
