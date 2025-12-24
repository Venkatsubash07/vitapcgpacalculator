import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart, Shield, Sparkles, GraduationCap, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - VIT-AP GPA & CGPA Calculator</title>
        <meta
          name="description"
          content="Learn about the VIT-AP GPA Calculator - built by students for students. We provide free, accurate, and easy-to-use academic tools for VIT University students."
        />
        <meta name="keywords" content="VIT-AP, about us, GPA calculator team, student tools, VIT Andhra Pradesh" />
        <link rel="canonical" href="https://vitap-gpa-calculator.com/about" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-2 sm:left-10 w-32 sm:w-72 h-32 sm:h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-40 sm:w-96 h-40 sm:h-96 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Header */}
        <header className="w-full py-4 sm:py-6 px-3 sm:px-4 border-b border-border bg-gradient-to-r from-card via-card to-primary/5 relative">
          <div className="container max-w-5xl mx-auto">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-lg sm:text-xl font-bold">VIT-AP GPA Calculator</span>
            </Link>
          </div>
        </header>

        <main className="flex-1 container max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-10 relative z-10">
          <div className="space-y-6 sm:space-y-8">
            {/* Page Title */}
            <div className="text-center space-y-3">
              <h1 className="text-2xl sm:text-4xl font-bold text-foreground flex items-center justify-center gap-2">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                About Us
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Built by students, for students - helping VIT-AP University students calculate their academic performance with ease.
              </p>
            </div>

            {/* Who We Are */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                    <Users className="h-4 w-4 text-primary-foreground" />
                  </span>
                  Who We Are
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  We are a group of passionate students from VIT-AP University who built this tool to help fellow students calculate their academic performance easily and accurately. Understanding the challenges students face when calculating GPA and CGPA, we decided to create a simple, user-friendly solution.
                </p>
                <p>
                  Our team consists of engineering students who are passionate about creating useful tools that make student life easier.
                </p>
              </CardContent>
            </Card>

            {/* Why This Site Exists */}
            <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-accent to-accent/80 rounded-lg">
                    <Target className="h-4 w-4 text-accent-foreground" />
                  </span>
                  Why This Site Exists
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  Many students find GPA and CGPA calculation confusing and time-consuming. Manual calculations are prone to errors, and not everyone has access to the university portal all the time. This website was created to simplify the process and save time for students.
                </p>
                <p>
                  We wanted to provide a free, accessible tool that any VIT student can use anytime, anywhere, without the need for complex spreadsheets or calculations.
                </p>
              </CardContent>
            </Card>

            {/* What Makes Us Different */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                    <Sparkles className="h-4 w-4 text-primary-foreground" />
                  </span>
                  What Makes Us Different
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span><strong>Designed specifically for VIT-AP:</strong> Our calculator uses the exact grading system followed by VIT University.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span><strong>Simple and accurate:</strong> No complex interfaces, just enter your credits and grades to get instant results.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span><strong>Mobile-friendly:</strong> Access the calculator on any device - phone, tablet, or computer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span><strong>100% Free:</strong> No hidden charges, no premium features, completely free for all students.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span><strong>No data storage:</strong> We don't save any of your academic data - your privacy is protected.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Our Mission */}
            <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-accent to-accent/80 rounded-lg">
                    <Heart className="h-4 w-4 text-accent-foreground" />
                  </span>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground">
                <p>
                  Our mission is to provide free, accurate, and easy-to-use academic tools for students. We believe that every student deserves access to simple tools that help them track and improve their academic performance without any barriers.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-gradient-to-br from-destructive/5 via-card to-card border-destructive/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-destructive">
                  <span className="p-1.5 bg-gradient-to-br from-destructive to-destructive/80 rounded-lg">
                    <Shield className="h-4 w-4 text-destructive-foreground" />
                  </span>
                  Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground">
                <p className="font-medium">
                  This website is not officially affiliated with VIT-AP University or Vellore Institute of Technology. This is an independent student project created to help fellow students. For official academic records and calculations, please refer to the university's official portal.
                </p>
              </CardContent>
            </Card>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/" className="text-sm text-primary hover:underline">Home</Link>
              <Link to="/contact" className="text-sm text-primary hover:underline">Contact Us</Link>
              <Link to="/privacy-policy" className="text-sm text-primary hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-primary hover:underline">Terms & Conditions</Link>
              <Link to="/faq" className="text-sm text-primary hover:underline">FAQ</Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
