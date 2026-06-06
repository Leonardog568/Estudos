import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Heart, Stethoscope, Activity, ShieldCheck, Award, Users, Clock, MapPin,
  Phone, Mail, MessageCircle, Menu, X, ChevronUp, Calendar, FileText,
  HeartPulse, Microscope, ClipboardList, Send, CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero-cardio.jpg";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CardioVita — Clínica Cardiológica de Excelência" },
      { name: "description", content: "Clínica cardiológica com equipe especializada, tecnologia de ponta e atendimento humanizado. Agende sua consulta." },
      { property: "og:title", content: "CardioVita — Clínica Cardiológica" },
      { property: "og:description", content: "Cuidando do seu coração com excelência médica." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const WHATSAPP_NUMBER = "5511999999999";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "equipe", label: "Equipe" },
  { id: "agenda", label: "Agenda" },
  { id: "galeria", label: "Galeria" },
  { id: "localizacao", label: "Localização" },
  { id: "contato", label: "Contato" },
];

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Schedule />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </main>
  );
}

/* ---------- NAVBAR ---------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-heart shadow-glow">
            <Heart className="h-5 w-5 text-heart-foreground fill-current animate-heartbeat" />
          </span>
          <span className="font-display text-xl md:text-2xl font-semibold tracking-tight">
            Cardio<span className="text-heart">Vita</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={waLink("Olá, gostaria de agendar uma consulta cardiológica.")}
            target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-heart px-5 py-2.5 text-sm font-semibold text-heart-foreground shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            <Calendar className="h-4 w-4" /> Agendar Consulta
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <ul className="px-4 py-3 space-y-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-foreground hover:bg-accent font-medium"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={waLink("Olá, gostaria de agendar uma consulta cardiológica.")}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-heart px-5 py-3 text-sm font-semibold text-heart-foreground"
              >
                <Calendar className="h-4 w-4" /> Agendar Consulta
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="text-primary-foreground animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium">
            <HeartPulse className="h-4 w-4 text-heart" /> Excelência em Cardiologia desde 2005
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-balance">
            O cuidado do seu <span className="text-heart">coração</span> começa com confiança.
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/85 max-w-xl text-balance">
            Equipe cardiológica altamente especializada, tecnologia de ponta e atendimento humanizado para proteger o que há de mais valioso: a sua saúde cardiovascular.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Olá, gostaria de agendar uma consulta cardiológica.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-heart px-7 py-3.5 text-base font-semibold text-heart-foreground shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="h-5 w-5" /> Agendar Consulta
            </a>
            <a
              href="#equipe"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 px-7 py-3.5 text-base font-semibold text-primary-foreground hover:bg-white/20 transition-all"
            >
              <Users className="h-5 w-5" /> Conheça a equipe
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "20+", l: "Anos de história" },
              { n: "15k+", l: "Pacientes" },
              { n: "98%", l: "Satisfação" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <dt className="font-display text-3xl font-semibold text-heart">{s.n}</dt>
                <dd className="text-xs uppercase tracking-wider text-primary-foreground/70 mt-1">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden lg:flex justify-end">
          <div className="relative animate-float">
            <div className="absolute -inset-8 bg-heart/30 rounded-full blur-3xl" />
            <div className="relative h-80 w-80 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shadow-glow">
              <Heart className="h-40 w-40 text-heart fill-current animate-heartbeat" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services = [
    { icon: HeartPulse, t: "Consulta Cardiológica", d: "Avaliação clínica completa do seu coração com diagnóstico preciso." },
    { icon: Activity, t: "Eletrocardiograma", d: "Exame rápido e indolor para detectar arritmias e alterações." },
    { icon: Microscope, t: "Ecocardiograma", d: "Imagem detalhada das estruturas e função cardíaca em tempo real." },
    { icon: ClipboardList, t: "Teste Ergométrico", d: "Avaliação do desempenho cardiovascular sob esforço físico." },
    { icon: ShieldCheck, t: "Check-up Cardíaco", d: "Programa preventivo completo para sua tranquilidade." },
    { icon: Stethoscope, t: "Holter 24h", d: "Monitoramento contínuo do ritmo cardíaco por 24 horas." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nossos serviços"
          title="Tudo o que seu coração precisa"
          subtitle="Atendimento cardiológico completo com tecnologia de última geração."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <article className="group h-full bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-heart group-hover:text-heart-foreground transition-colors">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{s.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const values = [
    { icon: Heart, t: "Acolhimento", d: "Cada paciente é único e merece atenção integral." },
    { icon: ShieldCheck, t: "Segurança", d: "Protocolos rigorosos e ambiente esterilizado." },
    { icon: Award, t: "Excelência", d: "Médicos com formação nas melhores instituições." },
    { icon: Activity, t: "Inovação", d: "Equipamentos modernos para diagnósticos precisos." },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-heart">Sobre a CardioVita</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            Duas décadas dedicadas à saúde do seu coração.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Fundada em 2005, a CardioVita nasceu do compromisso de oferecer atendimento cardiológico humanizado e de alto padrão. Hoje, somos referência em prevenção, diagnóstico e tratamento das doenças cardiovasculares.
          </p>
          <div className="mt-8 space-y-4">
            <Pillar label="Missão" text="Promover saúde cardiovascular com excelência, ética e empatia." />
            <Pillar label="Visão" text="Ser referência nacional em cardiologia preventiva e diagnóstica." />
            <Pillar label="Valores" text="Acolhimento, segurança, integridade e inovação contínua." />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.t} className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-heart text-heart-foreground shadow-soft">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pillar({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex gap-4 items-start">
      <CheckCircle2 className="h-6 w-6 text-heart shrink-0 mt-0.5" />
      <p className="text-foreground">
        <span className="font-semibold text-primary">{label}: </span>
        <span className="text-muted-foreground">{text}</span>
      </p>
    </div>
  );
}

/* ---------- TEAM ---------- */
function Team() {
  const docs = [
    { img: doc1, n: "Dr. Rafael Andrade", e: "Cardiologia Clínica & Hemodinâmica", c: "CRM-SP 123.456", d: "Mais de 15 anos de experiência em cardiologia intervencionista, com formação na USP e InCor." },
    { img: doc2, n: "Dra. Camila Ferreira", e: "Cardiologia Pediátrica", c: "CRM-SP 234.567", d: "Especialista em cardiopatias congênitas, com fellowship no Hospital Albert Einstein." },
    { img: doc3, n: "Dr. Antonio Mendes", e: "Eletrofisiologia & Arritmias", c: "CRM-SP 345.678", d: "Referência em ablação de arritmias complexas e implante de dispositivos cardíacos." },
  ];

  return (
    <section id="equipe" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nossa equipe"
          title="Médicos que cuidam de você como família"
          subtitle="Profissionais altamente qualificados e apaixonados pela cardiologia."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {docs.map((d, i) => (
            <Reveal key={d.n} delay={i * 100}>
              <article className="group bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={d.img} alt={d.n}
                    width={768} height={896} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/90 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/95 text-xs font-semibold text-primary">
                    <Stethoscope className="h-3.5 w-3.5" /> {d.c}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">{d.n}</h3>
                  <p className="text-heart font-medium text-sm mt-1">{d.e}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.d}</p>
                  <button
                    onClick={() => alert(`Currículo completo de ${d.n} em breve.`)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-heart transition-colors"
                  >
                    <FileText className="h-4 w-4" /> Ver currículo completo
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SCHEDULE ---------- */
function Schedule() {
  const days = useMemo(() => {
    const out: { date: Date; slots: { time: string; available: boolean }[] }[] = [];
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      if (d.getDay() === 0) continue;
      out.push({
        date: d,
        slots: ["08:00", "09:30", "11:00", "14:00", "15:30", "17:00"].map((t, idx) => ({
          time: t,
          available: (i + idx) % 3 !== 0,
        })),
      });
    }
    return out;
  }, []);

  const fmt = (d: Date) =>
    d.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" });

  return (
    <section id="agenda" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Agenda"
          title="Horários disponíveis"
          subtitle="Selecione um horário livre e agende sua consulta pelo WhatsApp."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {days.map((day, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="bg-card border border-border rounded-2xl p-5 shadow-soft h-full">
                <header className="border-b border-border pb-3 mb-4">
                  <p className="font-display text-lg font-semibold text-primary capitalize">
                    {fmt(day.date)}
                  </p>
                </header>
                <ul className="space-y-2">
                  {day.slots.map((s) => (
                    <li key={s.time}>
                      {s.available ? (
                        <a
                          href={waLink(`Olá, gostaria de agendar uma consulta cardiológica para ${fmt(day.date)} às ${s.time}.`)}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-between w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm font-medium hover:bg-gradient-heart hover:text-heart-foreground hover:border-transparent transition-all"
                        >
                          <span className="inline-flex items-center gap-2">
                            <Clock className="h-4 w-4" /> {s.time}
                          </span>
                          <span className="text-xs font-semibold">Agendar</span>
                        </a>
                      ) : (
                        <div className="flex items-center justify-between rounded-lg bg-muted px-3 py-2.5 text-sm text-muted-foreground line-through">
                          <span className="inline-flex items-center gap-2">
                            <Clock className="h-4 w-4" /> {s.time}
                          </span>
                          <span className="text-xs">Ocupado</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  const imgs = [
    { src: g1, alt: "Recepção da clínica" },
    { src: g2, alt: "Sala de atendimento" },
    { src: g3, alt: "Equipamento de eletrocardiograma" },
    { src: g4, alt: "Corredor da clínica" },
    { src: g1, alt: "Espaço de espera" },
    { src: g2, alt: "Consultório cardiológico" },
  ];

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Galeria"
          title="Um espaço pensado no seu bem-estar"
          subtitle="Ambiente acolhedor, moderno e equipado com tecnologia de ponta."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {imgs.map((im, i) => (
            <Reveal key={i} delay={i * 70}>
              <figure className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition-shadow aspect-[4/3] bg-muted">
                <img
                  src={im.src} alt={im.alt}
                  width={1024} height={768} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <figcaption className="absolute bottom-4 left-4 text-primary-foreground font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  {im.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- LOCATION ---------- */
function Location() {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Localização"
          title="Venha nos visitar"
          subtitle="Estamos em uma região central, de fácil acesso."
        />
        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <Reveal>
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-7 shadow-soft space-y-5">
              <InfoLine icon={MapPin} title="Endereço">
                Av. Paulista, 1500 — Conj. 1201<br />Bela Vista, São Paulo — SP<br />CEP 01310-100
              </InfoLine>
              <InfoLine icon={Phone} title="Telefone">
                <a href="tel:+551130000000" className="hover:text-heart transition-colors">(11) 3000-0000</a>
              </InfoLine>
              <InfoLine icon={Clock} title="Funcionamento">
                Seg–Sex: 08h às 19h<br />Sábado: 08h às 13h
              </InfoLine>
              <a
                href={waLink("Olá, gostaria de agendar uma consulta cardiológica.")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-heart px-6 py-3 text-sm font-semibold text-heart-foreground shadow-soft hover:shadow-glow transition-all"
              >
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border shadow-soft aspect-video lg:aspect-auto lg:h-full min-h-[360px]">
              <iframe
                title="Mapa CardioVita"
                src="https://www.google.com/maps?q=Av.+Paulista,+1500,+S%C3%A3o+Paulo&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoLine({
  icon: Icon, title, children,
}: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.nome.trim().length < 2) e.nome = "Informe seu nome completo";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    if (form.telefone.replace(/\D/g, "").length < 10) e.telefone = "Telefone inválido";
    if (form.mensagem.trim().length < 5) e.mensagem = "Mensagem muito curta";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contato"
          title="Estamos prontos para te atender"
          subtitle="Tire suas dúvidas ou envie uma mensagem. Responderemos em breve."
        />
        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-5">
              <ContactCard icon={Phone} title="Telefone" value="(11) 3000-0000" href="tel:+551130000000" />
              <ContactCard icon={MessageCircle} title="WhatsApp" value="(11) 99999-9999"
                href={waLink("Olá, gostaria de mais informações.")} accent />
              <ContactCard icon={Mail} title="E-mail" value="contato@cardiovita.com.br" href="mailto:contato@cardiovita.com.br" />
              <ContactCard icon={MapPin} title="Endereço" value="Av. Paulista, 1500 — SP" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={submit} className="bg-card border border-border rounded-2xl p-7 shadow-card space-y-4" noValidate>
              <Field label="Nome completo" error={errors.nome}>
                <input type="text" value={form.nome} maxLength={100}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring transition" />
              </Field>
              <Field label="E-mail" error={errors.email}>
                <input type="email" value={form.email} maxLength={150}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring transition" />
              </Field>
              <Field label="Telefone" error={errors.telefone}>
                <input type="tel" value={form.telefone} maxLength={20}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring transition" />
              </Field>
              <Field label="Mensagem" error={errors.mensagem}>
                <textarea rows={4} value={form.mensagem} maxLength={1000}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring transition resize-none" />
              </Field>
              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-heart px-6 py-3.5 text-base font-semibold text-heart-foreground shadow-soft hover:shadow-glow transition-all">
                <Send className="h-4 w-4" /> Enviar mensagem
              </button>
              {sent && (
                <p className="text-success text-sm font-medium inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Mensagem enviada! Entraremos em contato em breve.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-1.5">{label}</span>
      {children}
      {error && <span className="block text-xs text-destructive mt-1">{error}</span>}
    </label>
  );
}

function ContactCard({
  icon: Icon, title, value, href, accent,
}: { icon: typeof Phone; title: string; value: string; href?: string; accent?: boolean }) {
  const inner = (
    <div className={`flex items-center gap-4 rounded-2xl p-5 border transition-all hover:-translate-y-0.5 ${
      accent
        ? "bg-gradient-heart border-transparent text-heart-foreground shadow-glow"
        : "bg-card border-border shadow-soft hover:shadow-card"
    }`}>
      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
        accent ? "bg-white/20" : "bg-primary/10 text-primary"
      }`}>
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className={`text-xs uppercase tracking-wider ${accent ? "text-heart-foreground/80" : "text-muted-foreground"}`}>{title}</p>
        <p className="font-semibold mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : inner;
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-heart">
              <Heart className="h-5 w-5 text-heart-foreground fill-current" />
            </span>
            <span className="font-display text-2xl font-semibold">Cardio<span className="text-heart">Vita</span></span>
          </div>
          <p className="mt-4 text-primary-foreground/75 max-w-md leading-relaxed">
            Há mais de 20 anos cuidando da saúde cardiovascular com excelência médica, tecnologia de ponta e atendimento humanizado.
          </p>
          <div className="mt-5 flex gap-3">
            {["facebook", "instagram", "linkedin"].map((s) => (
              <a key={s} href="#" aria-label={s}
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-heart flex items-center justify-center transition-colors">
                <Social name={s} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Links rápidos</h4>
          <ul className="space-y-2 text-primary-foreground/75 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-heart transition-colors">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
          <ul className="space-y-2 text-primary-foreground/75 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Av. Paulista, 1500 — SP</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> (11) 3000-0000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> contato@cardiovita.com.br</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} CardioVita. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function Social({ name }: { name: string }) {
  const paths: Record<string, string> = {
    facebook: "M22 12a10 10 0 1 0-11.5 9.9V14.9H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v6.9A10 10 0 0 0 22 12z",
    instagram: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.1.4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.1.4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 5.4a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm5.6-7.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
    linkedin: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.3V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9z",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

/* ---------- FLOATING WHATSAPP ---------- */
function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Olá, gostaria de agendar uma consulta cardiológica.")}
      target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-success text-success-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform animate-float"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full animate-ping bg-success/40" />
    </a>
  );
}

/* ---------- BACK TO TOP ---------- */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-24 right-6 z-40 h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all flex items-center justify-center"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}

/* ---------- HELPERS ---------- */
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal>
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-heart">{eyebrow}</span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-muted-foreground text-balance">{subtitle}</p>}
      </div>
    </Reveal>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={visible ? "animate-fade-up" : "opacity-0"}
    >
      {children}
    </div>
  );
}
