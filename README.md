# 🍎 Pomegranate House

> **Integrating gender equality worldwide through professional consultancy, philosophy, and in-depth research.**

A modern, elegant website for Pomegranate House - a global governance consultancy specializing in gender equality, research, and sustainable practices.

![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

### 🎨 **Premium UI/UX Design**
- Elegant, feminine aesthetic with pomegranate-inspired color palette
- Smooth animations and transitions using Framer Motion
- Fully responsive design across all devices
- Glassmorphism effects and modern design patterns

### 📄 **Core Pages**
- **Home** - Hero section with services overview and team showcase
- **About Us** - Interactive team bios with beautiful modal presentations
- **Services** - Comprehensive service offerings
- **Impact** - Showcasing global impact and achievements
- **Contact** - Professional contact form with business area selection
- **Hire Us** - Client enquiry form for consultancy services
- **Work With Us** - Career opportunities and application portal

### 🔒 **Legal & Compliance**
- Privacy & Cookie Policy
- Terms & Conditions (Equality & Sustainability Policies)
- GDPR-compliant data handling

### 🎯 **Key Highlights**
- **Team Showcase** - Pomegranate seed-inspired layout with expandable bios
- **Interactive Modals** - Beautiful, responsive team member profiles
- **Custom Forms** - Elegant dropdown menus and form validation
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Accessibility** - WCAG compliant design patterns

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **[Next.js 15.1.3](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI component library
- **[TailwindCSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework

### **Animation & Interactions**
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- Custom CSS animations for enhanced UX

### **Icons & Assets**
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon set
- **[Next/Image](https://nextjs.org/docs/api-reference/next/image)** - Optimized image loading

### **Fonts**
- **[Amiri](https://fonts.google.com/specimen/Amiri)** - Elegant serif font for headings
- **[Lato](https://fonts.google.com/specimen/Lato)** - Clean sans-serif for body text

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization

---

## 🎨 Design System

### **Color Palette**
```css
--color-primary: #75032c    /* Pomegranate Red */
--color-secondary: #c88e8e  /* Rose Gold */
--color-accent: #fdf6f0     /* Cream */
--color-muted: #a69494      /* Taupe */
--color-cream: #fdfcfb      /* Off-White */
```

### **Typography**
- **Headings**: Amiri (Serif) - Elegant and professional
- **Body**: Lato (Sans-serif) - Clean and readable

### **Design Principles**
- **Feminine Elegance** - Soft curves, rounded corners (2rem+)
- **Pomegranate Theme** - Seed-inspired layouts and visual metaphors
- **Professional Aesthetic** - Balanced, sophisticated, trustworthy
- **Accessibility First** - High contrast, readable fonts, semantic HTML

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pomegranate-house.git
   cd pomegranate-house
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
pomegranate/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About Us page
│   │   ├── contact/           # Contact form
│   │   ├── hire-us/           # Client enquiry
│   │   ├── impact/            # Impact showcase
│   │   ├── privacy/           # Privacy policy
│   │   ├── services/          # Services overview
│   │   ├── terms/             # Terms & conditions
│   │   ├── work-with-us/      # Career opportunities
│   │   ├── globals.css        # Global styles & design tokens
│   │   ├── layout.js          # Root layout with fonts
│   │   └── page.js            # Homepage
│   │
│   └── components/            # Reusable React components
│       ├── Footer.js          # Site footer with links
│       ├── Hero.js            # Homepage hero section
│       ├── Navbar.js          # Navigation bar
│       ├── Providers.js       # Context providers
│       └── Team.js            # Team showcase component
│
├── public/                    # Static assets
│   ├── logo.webp             # Logo
│   ├── pomhouse.png          # Hero image
│   └── [team-photos].webp   # Team member photos
│
├── .gitignore
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
├── postcss.config.mjs        # PostCSS config
├── tailwind.config.js        # Tailwind configuration
└── README.md                 # This file
```

---

## 🎯 Key Features Breakdown

### **Interactive Team Section**
- Pomegranate cross-section inspired layout
- Founder positioned as the "core"
- Specialists arranged as surrounding "seeds"
- Click-to-expand modal with full biographies
- Structured bio sections with subtitles
- Smooth scroll animations

### **Elegant Forms**
- Custom-styled dropdown menus with pomegranate-colored arrows
- Icon-enhanced input fields
- Real-time validation
- Responsive grid layouts
- Privacy notices and GDPR compliance

### **Responsive Navigation**
- Animated navbar with dropdown menus
- Mobile-friendly hamburger menu
- Smooth transitions and hover effects
- Consistent branding across all pages

### **Footer**
- Comprehensive site navigation
- Social media integration
- Contact information
- Legal policy links
- Newsletter signup (optional)

---

## 🌍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add any environment variables here
# NEXT_PUBLIC_API_URL=your_api_url
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Pomegranate House**
- **Founder**: Hana Mosavie
- **Economic Specialist**: Professor Adrian Kendry
- **Gender Specialist**: Vibeke Brask Thomsen
- **Consumer Goods Specialist**: Robert Hester
- **Health Specialist**: Dr. Aamenah Hawash

---

## 📧 Contact

**Pomegranate House**
- 📧 Email: info@pomegranatehouse.org
- 📍 Location: London, United Kingdom
- 🕐 Office Hours: Monday - Friday, 10AM - 6PM

---

## 🙏 Acknowledgments

- Design inspiration from modern gender equality organizations
- Pomegranate symbolism representing unity and diversity
- Community feedback and user testing

---

<div align="center">
  <p>Built with ❤️ by the Pomegranate House team</p>
  <p>© 2026 Pomegranate House. All rights reserved.</p>
</div>
