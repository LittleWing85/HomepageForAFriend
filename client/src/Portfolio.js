import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        fetch("/api/allProjects")
            .then((response) => response.json())
            .then((data) => setAllProjects(data));
    }, []);

    return (
        <ul>
            <div className="portfolioGrid">
                {allProjects.map((project) => (
                    <li className="noListStyle" key={project.id}>
                        <Link to={"/Projekt/" + project.id}>
                            <div className="portfolioProjectOverlay">
                                <p className="portfolioProjectData">
                                    {project.project_name}
                                </p>
                            </div>
                        </Link>

                        <img
                            className="portfolioImage"
                            src={project.project_picture_url}
                        />
                    </li>
                ))}
            </div>
        </ul>
    );
}
