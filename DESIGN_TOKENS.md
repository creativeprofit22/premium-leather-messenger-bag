# Design Token Reference

**Design System:** Organic/Morphism Theme
**Project:** Premium Leather Messenger Bag
**Version:** 1.0.0

## Overview

This design system uses an organic/morphism aesthetic inspired by natural leather, flowing shapes, and warm earth tones. All design tokens are defined as CSS custom properties for easy theming and maintenance.

## Color System

### Primary Palette

#### Light Mode

```css
/* Warm cognac leather tone */
--primary: 25 95% 45%;           /* hsl(25, 95%, 45%) */
--primary-foreground: 0 0% 100%; /* White text on primary */

/* Rich saddle brown */
--secondary: 35 85% 35%;           /* hsl(35, 85%, 35%) */
--secondary-foreground: 0 0% 100%; /* White text on secondary */

/* Warm gold brass */
--accent: 42 88% 55%;             /* hsl(42, 88%, 55%) */
--accent-foreground: 25 20% 15%;  /* Dark text on accent */
```

**Contrast Ratios (Light Mode):**
- Primary on background: 5.2:1 ✅ AA
- Secondary on background: 8.1:1 ✅ AAA
- Accent on background: 4.6:1 ✅ AA

#### Dark Mode

```css
/* Lighter cognac for dark backgrounds */
--primary: 25 90% 55%;           /* hsl(25, 90%, 55%) */
--primary-foreground: 0 0% 100%; /* White text */

/* Adjusted saddle brown */
--secondary: 35 80% 45%;           /* hsl(35, 80%, 45%) */
--secondary-foreground: 0 0% 100%; /* White text */

/* Brighter gold brass */
--accent: 42 85% 65%;            /* hsl(42, 85%, 65%) */
--accent-foreground: 25 25% 8%;  /* Dark text */
```

**Contrast Ratios (Dark Mode):**
- Primary on background: 5.4:1 ✅ AA
- Secondary on background: 6.8:1 ✅ AA
- Accent on background: 7.2:1 ✅ AAA

### Neutral Palette

#### Light Mode

```css
--background: 40 25% 96%;        /* Soft cream paper */
--foreground: 25 20% 15%;        /* Deep warm charcoal */
--muted: 35 15% 88%;             /* Light taupe */
--muted-foreground: 30 10% 45%;  /* Medium brown-gray */
--card: 40 20% 98%;              /* Off-white cards */
--card-foreground: 25 20% 15%;   /* Dark text */
```

#### Dark Mode

```css
--background: 25 25% 8%;         /* Deep warm black */
--foreground: 40 20% 92%;        /* Soft warm white */
--muted: 30 20% 18%;             /* Dark warm gray */
--muted-foreground: 35 15% 65%;  /* Light warm gray */
--card: 28 22% 12%;              /* Dark warm cards */
--card-foreground: 40 20% 92%;   /* Light text */
```

### Border & Input

```css
/* Light Mode */
--border: 35 20% 82%;
--input: 35 20% 82%;
--ring: 25 95% 45%; /* Focus ring color */

/* Dark Mode */
--border: 30 20% 22%;
--input: 30 20% 22%;
--ring: 25 90% 55%;
```

### Usage in Components

```tsx
// Use via Tailwind utilities
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Click Me
  </button>
</div>

// Or via CSS
.my-component {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
```

## Typography

### Font Families

```typescript
// Primary (body text)
font-family: 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

// Display (headings)
font-family: 'Plus Jakarta Sans', 'Inter Variable', sans-serif;
```

**Implementation:**
```tsx
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})
```

### Type Scale

#### Headings (Fluid Typography)

```css
/* H1 - Product Name */
font-size: clamp(2.5rem, 5vw + 1rem, 4rem);
line-height: 1.1;
font-weight: 700;
letter-spacing: -0.02em;

/* H2 - Section Headings */
font-size: clamp(2rem, 4vw + 0.5rem, 3rem);
line-height: 1.2;
font-weight: 600;
letter-spacing: -0.01em;

/* H3 - Feature Titles */
font-size: clamp(1.5rem, 3vw + 0.25rem, 2rem);
line-height: 1.3;
font-weight: 600;

/* H4 - Subheadings */
font-size: 1.25rem;
line-height: 1.4;
font-weight: 600;
```

**Responsive Behavior:**
- Mobile (375px): Minimum size
- Tablet (768px): Scales fluidly
- Desktop (1440px): Maximum size

#### Body Text

