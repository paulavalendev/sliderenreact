import Header from './components/Header.jsx';
import ImageSlider from './components/imageSlider/index.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header title="Artificial Intelligence creating images" />
      <div className="layout">
        <main className="content">
          <ImageSlider />
          
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App

