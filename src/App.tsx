import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Home from '@/pages/Home';
import { ResumeBuilder } from '@/components/builder/ResumeBuilder';
import { CoverLetter } from '@/components/cover-letter/CoverLetter';
import { EmailGenerator } from '@/components/email/EmailGenerator';
import { AIChatBot } from '@/components/chat/AIChatBot';

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/builder" element={<ResumeBuilder />} />
              <Route path="/cover-letter" element={<CoverLetter />} />
              <Route path="/email" element={<EmailGenerator />} />
            </Routes>
          </main>
          <Footer />
          <AIChatBot />
          <Toaster position="top-right" />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;