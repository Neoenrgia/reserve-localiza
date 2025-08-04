import React from 'react';
import { FileText, DollarSign, MessageCircle, Zap, Shield, Clock, Users } from 'lucide-react';

function App() {
  const whatsappUrl = 'https://wa.me/5531996384549?text=Ol%C3%A1%2C%20desejo%20atendimento%20';

  const handleButtonClick = (buttonType: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de informações sobre: ${buttonType}`);
    const url = `${whatsappUrl}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white shadow-2xl">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center space-x-3">
            <Zap className="h-10 w-10 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Soluções de Energia
            </h1>
          </div>
          <p className="text-center text-xl mt-4 text-blue-100">
            Conectando você à energia do futuro
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Fatura Confiável Para Sua Casa e Empresa Cemig
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em energia elétrica com qualidade, 
            segurança e atendimento personalizado para todos os seus projetos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <button
            onClick={() => handleButtonClick('Segunda Via da Fatura')}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-blue-50 group"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-blue-700">Segunda Via da Fatura</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Acesse e baixe sua fatura de energia de forma rápida e segura.
            </p>
          </button>

          <button
            onClick={() => handleButtonClick('Negociação de Dívidas')}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-green-50 group"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-green-700">Negociação de Dívidas</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Negocie suas pendências e encontre a melhor solução para você.
            </p>
          </button>

          <button
            onClick={() => handleButtonClick('Falar com Atendente')}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-yellow-50 group"
          >
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
              <MessageCircle className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-yellow-700">Falar com Atendente</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Converse diretamente com nossa equipe especializada.
            </p>
          </button>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl shadow-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Ajuda?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe está pronta para atender você. Use os botões ao lado para contato direto!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-6 w-6 text-yellow-400" />
            <span className="text-xl font-bold">Soluções de Energia</span>
          </div>
          <p className="text-gray-400">
            © 2025 Soluções de Energia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
