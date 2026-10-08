import './App.css'
import Aluno from './components/Aluno'
import Nota from './components/Nota'
function App() {

  return (
    <>
      <Aluno nome="Mariana Alveres" turma="203" />
      <Aluno nome="Jackson" turma="203" />
      <Aluno nome="João Pereira" turma="609"/>
      <Nota disciplina="português" nota="4,8"/>
    </>
  )
}

export default App
