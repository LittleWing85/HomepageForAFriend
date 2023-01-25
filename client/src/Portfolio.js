import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Project from "./Project.js";
import { selectedProjectIdChanged } from "./portfolioSlice.js";

export default function PortfolioWithRedux() {
    const [allProjects, setAllProjects] = useState([]);
    const [projectSelected, setProjectSelected] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("/api/allProjects")
            .then((response) => response.json())
            .then((data) => setAllProjects(data));
    }, []);

    function displayProjectInfo(projectId) {
        setProjectSelected(true);
        dispatch(selectedProjectIdChanged({ projectId }));
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div>
            {projectSelected && <Project />}
            <ul className="wrapper">
                {allProjects.map((project) => (
                    <li
                        className="noListStyle portfolioCard"
                        name={"Hello"}
                        key={project.id}
                        onClick={() => displayProjectInfo(project.id)}
                    >
                        <div className="portfolioProjectOverlay">
                            <p className="portfolioProjectData">
                                {project.project_name}
                            </p>
                        </div>
                        <img src={project.project_picture_url} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
