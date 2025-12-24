import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, GraduationCap, Calculator, Shield, Users, Clock, Star } from "lucide-react";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "How is GPA calculated in VIT-AP?",
    answer: "GPA (Grade Point Average) is calculated using the formula: GPA = (Sum of Credit × Grade Point) / Total Credits. For each subject, multiply the credit hours by the grade point earned, sum up all these values, and divide by the total credits. For example, if you have 3 subjects with credits 3, 4, and 3, and grades S(10), A(9), and B(8) respectively, your GPA would be: (3×10 + 4×9 + 3×8) / (3+4+3) = (30+36+24)/10 = 9.0"
  },
  {
    question: "What is the grading system followed in VIT?",
    answer: "VIT follows a 10-point grading system. The grades and their corresponding grade points are: S = 10 (Outstanding), A = 9 (Excellent), B = 8 (Very Good), C = 7 (Good), D = 6 (Average), E = 5 (Below Average), and F = 0 (Fail). Some courses may also have P (Pass) and N (Fail) grades for pass/fail courses."
  },
  {
    question: "Can I calculate CGPA for previous semesters?",
    answer: "Yes, absolutely! Our CGPA calculator allows you to enter the GPA for each semester you've completed. Simply add all your semesters with their respective GPAs, and the calculator will compute your cumulative CGPA by averaging all semester GPAs."
  },
  {
    question: "Is this calculator free to use?",
    answer: "Yes, this calculator is completely free to use! There are no hidden charges, premium features, or subscriptions required. We built this tool to help VIT students, and it will always remain free for academic use."
  },
  {
    question: "Does this website store my data?",
    answer: "No, this website does not store any of your academic data. All calculations are performed locally in your browser. When you close the browser or refresh the page, all entered data is cleared. Your privacy is important to us, and we don't collect or save your grades, credits, or any personal information."
  },
  {
    question: "Is this an official VIT calculator?",
    answer: "No, this is not an official VIT calculator. This is an independent student project created to help fellow VIT students easily calculate their GPA and CGPA. For official academic records and calculations, please refer to VIT-AP University's official VTOP portal."
  },
  {
    question: "Can M.Tech students use this calculator?",
    answer: "Yes! All students from any VIT campus can use this calculator, including B.Tech, M.Tech, MBA, and other programs. The grading system is the same across all programs at VIT, so our calculator works for everyone."
  },
  {
    question: "How accurate is this calculator?",
    answer: "Our calculator uses the standard VIT grading formula and is highly accurate for most calculations. However, for official purposes, we recommend verifying your results with the university's official portal. Special cases like grade improvements, course withdrawals, or non-credit courses may require special handling."
  },
  {
    question: "Can I calculate GPA for a single semester?",
    answer: "Yes! The GPA Calculator tab is specifically designed for calculating your GPA for a single semester. Simply enter all your subjects with their credits and grades, and click 'Calculate GPA' to get your semester GPA instantly."
  },
  {
    question: "What if I have subjects with different credit values?",
    answer: "Our calculator handles subjects with different credit values perfectly. Just enter the correct credit value for each subject (whether it's 1, 2, 3, 4, or any other value), and the weighted calculation will be done automatically. Higher credit courses will have more impact on your final GPA."
  },
  {
    question: "Can I use this calculator on my mobile phone?",
    answer: "Yes! Our website is fully responsive and works great on mobile phones, tablets, and desktop computers. You can calculate your GPA and CGPA from any device with a web browser, anytime and anywhere."
  },
  {
    question: "What should I do if I find a bug or error?",
    answer: "If you find any bug or calculation error, please report it to us through the Contact Us page. You can email us at codewithsubash07@gmail.com with details about the issue, and we'll fix it as soon as possible. Your feedback helps us improve!"
  }
];

const FAQ = () => {
  // JSON-LD structured data for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>FAQ - VIT-AP GPA & CGPA Calculator | Frequently Asked Questions</title>
        <meta
          name="description"
          content="Frequently asked questions about VIT-AP GPA Calculator. Learn how GPA is calculated, grading system, CGPA calculation, and more."
        />
        <meta name="keywords" content="VIT-AP FAQ, GPA calculation questions, CGPA help, VIT grading system, student questions" />
        <link rel="canonical" href="https://vitap-gpa-calculator.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
                <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                Frequently Asked Questions
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about GPA calculation, grading system, and using our calculator.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <Card className="bg-gradient-to-br from-card to-primary/10 border-border text-center p-3 sm:p-4">
                <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-muted-foreground">Free Calculator</p>
              </Card>
              <Card className="bg-gradient-to-br from-card to-accent/10 border-border text-center p-3 sm:p-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-accent mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-muted-foreground">No Data Stored</p>
              </Card>
              <Card className="bg-gradient-to-br from-card to-primary/10 border-border text-center p-3 sm:p-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-muted-foreground">All VIT Students</p>
              </Card>
              <Card className="bg-gradient-to-br from-card to-accent/10 border-border text-center p-3 sm:p-4">
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-accent mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-muted-foreground">100% Accurate</p>
              </Card>
            </div>

            {/* FAQ Accordion */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="p-1.5 bg-gradient-to-br from-primary to-primary/80 rounded-lg">
                    <HelpCircle className="h-4 w-4 text-primary-foreground" />
                  </span>
                  Common Questions ({faqs.length} answers)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                      <AccordionTrigger className="text-left text-sm sm:text-base hover:text-primary transition-colors py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Still Have Questions */}
            <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-border shadow-xl">
              <CardContent className="text-center py-6 sm:py-8">
                <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" />
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  Still Have Questions?
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Can't find what you're looking for? Feel free to reach out to us!
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </CardContent>
            </Card>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/" className="text-sm text-primary hover:underline">Home</Link>
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

export default FAQ;
