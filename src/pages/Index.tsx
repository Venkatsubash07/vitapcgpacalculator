import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GPACalculator from "@/components/GPACalculator";
import CGPACalculator from "@/components/CGPACalculator";
import GradeReference from "@/components/GradeReference";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>VIT-AP GPA & CGPA Calculator | Calculate Your Grades</title>
        <meta
          name="description"
          content="Free GPA and CGPA calculator for VIT-AP University students. Calculate your semester GPA and cumulative CGPA with accurate grade point formulas."
        />
        <meta
          name="keywords"
          content="VIT-AP, GPA calculator, CGPA calculator, grade calculator, VIT Andhra Pradesh, semester GPA"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-full blur-3xl" />
        </div>

        <Header />

        <main className="flex-1 container max-w-5xl mx-auto px-4 py-8 relative z-10">
          <div className="space-y-6">
            {/* Grade Reference Card */}
            <GradeReference />

            {/* Calculator Tabs */}
            <Tabs defaultValue="gpa" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 p-1 h-auto rounded-xl border border-border/50 shadow-lg">
                <TabsTrigger
                  value="gpa"
                  className="flex items-center gap-2 py-3 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-card data-[state=active]:to-accent/10 data-[state=active]:shadow-md transition-all duration-300"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Semester GPA</span>
                </TabsTrigger>
                <TabsTrigger
                  value="cgpa"
                  className="flex items-center gap-2 py-3 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-card data-[state=active]:to-primary/10 data-[state=active]:shadow-md transition-all duration-300"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Cumulative CGPA</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="gpa" className="mt-6 animate-fade-in">
                <GPACalculator />
              </TabsContent>

              <TabsContent value="cgpa" className="mt-6 animate-fade-in">
                <CGPACalculator />
              </TabsContent>
            </Tabs>

            {/* Instructions */}
            <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-xl p-6 border border-border shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2 relative">
                <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                  <BookOpen className="h-4 w-4 text-primary-foreground" />
                </span>
                How to Use
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground relative">
                <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                  <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent-foreground">1</span>
                    GPA Calculator
                  </h3>
                  <ol className="list-decimal list-inside space-y-1 ml-8">
                    <li>Enter subject name (optional)</li>
                    <li>Enter the number of credits</li>
                    <li>Select the grade obtained</li>
                    <li>Add more subjects as needed</li>
                    <li>Click "Calculate GPA"</li>
                  </ol>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary-foreground">2</span>
                    CGPA Calculator
                  </h3>
                  <ol className="list-decimal list-inside space-y-1 ml-8">
                    <li>Enter semester name (optional)</li>
                    <li>Enter the semester GPA (0-10)</li>
                    <li>Add more semesters as needed</li>
                    <li>Click "Calculate CGPA"</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
