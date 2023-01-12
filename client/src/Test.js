import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Test() {
    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        fetch("/api/allProjects")
            .then((response) => response.json())
            .then((data) => setAllProjects(data));
    }, []);

    return (
        <div className="row">
            <div className="column">
                <img src="/media/Andere1.JPG" style={{ width: 100 + "%" }} />
                <img
                    src="/media/Eichhörnchen5.jpg"
                    style={{ width: 100 + "%" }}
                />
                <img src="/media/Waschbär1.JPG" style={{ width: 100 + "%" }} />
                <img
                    src="/media/Eichhörnchen1.JPG"
                    style={{ width: 100 + "%" }}
                />
                <img src="/media/Andere2.JPG" style={{ width: 100 + "%" }} />
                <img
                    src="/media/Eichhörnchen2.JPG"
                    style={{ width: 100 + "%" }}
                />
                <img
                    src="/media/Eichhörnchen3.JPG"
                    style={{ width: 100 + "%" }}
                />
            </div>
            <div className="column">
                <img
                    src="/media/Eichhörnchen5.jpg"
                    style={{ width: 100 + "%" }}
                />
                <img src="/media/Waschbär1.JPG" style={{ width: 100 + "%" }} />
                <img
                    src="/media/Eichhörnchen1.JPG"
                    style={{ width: 100 + "%" }}
                />
                <img src="/media/Andere2.JPG" style={{ width: 100 + "%" }} />
                <img
                    src="/media/Eichhörnchen2.JPG"
                    style={{ width: 100 + "%" }}
                />
                <img
                    src="/media/Eichhörnchen3.JPG"
                    style={{ width: 100 + "%" }}
                />
                <img src="/media/Andere1.JPG" style={{ width: 100 + "%" }} />
            </div>
            <div className="column">
                <img src="/media/Waschbär1.JPG" style={{ width: 100 + "%" }} />
                <img
                    src="/media/Eichhörnchen1.JPG"
                    style={{ width: 100 + "%" }}
                />
                <img src="/media/Andere2.JPG" style={{ width: 100 + "%" }} />
                <img
                    src="/media/Eichhörnchen2.JPG"
                    style={{ width: 100 + "%" }}
                />
                <img
                    src="/media/Eichhörnchen3.JPG"
                    style={{ width: 100 + "%" }}
                />
                <img src="/media/Andere1.JPG" style={{ width: 100 + "%" }} />
                <img
                    src="/media/Eichhörnchen5.jpg"
                    style={{ width: 100 + "%" }}
                />
            </div>
        </div>
    );
}
