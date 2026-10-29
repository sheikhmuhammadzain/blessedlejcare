import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the Privacy Policy to proceed.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 1-2 business days.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredContact: "",
        message: "",
        consent: false
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <title>Contact Blessed LEJ Care — Get Support Today</title>
      <meta 
        name="description" 
        content="Contact Clarice for reliable aged care and disability support in Sydney. Call 0414 326 448 or send a message online." 
      />

      {/* Hero Section */}
      <section className="care-section bg-gradient-to-br from-background to-secondary">
        <div className="care-container">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="care-heading">Contact Us</h1>
            <p className="care-subheading">
              Ready to discuss your care needs? Get in touch with our compassionate team today. We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="care-section">
        <div className="care-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Get in Touch</h2>
                <p className="care-text">
                  We're here to answer your questions and discuss how our services can support you or your loved one. Contact us using any of the methods below.
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="care-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Call Us</h3>
                        <div className="space-y-1">
                          <a
                            href="tel:+61414326448"
                            className="block text-lg font-semibold text-primary hover:text-primary/80 care-transition"
                          >
                            0414 326 448
                          </a>
                          <p className="care-text text-sm">Available for urgent enquiries</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="care-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Email Us</h3>
                        <div className="space-y-1">
                          <a
                            href="mailto:info@blessedlejcare.com.au"
                            className="block text-lg font-semibold text-primary hover:text-primary/80 care-transition"
                          >
                            info@blessedlejcare.com.au
                          </a>
                          <p className="care-text text-sm">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="care-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Service Area</h3>
                        <div className="space-y-1">
                          <p className="text-lg font-semibold text-foreground">Brighton Le Sands, NSW</p>
                          <p className="care-text text-sm">Serving Sydney Metro Area</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="care-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Business Hours</h3>
                        <div className="space-y-1">
                          <p className="care-text">Monday - Friday: 9:00 AM - 5:00 PM</p>
                          <p className="care-text">Weekend services available</p>
                          <p className="care-text text-sm text-muted-foreground">
                            Emergency services available 24/7
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-care-warm/20 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-foreground flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-2" />
                  Emergency Support
                </h3>
                <p className="care-text text-sm">
                  For non-emergency enquiries, please use the contact form or call during business hours. 
                  If you have an urgent care need, please call 0414 326 448 and leave a message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="care-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                    <p className="care-text">Fill out the form below and we'll get back to you within 1-2 business days.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="04XX XXX XXX"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                        <Select
                          value={formData.preferredContact}
                          onValueChange={(value) => handleInputChange("preferredContact", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phone">Phone</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="either">Either phone or email</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        placeholder="Please describe your care needs or ask any questions you may have..."
                        rows={6}
                      />
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange("consent", checked === true)}
                        required
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                        I consent to Blessed LEJ Care storing and using my personal information as described in the{" "}
                        <a href="/legal/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        . *
                      </Label>
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="care-button-primary w-full"
                    >
                      {isSubmitting ? (
                        <>Sending Message...</>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="care-section bg-secondary/30">
        <div className="care-container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="care-heading">Need Immediate Assistance?</h2>
            <p className="care-subheading max-w-3xl mx-auto">
              If you need to discuss your care needs urgently or want to get started right away, these options can help
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="care-card text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Call Directly</h3>
                  <p className="care-text text-sm">Speak with Clarice directly about your care needs</p>
                </div>
                <Button asChild className="care-button-primary w-full">
                  <a href="tel:+61414326448">Call 0414 326 448</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="care-card text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">NDIS Assessment</h3>
                  <p className="care-text text-sm">Complete our NDIS intake form for participants</p>
                </div>
                <Button asChild variant="outline" className="care-button-secondary w-full">
                  <a href="/ndis-intake">NDIS Form</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="care-card text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Email Directly</h3>
                  <p className="care-text text-sm">Send an email for detailed enquiries</p>
                </div>
                <Button asChild variant="outline" className="care-button-secondary w-full">
                  <a href="mailto:info@blessedlejcare.com.au">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;