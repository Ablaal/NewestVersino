// Types for Ablaal Schools Website

export interface NavItem {
  label: string;
  labelSo: string;
  href: string;
  children?: NavItem[];
}

export interface HeroContent {
  title: string;
  titleSo: string;
  subtitle: string;
  subtitleSo: string;
  ctaPrimary: string;
  ctaPrimarySo: string;
  ctaSecondary: string;
  ctaSecondarySo: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  videoPoster?: string;
}

export interface WhyChooseCard {
  id: string;
  icon: string;
  title: string;
  titleSo: string;
  description: string;
  descriptionSo: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  nameSo: string;
  role: string;
  roleSo: string;
  quote: string;
  quoteSo: string;
  image: string;
}

export interface Branch {
  id: string;
  name: string;
  nameSo: string;
  district: string;
  districtSo: string;
  address: string;
  addressSo: string;
  phone: string;
  email: string;
  principal: {
    name: string;
    nameSo: string;
    image: string;
    video?: string;
  };
  vicePrincipal: {
    name: string;
    nameSo: string;
    image: string;
    video?: string;
  };
}

export interface StaffMember {
  id: string;
  name: string;
  nameSo: string;
  role: string;
  roleSo: string;
  branchId: string;
  yearsOfService: number;
  bio: string;
  bioSo: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  category: 'all' | 'students' | 'staff' | 'graduations' | 'campuses';
  caption: string;
  captionSo: string;
}

export interface NewsEvent {
  id: string;
  title: string;
  titleSo: string;
  excerpt: string;
  excerptSo: string;
  content: string;
  contentSo: string;
  category: 'news' | 'events' | 'announcements' | 'jobs';
  date: string;
  image: string;
  isActive?: boolean;
}

export interface JobPost {
  id: string;
  title: string;
  titleSo: string;
  location: string;
  locationSo: string;
  description: string;
  descriptionSo: string;
  requirements: string[];
  requirementsSo: string[];
  deadline: string;
  isActive: boolean;
  type: 'teacher' | 'principal' | 'staff';
}

export interface Leader {
  id: string;
  name: string;
  nameSo: string;
  title: string;
  titleSo: string;
  bio: string;
  bioSo: string;
  message?: string;
  messageSo?: string;
  image: string;
  isFounder?: boolean;
}

export interface CoreValue {
  id: string;
  icon: string;
  title: string;
  titleSo: string;
  description: string;
  descriptionSo: string;
}

export interface Facility {
  id: string;
  title: string;
  titleSo: string;
  description: string;
  descriptionSo: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  titleSo: string;
  description: string;
  descriptionSo: string;
  image: string;
}

export interface AcademicProgram {
  id: string;
  gradeRange: string;
  gradeRangeSo: string;
  subjects: string[];
  subjectsSo: string[];
  description: string;
  descriptionSo: string;
}

export interface FutureSkill {
  name: string;
  nameSo: string;
  description: string;
}

