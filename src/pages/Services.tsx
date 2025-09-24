import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Heart, Users, User, ChefHat, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";

const Services = () => {
  const serviceIcons = {
    Heart,
    Users, 
    User,
    ChefHat,
    Clock
  };

  return (
    <>
      <title>Services — Aged Care & Disability Support | Blessed LEJ Care</title>
      <meta 
        name="description" 
        content="Aged care, disability support, personal care, meal prep, community access, respite & domestic assistance in Sydney." 
      />

      {/* Hero Section */}
      <section className="care-section bg-gradient-to-br from-background to-secondary">
        <div className="care-container">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="care-heading">Our Care Services</h1>
            <p className="care-subheading">
              Comprehensive aged care and disability support services designed to help you maintain independence, dignity, and quality of life in your own home
            </p>
          </div>
        </div>
      </section>

      {/* NDIS Information Banner */}
      <section className="care-section bg-primary text-primary-foreground">
        <div className="care-container">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8" />
              <h2 className="text-2xl lg:text-3xl font-bold">NDIS Registered Provider</h2>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              We work with both self-managed and plan-managed NDIS participants to deliver support services that align with your NDIS goals and plans
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-primary border-white text-white hover:bg-white hover:text-primary">
                <Link to="/ndis-intake">NDIS Assessment Form</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Discuss Your Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="care-section">
        <div className="care-container">
          <div className="grid gap-12">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons] || Heart;
              
              return (
                <Card key={service.id} className="care-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:grid-cols-[1fr,auto]' : ''}`}>
                      <div className={`p-8 lg:p-12 space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="space-y-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{service.title}</h3>
                                {service.ndisSupported && (
                                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                                    NDIS Supported
                                  </Badge>
                                )}
                              </div>
                              <p className="care-text">{service.shortDescription}</p>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                              <ul className="space-y-2">
                                {service.benefits.slice(0, 3).map((benefit, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                    <span className="care-text text-sm">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="space-y-3">
                              <h4 className="font-semibold text-foreground">What's Included:</h4>
                              <ul className="space-y-2">
                                {service.whatsIncluded.slice(0, 3).map((item, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                    <span className="care-text text-sm">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-secondary/30 rounded-xl p-6 space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-semibold text-foreground mb-2">Session Duration</h5>
                                <p className="care-text text-sm">{service.sessionDuration}</p>
                              </div>
                              <div>
                                <h5 className="font-semibold text-foreground mb-2">Pricing</h5>
                                <p className="care-text text-sm">{service.pricingNotes}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button asChild size="lg" className="care-button-primary">
                            <Link to={`/services/${service.slug}`}>
                              Learn More <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                          </Button>
                          <Button asChild size="lg" variant="outline" className="care-button-secondary">
                            <Link to="/contact">Request Quote</Link>
                          </Button>
                        </div>
                      </div>
                      
                      <div className={`bg-gradient-to-br from-care-warm to-care-trust p-8 lg:p-12 flex items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="w-full space-y-6">
                          <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto">
                            <IconComponent className="w-12 h-12 text-primary" />
                          </div>
                          <div className="text-center space-y-4">
                            <h4 className="text-xl font-semibold text-foreground">Need This Service?</h4>
                            <p className="care-text text-sm">
                              Get in touch to discuss how this service can be tailored to your specific needs and circumstances.
                            </p>
                            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                              <Link to="/contact">Contact Us</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="care-section bg-secondary/30">
        <div className="care-container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="care-heading">Service Areas</h2>
            <p className="care-subheading max-w-3xl mx-auto">
              We proudly serve Brighton Le Sands and surrounding areas across Sydney's metropolitan region
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Primary Service Area</h3>
              <div className="space-y-2">
                <p className="care-text">Brighton Le Sands</p>
                <p className="care-text">Rockdale</p>
                <p className="care-text">Sans Souci</p>
                <p className="care-text">Monterey</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Extended Service Area</h3>
              <div className="space-y-2">
                <p className="care-text">Kogarah</p>
                <p className="care-text">Carlton</p>
                <p className="care-text">Beverley Park</p>
                <p className="care-text">Ramsgate</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Other Areas</h3>
              <p className="care-text">
                We may service other areas across Sydney Metro on request. Contact us to discuss your location and availability.
              </p>
              <Button asChild variant="outline" className="care-button-secondary">
                <Link to="/contact">Check Your Area</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="care-section bg-primary text-primary-foreground">
        <div className="care-container text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Discuss Your Care Needs?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Every person's care needs are unique. Contact us today for a free consultation to discuss how our services can be tailored to support you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/ndis-intake">NDIS Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;