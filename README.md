# Ablaal Primary and Secondary Schools Website

A comprehensive, modern, and SEO-friendly school website for Ablaal Primary and Secondary Schools in Somalia.

## Features

- **Multi-page Website**: Home, About Us, Academics, Admissions, News & Events, Community, Contact
- **Bilingual Support**: English and Somali language support
- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Ready**: Meta tags, semantic HTML, and accessibility features
- **Video Hero**: YouTube video background with audio handling
- **Floating WhatsApp**: Quick contact button
- **Job Application System**: Teacher and Principal application forms
- **Gallery with Lightbox**: Filterable image gallery
- **Contact Form**: With validation and spam protection

## Tech Stack

- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Content Management

All editable content is stored in `/content/siteContent.json`. This includes:

- School information (name, tagline, contact details)
- Navigation structure
- Page content (hero sections, text, images)
- Testimonials
- Branch information
- Staff details
- Gallery images
- News and events
- Job postings

### How to Edit Content

1. Open `/content/siteContent.json`
2. Find the section you want to edit
3. Update the text (both English and Somali versions)
4. Save the file
5. The changes will be reflected on the website

### Content Structure

```json
{
  "schoolName": "Ablaal Primary and Secondary Schools",
  "schoolNameSo": "Dugsiyada Hoose iyo Dhexe ee Ablaal",
  "tagline": "Nurturing Excellence, Building Futures",
  "contact": {
    "phone": "+252 61 234 5678",
    "email": "sakarie.ablaal@gmail.com",
    "address": "Mogadishu, Somalia"
  },
  ...
}
```

## How to Change Hero Video

1. Open `/content/siteContent.json`
2. Find `home.hero.backgroundVideo`
3. Replace the YouTube embed URL with your own:
```json
"backgroundVideo": "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID"
```

## Audio Autoplay Behavior

The hero video attempts to autoplay with sound. Due to browser restrictions:
- Most browsers block autoplay with sound
- A "Tap to enable sound" button appears after 2 seconds
- Once clicked, audio plays and preference is saved to localStorage
- Users can also toggle mute using the button in the bottom right

## How to Add Branches

1. Open `/content/siteContent.json`
2. Find `branches.branches` array
3. Add a new branch object:
```json
{
  "id": "b6",
  "name": "Ablaal New Campus",
  "nameSo": "Xarunta Cusub ee Ablaal",
  "district": "New District",
  "districtSo": "Degmada Cusub",
  "address": "New Address, Mogadishu, Somalia",
  "addressSo": "Cinwaanka Cusub, Muqdisho, Soomaaliya",
  "phone": "+252 61 666 6666",
  "email": "new@ablaalschools.so",
  "principal": {
    "name": "Principal Name",
    "nameSo": "Magaca Madaxa",
    "image": "/images/principal-6.jpg"
  },
  "vicePrincipal": {
    "name": "Vice Principal Name",
    "nameSo": "Magaca Ku-xigeenka",
    "image": "/images/vp-6.jpg"
  }
}
```

## How to Add Staff

1. Open `/content/siteContent.json`
2. Find `staff.members` array
3. Add a new staff object:
```json
{
  "id": "s4",
  "name": "Staff Name",
  "nameSo": "Magaca Shaqaalaha",
  "role": "Teacher",
  "roleSo": "Macallin",
  "branchId": "b1",
  "yearsOfService": 10,
  "bio": "Brief biography",
  "bioSo": "Taariikhda gaagaaban",
  "image": "/images/staff-4.jpg"
}
```

## How to Add Gallery Images

1. Open `/content/siteContent.json`
2. Find `gallery.images` array
3. Add a new image object:
```json
{
  "id": "g7",
  "src": "/images/gallery-7.jpg",
  "category": "students",
  "caption": "Image description",
  "captionSo": "Sharaxadda sawirka"
}
```

Categories: `all`, `students`, `staff`, `graduations`, `campuses`

## How to Add a Job Posting

1. Open `/content/siteContent.json`
2. Find `newsEvents.jobs` array
3. Add a new job object:
```json
{
  "id": "j3",
  "title": "English Teacher",
  "titleSo": "Macallinka Ingiriiska",
  "location": "Hodan Campus",
  "locationSo": "Xarunta Hodan",
  "description": "Job description",
  "descriptionSo": "Sharaxadda shaqada",
  "requirements": ["Requirement 1", "Requirement 2"],
  "requirementsSo": ["Shuruudda 1", "Shuruudda 2"],
  "deadline": "2024-12-31",
  "isActive": true,
  "type": "teacher"
}
```

**Important**: 
- Set `isActive: true` to show the job on the website
- Set `isActive: false` to hide it
- Job type can be `teacher` or `principal`
- The Careers link in navigation only appears when there are active jobs

## Job Application Forms

The website includes two job application forms:
- `/jobs/teacher/apply` - For teaching positions
- `/jobs/principal/apply` - For principal positions

Applications are sent to: `sakarie.ablaal@gmail.com`

### Spam Protection

The forms include:
- Honeypot field (hidden field that bots fill out)
- Required field validation
- Consent checkbox

## Deployment

### Static Hosting

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider (Netlify, Vercel, GitHub Pages, etc.)

### Environment Variables

Create a `.env` file for environment-specific settings:
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=sakarie.ablaal@gmail.com
```

## File Structure

```
app/
├── content/
│   └── siteContent.json       # All editable content
├── public/
│   └── images/                # Static images
├── src/
│   ├── components/
│   │   └── ui-custom/         # Custom UI components
│   ├── data/
│   │   └── contentLoader.ts   # Content loader utility
│   ├── hooks/
│   │   ├── useLanguage.ts     # Language context
│   │   └── useScrollAnimation.ts
│   ├── pages/
│   │   ├── about/             # About pages
│   │   ├── academics/         # Academic pages
│   │   ├── admissions/        # Admissions pages
│   │   ├── community/         # Community pages
│   │   └── jobs/              # Job application pages
│   ├── types/
│   │   └── index.ts           # TypeScript types
│   ├── App.tsx                # Main app with routing
│   └── main.tsx               # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus styles
- Alt text for images
- Color contrast compliance

## License

All Rights Reserved (1988–2026) - Ablaal Primary and Secondary Schools

## Support

For technical support or questions, contact:
- Email: sakarie.ablaal@gmail.com
- Phone: +252 61 234 5678
