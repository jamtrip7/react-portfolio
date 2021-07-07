// import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import "./App.css";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header/index"
import TopNavbar from "./components/TopNavBar/index";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Footer from "./components/Footer/index";
function App() {
  return (
    <div>
      <Header />
        <TopNavbar id="Top"/>
          <Container className="bg-transparent" fluid="md" fill="#FFFFFF">
            <Row>
              <Col>
              
                <About className="about" />
                <a href="#Top">Back To Top</a>
                <Portfolio className="portfolio" />
                <a href="#Top">Back To Top</a>
                <Resume className="resume" />
                <a href="#Top">Back To Top</a>
              </Col>
            </Row>
        </Container>
    </div>
  
  );
}

<Footer />

export default App;
