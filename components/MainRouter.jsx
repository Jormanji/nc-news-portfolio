import React from "react"
import Articles from "./Articles"
import Homepage from "./Homepage"
import Topics from "./Topics"
import {Routes, Route} from "react-router-dom";

export default function MainRouter () {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/topics" element={<Topics />} />
        </Routes>
    )
}