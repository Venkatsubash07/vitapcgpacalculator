import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-card border-b border-border">
      <div className="container max-w-5xl mx-auto flex items-center justify-center gap-3">
        <div className="p-2 bg-primary rounded-lg">
          <GraduationCap className="h-8 w-8 text-primary-foreground" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            VIT-AP GPA Calculator
          </h1>
          <p className="text-sm text-muted-foreground">
            Calculate your GPA & CGPA with ease
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
