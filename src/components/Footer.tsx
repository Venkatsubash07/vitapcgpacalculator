import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 border-t border-border bg-card mt-auto">
      <div className="container max-w-5xl mx-auto text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
          Made with{" "}
          <Heart className="h-4 w-4 text-destructive fill-destructive inline" />{" "}
          for VIT-AP University Students
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Calculate your GPA and CGPA with accurate formulas
        </p>
      </div>
    </footer>
  );
};

export default Footer;
