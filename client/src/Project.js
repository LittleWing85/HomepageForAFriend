import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch("/api/project/" + id)
            .then((response) => response.json())
            .then((data) => {
                setProject(data);
            });
    }, [id]);

    return (
        <div className="content">
            <h1>{project.project_name}</h1>
            <p>{project.about}</p>
            <p>{project.more_pictures}</p>
            <ul>
                {project.more_pictures.map((url) => (
                    <li key={url}>{url}</li>
                ))}
            </ul>
            <img src={project.project_picture_url} />
        </div>
    );
}
