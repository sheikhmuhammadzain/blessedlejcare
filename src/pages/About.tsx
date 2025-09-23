import { CheckCircle, Award, Heart, Shield, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import claricePortrait from "@/assets/clarice-portrait.jpg";

const About = () => {
  const certifications = [
    "Certificate III in Individual Support (Ageing, Home and Community)",
    "Assistant in Nursing Qualification", 
    "First Aid & CPR Certification",
    "Manual Handling Training",
    "Infection Control Certification",
    "Medication Administration Training",
    "Police Check & Working with Vulnerable People Check"
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every client with empathy, understanding, and genuine care for their wellbeing and dignity."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "We build lasting relationships based on reliability, honesty, and maintaining the highest professional standards."
    },
    {
      icon: Users,
      title: "Person-Centered",
      description: "Every care plan is tailored to individual needs, preferences, and goals, respecting personal choices and independence."
    },
    {
      icon: Award,
      title: "Excellence", 
      description: "We are committed to continuous improvement, ongoing training, and delivering the highest quality care services."
    }
  ];

  return (
    <>
      <title>About — Blessed LEJ Care</title>
      <meta 
        name="description" 
        content="Meet Clarice — qualified support worker & assistant in nursing with 3+ years experience. Certified in First Aid, CPR, Manual Handling & more." 
      />

      {/* Hero Section */}
      <section className="care-section bg-gradient-to-br from-background to-secondary">
        <div className="care-container">
          <div className="text-center space-y-6 mb-16">
            <h1 className="care-heading">About Blessed LEJ Care</h1>
            <p className="care-subheading max-w-4xl mx-auto">
              Founded on the principles of compassion, dignity, and professional excellence, we provide trusted aged care and disability support services across Sydney
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">Meet Clarice</h2>
                <div className="space-y-4">
                  <p className="care-text">
                    Clarice Eufrasio da Rocha is the founder and principal carer at Blessed LEJ Care. As a qualified Support Worker and Assistant in Nursing, Clarice brings over three years of dedicated experience in caring for older adults and people with disabilities.
                  </p>
                  <p className="care-text">
                    Her approach to care is deeply person-centered, focusing on maintaining dignity, promoting independence, and bringing joy to every interaction. Clarice believes that quality care goes beyond meeting physical needs — it's about understanding each person as an individual with their own unique story, preferences, and goals.
                  </p>
                  <p className="care-text">
                    "Every person deserves to be treated with respect and compassion. My role is to support people to live their best life possible, in their own home, on their own terms," says Clarice.
                  </p>
                </div>
              </div>
              
              <div className="bg-care-warm/30 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center">
                  <Award className="w-6 h-6 text-primary mr-3" />
                  Qualifications & Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="care-text">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={claricePortrait}
                alt="Clarice Eufrasio da Rocha, Qualified Support Worker and Assistant in Nursing"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold">3+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="care-section">
        <div className="care-container">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <Card className="care-card text-center">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
                  <p className="care-text">
                    To provide compassionate, professional care that enables people to maintain their independence, dignity, and quality of life in the comfort of their own homes.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="care-card text-center">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
                  <p className="care-text">
                    To be the trusted choice for families seeking reliable, compassionate care services that truly make a difference in people's lives.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="care-card text-center">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Our Promise</h3>
                  <p className="care-text">
                    To deliver care with integrity, respect, and professionalism while continuously exceeding expectations in service quality and reliability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center space-y-4 mb-12">
            <h2 className="care-heading">Our Values</h2>
            <p className="care-subheading max-w-3xl mx-auto">
              These core values guide everything we do and shape how we deliver care to our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-care-trust rounded-3xl flex items-center justify-center mx-auto">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="care-text text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="care-section bg-secondary/30">
        <div className="care-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="care-heading">Why Choose Blessed LEJ Care?</h2>
                <p className="care-text">
                  We understand that choosing a care provider is one of the most important decisions you'll make for yourself or your loved one. Here's what sets us apart:
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Personalised Care Plans</h3>
                    <p className="care-text text-sm">Every client receives a tailored care plan developed around their unique needs, preferences, and goals.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Continuity of Care</h3>
                    <p className="care-text text-sm">We believe in building relationships. Where possible, you'll have the same carer who gets to know your routine and preferences.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Family Communication</h3>
                    <p className="care-text text-sm">We keep families informed with regular updates and encourage involvement in care planning.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Flexible Scheduling</h3>
                    <p className="care-text text-sm">Services available seven days a week, including evenings, weekends, and public holidays when needed.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">NDIS Expertise</h3>
                    <p className="care-text text-sm">Experienced in working with NDIS participants, plan managers, and support coordinators.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-care-warm to-care-trust rounded-3xl p-8 lg:p-12 space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Company Information</h3>
                <p className="care-text">Blessed LEJ Care operates as a sole trader business, fully insured and compliant with all industry regulations.</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Business Structure:</span>
                  <span>Sole Trader</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">ABN:</span>
                  <span>12345678901</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Insurance:</span>
                  <span>Fully Insured</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">NDIS Registration:</span>
                  <span>Registered Provider</span>
                </div>
              </div>
              
              <Button asChild size="lg" className="care-button-primary w-full">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;