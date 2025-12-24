import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Clock, GraduationCap, Bug, Lightbulb, Send, Heart } from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Feedback from VIT-AP GPA Calculator");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:codewithsubash07@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening Email Client",
      description: "Your default email application will open to send the message."
    });

    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - VIT-AP GPA & CGPA Calculator</title>
        <meta
          name="description"
          content="Contact us for bug reports, suggestions, or feedback about the VIT-AP GPA Calculator. We usually respond within 24-48 hours."
        />
        <meta name="keywords" content="VIT-AP, contact, support, feedback, bug report, GPA calculator" />
        <link rel="canonical" href="https://vitap-gpa-calculator.com/contact" />
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
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                Contact Us
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Have questions, suggestions, or found a bug? We'd love to hear from you!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="space-y-6">
                {/* Email Contacts */}
                <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                        <Mail className="h-4 w-4 text-primary-foreground" />
                      </span>
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Primary Contact:</p>
                      <a 
                        href="mailto:codewithsubash07@gmail.com" 
                        className="text-primary hover:underline font-medium"
                      >
                        codewithsubash07@gmail.com
                      </a>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Alternative Contact:</p>
                      <a 
                        href="mailto:vuduthavenkatsubhash10@gmail.com" 
                        className="text-primary hover:underline font-medium"
                      >
                        vuduthavenkatsubhash10@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Reasons to Contact */}
                <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <span className="p-1.5 bg-gradient-to-br from-accent to-accent/80 rounded-lg">
                        <MessageSquare className="h-4 w-4 text-accent-foreground" />
                      </span>
                      Reasons to Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <Bug className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                        <span><strong>Bug Reports:</strong> Found something not working? Let us know!</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span><strong>Suggestions:</strong> Ideas to make the calculator better</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <span><strong>Feedback:</strong> Share your experience using our tool</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                        <Clock className="h-4 w-4 text-primary-foreground" />
                      </span>
                      Response Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm sm:text-base text-muted-foreground">
                    <p>
                      We usually respond within <strong>24-48 hours</strong>. During exam periods, it might take a bit longer, but we'll get back to you as soon as possible!
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Feedback Form */}
              <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-border shadow-xl h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                      <Send className="h-4 w-4 text-primary-foreground" />
                    </span>
                    Send Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background/50"
                        maxLength={100}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background/50"
                        maxLength={255}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-background/50"
                        maxLength={200}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Your feedback, suggestion, or bug report..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-background/50 min-h-[120px]"
                        maxLength={1000}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                      disabled={isSubmitting}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Opening Email..." : "Send Message"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      This will open your default email application
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/" className="text-sm text-primary hover:underline">Home</Link>
              <Link to="/about" className="text-sm text-primary hover:underline">About Us</Link>
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

export default ContactUs;
