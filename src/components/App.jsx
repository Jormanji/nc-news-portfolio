import React from "react"
import Header from "./Header"
import MainRouter from "./MainRouter"
import { BrowserRouter, Router } from "react-router-dom"
import { UserProvider } from "./Users"


export default function App() {
    return (
            <div>
                <Header />
                <BrowserRouter>
                <UserProvider>
                    <MainRouter />
                </UserProvider>
                </BrowserRouter>
            </div>
    )
}