import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, CreditCard, DollarSign, Shield, Clock } from "lucide-react";

const Payment = () => {
  const paymentOptions = [
    {
      icon: CreditCard,
      title: "In-House Payment Plans",
      description: "Flexible monthly payment plans with no credit check required",
      features: [
        "0% interest financing available",
        "Low monthly payments",
        "No hidden fees",
        "Customized to your budget",
      ],
    },
    {
      icon: Shield,
      title: "Insurance Accepted",
      description: "We work with most major insurance providers",
      features: [
        "PPO insurance plans",
        "Medicaid accepted",
        "Direct insurance billing",
        "Maximum benefits utilized",
      ],
    },
    {
      icon: DollarSign,
      title: "Third-Party Financing",
      description: "Additional financing options through trusted partners",
      features: [
        "CareCredit accepted",
        "Low interest rates",
        "Quick approval process",
        "Extended payment terms",
      ],
    },
  ];

  const pricingExamples = [
    {
      service: "Traditional Metal Braces",
      price: "$99/month",
      totalRange: "$3,500 - $6,500",
    },
    {
      service: "Clear Aligners (Invisalign)",
      price: "$149/month",
      totalRange: "$4,500 - $8,000",
    },
    {
      service: "Ceramic Braces",
      price: "$129/month",
      totalRange: "$4,000 - $7,500",
    },
    {
      service: "Dental Cleaning",
      price: "$85 - $150",
      totalRange: "Per visit",
    },
    {
      service: "Dental Filling",
      price: "$150 - $350",
      totalRange: "Per tooth",
    },
    {
      service: "Dental Crown",
      price: "$800 - $1,500",
      totalRange: "Per tooth",
    },
    {
      service: "Teeth Whitening",
      price: "$300 - $650",
      totalRange: "Complete treatment",
    },
    {
      service: "Dental Implant",
      price: "$1,500 - $3,000",
      totalRange: "Per implant",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Payment Options
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Affordable dental care with flexible payment plans designed to fit your budget.
            Quality treatment shouldn't be out of reach.
          </p>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {paymentOptions.map((option, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mb-6 bg-accent rounded-full flex items-center justify-center">
                  <option.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-serif font-bold mb-3">{option.title}</h2>
                <p className="text-muted-foreground mb-6">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <Card className="p-12 bg-secondary border-0 text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-8">Why Our Payment Plans Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "No Waiting",
                  description: "Start treatment immediately, pay over time",
                },
                {
                  icon: Shield,
                  title: "No Surprises",
                  description: "Clear pricing with no hidden fees",
                },
                {
                  icon: CheckCircle,
                  title: "Easy Approval",
                  description: "Simple application process with quick decisions",
                },
              ].map((benefit, index) => (
                <div key={index}>
                  <benefit.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Pricing Examples */}
          <div className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-center mb-4">
              Treatment Pricing Guide
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transparent pricing for our most common treatments. Exact costs determined during consultation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {pricingExamples.map((item, index) => (
                <Card key={index} className="p-6 border-0 shadow-md flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.service}</h3>
                    <p className="text-sm text-muted-foreground">{item.totalRange}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">{item.price}</p>
                  </div>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              * Prices may vary based on individual treatment needs. Final costs discussed during consultation.
            </p>
          </div>

          {/* Insurance Partners */}
          <Card className="p-12 bg-primary text-primary-foreground border-0 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              We Accept Most Insurance Plans
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team will work with your insurance provider to maximize your benefits and
              minimize out-of-pocket expenses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:8168803900">Call to Verify Insurance</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Payment;
