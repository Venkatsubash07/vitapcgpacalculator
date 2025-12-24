import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle, Sparkles } from "lucide-react";

interface FormulaTooltipProps {
  type: "GPA" | "CGPA";
}

const FormulaTooltip = ({ type }: FormulaTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className="inline-flex items-center justify-center p-1 rounded-full hover:bg-primary/10 transition-all duration-200 hover:scale-110 group"
          aria-label={`${type} formula information`}
        >
          <HelpCircle className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs bg-gradient-to-br from-popover to-popover/95 border-border p-4 shadow-xl">
        {type === "GPA" ? (
          <div className="space-y-2">
            <p className="font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              GPA Formula
            </p>
            <p className="text-sm text-muted-foreground bg-muted/30 p-2 rounded-lg font-mono">
              GPA = Σ(Credit × Grade Point) / Σ(Credits)
            </p>
            <div className="text-xs text-muted-foreground mt-2">
              <p className="font-medium mb-1">Grade Points:</p>
              <p className="bg-muted/30 p-2 rounded-lg">S=10, A=9, B=8, C=7, D=6, E=5, F=0</p>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              CGPA Formula
            </p>
            <p className="text-sm text-muted-foreground bg-muted/30 p-2 rounded-lg font-mono">
              CGPA = Σ(Semester GPA) / Number of Semesters
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Simply enter each semester's GPA to calculate your cumulative average.
            </p>
          </div>
        )}
      </TooltipContent>
    </Tooltip>
  );
};

export default FormulaTooltip;
