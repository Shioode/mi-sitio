
import { NavLink, useParams } from 'react-router';
import { works } from '../gallery/obra';
import './style.css';
import { Button } from '@/components/ui/button';

export const Info = () => {

    const {id} = useParams()

    const work = works[Number(id)]

  return (
    <div className="bg-black min-h-screen w-full flex flex-col justify-center lg:justify-around text-gray-200">
        
        <h1 className="font-display font-bold pt-5 pb-5 text-3xl md:text-4xl text-center">
            {work.name}</h1>

        <div className="flex flex-col lg:justify-between items-center gap-1"> 

            <figure className="max-w-3xl mb-5" >
            <img className="border rounded-2xl" src={`/mi-sitio/imagenes/trabajos/${work.image}`} />
            </figure>

            <div className="max-w-3xl mb-5 pb-4 pt-4 pl-4 pr-4 border-4 bg-gray-300 border-gray-300 rounded-2xl text-gray-900">
                <p>{work.description}</p>
            </div>
        </div>

        <footer className='flex flex-row-reverse pr-5 pb-5'>
            <NavLink to="/gallery">
            <Button className='bg-gray-200 text-gray-900 hover:text-white'>Go back</Button>
            </NavLink>
        </footer>

        

    </div>
  )
}
