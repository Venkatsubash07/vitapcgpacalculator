import { useState, useCallback } from "react";
import { Plus, RotateCcw, Calculator, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SemesterRow, { Semester } from "./SemesterRow";
import ResultCard from "./ResultCard";
import FormulaTooltip from "./FormulaTooltip";
import { toast } from "@/hooks/use-toast";

const generateId = () => Math.random().toString(36).substr(2, 9);

const createEmptySemester = (): Semester => ({
  id: generateId(),
  name: "",
  gpa: "",
});

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState<Semester[]>([
    createEmptySemester(),
    createEmptySemester(),
  ]);
  const [result, setResult] = useState<number | null>(null);

  const addSemester = useCallback(() => {
    setSemesters((prev) => [...prev, createEmptySemester()]);
  }, []);

  const removeSemester = useCallback((id: string) => {
    setSemesters((prev) => prev.filter((s) => s.id !== id));
    setResult(null);
  }, []);

  const updateSemester = useCallback(
    (id: string, field: keyof Semester, value: string) => {
      setSemesters((prev) =>
        prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
      );
      setResult(null);
    },
    []
  );

  const calculateCGPA = useCallback(() => {
    const validSemesters = semesters.filter((s) => s.gpa !== "");

    if (validSemesters.length === 0) {
      toast({
        title: "No valid semesters",
        description: "Please add at least one semester with GPA.",
        variant: "destructive",
      });
      return;
    }

    let totalGPA = 0;

    for (const semester of validSemesters) {
      const gpa = parseFloat(semester.gpa);

      if (gpa < 0 || gpa > 10) {
        toast({
          title: "Invalid GPA",
          description: "GPA must be between 0 and 10.",
          variant: "destructive",
        });
        return;
      }

      totalGPA += gpa;
    }

    const cgpa = totalGPA / validSemesters.length;
    setResult(cgpa);

    toast({
      title: "🎉 CGPA Calculated!",
      description: `Your CGPA is ${cgpa.toFixed(2)} out of 10.00`,
    });
  }, [semesters]);

  const resetCalculator = useCallback(() => {
    setSemesters([createEmptySemester(), createEmptySemester()]);
    setResult(null);
    toast({
      title: "Calculator Reset",
      description: "All fields have been cleared.",
    });
  }, []);

  return (
    <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
      
      <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 sm:p-2 bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-lg">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground animate-pulse" />
            </div>
            <CardTitle className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              CGPA Calculator
            </CardTitle>
            <FormulaTooltip type="CGPA" />
          </div>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Calculate your cumulative GPA by adding semester-wise GPA (simple average)
        </p>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-6 relative">
        {/* Column Headers - Desktop only */}
        <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground px-1">
          <div className="col-span-6 flex items-center gap-2">
            <Sparkles className="h-3 w-3" />
            Semester
          </div>
          <div className="col-span-4">GPA (0-10)</div>
          <div className="col-span-2 text-center">Action</div>
        </div>

        {/* Semester Rows */}
        <div className="space-y-2 sm:space-y-3">
          {semesters.map((semester, index) => (
            <SemesterRow
              key={semester.id}
              semester={semester}
              index={index}
              onUpdate={updateSemester}
              onDelete={removeSemester}
              canDelete={semesters.length > 1}
            />
          ))}
        </div>

        {/* Add Semester Button */}
        <Button
          variant="outline"
          onClick={addSemester}
          className="w-full border-dashed border-2 hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 group h-10 sm:h-11 text-sm"
        >
          <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
          Add Semester
        </Button>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2">
          <Button
            onClick={calculateCGPA}
            className="flex-1 h-11 sm:h-12 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98] sm:hover:scale-[1.02] text-sm sm:text-base font-medium"
          >
            <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Calculate CGPA
          </Button>
          <Button
            variant="outline"
            onClick={resetCalculator}
            className="flex-1 h-11 sm:h-12 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 transition-all duration-300 text-sm sm:text-base"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        {/* Result */}
        <ResultCard value={result} type="CGPA" />
      </CardContent>
    </Card>
  );
};

export default CGPACalculator;
