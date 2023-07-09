import { Fade } from "react-reveal";

function ProjectBlock(props) {
    var skills = props.skills;
    return (
        <Fade bottom>
            <div className="sample-project" style={{display:"flex"}}>
                <div className="project-desc" style={{flex: 5, paddingRight: "10px"}}>
                    <h4>{props.projectName}</h4>
                    <p>
                        {props.children}
                    </p>
                    <div style={{display: "flex", marginTop: "10px"}}>
                        {skills != null && skills.map(skill=><div className="skill">{skill}</div>)}
                    </div>
                </div>
                <div className="project-image" style={{flex: 1}}>
                    <img style={{width: "180px", height:"100px"}} src={props.imageSrc}/>
                </div>
            </div>
        </Fade>
    )
}

export default ProjectBlock;