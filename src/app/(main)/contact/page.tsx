import { Metadata } from 'next';
import { ContactForm } from './_components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

console.log("Loaded contact page");

export const metadata: Metadata = {
  title: 'Contact Us - Sardar Ji',
  description: 'Get in touch with Sardar Ji for sales, export inquiries, or any questions.',
};

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary">Contact Us</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We'd love to hear from you! Whether you have questions about our products, need assistance with an order, or want to discuss export opportunities, please reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Our Information</h2>
           <div className="flex items-start gap-4 p-4 border rounded-lg bg-card shadow-sm">
            <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:sukhdeepagri.exports@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              sukhdeepagri.exports@gmail.com
              </a>
              <p className="text-xs text-muted-foreground mt-1">For general inquiries and support</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border rounded-lg bg-card shadow-sm">
            <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:+919814308605" className="text-muted-foreground hover:text-primary transition-colors">
                +91 9814308605
              </a>
              <p className="text-xs text-muted-foreground mt-1">Mon-Sat, 9 AM - 6 PM IST</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border rounded-lg bg-card shadow-sm">
            <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-muted-foreground">
                Shop No. 88, New Grain Market Khanna 141401, Punjab India  {/* Replace with actual address */}
              </p>
               <p className="text-xs text-muted-foreground mt-1">Visits by appointment only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
