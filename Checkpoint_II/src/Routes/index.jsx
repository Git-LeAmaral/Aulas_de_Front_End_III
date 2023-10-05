import { BrowserRouter, Route, Routes } from "react-router-dom";
import OdontoContextProvider from '../contexts/OdontoContext'
import Home from "../pages/Home/Home";

export function RouteList() {
  return (
    <>
        <BrowserRouter>
          <OdontoContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </OdontoContextProvider>
        </BrowserRouter>
    </>
  )
}