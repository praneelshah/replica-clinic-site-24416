import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "4600 S Nolan Rd, Ste C\nIndependence, MO 64055",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(816) 880-3900",
      link: "tel:8168803900",
    },
    {
      icon: Mail,
      title: "Email",
      content: "imaginedentalkc@gmail.com",
      link: "mailto:imaginedentalkc@gmail.com",
    },
  ];

  const hours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <AnimatedSection className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-wide">
            Contact Us
          </h1>
          <div className="h-px w-24 bg-accent mx-auto my-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light opacity-90">
            We're here to answer your questions and schedule your appointment
          </p>
        </AnimatedSection>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <AnimatedSection>
              <Card className="p-8 border-0 shadow-2xl bg-background">
                <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="mt-1"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Send Message
                </Button>
              </form>
            </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card className="p-6 border-0 shadow-2xl bg-background hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line font-medium"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}

              {/* Office Hours */}
              <AnimatedSection delay={300}>
                <Card className="p-6 border-0 shadow-2xl bg-background">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                    <div className="space-y-2">
                      {hours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="font-medium">{schedule.day}</span>
                          <span className="text-muted-foreground">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <Card className="p-6 border-0 shadow-2xl bg-background/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Se Habla Español</h3>
                <p className="text-muted-foreground">
                  We have Spanish-speaking staff available to assist you with all your dental
                  needs.
                </p>
                </Card>
              </AnimatedSection>
            </div>
          </div>

          {/* Map Section */}
          <AnimatedSection>
            <Card className="p-8 border-0 shadow-2xl bg-background text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground mb-6">
              Conveniently located in Independence, MO with ample parking available
            </p>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.5543567890!2d-94.3933!3d39.0436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDAyJzM3LjAiTiA5NMKwMjMnMzUuOSJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-serif font-light mb-6">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-light opacity-90">
            Same day and weekend appointments available. Call us now!
          </p>
          <Button size="lg" variant="outline" asChild className="bg-transparent backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300">
            <a href="tel:8168803900">Call (816) 880-3900</a>
          </Button>
        </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
