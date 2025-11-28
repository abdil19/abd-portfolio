<div align="center">

# 🚀 ABD Portfolio

### Modern Cyberpunk Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**[🌐 Live Demo](https://abd-portfolio.vercel.app)** • **[📖 Documentation](#-features)** • **[🐛 Report Bug](https://github.com/abdil19/abd-portfolio/issues)** • **[✨ Request Feature](https://github.com/abdil19/abd-portfolio/issues)**

*A stunning single-page portfolio with cyberpunk glassmorphism design*

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎨 Design Philosophy](#-design-philosophy)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [⚙️ Configuration](#️-configuration)
- [🎯 Customization Guide](#-customization-guide)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Design & UI
- ✅ **Cyberpunk Glassmorphism** aesthetic
- ✅ **Dark Mode** optimized
- ✅ **Responsive Design** (Mobile, Tablet, Desktop)
- ✅ **Smooth Animations** with Framer Motion
- ✅ **Gradient Effects** & Neon Glows
- ✅ **Grid Pattern Overlay**

</td>
<td width="50%">

### ⚡ Performance
- ✅ **Next.js 15** App Router
- ✅ **TypeScript** for type safety
- ✅ **Optimized Images** with Next/Image
- ✅ **Fast Page Load** < 2s
- ✅ **SEO Optimized**
- ✅ **Lighthouse Ready**

</td>
</tr>
<tr>
<td width="50%">

### 🧩 Components
- ✅ **Sticky Navigation** with scroll effects
- ✅ **Hero Section** with CTA buttons
- ✅ **About Section** with skills showcase
- ✅ **Education Timeline**
- ✅ **Project Cards** with demo links
- ✅ **Experience Tabs** (Internship/Organization)
- ✅ **Contact Section** with social links

</td>
<td width="50%">

### 🔧 Developer Experience
- ✅ **TypeScript** strict mode
- ✅ **ESLint** configured
- ✅ **Component-based** architecture
- ✅ **Hot Module Replacement**
- ✅ **Git-friendly** structure
- ✅ **Easy customization**

</td>
</tr>
</table>

---

## 🎨 Design Philosophy

This portfolio embraces a **Cyberpunk Glassmorphism** aesthetic, combining:

- **Dark Background** (`#0a0a0a`) with subtle gradient overlays
- **Neon Color Palette**: Cyan (`#06b6d4`), Purple (`#d946ef`), Pink (`#ec4899`)
- **Glass Morphism**: Frosted glass effect with `backdrop-blur` and transparency
- **Grid Patterns**: Subtle cyan grid overlay for tech feel
- **Smooth Transitions**: 300ms duration for all interactive elements

### Color System

```css
Primary:   #06b6d4  /* Cyan - Links, accents */
Secondary: #d946ef  /* Purple - Gradients, highlights */
Accent:    #ec4899  /* Pink - CTAs, emphasis */
Background: #0a0a0a /* Deep black */
Text:      #ffffff  /* Pure white */
```

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
<br>Next.js
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=typescript" width="48" height="48" alt="TypeScript" />
<br>TypeScript
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
<br>Tailwind
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
<br>React 19
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
<br>Vercel
</td>
</tr>
</table>

### Core Dependencies

```json
{
  "next": "^15.1.4",
  "react": "^19.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^4.0.0",
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.469.0"
}
```

---

## 📦 Project Structure

```
abd-portfolio/
├── 📁 app/
│   ├── 📄 layout.tsx          # Root layout with fonts
│   ├── 📄 page.tsx            # Main page component
│   └── 📄 globals.css         # Global styles & utilities
├── 📁 components/
│   ├── 📄 Navbar.tsx          # Sticky navigation
│   ├── 📄 Hero.tsx            # Hero section
│   ├── 📄 About.tsx           # About & skills
│   ├── 📄 Education.tsx       # Education timeline
│   ├── 📄 Projects.tsx        # Project showcase
│   ├── 📄 Experience.tsx      # Work experience
│   └── 📄 Contact.tsx         # Contact & socials
├── 📁 public/
│   ├── 📁 logos/              # Organization logos
│   │   ├── bangkit.png
│   │   ├── himasifo.png
│   │   ├── ukki.png
│   │   ├── upn.png
│   │   └── khairunnas.png
│   ├── 📄 hero.jpg            # Profile photo
│   └── 📄 cv.pdf              # Resume/CV
├── 📄 vercel.json             # Vercel configuration
├── 📄 package.json            # Dependencies
├── 📄 tsconfig.json           # TypeScript config
└── 📄 README.md               # Documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.17.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0
- **Git** for version control

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/abdil19/abd-portfolio.git
cd abd-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Add your assets**

```bash
# Add your profile photo
public/hero.jpg

# Add your CV/Resume
public/cv.pdf

# Add organization logos
public/logos/bangkit.png
public/logos/himasifo.png
public/logos/ukki.png
public/logos/upn.png
public/logos/khairunnas.png
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
# or
yarn build
```

Test the production build locally:

```bash
npm start
# or
yarn start
```

---

## ⚙️ Configuration

### 1. Update Personal Information

Edit `components/Hero.tsx`:

```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-4">
  Hi, I&apos;m <span className="gradient-text">YourName</span>
</h1>
```

### 2. Update Social Links

Edit `components/Contact.tsx`:

```tsx
const socialLinks = [
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  // ... more links
];
```

### 3. Update Projects

Edit `components/Projects.tsx`:

```tsx
const projects = [
  {
    title: "Your Project Name",
    category: "Category",
    description: "Project description...",
    stack: ["Tech1", "Tech2", "Tech3"],
    sourceCode: "https://github.com/yourusername/repo",
    documentation: "https://your-demo-link.com",
  },
  // Add more projects...
];
```

### 4. Customize Colors

Edit `app/globals.css`:

```css
.gradient-text {
  background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 50%, #YOUR_COLOR3 100%);
}
```

---

## 🎯 Customization Guide

### Adding New Sections

1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Update navigation in `components/Navbar.tsx`

Example:

```tsx
// components/NewSection.tsx
"use client";

import { motion } from "framer-motion";

const NewSection = () => {
  return (
    <section id="new-section" className="min-h-screen flex items-center py-20">
      {/* Your content */}
    </section>
  );
};

export default NewSection;
```

### Changing Fonts

Edit `app/layout.tsx`:

```tsx
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
```

### Adding Animations

Use Framer Motion for custom animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Your content */}
</motion.div>
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/abdil19/abd-portfolio)

**Manual Deployment:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

### Custom Domain

In Vercel dashboard:
1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Configure DNS records

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Style

- Use **TypeScript** for all new files
- Follow **ESLint** rules
- Write **meaningful commit messages**

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 👨‍💻 Author

<div align="center">

### M. Sa'aduddin Abdillah Yusuf

**Information Systems Student | Data Mining Enthusiast**

[![GitHub](https://img.shields.io/badge/GitHub-abdil19-black?style=for-the-badge&logo=github)](https://github.com/abdil19)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abdillah_Yusuf-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/abdillah-yusuf/)
[![Email](https://img.shields.io/badge/Email-abdillahyusuf1911-red?style=for-the-badge&logo=gmail)](mailto:abdillahyusuf1911@gmail.com)

</div>

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/abdil19/abd-portfolio?style=social)
![GitHub Forks](https://img.shields.io/github/forks/abdil19/abd-portfolio?style=social)
![GitHub Issues](https://img.shields.io/github/issues/abdil19/abd-portfolio)
![GitHub Last Commit](https://img.shields.io/github/last-commit/abdil19/abd-portfolio)

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ and dedication by ABD**

[⬆ Back to Top](#-abd-portfolio)

</div>
