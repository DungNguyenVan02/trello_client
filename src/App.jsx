import Board from './pages/Boards/_id'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Board />
      <ToastContainer position="bottom-left" theme="colored" />
    </>
  )
}

export default App
