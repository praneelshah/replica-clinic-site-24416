import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Smartphone, Users, Utensils, Upload, CheckCircle } from "lucide-react";

const VirtualConsultation = () => {
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
      title: "Consultation Request Received!",
      description: "We'll contact you shortly to schedule your virtual consultation.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const steps = [
    {
      icon: Users,
      title: "Get a Friend",
      description: "Have a friend or family member help you with the photos",
    },
    {
      icon: Smartphone,
      title: "Use Your Smartphone",
      description: "Any smartphone with a camera will work perfectly",
    },
    {
      icon: Utensils,
      title: "Grab 2 Spoons",
      description: "Use spoons to retract your lips for clear dental photos",
    },
    {
      icon: Upload,
      title: "Submit Photos",
      description: "Upload your photos and complete the consultation form",
    },
  ];

  const photoInstructions = [
    "Front smile (teeth together, smiling)",
    "Front teeth apart (relaxed, lips open)",
    "Side profile (left and right)",
    "Upper teeth (looking down)",
    "Lower teeth (looking up)",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Virtual Orthodontic Consultation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get expert orthodontic advice from the comfort of your home. All you need is a
            friend, a smartphone, and 2 spoons!
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>

          {/* Photo Instructions */}
          <Card className="p-8 bg-secondary border-0 mb-12">
            <h3 className="text-2xl font-serif font-bold mb-6 text-center">
              Photos We Need
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {photoInstructions.map((instruction, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{instruction}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Consultation Form */}
          <Card className="p-8 max-w-2xl mx-auto border-0 shadow-lg">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Request Your Virtual Consultation
            </h2>
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
                <Label htmlFor="message">Tell Us About Your Concerns</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="mt-1"
                  placeholder="What are your orthodontic goals? Any specific concerns?"
                />
              </div>

              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-semibold mb-2">Upload Your Photos</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Please upload all 5 required photos (front, sides, upper, lower)
                </p>
                <Input type="file" multiple accept="image/*" className="max-w-xs mx-auto" />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Virtual Consultation Request
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Why Choose Virtual Consultation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Convenient",
                description: "No need to visit the office for initial assessment",
              },
              {
                title: "Fast",
                description: "Get expert feedback within 24-48 hours",
              },
              {
                title: "Free",
                description: "No charge for virtual consultation evaluation",
              },
            ].map((benefit, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-primary-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-lg mb-4">Prefer to talk directly?</p>
            <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:8168803900">Call (816) 880-3900</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualConsultation;
