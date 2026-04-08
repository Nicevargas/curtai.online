/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Star, 
  Rocket, 
  ArrowRight, 
  TrendingUp, 
  Video, 
  Camera, 
  MessageSquare,
  Menu,
  X,
  Zap,
  Users,
  BarChart3,
  Globe
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const processSteps = [
    {
      icon: Zap,
      title: "Estratégia",
      desc: "Análise profunda do seu nicho para criar um plano de conteúdo viral."
    },
    {
      icon: Users,
      title: "Conexão",
      desc: "Unimos sua marca aos melhores criadores do ecossistema TikTok."
    },
    {
      icon: BarChart3,
      title: "Escala",
      desc: "Otimização constante para maximizar o ROI e o volume de vendas."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/50 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white font-headline">
              Curtai.online
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {["Criadores", "Treinamento", "Cases", "Processo"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-white/70 hover:text-white transition-colors font-headline text-sm tracking-tight"
              >
                {item}
              </a>
            ))}
            <button className="bg-primary-container text-white px-6 py-2 rounded-lg font-bold hover:scale-105 transition-transform duration-300 active:scale-95">
              Começar Agora
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-surface border-b border-white/10 px-6 py-8 flex flex-col gap-6"
          >
            {["Criadores", "Treinamento", "Cases", "Processo"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-white/70 hover:text-white font-headline text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-primary-container text-white py-3 rounded-lg font-bold">
              Começar Agora
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden kinetic-gradient">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/10 blur-[120px] rounded-full" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10 max-w-7xl w-full mx-auto text-center mb-20"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight mb-8 uppercase"
          >
            Transforme sua presença no <span className="text-primary text-glow-primary">TikTok</span> em uma máquina de vendas
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light tracking-wide"
          >
            Sua agência especializada em TikTok Shop. Potencializamos resultados através de estratégias de conteúdo e afiliação de alto impacto.
          </motion.p>
        </motion.div>

        {/* CTA Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mx-auto px-4"
        >
          {/* Card 1: Creator */}
          <motion.div 
            variants={itemVariants}
            className="glass-card p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500 group flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 rounded-xl bg-surface-container-highest flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                <Star className="w-8 h-8 text-primary fill-primary" />
              </div>
              <h3 className="font-headline text-3xl font-bold text-white mb-4">Seja um Criador Parceiro</h3>
              <p className="font-body text-white/60 text-lg leading-relaxed mb-10">
                Você é criador de conteúdo e quer monetizar no TikTok Shop? Entre para o nosso time de elite.
              </p>
            </div>
            <button 
              disabled
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white/40 py-4 px-8 rounded-xl font-bold text-lg cursor-not-allowed transition-all w-full border border-white/5"
            >
              Em breve
            </button>
          </motion.div>

          {/* Card 2: Training */}
          <motion.div 
            variants={itemVariants}
            className="glass-card p-10 rounded-2xl border border-white/5 hover:border-tertiary/30 transition-all duration-500 group flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 rounded-xl bg-surface-container-highest flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                <Rocket className="w-8 h-8 text-tertiary fill-tertiary" />
              </div>
              <h3 className="font-headline text-3xl font-bold text-white mb-4">Aprenda a Vender no TikTok</h3>
              <p className="font-body text-white/60 text-lg leading-relaxed mb-10">
                Descubra como vender no TikTok Shop sem aparecer — método validado para resultados rápidos.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 bg-tertiary text-surface py-4 px-8 rounded-xl font-bold text-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(241,193,16,0.4)] active:scale-95 transition-all w-full">
              Acessar treinamento <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-headline font-black text-white mb-6">Nosso Processo</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Como transformamos visualizações em faturamento real para sua marca.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-8 rounded-2xl bg-surface-container-low border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-2xl font-headline font-bold text-white mb-4">{step.title}</h4>
                <p className="text-white/50 leading-relaxed">{step.desc}</p>
                <div className="absolute -top-4 -right-4 text-6xl font-bebas text-white/5 select-none">0{idx + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <span className="text-tertiary font-headline font-bold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20">
              Performance Elite
            </span>
            <h2 className="text-5xl md:text-7xl font-headline font-black text-white leading-[1.1]">
              Domine o ecossistema de <br />
              <span className="text-primary">Live Commerce</span>
            </h2>
            <div className="grid grid-cols-2 gap-12 pt-8">
              <div className="space-y-2">
                <p className="font-headline text-5xl font-black text-white">+250%</p>
                <p className="font-body text-white/50 text-sm uppercase tracking-wider">ROI Médio Campanhas</p>
              </div>
              <div className="space-y-2">
                <p className="font-headline text-5xl font-black text-white">500+</p>
                <p className="font-body text-white/50 text-sm uppercase tracking-wider">Criadores Ativos</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-3 border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMY6Znnov6H2BJLQWv46u8KLPD3hsk1mBL9kFxj2u9skhiJqHYBIW0mkoJaVQYPaELtkpDvZsE6RyB2R0KTmuYrf9UBhew0rtQgDtj6t9UXvcOeJ1TJJw1BcYE7_mkidP0StVY_0U1jeLMt_OlXhHNFQnMwTm0OY5lBGrT9carO8H2Oa9aIiPDhZ9TCpOdHOL3IPT0H0J9tdwqQUVqrKGxLO9xElYvCzTLMmOcp2U6Vj_nuAbCPRxD_E2BlWnwHpfowJyWNE6IO6s" 
                alt="TikTok Creator" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-surface-container-high p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">Vendas em Escala</p>
                  <p className="text-white/50 text-xs">Atualizado agora</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white/30 font-headline text-sm uppercase tracking-[0.3em] mb-12">Presença Global</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
            <Globe className="w-12 h-12 text-white" />
            <Users className="w-12 h-12 text-white" />
            <TrendingUp className="w-12 h-12 text-white" />
            <BarChart3 className="w-12 h-12 text-white" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest w-full py-20 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-2xl font-black text-white font-headline tracking-tighter">
              Curtai.online
            </span>
            <p className="text-white/40 font-body text-sm">
              © 2026 Curtatchê Marketing Digital. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex gap-8">
            {[Video, Camera, MessageSquare].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className="text-white/40 hover:text-primary transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div className="flex gap-8 font-body text-sm">
            {["Política de Privacidade", "Termos de Serviço", "Contato"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-white/40 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
