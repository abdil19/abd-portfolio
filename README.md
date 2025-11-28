# ABD Portfolio Website

A modern, cyberpunk-themed portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Cyberpunk Glassmorphism Design** - Dark mode with neon gradients and glass effects
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Built with Framer Motion for elegant transitions
- **Single Page Application** - Smooth scroll navigation between sections
- **Modern Tech Stack** - Next.js 15 App Router, TypeScript, Tailwind CSS

## 📋 Sections

1. **Hero** - Introduction with photo and CTA buttons
2. **About** - Detailed background and interests
3. **Education** - Academic qualifications
4. **Skills** - Technical and soft skills organized by category
5. **Projects** - Portfolio projects with source code and documentation links
6. **Experience** - Internships and organizational roles (tabbed interface)
7. **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Font:** Outfit (Google Fonts)

## 🎨 Design System

**Color Palette:**

- Background: `#0a0a0a`
- Primary (Cyan): `#06b6d4`
- Secondary (Purple): `#d946ef`
- Accent (Pink): `#ec4899`

**Effects:**

- Glassmorphism cards
- Neon gradients
- Smooth transitions

## 📦 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Setup Instructions

### 1. Add Your Photo

Place your profile photo as `public/hero.png` (recommended: 800x800px, circular crop looks best)

### 2. Add Your CV

Place your CV file as `public/cv.pdf` for the download button to work

### 3. Update Project Links

Edit `components/Projects.tsx` to replace placeholder GitHub links with your actual repositories:

- Customer Segmentation project
- Wheelify project
- SIPUD project
- Portfolio project

### 4. Customize Content

All content is in the respective component files under `/components`:

- Personal info: `Hero.tsx`, `About.tsx`
- Education: `Education.tsx`
- Skills: `Skills.tsx`
- Projects: `Projects.tsx`
- Experience: `Experience.tsx`
- Contact: `Contact.tsx`

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

```bash
vercel
```

### Other Platforms

Build the project and deploy:

```bash
npm run build
npm start
```

## 📱 Contact Form Integration

The contact form currently logs to console. To integrate with an email service:

1. **EmailJS:** Add EmailJS configuration in `Contact.tsx`
2. **Formspree:** Use Formspree action URL
3. **Custom API:** Create an API route in `app/api/contact`

## 🎯 Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: #06b6d4; /* Cyan */
  --secondary: #d946ef; /* Purple */
  --accent: #ec4899; /* Pink */
}
```

### Content

All content is hard-coded in component files for easy customization. Simply edit the TypeScript files in the `/components` directory.

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**M. Sa'aduddin Abdillah Yusuf**

- Email: abdillahyusuf1911@gmail.com
- GitHub: [@abd_abdil](https://github.com/abd_abdil)
- LinkedIn: [abdillah-yusuf](https://www.linkedin.com/in/abdillah-yusuf/)

---

Built with ❤️ using Next.js and Tailwind CSS
