import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Leaf,
  Building2,
  Apple,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  Award,
  Clock,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-yoga.jpg";
import portrait from "@/assets/garima-portrait.jpg";
import logo from "@/assets/garima-wellness-logo.png";

const EMAIL = "dtgarimasaini@gmail.com";
const WHATSAPP = "919799209036";
const INSTAGRAM = "garima.wellness";

export default function Landing() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", query: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.query.trim()) {
      toast.error("Please fill in your name, email and query.");
      return;
    }
    const subject = encodeURIComponent(`Wellness enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nQuery:\n${form.query}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app to send the message.");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <img src={logo} alt="Garima Wellness logo" className="h-10 w-10 object-contain" />
            <span>Garima Wellness</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <button onClick={() => scrollTo("services")} className="hover:text-primary transition">Services</button>
            <button onClick={() => scrollTo("about")} className="hover:text-primary transition">About</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-primary transition">Contact</button>
          </div>
          <Button size="sm" onClick={() => scrollTo("contact")}>Book a Session</Button>
        </nav>
      </header>

      <section className="relative pt-16 min-h-[92vh] flex items-center">
        <img
          src={heroImg}
          alt="Yoga at sunrise"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" /> 500 Hr YTTC · 1500+ Teaching Hours
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight drop-shadow-sm">
            Breathe. Move. <span className="text-foreground">Reconnect.</span>
          </h1>
          <div className="mx-auto mb-10 max-w-2xl rounded-2xl bg-background/80 backdrop-blur-sm border border-border p-6 shadow-sm">
            <p className="text-lg md:text-xl text-foreground font-medium">
              Transformative yoga retreats and corporate wellness sessions guided by Garima Saini —
              certified yoga instructor and nutritionist.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" onClick={() => scrollTo("services")}>Explore Sessions</Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("contact")}>Get in Touch</Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">What I Offer</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Wellness, tailored to you</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Leaf, title: "Yoga Retreats", desc: "Immersive multi-day retreats in nature — asana, pranayama, meditation and mindful living." },
              { icon: Building2, title: "Corporate Wellness", desc: "On-site and virtual sessions to reduce stress, boost focus and build healthier teams." },
              { icon: Apple, title: "Nutrition Guidance", desc: "Personalised plans rooted in food science — balance, energy and lasting wellbeing." },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-8 bg-card border-border hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-muted/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl -rotate-2" />
            <img
              src={portrait}
              alt="Garima Saini"
              width={800}
              height={1024}
              loading="lazy"
              className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Hi, I'm Garima Saini</h2>
            <div className="space-y-4 text-foreground/85 text-base md:text-lg leading-relaxed mb-8 font-medium">
              <p>
                I am a certified yoga instructor, retreat facilitator and corporate wellness coach
                dedicated to helping individuals and organisations cultivate balance, resilience and
                lasting wellbeing. Over the past three years, I have guided more than{" "}
                <span className="text-foreground font-bold">1,500 hours of teaching</span> across
                immersive retreats, studio classes, private sessions and corporate programmes.
              </p>
              <p>
                My practice is grounded in a <span className="text-foreground font-bold">500-hour
                Yoga Teacher Training Certification (YTTC)</span> spanning classical Hatha, Vinyasa,
                pranayama, meditation and yogic philosophy. I design each session to meet students
                where they are — from first-time beginners discovering breath awareness to seasoned
                practitioners refining their alignment and inner stillness.
              </p>
              <p>
                Alongside yoga, I work as a freelance nutritionist with a{" "}
                <span className="text-foreground font-bold">Master's degree in Food Science &
                Technology</span>. This unique blend allows me to bridge ancient yogic wisdom with
                modern, evidence-based nutrition — creating holistic wellness programmes that
                nourish the body, calm the mind and restore natural rhythm to everyday life.
              </p>
              <p>
                Whether you are seeking a transformative retreat in nature, a thoughtfully crafted
                corporate wellness initiative for your team, or personalised guidance on your
                wellness journey — I'd be honoured to walk that path with you.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-card border border-border">
                <Award className="h-5 w-5 text-primary mb-2" />
                <p className="text-2xl font-semibold">500 Hr</p>
                <p className="text-sm text-muted-foreground">YTTC Certified</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <Clock className="h-5 w-5 text-primary mb-2" />
                <p className="text-2xl font-semibold">1500+</p>
                <p className="text-sm text-muted-foreground">Teaching Hours</p>
              </div>
            </div>
            <a
              href={`https://instagram.com/${INSTAGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition font-medium"
            >
              <Instagram className="h-4 w-4" /> @{INSTAGRAM}
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let's begin your wellness journey</h2>
            <p className="text-muted-foreground">Share a few details and I'll get back to you personally.</p>
          </div>
          <Card className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="query">Your query</Label>
                <Textarea id="query" rows={5} value={form.query} onChange={(e) => setForm({ ...form, query: e.target.value })} maxLength={1000} required className="mt-1.5" />
              </div>
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-primary transition">
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition">
                <Phone className="h-4 w-4" /> +91 97992 09036
              </a>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-10 px-6 text-center text-sm text-muted-foreground">
        <div className="flex justify-center gap-6 mb-4">
          <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition">
            <Instagram className="h-5 w-5" />
          </a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-primary transition">
            <MessageCircle className="h-5 w-5" />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover:text-primary transition">
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Garima Wellness · Breathe. Move. Reconnect.</p>
      </footer>

      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Garima, I'd like to know more about your wellness sessions.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
