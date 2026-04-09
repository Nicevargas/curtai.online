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
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Load TikTok embed script dynamically to ensure it processes the DOM
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
      desc: "Unimos sua marca aos melhores criadores do ecossistema TikTokShop."
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
            {["Treinamento", "Cases", "Processo"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-white/70 hover:text-white transition-colors font-headline text-sm tracking-tight"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://sistema-curso-online-git-main-nicevargas-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-white px-6 py-2 rounded-lg font-bold hover:scale-105 transition-transform duration-300 active:scale-95 inline-block"
            >
              Começar Agora
            </a>
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
            {["Treinamento", "Cases", "Processo"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-white/70 hover:text-white font-headline text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="https://sistema-curso-online-git-main-nicevargas-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-white py-3 rounded-lg font-bold text-center"
            >
              Começar Agora
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center px-6 pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden kinetic-gradient">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-primary/10 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-tertiary/10 blur-[80px] md:blur-[120px] rounded-full" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10 max-w-7xl w-full mx-auto text-center mb-12 md:mb-20"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-bebas text-4xl md:text-7xl lg:text-8xl text-white leading-[1] md:leading-[0.9] tracking-tight mb-6 md:mb-8 uppercase"
          >
            Transforme sua presença no <span className="text-primary text-glow-primary font-bold">TikTokShop</span> em uma máquina de vendas
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="font-body text-base md:text-xl text-white/70 max-w-2xl mx-auto font-light tracking-wide px-4"
          >
            Sua agência especializada em <strong className="font-bold">TikTokShop</strong>. Potencializamos resultados através de estratégias de conteúdo e afiliação de alto impacto.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8 md:mt-10">
            <motion.a
              href="https://sistema-curso-online-git-main-nicevargas-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0px rgba(254, 44, 85, 0)",
                  "0 0 20px rgba(254, 44, 85, 0.4)",
                  "0 0 0px rgba(254, 44, 85, 0)"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: "easeInOut" 
              }}
              className="bg-primary text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-[0_0_30px_rgba(254,44,85,0.6)] transition-all inline-flex items-center gap-2"
            >
              Começar Agora <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* CTA Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10 flex justify-center max-w-6xl w-full mx-auto px-4"
        >
          {/* Card: Training */}
          <motion.div 
            variants={itemVariants}
            className="glass-card p-6 md:p-10 rounded-2xl border border-white/5 hover:border-tertiary/30 transition-all duration-500 group flex flex-col justify-between max-w-xl w-full relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-tertiary text-surface text-[10px] md:text-xs font-black px-2 md:px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
              100% Gratuito
            </div>
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                <Rocket className="w-6 h-6 md:w-8 md:h-8 text-tertiary fill-tertiary" />
              </div>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Treinamento <strong className="font-bold">TikTokShop</strong></h3>
              <p className="font-body text-white/60 text-base md:text-lg leading-relaxed mb-6">
                Descubra o método validado para vender todos os dias no <strong className="font-bold">TikTokShop</strong> sem precisar aparecer.
              </p>
              
              <div className="space-y-2 md:space-y-3 mb-8 md:mb-10">
                <p className="text-white/40 text-[10px] md:text-sm font-headline uppercase tracking-wider mb-2 md:mb-4">O que você vai aprender:</p>
                {[
                  "Criação de Vídeos Dark (Sem aparecer)",
                  "Modelos de Review que Convertem",
                  "Estratégias de Viralização Orgânica",
                  "Afiliação de Alto Impacto"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 text-white/80">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-tertiary" />
                    <span className="text-xs md:text-sm font-body tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a 
              href="https://sistema-curso-online-git-main-nicevargas-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-tertiary text-surface py-3 md:py-4 px-6 md:px-8 rounded-xl font-bold text-base md:text-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(241,193,16,0.4)] active:scale-95 transition-all w-full"
            >
              Acessar treinamento gratuito <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-20 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-headline font-black text-white mb-4 md:mb-6">Nosso Processo</h2>
            <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto">Como transformamos visualizações em faturamento real para sua marca.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-6 md:p-8 rounded-2xl bg-surface-container-low border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h4 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">{step.title}</h4>
                <p className="text-white/50 text-sm md:text-base leading-relaxed">{step.desc}</p>
                <div className="absolute -top-4 -right-4 text-5xl md:text-6xl font-bebas text-white/5 select-none">0{idx + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <span className="inline-block text-tertiary font-headline font-bold tracking-widest uppercase text-[10px] md:text-xs px-4 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20">
              Performance Elite
            </span>
            <h2 className="text-4xl md:text-7xl font-headline font-black text-white leading-[1.1]">
              Domine o ecossistema de <br />
              <span className="text-primary">Live Commerce</span>
            </h2>
            <div className="grid grid-cols-2 gap-6 md:gap-12 pt-4 md:pt-8">
              <div className="space-y-1 md:space-y-2">
                <p className="font-headline text-3xl md:text-5xl font-black text-white">+250%</p>
                <p className="font-body text-white/50 text-[10px] md:text-sm uppercase tracking-wider">ROI Médio Campanhas</p>
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="font-headline text-3xl md:text-5xl font-black text-white">500+</p>
                <p className="font-body text-white/50 text-[10px] md:text-sm uppercase tracking-wider">Criadores Ativos</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="rounded-3xl overflow-hidden glass-card p-2 md:p-3 border border-white/10 flex justify-center min-h-[580px]">
              <blockquote 
                className="tiktok-embed" 
                cite="https://www.tiktok.com/@nicemegashop/video/7623784609230277895" 
                data-video-id="7623784609230277895" 
                style={{ maxWidth: '605px', minWidth: '325px' }}
              > 
                <section> 
                  <a target="_blank" title="@nicemegashop" href="https://www.tiktok.com/@nicemegashop?refer=embed">@nicemegashop</a> 
                  Fone de ouvido com Bluetooth 
                  <a title="tiktokshop" target="_blank" href="https://www.tiktok.com/tag/tiktokshop?refer=embed">#tiktokshop</a> 
                  <a title="foneouvidos" target="_blank" href="https://www.tiktok.com/tag/foneouvidos?refer=embed">#foneouvidos</a> 
                  <a title="provadagua" target="_blank" href="https://www.tiktok.com/tag/provadagua?refer=embed">#provadagua</a> 
                  <a target="_blank" title="♬ som original - Curtai.online" href="https://www.tiktok.com/music/som-original-7623784656986540818?refer=embed">♬ som original - Curtai.online</a> 
                </section> 
              </blockquote>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 bg-surface-container-high p-4 md:p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm md:text-base font-bold">Criar vídeos como esse</p>
                  <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider">com INTELIGÊNCIA ARTIFICIAL</p>
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
            <Link to="/politica-de-privacidade" className="text-white/40 hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-servico" className="text-white/40 hover:text-primary transition-colors">
              Termos de Serviço
            </Link>
            <Link to="/contato" className="text-white/40 hover:text-primary transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
