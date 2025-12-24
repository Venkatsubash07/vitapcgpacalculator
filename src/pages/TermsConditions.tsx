import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, Link2, RefreshCw, GraduationCap, CheckCircle, Info } from "lucide-react";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - VIT-AP GPA & CGPA Calculator</title>
        <meta
          name="description"
          content="Terms and Conditions for using the VIT-AP GPA & CGPA Calculator. Read about website usage, disclaimers, and limitations of liability."
        />
        <meta name="keywords" content="VIT-AP, terms and conditions, legal, GPA calculator terms" />
        <link rel="canonical" href="https://vitap-gpa-calculator.com/terms" />
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
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                Terms & Conditions
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Please read these terms and conditions carefully before using our website.
              </p>
              <p className="text-xs text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            {/* Agreement */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-primary-foreground" />
                  </span>
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  By accessing and using the VIT-AP GPA & CGPA Calculator website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use our website.
                </p>
              </CardContent>
            </Card>

            {/* Website Usage */}
            <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-accent to-accent/80 rounded-lg">
                    <Scale className="h-4 w-4 text-accent-foreground" />
                  </span>
                  Website Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  By accessing this website, you agree to follow these terms and use the website responsibly. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the calculator for personal academic purposes only</li>
                  <li>Not attempt to disrupt or interfere with the website's functionality</li>
                  <li>Not use automated systems to access the website</li>
                  <li>Not reproduce, duplicate, or copy content without permission</li>
                  <li>Not use the website for any unlawful purpose</li>
                </ul>
              </CardContent>
            </Card>

            {/* Accuracy Disclaimer */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                    <Info className="h-4 w-4 text-primary-foreground" />
                  </span>
                  Accuracy Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  While we strive to keep our GPA and CGPA calculations accurate and up-to-date with VIT University's grading system, <strong>we do not guarantee absolute correctness of the results</strong>.
                </p>
                <p>
                  The calculations provided by this website are for reference purposes only. For official academic records and grade calculations, please refer to VIT-AP University's official portal or contact your academic office.
                </p>
                <p>
                  We recommend verifying important calculations with official university sources before making any academic decisions.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="bg-gradient-to-br from-destructive/5 via-card to-card border-destructive/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-destructive">
                  <span className="p-1.5 bg-gradient-to-br from-destructive to-destructive/80 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-destructive-foreground" />
                  </span>
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Loss of profits or anticipated savings</li>
                  <li>Loss of data or academic information</li>
                  <li>Errors in GPA or CGPA calculations</li>
                  <li>Academic decisions made based on our calculations</li>
                  <li>Any damages arising from the use or inability to use our website</li>
                </ul>
                <p>
                  You use this website at your own risk. We provide the calculator "as is" without any warranties of any kind.
                </p>
              </CardContent>
            </Card>

            {/* External Links */}
            <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-accent to-accent/80 rounded-lg">
                    <Link2 className="h-4 w-4 text-accent-foreground" />
                  </span>
                  External Links
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  Our website may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <p>
                  We are not responsible for any content, accuracy, or opinions expressed on external websites. Visiting any linked websites is at your own risk.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                    <FileText className="h-4 w-4 text-primary-foreground" />
                  </span>
                  Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  The content, features, and functionality of this website are owned by us and are protected by copyright and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-accent to-accent/80 rounded-lg">
                    <RefreshCw className="h-4 w-4 text-accent-foreground" />
                  </span>
                  Changes to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  We reserve the right to modify or replace these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting on this page.
                </p>
                <p>
                  Your continued use of the website after any changes constitutes your acceptance of the new Terms and Conditions.
                </p>
                <p>
                  We encourage you to review these terms periodically for any updates.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at:{" "}
                  <a href="mailto:codewithsubash07@gmail.com" className="text-primary hover:underline">
                    codewithsubash07@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/" className="text-sm text-primary hover:underline">Home</Link>
              <Link to="/about" className="text-sm text-primary hover:underline">About Us</Link>
              <Link to="/contact" className="text-sm text-primary hover:underline">Contact Us</Link>
              <Link to="/privacy-policy" className="text-sm text-primary hover:underline">Privacy Policy</Link>
              <Link to="/faq" className="text-sm text-primary hover:underline">FAQ</Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsConditions;
