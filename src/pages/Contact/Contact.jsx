import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom duration-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="headings">Get in Touch</h2>
          <p className="text-secondary mt-2 max-w-2xl mx-auto">
            Have questions about sustainability challenges or our platform? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="card bg-base-100 shadow-xl p-8 border border-base-300 hover:border-primary transition-colors group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <FaEnvelope size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-secondary break-all">hello@echotrack.com</p>
                <p className="text-secondary break-all">support@echotrack.com</p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl p-8 border border-base-300 hover:border-primary transition-colors group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <FaPhoneAlt size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-secondary">+1 (555) 000-0000</p>
                <p className="text-secondary">Mon-Fri, 9am - 6pm EST</p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl p-8 border border-base-300 hover:border-primary transition-colors group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <FaMapMarkerAlt size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg">Our Office</h3>
                <p className="text-secondary">123 Eco Avenue</p>
                <p className="text-secondary">Green City, Earth 001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
