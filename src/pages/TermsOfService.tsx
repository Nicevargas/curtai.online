import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
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
        >
          <h1 className="font-headline text-3xl md:text-5xl font-black mb-6 md:mb-8 text-glow-primary">Termos de Serviço</h1>
          
          <div className="space-y-6 md:space-y-8 text-white/70 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o site Curtai.online, você concorda em cumprir e estar vinculado aos seguintes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">2. Uso do Site</h2>
              <p>
                O conteúdo deste site é para sua informação geral e uso pessoal. É proibido o uso indevido do site, incluindo a tentativa de acesso a áreas restritas ou a interferência no seu funcionamento.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo, design, logotipos e materiais presentes no site são de propriedade da Curtatchê Marketing Digital ou licenciados para nós. A reprodução é proibida, exceto de acordo com o aviso de direitos autorais.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">4. Limitação de Responsabilidade</h2>
              <p>
                A Curtai.online não será responsável por quaisquer danos diretos, indiretos ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços ou conteúdo.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">5. Treinamentos e Consultoria</h2>
              <p>
                Nossos treinamentos fornecem estratégias e métodos baseados em experiências reais, mas não garantimos resultados financeiros específicos, pois estes dependem do esforço e execução individual de cada aluno.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">6. Modificações</h2>
              <p>
                Reservamo-nos o direito de alterar estes termos a qualquer momento. O uso continuado do site após tais alterações constitui sua aceitação dos novos termos.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <footer className="py-10 border-t border-white/5 text-center text-white/40 text-sm">
        <p>© 2026 Curtatchê Marketing Digital. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
