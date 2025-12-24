import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

const grades = [
  { grade: "S", points: 10, description: "Outstanding" },
  { grade: "A", points: 9, description: "Excellent" },
  { grade: "B", points: 8, description: "Very Good" },
  { grade: "C", points: 7, description: "Good" },
  { grade: "D", points: 6, description: "Average" },
  { grade: "E", points: 5, description: "Below Average" },
  { grade: "F", points: 0, description: "Fail" },
];

const GradeReference = () => {
  return (
    <Card className="bg-card border-border shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg font-semibold text-foreground">
            Grade Reference
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
          {grades.map((item) => (
            <div
              key={item.grade}
              className="flex flex-col items-center p-3 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-colors"
            >
              <span className="text-2xl font-bold text-primary">
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
