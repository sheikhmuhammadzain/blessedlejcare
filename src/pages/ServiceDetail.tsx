import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Clock, DollarSign, Phone, Heart, Users, User, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="care-section">
        <div className="care-container text-center space-y-6">
          <h1 className="care-heading">Service Not Found</h1>
          <p className="care-text">The service you're looking for doesn't exist.</p>
          <Button asChild className="care-button-primary">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const serviceIcons = {
    Heart,
    Users, 
    User,
    ChefHat,
    Clock
  };

  const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons] || Heart;
  const relatedServices = services.filter(s => service.relatedServices.includes(s.id));

  return (
    <>
      <title>{service.title} — Blessed LEJ Care</title>
      <meta 
        name="description" 
        content={`${service.shortDescription} Professional in-home ${service.title.toLowerCase()} in Brighton Le Sands and Sydney.`} 
      />

      {/* Breadcrumb */}
      <section className="bg-secondary/30 py-6">
        <div className="care-container">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/services">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Services
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="care-section bg-gradient-to-br from-background to-secondary">
        <div className="care-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 flex-wrap">
                      <h1 className="care-heading">{service.title}</h1>
                      {service.ndisSupported && (
                        <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                          NDIS Supported
                        </Badge>
                      )}
                    </div>
                    <p className="care-subheading">{service.shortDescription}</p>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <div className="care-text whitespace-pre-line">{service.longDescription}</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="care-button-primary">
                  <Link to="/contact">Request This Service</Link>
                </Button>
                <a
                  href="tel:+61414326448"
                  className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground care-transition"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="care-card">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Service Overview</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Duration</div>
                        <div className="care-text text-sm">{service.sessionDuration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Pricing</div>
                        <div className="care-text text-sm">{service.pricingNotes}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="care-card bg-care-warm/20">
                <CardContent className="p-8 space-y-4 text-center">
                  <h3 className="text-xl font-semibold text-foreground">Need More Information?</h3>
                  <p className="care-text">
                    Our team is here to answer any questions and help you understand how this service can meet your needs.
                  </p>
                  <Button asChild className="care-button-primary w-full">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & What's Included */}
      <section className="care-section">
        <div className="care-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="care-card">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Key Benefits</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                      <span className="care-text">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="care-card">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">What's Included</h2>
                <ul className="space-y-4">
                  {service.whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                      <span className="care-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs.length > 0 && (
        <section className="care-section bg-secondary/30">
          <div className="care-container max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="care-heading">Frequently Asked Questions</h2>
              <p className="care-subheading">
                Common questions about {service.title.toLowerCase()} services
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="care-text">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="care-section">
          <div className="care-container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="care-heading">Related Services</h2>
              <p className="care-subheading">
                Other services that complement {service.title.toLowerCase()}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => {
                const RelatedIcon = serviceIcons[relatedService.icon as keyof typeof serviceIcons] || Heart;
                
                return (
                  <Card key={relatedService.id} className="care-card hover:shadow-xl group">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground care-transition">
                        <RelatedIcon className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">{relatedService.title}</h3>
                        <p className="care-text text-sm">{relatedService.shortDescription}</p>
                      </div>
                      <Button asChild variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
                        <Link to={`/services/${relatedService.slug}`}>
                          Learn More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="care-section bg-primary text-primary-foreground">
        <div className="care-container text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Contact us today to discuss your specific needs and learn how we can tailor this service to support you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <a
              href="tel:+61414326448"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary care-transition"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call 0414 326 448
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;