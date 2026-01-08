import "./homePortfolio.css"

import { Button } from "@/components/ui/button"
import { CupSoda, Instagram, Loader2, Mail, MapPin, Phone, X } from "lucide-react"
import { NavLink } from "react-router"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Popover,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { PopoverContent } from "@radix-ui/react-popover"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  } from "@/components/ui/carousel"


import Autoplay from "embla-carousel-autoplay";
  
const photos =["concurso","gatonegro","sampler","skulls","woter"] ;

export const Home = () => {

  const [date, setDate] = useState<Date>();

  const [Cargando, setCargando] = useState<boolean>(false)

    const enviar = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCargando(true)

    await new Promise (resolve => setTimeout (resolve, 2000))

    setCargando(false)

    window.location.reload()
  }


  return (
    <>
     <div className="bg-linear-to-b from-black via-black to-purple-300 min-h-screen w-full h-full gap-10">
      
        <div className="flex flex-row justify-center gap-4 object-center w-full  bg-[rgba(255,255,255,0)] p-2 z-20 fixed"> 
          
                  <NavigationMenu>
                    <NavigationMenuList>

                      <NavigationMenuItem>
                        <a href="#about">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                          </NavigationMenuLink>
                        </a>
                      </NavigationMenuItem>

                      <NavigationMenuItem >
                        <a href="#gallery">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Gallery
                          </NavigationMenuLink>
                        </a>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <a href="#">
                          
                            <CupSoda className="w-10 h-10 text-white hover:text-yellow-200"/>
                          
                        </a>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <a href="#contact">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact
                          </NavigationMenuLink>
                        </a>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <a href="#extra">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Extra
                          </NavigationMenuLink>
                        </a>
                      </NavigationMenuItem>

                    </NavigationMenuList>
                  </NavigationMenu>


        </div>

      <header>

        
          <h1 className="introduccion">Desirée Beltrán</h1> 
       
          <div id="intro-desi" className="intro-imagen"> </div>

      </header>
      {/* ABOUT */}

      <div id="about" className="about flex-col 2xl:flex-row items-center"> 
        
          <div className=" about-box"> 
            <h2 className="font-display text-6xl flex flex-row md:justify-center justify-start pb-5">
              <strong>Sobre mi</strong>
            </h2>

            <p className="pb-5 text-lg">
              Soy una estudiante de Bellas Artes en la Universidad Politécnica de Valencia en su ultimo año. 
              Tengo interés en muchas disciplinas, destacando el diseño de personaje, el diseño gráfico, el 3D y la ilustración. 
              No tengo claro a donde me llevará pero decido mantener todas las opciones abiertas a futuro.
            </p>
          </div>

            <img src="./imagenes/portada/Mina_adaptada.jpg" alt="gato bajo el sol-placeholder" 
              width={400}
              className="h-fit object-contain rounded-2xl"
            />
       
      </div>

      {/* GALERIA */}

      <section id="gallery" className="flex flex-col w-full h-auto gap-4 pr-6 pl-6 pt-6 pb-30 lg:justify-center text-white"> 

          <div className="flex flex-col text-white mt-5 mb-5 mr-5 ml-5 md:justify-center">
          <h2 className="font-display text-6xl md:mt-4 mt-8 mb-7 mr-6 ml-5 flex flex-row md:justify-center sm:justify-center ">
            <strong>Obra y proyectos</strong>
            </h2>

          


        </div>
          <div className="flex justify-center">
            <Carousel 
            className="w-full max-w-md md:max-w-[506px] "
              plugins={[Autoplay({delay: 2000})]}
              opts={{
                loop:true,
              }}
            >
                <CarouselContent>
                  {photos.map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">

                            <img 
                            src={`./imagenes/carousel/${photos[index]}.jpg`}
                            alt={`Imagen ${index + 1} de proyectos pasados`}
                            className="w-full h-full object-cover"
                            />

                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

        <div className="texto-gallery">
             <center>
          <p className="">
          Actualmente mi porfolio se encuentra en proceso de ser revisado para poder ser organizado en secciones, 
          pero mientras aquí tienes una compilación de proyectos anteriores
          </p>
             <NavLink to="/gallery">
               <Button variant= "link" className="font-bold text-white text-2xl cursor-pointer">Ver más..</Button>
             </NavLink>
           </center>
        </div>

      </section>

      {/* CONTACTO */}
      <div id="contact" className="flex flex-col md:flex-row  gap-8 w-auto mx-auto pt-6 pb-10 pl-6 pr-6 "> 
        

       
       

       <div className=" w-full max-w-md mx-auto lg:max-none lg:w-1/2 space-y-2 text-gray-200">

        <h2 className="mb-8 text-6xl font-display">
          <strong>Redes sociales y contacto</strong>
        </h2>

         <p className="flex items-center gap-2 md:justify-start">

                <Phone className="w-5 h-5" />
              
                722 45 08 04

 

              </p>

              <p className="flex items-center gap-2 md:justify-start">

                <Mail className="w-5 h-5"/>

                desicabanes@gmail.com

 

              </p>

              <p className="flex items-center gap-2 md:justify-start">

              <MapPin className="w-5 h-5"/>

                Valencia, Comunidad Valenciana

 

              </p>

              <div className="flex gap-8 mt-8 ">

            

              
        
              <a href="https://x.com/shio_foam">
                <X className="h-8 w-8 hover:text-pink-200 cursor-pointer"/>
              </a>
              <a href="https://www.instagram.com/shio_foam/">
                <Instagram className="h-8 w-8 hover:text-pink-200 cursor-pointer"/>
              </a>
              

            </div>
       </div>

       {/* FORMULARIO */}

       <div className="w-full max-w-md mx-auto lg:max-none lg:w-1/2 rounded-lg shadow-lg bg-white  ">
        <form className="space-y-6 p-8 aspect-square rounded-lg shadow-lg"
        onSubmit={enviar}>
            <div className="space-y-2">

              <Label htmlFor="name">Nombre</Label>
              <Input id="name" required/>

            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" required/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Teléfono</Label>
              <Input id="phoneNumber" required/>
            </div>

            <div className="space-y-2">
              <Label>¿De que trata?</Label>
              <Select>
                <SelectTrigger className="border-gray-200 bg-white text-gray-900">
                  <SelectValue placeholder="Disciplina" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3D">3D</SelectItem>
                  <SelectItem value="illustration">Ilustración</SelectItem>
                  <SelectItem value="traditional">Tradicional</SelectItem>
                  <SelectItem value="animation">Animación</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Disponibilidad</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant= {"outline"}>
                    {date ? date.toLocaleDateString() 
                    : <span>Seleccione fecha</span>}
                    
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                   <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-lg border"
                    />
                </PopoverContent>
              </Popover>

            </div>

            <Button 
            type="submit"
            className="w-full bg-[rgb(204,146,225)] text-white hover:bg-[rgb(172,112,194)] text-md"
            disabled= {Cargando}>
                {Cargando ? (<Loader2 className="mr-2 h-4 animate-spin"/>): null}
                { Cargando ? "Enviando..." : "Enviar"} 
            </Button>

        </form>
       </div>

      </div>

      

{/* EXTRAS */}

      <div id="extra" className="flex flex-col w-full h-190 justify-center object-center items-center gap-10 pr-6 pl-6 pt-10 pb-6 text-white"> 
         <h2 className="font-display text-6xl">Extra</h2>
        <iframe width="1020" height="630" src="https://www.youtube.com/embed/xuCn8ux2gbs?si=ymnxxtX-gz8-1DTn" title="YouTube video player"frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
    </>
  )
}
