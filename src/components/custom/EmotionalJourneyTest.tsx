'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, ArrowLeft, CheckCircle, Shield } from 'lucide-react';

interface EmotionalQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    category: 'abandono' | 'rejeicao' | 'traicao' | 'injustica' | 'humilhacao' | 'equilibrio';
  }[];
}

const emotionalQuestions: EmotionalQuestion[] = [
  {
    id: 1,
    question: "Quando alguém cancela um compromisso comigo no último minuto, eu:",
    options: [
      { text: "Sinto que não sou importante para a pessoa", category: 'abandono' },
      { text: "Penso que a pessoa não gosta realmente de mim", category: 'rejeicao' },
      { text: "Fico desconfiada se há outros motivos", category: 'traicao' },
      { text: "Entendo que imprevistos acontecem", category: 'equilibrio' }
    ]
  },
  {
    id: 2,
    question: "Em um grupo, quando não sou incluída em uma conversa:",
    options: [
      { text: "Sinto que estou sendo deixada de lado", category: 'abandono' },
      { text: "Penso que não me acham interessante", category: 'rejeicao' },
      { text: "Me sinto diminuída ou inferior", category: 'humilhacao' },
      { text: "Procuro me integrar naturalmente", category: 'equilibrio' }
    ]
  },
  {
    id: 3,
    question: "Quando recebo uma crítica, minha primeira reação é:",
    options: [
      { text: "Sentir que não mereço ser tratada assim", category: 'injustica' },
      { text: "Pensar que a pessoa não me valoriza", category: 'rejeicao' },
      { text: "Me sentir envergonhada ou inadequada", category: 'humilhacao' },
      { text: "Avaliar se a crítica é construtiva", category: 'equilibrio' }
    ]
  },
  {
    id: 4,
    question: "Quando alguém próximo não cumpre uma promesa:",
    options: [
      { text: "Sinto que não posso confiar em ninguém", category: 'traicao' },
      { text: "Penso que não sou prioridade na vida da pessoa", category: 'abandono' },
      { text: "Sinto que estou sendo tratada injustamente", category: 'injustica' },
      { text: "Converso para entender o que aconteceu", category: 'equilibrio' }
    ]
  },
  {
    id: 5,
    question: "Em situações de conflito, eu tendo a:",
    options: [
      { text: "Sentir que sempre sou culpada por tudo", category: 'injustica' },
      { text: "Temer que a pessoa me abandone", category: 'abandono' },
      { text: "Me sentir humilhada ou diminuída", category: 'humilhacao' },
      { text: "Buscar resolver com diálogo", category: 'equilibrio' }
    ]
  }
];

const emotionalResults = {
  abandono: {
    title: "Ferida do Abandono",
    description: "Você pode ter sensibilidade ao sentimento de abandono",
    explanation: "Esta ferida se manifesta quando há medo de ser deixada sozinha ou de não receber o apoio necessário.",
    healingMessage: "Deus nunca te abandonará. Ele promete estar contigo sempre, até o fim dos tempos.",
    verse: "Nunca te deixarei, nunca te abandonarei. - Hebreus 13:5",
    recommendations: [
      "Pratique a oração diária para fortalecer sua conexão com Deus",
      "Cultive relacionamentos saudáveis baseados na confiança",
      "Lembre-se diariamente do amor incondicional de Deus",
      "Busque apoio em sua comunidade de fé"
    ],
    color: "from-blue-400 to-cyan-500"
  },
  rejeicao: {
    title: "Ferida da Rejeição",
    description: "Você pode ter sensibilidade ao sentimento de rejeição",
    explanation: "Esta ferida se manifesta quando há medo de não ser aceita ou amada como você é.",
    healingMessage: "Você é aceita e amada por Deus exatamente como é. Ele te escolheu e te ama incondicionalmente.",
    verse: "Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido por Deus. - 1 Pedro 2:9",
    recommendations: [
      "Medite sobre sua identidade em Cristo",
      "Pratique a autocompaixão e o perdão próprio",
      "Cerque-se de pessoas que te valorizam",
      "Lembre-se de que você é filha amada de Deus"
    ],
    color: "from-purple-400 to-pink-500"
  },
  traicao: {
    title: "Ferida da Traição",
    description: "Você pode ter dificuldades com confiança",
    explanation: "Esta ferida se manifesta quando há dificuldade em confiar nos outros devido a experiências passadas.",
    healingMessage: "Deus é fiel e nunca te trairá. Ele é a base segura sobre a qual você pode construir sua confiança.",
    verse: "Fiel é Deus, pelo qual fostes chamados para a comunhão de seu Filho Jesus Cristo, nosso Senhor. - 1 Coríntios 1:9",
    recommendations: [
      "Construa confiança gradualmente em relacionamentos",
      "Pratique o perdão para libertar seu coração",
      "Confie primeiro em Deus, depois nas pessoas",
      "Busque discernimento em oração"
    ],
    color: "from-red-400 to-orange-500"
  },
  injustica: {
    title: "Ferida da Injustiça",
    description: "Você pode ter sensibilidade a situações injustas",
    explanation: "Esta ferida se manifesta quando há uma forte reação a situações percebidas como injustas ou desiguais.",
    healingMessage: "Deus é justo e vê todas as coisas. Ele fará justiça no tempo certo e te consolará.",
    verse: "O Senhor ama a justiça e não desampara os seus santos. - Salmos 37:28",
    recommendations: [
      "Entregue suas causas a Deus em oração",
      "Pratique a paciência e a confiança no tempo de Deus",
      "Busque ser instrumento de justiça e amor",
      "Lembre-se de que Deus vê e recompensa"
    ],
    color: "from-yellow-400 to-red-500"
  },
  humilhacao: {
    title: "Ferida da Humilhação",
    description: "Você pode ter sensibilidade a situações humilhantes",
    explanation: "Esta ferida se manifesta quando há medo de ser envergonhada ou diminuída diante dos outros.",
    healingMessage: "Em Deus você tem dignidade e valor. Ele te exalta e te honra como Sua filha preciosa.",
    verse: "Ela é vestida de força e dignidade; sorri diante do futuro. - Provérbios 31:25",
    recommendations: [
      "Lembre-se de sua identidade como filha de Deus",
      "Pratique a autoestima baseada no amor divino",
      "Desenvolva sua confiança através da oração",
      "Cerque-se de pessoas que te edificam"
    ],
    color: "from-green-400 to-teal-500"
  },
  equilibrio: {
    title: "Equilíbrio Emocional",
    description: "Você demonstra maturidade emocional e resiliência",
    explanation: "Você tem desenvolvido ferramentas saudáveis para lidar com desafios emocionais.",
    healingMessage: "Continue crescendo em sabedoria e maturidade. Deus te abençoou com equilíbrio emocional.",
    verse: "O fruto do Espírito é: amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão, domínio próprio. - Gálatas 5:22-23",
    recommendations: [
      "Continue cultivando sua vida espiritual",
      "Seja mentora para outras mulheres",
      "Mantenha práticas saudáveis de autocuidado",
      "Use sua maturidade para ajudar outros"
    ],
    color: "from-emerald-400 to-green-500"
  }
};

