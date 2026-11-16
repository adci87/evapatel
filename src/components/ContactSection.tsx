import { useEffect, useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { DESTINATIONS, SERVICES } from '../data/hotelData';

interface ContactSectionProps {
  selectedCity: string;
  selectedService: string;
}

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactSection({
  selectedCity,
  selectedService,
}: ContactSectionProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    email: '',
    phone: '',
    destination: selectedCity || DESTINATIONS[0].city,
    service: selectedService || SERVICES[0].inquiryValue,
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      destination: selectedCity,
    }));
  }, [selectedCity]);

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      service: selectedService,
    }));
  }, [selectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.fullName.trim() || values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim() || !emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (values.phone.trim() && !/^[+\d\s()-]{7,20}$/.test(values.phone.trim())) {
      nextErrors.phone = 'Please enter a valid telephone number or leave blank.';
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message = 'Please share your preferred dates or inquiry details (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const referenceCode = `AG-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(referenceCode);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setErrors({});
    setValues((prev) => ({
      ...prev,
      fullName: '',
      email: '',
      phone: '',
      message: '',
    }));
  };

  return (
    <section id="contact" className="bg-black py-16 sm:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-sm font-medium text-blue-400 tracking-wide">Reservations & Concierge</p>
          <h2 className="mt-2 font-display font-bold tracking-tight text-white text-2xl sm:text-3xl lg:text-4xl [text-wrap:balance]">
            Plan Your Stay in the Netherlands
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed tracking-[0.01em]">
            Contact our Dutch concierge desk for suite availability, private VIP salon reservations, or airport transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left column: Royal Navy direct concierge card */}
          <aside className="lg:col-span-5 bg-[#0B1F3A] border border-blue-900/60 text-white rounded-xl p-7 sm:p-9">
            <h3 className="font-display text-xl font-semibold tracking-wide text-white">
              Direct Concierge Desk
            </h3>
            <p className="mt-2 text-sm text-blue-100/90 leading-relaxed tracking-wide">
              Speak directly with our hospitality and VIP floor coordinators in Amsterdam or Scheveningen.
            </p>

            <div className="mt-8 space-y-6 border-t border-white/15 pt-7 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">Amsterdam Flagship</p>
                  <p className="text-blue-100/80 mt-0.5">
                    Amsteldijk 142, 1079 LE Amsterdam, Netherlands
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">Scheveningen Coastal House</p>
                  <p className="text-blue-100/80 mt-0.5">
                    Strandweg 88, 2586 JK Den Haag, Netherlands
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">Telephone</p>
                  <p className="text-blue-100/80 mt-0.5 tabular-nums">+31 20 800 4490</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-blue-100/80 mt-0.5">concierge@amstelgrand.nl</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">Operating Hours</p>
                  <p className="text-blue-100/80 mt-0.5 tabular-nums">
                    Hotel Reception 24/7 · Gaming Salons 12:00–03:00 CET
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 pt-6 border-t border-white/15 text-xs text-blue-200/80 leading-relaxed">
              18+ Admission · Valid government ID required for casino salon entry under Dutch KSA regulations.
            </p>
          </aside>

          {/* Right column: Dark structural validated contact form */}
          <div className="lg:col-span-7 bg-[#0A0F1A] border border-slate-800 rounded-xl p-7 sm:p-9">
            {submittedRef ? (
              <div className="py-6" role="status" aria-live="polite">
                <div className="flex items-start gap-3 text-blue-400">
                  <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      Inquiry Confirmed
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold text-white">
                      Thank you, {values.fullName}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-base text-slate-300 leading-relaxed">
                  Our {values.destination} concierge team has received your request regarding{' '}
                  <span className="font-medium text-white">{values.service}</span> and will respond to{' '}
                  <span className="font-medium text-white">{values.email}</span> within 2 hours.
                </p>

                <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-black border border-slate-800 text-sm">
                  <div>
                    <dt className="text-xs text-slate-400">Reference Number</dt>
                    <dd className="mt-1 font-semibold text-white tabular-nums">
                      {submittedRef}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-400">Destination</dt>
                    <dd className="mt-1 font-semibold text-white">{values.destination}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-400">Service Focus</dt>
                    <dd className="mt-1 font-semibold text-white truncate">{values.service}</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-150 min-h-[44px] cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-slate-200 mb-1.5"
                    >
                      Full Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={values.fullName}
                      onChange={(e) => {
                        setValues({ ...values, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="Sander van Dijk"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 bg-black border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 ${
                        errors.fullName ? 'border-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.fullName && (
                      <p
                        id="fullName-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-400"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-200 mb-1.5"
                    >
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={(e) => {
                        setValues({ ...values, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="sander@example.nl"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 bg-black border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-400"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="destination"
                      className="block text-sm font-medium text-slate-200 mb-1.5"
                    >
                      Preferred Dutch City
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={values.destination}
                      onChange={(e) =>
                        setValues({ ...values, destination: e.target.value })
                      }
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-white bg-black border border-slate-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500"
                    >
                      {DESTINATIONS.map((dest) => (
                        <option key={dest.id} value={dest.city}>
                          {dest.city} — {dest.district}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-200 mb-1.5"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={(e) =>
                        setValues({ ...values, service: e.target.value })
                      }
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-white bg-black border border-slate-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500"
                    >
                      {SERVICES.map((item) => (
                        <option key={item.id} value={item.inquiryValue}>
                          {item.inquiryValue}
                        </option>
                      ))}
                      <option value="Full Weekend Hotel & Casino Package">
                        Full Weekend Hotel & Casino Package
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-200 mb-1.5"
                  >
                    Telephone (Optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={(e) => {
                      setValues({ ...values, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="+31 6 1234 5678"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 bg-black border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 ${
                      errors.phone ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-400"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-200 mb-1.5"
                  >
                    Dates & Guest Requests <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={values.message}
                    onChange={(e) => {
                      setValues({ ...values, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Share your preferred check-in dates, number of guests, or private salon requests."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 bg-black border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 ${
                      errors.message ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-400"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    Direct concierge response within 2 hours.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
                  >
                    Send Reservation Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
