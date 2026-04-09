import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
          <h1 className="font-headline text-3xl md:text-5xl font-black mb-6 md:mb-8 text-glow-primary">Política de Privacidade</h1>
          
          <div className="space-y-6 md:space-y-8 text-white/70 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">1. Introdução</h2>
              <p>
                A Curtai.online (Curtatchê Marketing Digital) valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso site e serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">2. Coleta de Dados</h2>
              <p>
                Coletamos informações que você nos fornece diretamente, como nome, e-mail e dados de redes sociais quando você se cadastra para nossos treinamentos ou solicita contato para parcerias.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">3. Uso das Informações</h2>
              <p>
                As informações coletadas são utilizadas para:
              </p>
              <ul className="list-disc pl-6 mt-3 md:mt-4 space-y-1 md:space-y-2">
                <li>Fornecer e melhorar nossos serviços de marketing e treinamento;</li>
                <li>Comunicar atualizações, ofertas e conteúdos relevantes;</li>
                <li>Analisar o desempenho de nossas campanhas e do site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">4. Segurança</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">5. Seus Direitos</h2>
              <p>
                Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Para isso, entre em contato conosco através dos canais oficiais.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 md:mb-4">6. Alterações</h2>
              <p>
                Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer mudanças.
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
