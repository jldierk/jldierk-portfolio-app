
import { Fade } from 'react-reveal';
import ExperienceBlock from '../components/ExperienceBlock';
import ProjectBlock from '../components/ProjectBlock';
import pokemonPartyAppImg from "../images/pokemonWebApp.png"
import moment, { Moment } from 'moment';
import resume from '../files/dierksheideResume.pdf';

export default function Home() {
  let startDate = moment('2014-06-02');
  let now = moment();
  let yearsExperience = now.diff(startDate, 'years');
  
    return (
      <div className="content">
        {/* <div style={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection: "column", height: "200px"}}> */}
        <div style={{minHeight: "100vh", display: "flex", flexDirection:"column", justifyContent: "center"}}>
          <h1>Jacob Dierksheide</h1>
          <h2 style={{color: "var(--secondarycolor)"}}>Sofware Engineer</h2>
        </div> 
        <div className="section">
          <h2>About</h2>
          <div className="about">
            <div style={{marginBottom: "10px"}}>
              I am a Software Engineer with over {yearsExperience} years of professional experience in the field. I am passionate about finding elegant solutions to 
              difficult problems. I specialize in Java development, but have been exposed to a wide variety of languages and technologies over my career, and am always
              excited to learn new skills.        
            </div>
            <div style={{marginBottom: "10px"}}>
              When not writing code I enjoy performing Improv in my new home of Chicago, as well as nerding out over the TV show <i>Survivor</i> and, of course, playing with my pet bunny Sesame.
            </div>
            <a className='external-link' href={resume} target='_blank'><b>View Full Resume</b> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="#8d8da1" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a>
            

            <div style={{display: "flex", width: "100px", justifyContent: "space-evenly", marginTop: "10px"}}>
              <a className='svg-link' href='https://github.com/jldierk' target='_blank'>
                <svg width="30" height="30" viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg"><path className="path-main" fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#8d8da1"/></svg>
              </a>
              <a className='svg-link' href='https://www.linkedin.com/in/jacob-dierksheide-b1268091' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30"><path className="path-main" d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z" fill="#8d8da1"/><path d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z" fill="#0e0e17"/></svg>
              </a>
            </div>
          </div>          
        </div>
        <div className="section">
          <h2>Experience</h2>
          <ExperienceBlock company="Benefitfocus, Inc." years="2014 - Present" skills={['Java 8', 'Spring Boot', 'Spring Batch', 'Oracle SQL', 'Drools']}>
            Tech Lead of the Payroll team. Developed API integrations with our partnering Payroll Bureaus to support bidirectional data feeds.
          </ExperienceBlock>
          <ExperienceBlock company="College of Charleston" years="2013" skills={['Python', 'Galaxy', 'R', 'Google App Engine']}>
            Developed a Web Application for usage by the Data Science 101 course to teach algorithms. Used by that class starting in the Fall 2013 semester, 
            providing students the ability to code, test, and submit for automated grading assignments related to these algorithms. 
          </ExperienceBlock>
          <ExperienceBlock company="MUSC Department of Family Medicine" years="2012" skills={['Java 8', 'Android']}>
            Contracted for the Summer to build an Android-based survey application for gathering patient demographic data and securely storing it for the Department's records.
          </ExperienceBlock>          
        </div>   
        <div className="section">
          <h2>Sample Projects</h2>        
          <ProjectBlock projectName="Pokemon Party Builder" imageSrc={pokemonPartyAppImg} skills={['React', 'Spring Boot', 'MongoDB']} projectLink="http://jldierk.com">
            A responsive web application allowing users to assemble a party of Pokemon and get analysis on the strength and optimal movesets for that party.
          </ProjectBlock>
          <ProjectBlock projectName="Unity 2D Game" imageSrc={pokemonPartyAppImg} skills={['C#', 'Unity']} projectLink="http://jldierk.com">
            For the past year I have been working on a 2D Top-Down game in Unity in my spare time. This project have given me lots of opportunities to sharpen my skills with 
            other programming languages as well as challenged me to think about system design in new and interesting ways related to gameplay patterns.
          </ProjectBlock>
        </div>
      </div>
    )
}