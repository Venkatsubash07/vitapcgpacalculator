import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GPACalculator from "@/components/GPACalculator";
import CGPACalculator from "@/components/CGPACalculator";
import GradeReference from "@/components/GradeReference";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, HelpCircle, ChevronRight, Calculator, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>VIT-AP GPA & CGPA Calculator for Students | Free Online Tool</title>
        <meta
          name="description"
          content="Free GPA and CGPA calculator for VIT-AP University students. Calculate your semester GPA and cumulative CGPA accurately based on VIT grading rules. Simple, fast, and mobile-friendly."
        />
        <meta
          name="keywords"
          content="VIT-AP, GPA calculator, CGPA calculator, grade calculator, VIT Andhra Pradesh, semester GPA, VIT grading system, B.Tech GPA, M.Tech GPA"
        />
        <link rel="canonical" href="https://vitap-gpa-calculator.com/" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-2 sm:left-10 w-32 sm:w-72 h-32 sm:h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-40 sm:w-96 h-40 sm:h-96 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-full blur-3xl" />
        </div>

        <Header />

        <main className="flex-1 container max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-8 relative z-10">
          <div className="space-y-4 sm:space-y-6">
            {/* Hero Section */}
            <section className="text-center space-y-3 sm:space-y-4">
              <h1 className="text-xl sm:text-3xl font-bold text-foreground">
                VIT-AP GPA & CGPA Calculator for Students
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                This website helps VIT-AP students calculate their GPA and CGPA accurately based on university grading rules. Simply enter your subject credits and grades to get instant results.
              </p>
            </section>

            {/* Grade Reference Card */}
            <GradeReference />

            {/* Calculator Tabs */}
            <Tabs defaultValue="gpa" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 p-1 h-auto rounded-xl border border-border/50 shadow-lg">
                <TabsTrigger
                  value="gpa"
                  className="flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-card data-[state=active]:to-accent/10 data-[state=active]:shadow-md transition-all duration-300"
                >
                  <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>Semester GPA</span>
                </TabsTrigger>
                <TabsTrigger
                  value="cgpa"
                  className="flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-card data-[state=active]:to-primary/10 data-[state=active]:shadow-md transition-all duration-300"
                >
                  <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>Cumulative CGPA</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="gpa" className="mt-4 sm:mt-6 animate-fade-in">
                <GPACalculator />
              </TabsContent>

              <TabsContent value="cgpa" className="mt-4 sm:mt-6 animate-fade-in">
                <CGPACalculator />
              </TabsContent>
            </Tabs>

            {/* How GPA & CGPA are Calculated */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardContent className="p-4 sm:p-6 space-y-4">
                <h2 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  How GPA & CGPA are Calculated
                </h2>
                <div className="text-sm text-muted-foreground space-y-3">
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="font-medium text-foreground mb-1">GPA Formula:</p>
                    <code className="text-xs sm:text-sm">GPA = (Sum of Credit × Grade Point) / Total Credits</code>
                  </div>
                  <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                    <p className="font-medium text-foreground mb-1">CGPA Formula:</p>
                    <code className="text-xs sm:text-sm">CGPA = Average of all Semester GPAs</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Who This Tool Is For */}
            <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Who This Tool Is For
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {["VIT-AP B.Tech Students", "M.Tech Students", "MBA Students", "All VIT Campus Students"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Preview */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                  <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-foreground">Is this calculator official?</p>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">No, this is an independent student project, not affiliated with VIT University.</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-foreground">Can I calculate CGPA for all semesters?</p>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">Yes! Enter all your semester GPAs to get your cumulative CGPA.</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-foreground">Is my data saved?</p>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">No, all calculations are done locally. We don't store any of your data.</p>
                  </div>
                </div>
                <Link to="/faq" className="inline-flex items-center gap-1 text-primary text-sm mt-4 hover:underline">
                  View all FAQs <ChevronRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Internal Links */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link to="/about" className="text-sm text-primary hover:underline">About Us</Link>
              <Link to="/contact" className="text-sm text-primary hover:underline">Contact Us</Link>
              <Link to="/privacy-policy" className="text-sm text-primary hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-primary hover:underline">Terms & Conditions</Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
