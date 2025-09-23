import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

const FAQ = () => {
  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <>
      <title>Frequently Asked Questions — Blessed LEJ Care</title>
      
      <section className="care-section bg-gradient-to-br from-background to-secondary">
        <div className="care-container">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="care-heading">Frequently Asked Questions</h1>
            <p className="care-subheading">
              Find answers to common questions about our aged care and disability support services
            </p>
          </div>
        </div>
      </section>

      <section className="care-section">
        <div className="care-container max-w-4xl mx-auto">
          {categories.map(category => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs
                  .filter(faq => faq.category === category)
                  .sort((a, b) => a.order - b.order)
                  .map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-xl px-6">
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="care-text">{faq.answer}</div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;