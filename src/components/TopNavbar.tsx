import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/lib/auth";
import { LogOut, User } from "lucide-react";
import { toast } from "sonner";

export function TopNavbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out", {
      description: "You have been successfully logged out.",
    });
  };

  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="p-2" />
        <div className="text-sm text-gray-600">
          Welcome back,{" "}
          <span className="font-medium text-gray-900">{user?.name}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <User className="h-4 w-4" />
          <span>{user?.email}</span>
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  );
}
