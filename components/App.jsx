import React from "react"
import Header from "./Header"
import MainRouter from "./MainRouter"
import { BrowserRouter, Router } from "react-router-dom"


export default function App() {
    return (
            <div>
                <Header />
                <BrowserRouter>
                    <MainRouter />
                </BrowserRouter>
            </div>
    )
}