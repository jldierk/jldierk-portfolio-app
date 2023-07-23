import { useEffect, useState } from 'react';
import { Bounce, Fade } from 'react-reveal';
import ExperienceBlock from '../components/ExperienceBlock';
import ProjectBlock from '../components/ProjectBlock';
import pokemonPartyAppImg from "../images/pokemonWebApp.png";
import unityGameImg from "../images/gameplay.png";
import moment, { Moment } from 'moment';
import resume from '../files/dierksheideResume.pdf';
import LinkSVG, { ExternalLinkSVG, GitHubSVG, LinkedInSVG, MailSVG } from '../components/svgs/commonSVGs';

export default function Home() {
  let startDate = moment('2013-06-02');
  let now = moment();
  let yearsExperience = now.diff(startDate, 'years');
  const [currSection, setCurrSection] = useState("");

  function fadeOutOnScroll(element) {
    if (!element) {
      return;
    }
    
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
    var newOpacity = 1;
    
    if (scrollTop > distanceToTop) {
      let distanceScrolled = (scrollTop - distanceToTop);
      let threshold = (elementHeight / 2); 
      if (distanceScrolled < threshold){
        let opacityChange = distanceScrolled / threshold;
        if (opacityChange > 0) {
          newOpacity = 1 - opacityChange;

          if (newOpacity >= 0) {        
            element.style.opacity = newOpacity;
          }
        }
      }
    }
  }

  function scrollHandler() {
    var header = document.getElementById('header');
    fadeOutOnScroll(header);
  }   

  function handleNavChange(intersections) {
    var section = intersections[0];
    if (section.intersectionRatio >= 0.7) {      
      setCurrSection(section.target.id);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    let sections = document.querySelectorAll(".section");
    for (var section of sections) {
      observer.observe(section);
    }
  }, [])
  
  var observer = new IntersectionObserver(handleNavChange, {threshold: .7});
    
    return (
      <div className="content">
        <div id="header" style={{minHeight: "100vh", display: "flex", flexDirection:"column", justifyContent: "center"}}>
          <div style={{flex:"1", display: "flex", flexDirection:"column", justifyContent: "center", flexBasis:"0"}}>
            <Bounce left><h1 style={{alignSelf:"end"}}>Jacob Dierksheide</h1></Bounce>
            <Bounce right delay={700}>
              <div style={{alignSelf:"end"}}>
                <span style={{color: "var(--secondarycolor)", fontSize: "50px"}}>Sofware Engineer</span>
              </div>
            </Bounce>
          </div>
          <div style={{width: "150px", height:"100px", alignSelf:"end", justifySelf:"end"}}> <a href='#details'>Learn more <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#8d8da1'><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></a> </div>
        </div> 
        <div style={{height:"50vh"}}/>
        <div id="details" style={{display: "flex"}}>
          <div style={{flex:"2", fontSize: "20px", textAlign: "Left", position: "-webkit-sticky", position: "sticky", alignSelf: "flex-start", top:"0px", padding:"50px 20px 20px 20px"}}>
            <div>              
              <div id="nav-link" className={`${currSection == "about" ? "active" : ""}`}><a href="#about">About</a></div>
              <div id="nav-link" className={`${currSection == "experience" ? "active" : ""}`}><a href="#experience">Experience</a></div>
              <div id="nav-link" className={`${currSection == "sample-projects" ? "active" : ""}`}><a href="#sample-projects">Sample Projects</a></div>
            </div>
            <div style={{display: "flex", width: "100px", justifyContent: "space-evenly", marginTop: "10px"}}>
              <a className='svg-link' href='https://github.com/jldierk' target='_blank'><GitHubSVG/></a>
              <a className='svg-link' href='https://www.linkedin.com/in/jacob-dierksheide-b1268091' target='_blank'><LinkedInSVG/></a>
              <a className='svg-link' href='mailto:jldierk@gmail.com'><MailSVG/></a>
            </div>
            <a className='external-link' style={{fontSize: "15px"}} href={resume} target='_blank'><b>View Full Resume</b><ExternalLinkSVG/></a>                
          </div>
          <div style={{paddingTop: "15px", flex: "5"}}>
            <div id="about" className="section">
              <Fade bottom>
                <h2>About</h2>
                <div className="about">
                  <p>
                    Welcome in! My name is Jacob Dierksheide, I was born and raised in South Carolina where I would eventually attend the
                    College of Charleston and recieve degrees in Computer Science and Mathematics.
                  </p>
                  <p>
                    I am now a Software Engineer with over {yearsExperience} years of professional experience in the field. Through my work I am passionate about finding simple solutions to 
                    complex problems, and building exceptionally readable, reusable, and above all testable code. I have specialize in Java development,
                    but have been exposed to a wide variety of languages and technologies over my career, and am always excited to learn new skills.        
                  </p>
                  <p>
                    When not writing code I enjoy performing Improv in my current home of Chicago, as well as nerding out over the TV show <i>Survivor</i> and, of course, playing with my pet bunny Sesame.
                  </p>
                </div>          
              </Fade>                  
            </div>
            <div id='experience' className="section">
              <Fade bottom>
                <h2>Experience</h2>
              </Fade>
              <ExperienceBlock company="Benefitfocus, Inc." years="2014 - Present" skills={['Java 8', 'Spring Boot', 'Spring Batch', 'Oracle SQL', 'JAX-RS', 'Swagger', 'Drools']}>
                Tech Lead of the Payroll team. In my time at Benefitfocus I have worked on many different projects and served as a highly versatile and dependable employee. 
                For the past several years, my main focus has been the development of Production API integrations with our partnering Payroll Bureaus to support bidirectional 
                data feeds.
              </ExperienceBlock>
              <ExperienceBlock company="College of Charleston" years="2013" skills={['Python', 'Galaxy', 'R', 'Google App Engine']}>
                Developed a Web Application for usage by the Data Science 101 course to teach algorithms. Used by that class starting in the Fall 2013 semester, 
                providing students the ability to code, test, and submit for automated grading assignments related to these algorithms. 
              </ExperienceBlock>
              <ExperienceBlock company="MUSC Department of Family Medicine" years="Summer 2012" skills={['Java 8', 'Android']}>
                Contracted through the College to build an Android-based survey application for gathering patient demographic data and securely storing it for the Department's records.
              </ExperienceBlock>          
            </div>   
            <div id='sample-projects' className="section">
              <Fade bottom>
                <h2>Sample Projects</h2>        
              </Fade>              
              <ProjectBlock projectName="Pokemon Party Creator" imageSrc={pokemonPartyAppImg} skills={['React', 'Spring Boot', 'MongoDB']} projectLink="https://jldierk.github.io/pokemon-client">
                <div style={{margin: "5px 0px 5px 0px"}}>
                  A web application allowing users to assemble a party of Pokemon and automatically generate an optimal set of moves for those pokemon based on their strengths and the makeup of the rest of the Party.
                </div>
                <div style={{margin: "5px 0px 5px 0px"}}>
                  <div>
                    <a class="external-link" href='https://jldierk.github.io/pokemon-client'><LinkSVG/> See it in action</a>
                  </div>
                  <div>
                    <a class="external-link" href='https://github.com/jldierk/pokemon-client'><LinkSVG/>Explore the font-end</a>
                  </div>
                  <div>
                    <a class="external-link" href='https://github.com/jldierk/pokemon-party-app'><LinkSVG/>Check out the back-end</a>
                  </div>
                </div>                
              </ProjectBlock>
              <ProjectBlock projectName="Unity 2D Game" imageSrc={unityGameImg} skills={['C#', 'Unity', 'Aesprite']} projectLink="http://jldierk.com">
                <p>
                  An in-progress 2D Top-Down game in developed using the Unity engine. This project have given me lots of opportunities to sharpen my skills with 
                  other programming languages as well as challenged me to think about system design in new and interesting ways related to gameplay patterns.
                </p>
                <p>
                  GitHub for this project is private, but I am happy to provide samples upon request!
                </p>
              </ProjectBlock>
            </div>
          </div>
        </div>        
      </div>
    )
}