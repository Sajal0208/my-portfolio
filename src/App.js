import styled from "styled-components";
import React, { useState, useEffect, Suspense } from "react";
import Sidebar from "./Components/Sidebar";
import { Route, Switch as Switching, Redirect } from "react-router";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";
import { IconButton } from "@material-ui/core";
import LoadingSpinner from "./Components/LoadingSpinner";

const AboutPage = React.lazy(() => import("../src/Pages/AboutPage"));
const ResumePage = React.lazy(() => import("../src/Pages/ResumePage"));
const ContactPage = React.lazy(() => import("../src/Pages/ContactPage"));
const PortfolioPage = React.lazy(() => import("../src/Pages/PortfolioPage"));
const BlogsPage = React.lazy(() => import("../src/Pages/BlogsPage"));
const HomePage = React.lazy(() => import('./Pages/HomePage'))

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };
  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switching>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/resume">
              <ResumePage />
            </Route>
            <Route exact path="/portfolios">
              <PortfolioPage />
            </Route>
            <Route exact path="/blogs">
              <BlogsPage />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
          </Switching>
        </Suspense>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
