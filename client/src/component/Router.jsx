import React from "react";
import { BrowserRouter, Routers, Route } from "react-router-dom";
import BoardInput from "./BoardInput";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routers>
                    <Route path="/create" element={<BoardInput/>}/>
                </Routers>
            </BrowserRouter>
        </>
    )
}