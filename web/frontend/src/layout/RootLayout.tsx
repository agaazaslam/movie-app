import { Outlet } from "react-router"
import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
const RootLayout = () => {
  return (

    <div className="min-h-screen flex flex-col w-full text-neutral-content">
      <Header />

      <div className="min-h-screen p-4  ">

        <Outlet />

      </div>


      <Footer />


    </div>
  )
}

export default RootLayout
