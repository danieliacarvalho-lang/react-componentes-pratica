import './App.css'
import Aluno from './components/Aluno'
import Nota from './components/Nota'
import Produto from './components/Produto'
function App() {

  return (
    <>
      <Aluno nome="Mariana Alveres" turma="203" />
      <Aluno nome="Jackson" turma="203" />
      <Aluno nome="João Pereira" turma="609"/>
      <Nota disciplina="português" nota={4.8}/>
      <Nota disciplina="matemática" nota={7.0}/>
      <Nota disciplina="geografia" nota={8.0}/>

      <Produto nome="Teclado" descricao="Teclado usado com fio" preco={75.0} disponivel={true}/>
      <Produto nome="Placa de vídeo" descricao="multicolorida" preco={144.99} disponivel={true}/>
      <Produto nome="Placa-mãe" descricao="nova de otima qualidade" preco={150.07} disponivel={true}/>
      <Produto nome="pendrive" descricao="ele tem 20GB de memoria" preco={50.0} disponivel={false}/>

      <div>
        <button>Comprar</button>
      </div>
    </>
  )
}

export default App
