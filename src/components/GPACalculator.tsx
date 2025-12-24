import { useState, useCallback } from "react";
import { Plus, RotateCcw, Calculator, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SubjectRow, { Subject } from "./SubjectRow";
import ResultCard from "./ResultCard";
import FormulaTooltip from "./FormulaTooltip";
import { toast } from "@/hooks/use-toast";

const generateId = () => Math.random().toString(36).substr(2, 9);

const createEmptySubject = (): Subject => ({
  id: generateId(),
  name: "",
  credits: "",
  grade: "",
});

const GPACalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    createEmptySubject(),
    createEmptySubject(),
    createEmptySubject(),
  ]);
  const [result, setResult] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number>(0);

  const addSubject = useCallback(() => {
    setSubjects((prev) => [...prev, createEmptySubject()]);
  }, []);

  const removeSubject = useCallback((id: string) => {
    setSubjects((prev) => prev.filter((s) => s.id !== id));
    setResult(null);
  }, []);

  const updateSubject = useCallback(
    (id: string, field: keyof Subject, value: string) => {
      setSubjects((prev) =>
        prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
      );
      setResult(null);
    },
    []
  );

  const calculateGPA = useCallback(() => {
    const validSubjects = subjects.filter(
      (s) => s.credits !== "" && s.grade !== ""
    );

    if (validSubjects.length === 0) {
      toast({
        title: "No valid subjects",
        description: "Please add at least one subject with credits and grade.",
        variant: "destructive",
      });
      return;
    }

    let totalCreditsSum = 0;
    let totalPoints = 0;

    for (const subject of validSubjects) {
      const credits = parseFloat(subject.credits);
      const gradePoints = parseFloat(subject.grade);

      if (credits < 0) {
        toast({
          title: "Invalid credits",
          description: "Credits cannot be negative.",
          variant: "destructive",
        });
        return;
      }

      totalCreditsSum += credits;
      totalPoints += credits * gradePoints;
    }

    if (totalCreditsSum === 0) {
      toast({
        title: "Invalid credits",
        description: "Total credits cannot be zero.",
        variant: "destructive",
      });
      return;
    }

    const gpa = totalPoints / totalCreditsSum;
    setResult(gpa);
    setTotalCredits(totalCreditsSum);

    toast({
      title: "🎉 GPA Calculated!",
      description: `Your GPA is ${gpa.toFixed(2)} out of 10.00`,
    });
  }, [subjects]);

  const resetCalculator = useCallback(() => {
    setSubjects([createEmptySubject(), createEmptySubject(), createEmptySubject()]);
    setResult(null);
    setTotalCredits(0);
    toast({
      title: "Calculator Reset",
      description: "All fields have been cleared.",
    });
  }, []);

  return (
    <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-teal-500/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl" />
      
      <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 sm:p-2 bg-gradient-to-br from-accent to-accent/80 rounded-lg shadow-lg">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground animate-pulse" />
            </div>
            <CardTitle className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              GPA Calculator
            </CardTitle>
            <FormulaTooltip type="GPA" />
          </div>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Calculate your semester GPA by adding subjects with their credits and grades
        </p>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-6 relative">
        {/* Column Headers - Desktop only */}
        <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground px-1">
          <div className="col-span-5">Subject Name</div>
          <div className="col-span-2">Credits</div>
          <div className="col-span-3">Grade</div>
          <div className="col-span-2 text-center">Action</div>
        </div>

        {/* Subject Rows */}
        <div className="space-y-2 sm:space-y-3">
          {subjects.map((subject, index) => (
            <SubjectRow
              key={subject.id}
              subject={subject}
              index={index}
              onUpdate={updateSubject}
              onDelete={removeSubject}
              canDelete={subjects.length > 1}
            />
          ))}
        </div>

        {/* Add Subject Button */}
        <Button
          variant="outline"
          onClick={addSubject}
          className="w-full border-dashed border-2 hover:border-accent hover:bg-gradient-to-r hover:from-accent/10 hover:to-primary/10 transition-all duration-300 group h-10 sm:h-11 text-sm"
        >
          <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
          Add Subject
        </Button>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2">
          <Button
            onClick={calculateGPA}
            className="flex-1 h-11 sm:h-12 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent/70 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98] sm:hover:scale-[1.02] text-sm sm:text-base font-medium"
          >
            <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Calculate GPA
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
        <ResultCard value={result} type="GPA" totalCredits={totalCredits} />
      </CardContent>
    </Card>
  );
};

export default GPACalculator;
