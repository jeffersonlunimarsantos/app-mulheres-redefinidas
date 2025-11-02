'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, ArrowLeft, CheckCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    temperament: 'sanguineo' | 'colerico' | 'melancolico' | 'fleumatico';
  }[];
}

const temperamentQuestions: Question[] = [
  {
    id: 1,
    question: "Em uma festa, você geralmente:",
    options: [
      { text: "É o centro das atenções e conversa com todos", temperament: 'sanguineo' },
      { text: "Toma a iniciativa de organizar atividades", temperament: 'colerico' },
      { text: "Prefere conversas profundas com poucas pessoas", temperament: 'melancolico' },
      { text: "Observa mais do que participa ativamente", temperament: 'fleumatico' }
    ]
  },
  {
    id: 2,
    question: "Quando enfrenta um problema, sua primeira reação é:",
    options: [
      { text: "Buscar ajuda e conversar sobre isso", temperament: 'sanguineo' },
      { text: "Agir imediatamente para resolver", temperament: 'colerico' },
      { text: "Analisar profundamente antes de agir", temperament: 'melancolico' },
      { text: "Esperar um pouco para ver se resolve sozinho", temperament: 'fleumatico' }
    ]
  },
  {
    id: 3,
    question: "Seu ambiente de trabalho ideal seria:",
    options: [
      { text: "Dinâmico, com muita interação social", temperament: 'sanguineo' },
      { text: "Desafiador, onde posso liderar projetos", temperament: 'colerico' },
      { text: "Organizado, onde posso me concentrar profundamente", temperament: 'melancolico' },
      { text: "Estável, com rotinas bem definidas", temperament: 'fleumatico' }
    ]
  },
  {
    id: 4,
    question: "Em relacionamentos, você tende a:",
    options: [
      { text: "Ser expressiva e demonstrar afeto facilmente", temperament: 'sanguineo' },
      { text: "Ser direta sobre suas necessidades e expectativas", temperament: 'colerico' },
      { text: "Ser leal e buscar conexões profundas", temperament: 'melancolico' },
      { text: "Ser paciente e evitar conflitos", temperament: 'fleumatico' }
    ]
  },
  {
    id: 5,
    question: "Quando está estressada, você:",
    options: [
      { text: "Procura distrações e atividades divertidas", temperament: 'sanguineo' },
      { text: "Fica impaciente e quer resolver tudo rapidamente", temperament: 'colerico' },
      { text: "Se isola e reflete sobre a situação", temperament: 'melancolico' },
      { text: "Evita confrontos e busca paz", temperament: 'fleumatico' }
    ]
  }
];

const temperamentResults = {
  sanguineo: {
    title: "Temperamento Sanguíneo",
    description: "Você é uma pessoa extrovertida, otimista e sociável!",
    characteristics: [
      "Comunicativa e expressiva",
      "Otimista e entusiasta",
      "Gosta de estar com pessoas",
      "Adaptável e flexível"
    ],
    biblicalMessage: "Deus te criou com o dom da alegria e da comunicação. Use esses dons para encorajar outros e espalhar o amor de Cristo!",
    verse: "Um coração alegre é bom remédio, mas o espírito abatido seca os ossos. - Provérbios 17:22",
    color: "from-yellow-400 to-orange-500"
  },
  colerico: {
    title: "Temperamento Colérico",
    description: "Você é uma líder natural, determinada e orientada a objetivos!",
    characteristics: [
      "Líder natural",
      "Determinada e focada",
      "Toma decisões rapidamente",
      "Orientada a resultados"
    ],
    biblicalMessage: "Deus te deu dons de liderança. Use-os para servir outros e glorificar Seu nome com sabedoria e amor!",
    verse: "Ela é vestida de força e dignidade; sorri diante do futuro. - Provérbios 31:25",
    color: "from-red-400 to-pink-500"
  },
  melancolico: {
    title: "Temperamento Melancólico",
    description: "Você é uma pessoa reflexiva, detalhista e profunda!",
    characteristics: [
      "Reflexiva e analítica",
      "Perfeccionista",
      "Sensível e empática",
      "Aprecia beleza e arte"
    ],
    biblicalMessage: "Sua sensibilidade é um presente de Deus. Use-a para compreender outros e ser instrumento de Sua compaixão!",
    verse: "Perto está o Senhor dos que têm o coração quebrantado e salva os de espírito oprimido. - Salmos 34:18",
    color: "from-blue-400 to-purple-500"
  },
  fleumatico: {
    title: "Temperamento Fleumático",
    description: "Você é uma pessoa pacífica, estável e confiável!",
    characteristics: [
      "Pacífica e calma",
      "Confiável e leal",
      "Boa ouvinte",
      "Mediadora natural"
    ],
    biblicalMessage: "Deus te abençoou com o dom da paz. Seja instrumento de Sua paz no mundo, trazendo harmonia onde há conflito!",
    verse: "Bem-aventurados os pacificadores, pois serão chamados filhos de Deus. - Mateus 5:9",
    color: "from-green-400 to-teal-500"
  }
};

interface TemperamentTestProps {
  onBack?: () => void;
}

export default function TemperamentTest({ onBack }: TemperamentTestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<keyof typeof temperamentResults | null>(null);

  const handleAnswer = (temperament: string) => {
    const newAnswers = { ...answers, [currentQuestion]: temperament };
    setAnswers(newAnswers);

    if (currentQuestion < temperamentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (allAnswers: Record<number, string>) => {
    const counts = {
      sanguineo: 0,
      colerico: 0,
      melancolico: 0,
      fleumatico: 0
    };

    Object.values(allAnswers).forEach(answer => {
      counts[answer as keyof typeof counts]++;
    });

    const dominantTemperament = Object.entries(counts).reduce((a, b) => 
      counts[a[0] as keyof typeof counts] > counts[b[0] as keyof typeof counts] ? a : b
    )[0] as keyof typeof temperamentResults;

    setResult(dominantTemperament);
    setShowResult(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / temperamentQuestions.length) * 100;

  if (showResult && result) {
    const resultData = temperamentResults[result];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Resultado do seu Teste</h1>
          </div>

          <Card className={`bg-gradient-to-r ${resultData.color} text-white mb-6`}>
            <CardHeader>
              <CardTitle className="text-2xl text-center">{resultData.title}</CardTitle>
              <p className="text-center text-lg opacity-90">{resultData.description}</p>
            </CardHeader>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-600" />
                Suas Características
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {resultData.characteristics.map((char, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 mb-6">
            <CardHeader>
              <CardTitle className="text-purple-800">Mensagem de Deus para Você</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{resultData.biblicalMessage}</p>
              <blockquote className="border-l-4 border-purple-400 pl-4 italic text-purple-700">
                "{resultData.verse}"
              </blockquote>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button onClick={resetTest} variant="outline" className="flex-1">
              Refazer Teste
            </Button>
            {onBack && (
              <Button onClick={onBack} variant="outline" className="flex-1">
                Voltar
              </Button>
            )}
            <Button className="flex-1 bg-pink-600 hover:bg-pink-700">
              Compartilhar Resultado
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-bold text-gray-800">Teste de Temperamentos</h1>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Pergunta {currentQuestion + 1} de {temperamentQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">
              {temperamentQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {temperamentQuestions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full h-auto p-4 text-left justify-start hover:bg-pink-50 hover:border-pink-300"
                  onClick={() => handleAnswer(option.temperament)}
                >
                  {option.text}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardContent className="p-4">
            <p className="text-sm text-gray-700 text-center">
              💡 Responda com honestidade. Não há respostas certas ou erradas, 
              apenas diferentes formas de como Deus te criou!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}