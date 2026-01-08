import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { Gallery, Home, Info } from "./pages"




export const AppRouter = () => {

  return (
    <BrowserRouter> 
      <Routes>

        <Route path="/" element={ <Home />} /> Plantear si uso esta linea
        <Route path="*" element={ <Navigate to="/" />} />
        <Route path="/gallery" element={<Gallery/>} />

        <Route path="/gallery/info/:id" element={<Info />}/>


      </Routes>
    </BrowserRouter>
  )
}
