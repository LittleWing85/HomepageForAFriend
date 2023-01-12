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
            <div>
                {allProjects.map((project) => (
                    <li className="noListStyle" key={project.id}>
                        <div className="box">
                            <div className="boxInner">
                                <img src={project.project_picture_url} />
                            </div>
                            <Link to={"/Projekt/" + project.id}>
                                <div className="portfolioProjectOverlay">
                                    <p className="portfolioProjectData">
                                        {project.project_name}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </li>
                ))}
            </div>
        </ul>
    );
}
