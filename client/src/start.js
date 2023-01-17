import ReactDOM from "react-dom";
import { NavLink, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Portfolio from "./Portfolio.js";
import Contact from "./Contact.js";
import ImprintAndDataProtection from "./ImprintAndDataProtection.js";
import PortfolioWithRedux from "./PortfolioWithRedux.js";

ReactDOM.render(
    <Provider store={store}>
        <MainLayout />
    </Provider>,
    document.querySelector("main")
);

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
                    <NavLink className="navEntry" to="/test" exact>
                        PORTFOLIO with redux
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
            <Route path="/test">
                <PortfolioWithRedux />
            </Route>
            <Route path="/Kontakt">
                <Contact />
            </Route>
            <Route path="/Impressum">
                <ImprintAndDataProtection />
            </Route>
        </BrowserRouter>
    );
}
