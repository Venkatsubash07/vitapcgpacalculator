import { useState, useCallback } from "react";
import { Plus, RotateCcw, Calculator } from "lucide-react";
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
  credits: "",
});

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState<Semester[]>([
    createEmptySemester(),
    createEmptySemester(),
  ]);
  const [result, setResult] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number>(0);

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
    const validSemesters = semesters.filter(
      (s) => s.gpa !== "" && s.credits !== ""
    );

    if (validSemesters.length === 0) {
      toast({
        title: "No valid semesters",
        description: "Please add at least one semester with GPA and credits.",
        variant: "destructive",
      });
      return;
    }

    let totalCreditsSum = 0;
    let totalWeightedGPA = 0;

    for (const semester of validSemesters) {
      const gpa = parseFloat(semester.gpa);
      const credits = parseFloat(semester.credits);

      if (gpa < 0 || gpa > 10) {
        toast({
          title: "Invalid GPA",
          description: "GPA must be between 0 and 10.",
          variant: "destructive",
        });
        return;
      }

      if (credits < 0) {
        toast({
          title: "Invalid credits",
          description: "Credits cannot be negative.",
          variant: "destructive",
        });
        return;
      }

      totalCreditsSum += credits;
      totalWeightedGPA += gpa * credits;
    }

    if (totalCreditsSum === 0) {
      toast({
        title: "Invalid credits",
        description: "Total credits cannot be zero.",
        variant: "destructive",
      });
      return;
    }

    const cgpa = totalWeightedGPA / totalCreditsSum;
    setResult(cgpa);
    setTotalCredits(totalCreditsSum);

    toast({
      title: "CGPA Calculated!",
      description: `Your CGPA is ${cgpa.toFixed(2)} out of 10.00`,
    });
  }, [semesters]);

  const resetCalculator = useCallback(() => {
    setSemesters([createEmptySemester(), createEmptySemester()]);
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
              CGPA Calculator
            </CardTitle>
            <FormulaTooltip type="CGPA" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Calculate your cumulative GPA by adding semester-wise GPA and credits
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Column Headers */}
        <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground px-1">
          <div className="col-span-4">Semester</div>
          <div className="col-span-3">GPA (0-10)</div>
          <div className="col-span-3">Credits</div>
          <div className="col-span-2 text-center">Action</div>
        </div>

        {/* Semester Rows */}
        <div className="space-y-3">
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
          className="w-full border-dashed border-2 hover:border-primary hover:bg-primary/5"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Semester
        </Button>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            onClick={calculateCGPA}
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Calculator className="h-4 w-4 mr-2" />
            Calculate CGPA
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
        <ResultCard value={result} type="CGPA" totalCredits={totalCredits} />
      </CardContent>
    </Card>
  );
};

export default CGPACalculator;
