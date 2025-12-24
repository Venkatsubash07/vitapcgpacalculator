import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GradeSelect from "./GradeSelect";

export interface Subject {
  id: string;
  name: string;
  credits: string;
  grade: string;
}

interface SubjectRowProps {
  subject: Subject;
  onUpdate: (id: string, field: keyof Subject, value: string) => void;
  onDelete: (id: string) => void;
  canDelete: boolean;
}

const SubjectRow = ({ subject, onUpdate, onDelete, canDelete }: SubjectRowProps) => {
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-4 items-center animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="col-span-12 md:col-span-5">
        <Input
          type="text"
          placeholder="Subject Name (optional)"
          value={subject.name}
          onChange={(e) => onUpdate(subject.id, "name", e.target.value)}
          className="bg-card border-input"
        />
      </div>
      <div className="col-span-5 md:col-span-2">
        <Input
          type="number"
          placeholder="Credits"
          min="0"
          max="10"
          value={subject.credits}
          onChange={(e) => onUpdate(subject.id, "credits", e.target.value)}
          className="bg-card border-input"
        />
      </div>
      <div className="col-span-5 md:col-span-3">
        <GradeSelect
          value={subject.grade}
          onChange={(value) => onUpdate(subject.id, "grade", value)}
        />
      </div>
      <div className="col-span-2 flex justify-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(subject.id)}
          disabled={!canDelete}
          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-30"
          aria-label="Remove subject"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SubjectRow;
