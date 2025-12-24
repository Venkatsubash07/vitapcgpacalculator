import { GraduationCap, Sparkles, Star } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-gradient-to-r from-card via-card to-primary/5 border-b border-border relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5" />
      <div className="absolute top-0 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container max-w-5xl mx-auto flex items-center justify-center gap-4 relative">
        <div className="p-3 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-xl shadow-lg shadow-primary/25 hover:scale-110 transition-transform duration-300 group">
          <GraduationCap className="h-8 w-8 text-primary-foreground group-hover:rotate-12 transition-transform duration-300" />
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              VIT-AP GPA Calculator
            </h1>
            <Star className="h-4 w-4 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            ✨ Calculate your GPA & CGPA with ease ✨
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
