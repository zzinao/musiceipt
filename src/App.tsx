import MainPage from "./pages/MainPage"
import ReceiptPage from "./pages/ReceiptPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/print" element={<ReceiptPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
