/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Database,
  Server,
  Cpu,
  Layers,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const projects = [
  {
    title: "RS Automotive",
    description: "Desenvolvimento de plataforma web para gestão e agendamento de serviços automotivos, com foco em performance e experiência do usuário.",
    image: "https://lh3.googleusercontent.com/d/1zoywvgqiAg5bHjikLF_bLWwJ5_ipwVf6",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://rs-automotive.vercel.app/"
  },
  {
    title: "Planilha controle financeiro",
    description: "Site de vendas de uma planilha pra auto controle financeiro.",
    image: "https://lh3.googleusercontent.com/d/1HVw9V5oUI1mDZyf5j-oarlBkKmUg70jL",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://planilha-controle-financeiro.vercel.app/"
  },
  {
    title: "Integração ERP Omie",
    description: "Projetos personalizados e onboarding para otimização de processos empresariais.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["ERP", "SQL", "Python"],
    link: "#"
  },
  {
    title: "Monitoramento de Filas Kafka",
    description: "Implementação de monitoramento em tempo real para fluxos de dados críticos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Kafka", "GCP", "Debezium"],
    link: "#"
  }
];

const skills = [
  "PostgreSQL", "Node.js", "TypeScript", "JavaScript", "Python", "ETL", "RabbitMQ", "Docker", "Kafka", "Debezium"
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4 glass" : "py-8 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tighter"
          >
            CAUÊ<span className="text-white/40">CAMIÑA</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
            <a href="#about" className="hover:text-white transition-colors">Sobre</a>
            <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="px-5 py-2 glass rounded-full hover:bg-white hover:text-black transition-all duration-300">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10" />
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-left"
            >
              <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.3em] mb-6">
                Backend Developer | Início de Carreira
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8 text-gradient">
                MIGRAÇÕES <br /> COMPLEXAS & <br /> BACK-END.
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 font-light leading-relaxed">
                Desenvolvedor focado em soluções robustas com <span className="text-white">Node.js, TypeScript e Python</span>.
                Especialista em processos de ETL e migração de registros.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a href="#projects" className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-all">
                  <span className="relative z-10 flex items-center gap-2">
                    Ver Projetos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a href="#contact" className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all">
                  Entrar em Contato
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 w-[400px] h-[500px] mx-auto">
                <div className="absolute -inset-4 border border-white/10 rounded-2xl -rotate-3" />
                <div className="absolute -inset-4 border border-white/10 rounded-2xl rotate-3" />
                <div className="relative w-full h-full overflow-hidden rounded-2xl glass">
                  <img
                    src="https://lh3.googleusercontent.com/d/1Om-PrdERJUk11NaEBUGvhU3BiCaPayPK"
                    alt="Cauê Camiña"
                    className="w-full h-full object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 glass rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-12 h-12 border border-white/20 rounded-full -z-10" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 border-y border-white/5 overflow-hidden bg-white/[0.02]">
        <div className="flex whitespace-nowrap gap-20 animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              {skills.map((skill) => (
                <span key={skill} className="text-4xl md:text-6xl font-display font-bold text-white/10 uppercase tracking-tighter">
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid Experience */}
      <section id="about" className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-10 glass rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Sobre Mim</h2>
              <p className="text-white/60 leading-relaxed text-lg mb-6">
                Desenvolvedor focado em soluções robustas com <span className="text-white">Node.js, TypeScript e Python</span>.
                Especialista em processos de ETL e migração de registros.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="p-4 glass rounded-2xl flex-1">
                <div className="text-2xl font-bold mb-1">1+</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Ano de Exp.</div>
              </div>
              <div className="p-4 glass rounded-2xl flex-1">
                <div className="text-2xl font-bold mb-1">ETL</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Processos</div>
              </div>
              <div className="p-4 glass rounded-2xl flex-1">
                <div className="text-2xl font-bold mb-1">10+</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Tecnologias</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 bg-white text-black rounded-3xl flex flex-col justify-between"
          >
            <h2 className="text-3xl font-display font-bold mb-6">Contato</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-40">Email</div>
                  <div className="font-medium">cauecamina@hotmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-40">Telefone</div>
                  <div className="font-medium">(11) 98927-3385</div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex gap-3">
              <a href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 glass rounded-3xl"
          >
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-white/40" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Experience Item 1 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-10 glass rounded-3xl"
          >
            <div className="text-xs uppercase tracking-widest text-white/40 mb-2">2024 - 2025</div>
            <h3 className="text-xl font-bold mb-1">Maitha Tech</h3>
            <div className="text-sm text-white/60 mb-4">Dev Trainee (Trademaster)</div>
            <p className="text-sm text-white/40 leading-relaxed">
              Foco em migração de sistemas legados, ETL com Node.js e monitoramento de filas.
            </p>
          </motion.div>

          {/* Experience Item 2 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-10 glass rounded-3xl"
          >
            <div className="text-xs uppercase tracking-widest text-white/40 mb-2">2023 - 2024</div>
            <h3 className="text-xl font-bold mb-1">Omie</h3>
            <div className="text-sm text-white/60 mb-4">Especialista de Produto</div>
            <p className="text-sm text-white/40 leading-relaxed">
              Implantação de ERP e desenvolvimento de projetos personalizados em SQL e Python.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">PROJETOS EM <br /> DESTAQUE</h2>
              <p className="text-white/40 text-lg">Uma seleção de trabalhos que demonstram minha capacidade técnica em resolver problemas complexos.</p>
            </div>
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-20 cursor-not-allowed">
                <ChevronRight className="w-5 h-5 rotate-180" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-white/80 transition-colors">{project.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{project.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">VAMOS CRIAR ALGO <br /> INCRÍVEL JUNTOS?</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
              Estou sempre aberto a novos desafios e oportunidades de aprendizado.
              Se você procura um desenvolvedor proativo e focado em resultados, vamos conversar.
            </p>
            <a
              href="mailto:cauecamina@hotmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Me mande um e-mail <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-display font-bold tracking-tighter">
            CAUÊ<span className="text-white/40">CAMIÑA</span>
          </div>
          <div className="text-white/20 text-xs uppercase tracking-[0.3em]">
            © 2026 PORTFOLIO. TODOS OS DIREITOS RESERVADOS.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
