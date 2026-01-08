import { Button } from "@/components/ui/button"
import { NavLink, useNavigate } from 'react-router';
import { works } from './obra';
import { Card, CardContent } from "@/components/ui/card"
import { useState } from 'react';


export const Gallery = () => {

  const navigate = useNavigate ();

  const [listaPortfolio] = useState(works.slice(0,6)); 

  return (

  <div className=" bg-black flex flex-col lg:justify-between items-center min-h-screen w-full h-full text-gray-200">
    <div>
      <h1 className="flex font-display text-4xl justify-center pt-5"> Obras y proyectos </h1>
      <h2 className="flex justify-center pt-5">Haz click para más info</h2>
    
    </div>


    <div className="grid grid-cols-2 md:grid-cols-3 pl-10 pr-10 pt-10 gap-4 mx-auto">

      {
        listaPortfolio.map(works => (
          <Card 
          className="sm:w-[220px] sm:h-[220px] cursor-pointer hover:bg-[rgb(213,213,213)] transition-colors w-[180px] h-[180px]"
          key={works.id}
          >
            <CardContent 
            onClick={() => {
              navigate(`/gallery/info/${works.id}`)
            }}
            className="flex flex-col items-center justify-center object-center gap-1 h-full pt-5 pb-5 ">

              <img 
              src={`./imagenes/trabajos/${works.thumbnail}`} 
              className="w-auto h-auto object-contain border border-black "
              alt="Concurso"
              />

              <h2 className="text-center font-medium text-lg">{works.name}</h2>

            </CardContent>   
          </Card>
        ))
      }

    </div>

  <footer className="flex flex-row justify-end align-bottom pr-5 pb-5 w-full"> 
    <NavLink to="/">
    <Button className='bg-gray-200 text-gray-900 hover:text-white'>Home</Button>
    </NavLink>
  </footer>
 </div>
  )
}
