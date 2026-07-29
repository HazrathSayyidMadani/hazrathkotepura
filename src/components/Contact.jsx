import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { submitContact } from "../utils/api";
import SectionHeading from "./SectionHeading";
import school from "../config/school";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const result = await submitContact({ school: school.id, ...form });
      setStatus({ type: "success", message: result.message });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full border border-gray-200 p-3 md:p-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30";

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact Us" subtitle="Reach out for admissions, inquiries, or campus visits" />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 mb-10 md:mb-16">
          <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg" data-aos="fade-right">
            {status.message && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                {status.message}
              </div>
            )}
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required className={inputClass} />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className={inputClass} />
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" required className={inputClass} />
            <textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Your Message *" required className={`${inputClass} resize-none`} />
            <button type="submit" disabled={loading} className="text-white px-6 py-3 md:py-4 rounded-xl w-full font-semibold hover:opacity-90 transition disabled:opacity-60" style={{ backgroundColor: "var(--primary)" }}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div data-aos="fade-left" className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--primary)" }}>School Information</h3>
            {[
              { icon: FaMapMarkerAlt, title: "Address", value: school.contact.address },
              { icon: FaPhone, title: "Phone", value: school.contact.phone, href: `tel:${school.contact.phone.replace(/\s/g, "")}` },
              { icon: FaEnvelope, title: "Email", value: school.contact.email, href: `mailto:${school.contact.email}` },
            ].map(({ icon: Icon, title, value, href }) => (
              <div key={title} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 text-white rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--primary)" }}>
                  <Icon />
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: "var(--primary)" }}>{title}</h4>
                  {href ? <a href={href} className="text-gray-600 hover:opacity-80">{value}</a> : <p className="text-gray-600">{value}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4" style={{ color: "var(--primary)" }}>Find Us on Map</h3>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe title={`${school.fullName} Location`} src={school.mapEmbed} width="100%" height="350" className="md:h-[450px]" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
