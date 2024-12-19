/* eslint-disable @next/next/no-html-link-for-pages */
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-blue-900 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-center text-blue-500 mb-6">
          Welcome Back
        </h1>
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          redirectUrl="/home"
          appearance={{
            variables: {
              colorPrimary: "#4f83cc", // Primary color for buttons
              colorBackground: "#ffffff", // Background color
              colorText: "#333333", // Text color
              fontFamily: "Arial, sans-serif", // Custom font
            },
          }}
        />
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <a href="/sign-up" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
