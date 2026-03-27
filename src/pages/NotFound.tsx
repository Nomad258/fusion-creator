import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-heading font-bold text-amber-400">404</h1>
        <p className="text-xl text-stone-300">Page not found</p>
        <Link to="/">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
