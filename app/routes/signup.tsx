import { Link } from "react-router";

import {
  SignupForm,
  type SignupFormData,
} from "~/components/auth/signup-form";

export default function Signup() {

  const handleSignup = async (data: SignupFormData) => {
    // Integrate registration API

    const { confirmPassword, ...signupData } = data;

    console.log("Signup:", signupData);
  };

  const handleGoogleSignup = () => {
    //Implement Google OAuth
  };

  return (
    <main className="grid min-h-screen grid-cols-1 bg-white md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_460px]">

      {/* Visual Panel */}
      <section className="hidden bg-neutral-100 md:block">
        {/* Future image / illustration */}
      </section>

      {/* Signup Panel */}
      <section className="flex min-h-screen items-center justify-center border-l border-neutral-200 px-6 py-12 md:px-10">

        <div className="w-full max-w-[340px]">

          <SignupForm
            onSubmit={handleSignup}
            onGoogleSignup={handleGoogleSignup}
          />

          <p className="mt-6 text-center text-sm text-neutral-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-neutral-950 underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </p>

        </div>
      </section>
    </main>
  );
}
