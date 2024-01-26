import './App.css';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Contact } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { Skills } from './layout/sections/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;