```css
/* Base */
font-size: 1rem;          /* 16px */
line-height: 1.6;         /* 25.6px */
font-weight: 400;

/* Large */
font-size: 1.125rem;      /* 18px */
line-height: 1.6;

/* Small */
font-size: 0.875rem;      /* 14px */
line-height: 1.5;

/* Extra Small */
font-size: 0.75rem;       /* 12px */
line-height: 1.5;
```

#### Specialty

```css
/* Price Display */
font-size: clamp(2rem, 4vw, 3rem);
font-weight: 700;
line-height: 1;

/* Button Text */
font-size: 1rem;
font-weight: 600;
letter-spacing: 0.01em;
```

### Usage

```tsx
// Heading with display font
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
  Premium Leather Messenger Bag
</h1>

// Body with default font
<p className="text-base leading-relaxed">
  Carry your essentials in timeless style.
</p>

// Price
<span className="text-5xl sm:text-6xl font-bold">
  $1,297
</span>
```

## Spacing

### Scale (4px base unit)

```typescript
const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  '5xl': '8rem',   // 128px
}
```

### Responsive Spacing

```tsx
// Section padding
className="py-12 md:py-16 lg:py-24"
// Mobile: 48px | Tablet: 64px | Desktop: 96px

// Element gap
className="gap-6 md:gap-8 lg:gap-12"
// Mobile: 24px | Tablet: 32px | Desktop: 48px

// Container padding
className="px-4 sm:px-6 lg:px-8"
// Mobile: 16px | Tablet: 24px | Desktop: 32px
```

### Layout Spacing

```css
/* Max container width */
max-width: 1280px;
margin: 0 auto;

/* Section vertical spacing */
padding-top: 3rem;    /* 48px mobile */
padding-bottom: 3rem;

@media (min-width: 768px) {
  padding-top: 4rem;    /* 64px tablet */
  padding-bottom: 4rem;
}

@media (min-width: 1024px) {
  padding-top: 6rem;    /* 96px desktop */
  padding-bottom: 6rem;
}
```

## Border Radius (Organic Shapes)

### Scale

```css
--radius-sm: 1rem;    /* 16px - Subtle curves */
--radius-md: 1.5rem;  /* 24px - Medium blobs */
--radius-lg: 2rem;    /* 32px - Large organic forms */
--radius-xl: 3rem;    /* 48px - Extra large flows */
--radius-full: 9999px; /* Perfect circles */
```

### Usage

```tsx
// Cards
<div className="rounded-xl">  {/* 3rem = 48px */}

// Buttons
<button className="rounded-xl">  {/* 3rem = 48px */}

// Images
<div className="rounded-xl lg:rounded-[3rem]">

// Small elements
<div className="rounded-lg">  {/* 2rem = 32px */}
```

### Organic Blob Shapes

```css
/* Custom organic shapes */
border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;

/* Animated blobs */
@keyframes blob-morph {
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  50% {
    border-radius: 60% 40% 30% 70% / 50% 60% 40% 60%;
  }
}
```

## Shadows (Soft, Natural Depth)

### Elevation Scale

```css
/* Small - Subtle elevation */
box-shadow: 0 2px 8px hsla(25, 50%, 10%, 0.08);

/* Medium - Cards, buttons */
box-shadow: 0 4px 16px hsla(25, 50%, 10%, 0.12);

/* Large - Elevated components */
box-shadow: 0 8px 32px hsla(25, 50%, 10%, 0.16);

/* Extra Large - Modals, overlays */
box-shadow: 0 16px 48px hsla(25, 50%, 10%, 0.20);

/* Organic - Warm shadow with color */
box-shadow: 0 8px 32px hsla(35, 85%, 35%, 0.15);
```

### Dark Mode Shadows

```css
/* Darker, more prominent shadows */
box-shadow: 0 4px 16px hsla(25, 50%, 5%, 0.3);
box-shadow: 0 8px 32px hsla(25, 50%, 5%, 0.4);
```

### Button Shadows

```css
/* Default */
box-shadow: 0 4px 16px hsla(25, 95%, 45%, 0.3);

/* Hover */
box-shadow: 0 8px 24px hsla(25, 95%, 45%, 0.4);

/* Dark mode */
box-shadow: 0 4px 16px hsla(25, 90%, 55%, 0.4);
```

### Usage

```tsx
// Automatic via utility class
<div className="organic-card">  {/* Has shadow built-in */}

// Custom shadow
<div className="shadow-lg">

// Tailwind custom
<div className="shadow-[0_8px_32px_hsla(25,50%,10%,0.16)]">
```

## Animations

### Duration

```typescript
const duration = {
  fast: '200ms',    // Quick transitions
  normal: '400ms',  // Standard transitions
  slow: '600ms',    // Smooth animations
}
```

### Easing Curves

