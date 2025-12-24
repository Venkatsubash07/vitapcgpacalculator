import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Sparkles } from "lucide-react";

const grades = [
  { grade: "S", points: 10, description: "Outstanding", color: "from-yellow-500 to-orange-500" },
  { grade: "A", points: 9, description: "Excellent", color: "from-green-500 to-emerald-500" },
  { grade: "B", points: 8, description: "Very Good", color: "from-blue-500 to-cyan-500" },
  { grade: "C", points: 7, description: "Good", color: "from-purple-500 to-violet-500" },
  { grade: "D", points: 6, description: "Average", color: "from-pink-500 to-rose-500" },
  { grade: "E", points: 5, description: "Below Average", color: "from-slate-500 to-gray-500" },
  { grade: "F", points: 0, description: "Fail", color: "from-red-500 to-rose-600" },
];

const GradeReference = () => {
  return (
    <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-green-500/5 to-blue-500/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl" />
      
      <CardHeader className="pb-3 relative">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-md">
            <Info className="h-4 w-4 text-primary-foreground" />
          </div>
          <CardTitle className="text-lg font-semibold text-foreground">
            Grade Reference
          </CardTitle>
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
        </div>
      </CardHeader>
      <CardContent className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
          {grades.map((item, index) => (
            <div
              key={item.grade}
              className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-card to-muted/30 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200`}>
                {item.grade}
              </span>
              <span className="text-lg font-semibold text-foreground">
                {item.points}
              </span>
              <span className="text-xs text-muted-foreground text-center">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GradeReference;
