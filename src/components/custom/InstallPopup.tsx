'use client';

import { useState, useEffect } from 'react';
import { X, Smartphone, Download, Home, Share, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InstallPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstallPopup({ isOpen, onClose }: InstallPopupProps) {
  const [isClient, setIsClient] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Detectar dispositivo
    const userAgent = navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent));
    setIsAndroid(/Android/.test(userAgent));
  }, []);

  if (!isClient || !isOpen) return null;

  const renderIOSInstructions = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Smartphone className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Instalar no iPhone/iPad</h3>
        <p className="text-gray-600">Siga os passos abaixo para adicionar o app à sua tela inicial:</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            1
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Toque no botão Compartilhar</h4>
            <p className="text-sm text-gray-600">
              Procure pelo ícone <Share className="w-4 h-4 inline mx-1" /> na parte inferior da tela do Safari
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            2
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Selecione "Adicionar à Tela de Início"</h4>
            <p className="text-sm text-gray-600">
              Role para baixo e toque em <Home className="w-4 h-4 inline mx-1" /> "Adicionar à Tela de Início"
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            3
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Confirme a instalação</h4>
            <p className="text-sm text-gray-600">
              Toque em "Adicionar" no canto superior direito para finalizar
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAndroidInstructions = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Smartphone className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Instalar no Android</h3>
        <p className="text-gray-600">Siga os passos abaixo para adicionar o app à sua tela inicial:</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            1
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Toque no menu do navegador</h4>
            <p className="text-sm text-gray-600">
              Procure pelos três pontos (⋮) no canto superior direito do Chrome
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            2
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Selecione "Adicionar à tela inicial"</h4>
            <p className="text-sm text-gray-600">
              Ou "Instalar app" se a opção estiver disponível
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            3
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Confirme a instalação</h4>
            <p className="text-sm text-gray-600">
              Toque em "Adicionar" ou "Instalar" para finalizar
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDesktopInstructions = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Download className="w-8 h-8 text-purple-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Instalar no Computador</h3>
        <p className="text-gray-600">Adicione o app como um aplicativo do seu computador:</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            1
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Procure pelo ícone de instalação</h4>
            <p className="text-sm text-gray-600">
              Na barra de endereços do Chrome, procure pelo ícone <Plus className="w-4 h-4 inline mx-1" /> ou <Download className="w-4 h-4 inline mx-1" />
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            2
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Clique em "Instalar"</h4>
            <p className="text-sm text-gray-600">
              Ou vá no menu (⋮) → "Instalar Mulheres Redefinidas..."
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            3
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Confirme a instalação</h4>
            <p className="text-sm text-gray-600">
              O app será adicionado ao seu menu iniciar e área de trabalho
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl text-gray-800 mb-2">
                📱 Instalar Aplicativo
              </CardTitle>
              <p className="text-gray-600">
                Tenha acesso rápido ao app direto da sua tela inicial!
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-pink-800 mb-2">✨ Vantagens do App Instalado:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Acesso instantâneo sem abrir o navegador
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Funciona offline para conteúdos já visitados
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Experiência nativa como um app real
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Notificações e atualizações automáticas
              </li>
            </ul>
          </div>

          {isIOS && renderIOSInstructions()}
          {isAndroid && renderAndroidInstructions()}
          {!isIOS && !isAndroid && renderDesktopInstructions()}

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>💡 Dica:</strong> Após instalar, o app funcionará como um aplicativo nativo, 
              com ícone próprio na sua tela inicial e experiência otimizada!
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Agora Não
            </Button>
            <Button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              Entendi!
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}