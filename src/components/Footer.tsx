import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-4 sm:py-6 px-3 sm:px-4 border-t border-border bg-gradient-to-r from-card via-card to-primary/5 mt-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 pointer-events-none" />
      <div className="container max-w-5xl mx-auto text-center relative">
        <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
          Made with{" "}
          <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-destructive fill-destructive inline animate-pulse" />{" "}
          for VIT-AP University Students
          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary animate-pulse ml-1" />
        </p>
        <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2">
          Calculate your GPA and CGPA with accurate formulas
        </p>
      </div>
    </footer>
  );
};

export default Footer;
