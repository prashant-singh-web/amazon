
import Dropnav from '@/components/Navbar_section/Dropnav'
import Amezon_bottom from '@/components/bottom/Amezon-bottom'
import Home_main from '@/components/home/Home_main'
import Navbar from '@/components/Navbar_section/navbar'
import MainNav_Section from '@/components/Navbar_section/MainNav_Section'





export default function Home() {
  const abase ="fixed"
  return (
    <div className="w-full bg-[#E3E6E6] min-h-[100vh]">
      <MainNav_Section />
      <Home_main/>
      <Amezon_bottom/>
    </div>
  )
}
