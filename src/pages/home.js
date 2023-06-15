import NavBar from "../components/nav/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Home() {
    return(
      <div className="content">
        <div className="name-block">
          <div className="name">Jacob Dierksheide</div>
          <div className="title">Software Engineer</div>
        </div>    
      </div>
    )
}