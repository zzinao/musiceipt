import React from "react";
import Receipt from "../components/organisms/receipt";
import { useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md'

const ReceiptPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <MdOutlineArrowBackIos onClick={() => navigate(-1)} />
            <Receipt />
        </>
    )
}

export default ReceiptPage;