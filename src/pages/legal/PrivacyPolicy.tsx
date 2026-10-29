const PrivacyPolicy = () => {
  return (
    <>
      <title>Privacy Policy — Blessed LEJ Care</title>
      
      <section className="care-section">
        <div className="care-container max-w-4xl mx-auto">
          <h1 className="care-heading mb-8">Privacy Policy</h1>
          <div className="space-y-6 care-text">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Who We Are</h2>
              <p>Blessed LEJ Care (ABN: 12345678901) is a sole trader business providing aged care and disability support services.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
              <p>We collect personal information including contact details, health information, and NDIS details as necessary for service delivery.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">How We Use Information</h2>
              <p>Information is used solely for service delivery, care planning, and communication with you and relevant healthcare providers.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p>For privacy concerns, contact us at info@blessedlejcare.com.au or 0414 326 448.</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;