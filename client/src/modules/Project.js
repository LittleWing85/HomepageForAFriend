import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProjectChanged } from "./portfolio/portfolioSlice";

export default function Project() {
    const dispatch = useDispatch();
    const projectId = useSelector((state) => state.portfolio.projectId);
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch("/api/project/" + projectId)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, [projectId]);

    function closeProject() {
        dispatch(showProjectChanged(false));
    }

    return (
        <div className="content">
            <div className="closingButtonContainer" onClick={closeProject}>
                <p>&#10799;</p>
            </div>

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
