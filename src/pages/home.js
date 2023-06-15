import NavBar from "../NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Home() {
    return(
      <div>
        <div className="name-block">
          <div className="name">Jacob</div>
          <div className="name">Dierksheide</div>
          <div className="title">Software Engineer</div>
        </div>    
      </div>
    )
}