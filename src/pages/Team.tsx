import { Award, CheckCircle, Heart, Shield, Users, Languages, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import claricePortrait from "@/assets/clarice-portrait.jpg";

const Team = () => {
  const certifications = [
    "Certificate III in Individual Support (Ageing, Home and Community)",
    "Assistant in Nursing Qualification", 
    "First Aid & CPR Certification (Current)",
    "Manual Handling Training",
    "Infection Control Certification",
    "Medication Administration Training",
    "Police Check & Working with Vulnerable People Check"
  ];

  const experience = [
    {
      title: "3+ Years in Aged Care",
      description: "Extensive experience providing compassionate care to elderly clients in their homes"
    },
    {
      title: "NDIS Support Experience", 
      description: "Skilled in working with NDIS participants and understanding individual support needs"
    },
    {
      title: "Person-Centered Approach",
      description: "Committed to tailoring care to each individual's preferences, goals, and lifestyle"
    },
    {
      title: "Family Communication",
      description: "Strong track record of maintaining excellent communication with families and care teams"
    }
  ];

  const languages = ["English", "Portuguese"];

  return (
    <>
      <title>Our Team — Meet Clarice | Blessed LEJ Care</title>
      <meta 
        name="description" 
        content="Meet Clarice Eufrasio da Rocha and the caring team at Blessed LEJ Care. Qualified, experienced, and committed to person-centered care." 
      />

      {/* Hero Section */}
      <section className="care-section bg-gradient-to-br from-background to-secondary">
        <div className="care-container">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="care-heading">Meet Our Team</h1>
            <p className="care-subheading">
              Our dedicated team of qualified professionals is committed to providing compassionate, person-centered care that honors dignity and promotes independence
            </p>
          </div>
        </div>
      </section>

      {/* Clarice Profile */}
      <section className="care-section">
        <div className="care-container">
          <Card className="care-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center">
                          <Heart className="w-10 h-10 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Clarice Eufrasio da Rocha</h2>
                          <p className="text-xl text-primary font-semibold">Founder & Principal Carer</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                              Support Worker
                            </Badge>
                            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                              Assistant in Nursing
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="care-text">
                        Clarice is the heart and soul of Blessed LEJ Care. As a qualified Support Worker and Assistant in Nursing, 
                        she brings over three years of dedicated experience in aged care and disability support to every client interaction.
                      </p>
                      <p className="care-text">
                        Her approach to care is deeply rooted in respect, compassion, and the belief that everyone deserves to live 
                        with dignity and independence. Clarice takes pride in getting to know each client as an individual, 
                        understanding their unique needs, preferences, and life story.
                      </p>
                      <p className="care-text">
                        "My goal is not just to provide care, but to bring joy and companionship to every visit. 
                        I believe that quality care comes from the heart, and I'm honored to be trusted with supporting 
                        people in their most vulnerable moments," says Clarice.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <Languages className="w-6 h-6 text-primary mr-3" />
                        Languages Spoken
                      </h3>
                      <div className="flex gap-3">
                        {languages.map((lang, index) => (
                          <Badge key={index} variant="outline" className="text-base py-2 px-4">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <Clock className="w-6 h-6 text-primary mr-3" />
                        Availability
                      </h3>
                      <div className="space-y-2 care-text">
                        <p><strong>Primary Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
                        <p><strong>Extended Services:</strong> Evenings, weekends, and public holidays available</p>
                        <p><strong>Emergency Support:</strong> On-call for existing clients</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button asChild size="lg" className="care-button-primary">
                    <Link to="/contact">Meet Clarice in Person</Link>
                  </Button>
                </div>
                
                <div className="bg-gradient-to-br from-care-warm to-care-trust p-8 lg:p-12 flex items-center">
                  <div className="text-center space-y-6 w-full">
                    <div className="relative">
                      <img
                        src={claricePortrait}
                        alt="Clarice Eufrasio da Rocha, Qualified Support Worker and Assistant in Nursing"
                        className="rounded-3xl shadow-2xl w-full max-w-sm mx-auto"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-xl">
                        <div className="text-center space-y-1">
                          <div className="text-2xl font-bold">3+</div>
                          <div className="text-xs">Years Experience</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">Background Checks</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="font-medium">Police Check Current</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="font-medium">WWVP Check Current</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="font-medium">Reference Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Qualifications & Experience */}
      <section className="care-section bg-secondary/30">
        <div className="care-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="care-card">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <Award className="w-8 h-8 text-primary mr-3" />
                  Qualifications & Certifications
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                      <span className="care-text">{cert}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-care-warm/30 rounded-xl p-4 space-y-2">
                  <h4 className="font-semibold text-foreground">Ongoing Professional Development</h4>
                  <p className="care-text text-sm">
                    Clarice participates in regular training updates and professional development to stay current 
                    with best practices in aged care and disability support.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="care-card">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <Users className="w-8 h-8 text-primary mr-3" />
                  Experience & Expertise
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <p className="care-text text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-care-trust/30 rounded-xl p-4 space-y-2">
                  <h4 className="font-semibold text-foreground">Specialized Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Dementia Care</Badge>
                    <Badge variant="outline">Mobility Support</Badge>
                    <Badge variant="outline">Medication Management</Badge>
                    <Badge variant="outline">NDIS Support</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="care-section">
        <div className="care-container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="care-heading">Professional Standards</h2>
            <p className="care-subheading max-w-3xl mx-auto">
              We maintain the highest professional standards to ensure quality care and peace of mind for clients and families
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="care-card text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Safety & Compliance</h3>
                  <p className="care-text text-sm">
                    All staff undergo comprehensive background checks, hold current certifications, and follow strict safety protocols
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="care-card text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Person-Centered Care</h3>
                  <p className="care-text text-sm">
                    Our approach focuses on individual needs, preferences, and goals to ensure personalized, respectful care
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="care-card text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Continuous Improvement</h3>
                  <p className="care-text text-sm">
                    Regular training, client feedback, and quality reviews ensure we continue to exceed care standards
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Expansion */}
      <section className="care-section bg-secondary/30">
        <div className="care-container">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="care-heading">Growing Our Team</h2>
              <p className="care-subheading">
                As Blessed LEJ Care grows, we're committed to bringing on additional qualified, compassionate carers who share our values
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="care-card">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Our Hiring Standards</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="care-text text-sm">Relevant qualifications in aged care or disability support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="care-text text-sm">Comprehensive background and reference checks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="care-text text-sm">Demonstrated commitment to person-centered care</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="care-text text-sm">Alignment with our values and care philosophy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="care-card">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Continuity Promise</h3>
                  <p className="care-text">
                    Even as our team grows, we remain committed to providing consistent, familiar carers for our clients. 
                    We believe that building relationships is fundamental to quality care.
                  </p>
                  <p className="care-text">
                    New team members undergo comprehensive orientation and shadowing with Clarice to ensure they 
                    understand and embody our approach to compassionate care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="care-section bg-primary text-primary-foreground">
        <div className="care-container text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            We'd love to meet you and discuss how Clarice and our team can provide the compassionate, 
            professional care you or your loved one deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Schedule a Meeting</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;