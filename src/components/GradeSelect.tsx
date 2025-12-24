import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GradeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const grades = [
  { label: "S", value: "10", description: "Outstanding" },
  { label: "A", value: "9", description: "Excellent" },
  { label: "B", value: "8", description: "Very Good" },
  { label: "C", value: "7", description: "Good" },
  { label: "D", value: "6", description: "Average" },
  { label: "E", value: "5", description: "Below Average" },
  { label: "F", value: "0", description: "Fail" },
];

const GradeSelect = ({ value, onChange }: GradeSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full bg-card/80 border-input h-11 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 transition-all duration-200">
        <SelectValue placeholder="Grade" />
      </SelectTrigger>
      <SelectContent className="bg-card border-border">
        {grades.map((grade) => (
          <SelectItem
            key={grade.value}
            value={grade.value}
            className="cursor-pointer py-2.5"
          >
            <span className="font-semibold">{grade.label}</span>
            <span className="text-muted-foreground ml-2 text-xs sm:text-sm">
              ({grade.value} pts)
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default GradeSelect;
