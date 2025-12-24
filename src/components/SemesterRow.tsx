import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface Semester {
  id: string;
  name: string;
  gpa: string;
  credits: string;
}

interface SemesterRowProps {
  semester: Semester;
  index: number;
  onUpdate: (id: string, field: keyof Semester, value: string) => void;
  onDelete: (id: string) => void;
  canDelete: boolean;
}

const SemesterRow = ({
  semester,
  index,
  onUpdate,
  onDelete,
  canDelete,
}: SemesterRowProps) => {
  const handleGpaChange = (value: string) => {
    const numValue = parseFloat(value);
    if (value === "" || (numValue >= 0 && numValue <= 10)) {
      onUpdate(semester.id, "gpa", value);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-2 md:gap-4 items-center animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="col-span-12 md:col-span-4">
        <Input
          type="text"
          placeholder={`Semester ${index + 1}`}
          value={semester.name}
          onChange={(e) => onUpdate(semester.id, "name", e.target.value)}
          className="bg-card border-input"
        />
      </div>
      <div className="col-span-5 md:col-span-3">
        <Input
          type="number"
          placeholder="GPA"
          min="0"
          max="10"
          step="0.01"
          value={semester.gpa}
          onChange={(e) => handleGpaChange(e.target.value)}
          className="bg-card border-input"
        />
      </div>
      <div className="col-span-5 md:col-span-3">
        <Input
          type="number"
          placeholder="Credits"
          min="0"
          value={semester.credits}
          onChange={(e) => onUpdate(semester.id, "credits", e.target.value)}
          className="bg-card border-input"
        />
      </div>
      <div className="col-span-2 flex justify-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(semester.id)}
          disabled={!canDelete}
          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-30"
          aria-label="Remove semester"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SemesterRow;
