import "./Home.css";
import {Link} from 'react-router-dom';
import {MdNightlight} from 'react-icons/md';
import {IoMdNotifications} from 'react-icons/io';
import {MdOutlineDialpad} from 'react-icons/md';
import {BiSearch} from 'react-icons/bi';
import Footer from './Footer';
import LeftBar from "./LeftBar";
//import Center from "./Center";
//import RightBar from "./RightBar";
import Scorer from "./Scorer";
import Middle from "./Middle";

function Home() {
    return (  
      

             <div id="main">
             <div id="menu">
            <section id="section1">
             <h3>Cricket Info</h3>
             <section id="down">
             <div class="dropdown">
             <a class="button" href="#" role="button" id="dropdownMenuLink"
               data-bs-toggle="dropdown" aria-expanded="false">
             Live Scores  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Live Scores Home</a></li> 
    <li><a class="dropdown-item" href="#">Results</a></li>
    <li><a class="dropdown-item" href="#">Sesson View</a></li>
    <li><a class="dropdown-item" href="#">Desktop ScoreBoard</a></li>
    <li><a class="dropdown-item" href="#">Schedule</a></li>
    <li><a class="dropdown-item" href="#">International Calender</a></li>
  </ul>
</div>
          </section>
          </section>
          <section id="section2">
           <Link className="links">
           Series
           </Link >
           <Link className="links" to="./Team">
           Teams
           </Link >
           <Link className="links" to ="./Views">
           Views
           </Link >
           <Link className="links">
           Features
           </Link >
           <Link className="links">
           Videos
           </Link >
           <Link className="links">
           Stats
           </Link >


          </section>
          <section id="section3">
            <h4>Edition_PK</h4>
            <MdNightlight className="icons"/>
            <IoMdNotifications className="icons"/> 
            <MdOutlineDialpad className="icons"/>
            <BiSearch className="icons"/>
          </section>
           



       </div>
       <div id="middlesection" className="row">
        
        <div id="left" className="col-3">
              <Scorer/>
        </div>

        <div id="center" className="col-6">

          <Middle/>

        </div>
        <div id="right" className="col-3">
     
        </div>


       </div>
       <div id="footer">
        <Footer/>

        </div>










        </div>

      


    );
}

export default Home;