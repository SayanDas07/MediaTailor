import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import HomePage from "./(web)/home/page";
import { ImageIcon, Share2Icon, UploadIcon } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Title */}
          <div className="text-3xl font-extrabold tracking-tighter text-blue-400">
            MediaTailor
          </div>

          {/* Login and Sign Up */}
          {!userId && (
            <div className="flex gap-4">
              <Link
                href="/sign-in"
                className="btn btn-outline border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-2 rounded-full shadow-md transition-all"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="btn btn-outline border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-2 rounded-full shadow-md transition-all"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {userId ? (
          <div className="container mx-auto p-6">
            <HomePage />
          </div>
        ) : (
          <div className="container mx-auto p-6 flex flex-col items-center gap-10">
            {/* Hero Section */}
            <div className="text-center">
              <h1 className="text-5xl font-extrabold text-white">
                Welcome to <span className="text-blue-400">MediaTailor</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Create, resize, and manage your media effortlessly. Whether it&apos;s images or videos, MediaTailor makes it easy for you to organize and resizing your content in the cloud.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-6">
              <Link
                href="/sign-up"
                className="btn btn-primary px-8 py-3 rounded-full text-white bg-blue-400 hover:bg-blue-500 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/home"
                className="btn btn-outline px-8 py-3 rounded-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white shadow-lg"
              >
                Home
              </Link>
            </div>

            {/* Feature Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <ImageIcon className="mx-auto text-blue-400 w-10 h-10 mb-4" />
                <h3 className="font-bold text-lg">Easy Sharing</h3>
                <p className="text-sm text-gray-300 mt-2">
                  Share your media with friends and family effortlessly.
                </p>
              </div>
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <UploadIcon className="mx-auto text-blue-400 w-10 h-10 mb-4" />
                <h3 className="font-bold text-lg">Quick Uploads</h3>
                <p className="text-sm text-gray-300 mt-2">
                  Upload your videos and images in no time.
                </p>
              </div>
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <Share2Icon className="mx-auto text-blue-400 w-10 h-10 mb-4" />
                <h3 className="font-bold text-lg">Seamless Integration</h3>
                <p className="text-sm text-gray-300 mt-2">
                  Integrate with social platforms and share with ease.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <div>© {new Date().getFullYear()} <span className="text-blue-400">MediaTailor</span>. All rights reserved.</div>
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
              <FaDiscord className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
