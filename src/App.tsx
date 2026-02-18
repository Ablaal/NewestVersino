import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/hooks/useLanguage';
import { Header, Footer, FloatingWhatsApp } from '@/components/ui-custom';

// Pages
import { Home } from '@/pages/Home';
import { Leadership } from '@/pages/about/Leadership';
import { MissionVision } from '@/pages/about/MissionVision';
import { CoreValues } from '@/pages/about/CoreValues';
import { Facilities } from '@/pages/about/Facilities';
import { Gallery } from '@/pages/about/Gallery';
import { Branches } from '@/pages/about/Branches';
import { Primary } from '@/pages/academics/Primary';
import { Secondary } from '@/pages/academics/Secondary';
import { AdmissionsInfo } from '@/pages/admissions/AdmissionsInfo';
import { Apply } from '@/pages/admissions/Apply';
import { Fees } from '@/pages/admissions/Fees';
import { ContactAdmissions } from '@/pages/admissions/ContactAdmissions';
import { NewsEvents } from '@/pages/NewsEvents';
import { Students } from '@/pages/community/Students';
import { Staff } from '@/pages/community/Staff';
import { Alumni } from '@/pages/community/Alumni';
import { Contact } from '@/pages/Contact';
import { BookTour } from '@/pages/BookTour';
import { JobApplication } from '@/pages/jobs/JobApplication';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* About */}
              <Route path="/about/leaders" element={<Leadership />} />
              <Route path="/about/mission-vision" element={<MissionVision />} />
              <Route path="/about/core-values" element={<CoreValues />} />
              <Route path="/about/facilities" element={<Facilities />} />
              <Route path="/about/gallery" element={<Gallery />} />
              <Route path="/about/branches" element={<Branches />} />

              {/* Academics */}
              <Route path="/academics/primary" element={<Primary />} />
              <Route path="/academics/secondary" element={<Secondary />} />

              {/* Admissions */}
              <Route path="/admissions/info" element={<AdmissionsInfo />} />
              <Route path="/admissions/process" element={<AdmissionsInfo />} />
              <Route path="/admissions/scholarships" element={<AdmissionsInfo />} />
              <Route path="/admissions/fees" element={<Fees />} />
              <Route path="/admissions/apply" element={<Apply />} />
              <Route path="/admissions/contact" element={<ContactAdmissions />} />

              {/* News & Events */}
              <Route path="/news-events" element={<NewsEvents />} />
              <Route path="/news-events/:id" element={<NewsEvents />} />

              {/* Community */}
              <Route path="/community/students" element={<Students />} />
              <Route path="/community/staff" element={<Staff />} />
              <Route path="/community/alumni" element={<Alumni />} />

              {/* Contact */}
              <Route path="/contact" element={<Contact />} />

              {/* Book Tour */}
              <Route path="/book-tour" element={<BookTour />} />

              {/* Job Applications */}
              <Route path="/jobs/apply" element={<JobApplication />} />
              <Route path="/careers/apply" element={<JobApplication />} />

              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
