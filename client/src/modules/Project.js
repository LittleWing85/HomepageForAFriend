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
            {!project.gallery_pictures ? (
                <>Loading...</>
            ) : project.gallery_pictures ? (
                <>
                    <div
                        className="closingButtonContainer"
                        onClick={closeProject}
                    >
                        <p className="closingButton">&#10799;</p>
                    </div>
                    <h1>{project.project_name}</h1>{" "}
                    <div className="projectImagesContainer">
                        <img
                            className="mainImageProject"
                            src={project.gallery_pictures[0]}
                        />
                        <p className="about">{project.about}</p>
                    </div>
                    <ul className="projectImagesContainer">
                        {project.gallery_pictures
                            .splice(1, project.gallery_pictures.length)
                            .map((url) => (
                                <li className="noListStyle" key={url}>
                                    <img
                                        className="additionalImage"
                                        src={url}
                                    />
                                </li>
                            ))}
                    </ul>
                </>
            ) : null}
        </div>
    );
}
