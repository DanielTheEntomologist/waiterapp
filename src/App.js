import Header from "./components/Header/Header";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  console.log("App component is rendered");
  return (
    <div>
      <Navigation />
      <Container>
        <Header />
      </Container>
    </div>
  );
};

export default App;