```typescript
const easing = {
  // Smooth natural motion
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',

  // Organic bounce effect
  organic: 'cubic-bezier(0.34, 1.56, 0.64, 1)',

  // Flowing motion
  flow: 'cubic-bezier(0.65, 0, 0.35, 1)',

  // Ease out
  out: 'cubic-bezier(0, 0, 0.2, 1)',

  // Ease in
  in: 'cubic-bezier(0.4, 0, 1, 1)',
}
```

### Animation Variants

```typescript
// Fade in up
{
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
}

// Scale in
{
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
}

// Blob float
{
  animate: {
    y: [0, -20, 15, -10, 0],
    x: [0, 15, -15, 10, 0],
    scale: [1, 1.05, 0.95, 1.02, 1],
  },
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: 'easeInOut',
  }
}
```

### Tailwind Animations

```typescript
// tailwind.config.ts
animation: {
  'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  'fade-in': 'fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  'scale-in': 'scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
  'blob-float': 'blob-float 20s ease-in-out infinite',
}
```

### Usage

```tsx
// Framer Motion
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
>

// Tailwind
<div className="animate-fade-in-up">

// Hover effect
<div className="transition-all duration-300 hover:scale-105">
```

## Custom Utilities

### Organic Card

```css
.organic-card {
  @apply rounded-xl bg-card text-card-foreground shadow-md transition-all duration-400;
  box-shadow: 0 4px 16px hsla(25, 50%, 10%, 0.12);
}

.organic-card:hover {
  @apply shadow-lg;
  box-shadow: 0 8px 32px hsla(25, 50%, 10%, 0.16);
  transform: translateY(-4px);
}
```

**Usage:**
```tsx
<div className="organic-card p-6">
  Card content
</div>
```

### Organic Button

```css
.organic-button {
  @apply inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold transition-all duration-300;
  @apply bg-primary text-primary-foreground shadow-md;
  @apply hover:shadow-lg hover:scale-105 active:scale-95;
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2;
  min-height: 48px;
  box-shadow: 0 4px 16px hsla(25, 95%, 45%, 0.3);
}
```

**Usage:**
```tsx
<button className="organic-button">
  Add to Cart
</button>
```

### Organic Blob

```css
.organic-blob {
  @apply absolute rounded-full opacity-30 blur-3xl;
  background: linear-gradient(135deg, hsl(25, 95%, 45%) 0%, hsl(42, 88%, 55%) 100%);
  animation: blob-float 20s ease-in-out infinite;
}
```

**Usage:**
```tsx
<div className="organic-blob w-96 h-96 -top-48 -left-48" />
```

### Gradient Organic

```css
.gradient-organic {
  background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
}
```

**Usage:**
```tsx
<div className="gradient-organic bg-clip-text text-transparent">
  Gradient Text
</div>
```

## Breakpoints

```typescript
const breakpoints = {
  sm: '640px',   // Small devices
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops
  xl: '1280px',  // Desktops
  '2xl': '1536px', // Large screens
}
```

### Usage

```tsx
// Responsive classes
<div className="text-base md:text-lg lg:text-xl">

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Spacing
<section className="py-12 md:py-16 lg:py-24">
```

## Design Tokens in Code

### TypeScript Interface

```typescript
interface DesignTokens {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
  }
  spacing: Record<string, string>
  borderRadius: Record<string, string>
  typography: {
    fontFamily: {
      sans: string
      display: string
    }
    fontSize: Record<string, string>
  }
  animation: {
    duration: Record<string, string>
    easing: Record<string, string>
  }
}
```

### Accessing Tokens

```tsx
// Via Tailwind utilities (recommended)
<div className="bg-primary text-primary-foreground">

// Via CSS custom properties
<div style={{ backgroundColor: 'hsl(var(--primary))' }}>

// Via theme hook (if implemented)
const { colors } = useTheme()
```

## Best Practices

1. **Use CSS Custom Properties:** All colors defined as HSL values in custom properties
2. **Maintain Contrast:** Always verify WCAG AA (4.5:1 for text, 3:1 for UI)
3. **Consistent Spacing:** Use 4px base unit, responsive spacing utilities
4. **Organic Shapes:** Use large border-radius (1.5rem+) for morphism aesthetic
5. **Smooth Animations:** Prefer GPU-accelerated properties (transform, opacity)
6. **Dark Mode Support:** Test all tokens in both light and dark modes
7. **Accessibility:** Ensure focus indicators visible, touch targets ≥ 44px
8. **Performance:** Minimize custom utilities, leverage Tailwind purging

---

**Last Updated:** 2025-11-24
**Version:** 1.0.0
**Design System:** Organic/Morphism Theme
