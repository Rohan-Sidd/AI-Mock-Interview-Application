import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-500 to-indigo-900 text-white">
      {/* Hero Section */}
      <header className="w-full flex flex-col items-center py-20 text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={'/landingpage.jpg'} 
            alt="Landing Page Background" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-50"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg mb-8 max-w-2xl">Join us today and explore the best tools to enhance your productivity and streamline your work. It's quick, easy, and effective.</p>
          <Link href="/dashboard">
            <Button className="px-6 py-3 text-lg bg-white text-blue-700 hover:bg-gray-200 transition duration-300">
              Click here to begin
            </Button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="relative z-10 py-16 px-4 text-center max-w-5xl">
        <h2 className="text-4xl font-semibold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white text-blue-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
            <p>Experience the ultimate productivity boost with our first feature that simplifies your workflow.</p>
          </div>
          <div className="p-6 bg-white text-blue-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
            <p>Streamline your projects with seamless collaboration tools designed for efficiency.</p>
          </div>
          <div className="p-6 bg-white text-blue-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
            <p>Access advanced analytics and reporting to stay ahead in your industry.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 w-full bg-blue-900 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

