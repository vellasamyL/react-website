import React,{createElement} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header/Header';
import reportWebVitals from './reportWebVitals';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Background from './Components/Background/Background';
import Testmonial from './Components/Testmonial/Testmonial';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <Banner/>
    <About/>
    <Team/>
   <Background/>
   <Testmonial/>
   <Form/>
   <Footer/>
  </React.StrictMode>
);

reportWebVitals();
