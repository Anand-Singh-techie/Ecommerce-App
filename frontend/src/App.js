import './App.css';
import {Container} from 'react-bootstrap';
import Footer from './components/footer';
import Header from './components/Header';
// import Navbaramazon from './components/Navbaramazon';

function App() {
  return (
    <>
    {/* <Navbaramazon/> */}
    <Header/>
    <main>
    <Container fluid>
      <h1>Ecommerce App</h1>
    </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
