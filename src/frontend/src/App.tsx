import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  CreditCard,
  Cross,
  Facebook,
  FileText,
  HeartHandshake,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Twitter,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "./hooks/useQueries";

function UtilityBar() {
  return (
    <div className="bg-footer-dark text-white text-xs py-2 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone size={11} />
            Call Us: (800) 555-0199
          </span>
          <span className="hidden sm:block text-white/40">|</span>
          <span className="flex items-center gap-1.5">
            <Mail size={11} />
            info@medbillpro.com
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:text-white/70 transition-colors"
          >
            <Linkedin size={13} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-white/70 transition-colors"
          >
            <Twitter size={13} />
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-white/70 transition-colors"
          >
            <Facebook size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-nav" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-heading font-bold text-xl"
          data-ocid="nav.link"
        >
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center"
            style={{ backgroundColor: "oklch(var(--primary))" }}
          >
            <Cross size={16} className="text-white" />
          </div>
          <span className="text-heading">
            MedBill <span style={{ color: "oklch(var(--primary))" }}>Pro</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-label hover:text-heading transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full text-sm font-semibold"
            style={{ backgroundColor: "oklch(var(--primary))", color: "white" }}
            data-ocid="nav.primary_button"
          >
            <a href="#contact">Get a Free Quote</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-heading"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-label hover:text-heading py-1"
              onClick={() => setMenuOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <Button
            className="rounded-full mt-2"
            style={{ backgroundColor: "oklch(var(--primary))", color: "white" }}
            onClick={() => {
              setMenuOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get a Free Quote
          </Button>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="bg-band py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border"
            style={{
              borderColor: "oklch(var(--primary) / 0.3)",
              color: "oklch(var(--primary))",
              backgroundColor: "oklch(var(--primary) / 0.07)",
            }}
          >
            <Stethoscope size={12} />
            Trusted by 500+ Healthcare Providers
          </div>
          <h1
            className="font-heading font-extrabold text-heading leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Maximize Your Practice Revenue with Expert Medical Billing
          </h1>
          <p className="text-body text-base leading-relaxed max-w-lg">
            MedBill Pro delivers comprehensive revenue cycle management
            solutions that reduce claim denials, accelerate reimbursements, and
            let you focus on what matters most — patient care.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="rounded-full font-semibold text-sm"
              style={{
                backgroundColor: "oklch(var(--primary))",
                color: "white",
              }}
              data-ocid="hero.primary_button"
            >
              <a href="#services">
                Explore Services
                <ChevronRight size={16} className="ml-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full font-semibold text-sm"
              style={{
                borderColor: "oklch(var(--primary))",
                color: "oklch(var(--primary))",
              }}
              data-ocid="hero.secondary_button"
            >
              <a href="#contact">Schedule a Consultation</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/assets/generated/hero-medical-billing.dim_800x600.jpg"
              alt="Medical billing professionals at work"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
          <div
            className="absolute -bottom-4 -left-4 rounded-xl p-4 shadow-card bg-white"
            style={{ border: "1px solid oklch(var(--border))" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "oklch(var(--primary) / 0.12)" }}
              >
                <TrendingUp
                  size={18}
                  style={{ color: "oklch(var(--primary))" }}
                />
              </div>
              <div>
                <div className="text-xs text-label">Revenue Increase</div>
                <div className="text-lg font-bold text-heading">+30%</div>
              </div>
            </div>
          </div>
          <div
            className="absolute -top-4 -right-4 rounded-xl p-4 shadow-card bg-white"
            style={{ border: "1px solid oklch(var(--border))" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "oklch(var(--primary) / 0.12)" }}
              >
                <CheckCircle2
                  size={18}
                  style={{ color: "oklch(var(--primary))" }}
                />
              </div>
              <div>
                <div className="text-xs text-label">Claim Acceptance</div>
                <div className="text-lg font-bold text-heading">98%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: FileText,
    title: "Claims Submission",
    description:
      "Accurate, timely electronic claims submission to all major payers with real-time status tracking and automated follow-up.",
  },
  {
    icon: CreditCard,
    title: "Payment Posting",
    description:
      "Rapid posting of all payments from insurers and patients with detailed reconciliation reports and exception handling.",
  },
  {
    icon: ShieldAlert,
    title: "Denial Management",
    description:
      "Proactive denial identification, root cause analysis, and swift appeals to recover maximum reimbursements.",
  },
  {
    icon: Users,
    title: "Patient Billing",
    description:
      "Clear, compassionate patient statements, flexible payment plans, and a dedicated support line to reduce disputes.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Cycle Management",
    description:
      "End-to-end RCM oversight from patient registration through final payment, optimizing every step for peak performance.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold mb-2"
            style={{ color: "oklch(var(--primary))" }}
          >
            WHAT WE OFFER
          </p>
          <h2 className="font-heading font-bold text-heading text-3xl">
            Our Specialized Billing Services
          </h2>
          <p className="mt-3 text-body max-w-xl mx-auto">
            Comprehensive medical billing solutions tailored to the unique needs
            of healthcare practices of all sizes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 border shadow-card hover:shadow-nav transition-shadow group"
              style={{ borderColor: "oklch(var(--border))" }}
              data-ocid={`services.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "oklch(var(--primary) / 0.1)" }}
              >
                <service.icon
                  size={22}
                  style={{ color: "oklch(var(--primary))" }}
                />
              </div>
              <h3 className="font-semibold text-heading text-base mb-2">
                {service.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-semibold mt-4 group-hover:gap-2 transition-all"
                style={{ color: "oklch(var(--primary))" }}
              >
                Learn More <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const stats = [
    { value: "98%", label: "Claim Acceptance Rate" },
    { value: "30%", label: "Avg. Revenue Increase" },
    { value: "500+", label: "Providers Served" },
  ];

  return (
    <section id="about" className="bg-band py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/assets/generated/about-medical-team.dim_600x500.jpg"
              alt="MedBill Pro team"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-card hidden lg:block"
            style={{ border: "1px solid oklch(var(--border))" }}
          >
            <div className="text-3xl font-extrabold text-heading">15+</div>
            <div className="text-sm text-body mt-1">Years of Excellence</div>
          </div>
        </div>
        <div className="space-y-5">
          <p
            className="text-sm font-semibold"
            style={{ color: "oklch(var(--primary))" }}
          >
            ABOUT US
          </p>
          <h2 className="font-heading font-bold text-heading text-3xl leading-snug">
            About MedBill Pro
          </h2>
          <p className="text-body leading-relaxed">
            Founded in 2010, MedBill Pro is a trusted partner for healthcare
            providers nationwide. We combine deep industry expertise with
            cutting-edge technology to streamline revenue cycles, reduce
            administrative burden, and maximize financial performance for
            practices of all sizes — from solo practitioners to multi-specialty
            groups.
          </p>
          <p className="text-body leading-relaxed">
            Our certified billing specialists bring years of payer-specific
            experience, ensuring every claim is coded accurately and submitted
            on time. We are HIPAA-compliant and committed to the highest
            standards of data security and ethical billing practices.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-4 text-center bg-white shadow-xs border"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                <div
                  className="text-2xl font-extrabold"
                  style={{ color: "oklch(var(--primary))" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-label mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliant",
    description:
      "All processes follow strict HIPAA guidelines. Your patient data is protected with enterprise-grade security and encryption.",
  },
  {
    icon: Zap,
    title: "Faster Reimbursements",
    description:
      "Our optimized submission workflows and proactive follow-up reduce average reimbursement time by up to 40%.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description:
      "A named account manager and billing specialist team available to answer your questions and resolve issues quickly.",
  },
  {
    icon: BarChart3,
    title: "Proven Results",
    description:
      "Track record of increasing net collections by 15–30% within the first 90 days for new clients.",
  },
];

function BenefitsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold mb-2"
            style={{ color: "oklch(var(--primary))" }}
          >
            OUR ADVANTAGES
          </p>
          <h2 className="font-heading font-bold text-heading text-3xl">
            Why Choose MedBill Pro?
          </h2>
          <p className="mt-3 text-body max-w-xl mx-auto">
            We go beyond basic billing to become a true revenue growth partner
            for your practice.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="text-center space-y-3"
              data-ocid={`benefits.item.${i + 1}`}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                style={{ backgroundColor: "oklch(var(--primary) / 0.1)" }}
              >
                <benefit.icon
                  size={26}
                  style={{ color: "oklch(var(--primary))" }}
                />
              </div>
              <h3 className="font-semibold text-heading text-base">
                {benefit.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Patient Registration",
    description:
      "Accurate patient demographics and insurance info captured at intake.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Charge Capture",
    description: "All services documented with correct CPT and ICD-10 codes.",
  },
  {
    number: "03",
    icon: Send,
    title: "Claims Submission",
    description:
      "Clean claims submitted electronically to payers within 24 hours.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Payment Posting",
    description:
      "Payments posted promptly with full reconciliation and reporting.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Reporting & Analytics",
    description: "Detailed performance dashboards delivered monthly.",
  },
];

function ProcessSection() {
  return (
    <section id="process" className="bg-band py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold mb-2"
            style={{ color: "oklch(var(--primary))" }}
          >
            HOW IT WORKS
          </p>
          <h2 className="font-heading font-bold text-heading text-3xl">
            Our Streamlined Process
          </h2>
          <p className="mt-3 text-body max-w-xl mx-auto">
            A proven five-step system designed to maximize collections and
            minimize administrative burden.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative bg-white rounded-xl p-6 text-center shadow-card border"
              style={{ borderColor: "oklch(var(--border))" }}
              data-ocid={`process.item.${i + 1}`}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold text-white"
                style={{ backgroundColor: "oklch(var(--primary))" }}
              >
                {step.number}
              </div>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: "oklch(var(--primary) / 0.08)" }}
              >
                <step.icon
                  size={18}
                  style={{ color: "oklch(var(--primary))" }}
                />
              </div>
              <h3 className="font-semibold text-heading text-sm mb-2">
                {step.title}
              </h3>
              <p className="text-body text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const { mutate, isPending, isSuccess } = useSubmitContact();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        message: form.message,
      },
      {
        onSuccess: () => {
          toast.success(
            "Message sent! We'll be in touch within 1 business day.",
          );
          setForm({ name: "", email: "", phone: "", company: "", message: "" });
        },
        onError: () => {
          toast.error(
            "Something went wrong. Please try again or call us directly.",
          );
        },
      },
    );
  };

  return (
    <section id="contact" className="bg-band py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div className="space-y-6 pt-2">
          <p
            className="text-sm font-semibold"
            style={{ color: "oklch(var(--primary))" }}
          >
            GET IN TOUCH
          </p>
          <h2 className="font-heading font-bold text-heading text-3xl leading-snug">
            Get Started Today
          </h2>
          <p className="text-body leading-relaxed">
            Ready to transform your practice's revenue cycle? Fill out the form
            and one of our billing experts will contact you within one business
            day to discuss your specific needs and a customized solution.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(var(--primary) / 0.1)" }}
              >
                <Phone size={16} style={{ color: "oklch(var(--primary))" }} />
              </div>
              <div>
                <div className="text-xs text-label">Phone</div>
                <div className="text-sm font-semibold text-heading">
                  (800) 555-0199
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(var(--primary) / 0.1)" }}
              >
                <Mail size={16} style={{ color: "oklch(var(--primary))" }} />
              </div>
              <div>
                <div className="text-xs text-label">Email</div>
                <div className="text-sm font-semibold text-heading">
                  info@medbillpro.com
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(var(--primary) / 0.1)" }}
              >
                <MapPin size={16} style={{ color: "oklch(var(--primary))" }} />
              </div>
              <div>
                <div className="text-xs text-label">Address</div>
                <div className="text-sm font-semibold text-heading">
                  1200 Healthcare Blvd, Suite 400
                  <br />
                  Chicago, IL 60601
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div
          className="bg-white rounded-2xl p-8 shadow-card border"
          style={{ borderColor: "oklch(var(--border))" }}
          data-ocid="contact.panel"
        >
          {isSuccess ? (
            <div className="text-center py-8" data-ocid="contact.success_state">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "oklch(var(--primary) / 0.1)" }}
              >
                <CheckCircle2
                  size={30}
                  style={{ color: "oklch(var(--primary))" }}
                />
              </div>
              <h3 className="font-bold text-heading text-xl mb-2">
                Thank You!
              </h3>
              <p className="text-body text-sm">
                Your inquiry has been received. A billing expert will contact
                you within 1 business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-heading"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dr. Jane Smith"
                    required
                    autoComplete="name"
                    data-ocid="contact.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-heading"
                  >
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@clinic.com"
                    required
                    autoComplete="email"
                    data-ocid="contact.input"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-heading"
                  >
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(312) 555-0123"
                    autoComplete="tel"
                    data-ocid="contact.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="company"
                    className="text-sm font-medium text-heading"
                  >
                    Practice Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Smith Family Medicine"
                    autoComplete="organization"
                    data-ocid="contact.input"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-heading"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your practice and billing challenges..."
                  rows={4}
                  data-ocid="contact.textarea"
                />
              </div>
              <Button
                type="submit"
                disabled={isPending}
                className="w-full rounded-full font-semibold"
                style={{
                  backgroundColor: "oklch(var(--primary))",
                  color: "white",
                }}
                data-ocid="contact.submit_button"
              >
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="bg-white border-t"
      style={{ borderColor: "oklch(var(--border))" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Col 1 — Logo + tagline */}
        <div className="space-y-4">
          <a
            href="#home"
            className="flex items-center gap-2 font-heading font-bold text-xl"
          >
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center"
              style={{ backgroundColor: "oklch(var(--primary))" }}
            >
              <Cross size={16} className="text-white" />
            </div>
            <span className="text-heading">
              MedBill{" "}
              <span style={{ color: "oklch(var(--primary))" }}>Pro</span>
            </span>
          </a>
          <p className="text-body text-sm leading-relaxed max-w-xs">
            Expert medical billing solutions helping healthcare practices
            maximize revenue and minimize administrative burden since 2010.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Linkedin, url: "https://linkedin.com" },
              { Icon: Twitter, url: "https://twitter.com" },
              { Icon: Facebook, url: "https://facebook.com" },
            ].map(({ Icon, url }) => (
              <a
                key={url}
                href={url}
                className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors hover:bg-accent"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                <Icon size={14} className="text-label" />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="font-semibold text-heading mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-body text-sm hover:text-heading transition-colors"
                  data-ocid="footer.link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h4 className="font-semibold text-heading mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-body">
              <MapPin
                size={15}
                className="mt-0.5 flex-shrink-0"
                style={{ color: "oklch(var(--primary))" }}
              />
              <span>
                1200 Healthcare Blvd, Suite 400
                <br />
                Chicago, IL 60601
              </span>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-body">
              <Phone size={15} style={{ color: "oklch(var(--primary))" }} />
              (800) 555-0199
            </li>
            <li className="flex items-center gap-2.5 text-sm text-body">
              <Mail size={15} style={{ color: "oklch(var(--primary))" }} />
              info@medbillpro.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-footer-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <span>© {year} MedBill Pro. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              className="underline hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Toaster position="top-center" />
      <UtilityBar />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <BenefitsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
