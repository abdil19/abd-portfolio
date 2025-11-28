# Portfolio Component Structure

## 📁 File Organization

```
webportfolio/
├── app/
│   ├── layout.tsx          # Root layout with Outfit font & metadata
│   ├── page.tsx            # Main page assembling all components
│   └── globals.css         # Tailwind config & custom styles
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with photo & CTAs
│   ├── About.tsx           # About section with bio
│   ├── Education.tsx       # Education timeline
│   ├── Skills.tsx          # Skills grid (3 categories)
│   ├── Projects.tsx        # Project cards with links
│   ├── Experience.tsx      # Tabbed experience section
│   └── Contact.tsx         # Contact form & social links
└── public/
    ├── hero.png            # ⚠️ ADD YOUR PHOTO HERE
    └── cv.pdf              # ⚠️ ADD YOUR CV HERE
```

## 🎯 Component Details

### Navbar.tsx

- **Type:** Client Component ("use client")
- **Features:**
  - Sticky positioning with glass effect
  - Gradient "ABD" logo
  - Responsive hamburger menu
  - Smooth scroll navigation
- **Icons:** Menu, X (Lucide)

### Hero.tsx

- **Type:** Client Component
- **Layout:** Grid (text left, image right)
- **Features:**
  - Gradient text for name
  - Framer Motion animations
  - Two CTA buttons (Download CV, Contact)
  - Circular photo with neon glow
- **Icons:** Download, Mail (Lucide)

### About.tsx

- **Type:** Client Component
- **Layout:** Glassmorphism card with 2-column grid
- **Features:**
  - 4 info cards (Education, Location, Passion, Cloud)
  - Full-width bio section
  - Scroll-triggered animations
- **Icons:** GraduationCap, MapPin, Code, Cloud (Lucide)

### Education.tsx

- **Type:** Client Component
- **Data:** 2 education entries (University, High School)
- **Features:**
  - Timeline-style cards
  - GPA display
  - Period and description
- **Icons:** GraduationCap, Calendar, Award (Lucide)

### Skills.tsx

- **Type:** Client Component
- **Layout:** 3-column grid
- **Categories:**
  1. Tech Stack (7 skills)
  2. Data & Tools (6 skills)
  3. Soft Skills (5 skills)
- **Icons:** Code2, Database, Users (Lucide)

### Projects.tsx ⭐

- **Type:** Client Component
- **Layout:** 2-column grid of cards
- **Features:**
  - 4 project cards
  - Tech stack tags
  - **Critical:** 2 action buttons per card:
    - Source Code (GitHub icon)
    - Documentation (ExternalLink icon)
- **Icons:** Folder, Github, ExternalLink (Lucide)

### Experience.tsx

- **Type:** Client Component
- **Features:**
  - Tab switcher (Internship / Organization)
  - State management for active tab
  - Animated transitions
  - 1 internship, 2 organizations
- **Icons:** Briefcase, Users, Calendar, MapPin (Lucide)

### Contact.tsx

- **Type:** Client Component
- **Layout:** 2-column (form left, social right)
- **Features:**
  - Controlled form with state
  - 3 social links with icons
  - Footer with copyright
- **Icons:** Mail, Github, Linkedin, Send (Lucide)

## 🎨 Styling System

### Global Utilities (globals.css)

- `.glass` - Glassmorphism effect
- `.gradient-text` - Cyan/Purple/Pink gradient
- `.neon-glow` - Cyan box shadow

### Color Variables

```css
--primary: #06b6d4    (Cyan)
--secondary: #d946ef  (Purple)
--accent: #ec4899     (Pink)
```

### Tailwind Classes (Common Patterns)

- Cards: `glass rounded-2xl p-8`
- Buttons: `bg-gradient-to-r from-cyan-500 to-purple-600`
- Hover: `hover:border-cyan-500/50 transition-all duration-300`

## 🔧 Props & State

### Stateful Components

1. **Navbar** - `isOpen` (mobile menu state)
2. **Experience** - `activeTab` ("internship" | "organization")
3. **Contact** - `formData` (name, email, message)

### No Props

All components are self-contained with hardcoded data for easy customization.

## 📱 Responsive Breakpoints

- Mobile: < 768px (md breakpoint)
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Responsive Patterns

- Grid: `grid md:grid-cols-2` or `grid md:grid-cols-3`
- Text: `text-4xl md:text-5xl`
- Spacing: `px-4 sm:px-6 lg:px-8`

## ⚡ Performance Features

- **Next.js Image:** Used in Hero.tsx with `priority` flag
- **Code Splitting:** All components lazy-loaded automatically
- **Smooth Scroll:** Enabled in layout.tsx (`scroll-smooth`)
- **Viewport Once:** Framer Motion animations trigger once

## 🔗 Navigation Links

All sections use ID-based anchors:

- #home → Hero
- #about → About
- #education → Education
- #skills → Skills
- #projects → Projects
- #experience → Experience
- #contact → Contact

## 🎭 Animation Patterns

### Framer Motion (used in all sections)

```typescript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

### Staggered Animations

Cards use `delay: index * 0.1` or `delay: index * 0.2`

---

Quick Edit Checklist:

- [ ] Hero: Name, photo, bio
- [ ] About: Personal details
- [ ] Education: Schools & dates
- [ ] Skills: Add/remove skills
- [ ] Projects: Update all GitHub links ⚠️
- [ ] Experience: Update roles & dates
- [ ] Contact: Verify email & social links
