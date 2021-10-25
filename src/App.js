import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contact/Contacts";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Interest from "./components/Interests/Interest";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <About />
      <Education />
      <Skills />
      <Interest />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
