import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import MainBodyTopText from "./components/MainBodyTopText/MainBodyTopText";
import Choose from "./components/Choose/Choose";
import GridSection from "./components/GridSection/GridSection";
import PeopleBox from "./components/PeopleBox/PeopleBox";
import Members from "./components/Members/Members";
import Faq from "./components/FAQ/Faq";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="fullBody">
      <div className="TopTwoSection">
        <NavBar />
        <HeroSection />
      </div>
      <MainBodyTopText />
      <Choose />
      <GridSection />
      <PeopleBox />
      <Members />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
