import { Trophy, TrendingUp, Award, Star, Sparkles } from "lucide-react";

interface ResultCardProps {
  value: number | null;
  type: "GPA" | "CGPA";
  totalCredits?: number;
}

const getGradeInfo = (value: number) => {
  if (value >= 9) return { label: "Outstanding!", bgGradient: "from-yellow-500/20 via-orange-500/20 to-pink-500/20", borderColor: "border-yellow-500/50", icon: Trophy, iconColor: "text-yellow-500" };
  if (value >= 8) return { label: "Excellent!", bgGradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20", borderColor: "border-green-500/50", icon: Award, iconColor: "text-green-500" };
  if (value >= 7) return { label: "Very Good!", bgGradient: "from-blue-500/20 via-cyan-500/20 to-sky-500/20", borderColor: "border-blue-500/50", icon: Star, iconColor: "text-blue-500" };
  if (value >= 6) return { label: "Good", bgGradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20", borderColor: "border-purple-500/50", icon: TrendingUp, iconColor: "text-purple-500" };
  if (value >= 5) return { label: "Average", bgGradient: "from-slate-500/20 via-gray-500/20 to-zinc-500/20", borderColor: "border-slate-500/50", icon: TrendingUp, iconColor: "text-slate-500" };
  return { label: "Needs Improvement", bgGradient: "from-red-500/20 via-rose-500/20 to-pink-500/20", borderColor: "border-red-500/50", icon: TrendingUp, iconColor: "text-red-500" };
};

const ResultCard = ({ value, type, totalCredits }: ResultCardProps) => {
  if (value === null) {
    return (
      <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 sm:p-8 text-center border-2 border-dashed border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-pulse" />
        <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-muted-foreground/50" />
        <p className="text-xs sm:text-sm text-muted-foreground relative">
          Add subjects and calculate to see your {type}
        </p>
      </div>
    );
  }

  const gradeInfo = getGradeInfo(value);
  const Icon = gradeInfo.icon;

  return (
    <div className={`bg-gradient-to-br ${gradeInfo.bgGradient} rounded-xl p-5 sm:p-8 border-2 ${gradeInfo.borderColor} animate-scale-in relative overflow-hidden`}>
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
      <div className="absolute top-2 right-2">
        <Sparkles className={`h-4 w-4 sm:h-6 sm:w-6 ${gradeInfo.iconColor} animate-pulse`} />
      </div>
      <div className="absolute bottom-2 left-2">
        <Star className={`h-3 w-3 sm:h-4 sm:w-4 ${gradeInfo.iconColor} animate-pulse opacity-50`} />
      </div>
      
      <div className="relative">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${gradeInfo.iconColor} animate-bounce`} />
          <span className={`text-base sm:text-lg font-bold ${gradeInfo.iconColor}`}>
            {gradeInfo.label}
          </span>
        </div>
        <div className="text-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Your {type}</p>
          <p className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent animate-fade-in">
            {value.toFixed(2)}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">out of 10.00</p>
          {totalCredits !== undefined && totalCredits > 0 && (
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2 flex items-center justify-center gap-1">
              <Star className="h-3 w-3" />
              Total Credits: {totalCredits}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
