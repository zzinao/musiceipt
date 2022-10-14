import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import ReceiptPage from '../pages/ReceiptPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/print" element={<ReceiptPage />} />
            </Routes>
        </BrowserRouter>
    )
}