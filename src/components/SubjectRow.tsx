import { Trash2, BookMarked } from "lucide-react";
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
  index: number;
  onUpdate: (id: string, field: keyof Subject, value: string) => void;
  onDelete: (id: string) => void;
  canDelete: boolean;
}

const SubjectRow = ({ subject, index, onUpdate, onDelete, canDelete }: SubjectRowProps) => {
  const getRowGradient = (idx: number) => {
    const gradients = [
      "from-blue-500/10 to-cyan-500/10",
      "from-green-500/10 to-teal-500/10",
      "from-purple-500/10 to-indigo-500/10",
      "from-orange-500/10 to-amber-500/10",
      "from-pink-500/10 to-rose-500/10",
      "from-emerald-500/10 to-green-500/10",
    ];
    return gradients[idx % gradients.length];
  };

  return (
    <div 
      className={`flex flex-col gap-3 p-4 rounded-xl bg-gradient-to-r ${getRowGradient(index)} border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg md:hover:scale-[1.02] animate-fade-in`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Mobile: Stacked layout */}
      <div className="flex items-center gap-2 md:hidden">
        <BookMarked className="h-4 w-4 text-accent animate-pulse shrink-0" />
        <span className="text-xs font-medium text-muted-foreground">Subject {index + 1}</span>
        <div className="ml-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(subject.id)}
            disabled={!canDelete}
            className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-30"
            aria-label="Remove subject"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Mobile: Subject name full width */}
      <div className="md:hidden">
        <Input
          type="text"
          placeholder="Subject Name (optional)"
          value={subject.name}
          onChange={(e) => onUpdate(subject.id, "name", e.target.value)}
          className="bg-card/80 border-input backdrop-blur-sm focus:ring-2 focus:ring-accent/50 transition-all duration-200 h-11"
        />
      </div>
      
      {/* Mobile: Credits and Grade side by side */}
      <div className="flex gap-2 md:hidden">
        <div className="flex-1">
          <label className="text-xs text-muted-foreground mb-1 block">Credits</label>
          <Input
            type="number"
            placeholder="0"
            min="0"
            max="10"
            value={subject.credits}
            onChange={(e) => onUpdate(subject.id, "credits", e.target.value)}
            className="bg-card/80 border-input backdrop-blur-sm focus:ring-2 focus:ring-accent/50 transition-all duration-200 h-11"
          />
        </div>
        <div className="flex-1">
          <label className="text-xs text-muted-foreground mb-1 block">Grade</label>
          <GradeSelect
            value={subject.grade}
            onChange={(value) => onUpdate(subject.id, "grade", value)}
          />
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden md:grid md:grid-cols-12 md:gap-4 md:items-center">
        <div className="col-span-5 flex items-center gap-2">
          <BookMarked className="h-4 w-4 text-accent animate-pulse shrink-0" />
          <Input
            type="text"
            placeholder="Subject Name (optional)"
            value={subject.name}
            onChange={(e) => onUpdate(subject.id, "name", e.target.value)}
            className="bg-card/80 border-input backdrop-blur-sm focus:ring-2 focus:ring-accent/50 transition-all duration-200"
          />
        </div>
        <div className="col-span-2">
          <Input
            type="number"
            placeholder="Credits"
            min="0"
            max="10"
            value={subject.credits}
            onChange={(e) => onUpdate(subject.id, "credits", e.target.value)}
            className="bg-card/80 border-input backdrop-blur-sm focus:ring-2 focus:ring-accent/50 transition-all duration-200"
          />
        </div>
        <div className="col-span-3">
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
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-30 transition-all duration-200 hover:rotate-12"
            aria-label="Remove subject"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubjectRow;
