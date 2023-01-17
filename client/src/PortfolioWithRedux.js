import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Project from "./Project";
import { selectedProjectIdChanged } from "./portfolioSlice.js";
import {} from "react-redux";

export default function PortfolioWithRedux() {
    const [allProjects, setAllProjects] = useState([]);
    const [projectSelected, setProjectSelected] = useState(false);
    const dispatch = useDispatch();
    const projectId = useSelector((state) => state.selectedProjectId);

    useEffect(() => {
        console.log(projectId); //logs: undefined
        fetch("/api/allProjects")
            .then((response) => response.json())
            .then((data) => setAllProjects(data));
    }, []);

    function displayProjectInfo(projectId) {
        setProjectSelected(true);
        // console.log(projectId); WORKS!
        dispatch(selectedProjectIdChanged({ projectId }));
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
                        <img src={project.project_picture_url} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
