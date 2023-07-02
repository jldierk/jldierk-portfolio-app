import { Fade } from "react-reveal";

function ExperienceBlock(props) { 
    var skills = props.skills;
    return (
        <Fade bottom>
            <div className="experience-block">
                <h4>{props.company}</h4>
                <h5><i>{props.years}</i></h5>
                <div style={{marginBottom: "5px", marginTop: "5px"}}>
                    <p>
                        {props.children}
                    </p>            
                </div>
                <div style={{display: "flex", marginTop: "10px"}}>
                    {skills != null && skills.map(skill=><div className="skill">{skill}</div>)}
                </div>
            </div>
        </Fade>
    );
}

export default ExperienceBlock;