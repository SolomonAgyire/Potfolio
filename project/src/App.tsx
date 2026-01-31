import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Navigation />
      <main className="flex-grow pt-16">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
