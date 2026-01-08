import { Outlet } from "react-router"

export const Layout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <header className="bg-rose-200 w-full border border-green-950 mb-2"> 
            <h1> El header</h1>
        </header>


        <main>

            <Outlet />

        </main>

    </div>
  )
}
