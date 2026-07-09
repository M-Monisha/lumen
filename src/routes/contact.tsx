import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const COUNTRY_CODES = [
  { code: "+91", label: "+91 India" },
  { code: "+1", label: "+1 USA" },
  { code: "+44", label: "+44 UK" },
  { code: "+65", label: "+65 Singapore" },
  { code: "+94", label: "+94 Sri Lanka" },
  { code: "+880", label: "+880 Bangladesh" },
  { code: "+977", label: "+977 Nepal" },
  { code: "+960", label: "+960 Maldives" },
];

const ROLES = [
  "Reseller/SI/Contractor",
  "End Customer",
  "OEM",
  "Consultant",
];

const INTERESTS = [
  "Network Infrastructure",
  "Safety & Security",
  "Business Productivity",
  "Test & Measurement",
  "Drones",
  "All of the Above",
];

const CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Surat",
  "Jaipur",
  "Lucknow",
  "Bhopal",
  "Nagpur",
  "Kochi",
  "Chandigarh",
  "Indore",
  "Coimbatore",
  "Visakhapatnam",
  "Other",
];

function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    role: "",
    interest: "",
    city: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const body = [
      `Full Name: ${form.fullName}`,
      `Company Name: ${form.companyName}`,
      `Business Email: ${form.email}`,
      `Phone: ${form.countryCode} ${form.phone}`,
      `I am a: ${form.role}`,
      `Area of Interest: ${form.interest}`,
      `Nearest City/Branch: ${form.city}`,
      ``,
      `Message:`,
      form.message,
    ].join("\n");

    const subject = encodeURIComponent(
      `Contact Form – ${form.fullName || "New Enquiry"}`
    );
    const encodedBody = encodeURIComponent(body);

    window.location.href = `mailto:info@pvlumens.com?subject=${subject}&body=${encodedBody}`;
  }

  const inputClass =
    "w-full rounded-xl border-2 border-sky-200 bg-white px-4 py-3 text-navy-deep placeholder:text-gray-400 text-sm focus:outline-none focus:border-sky-400 transition-colors";

  const labelClass = "block text-sm font-semibold text-navy-deep mb-1.5";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div
        className="relative py-20 px-6 text-white overflow-hidden"
        style={{ backgroundColor: "#0a1f44" }}
      >
        {/* subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sky-300 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </Link>
          <h1
            className="text-4xl sm:text-5xl font-semibold leading-tight"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Get in Touch
          </h1>
          <p className="mt-4 text-sky-200 text-base max-w-xl mx-auto leading-relaxed">
            Whether you're a reseller, end customer, or OEM partner — we'd love
            to hear from you. Fill in the form and our team will reach out
            within one business day.
          </p>
        </div>
      </div>

      {/* Form card */}
      <div className="flex-1 py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row: Full Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className={labelClass}>
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Your company"
                    value={form.companyName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Business Email */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  Business Email <span className="text-sky-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Phone with country code */}
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="rounded-xl border-2 border-sky-200 bg-white px-3 py-3 text-navy-deep text-sm focus:outline-none focus:border-sky-400 transition-colors shrink-0"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={handleChange}
                    className={`${inputClass} flex-1`}
                  />
                </div>
              </div>

              {/* Row: Role + Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="role" className={labelClass}>
                    I am a
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select role...</option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="interest" className={labelClass}>
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select interest...</option>
                    {INTERESTS.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Nearest City */}
              <div>
                <label htmlFor="city" className={labelClass}>
                  Nearest City / Branch
                </label>
                <select
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select city...</option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-navy-deep text-white rounded-full px-8 py-3 text-sm font-semibold hover:opacity-90 active:scale-95 transition"
                  style={{ backgroundColor: "#0a1f44" }}
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Direct contact note */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Prefer to write directly?{" "}
            <a
              href="mailto:info@pvlumens.com"
              className="text-sky-600 hover:underline font-medium"
            >
              info@pvlumens.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
