import Header from "./components/Header";
import Generator from "./components/Generator";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Generator />
      </main>

      <Footer />
    </div>
  );
}

export default App;