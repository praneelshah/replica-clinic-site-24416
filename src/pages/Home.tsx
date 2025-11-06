import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-dental.jpg";
import smileImage from "@/assets/smile-patient.jpg";
import orthodonticsImage from "@/assets/orthodontics.jpg";
import { CheckCircle, Clock, CreditCard, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect, useState } from "react";

const Home = () => {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Experienced Specialists",
      description: "Our team of specialists all have years of experience to provide you with the care you desire.",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Same day and weekend appointments available to better serve you with your busy schedule.",
    },
    {
      icon: CreditCard,
      title: "Affordable Payment Plans",
      description: "We offer flexible payment options and accept the majority of insurance plans.",
    },
    {
      icon: CheckCircle,
      title: "Worry-Free Environment",
      description: "Experience a new level of patient care and comfort in our modern, welcoming facility.",
    },
  ];

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for the entire family",
      image: smileImage,
      link: "/services",
    },
    {
      title: "Orthodontics & Braces",
      description: "Traditional braces and clear aligners from $99/month",
      image: orthodonticsImage,
      link: "/orthodontics",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${parallaxOffset}px) scale(1.1)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-wider mb-8">
              <span className="block">Your Smile,</span>
              <span className="block italic font-normal">Our Passion</span>
            </h1>
            <div className="h-px w-24 bg-accent mx-auto my-8"></div>
            <p className="text-lg md:text-xl max-w-xl mx-auto font-light tracking-wide opacity-90">
              Complete comprehensive cosmetic dental care destination
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground border-0">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
              <Link to="/virtual-consultation">Virtual Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <AnimatedSection>
        <section className="bg-accent py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-accent-foreground tracking-wide">
              Contact us today at{" "}
              <a href="tel:8168803900" className="font-semibold underline decoration-2 underline-offset-4 hover:no-underline transition-all">
                816-880-3900
              </a>
            </h2>
            <p className="mt-4 text-accent-foreground/80">Schedule your initial consultation</p>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      <section className="py-32 bg-secondary relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
                Why Choose Us
              </h2>
              <div className="h-px bg-accent w-32 mx-auto"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-8 font-light">
              We are excited to offer a new encounter in patient care and comfort
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="p-8 text-center border-0 bg-background/50 backdrop-blur-sm hover:bg-background transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-14 h-14 mx-auto text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{feature.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
              Our Services
            </h2>
            <div className="h-px bg-accent w-32 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground font-light">
              Comprehensive dental solutions for your complete care
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="overflow-hidden border-0 bg-background group hover:shadow-2xl transition-all duration-700">
                  <div className="aspect-[4/3] overflow-hidden relative gradient-overlay">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-3xl font-serif font-light mb-4 tracking-wide">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 font-light leading-relaxed">{service.description}</p>
                    <Button asChild variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
                      <Link to={service.link}>Explore Services</Link>
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Consultation CTA */}
      <AnimatedSection>
        <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 tracking-wide">
              Virtual Consultation
            </h2>
            <div className="h-px bg-accent w-32 mx-auto mb-12"></div>
            <p className="text-2xl mb-12 max-w-2xl mx-auto font-light opacity-90">
              All you need is a friend, a smartphone and 2 spoons.
            </p>
            <Button size="lg" variant="outline" asChild className="bg-transparent backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 px-12 py-6 text-lg">
              <Link to="/virtual-consultation">Start Your Consultation</Link>
            </Button>
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection>
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <p className="text-2xl md:text-3xl font-serif font-light mb-6 leading-relaxed">
              Our goal is to provide you with the highest standard of dental treatment.
            </p>
            <div className="h-px bg-accent w-24 mx-auto my-8"></div>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Please feel free to{" "}
              <a href="mailto:imaginedentalkc@gmail.com" className="text-accent hover:underline underline-offset-4 transition-all">
                e-mail
              </a>{" "}
              or call us at{" "}
              <a href="tel:8168803900" className="text-accent font-medium hover:underline underline-offset-4 transition-all">
                (816) 880-3900
              </a>{" "}
              with any questions. Thanks for visiting!
            </p>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Home;
