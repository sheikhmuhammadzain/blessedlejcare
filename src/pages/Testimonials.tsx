import { Star, Quote, Heart, CheckCircle, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;

  return (
    <>
      <title>Client Testimonials — Real Stories | Blessed LEJ Care</title>
      <meta 
        name="description" 
        content="Read real testimonials from clients and families who trust Blessed LEJ Care for aged care and disability support in Sydney." 
      />

      {/* Hero Section */}
      <section className="care-section bg-gradient-to-br from-background to-secondary">
        <div className="care-container">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="care-heading">Client Testimonials</h1>
            <p className="care-subheading">
              Real stories from families who trust us with their most precious care needs. 
              These testimonials reflect our commitment to compassionate, professional service.
            </p>
            
            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < Math.floor(averageRating) ? 'fill-warning text-warning' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-foreground">{averageRating.toFixed(1)}/5.0</div>
                <div className="care-text text-sm">Average Rating</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{totalReviews}</div>
                <div className="care-text text-sm">Happy Clients</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="care-text text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="care-section">
        <div className="care-container">
          <div className="grid gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className={`care-card overflow-hidden ${index % 2 === 1 ? 'lg:ml-16' : 'lg:mr-16'}`}>
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-start">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Quote className="w-8 h-8 text-primary" />
                        </div>
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center space-x-3">
                            <div className="flex space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                              ))}
                            </div>
                            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                              {testimonial.serviceReference}
                            </Badge>
                          </div>
                          
                          <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed italic">
                            "{testimonial.quote}"
                          </blockquote>
                          
                          <div className="flex items-center space-x-4 pt-4">
                            <div className="space-y-1">
                              <div className="font-semibold text-foreground text-lg">{testimonial.clientName}</div>
                              <div className="care-text text-sm">
                                {new Date(testimonial.date).toLocaleDateString('en-AU', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </div>
                            </div>
                            <div className="w-12 h-12 bg-care-warm rounded-full flex items-center justify-center">
                              <CheckCircle className="w-6 h-6 text-success" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-32 bg-gradient-to-b from-care-warm to-care-trust rounded-2xl p-6 text-center">
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                          <Heart className="w-8 h-8 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-3xl font-bold text-primary">{testimonial.rating}</div>
                          <div className="text-sm font-medium text-foreground">out of 5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Quality Highlights */}
      <section className="care-section bg-secondary/30">
        <div className="care-container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="care-heading">What Clients Value Most</h2>
            <p className="care-subheading max-w-3xl mx-auto">
              These themes consistently appear in our client feedback, reflecting our core strengths
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="care-card text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Compassionate Care</h3>
                  <p className="care-text text-sm">Clients consistently praise our empathetic, dignified approach to care</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="care-card text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Reliability</h3>
                  <p className="care-text text-sm">Families appreciate our consistent, dependable service delivery</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="care-card text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Communication</h3>
                  <p className="care-text text-sm">Excellent communication with clients and families is our hallmark</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="care-card text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Quality</h3>
                  <p className="care-text text-sm">Professional, high-quality care that exceeds expectations</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Process */}
      <section className="care-section">
        <div className="care-container max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="care-heading">Share Your Experience</h2>
            <p className="care-subheading">
              Your feedback helps us improve our services and helps other families make informed decisions
            </p>
          </div>
          
          <Card className="care-card">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground">We Value Your Feedback</h3>
                    <p className="care-text">
                      Client testimonials are incredibly valuable to us and to families considering our services. 
                      If you've experienced our care, we'd love to hear from you.
                    </p>
                    <p className="care-text">
                      All testimonials are voluntary and we always ask for permission before sharing your story. 
                      We can use your full name or just initials, whatever you're comfortable with.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">How to Share Your Story:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="care-text text-sm">Call us at 0414 326 448</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="care-text text-sm">Email us at info@blessedlejcare.com.au</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="care-text text-sm">Use the contact form to send your feedback</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-care-warm to-care-trust rounded-2xl p-8 text-center space-y-6">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto">
                    <MessageSquare className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Leave a Review</h3>
                    <p className="care-text text-sm">
                      Share your experience to help other families find quality care services.
                    </p>
                    <Button asChild className="care-button-primary w-full">
                      <Link to="/contact">Share Your Story</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="care-section bg-primary text-primary-foreground">
        <div className="care-container text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Experience Care That Makes a Difference
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join the families who trust Blessed LEJ Care for compassionate, professional support. 
            Contact us today to discuss how we can help you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Get Started Today</Link>
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

export default Testimonials;