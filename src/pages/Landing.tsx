import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Building2,
  Sunrise,
  Wheat,
  Flower2,
  PartyPopper,
  Sparkles,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  Star,
  Award,
  Clock,
  Users,
  Leaf,
  Heart,
} from "lucide-react";
import heroImg from "@/assets/hero-yoga.jpg";
import portrait from "@/assets/garima-portrait.jpg";
import logo from "@/assets/garima-wellness-logo.png";

const EMAIL = "dtgarimasaini@gmail.com";
const WHATSAPP = "919799209036";
const INSTAGRAM = "garima.wellness";
const WEB3FORMS_KEY = "a25430e7-e809-4bc5-973f-0556d4ad806c";

export default function Landing() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    preference: "",
    goals: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Wellness enquiry from ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested In: ${form.interest}\nSession Preference: ${form.preference}\n\nGoals:\n${form.goals}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.email.trim() || !form.interest.trim() || !form.consent) {
      toast.error("Please fill required fields and accept the consent.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Wellness enquiry from ${form.firstName} ${form.lastName}`.trim(),
          from_name: `${form.firstName} ${form.lastName}`.trim() || "Garima Wellness enquiry",
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          phone: form.phone,
          interested_in: form.interest,
          session_preference: form.preference,
          goals: form.goals,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Thank you! Your message has been sent — Garima will reply within 24 hours.");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          interest: "",
          preference: "",
          goals: "",
          consent: false,
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch {
      toast.error("Couldn't send automatically — opening your email app as a backup.");
      mailtoFallback();
    } finally {
      setSubmitting(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <img src={logo} alt="Garima Wellness logo" className="h-10 w-10 object-contain" />
            <span>Garima Wellness</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest text-muted-foreground">
            <button onClick={() => scrollTo("about")} className="hover:text-primary transition">About</button>
            <button onClick={() => scrollTo("services")} className="hover:text-primary transition">Services</button>
            <button onClick={() => scrollTo("approach")} className="hover:text-primary transition">Approach</button>
            <button onClick={() => scrollTo("stories")} className="hover:text-primary transition">Stories</button>
          </div>
          <Button size="sm" onClick={() => scrollTo("contact")}>Book a Call</Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-16 min-h-[92vh] flex items-center">
        <img src={heroImg} alt="Yoga at sunrise" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
        {/* Light overlay to wash out the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        {/* Green glow from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-transparent to-transparent" />
        {/* Green glow from right */}
        <div className="absolute inset-0 bg-gradient-to-l from-primary/25 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Yoga · Wellness · Nutrition · Mindfulness
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight drop-shadow-sm">
            Your Body Remembers <br />
            <span className="italic" style={{ color: '#0a2a1a' }}>What Peace Feels Like.</span>
          </h1>
          <div className="mx-auto mb-10 max-w-2xl rounded-2xl bg-background/85 backdrop-blur-sm border border-border p-6 shadow-sm">
            <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
              Begin your journey back to wholeness — through the timeless wisdom of yoga, the power of
              mindful nutrition, and the healing science of mental wellness. With 1500+ teaching hours
              and 1,200+ lives guided, Garima Wellness is where transformation begins.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" onClick={() => scrollTo("contact")}>Start Your Journey</Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("services")}>Explore Services</Button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { v: "5+", l: "Years in Wellness" },
            { v: "3+", l: "Years Teaching Yoga" },
            { v: "500H", l: "YTTC Certified" },
            { v: "1200+", l: "People Trained" },
            { v: "100%", l: "Holistic Approach" },
          ].map((t) => (
            <div key={t.l}>
              <p className="text-2xl md:text-3xl font-semibold">{t.v}</p>
              <p className="text-xs uppercase tracking-widest opacity-80 mt-1">{t.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOOK QUOTE */}
      <section className="py-20 px-6 bg-secondary/40 text-center">
        <p className="font-serif italic text-2xl md:text-3xl text-foreground max-w-3xl mx-auto leading-relaxed mb-6">
          "You don't need to fix yourself. You need to remember who you were before the world told
          you something was broken."
        </p>
        <Button variant="outline" onClick={() => scrollTo("contact")}>Claim Your Free Discovery Call</Button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl -rotate-2" />
            <img
              src={portrait}
              alt="Garima Saini"
              loading="lazy"
              decoding="async"
              className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-primary text-primary-foreground px-5 py-4 rounded-md shadow-lg text-center">
              <p className="font-serif text-3xl leading-none font-semibold">500H</p>
              <p className="text-[10px] uppercase tracking-widest mt-1 opacity-90">YTTC Certified</p>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">About Garima</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
              I Didn't Just Study Wellness. <br />
              <span className="italic text-primary">I Lived My Way Back To It.</span>
            </h2>
            <div className="space-y-4 text-foreground/85 text-base md:text-lg leading-relaxed mb-8 font-medium">
              <p>
                Hello, I'm Garima — a certified yoga instructor, wellness coach, and your guide back
                to yourself. My journey began not in a studio, but in the quiet crisis of burnout,
                disconnection, and searching. What I found changed everything.
              </p>
              <p>
                Over the past 5+ years, I have immersed myself in the world of holistic health —
                completing a rigorous 500-hour Yoga Teacher Training, studying the ancient science of
                nutrition, and guiding over 1,200 individuals through online and offline sessions. My
                work spans corporate boardrooms, serene retreat centers, and intimate group circles
                — wherever people are ready to come home to themselves.
              </p>
              <p>
                My approach is never one-size-fits-all. I blend the precision of Hatha yoga, the
                depth of yogic philosophy, the stillness of meditation, and the nourishment of
                ancient nutrition — crafting a practice that meets you exactly where you are.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: Flower2, t: "Hatha Yoga", d: "Classical postures for strength, flexibility & alignment" },
                { icon: Award, t: "Yoga Philosophy", d: "Ancient wisdom for modern living" },
                { icon: Sparkles, t: "Meditation", d: "Mindfulness & stillness practices for lasting calm" },
                { icon: Leaf, t: "Ancient Nutrition", d: "Food as medicine — Ayurvedic & holistic guidance" },
                { icon: Heart, t: "Mental Wellness", d: "Mind-body tools for anxiety, stress & emotional balance" },
                { icon: Users, t: "Corporate Wellness", d: "Customized programs for teams & organizations" },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-3 p-3 rounded-md bg-card border-l-2 border-primary">
                  <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">{t}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button onClick={() => scrollTo("contact")}>Book a Session with Garima</Button>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 px-6 bg-primary text-primary-foreground text-center">
        <blockquote className="font-serif italic text-2xl md:text-4xl max-w-3xl mx-auto leading-relaxed font-light mb-4">
          "Yoga is not about touching your toes — it is about what you learn on the way down."
        </blockquote>
        <cite className="text-xs uppercase tracking-widest opacity-70 not-italic">
          — The Garima Wellness Philosophy
        </cite>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-muted/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Programs Designed For Real Transformation</h2>
            <p className="text-muted-foreground">
              Whether you're a beginner stepping onto the mat for the first time or a corporate team
              looking to reset — there's a path here for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Corporate Yoga & Wellness",
                desc: "Your team works hard. Let them breathe. Science-backed yoga, mindfulness, and stress-management workshops brought directly to your workplace — reducing burnout and improving focus.",
                meta: "On-site yoga · Mindfulness workshops · Wellness audits · Leadership programs",
                tag: "Onsite & Virtual",
              },
              {
                icon: Sunrise,
                title: "Wellness Retreats",
                desc: "Step away. Breathe deeply. Reconnect. Immersive retreats combining yoga, meditation, ancient nutrition workshops, and guided reflection — the reset your nervous system has been asking for.",
                meta: "Sunrise yoga · Meditative walks · Ayurvedic meals · Breathwork · Journaling",
                tag: "Weekend & Extended",
              },
              {
                icon: Wheat,
                title: "Nutritional Coaching",
                desc: "Fad diets exhaust you. Ancient nutrition nourishes you. Rooted in Ayurvedic principles and modern nutritional science, my coaching helps you eat with intention — not guilt.",
                meta: "Dosha guidance · Anti-inflammatory foods · Gut health · Seasonal eating",
                tag: "1-on-1 & Group",
              },
              {
                icon: Flower2,
                title: "Group Yoga Classes",
                desc: "Community changes everything. Group classes offer the warmth of shared practice — structured around classical Hatha sequences, breath, and presence in a safe space to grow.",
                meta: "Morning flow · Weekend deep-dives · Themed workshops · Online cohorts",
                tag: "Online & Offline",
              },
              {
                icon: PartyPopper,
                title: "Event & Per-Hour Sessions",
                desc: "Planning a wellness day, festival, team outing, or special event? Custom per-hour yoga and wellness sessions for gatherings of all sizes — high-energy, joyful, and impactful.",
                meta: "Corporate offsites · Health fairs · College events · Festivals",
                tag: "Flexible Booking",
              },
              {
                icon: Sparkles,
                title: "Not Sure Where to Start?",
                desc: "Every journey is unique. Let's have a free 20-minute discovery call to understand your goals and design the right path — for you personally, your family, or your organization.",
                meta: "Free 20-minute consultation · No commitment",
                tag: "Free Discovery Call",
              },
            ].map(({ icon: Icon, title, desc, meta, tag }) => (
              <Card key={title} className="p-7 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
                <p className="text-xs text-foreground/70 italic mb-4 flex-grow">{meta}</p>
                <span className="inline-block self-start text-[10px] uppercase tracking-widest text-accent border border-accent/60 px-3 py-1 rounded-full">
                  {tag}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">The Garima Method</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight">
              Wellness Is Not A Destination.
              <br />
              <span className="italic text-primary">It's A Daily Coming Home.</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My approach weaves together four pillars — movement, breath, nourishment, and awareness
              — to create sustainable transformation that doesn't fade when the retreat ends.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Classical Hatha Yoga for body intelligence and alignment",
                "Pranayama and meditation to regulate the nervous system",
                "Ancient nutritional wisdom rooted in Ayurveda",
                "Yogic philosophy to understand the mind and self",
                "Mental health tools for anxiety, burnout, and emotional balance",
                "Personalized practices — because no two bodies are the same",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/85">
                  <span className="text-accent mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button onClick={() => scrollTo("contact")}>Start Your Transformation</Button>
          </div>

          <div className="bg-secondary/40 rounded-2xl p-8 md:p-10">
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">Why Garima Wellness</p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-5 leading-tight">
              Ancient Wisdom. <span className="italic text-primary">Modern Results.</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              In a world of overnight fixes, we offer something different — depth, consistency, and
              genuine care.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "500-hour YTTC certified — trained in the classical tradition",
                "5+ years working across wellness, corporate, and community spaces",
                "1,200+ students trained across India, online and offline",
                "Customized programs — not cookie-cutter wellness packages",
                "Both online and in-person sessions across formats",
                "Rooted in science, guided by intuition, held with compassion",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/85">
                  <span className="text-accent mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" onClick={() => scrollTo("contact")}>Get In Touch Today</Button>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">Getting Started</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Your Journey in Four Simple Steps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Discovery Call", d: "A free 20-minute conversation to understand your goals, challenges, and what transformation looks like for you." },
              { n: "02", t: "Personalized Plan", d: "We design a custom roadmap — the right blend of yoga, nutrition, and mindfulness practices just for you." },
              { n: "03", t: "Begin the Practice", d: "Step into your sessions — online or offline — with full guidance, support, and community around you." },
              { n: "04", t: "Live the Shift", d: "Watch how your body, mind, and energy transform — sustainably and deeply — from the inside out." },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-background border-2 border-primary flex items-center justify-center font-serif text-xl text-primary font-semibold mb-4">
                  {s.n}
                </div>
                <h4 className="font-semibold mb-2">{s.t}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="stories" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">Student Stories</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Heard From Those Who Took the First Step</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                q: "I came in with chronic back pain and a mind that wouldn't stop racing. After three months with Garima, both have completely changed. Her Hatha sessions are precise, meditative, and deeply healing.",
                a: "Priya R.",
                r: "Software Engineer, Bengaluru",
                i: "PR",
              },
              {
                q: "We brought Garima in for a corporate wellness day for our 80-person team. The energy was electric. People who never practiced yoga in their lives were smiling, breathing, and present.",
                a: "Arjun K.",
                r: "HR Director, Pune",
                i: "AK",
              },
              {
                q: "The nutrition coaching changed my relationship with food completely. Garima doesn't give you a list of dos and don'ts — she helps you understand your body, your patterns. That shift is permanent.",
                a: "Sneha M.",
                r: "Entrepreneur, Mumbai",
                i: "SM",
              },
            ].map((t) => (
              <Card key={t.a} className="p-7 relative">
                <div className="flex gap-0.5 text-accent mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-5">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-primary">
                    {t.i}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.a}</p>
                    <p className="text-xs text-muted-foreground">{t.r}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16 px-6 bg-secondary/40 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Begin?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          The mat is ready. The practice is waiting. All that's needed is your first step toward the
          life you already know you deserve.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button size="lg" onClick={() => scrollTo("contact")}>Book Your Free Discovery Call</Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("services")}>View All Programs</Button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-muted/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight">
              Let's Begin Your <span className="italic text-primary">Wellness Journey</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're an individual looking to transform your health, a corporate team seeking
              meaningful wellness integration, or simply curious — reach out. Every big journey begins
              with one honest conversation.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, l: "Email", v: EMAIL, href: `mailto:${EMAIL}` },
                { icon: Phone, l: "Phone / WhatsApp", v: "+91 97992 09036", href: `https://wa.me/${WHATSAPP}` },
                { icon: MapPin, l: "Sessions Available", v: "Online & In-Person · Pan India" },
                { icon: Calendar, l: "Booking", v: "Online, Offline & Corporate Batches" },
                { icon: Instagram, l: "Instagram", v: `@${INSTAGRAM}`, href: `https://instagram.com/${INSTAGRAM}` },
              ].map(({ icon: Icon, l, v, href }) => {
                const content = (
                  <>
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{l}</p>
                      <p className="text-sm text-foreground">{v}</p>
                    </div>
                  </>
                );
                return href ? (
                  <a key={l} href={href} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start hover:text-primary transition">
                    {content}
                  </a>
                ) : (
                  <div key={l} className="flex gap-4 items-start">{content}</div>
                );
              })}
            </div>

            <div className="border-l-2 border-primary pl-4 italic text-foreground/80">
              "The first step doesn't need to be perfect. It just needs to be taken."
            </div>
          </div>

          <Card className="p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-2 text-primary">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in your details and Garima will personally get back to you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required maxLength={50} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} maxLength={50} className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Phone / WhatsApp</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="interest">I Am Interested In *</Label>
                <select
                  id="interest"
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  required
                  className="mt-1.5 w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                >
                  <option value="">— Select a service —</option>
                  <option>Corporate Yoga & Wellness Program</option>
                  <option>Wellness Retreat</option>
                  <option>Nutritional Coaching (1-on-1)</option>
                  <option>Group Yoga Classes</option>
                  <option>Event / Per-Hour Session</option>
                  <option>Personal 1-on-1 Yoga Sessions</option>
                  <option>I'm not sure — I need guidance</option>
                </select>
              </div>
              <div>
                <Label htmlFor="preference">Session Preference</Label>
                <select
                  id="preference"
                  value={form.preference}
                  onChange={(e) => setForm({ ...form, preference: e.target.value })}
                  className="mt-1.5 w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                >
                  <option value="">— Select preference —</option>
                  <option>Online (Video Call)</option>
                  <option>In-Person (Your Location)</option>
                  <option>Both / Flexible</option>
                </select>
              </div>
              <div>
                <Label htmlFor="goals">Tell Me About Your Goals</Label>
                <Textarea id="goals" rows={4} value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} maxLength={1000} className="mt-1.5" />
              </div>
              <div className="flex gap-2 items-start text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  id="consent"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-1"
                />
                <label htmlFor="consent" className="leading-relaxed">
                  I agree to receive a response from Garima Wellness regarding my enquiry. I
                  understand my details will not be shared with third parties.
                </label>
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Sending…" : "Send Message & Book Discovery Call →"}
              </Button>
              <p className="text-xs text-center text-accent">
                ✦ Free 20-minute discovery call included with every enquiry
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/70 py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 pb-10 border-b border-background/10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="Logo" className="h-9 w-9 object-contain bg-background/10 rounded p-1" />
              <span className="font-serif text-xl text-background">Garima Wellness</span>
            </div>
            <p className="text-sm leading-relaxed">
              Guiding individuals, teams, and communities back to wholeness — through the ancient
              wisdom of yoga, mindfulness, and holistic nourishment.
            </p>
          </div>
          <div>
            <h5 className="text-xs uppercase tracking-widest text-background mb-4 font-semibold">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo("services")} className="hover:text-background transition">Corporate Wellness</button></li>
              <li><button onClick={() => scrollTo("services")} className="hover:text-background transition">Wellness Retreats</button></li>
              <li><button onClick={() => scrollTo("services")} className="hover:text-background transition">Nutritional Coaching</button></li>
              <li><button onClick={() => scrollTo("services")} className="hover:text-background transition">Group Yoga Classes</button></li>
              <li><button onClick={() => scrollTo("services")} className="hover:text-background transition">Event Sessions</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs uppercase tracking-widest text-background mb-4 font-semibold">Explore</h5>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo("about")} className="hover:text-background transition">About Garima</button></li>
              <li><button onClick={() => scrollTo("approach")} className="hover:text-background transition">My Approach</button></li>
              <li><button onClick={() => scrollTo("stories")} className="hover:text-background transition">Student Stories</button></li>
              <li><button onClick={() => scrollTo("contact")} className="hover:text-background transition">Book a Session</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs uppercase tracking-widest text-background mb-4 font-semibold">Connect</h5>
            <ul className="space-y-2 text-sm">
              <li><a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="hover:text-background transition inline-flex items-center gap-2"><Instagram className="h-3.5 w-3.5" /> Instagram</a></li>
              <li><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="hover:text-background transition inline-flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5" /> WhatsApp</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-background transition inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> Email</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-3 pt-6 text-xs">
          <p>© {new Date().getFullYear()} Garima Wellness · All rights reserved.</p>
          <p>Breathe. Move. Reconnect.</p>
        </div>
      </footer>

      {/* WhatsApp Floating */}
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
