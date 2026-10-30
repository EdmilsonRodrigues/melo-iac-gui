import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";

const signupSchema = z
    .object({
        name: z.string().min(2, "Name must have at least 2 characters"),
        email: z.string().email("Enter a valid email address"),
        password: z.string().min(8, "Password must have at least 8 characters"),
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type SignupFormData = z.infer<typeof signupSchema>;

interface SignupFormProps {
    onSubmit: (data: SignupFormData) => Promise<void> | void;
    onGoogleSignup?: () => void;
}

export function SignupForm({
    onSubmit,
    onGoogleSignup,
}: SignupFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    return (
        <div className="w-full space-y-5">

            {/* Header */}
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-semibold tracking-tight text-neutral-950">
                    Create an account
                </h1>

                <p className="text-sm text-neutral-500">
                    Get started by creating your account.
                </p>
            </div>

            {/* Google Signup */}
            <Button
                type="button"
                variant="outline"
                onClick={onGoogleSignup}
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Name */}
                <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>

                    <Input
                        id="name"
                        placeholder="John Doe"
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                    />

                    {errors.name && (
                        <p className="text-xs text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-2">
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
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>

                    <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        autoComplete="new-password"
                        aria-invalid={!!errors.password}
                        {...register("password")}
                    />

                    {errors.password && (
                        <p className="text-xs text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm password</Label>

                    <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        autoComplete="new-password"
                        aria-invalid={!!errors.confirmPassword}
                        {...register("confirmPassword")}
                    />

                    {errors.confirmPassword && (
                        <p className="text-xs text-red-500">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 w-full bg-neutral-950 text-white hover:bg-neutral-800"
                >
                    {isSubmitting ? "Creating account..." : "Create account"}
                </Button>
            </form>

            <p className="text-center text-xs text-neutral-400">
                By creating an account, you agree to our terms and conditions.
            </p>
        </div>
    );
}
