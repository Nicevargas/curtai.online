import { motion } from "motion/react";
import { ArrowLeft, Mail, MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-surface text-white selection:bg-primary/30 font-body">
      <nav className="fixed top-0 w-full z-50 bg-surface/50 backdrop-blur-xl border-b border-white/10">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-headline font-bold">Voltar</span>
          </Link>
          <span className="text-xl font-black tracking-tighter text-white font-headline">
            Curtai.online
          </span>
        </div>
      </nav>

      <main className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-headline text-3xl md:text-5xl font-black mb-4 md:mb-6 text-glow-primary">Contato</h1>
          <p className="text-white/60 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
            Tem alguma dúvida ou quer escalar seus resultados no <strong className="font-bold">TikTokShop</strong>? Entre em contato conosco através dos nossos canais oficiais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <a 
              href="mailto:contato@curtai.online" 
              className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group flex flex-col items-center"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-headline font-bold text-lg md:text-xl mb-1 md:mb-2">E-mail</h3>
              <p className="text-white/50 text-xs md:text-sm">contato@curtai.online</p>
            </a>

            <a 
              href="https://wa.me/5551981068946" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-tertiary/30 transition-all group flex flex-col items-center"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-tertiary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-tertiary" />
              </div>
              <h3 className="font-headline font-bold text-lg md:text-xl mb-1 md:mb-2">WhatsApp</h3>
              <p className="text-white/50 text-xs md:text-sm">Fale com um especialista</p>
            </a>

            <a 
              href="https://instagram.com/curtai.online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/30 transition-all group flex flex-col items-center"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="font-headline font-bold text-lg md:text-xl mb-1 md:mb-2">Instagram</h3>
              <p className="text-white/50 text-xs md:text-sm">@curtai.online</p>
            </a>
          </div>

          <div className="mt-12 md:mt-20 p-6 md:p-10 glass-card rounded-3xl border border-white/5 text-left">
            <h2 className="text-xl md:text-2xl font-headline font-bold mb-4 md:mb-6">Envie uma mensagem</h2>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1 md:space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Nome</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider">E-mail</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Mensagem</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button type="button" className="w-full md:w-auto bg-primary text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/20 text-sm md:text-base">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </motion.div>
      </main>

      <footer className="py-10 border-t border-white/5 text-center text-white/40 text-sm">
        <p>© 2026 Curtatchê Marketing Digital. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
