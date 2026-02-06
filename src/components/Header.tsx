import { GraduationCap, Sparkles, Star } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 sm:py-6 px-3 sm:px-4 bg-gradient-to-r from-card via-card to-primary/5 border-b border-border relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5" />
      <div className="absolute top-0 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container max-w-5xl mx-auto flex items-center justify-center gap-3 sm:gap-4 relative">
        <div className="p-2 sm:p-3 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-lg sm:rounded-xl shadow-lg shadow-primary/25 hover:scale-110 transition-transform duration-300 group shrink-0">
        <img
    src="https://github.com/Venkatsubash07/vitapcgpacalculator/blob/main/websitelogo.png?raw=true"
    alt="Logo"
    className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
  />
        </div>
        <div className="text-center min-w-0">
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary animate-pulse shrink-0" />
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent truncate">
              VIT-AP GPA Calculator
            </h1>
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-primary animate-pulse shrink-0" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
            ✨ Calculate your GPA & CGPA with ease ✨
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
