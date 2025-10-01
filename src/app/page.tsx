'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import PWAInstaller from '@/components/PWAInstaller'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Play, 
  Trophy, 
  Shield, 
  Zap, 
  Users, 
  Star,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'

export default function CashBirdLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentView, setCurrentView] = useState('landing')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (currentView === 'game') {
    return <GameLobby onBack={() => setCurrentView('landing')} />
  }

  if (currentView === 'auth') {
    return <AuthScreen onBack={() => setCurrentView('landing')} onSuccess={() => setCurrentView('game')} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      <PWAInstaller />
      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur-sm border-b border-yellow-300/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐦</span>
              </div>
              <span className="text-2xl font-bold text-white">CashBird</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#como-funciona" className="text-white hover:text-yellow-300 transition-colors">Como Funciona</a>
              <a href="#ranking" className="text-white hover:text-yellow-300 transition-colors">Ranking</a>
              <a href="#seguranca" className="text-white hover:text-yellow-300 transition-colors">Segurança</a>
              <a href="#faq" className="text-white hover:text-yellow-300 transition-colors">FAQ</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10"
                onClick={() => setCurrentView('auth')}
              >
                Entrar
              </Button>
              <Button 
                className="bg-neon-green hover:bg-green-400 text-black font-bold"
                onClick={() => setCurrentView('auth')}
              >
                Começar Agora
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-yellow-300/20">
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="#como-funciona" className="text-white hover:text-yellow-300 transition-colors">Como Funciona</a>
                <a href="#ranking" className="text-white hover:text-yellow-300 transition-colors">Ranking</a>
                <a href="#seguranca" className="text-white hover:text-yellow-300 transition-colors">Segurança</a>
                <a href="#faq" className="text-white hover:text-yellow-300 transition-colors">FAQ</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-yellow-300/20">
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/10 justify-start"
                    onClick={() => setCurrentView('auth')}
                  >
                    Entrar
                  </Button>
                  <Button 
                    className="bg-green-400 hover:bg-green-500 text-black font-bold"
                    onClick={() => setCurrentView('auth')}
                  >
                    Começar Agora
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Jogue. Voe. <span className="text-green-400">Ganhe.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              O jogo mais viciante do Brasil! Aposte contra outros jogadores em partidas rápidas de CashBird e ganhe dinheiro real.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-green-400 hover:bg-green-500 text-black font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
                onClick={() => setCurrentView('auth')}
              >
                <Play className="mr-2" size={20} />
                Começar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-600"
                onClick={() => setCurrentView('game')}
              >
                Jogar Grátis
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-white/80">Jogadores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">R$ 2M+</div>
                <div className="text-white/80">Pagos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">30s</div>
                <div className="text-white/80">Por Partida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/80">Online</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-8 h-8 bg-green-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-1000">
          <div className="w-6 h-6 bg-yellow-300 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce delay-500">
          <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-black/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Como Funciona</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-yellow-300/20 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-black" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Escolha sua Aposta</h3>
                <p className="text-white/80 leading-relaxed">
                  Selecione o valor da aposta (sem limite) e encontre um oponente ou crie uma sala privada.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-yellow-300/20 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-black" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Jogue CashBird</h3>
                <p className="text-white/80 leading-relaxed">
                  Controle seu pássaro, colete moedas douradas e tente coletar mais que seu oponente em 60 segundos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-yellow-300/20 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="text-black" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Ganhe Dinheiro</h3>
                <p className="text-white/80 leading-relaxed">
                  Quem coletar mais moedas ganha! Saque seus ganhos via PIX em até 24 horas ou continue jogando.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Salas de Aposta */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Salas de Aposta</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[1, 2, 5, 10, 20, 100].map((value, index) => (
              <Card key={value} className="bg-white/10 backdrop-blur-sm border-yellow-300/20 hover:bg-white/20 transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">R$ {value}</div>
                  <div className="text-white/80 text-sm">Prêmio: R$ {(value * 1.9).toFixed(2)}</div>
                  <Badge className="mt-3 bg-green-400 text-black group-hover:bg-green-500">
                    {isClient ? Math.floor(Math.random() * 20) + 5 : 15} online
                  </Badge>
                  <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors">
                    Entrar
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white/80 text-lg">
              Ou aposte qualquer valor personalizado - sem limites!
            </p>
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" className="py-20 bg-black/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Top Jogadores</h2>
          
          <div className="max-w-2xl mx-auto">
            {[
              { name: 'BirdMaster', wins: 247, earnings: 'R$ 12.450' },
              { name: 'FlyHigh', wins: 198, earnings: 'R$ 9.870' },
              { name: 'GoldenWings', wins: 156, earnings: 'R$ 7.230' },
              { name: 'SkyKing', wins: 134, earnings: 'R$ 6.180' },
              { name: 'AirAce', wins: 112, earnings: 'R$ 5.440' }
            ].map((player, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-300/20 mb-4">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        index === 0 ? 'bg-yellow-400 text-black' :
                        index === 1 ? 'bg-gray-300 text-black' :
                        index === 2 ? 'bg-orange-400 text-black' :
                        'bg-white/20 text-white'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-bold text-white">{player.name}</div>
                        <div className="text-white/80 text-sm">{player.wins} vitórias</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-400">{player.earnings}</div>
                      <div className="text-white/80 text-sm">ganhos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança */}
      <section id="seguranca" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">100% Seguro</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Fair Play Garantido</h3>
              <p className="text-white/80 leading-relaxed">
                Todos os jogos usam física determinística. Ambos jogadores enfrentam exatamente os mesmos obstáculos e moedas.
              </p>
            </div>
            
            <div className="text-center">
              <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Pagamentos Seguros</h3>
              <p className="text-white/80 leading-relaxed">
                Depósitos e saques via PIX instantâneo. Seus ganhos ficam seguros em nossa carteira digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-black/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Perguntas Frequentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Como funciona o sistema de apostas?",
                a: "Você escolhe o valor da aposta (sem limite), encontra um oponente e joga. Quem coletar mais moedas ganha o prêmio total menos nossa pequena taxa de serviço."
              },
              {
                q: "Quanto tempo demora para receber os ganhos?",
                a: "Saques via PIX são processados em até 24 horas. Você pode sacar a partir de R$ 10."
              },
              {
                q: "O jogo é justo para ambos jogadores?",
                a: "Sim! Ambos jogadores enfrentam exatamente os mesmos obstáculos e moedas aparecem nos mesmos locais, garantindo total equidade."
              },
              {
                q: "Posso jogar de graça?",
                a: "Sim! Temos modo gratuito para você treinar antes de apostar dinheiro real."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-300/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-white/80 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Pronto para Voar Alto?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de jogadores que já estão ganhando dinheiro no CashBird!
          </p>
          
          <Button 
            size="lg" 
            className="bg-green-400 hover:bg-green-500 text-black font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all"
            onClick={() => setCurrentView('auth')}
          >
            <Play className="mr-3" size={24} />
            Começar Agora - É Grátis!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-yellow-300/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-lg">🐦</span>
                </div>
                <span className="text-xl font-bold text-white">CashBird</span>
              </div>
              <p className="text-white/80">O jogo mais viciante do Brasil!</p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Jogo</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Como Jogar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ranking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Torneios</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ajuda</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jogo Responsável</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-yellow-300/20 mt-8 pt-8 text-center text-white/80">
            <p>&copy; 2024 CashBird. Todos os direitos reservados. Jogue com responsabilidade. +18 anos.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Componente de Autenticação
function AuthScreen({ onBack, onSuccess }: { onBack: () => void, onSuccess: () => void }) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [age, setAge] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular autenticação
    setTimeout(() => {
      onSuccess()
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-yellow-300/20">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐦</span>
              </div>
              <span className="text-2xl font-bold text-white">CashBird</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {isLogin ? 'Entrar' : 'Criar Conta'}
            </h2>
            <p className="text-white/80">
              {isLogin ? 'Bem-vindo de volta!' : 'Junte-se à diversão!'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <input
                  type="password"
                  placeholder="Confirmar senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
            )}

            {!isLogin && (
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="age"
                  checked={age}
                  onChange={(e) => setAge(e.target.checked)}
                  className="rounded"
                  required
                />
                <label htmlFor="age" className="text-white/80 text-sm">
                  Confirmo que tenho 18 anos ou mais
                </label>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-3"
            >
              {isLogin ? 'Entrar' : 'Criar Conta'}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/80">ou</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button 
                variant="outline" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
              >
                Continuar com Google
              </Button>
              <Button 
                variant="outline" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
              >
                Continuar com Apple
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white/80 hover:text-white transition-colors"
            >
              {isLogin ? 'Não tem conta? Criar uma' : 'Já tem conta? Entrar'}
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onBack}
              className="text-white/60 hover:text-white/80 transition-colors text-sm"
            >
              ← Voltar ao início
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Componente do Lobby do Jogo
function GameLobby({ onBack }: { onBack: () => void }) {
  const [currentScreen, setCurrentScreen] = useState('lobby')
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)
  const [customBet, setCustomBet] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (currentScreen === 'game') {
    return <FlappyBirdGame onBack={() => setCurrentScreen('lobby')} betAmount={selectedRoom || 0} />
  }

  if (currentScreen === 'profile') {
    return <PlayerProfile onBack={() => setCurrentScreen('lobby')} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      {/* Header do Lobby */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-yellow-300/20 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="text-white hover:text-yellow-300 transition-colors"
            >
              ← Voltar
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-lg">🐦</span>
              </div>
              <span className="text-xl font-bold text-white">CashBird</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-black/20 rounded-lg px-4 py-2">
              <span className="text-white font-bold">Saldo: R$ 125,50</span>
            </div>
            <Button
              onClick={() => setCurrentScreen('profile')}
              className="bg-white/10 hover:bg-white/20 text-white"
            >
              Perfil
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        {/* Ações Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-300/20 cursor-pointer hover:bg-white/20 transition-all">
            <CardContent className="p-6 text-center">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Partida Rápida 1x1</h3>
              <p className="text-white/80 mb-4">Encontre um oponente automaticamente</p>
              <Button className="bg-green-400 hover:bg-green-500 text-black font-bold">
                Jogar Agora
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-yellow-300/20 cursor-pointer hover:bg-white/20 transition-all">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Torneios</h3>
              <p className="text-white/80 mb-4">Compete contra vários jogadores</p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                Ver Torneios
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-yellow-300/20 cursor-pointer hover:bg-white/20 transition-all">
            <CardContent className="p-6 text-center">
              <Play className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Jogar Grátis</h3>
              <p className="text-white/80 mb-4">Treine sem apostar dinheiro</p>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold"
                onClick={() => {
                  setSelectedRoom(0)
                  setCurrentScreen('game')
                }}
              >
                Treinar
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Salas de Aposta */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Salas de Aposta</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {[1, 2, 5, 10, 20, 100].map((value) => (
              <Card 
                key={value} 
                className="bg-white/10 backdrop-blur-sm border-yellow-300/20 hover:bg-white/20 transition-all cursor-pointer group"
                onClick={() => {
                  setSelectedRoom(value)
                  setCurrentScreen('game')
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">R$ {value}</div>
                  <div className="text-green-400 font-bold mb-2">Ganhe R$ {(value * 1.9).toFixed(2)}</div>
                  <Badge className="bg-green-400 text-black group-hover:bg-green-500">
                    {isClient ? Math.floor(Math.random() * 20) + 5 : 15} online
                  </Badge>
                  <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors">
                    Entrar
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Aposta Personalizada */}
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-300/20 max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Aposta Personalizada</h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Digite o valor (R$)"
                  value={customBet}
                  onChange={(e) => setCustomBet(e.target.value)}
                  className="flex-1 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                  min="1"
                />
                <button 
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => {
                    const amount = parseFloat(customBet)
                    if (amount && amount > 0) {
                      setSelectedRoom(amount)
                      setCurrentScreen('game')
                    }
                  }}
                  disabled={!customBet || parseFloat(customBet) <= 0}
                >
                  Jogar
                </button>
              </div>
              <p className="text-white/60 text-sm mt-2 text-center">
                Sem limite mínimo ou máximo!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Ranking Rápido */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Top Jogadores Hoje</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'BirdMaster', score: 1247, earnings: 'R$ 450' },
              { name: 'FlyHigh', score: 1198, earnings: 'R$ 380' },
              { name: 'GoldenWings', score: 1156, earnings: 'R$ 320' },
              { name: 'SkyKing', score: 1134, earnings: 'R$ 280' }
            ].map((player, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-300/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        index === 0 ? 'bg-yellow-400 text-black' :
                        index === 1 ? 'bg-gray-300 text-black' :
                        index === 2 ? 'bg-orange-400 text-black' :
                        'bg-white/20 text-white'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-bold text-white">{player.name}</div>
                        <div className="text-white/80 text-sm">Score: {player.score}</div>
                      </div>
                    </div>
                    <div className="text-green-400 font-bold">{player.earnings}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente do Jogo Flappy Bird REAL
function FlappyBirdGame({ onBack, betAmount }: { onBack: () => void, betAmount: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gameLoopRef = useRef<number>()
  const [gameState, setGameState] = useState<'waiting' | 'playing' | 'finished'>('waiting')
  const [score, setScore] = useState(0)
  const [opponentScore, setOpponentScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [gameOver, setGameOver] = useState(false)

  // Estado do jogo
  const gameStateRef = useRef({
    bird: {
      x: 80,
      y: 250,
      velocity: 0,
      size: 30
    },
    pipes: [] as Array<{
      x: number
      topHeight: number
      bottomHeight: number
      width: number
      gap: number
      passed: boolean
    }>,
    money: [] as Array<{
      x: number
      y: number
      size: number
      collected: boolean
    }>,
    gravity: 0.6,
    jumpForce: -7,
    pipeSpeed: 3,
    pipeWidth: 60,
    pipeGap: 220,
    canvas: { width: 400, height: 600 },
    score: 0,
    gameRunning: false
  })

  // Inicializar pipes
  const createPipe = (x: number) => {
    const minHeight = 50
    const maxHeight = gameStateRef.current.canvas.height - gameStateRef.current.pipeGap - minHeight
    const topHeight = Math.random() * (maxHeight - minHeight) + minHeight
    
    return {
      x,
      topHeight,
      bottomHeight: gameStateRef.current.canvas.height - topHeight - gameStateRef.current.pipeGap,
      width: gameStateRef.current.pipeWidth,
      gap: gameStateRef.current.pipeGap,
      passed: false
    }
  }

  // Criar moeda
  const createMoney = (x: number, pipeTopHeight: number, pipeGap: number) => {
    const moneyY = pipeTopHeight + pipeGap / 2 - 15
    return {
      x: x + 30,
      y: moneyY,
      size: 30,
      collected: false
    }
  }

  // Função para pular
  const jump = useCallback(() => {
    if (gameStateRef.current.gameRunning) {
      gameStateRef.current.bird.velocity = gameStateRef.current.jumpForce
    }
  }, [])

  // Detectar colisão
  const checkCollision = () => {
    const bird = gameStateRef.current.bird
    const pipes = gameStateRef.current.pipes
    
    // Colisão com o chão ou teto
    if (bird.y + bird.size >= gameStateRef.current.canvas.height || bird.y <= 0) {
      return true
    }
    
    // Colisão com pipes
    for (const pipe of pipes) {
      if (
        bird.x + bird.size > pipe.x &&
        bird.x < pipe.x + pipe.width &&
        (bird.y < pipe.topHeight || bird.y + bird.size > gameStateRef.current.canvas.height - pipe.bottomHeight)
      ) {
        return true
      }
    }
    
    return false
  }

  // Verificar coleta de moedas
  const checkMoneyCollection = () => {
    const bird = gameStateRef.current.bird
    const money = gameStateRef.current.money
    
    money.forEach(coin => {
      if (!coin.collected) {
        const distance = Math.sqrt(
          Math.pow(bird.x + bird.size/2 - coin.x, 2) + 
          Math.pow(bird.y + bird.size/2 - coin.y, 2)
        )
        
        if (distance < bird.size/2 + coin.size/2) {
          coin.collected = true
          gameStateRef.current.score++
          setScore(gameStateRef.current.score)
        }
      }
    })
  }

  // Loop principal do jogo
  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const game = gameStateRef.current
    
    // Limpar canvas
    ctx.fillStyle = '#87CEEB'
    ctx.fillRect(0, 0, game.canvas.width, game.canvas.height)
    
    if (game.gameRunning) {
      // Atualizar pássaro
      game.bird.velocity += game.gravity
      game.bird.y += game.bird.velocity
      
      // Atualizar pipes
      game.pipes.forEach(pipe => {
        pipe.x -= game.pipeSpeed
      })
      
      // Atualizar moedas
      game.money.forEach(coin => {
        coin.x -= game.pipeSpeed
      })
      
      // Remover pipes e moedas que saíram da tela
      game.pipes = game.pipes.filter(pipe => pipe.x + pipe.width > 0)
      game.money = game.money.filter(coin => coin.x + coin.size > 0)
      
      // Adicionar novos pipes e moedas
      if (game.pipes.length === 0 || game.pipes[game.pipes.length - 1].x < game.canvas.width - 200) {
        const newPipe = createPipe(game.canvas.width)
        game.pipes.push(newPipe)
        game.money.push(createMoney(newPipe.x, newPipe.topHeight, newPipe.gap))
      }
      
      // Verificar coleta de moedas
      checkMoneyCollection()
      
      // Verificar colisão
      if (checkCollision()) {
        game.gameRunning = false
        setGameOver(true)
        setGameState('finished')
        return
      }
    }
    
    // Desenhar pipes
    ctx.fillStyle = '#228B22'
    game.pipes.forEach(pipe => {
      // Pipe superior
      ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight)
      // Pipe inferior
      ctx.fillRect(pipe.x, game.canvas.height - pipe.bottomHeight, pipe.width, pipe.bottomHeight)
      
      // Bordas dos pipes
      ctx.fillStyle = '#006400'
      ctx.fillRect(pipe.x, pipe.topHeight - 20, pipe.width, 20)
      ctx.fillRect(pipe.x, game.canvas.height - pipe.bottomHeight, pipe.width, 20)
      ctx.fillStyle = '#228B22'
    })
    
    // Desenhar moedas douradas
    game.money.forEach(coin => {
      if (!coin.collected) {
        // Moeda dourada
        ctx.fillStyle = '#FFD700'
        ctx.beginPath()
        ctx.arc(coin.x, coin.y, coin.size/2, 0, Math.PI * 2)
        ctx.fill()
        
        // Borda da moeda
        ctx.strokeStyle = '#FFA500'
        ctx.lineWidth = 3
        ctx.stroke()
        
        // Símbolo $ no centro
        ctx.fillStyle = '#B8860B'
        ctx.font = 'bold 16px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('$', coin.x, coin.y + 5)
        
        // Brilho
        ctx.fillStyle = '#FFFF99'
        ctx.beginPath()
        ctx.arc(coin.x - 5, coin.y - 5, 4, 0, Math.PI * 2)
        ctx.fill()
      }
    })
    
    // Desenhar pássaro simples (sem asas)
    const birdX = game.bird.x + game.bird.size/2
    const birdY = game.bird.y + game.bird.size/2
    
    // Corpo do pássaro (amarelo)
    ctx.fillStyle = '#FFD700'
    ctx.beginPath()
    ctx.arc(birdX, birdY, game.bird.size/2, 0, Math.PI * 2)
    ctx.fill()
    
    // Olho (branco)
    ctx.fillStyle = '#FFF'
    ctx.beginPath()
    ctx.arc(birdX + 5, birdY - 5, 4, 0, Math.PI * 2)
    ctx.fill()
    
    // Pupila
    ctx.fillStyle = '#000'
    ctx.beginPath()
    ctx.arc(birdX + 6, birdY - 5, 2, 0, Math.PI * 2)
    ctx.fill()
    
    // Bico do pássaro
    ctx.fillStyle = '#FF8C00'
    ctx.beginPath()
    ctx.moveTo(birdX + game.bird.size/2, birdY - 2)
    ctx.lineTo(birdX + game.bird.size/2 + 10, birdY - 5)
    ctx.lineTo(birdX + game.bird.size/2 + 10, birdY + 2)
    ctx.closePath()
    ctx.fill()
    
    gameLoopRef.current = requestAnimationFrame(gameLoop)
  }, [])

  // Iniciar jogo
  const startGame = () => {
    setGameState('playing')
    setScore(0)
    setGameOver(false)
    
    // Reset game state
    gameStateRef.current.bird = {
      x: 80,
      y: 250,
      velocity: 0,
      size: 30
    }
    gameStateRef.current.pipes = []
    gameStateRef.current.money = []
    gameStateRef.current.score = 0
    gameStateRef.current.gameRunning = true
    
    // Adicionar primeiro pipe e moeda
    const firstPipe = createPipe(400)
    gameStateRef.current.pipes.push(firstPipe)
    gameStateRef.current.money.push(createMoney(firstPipe.x, firstPipe.topHeight, firstPipe.gap))
    
    // Timer do jogo
    const gameTimer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(gameTimer)
          gameStateRef.current.gameRunning = false
          setGameState('finished')
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    // Simular score do oponente
    const opponentTimer = setInterval(() => {
      if (Math.random() > 0.6) {
        setOpponentScore(prev => prev + 1)
      }
    }, 3000)
    
    // Cleanup
    setTimeout(() => {
      clearInterval(gameTimer)
      clearInterval(opponentTimer)
    }, 60000)
  }

  // Event listeners
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault()
        jump()
      }
    }
    
    const handleClick = () => {
      jump()
    }
    
    window.addEventListener('keydown', handleKeyPress)
    const canvas = canvasRef.current
    if (canvas) {
      canvas.addEventListener('click', handleClick)
      canvas.addEventListener('touchstart', handleClick)
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      if (canvas) {
        canvas.removeEventListener('click', handleClick)
        canvas.removeEventListener('touchstart', handleClick)
      }
    }
  }, [jump])

  // Iniciar loop do jogo
  useEffect(() => {
    gameLoop()
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [gameLoop])

  // Cleanup ao desmontar
  useEffect(() => {
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [])

  if (gameState === 'finished') {
    return <GameResult 
      playerScore={score} 
      opponentScore={opponentScore} 
      betAmount={betAmount}
      onBack={onBack}
    />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center p-4">
      {/* Header do Jogo */}
      <div className="w-full max-w-md mb-4">
        <div className="flex items-center justify-between bg-black/20 backdrop-blur-sm rounded-lg p-4">
          <button
            onClick={onBack}
            className="text-white hover:text-yellow-300 transition-colors"
          >
            ← Sair
          </button>
          
          <div className="text-center">
            <div className="text-white font-bold">
              {betAmount > 0 ? `R$ ${betAmount}` : 'Treino'}
            </div>
            <div className="text-yellow-300 font-bold text-xl">
              {timeLeft}s
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-white text-sm">Oponente</div>
            <div className="text-yellow-300 font-bold">{opponentScore} 🪙</div>
          </div>
        </div>
      </div>

      {/* Canvas do Jogo */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={400}
          height={600}
          className="border-4 border-white/20 rounded-lg shadow-2xl cursor-pointer"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        
        {/* Score do Jogador */}
        <div className="absolute top-4 left-4 bg-black/50 rounded-lg p-3">
          <div className="text-white text-sm">Você</div>
          <div className="text-yellow-300 font-bold text-2xl">{score} 🪙</div>
        </div>
      </div>

      {/* Instruções */}
      {gameState === 'waiting' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-300/20 p-8 text-center max-w-md mx-4">
            <CardContent>
              <h2 className="text-2xl font-bold text-white mb-4">Pronto para Coletar Moedas?</h2>
              <p className="text-white/80 mb-6">
                Toque na tela ou pressione ESPAÇO para fazer o pássaro voar.<br/>
                Colete as moedas douradas 🪙 e faça mais pontos que seu oponente!<br/>
                <strong>Quem coletar mais moedas ganha!</strong>
              </p>
              <Button 
                onClick={startGame}
                className="bg-green-400 hover:bg-green-500 text-black font-bold text-lg px-8 py-3"
              >
                Começar Jogo!
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Instrução de Controle */}
      {gameState === 'playing' && (
        <div className="mt-4 text-center">
          <p className="text-white text-sm bg-black/20 rounded-lg px-4 py-2">
            Colete as moedas douradas 🪙 - Toque para voar!
          </p>
        </div>
      )}
    </div>
  )
}

// Componente de Resultado do Jogo
function GameResult({ playerScore, opponentScore, betAmount, onBack }: {
  playerScore: number
  opponentScore: number
  betAmount: number
  onBack: () => void
}) {
  const isWinner = playerScore > opponentScore
  const isDraw = playerScore === opponentScore
  const winnings = isWinner ? betAmount * 1.9 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-yellow-300/20">
        <CardContent className="p-8 text-center">
          {/* Resultado */}
          <div className="mb-8">
            {isWinner && (
              <>
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-green-400 mb-2">Você Ganhou!</h2>
                <p className="text-white/80">Coletou mais moedas!</p>
              </>
            )}
            {isDraw && (
              <>
                <div className="text-6xl mb-4">🤝</div>
                <h2 className="text-3xl font-bold text-yellow-400 mb-2">Empate!</h2>
                <p className="text-white/80">Mesma quantidade de moedas!</p>
              </>
            )}
            {!isWinner && !isDraw && (
              <>
                <div className="text-6xl mb-4">😔</div>
                <h2 className="text-3xl font-bold text-red-400 mb-2">Você Perdeu</h2>
                <p className="text-white/80">Oponente coletou mais moedas!</p>
              </>
            )}
          </div>

          {/* Placar */}
          <div className="bg-black/20 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-center">
                <div className="text-white/80 text-sm">Você</div>
                <div className="text-3xl font-bold text-white">{playerScore} 🪙</div>
              </div>
              <div className="text-center">
                <div className="text-white/80 text-sm">VS</div>
              </div>
              <div className="text-center">
                <div className="text-white/80 text-sm">Oponente</div>
                <div className="text-3xl font-bold text-white">{opponentScore} 🪙</div>
              </div>
            </div>
          </div>

          {/* Ganhos */}
          {betAmount > 0 && (
            <div className="mb-8">
              <div className="text-white/80 text-sm mb-2">
                {isWinner ? 'Seus Ganhos:' : isDraw ? 'Valor Devolvido:' : 'Valor Perdido:'}
              </div>
              <div className={`text-2xl font-bold ${
                isWinner ? 'text-green-400' : 
                isDraw ? 'text-yellow-400' : 
                'text-red-400'
              }`}>
                R$ {isWinner ? winnings.toFixed(2) : isDraw ? betAmount.toFixed(2) : betAmount.toFixed(2)}
              </div>
            </div>
          )}

          {/* Ações */}
          <div className="space-y-4">
            {isDraw ? (
              <Button 
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
                onClick={onBack}
              >
                Jogar Novamente
              </Button>
            ) : (
              <Button 
                className="w-full bg-green-400 hover:bg-green-500 text-black font-bold"
                onClick={onBack}
              >
                Jogar Novamente
              </Button>
            )}
            
            {isWinner && betAmount > 0 && (
              <Button 
                variant="outline" 
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                Sacar Ganhos
              </Button>
            )}
            
            <Button 
              variant="outline" 
              className="w-full border-white/20 text-white hover:bg-white/10 bg-blue-500 hover:bg-blue-600"
            >
              Compartilhar Vitória
            </Button>
            
            <button
              onClick={onBack}
              className="w-full text-white/60 hover:text-white/80 transition-colors text-sm py-2"
            >
              Voltar ao Lobby
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Componente do Perfil do Jogador
function PlayerProfile({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-yellow-300/20 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-white hover:text-yellow-300 transition-colors"
          >
            ← Voltar ao Lobby
          </button>
          <h1 className="text-xl font-bold text-white">Meu Perfil</h1>
          <div></div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        {/* Informações do Jogador */}
        <Card className="bg-white/10 backdrop-blur-sm border-yellow-300/20 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-3xl">
                🐦
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">BirdMaster</h2>
                <p className="text-white/80">Membro desde Janeiro 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">R$ 125,50</div>
                <div className="text-white/80 text-sm">Saldo Atual</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">247</div>
                <div className="text-white/80 text-sm">Vitórias</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">89</div>
                <div className="text-white/80 text-sm">Derrotas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">73%</div>
                <div className="text-white/80 text-sm">Taxa de Vitória</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ações Rápidas */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button className="bg-green-400 hover:bg-green-500 text-black font-bold p-6">
            Depositar
          </Button>
          <Button className="bg-blue-400 hover:bg-blue-500 text-black font-bold p-6">
            Sacar
          </Button>
        </div>

        {/* Histórico Recente */}
        <Card className="bg-white/10 backdrop-blur-sm border-yellow-300/20 mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Últimas Partidas</h3>
            <div className="space-y-3">
              {[
                { opponent: 'FlyHigh', result: 'win', score: '15-12', earnings: '+R$ 9,50' },
                { opponent: 'SkyKing', result: 'loss', score: '8-14', earnings: '-R$ 5,00' },
                { opponent: 'GoldenWings', result: 'win', score: '22-18', earnings: '+R$ 19,00' },
                { opponent: 'AirAce', result: 'win', score: '11-9', earnings: '+R$ 1,90' }
              ].map((match, index) => (
                <div key={index} className="flex items-center justify-between bg-black/20 rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      match.result === 'win' ? 'bg-green-400' : 'bg-red-400'
                    }`}></div>
                    <div>
                      <div className="text-white font-medium">vs {match.opponent}</div>
                      <div className="text-white/80 text-sm">{match.score} moedas</div>
                    </div>
                  </div>
                  <div className={`font-bold ${
                    match.result === 'win' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {match.earnings}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conquistas */}
        <Card className="bg-white/10 backdrop-blur-sm border-yellow-300/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Conquistas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '🏆', title: 'Primeira Vitória', desc: 'Ganhe sua primeira partida' },
                { icon: '🔥', title: 'Sequência de 5', desc: '5 vitórias seguidas' },
                { icon: '💰', title: 'Milionário', desc: 'Ganhe R$ 1000 total' },
                { icon: '⚡', title: 'Velocista', desc: '100 partidas jogadas' },
                { icon: '🪙', title: 'Colecionador', desc: 'Colete 1000 moedas' },
                { icon: '👑', title: 'Top 10', desc: 'Entre no ranking top 10' }
              ].map((achievement, index) => (
                <div key={index} className="bg-black/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="text-white font-bold text-sm mb-1">{achievement.title}</div>
                  <div className="text-white/60 text-xs">{achievement.desc}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}