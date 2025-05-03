import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Advantages } from "./components/Advantages"
import { Facilities } from "./components/Facilities"
import { Footer } from "./components/Footer"
import { Partners } from "./components/Partners"

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Facilities />
      <Partners />
      <Footer />
    </main>
  )
}
