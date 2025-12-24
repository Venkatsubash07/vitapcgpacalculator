import { useState, useCallback } from "react";
import { Plus, RotateCcw, Calculator } from "lucide-react";
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
      title: "GPA Calculated!",
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
    <Card className="bg-card border-border shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl font-semibold text-foreground">
              GPA Calculator
            </CardTitle>
            <FormulaTooltip type="GPA" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Calculate your semester GPA by adding subjects with their credits and
          grades
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Column Headers */}
        <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground px-1">
          <div className="col-span-5">Subject Name</div>
          <div className="col-span-2">Credits</div>
          <div className="col-span-3">Grade</div>
          <div className="col-span-2 text-center">Action</div>
        </div>

        {/* Subject Rows */}
        <div className="space-y-3">
          {subjects.map((subject) => (
            <SubjectRow
              key={subject.id}
              subject={subject}
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
          className="w-full border-dashed border-2 hover:border-primary hover:bg-primary/5"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Subject
        </Button>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            onClick={calculateGPA}
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Calculator className="h-4 w-4 mr-2" />
            Calculate GPA
          </Button>
          <Button
            variant="outline"
            onClick={resetCalculator}
            className="flex-1"
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
