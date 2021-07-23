import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import { Route, Switch } from "react-router";
import AboutPage from '../src/Pages/AboutPage'
import ResumePage from '../src/Pages/ResumePage'
import BlogsPage from '../src/Pages/BlogsPage'
import ContactPage from '../src/Pages/ContactPage'
import PortfolioPage from '../src/Pages/PortfolioPage'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Switch>
          <Route path = '/home'>
            <HomePage/>
          </Route>
          <Route path = '/about'>
            <AboutPage/>
          </Route>
          <Route path = '/resume'>
            <ResumePage/>
          </Route>
          <Route path = '/portfolio'>
            <PortfolioPage/>
          </Route>
          <Route path = '/blogs'>
            <BlogsPage/>
          </Route>
          <Route path = '/contact'>
            <ContactPage/>
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines {

    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    z-index: -10;
    justify-content: space-evenly;
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
