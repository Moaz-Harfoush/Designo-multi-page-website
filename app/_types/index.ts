// ==========================================
// 1. HEADER SECTION
// ==========================================

export interface NavLink {
  href: string;
  label: string;
}

// ==========================================
// 2. HOME PAGE SECTIONS
// ==========================================

export interface CustomLinkProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface CategoryCardProps {
  title: string;
  bgImage: string;
  href: string;
  isLarge?: boolean;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

// ==========================================
// 3. ABOUT PAGE SECTIONS
// ==========================================

export interface AboutCardProps {
  title: string;
  description: string[];
  imageSrc: string;
  imagePosition?: "left" | "right";
}

// ==========================================
// 4. LOCATIONS SECTIONS
// ==========================================

export interface OfficeData {
  id: string;
  country: string;
  officeName: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  email: string;
  mapImageSrc: string;
}

export interface LocationItem {
  id: number;
  name: string;
  image: string;
  illustration: string;
}

// ==========================================
// 5. CONTACT PAGE SECTIONS
// ==========================================

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// ==========================================
// 6. DYNAMIC CATEGORIES SECTIONS
// ==========================================

export interface CategoryHeader {
  title: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
}

export interface RemainingCategoryItem {
  title: string;
  bgImage: string;
  link: string;
}

export interface CategoryPageData {
  page_id: string;
  header: CategoryHeader;
  projects: ProjectItem[];
  remaining_categories: RemainingCategoryItem[];
}

export interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export interface ProjectsGridProps {
  projects: ProjectItem[];
}

export interface RemainingCategoriesSectionProps {
  title1: string;
  bgImage1: string;
  href1: string;
  title2: string;
  bgImage2: string;
  href2: string;
}

// ==========================================
// 7. FOOTER SECTION
// ==========================================

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

// ==========================================
// ADDITIONAL UTILITIES
// ==========================================

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}
