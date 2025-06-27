import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-6">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
