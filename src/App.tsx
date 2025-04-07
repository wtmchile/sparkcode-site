import React from 'react';
import { Calendar, MapPin, Users, ArrowRight, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#CAE6FF]">
      {/* Hero Section */}
      <div className="bg-[#20344B] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="text-[#E4C472]" />
              <span className="text-[#00DBA2]">WTM Chile presenta</span>
              <Star className="text-[#E4C472]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Redefine <span className="text-[#E4C472]">Possible</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#CAE6FF]">
              Únete a nosotras para redefinir lo posible
            </p>
            <div className="space-y-4">
              <button  className="bg-[#00DBA2] text-[#1A3E38] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#00B698] transition-colors flex items-center gap-2 mx-auto">
                <a href="https://lu.ma/cth2o0bm">
                Regístrate aquí
                </a>        
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-[#E4C472] font-medium">Cupos limitados!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Date */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <Calendar className="text-[#2480F0] w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#202124] mb-2">Fecha</h3>
                  <p className="text-[#165185]">26 de Abril, 2025</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#2480F0] w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#202124] mb-2">Ubicación</h3>
                  <p className="text-[#165185]">Antonio Varas 880, UNAB</p>
                </div>
              </div>
            </div>

            {/* Capacity */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <Users className="text-[#2480F0] w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#202124] mb-2">Capacidad</h3>
                  <p className="text-[#165185]">Cupos limitados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#D1ECE3] rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#1A3E38] mb-4">Sobre el evento</h2>
            <p className="text-[#0F7C67] leading-relaxed">
            Únete a nosotras para una celebración inspiradora del Día Internacional de la Mujer 2025 en Santiago. Este evento reúne a líderes del sector tecnológico, innovadoras y agentes de cambio para un día de aprendizaje, networking y empoderamiento. Sé parte de una comunidad que está redefiniendo el futuro de la tecnología en Chile.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#20344B] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#CAE6FF]">
            Women Techmakers Chile • International Women's Day Santiago 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;