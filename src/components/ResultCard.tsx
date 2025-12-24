import { Trophy, TrendingUp, Award } from "lucide-react";

interface ResultCardProps {
  value: number | null;
  type: "GPA" | "CGPA";
  totalCredits?: number;
}

const getGradeInfo = (value: number) => {
  if (value >= 9) return { label: "Outstanding!", color: "text-primary", icon: Trophy };
  if (value >= 8) return { label: "Excellent!", color: "text-primary", icon: Award };
  if (value >= 7) return { label: "Very Good!", color: "text-chart-2", icon: TrendingUp };
  if (value >= 6) return { label: "Good", color: "text-chart-3", icon: TrendingUp };
  if (value >= 5) return { label: "Average", color: "text-muted-foreground", icon: TrendingUp };
  return { label: "Needs Improvement", color: "text-destructive", icon: TrendingUp };
};

const ResultCard = ({ value, type, totalCredits }: ResultCardProps) => {
  if (value === null) {
    return (
      <div className="bg-muted/20 rounded-xl p-6 text-center border border-dashed border-border">
        <p className="text-muted-foreground">
          Add subjects and calculate to see your {type}
        </p>
      </div>
    );
  }

  const gradeInfo = getGradeInfo(value);
  const Icon = gradeInfo.icon;

  return (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 animate-in zoom-in-95 duration-300">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Icon className={`h-5 w-5 ${gradeInfo.color}`} />
        <span className={`text-sm font-medium ${gradeInfo.color}`}>
          {gradeInfo.label}
        </span>
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-1">Your {type}</p>
        <p className="text-5xl font-bold text-foreground">{value.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground mt-2">out of 10.00</p>
        {totalCredits !== undefined && totalCredits > 0 && (
          <p className="text-sm text-muted-foreground mt-1">
            Total Credits: {totalCredits}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
