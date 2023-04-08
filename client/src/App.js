import Navbar from "./components/Navbar/navbar";
import ProfileHeader from "./components/Profile-Header/profileHeader";
import About from "./components/About-Me/about";
import WebLinks from "./components/Web-Links/web-links";
import PasswordSection from "./components/Password/pwd-field";
import Interests from "./components/Interests/interests";
import CipherMap from "./components/Cipher-Map/cipherMap";
import Profinfo from "./components/Prof-Info/profInfo";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ProfileHeader />
      <div className="container">
        <About />
        <div className="underline"></div>
        <CipherMap />
        <div className="underline"></div>
        <WebLinks />
        <div className="underline"></div>
        <Profinfo />
        <div className="underline"></div>
        <PasswordSection />
        <div className="underline"></div>
        <Interests />
      </div>
    </>
  );
}

export default App;
