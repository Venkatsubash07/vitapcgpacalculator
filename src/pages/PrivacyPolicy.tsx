import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Cookie, Globe, UserCheck, GraduationCap, Lock, FileText } from "lucide-react";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - VIT-AP GPA & CGPA Calculator</title>
        <meta
          name="description"
          content="Privacy Policy for VIT-AP GPA Calculator. Learn how we handle your data and protect your privacy while using our free GPA and CGPA calculation tool."
        />
        <meta name="keywords" content="VIT-AP, privacy policy, data protection, GPA calculator privacy" />
        <link rel="canonical" href="https://vitap-gpa-calculator.com/privacy-policy" />
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
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                Privacy Policy
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we handle your information.
              </p>
              <p className="text-xs text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            {/* Introduction */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                    <FileText className="h-4 w-4 text-primary-foreground" />
                  </span>
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  Welcome to VIT-AP GPA & CGPA Calculator ("we," "our," or "us"). We are committed to protecting your privacy and being transparent about our data practices.
                </p>
                <p>
                  This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data when you use our website.
                </p>
              </CardContent>
            </Card>

            {/* Information Collection */}
            <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-accent to-accent/80 rounded-lg">
                    <Eye className="h-4 w-4 text-accent-foreground" />
                  </span>
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  <strong>We do not collect or store any of your personal academic data.</strong> All GPA and CGPA calculations are performed locally in your browser and are not transmitted to any server.
                </p>
                <p>
                  However, we may collect certain non-personal information automatically, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on the site</li>
                  <li>Referring website addresses</li>
                  <li>General geographic location (country/city level)</li>
                </ul>
                <p>
                  This information is collected through cookies and analytics tools and is used solely to improve our website and user experience.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                    <Cookie className="h-4 w-4 text-primary-foreground" />
                  </span>
                  Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  <strong>This website does not collect your personal data or use tracking cookies.</strong> We respect your privacy and have designed our calculator to work without storing any of your academic information.
                </p>
                <p>
                  However, third-party services we use (such as Google AdSense and Google Analytics) may use cookies to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Display personalized advertisements</li>
                  <li>Remember your preferences</li>
                </ul>
                <p>
                  You can control cookie settings through your browser preferences.
                </p>
              </CardContent>
            </Card>

            {/* Google AdSense */}
            <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-accent to-accent/80 rounded-lg">
                    <Globe className="h-4 w-4 text-accent-foreground" />
                  </span>
                  Google AdSense & Third-Party Services
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  We use Google AdSense to display advertisements on our website. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to our website and other websites on the internet.
                </p>
                <p>
                  Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
                </p>
                <p>
                  You may opt out of personalized advertising by visiting{" "}
                  <a 
                    href="https://www.google.com/settings/ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Ads Settings
                  </a>.
                </p>
                <p>
                  We also use Google Analytics to understand how visitors interact with our website. This helps us improve the user experience.
                </p>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                    <Lock className="h-4 w-4 text-primary-foreground" />
                  </span>
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  We take reasonable measures to protect any information collected through our website. Since we do not store your academic data, there is no risk of your GPA or CGPA information being compromised.
                </p>
                <p>
                  All calculations are performed client-side (in your browser) and are not sent to our servers.
                </p>
              </CardContent>
            </Card>

            {/* User Consent */}
            <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-accent to-accent/80 rounded-lg">
                    <UserCheck className="h-4 w-4 text-accent-foreground" />
                  </span>
                  Your Consent
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-4">
                <p>
                  By using our website, you consent to our Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use our website.
                </p>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  Contact Us About Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:{" "}
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

export default PrivacyPolicy;
