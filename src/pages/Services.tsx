import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      category: "Preventive Care",
      items: [
        "Routine Dental Examinations",
        "Professional Teeth Cleaning",
        "Fluoride Treatments",
        "Dental Sealants",
        "Oral Cancer Screenings",
        "Digital X-Rays",
      ],
    },
    {
      category: "Restorative Dentistry",
      items: [
        "Dental Fillings",
        "Dental Crowns & Bridges",
        "Root Canal Therapy",
        "Tooth Extractions",
        "Dentures (Full & Partial)",
        "Dental Implants",
      ],
    },
    {
      category: "Cosmetic Dentistry",
      items: [
        "Teeth Whitening",
        "Porcelain Veneers",
        "Composite Bonding",
        "Smile Makeovers",
        "Gum Contouring",
        "Invisalign Clear Aligners",
      ],
    },
    {
      category: "Specialized Services",
      items: [
        "Emergency Dental Care",
        "Pediatric Dentistry",
        "Orthodontics & Braces",
        "Sedation Dentistry",
        "TMJ Treatment",
        "Sleep Apnea Solutions",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Dental Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive dental care services designed to keep your smile healthy,
            beautiful, and confident for life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg">
                <h2 className="text-3xl font-serif font-bold mb-6">{service.category}</h2>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Insurance Info */}
          <Card className="p-12 bg-secondary border-0 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Insurance & Payment Plans
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We accept the majority of insurance plans and offer flexible payment options
              to make quality dental care accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/payment">View Payment Options</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Same day and weekend appointments available
          </p>
          <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
            <a href="tel:8168803900">Call (816) 880-3900</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
