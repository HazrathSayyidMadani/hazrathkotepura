import { useState, useEffect } from "react";
import { FaUser, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaPaperPlane } from "react-icons/fa";
import { submitAlumni, fetchAlumni } from "../utils/api";
import school from "../config/school";
import { motion, AnimatePresence } from "framer-motion";

function Alumni() {
  const [form, setForm] = useState({ name: "", phone: "", place: "" });
  const [alumniList, setAlumniList] = useState([]);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [loadingList, setLoadingList] = useState(true);

  const loadAlumni = async () => {
    try {
      const result = await fetchAlumni(school.id);
      if (result.success) {
        setAlumniList(result.data || []);
      }
    } catch (err) {
      console.error("Failed to load alumni list:", err);
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    loadAlumni();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const result = await submitAlumni({ school: school.id, ...form });
      setStatus({ type: "success", message: result.message });
      setForm({ name: "", phone: "", place: "" });
      loadAlumni(); // reload the list
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  const maskPhone = (phone) => {
    if (!phone) return "";
    const cleaned = phone.replace(/\s+/g, "");
    if (cleaned.length <= 4) return "XXXX";
    return cleaned.slice(0, 4) + "X".repeat(cleaned.length - 4);
  };

  const formatDate = (isoStr) => {
    try {
      return new Date(isoStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (e) {
      return "";
    }
  };

  const inputClass =
    "w-full pl-11 pr-4 py-3 md:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] text-gray-900 transition-all";

  return (
    <section id="alumni" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider"
            style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)", color: "var(--primary)" }}
          >
            <FaGraduationCap className="text-base" /> Alumni Community
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight mb-4">
            Connect with Our Alumni Network
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Are you a former student? Join our directory to stay in touch with {school.fullName}, connect with old peers, and inspire future generations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Registration Form */}
          <div
            className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
              Join the Directory
            </h3>

            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700 border-green-200"
                    : "bg-red-50 text-red-700 border-red-200"
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaUser />
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaPhone />
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  required
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaMapMarkerAlt />
                </span>
                <input
                  type="text"
                  name="place"
                  value={form.place}
                  onChange={handleChange}
                  placeholder="Current Location / Place *"
                  required
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white py-3 md:py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 hover:shadow-xl active:scale-[0.98]"
                style={{ backgroundColor: "var(--primary)" }}
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Register Details <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Directory Listings */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 max-h-[580px] flex flex-col" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-950 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: "var(--accent)" }}></span>
                Registered Alumni
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-semibold">
                {alumniList.length} Members
              </span>
            </h3>

            {loadingList ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <div className="w-8 h-8 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>Loading alumni directory...</p>
              </div>
            ) : alumniList.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
                <FaGraduationCap className="text-5xl mb-4 text-gray-300" />
                <p className="font-semibold text-gray-700">No registered alumni yet</p>
                <p className="text-sm px-4">Be the first to register and kickstart the {school.name} alumni network!</p>
              </div>
            ) : (
              <div className="overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-200">
                <AnimatePresence>
                  {alumniList.map((alumnus) => (
                    <motion.div
                      key={alumnus.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-4 hover:border-[var(--primary)]/20 transition-all hover:shadow-md"
                    >
                      <div
                        className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-lg uppercase shrink-0 shadow-sm"
                        style={{ backgroundColor: "var(--primary)" }}
                      >
                        {alumnus.name ? alumnus.name[0] : "A"}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-bold text-gray-950 truncate">{alumnus.name}</h4>
                          <span className="text-[10px] text-gray-400 font-semibold uppercase whitespace-nowrap">
                            {formatDate(alumnus.createdAt)}
                          </span>
                        </div>
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-500">
                          <div className="flex items-center gap-2 truncate">
                            <FaMapMarkerAlt className="text-[var(--accent)] shrink-0" />
                            <span className="truncate">{alumnus.place}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaPhone className="text-gray-400 shrink-0" />
                            <span className="font-mono tracking-wider text-xs">{maskPhone(alumnus.phone)}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Alumni;
