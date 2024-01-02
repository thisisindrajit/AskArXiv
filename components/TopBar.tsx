import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import SvgLogo from "./SvgLogo";
import { cn } from "@/lib/utils";

const TopBar: React.FC = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {/* Logo */}
      <div className="flex items-center gap-4">
        <SvgLogo />
        <div className="hidden md:block text-light-foreground dark:text-dark-foreground">
          Busy<span className="text-primary font-bold">Researcher</span>
        </div>
      </div>
      {/* Right side menu */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="outline">Register</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default TopBar;
