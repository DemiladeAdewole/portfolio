import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext';
import Navigation from './components/section/Navigation';
import About from './components/section/About';
import './App.css';

const Contact = lazy(() => import('./pages/Contact'));
const Experience = lazy(() => import('./components/section/Experience'));
const Skills = lazy(() => import('./components/section/Skills'));
const Footer = lazy(() => import('./components/Footer'));

function HomePage() {
  return (
    <>
      <About />
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <Skills />
      </Suspense>
    </>
  );
}

function AppContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Navigation />
      <div className="app transition-colors duration-300" style={{ backgroundColor: isDarkMode ? '#101727' : undefined }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <main id="main-content" className="main-content">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;
