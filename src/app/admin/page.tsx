'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Shield,
  Eye,
  Ban,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Download
} from 'lucide-react'

export default function AdminPanel() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-lg">🐦</span>
                </div>
                <span className="text-xl font-bold text-gray-900">CashBird Admin</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">Sistema Online</Badge>
              <Button 
                variant="outline" 
                onClick={() => setIsAuthenticated(false)}
              >
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <div className="w-64 space-y-2">
            <nav className="space-y-1">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  currentView === 'dashboard' 
                    ? 'bg-yellow-100 text-yellow-900' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <TrendingUp className="mr-3 h-5 w-5" />
                Dashboard
              </button>
              
              <button
                onClick={() => setCurrentView('users')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  currentView === 'users' 
                    ? 'bg-yellow-100 text-yellow-900' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Users className="mr-3 h-5 w-5" />
                Usuários
              </button>
              
              <button
                onClick={() => setCurrentView('games')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  currentView === 'games' 
                    ? 'bg-yellow-100 text-yellow-900' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Eye className="mr-3 h-5 w-5" />
                Logs de Partidas
              </button>
              
              <button
                onClick={() => setCurrentView('payments')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  currentView === 'payments' 
                    ? 'bg-yellow-100 text-yellow-900' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <DollarSign className="mr-3 h-5 w-5" />
                Pagamentos
              </button>
              
              <button
                onClick={() => setCurrentView('settings')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  currentView === 'settings' 
                    ? 'bg-yellow-100 text-yellow-900' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Settings className="mr-3 h-5 w-5" />
                Configurações
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {currentView === 'dashboard' && <Dashboard />}
            {currentView === 'users' && <UsersManagement />}
            {currentView === 'games' && <GamesLogs />}
            {currentView === 'payments' && <PaymentsManagement />}
            {currentView === 'settings' && <SystemSettings />}
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente de Login Admin
function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular autenticação admin
    if (email === 'admin@cashbird.com' && password === 'admin123') {
      onLogin()
    } else {
      alert('Credenciais inválidas')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-xl">🐦</span>
            </div>
            <span className="text-2xl font-bold">CashBird Admin</span>
          </div>
          <CardTitle>Acesso Administrativo</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="E-mail do administrador"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              Entrar no Painel
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Demo: admin@cashbird.com / admin123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Dashboard Principal
function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Visão geral da plataforma CashBird</p>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Jogadores Ativos</p>
                <p className="text-2xl font-bold text-gray-900">2,847</p>
                <p className="text-sm text-green-600">+12% hoje</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Receita Hoje</p>
                <p className="text-2xl font-bold text-gray-900">R$ 15.420</p>
                <p className="text-sm text-green-600">+8% vs ontem</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Partidas Hoje</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
                <p className="text-sm text-green-600">+15% vs ontem</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Taxa Comissão</p>
                <p className="text-2xl font-bold text-gray-900">5%</p>
                <p className="text-sm text-gray-500">Configurável</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos e Tabelas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Partidas por Hora (Hoje)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[45, 52, 38, 67, 89, 76, 94, 82, 71, 88, 95, 103].map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="bg-yellow-400 rounded-t"
                    style={{ height: `${(value / 103) * 200}px`, width: '20px' }}
                  ></div>
                  <span className="text-xs text-gray-600 mt-1">{index + 8}h</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Jogadores (Hoje)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'BirdMaster', games: 23, winnings: 'R$ 450' },
                { name: 'FlyHigh', games: 19, winnings: 'R$ 380' },
                { name: 'GoldenWings', games: 17, winnings: 'R$ 320' },
                { name: 'SkyKing', games: 15, winnings: 'R$ 280' },
                { name: 'AirAce', games: 14, winnings: 'R$ 260' }
              ].map((player, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      index === 0 ? 'bg-yellow-400 text-black' :
                      index === 1 ? 'bg-gray-300 text-black' :
                      index === 2 ? 'bg-orange-400 text-black' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <p className="text-sm text-gray-600">{player.games} partidas</p>
                    </div>
                  </div>
                  <span className="font-bold text-green-600">{player.winnings}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Gerenciamento de Usuários
function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState('')

  const users = [
    { id: 1, name: 'BirdMaster', email: 'bird@email.com', balance: 125.50, status: 'active', games: 247 },
    { id: 2, name: 'FlyHigh', email: 'fly@email.com', balance: 89.30, status: 'active', games: 198 },
    { id: 3, name: 'GoldenWings', email: 'golden@email.com', balance: 234.80, status: 'suspended', games: 156 },
    { id: 4, name: 'SkyKing', email: 'sky@email.com', balance: 67.20, status: 'active', games: 134 },
    { id: 5, name: 'AirAce', email: 'air@email.com', balance: 156.90, status: 'active', games: 112 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Usuários</h1>
          <p className="text-gray-600">Gerencie jogadores e suas contas</p>
        </div>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
          <Download className="mr-2 h-4 w-4" />
          Exportar
        </Button>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar por nome ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de Usuários */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usuário
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Saldo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Partidas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-green-600">
                        R$ {user.balance.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.games}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className={
                        user.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }>
                        {user.status === 'active' ? 'Ativo' : 'Suspenso'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Ban className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Logs de Partidas
function GamesLogs() {
  const games = [
    { id: 1, player1: 'BirdMaster', player2: 'FlyHigh', bet: 10, winner: 'BirdMaster', score: '15-12', time: '14:32' },
    { id: 2, player1: 'SkyKing', player2: 'GoldenWings', bet: 5, winner: 'GoldenWings', score: '18-14', time: '14:28' },
    { id: 3, player1: 'AirAce', player2: 'BirdMaster', bet: 20, winner: 'BirdMaster', score: '22-19', time: '14:25' },
    { id: 4, player1: 'FlyHigh', player2: 'SkyKing', bet: 2, winner: 'Empate', score: '16-16', time: '14:20' },
    { id: 5, player1: 'GoldenWings', player2: 'AirAce', bet: 50, winner: 'AirAce', score: '25-21', time: '14:15' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Logs de Partidas</h1>
        <p className="text-gray-600">Histórico completo de todas as partidas</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jogadores
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aposta
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resultado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vencedor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Horário
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {games.map((game) => (
                  <tr key={game.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      #{game.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {game.player1} vs {game.player2}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-green-600">
                        R$ {game.bet}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {game.score}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className={
                        game.winner === 'Empate' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'
                      }>
                        {game.winner}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {game.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Gerenciamento de Pagamentos
function PaymentsManagement() {
  const payments = [
    { id: 1, user: 'BirdMaster', type: 'deposit', amount: 100, method: 'PIX', status: 'completed', time: '14:30' },
    { id: 2, user: 'FlyHigh', type: 'withdrawal', amount: 50, method: 'PIX', status: 'pending', time: '14:25' },
    { id: 3, user: 'GoldenWings', type: 'deposit', amount: 200, method: 'Card', status: 'completed', time: '14:20' },
    { id: 4, user: 'SkyKing', type: 'withdrawal', amount: 75, method: 'PIX', status: 'completed', time: '14:15' },
    { id: 5, user: 'AirAce', type: 'deposit', amount: 150, method: 'PIX', status: 'failed', time: '14:10' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Pagamentos</h1>
        <p className="text-gray-600">Controle de depósitos e saques</p>
      </div>

      {/* Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600">Depósitos Hoje</p>
              <p className="text-2xl font-bold text-green-600">R$ 12.450</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600">Saques Hoje</p>
              <p className="text-2xl font-bold text-blue-600">R$ 8.320</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600">Pendentes</p>
              <p className="text-2xl font-bold text-yellow-600">R$ 1.250</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usuário
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Método
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      #{payment.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {payment.user}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className={
                        payment.type === 'deposit' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }>
                        {payment.type === 'deposit' ? 'Depósito' : 'Saque'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      R$ {payment.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {payment.method}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className={
                        payment.status === 'completed' ? 'bg-green-100 text-green-800' :
                        payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {payment.status === 'completed' ? 'Concluído' :
                         payment.status === 'pending' ? 'Pendente' : 'Falhou'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      {payment.status === 'pending' && (
                        <>
                          <Button variant="outline" size="sm">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <XCircle className="h-4 w-4 text-red-600" />
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Configurações do Sistema
function SystemSettings() {
  const [commissionRate, setCommissionRate] = useState(5)
  const [minWithdrawal, setMinWithdrawal] = useState(10)
  const [maxBet, setMaxBet] = useState(50)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Configurações do Sistema</h1>
        <p className="text-gray-600">Configure parâmetros da plataforma</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Configurações de Apostas */}
        <Card>
          <CardHeader>
            <CardTitle>Configurações de Apostas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Taxa de Comissão (%)
              </label>
              <input
                type="number"
                value={commissionRate}
                onChange={(e) => setCommissionRate(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                min="0"
                max="20"
              />
              <p className="text-sm text-gray-500 mt-1">
                Percentual cobrado sobre cada aposta
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Aposta Máxima (R$)
              </label>
              <input
                type="number"
                value={maxBet}
                onChange={(e) => setMaxBet(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                min="1"
              />
            </div>

            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
              Salvar Configurações
            </Button>
          </CardContent>
        </Card>

        {/* Configurações de Pagamentos */}
        <Card>
          <CardHeader>
            <CardTitle>Configurações de Pagamentos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Saque Mínimo (R$)
              </label>
              <input
                type="number"
                value={minWithdrawal}
                onChange={(e) => setMinWithdrawal(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                min="1"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Métodos de Pagamento Ativos
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  PIX Instantâneo
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  Cartão de Crédito
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Transferência Bancária
                </label>
              </div>
            </div>

            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
              Salvar Configurações
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Configurações de Segurança */}
      <Card>
        <CardHeader>
          <CardTitle>Configurações de Segurança</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Anti-Fraude</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  Detectar múltiplas contas
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  Análise de padrões suspeitos
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  Verificação de idade
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Fair Play</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  Física determinística
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  Gravação de replays
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  Logs completos
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}