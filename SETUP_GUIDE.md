# Portfolio Setup Guide

## ⚠️ Important: Required Files

Before deploying or sharing your portfolio, you need to add these files:

### 1. Profile Photo (`public/hero.png`)

- **Location:** `public/hero.png`
- **Recommended specs:**
  - Size: 800x800px or 1000x1000px
  - Format: PNG or JPG
  - Style: Professional photo, preferably with transparent background or solid color
  - The component will display it in a circular frame with cyan glow

### 2. CV/Resume (`public/cv.pdf`)

- **Location:** `public/cv.pdf`
- **Format:** PDF
- **Note:** This is linked to the "Download CV" button on the Hero section

---

## 🔗 Update Your Links

### GitHub URLs (components/Projects.tsx)

Replace all placeholder GitHub links with your actual repositories:

```typescript
// Current placeholders:
sourceCode: "https://github.com/abd_abdil";
documentation: "https://github.com/abd_abdil";

// Update to your actual repos:
sourceCode: "https://github.com/YOUR_USERNAME/customer-segmentation";
documentation: "https://github.com/YOUR_USERNAME/customer-segmentation/blob/main/README.md";
```

### Social Media (components/Contact.tsx)

Verify these links are correct:

- Email: `abdillahyusuf1911@gmail.com`
- GitHub: `https://github.com/abd_abdil`
- LinkedIn: `https://www.linkedin.com/in/abdillah-yusuf/`

---

## 🎨 Customization Tips

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --primary: #06b6d4; /* Main accent color */
  --secondary: #d946ef; /* Secondary accent */
  --accent: #ec4899; /* Third accent */
}
```

### Add/Remove Skills

Edit `components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: "Tech Stack",
    skills: ["Python", "SQL", "PHP" /* Add more here */],
  },
  // Add more categories
];
```

### Update Projects

Edit `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    category: "Category",
    description: "Description",
    stack: ["Tech1", "Tech2"],
    sourceCode: "https://github.com/...",
    documentation: "https://...",
  },
];
```

### Modify Experience

Edit `components/Experience.tsx` to update internships and organizations.

---

## 📧 Contact Form Setup (Optional)

The contact form currently just logs to console. To make it functional:

### Option 1: EmailJS (Recommended - Free)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add to `components/Contact.tsx`:

```typescript
import emailjs from "@emailjs/browser";

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
    .then(
      () => alert("Message sent successfully!"),
      () => alert("Failed to send message.")
    );
};
```

### Option 2: Formspree (Free tier available)

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Custom API Route

Create `app/api/contact/route.ts`:

```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Send email using nodemailer, sendgrid, etc.
  return Response.json({ success: true });
}
```

---

## 🚀 Deployment Checklist

Before deploying:

- [ ] Add `public/hero.png` (your photo)
- [ ] Add `public/cv.pdf` (your resume)
- [ ] Update all GitHub project links in `Projects.tsx`
- [ ] Verify social media links in `Contact.tsx`
- [ ] Test the contact form (or set up email service)
- [ ] Update meta tags in `app/layout.tsx` if needed
- [ ] Test responsive design on mobile devices
- [ ] Check all sections display correctly

---

## 🐛 Troubleshooting

### Image not loading

- Make sure `hero.png` is in the `public` folder
- Try using different image formats (PNG, JPG, WEBP)
- Check image file permissions

### Fonts not loading

- The Outfit font loads from Google Fonts automatically
- If it doesn't load, check your internet connection

### Build errors

- Run `npm run build` to check for TypeScript errors
- Make sure all dependencies are installed: `npm install`

### Styling issues

- Clear `.next` cache: `rm -rf .next` (or `Remove-Item -Recurse .next` on Windows)
- Restart dev server: `npm run dev`

---

## 📝 Content Customization Guide

### Personal Information

**Files to edit:**

- `components/Hero.tsx` - Name, tagline, bio
- `components/About.tsx` - Detailed background
- `app/layout.tsx` - Page title and meta description

### Education

**File:** `components/Education.tsx`

- Add/remove education entries
- Update GPA, dates, descriptions

### Skills

**File:** `components/Skills.tsx`

- Modify skill categories
- Add/remove individual skills

### Projects

**File:** `components/Projects.tsx`

- Update project details
- Change tech stack tags
- Update GitHub/demo links

### Experience

**File:** `components/Experience.tsx`

- Update internships
- Update organizational roles
- Modify descriptions

---

## 💡 Enhancement Ideas

Want to add more features? Consider:

1. **Blog Section** - Add a blog using MDX
2. **Certificates** - Display certifications/achievements
3. **Testimonials** - Add client/colleague testimonials
4. **Dark/Light Mode Toggle** - Add theme switcher
5. **Analytics** - Add Google Analytics or Vercel Analytics
6. **SEO** - Add proper meta tags and Open Graph images
7. **Animations** - Enhance with more Framer Motion animations
8. **3D Elements** - Add Three.js or Spline 3D objects

---

Need help? Check the main README.md or create an issue on GitHub!
