import { useState } from "react";
import { Shield, Upload, Send, AlertTriangle, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const NDISIntake = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    address: "",
    phone: "",
    email: "",
    ndisParticipant: "",
    ndisNumber: "",
    planManager: "",
    primaryDiagnosis: "",
    requiredServices: [] as string[],
    preferredDaysTimes: "",
    mobilityNeeds: "",
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactPhone: "",
    consentToStore: false,
    consentToContact: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const serviceOptions = [
    "Personal Care (showering, dressing, grooming)",
    "Domestic Assistance (cleaning, laundry)",
    "Meal Preparation and Nutrition Support",
    "Community Access and Social Activities", 
    "Transport to Appointments",
    "Respite Care for Family Carers",
    "Medication Management",
    "Exercise and Mobility Support",
    "Companionship and Social Support",
    "Other (please specify in additional notes)"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consentToStore || !formData.consentToContact) {
      toast({
        title: "Consent Required",
        description: "Please provide all required consents to proceed.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "NDIS Assessment Submitted Successfully!",
        description: "Thank you for your submission. We'll review your information and contact you within 2 business days to discuss your needs.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        dateOfBirth: "",
        address: "",
        phone: "",
        email: "",
        ndisParticipant: "",
        ndisNumber: "",
        planManager: "",
        primaryDiagnosis: "",
        requiredServices: [],
        preferredDaysTimes: "",
        mobilityNeeds: "",
        emergencyContactName: "",
        emergencyContactRelation: "",
        emergencyContactPhone: "",
        consentToStore: false,
        consentToContact: false
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string, checked: boolean) => {
    const currentServices = formData.requiredServices;
    if (checked) {
      handleInputChange("requiredServices", [...currentServices, service]);
    } else {
      handleInputChange("requiredServices", currentServices.filter(s => s !== service));
    }
  };

  return (
    <>
      <title>NDIS Client Intake Form — Blessed LEJ Care</title>
      <meta 
        name="description" 
        content="Complete our secure NDIS intake form to get started with disability support services. For self-managed and plan-managed NDIS participants." 
      />

      {/* Hero Section */}
      <section className="care-section bg-gradient-to-br from-background to-secondary">
        <div className="care-container">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Shield className="w-12 h-12 text-primary" />
              <h1 className="care-heading">NDIS Client Intake Form</h1>
            </div>
            <p className="care-subheading">
              This secure form helps us understand your NDIS support needs and prepare a tailored service proposal. All information is kept strictly confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy & Security Notice */}
      <section className="care-section bg-care-trust/20">
        <div className="care-container max-w-4xl mx-auto">
          <Card className="care-card border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Privacy & Security Information</h3>
                  <div className="space-y-3 care-text">
                    <p>
                      <strong>Sensitive Information:</strong> This form collects personal and health-related information. 
                      All data is encrypted, stored securely, and access is restricted to authorized personnel only.
                    </p>
                    <p>
                      <strong>Data Usage:</strong> Information provided will be used solely for service delivery, 
                      care planning, and communication with you, your plan manager, and relevant healthcare providers with your consent.
                    </p>
                    <p>
                      <strong>Your Rights:</strong> You have the right to access, correct, or request deletion of your 
                      personal information at any time. See our{" "}
                      <a href="/legal/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for full details.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Intake Form */}
      <section className="care-section">
        <div className="care-container max-w-4xl mx-auto">
          <Card className="care-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                    Personal Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                        placeholder="First and last name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Home Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                      placeholder="Full address including postcode"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        placeholder="04XX XXX XXX"
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
                </div>

                {/* NDIS Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                    NDIS Information
                  </h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ndisParticipant">Are you an NDIS participant? *</Label>
                    <Select
                      value={formData.ndisParticipant}
                      onValueChange={(value) => handleInputChange("ndisParticipant", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Please select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes, I am an NDIS participant</SelectItem>
                        <SelectItem value="no">No, but interested in private services</SelectItem>
                        <SelectItem value="applying">Currently applying for NDIS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {formData.ndisParticipant === "yes" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="ndisNumber">NDIS Number *</Label>
                        <Input
                          id="ndisNumber"
                          value={formData.ndisNumber}
                          onChange={(e) => handleInputChange("ndisNumber", e.target.value)}
                          required={formData.ndisParticipant === "yes"}
                          placeholder="Your NDIS participant number"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="planManager">Plan Management *</Label>
                        <Select
                          value={formData.planManager}
                          onValueChange={(value) => handleInputChange("planManager", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="How is your plan managed?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="self-managed">Self-managed</SelectItem>
                            <SelectItem value="plan-managed">Plan-managed</SelectItem>
                            <SelectItem value="ndia-managed">NDIA managed</SelectItem>
                            <SelectItem value="mixed">Mixed management</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="primaryDiagnosis">Primary Diagnosis (Optional)</Label>
                    <Input
                      id="primaryDiagnosis"
                      value={formData.primaryDiagnosis}
                      onChange={(e) => handleInputChange("primaryDiagnosis", e.target.value)}
                      placeholder="If comfortable sharing, this helps us prepare appropriate support"
                    />
                    <p className="text-sm text-muted-foreground">
                      This information is optional and helps us tailor our services to your specific needs.
                    </p>
                  </div>
                </div>

                {/* Service Requirements */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                    Service Requirements
                  </h2>
                  
                  <div className="space-y-4">
                    <Label>Which services are you interested in? (Select all that apply)</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {serviceOptions.map((service, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Checkbox
                            id={`service-${index}`}
                            checked={formData.requiredServices.includes(service)}
                            onCheckedChange={(checked) => handleServiceToggle(service, checked === true)}
                          />
                          <Label htmlFor={`service-${index}`} className="text-sm leading-relaxed cursor-pointer">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="preferredDaysTimes">Preferred Days and Times</Label>
                    <Textarea
                      id="preferredDaysTimes"
                      value={formData.preferredDaysTimes}
                      onChange={(e) => handleInputChange("preferredDaysTimes", e.target.value)}
                      placeholder="Please let us know your preferred days and times for support services..."
                      rows={4}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mobilityNeeds">Mobility Needs and Accessibility Requirements</Label>
                    <Textarea
                      id="mobilityNeeds"
                      value={formData.mobilityNeeds}
                      onChange={(e) => handleInputChange("mobilityNeeds", e.target.value)}
                      placeholder="Please describe any mobility aids, accessibility needs, or physical considerations..."
                      rows={4}
                    />
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                    Emergency Contact
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContactName">Emergency Contact Name *</Label>
                      <Input
                        id="emergencyContactName"
                        value={formData.emergencyContactName}
                        onChange={(e) => handleInputChange("emergencyContactName", e.target.value)}
                        required
                        placeholder="Full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContactRelation">Relationship *</Label>
                      <Input
                        id="emergencyContactRelation"
                        value={formData.emergencyContactRelation}
                        onChange={(e) => handleInputChange("emergencyContactRelation", e.target.value)}
                        required
                        placeholder="e.g., Parent, Sibling, Friend"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContactPhone">Phone Number *</Label>
                      <Input
                        id="emergencyContactPhone"
                        type="tel"
                        value={formData.emergencyContactPhone}
                        onChange={(e) => handleInputChange("emergencyContactPhone", e.target.value)}
                        required
                        placeholder="04XX XXX XXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Consent & Privacy */}
                <div className="space-y-6 bg-secondary/20 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                    Consent & Privacy
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consentToStore"
                        checked={formData.consentToStore}
                        onCheckedChange={(checked) => handleInputChange("consentToStore", checked === true)}
                        required
                      />
                      <Label htmlFor="consentToStore" className="text-sm leading-relaxed cursor-pointer">
                        <strong>I consent to the storage and processing of my personal information</strong> as described in the{" "}
                        <a href="/legal/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        . I understand this information will be stored securely and used only for service delivery and care planning. *
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consentToContact"
                        checked={formData.consentToContact}
                        onCheckedChange={(checked) => handleInputChange("consentToContact", checked === true)}
                        required
                      />
                      <Label htmlFor="consentToContact" className="text-sm leading-relaxed cursor-pointer">
                        <strong>I consent to be contacted</strong> by Blessed LEJ Care regarding my application and ongoing service delivery. 
                        This may include contact with my plan manager or support coordinator where relevant. *
                      </Label>
                    </div>
                  </div>
                  
                  <div className="bg-care-warm/30 rounded-lg p-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Document Upload (Optional)</h4>
                    </div>
                    <p className="care-text text-sm">
                      You can attach relevant documents such as your NDIS plan, medical reports, or current care plans. 
                      These will help us better understand your needs. Accepted formats: PDF, JPG, PNG (max 10MB total).
                    </p>
                    <Button type="button" variant="outline" size="sm" className="mt-2">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Documents
                    </Button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center space-y-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="care-button-primary px-12"
                  >
                    {isSubmitting ? (
                      <>Submitting Assessment...</>
                    ) : (
                      <>
                        Submit NDIS Assessment <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                  
                  <p className="care-text text-sm text-center max-w-2xl mx-auto">
                    After submission, we'll review your information and contact you within 2 business days 
                    to discuss your needs and how we can support you.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default NDISIntake;