export interface FutureSkillsSection {
  title: string;
  titleSo: string;
  skills: FutureSkill[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  addressSo: string;
  mapEmbed?: string;
  hero: HeroContent;
}

export interface SiteContent {
  schoolName: string;
  schoolNameSo: string;
  tagline: string;
  taglineSo: string;
  logo: string;
  contact: ContactInfo;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  navigation: NavItem[];
  home: {
    hero: HeroContent;
    whyChoose: {
      title: string;
      titleSo: string;
      cards: WhyChooseCard[];
    };
    discover: {
      title: string;
      titleSo: string;
      subtitle: string;
      subtitleSo: string;
      description: string;
      descriptionSo: string;
      highlights: {
        icon: string;
        title: string;
        titleSo: string;
        description: string;
        descriptionSo: string;
      }[];
    };
    learningCulture: {
      title: string;
      titleSo: string;
      subtitle: string;
      subtitleSo: string;
      cards: {
        id: string;
        title: string;
        titleSo: string;
        description: string;
        descriptionSo: string;
        image: string;
      }[];
    };
    curriculum: {
      title: string;
      titleSo: string;
      subtitle: string;
      subtitleSo: string;
      description: string;
      descriptionSo: string;
    };
    testimonials: {
      title: string;
      titleSo: string;
      items: Testimonial[];
    };
    news: {
      title: string;
      titleSo: string;
      subtitle: string;
      subtitleSo: string;
    };
    finalCta: {
      title: string;
      titleSo: string;
      subtitle: string;
      subtitleSo: string;
      cta: string;
      ctaSo: string;
      backgroundImage: string;
    };
  };
  about: {
    leadership: {
      hero: HeroContent;
      founder: Leader;
      directors: Leader[];
      message: string;
      messageSo: string;
    };
    missionVision: {
      hero: HeroContent;
      whoWeAre: {
        title: string;
        titleSo: string;
        content: string;
        contentSo: string;
      };
      core: {
        title: string;
        titleSo: string;
        content: string;
        contentSo: string;
      };
      mission: {
        title: string;
        titleSo: string;
        content: string;
        contentSo: string;
      };
      vision: {
        title: string;
        titleSo: string;
        content: string;
        contentSo: string;
      };
      purpose: {
        title: string;
        titleSo: string;
        content: string;
        contentSo: string;
      };
    };
    coreValues: {
      hero: HeroContent;
      values: CoreValue[];
    };
  };
  services: {
    hero: HeroContent;
    intro: string;
    introSo: string;
    facilities: {
      title: string;
      titleSo: string;
      items: Facility[];
    };
    services: {
      title: string;
      titleSo: string;
      intro: string;
      introSo: string;
      items: Service[];
    };
  };
  academics: {
    primary: {
      hero: HeroContent;
      description: string;
      descriptionSo: string;
      images?: string[];
      programs: AcademicProgram[];
    };
    secondary: {
      hero: HeroContent;
      description: string;
      descriptionSo: string;
      images?: string[];
      programs: AcademicProgram[];
      futureSkills?: FutureSkillsSection;
    };
  };
  admissions: {
    hero: HeroContent;
    facts?: {
      title: string;
      titleSo: string;
      items: { label: string; labelSo: string; value: string }[];
    };
    requirements: {
      title: string;
      titleSo: string;
      items: string[];
      itemsSo: string[];
    };
    process: {
      title: string;
      titleSo: string;
      steps: {
        title: string;
        titleSo: string;
        description: string;
        descriptionSo: string;
      }[];
    };
    scholarships?: {
      title: string;
      titleSo: string;
      description: string;
      descriptionSo: string;
      image?: string;
    };
    fees: {
      title: string;
      titleSo: string;
      note: string;
      noteSo: string;
    };
  };
  branches: {
    hero: HeroContent;
    branches: Branch[];
  };
  gallery: {
    hero: HeroContent;
    images: GalleryImage[];
  };
  newsEvents: {
    hero: HeroContent;
    items: NewsEvent[];
    jobs: JobPost[];
  };
  community: {
    students: {
      hero: HeroContent;
      title: string;
      titleSo: string;
      subtitle: string;
      subtitleSo: string;
      voices: {
        name: string;
        nameSo: string;
        grade: string;
        gradeSo: string;
        age: number;
        quote: string;
        quoteSo: string;
        image: string;
      }[];
    };
    staff: {
      hero: HeroContent;
      title: string;
      titleSo: string;
      subtitle: string;
      subtitleSo: string;
    };
    alumni: {
      hero: HeroContent;
      title: string;
      titleSo: string;
      subtitle: string;
      subtitleSo: string;
      stories: {
        name: string;
        nameSo: string;
        graduationYear: number;
        currentRole: string;
        currentRoleSo: string;
        story: string;
        storySo: string;
        image: string;
      }[];
    };
  };
  staff: {
    hero: HeroContent;
    members: StaffMember[];
  };
}
