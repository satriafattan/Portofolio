import './App.css'
import Navbar from './components/Navbar'
import Beranda from './components/Beranda'
import About from './components/About'
import Project from './components/Project'
import Kontak from './components/Kontak'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Beranda />
        <About />
        <Project />
        <Kontak />
      </main>
    </div>
  )
}

export default App
