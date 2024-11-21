import { Link } from 'react-router-dom';
import { FileText, Mail, PenTool } from 'lucide-react';
import { ThemeToggle } from '../theme/ThemeToggle';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-8 flex items-center space-x-2">
          <FileText className="h-6 w-6" />
          <span className="font-bold">ResumeBuilder</span>
        </Link>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/builder"
              className="flex items-center space-x-2 hover:text-primary"
            >
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </Link>
            <Link
              to="/cover-letter"
              className="flex items-center space-x-2 hover:text-primary"
            >
              <PenTool className="h-4 w-4" />
              <span>Cover Letter</span>
            </Link>
            <Link
              to="/email"
              className="flex items-center space-x-2 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </Link>
          </div>
          <div className="ml-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
