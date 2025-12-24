import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

interface FormulaTooltipProps {
  type: "GPA" | "CGPA";
}

const FormulaTooltip = ({ type }: FormulaTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className="inline-flex items-center justify-center p-1 rounded-full hover:bg-muted/50 transition-colors"
          aria-label={`${type} formula information`}
        >
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs bg-popover border-border p-4">
        {type === "GPA" ? (
          <div className="space-y-2">
            <p className="font-semibold text-foreground">GPA Formula</p>
            <p className="text-sm text-muted-foreground">
              GPA = Σ(Credit × Grade Point) / Σ(Credits)
            </p>
            <div className="text-xs text-muted-foreground mt-2">
              <p className="font-medium mb-1">Grade Points:</p>
              <p>S=10, A=9, B=8, C=7, D=6, E=5, F=0</p>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="font-semibold text-foreground">CGPA Formula</p>
            <p className="text-sm text-muted-foreground">
              CGPA = Σ(Semester GPA × Credits) / Σ(Credits)
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Enter each semester's GPA and total credits to calculate your
              cumulative GPA.
            </p>
          </div>
        )}
      </TooltipContent>
    </Tooltip>
  );
};

export default FormulaTooltip;
