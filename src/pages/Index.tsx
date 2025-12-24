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

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 container max-w-5xl mx-auto px-4 py-8">
          <div className="space-y-6">
            {/* Grade Reference Card */}
            <GradeReference />

            {/* Calculator Tabs */}
            <Tabs defaultValue="gpa" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-muted/50 p-1 h-auto">
                <TabsTrigger
                  value="gpa"
                  className="flex items-center gap-2 py-3 data-[state=active]:bg-card data-[state=active]:shadow-sm"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Semester GPA</span>
                </TabsTrigger>
                <TabsTrigger
                  value="cgpa"
                  className="flex items-center gap-2 py-3 data-[state=active]:bg-card data-[state=active]:shadow-sm"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Cumulative CGPA</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="gpa" className="mt-6">
                <GPACalculator />
              </TabsContent>

              <TabsContent value="cgpa" className="mt-6">
                <CGPACalculator />
              </TabsContent>
            </Tabs>

            {/* Instructions */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                How to Use
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h3 className="font-medium text-foreground mb-2">
                    GPA Calculator
                  </h3>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Enter subject name (optional)</li>
                    <li>Enter the number of credits</li>
                    <li>Select the grade obtained</li>
                    <li>Add more subjects as needed</li>
                    <li>Click "Calculate GPA"</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">
                    CGPA Calculator
                  </h3>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Enter semester name (optional)</li>
                    <li>Enter the semester GPA (0-10)</li>
                    <li>Enter total credits for that semester</li>
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
