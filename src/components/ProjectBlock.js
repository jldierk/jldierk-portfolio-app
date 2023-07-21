import { Fade } from "react-reveal";

function ProjectBlock(props) {
    var skills = props.skills;
    return (
        <Fade bottom>
            <div className="sample-project" style={{display: "flex", flexDirection: "column"}}>
                <h4>{props.projectName}</h4>
                <div style={{display:"flex"}}>
                    <div className="project-image" style={{flex: 1, margin: "5px"}}>   
                        <a href={props.projectLink}>
                            <img style={{width: "180px", height:"100px", margin: "10px 0px 10px 0px"}} src={props.imageSrc}/>
                        </a>                 
                    </div>
                    <div className="project-desc" style={{flex: 5, margin: "5px"}}>                    
                        <p>
                            {props.children}
                        </p>
                        <div style={{display: "flex", marginTop: "10px"}}>
                            {skills != null && skills.map(skill=><div className="skill">{skill}</div>)}
                        </div>
                    </div>
                </div>            
            </div>            
        </Fade>
    )
}

export default ProjectBlock;