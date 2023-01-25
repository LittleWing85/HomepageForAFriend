import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Project() {
    const projectId = useSelector((state) => state.portfolio.projectId);
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch("/api/project/" + projectId)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, [projectId]);

    return (
        <div className="content">
            <h1>{project.project_name}</h1>
            <div className="gridProject">
                <img
                    className="mainImageProject"
                    src={project.project_picture_url}
                />
                <p className="about">{project.about}</p>
            </div>
            {/* <p>{project.more_pictures}</p> */}
            {/*             <ul>
                {project.more_pictures.map((url) => (
                    <li className="noListStyle" key={url}>
                        <img className="portfolioImage" src={url} />
                    </li>
                ))}
            </ul> */}
        </div>
    );
}
