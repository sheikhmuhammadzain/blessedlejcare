const Terms = () => {
  return (
    <>
      <title>Terms of Service — Blessed LEJ Care</title>
      
      <section className="care-section">
        <div className="care-container max-w-4xl mx-auto">
          <h1 className="care-heading mb-8">Terms of Service</h1>
          <div className="space-y-6 care-text">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Service Description</h2>
              <p>Blessed LEJ Care provides aged care and disability support services as described on our website.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Payment Terms</h2>
              <p>Services are provided according to NDIS pricing or agreed private rates.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Governing Law</h2>
              <p>These terms are governed by the laws of New South Wales, Australia.</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;