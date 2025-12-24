import { Trash2, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface Semester {
  id: string;
  name: string;
  gpa: string;
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

  const getRowGradient = (idx: number) => {
    const gradients = [
      "from-pink-500/10 to-purple-500/10",
      "from-blue-500/10 to-cyan-500/10",
      "from-green-500/10 to-emerald-500/10",
      "from-orange-500/10 to-yellow-500/10",
      "from-violet-500/10 to-fuchsia-500/10",
      "from-rose-500/10 to-pink-500/10",
    ];
    return gradients[idx % gradients.length];
  };

  return (
    <div 
      className={`flex flex-col gap-3 p-4 rounded-xl bg-gradient-to-r ${getRowGradient(index)} border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg md:hover:scale-[1.02] animate-fade-in`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Mobile: Header with delete button */}
      <div className="flex items-center gap-2 md:hidden">
        <Sparkles className="h-4 w-4 text-primary animate-pulse shrink-0" />
        <span className="text-xs font-medium text-muted-foreground">Semester {index + 1}</span>
        <div className="ml-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(semester.id)}
            disabled={!canDelete}
            className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-30"
            aria-label="Remove semester"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Mobile: Stacked inputs */}
      <div className="flex flex-col gap-3 md:hidden">
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">Semester Name</label>
          <Input
            type="text"
            placeholder={`Semester ${index + 1}`}
            value={semester.name}
            onChange={(e) => onUpdate(semester.id, "name", e.target.value)}
            className="bg-card/80 border-input backdrop-blur-sm focus:ring-2 focus:ring-primary/50 transition-all duration-200 h-11"
          />
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">GPA (0-10)</label>
          <Input
            type="number"
            placeholder="Enter GPA"
            min="0"
            max="10"
            step="0.01"
            value={semester.gpa}
            onChange={(e) => handleGpaChange(e.target.value)}
            className="bg-card/80 border-input backdrop-blur-sm focus:ring-2 focus:ring-primary/50 transition-all duration-200 h-11 text-lg font-medium"
          />
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden md:grid md:grid-cols-12 md:gap-4 md:items-center">
        <div className="col-span-6 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary animate-pulse shrink-0" />
          <Input
            type="text"
            placeholder={`Semester ${index + 1}`}
            value={semester.name}
            onChange={(e) => onUpdate(semester.id, "name", e.target.value)}
            className="bg-card/80 border-input backdrop-blur-sm focus:ring-2 focus:ring-primary/50 transition-all duration-200"
          />
        </div>
        <div className="col-span-4">
          <Input
            type="number"
            placeholder="GPA (0-10)"
            min="0"
            max="10"
            step="0.01"
            value={semester.gpa}
            onChange={(e) => handleGpaChange(e.target.value)}
            className="bg-card/80 border-input backdrop-blur-sm focus:ring-2 focus:ring-primary/50 transition-all duration-200"
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(semester.id)}
            disabled={!canDelete}
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-30 transition-all duration-200 hover:rotate-12"
            aria-label="Remove semester"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SemesterRow;
