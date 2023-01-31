import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Project from "../Project.js";
import { selectedProjectIdChanged, showProjectChanged } from "./portfolioSlice";

export default function PortfolioWithRedux() {
    const dispatch = useDispatch();
    const [allProjects, setAllProjects] = useState([]);
    const showProject = useSelector((state) => state.portfolio.showProject);

    useEffect(() => {
        fetch("/api/allProjects")
            .then((response) => response.json())
            .then((data) => setAllProjects(data));
    }, []);

    function displayProjectInfo(projectId) {
        dispatch(showProjectChanged(true));
        dispatch(selectedProjectIdChanged({ projectId }));
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div>
            {showProject && <Project />}
            <ul className="wrapper">
                {allProjects.map((project) => (
                    <li
                        className="noListStyle portfolioCard"
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
