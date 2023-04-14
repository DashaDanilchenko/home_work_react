import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="container">
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout