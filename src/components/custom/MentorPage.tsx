'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Users, Award, BookOpen, Instagram, Facebook, Youtube, Linkedin, Globe, ExternalLink } from 'lucide-react';
import { mentorInfo } from '@/lib/data';

export default function MentorPage() {
  const [activeTab, setActiveTab] = useState('about');

  const renderAboutContent = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={mentorInfo.photos.profile} 
                alt={mentorInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{mentorInfo.name}</h1>
              <p className="text-lg text-pink-600 mb-4">{mentorInfo.title}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {mentorInfo.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="bg-pink-100 text-pink-800">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bio */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-600" />
            Sobre Mim
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">{mentorInfo.bio}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="font-medium">{mentorInfo.experience}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              <span className="font-medium">{mentorInfo.clientsHelped}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Story */}
      <Card>
        <CardHeader>
          <CardTitle>Minha Jornada</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 leading-relaxed">{mentorInfo.story}</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={mentorInfo.photos.about} 
                alt="Jornada da mentora"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Credentials */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Formação e Credenciais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mentorInfo.credentials.map((credential, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{credential}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Approach */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-800">Minha Abordagem</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{mentorInfo.approach}</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderTestimonialsContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">O que minhas clientes dizem</h2>
        <p className="text-gray-600">Depoimentos reais de mulheres transformadas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentorInfo.testimonials.map((testimonial, index) => (
          <Card key={index} className="border-pink-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-medium text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Cliente</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
        <CardContent className="p-6 text-center">
          <h3 className="font-bold text-pink-800 mb-2">Quer compartilhar seu depoimento?</h3>
          <p className="text-gray-700 mb-4">
            Sua história pode inspirar outras mulheres em sua jornada de transformação!
          </p>
          <Button className="bg-pink-600 hover:bg-pink-700">
            Enviar Depoimento
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderContactContent = () => (
    <div className="space-y-6">
      {/* Mentoria Individual */}
      <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Mentoria Individual</CardTitle>
          <p className="opacity-90">Sessão personalizada para sua jornada única</p>
        </CardHeader>
        <CardContent>
          <p className="mb-6 opacity-90">
            Uma sessão individual focada em suas necessidades específicas, onde trabalharemos juntas 
            para identificar bloqueios, definir objetivos e criar um plano de ação personalizado.
          </p>
          <Button 
            className="bg-white text-pink-600 hover:bg-gray-100 w-full md:w-auto"
            onClick={() => window.open(mentorInfo.mentoringLinks.individual, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Agendar Sessão Individual
          </Button>
        </CardContent>
      </Card>

      {/* Planos de Mentoria */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-blue-200 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-blue-800">Plano Mensal</CardTitle>
            <p className="text-gray-600">Acompanhamento contínuo</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4 text-sm text-gray-700">
              <li>• 4 sessões por mês</li>
              <li>• Suporte via WhatsApp</li>
              <li>• Material exclusivo</li>
              <li>• Acesso ao grupo VIP</li>
            </ul>
            <Button 
              variant="outline" 
              className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
              onClick={() => window.open(mentorInfo.mentoringLinks.monthly, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Assinar Mensal
            </Button>
          </CardContent>
        </Card>

        <Card className="border-green-200 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-green-800">Plano Semestral</CardTitle>
            <p className="text-gray-600">Transformação profunda</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4 text-sm text-gray-700">
              <li>• 24 sessões (6 meses)</li>
              <li>• Suporte ilimitado</li>
              <li>• Workbooks personalizados</li>
              <li>• Sessões extras de emergência</li>
            </ul>
            <Button 
              variant="outline" 
              className="w-full border-green-300 text-green-600 hover:bg-green-50"
              onClick={() => window.open(mentorInfo.mentoringLinks.biannual, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Assinar Semestral
            </Button>
          </CardContent>
        </Card>

        <Card className="border-purple-200 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-purple-800">Plano Anual</CardTitle>
            <p className="text-gray-600">Jornada completa</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4 text-sm text-gray-700">
              <li>• 48 sessões (12 meses)</li>
              <li>• Mentoria intensiva</li>
              <li>• Retiros exclusivos</li>
              <li>• Certificado de conclusão</li>
            </ul>
            <Button 
              variant="outline" 
              className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
              onClick={() => window.open(mentorInfo.mentoringLinks.annual, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Assinar Anual
            </Button>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-yellow-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-yellow-800">Premium Vitalício</CardTitle>
            <p className="text-gray-600">Acesso para toda vida</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4 text-sm text-gray-700">
              <li>• Acesso vitalício</li>
              <li>• Sessões ilimitadas</li>
              <li>• Todos os cursos inclusos</li>
              <li>• Comunidade VIP exclusiva</li>
            </ul>
            <Button 
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
              onClick={() => window.open(mentorInfo.mentoringLinks.premium, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Adquirir Premium
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Redes Sociais */}
      <Card>
        <CardHeader>
          <CardTitle>Conecte-se Comigo</CardTitle>
          <p className="text-gray-600">Siga-me nas redes sociais para conteúdo diário de inspiração</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Button 
              variant="outline" 
              className="flex flex-col items-center gap-2 h-auto p-4 hover:bg-pink-50"
              onClick={() => window.open(mentorInfo.socialMedia.instagram, '_blank')}
            >
              <Instagram className="w-6 h-6 text-pink-600" />
              <span className="text-sm">Instagram</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex flex-col items-center gap-2 h-auto p-4 hover:bg-blue-50"
              onClick={() => window.open(mentorInfo.socialMedia.facebook, '_blank')}
            >
              <Facebook className="w-6 h-6 text-blue-600" />
              <span className="text-sm">Facebook</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex flex-col items-center gap-2 h-auto p-4 hover:bg-red-50"
              onClick={() => window.open(mentorInfo.socialMedia.youtube, '_blank')}
            >
              <Youtube className="w-6 h-6 text-red-600" />
              <span className="text-sm">YouTube</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex flex-col items-center gap-2 h-auto p-4 hover:bg-blue-50"
              onClick={() => window.open(mentorInfo.socialMedia.linkedin, '_blank')}
            >
              <Linkedin className="w-6 h-6 text-blue-700" />
              <span className="text-sm">LinkedIn</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex flex-col items-center gap-2 h-auto p-4 hover:bg-gray-50"
              onClick={() => window.open(mentorInfo.socialMedia.website, '_blank')}
            >
              <Globe className="w-6 h-6 text-gray-600" />
              <span className="text-sm">Website</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return renderAboutContent();
      case 'testimonials':
        return renderTestimonialsContent();
      case 'contact':
        return renderContactContent();
      default:
        return renderAboutContent();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto p-4">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-pink-100">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'about'
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                Sobre
              </button>
              <button
                onClick={() => setActiveTab('testimonials')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'testimonials'
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                Depoimentos
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'contact'
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                Mentoria
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
}