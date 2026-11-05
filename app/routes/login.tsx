
import { Link } from "react-router";
import { LoginForm } from "~/components/auth/login-form";
import type { LoginFormData } from "~/components/auth/login-form";
import { Button } from "~/components/ui/button";

export default function Login() {

    const handleLogin = async (data: LoginFormData) => {
        //Integrate authentication service
        console.log("Login:", data);
    };

    const handleGoogleLogin = () => {
        //Implement Google OAuth
    };

    return (
        <main className="grid min-h-screen grid-cols-1 bg-neutral-950 md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_460px]">

            {/* Visual Panel */}
            <section className="hidden bg-neutral-100 md:block">
                {/* Future image / illustration */}
            </section>

            {/* Authentication Panel */}
            <section className="flex min-h-screen items-center justify-center border-l border-neutral-800 bg-neutral-950 px-6 py-12 md:px-10">
                <div className="w-full max-w-[340px]">
                    <LoginForm
                        onSubmit={handleLogin}
                        onGoogleLogin={handleGoogleLogin}
                    />
                    <div className="text-center mt-4">
                        <p className="text-sm text-neutral-500">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="font-medium text-white underline-offset-4 hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                    <p className="text-center text-xs text-neutral-400 mt-8">
                        Secure authentication
                    </p>
                </div>

            </section>
        </main>
    );
}