interface EmotionalJourneyTestProps {
  onBack?: () => void;
}

export default function EmotionalJourneyTest({ onBack }: EmotionalJourneyTestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<keyof typeof emotionalResults | null>(null);

  const handleAnswer = (category: string) => {
    const newAnswers = { ...answers, [currentQuestion]: category };
    setAnswers(newAnswers);

    if (currentQuestion < emotionalQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (allAnswers: Record<number, string>) => {
    const counts = {
      abandono: 0,
      rejeicao: 0,
      traicao: 0,
      injustica: 0,
      humilhacao: 0,
      equilibrio: 0
    };

    Object.values(allAnswers).forEach(answer => {
      counts[answer as keyof typeof counts]++;
    });

    const dominantCategory = Object.entries(counts).reduce((a, b) => 
      counts[a[0] as keyof typeof counts] > counts[b[0] as keyof typeof counts] ? a : b
    )[0] as keyof typeof emotionalResults;

    setResult(dominantCategory);
    setShowResult(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / emotionalQuestions.length) * 100;

  if (showResult && result) {
    const resultData = emotionalResults[result];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Sua Jornada Emocional</h1>
          </div>

          <Card className={`bg-gradient-to-r ${resultData.color} text-white mb-6`}>
            <CardHeader>
              <CardTitle className="text-2xl text-center">{resultData.title}</CardTitle>
              <p className="text-center text-lg opacity-90">{resultData.description}</p>
            </CardHeader>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Compreendendo sua Jornada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{resultData.explanation}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Heart className="w-5 h-5" />
                Mensagem de Cura
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{resultData.healingMessage}</p>
              <blockquote className="border-l-4 border-purple-400 pl-4 italic text-purple-700">
                "{resultData.verse}"
              </blockquote>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Caminhos para a Cura</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {resultData.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700 text-center">
              💝 <strong>Lembre-se:</strong> Este teste é uma ferramenta de autoconhecimento. 
              Para questões mais profundas, busque apoio de um conselheiro cristão ou psicólogo.
            </p>
          </div>

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
              Compartilhar
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
            <h1 className="text-xl font-bold text-gray-800">Jornada Emocional</h1>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Pergunta {currentQuestion + 1} de {emotionalQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">
              {emotionalQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {emotionalQuestions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full h-auto p-4 text-left justify-start hover:bg-pink-50 hover:border-pink-300"
                  onClick={() => handleAnswer(option.category)}
                >
                  {option.text}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Ambiente Seguro:</strong> Este é um espaço de autoconhecimento e cura.
                </p>
                <p className="text-xs text-gray-600">
                  Responda com honestidade. Todas as informações são confidenciais e tratadas com amor e respeito.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}