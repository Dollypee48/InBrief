import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { NewsProvider } from "./context/NewsContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <NewsProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </NewsProvider>
    </BrowserRouter>
  );
}

export default App;
