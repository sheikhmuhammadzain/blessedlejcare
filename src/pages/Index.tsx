import { Link } from "react-router-dom";
import { Heart, Users, Shield, Clock, Phone, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { getPreviewImages } from "@/data/galleryAuto";
import { ScrollReveal, StaggeredReveal } from "@/components/animations/ScrollReveal";
import { CountUp } from "@/components/animations/ParallaxSection";

const Index = () => {
  const featuredServices = services.slice(0, 4);
  const featuredTestimonials = testimonials.slice(0, 3);
  const galleryPreview = getPreviewImages(8);

  return (
    <>
      {/* SEO Meta */}
      <title>Blessed LEJ Care — Aged Care & Disability Support in Brighton Le Sands</title>
      <meta 
        name="description" 
        content="Compassionate, professional in-home aged care and disability support in Sydney. NDIS support for self-managed and plan-managed clients. Call 0414 326 448." 
      />
      
      {/* Hero Section */}
      <section className="care-section bg-gradient-to-br from-background to-secondary relative overflow-hidden">
        <div className="care-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <ScrollReveal direction="left" delay={0} duration={1000}>
                  <h1 className="care-heading">
                    Compassionate care that honours dignity and independence
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="left" delay={200} duration={1000}>
                  <p className="care-subheading">
                    Trusted aged care and NDIS disability support in Brighton Le Sands — respectful, reliable and tailored to your needs.
                  </p>
                </ScrollReveal>
              </div>
              
              <ScrollReveal direction="up" delay={400} duration={800}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="care-button-primary">
                    <Link to="/contact">
                      Contact Clarice <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="care-button-secondary">
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={600} duration={800}>
                <div className="flex items-center space-x-6 pt-4">
                  <a 
                    href="tel:+61414326448" 
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 care-transition"
                  >
                    <Phone className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">0414 326 448</div>
                      <div className="text-sm text-muted-foreground">Call for urgent enquiries</div>
                    </div>
                  </a>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="relative">
              <ScrollReveal direction="right" delay={300} duration={1000}>
                <img 
                  src={heroImage} 
                  alt="Compassionate caregiver supporting older woman at home"
                  className="rounded-3xl shadow-2xl w-full motion-safe:animate-float-slow"
                />
              </ScrollReveal>
              <ScrollReveal direction="up" delay={700} duration={800}>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">NDIS Registered</div>
                      <div className="text-sm text-muted-foreground">Quality assured</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="care-section">
  <div className="care-container">
    <ScrollReveal direction="up" delay={0} duration={800}>
      <div className="text-center space-y-4 mb-16">
        <h2 className="care-heading text-center">Our Services</h2>
        <p className="care-subheading text-center max-w-3xl mx-auto">
          Comprehensive care services designed to help you maintain independence and quality of life in your own home
        </p>
      </div>
    </ScrollReveal>
    
    <StaggeredReveal
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      direction="up"
      staggerDelay={150}
      duration={800}
    >
      {featuredServices.map((service) => (
        <Card key={service.id} className="care-card hover:shadow-xl group hover:scale-105 care-transition h-full flex flex-col">
          <CardContent className="p-6 text-center space-y-4 flex flex-col flex-grow">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground care-transition">
              <Heart className="w-8 h-8" />
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="care-text text-sm">{service.shortDescription}</p>
            </div>
            <Button asChild variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground mt-auto">
              <Link to={`/services/${service.slug}`}>
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </StaggeredReveal>
    
    <ScrollReveal direction="up" delay={600} duration={800}>
      <div className="text-center mt-12">
        <Button asChild size="lg" variant="outline" className="care-button-secondary">
          <Link to="/services">View All Services</Link>
        </Button>
      </div>
    </ScrollReveal>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="care-section bg-secondary/50">
        <div className="care-container">
          <ScrollReveal direction="up" delay={0} duration={800}>
            <div className="text-center space-y-4 mb-16">
              <h2 className="care-heading">Why Choose Blessed LEJ Care?</h2>
              <p className="care-subheading max-w-3xl mx-auto">
                We're committed to providing compassionate, professional care that respects your dignity and supports your independence
              </p>
            </div>
          </ScrollReveal>
          
          <StaggeredReveal
            className="grid md:grid-cols-3 gap-8"
            direction="up"
            staggerDelay={200}
            duration={800}
          >
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-care-trust rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 care-transition">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Qualified & Trusted</h3>
              <p className="care-text">
                Fully qualified support workers with police checks, First Aid, and specialized training in aged care and disability support
              </p>
            </div>
            
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-care-warm rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 care-transition">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Person-Centered Care</h3>
              <p className="care-text">
                Every care plan is tailored to your individual needs, preferences, and goals. We listen and adapt our approach to suit you
              </p>
            </div>
            
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-care-trust rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 care-transition">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Reliable & Flexible</h3>
              <p className="care-text">
                Dependable service when you need it, with flexible scheduling including weekends and public holidays
              </p>
            </div>
          </StaggeredReveal>
        </div>
      </section>

      {/* About Preview */}
      <section className="care-section">
        <div className="care-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={0} duration={1000}>
              <div className="space-y-6">
                <h2 className="care-heading">Meet Clarice</h2>
                <div className="space-y-4">
                  <p className="care-text">
                    Clarice Eufrasio da Rocha is a qualified Support Worker and Assistant in Nursing with over <CountUp end={3} suffix="+" className="font-semibold text-primary" /> years' experience caring for older adults and people with disabilities.
                  </p>
                  <p className="care-text">
                    She holds certifications in First Aid, CPR, Manual Handling, Infection Control and Medication Assistance. Clarice's approach is person-centred: respectful, compassionate and joy-filled.
                  </p>
                </div>
                <Button asChild size="lg" className="care-button-primary">
                  <Link to="/about">Learn More About Our Team</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200} duration={1000}>
              <div className="bg-gradient-to-br from-care-warm to-care-trust rounded-3xl p-8 lg:p-12 text-center space-y-6 hover:scale-105 care-transition">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Ready to Get Started?</h3>
                  <p className="care-text">
                    Contact us today for a free consultation and let us show you how we can help you maintain independence and dignity at home.
                  </p>
                </div>
                <Button asChild size="lg" className="care-button-primary w-full">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="care-section">
        <div className="care-container">
          <ScrollReveal direction="up" delay={0} duration={800}>
            <div className="text-center space-y-4 mb-10">
              <h2 className="care-heading">In Pictures</h2>
              <p className="care-subheading max-w-3xl mx-auto">
                A glimpse of our compassionate care in action.
              </p>
            </div>
          </ScrollReveal>

          <StaggeredReveal
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            direction="up"
            staggerDelay={120}
            duration={700}
          >
            {galleryPreview.map((img, idx) => (
              <div key={idx} className="group overflow-hidden rounded-xl bg-muted/40 border border-border">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 care-transition"
                  />
                </div>
              </div>
            ))}
          </StaggeredReveal>

          <ScrollReveal direction="up" delay={400} duration={700}>
            <div className="text-center mt-8">
              <Button asChild size="lg" variant="outline" className="care-button-secondary">
                <Link to="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="care-section bg-secondary/30">
        <div className="care-container">
          <ScrollReveal direction="up" delay={0} duration={800}>
            <div className="text-center space-y-4 mb-16">
              <h2 className="care-heading">What Our Clients Say</h2>
              <p className="care-subheading max-w-3xl mx-auto">
                Real stories from families who trust us with their care needs
              </p>
            </div>
          </ScrollReveal>
          
          <StaggeredReveal
            className="grid md:grid-cols-3 gap-8"
            direction="up"
            staggerDelay={200}
            duration={800}
          >
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="care-card hover:shadow-xl hover:scale-105 care-transition">
                <CardContent className="p-8 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <blockquote className="care-text italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">{testimonial.clientName}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.serviceReference}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredReveal>
          
          <ScrollReveal direction="up" delay={600} duration={800}>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="care-button-secondary">
                <Link to="/testimonials">Read More Reviews</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="care-section bg-primary text-primary-foreground">
        <div className="care-container text-center space-y-8">
          <ScrollReveal direction="up" delay={0} duration={800}>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready for Compassionate Care?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200} duration={800}>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto">
              Contact Clarice today to discuss your care needs and learn how we can help you or your loved one maintain independence at home.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400} duration={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+61414326448"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 hover:scale-105 care-transition shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 0414 326 448
              </a>
              <Button asChild size="lg" variant="outline" className="border-white text-primary hover:bg-primary hover:text-white hover:scale-105 care-transition">
                <Link to="/contact">Send a Message</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;