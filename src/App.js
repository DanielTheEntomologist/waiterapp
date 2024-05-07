import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Navbar from "react-bootstrap/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Header />
      </Container>
    </div>
  );
};

export default App;
