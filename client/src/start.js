import ReactDOM from "react-dom";
import { NavLink, Route, BrowserRouter } from "react-router-dom";
import Portfolio from "./Portfolio.js";
import Contact from "./Contact.js";
import ImprintAndDataProtection from "./ImprintAndDataProtection.js";
import Test from "./Test.js";
import Project from "./Project.js";

ReactDOM.render(<MainLayout />, document.querySelector("main"));

function MainLayout() {
    return (
        <BrowserRouter>
            <header className="flexHeaderElements">
                <NavLink to="/" exact>
                    <img className="logo" src="/media/Eichhörnchen4.JPG"></img>
                </NavLink>
                <nav className="flexWrapHorizontally">
                    <NavLink className="navEntry" to="/" exact>
                        PORTFOLIO
                    </NavLink>
                    <NavLink className="navEntry" to="/Test">
                        EXPERIMENT FOR PORTFOLIO
                    </NavLink>
                    <NavLink className="navEntry" to="/Kontakt">
                        KONTAKT
                    </NavLink>
                    <NavLink className="navEntry" to="/Impressum">
                        IMPRESSUM & DATENSCHUTZ
                    </NavLink>
                </nav>
            </header>

            <Route path="/" exact>
                <Portfolio />
            </Route>
            <Route path="/Test">
                <Test />
            </Route>
            <Route path="/Kontakt">
                <Contact />
            </Route>
            <Route path="/Impressum">
                <ImprintAndDataProtection />
            </Route>
            <Route path="/Projekt/:id">
                <Project />
            </Route>
        </BrowserRouter>
    );
}
