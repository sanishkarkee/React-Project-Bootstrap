import About from './Components/About';
import Footer from './Components/Footer';
import MyNavBar from './Components/MyNavBar';
import WhyMe from './Components/WhyMe';

function App() {
  return (
    <>
      <div className='App'>
        <MyNavBar />
        <About />
        <WhyMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
