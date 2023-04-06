import logo from "./logo.svg";
import About from "./components/About-Me/about";
import "./App.css";
import WebLinks from "./components/Web-Links/web-links";
import PasswordSection from "./components/Password/pwd-field";
import InterestSection from "./components/Interest-Field/interest-field";
import CipherMap from "./components/Cipher-Map/cipherMap";

function App() {
  return (
    <div className="container">
      <About />
      <div className="underline"></div>
      <CipherMap />
      <div className="underline"></div>
      <WebLinks />
      <div className="underline"></div>
      <PasswordSection />
      <div className="underline"></div>
      <InterestSection />
    </div>
  );
}

export default App;
