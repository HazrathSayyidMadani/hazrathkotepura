import { useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { submitAdmission } from "../utils/api";
import school from "../config/school";

function Admission() {
  const [form, setForm] = useState({ studentName: "", parentName: "", phone: "", course: "", address: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const result = await submitAdmission({ school: school.id, ...form });
      setStatus({ type: "success", message: result.message });
      setForm({ studentName: "", parentName: "", phone: "", course: "", address: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full border border-gray-200 p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)]";

  return (
    <section id="admissions" className="py-16 md:py-24 text-white" style={{ background: `linear-gradient(to bottom right, var(--primary), var(--primary-light))` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}>
              Admissions Open 2026-27
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Join Our Learning Community</h2>
            <p className="text-blue-100 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Give your child the opportunity to learn, grow, and succeed in a nurturing environment.
            </p>
            <ul className="space-y-2 md:space-y-3 mb-8 text-sm md:text-base">
              {["Experienced Faculty", "Smart Classrooms", "Safe Campus", "Academic Excellence", "Sports & Activities"].map((item) => (
                <li key={item}><span style={{ color: "var(--accent)" }}>✓</span> {item}</li>
              ))}
            </ul>
            <a href="/Prospectus.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[var(--primary)] transition">
              <FaDownload /> Download Prospectus
            </a>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl text-gray-900" data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--primary)" }}>Admission Enquiry</h3>
            {status.message && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${status.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="studentName" value={form.studentName} onChange={handleChange} placeholder="Student Name *" required className={inputClass} />
              <input type="text" name="parentName" value={form.parentName} onChange={handleChange} placeholder="Parent / Guardian Name" className={inputClass} />
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" required className={inputClass} />
              <select name="course" value={form.course} onChange={handleChange} required className={`${inputClass} bg-white`}>
                <option value="">Select Class *</option>
                {school.classes.map((cls) => <option key={cls} value={cls}>{cls}</option>)}
              </select>
              <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Address" className={inputClass} />
              <button type="submit" disabled={loading} className="w-full text-white py-3 md:py-4 rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-60" style={{ backgroundColor: "var(--primary)" }}>
                {loading ? "Submitting..." : <>Submit Enquiry <FaArrowRight /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admission;
