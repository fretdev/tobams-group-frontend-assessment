# Tobams Group - Frontend Assessment

A responsive static landing page built with Next.js (App Router) and Tailwind CSS, developed from the [Tobams Group Figma design](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0).

---

## Live Demo & Design Reference

- **Live URL:** [https://tobams-group-frontend-assessment.vercel.app/](https://tobams-group-frontend-assessment.vercel.app/)
- **Figma File:** [Tobams Group Design File](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation and Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tobams-group-frontend-assessment.git
   cd tobams-group-frontend-assessment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

- `npm run dev` - Starts the development server with Turbopack.
- `npm run build` - Creates an optimized production build.
- `npm run start` - Runs the production server locally.
- `npm run lint` - Runs ESLint checks.

---

## Project Structure

```
tobams-group-frontend-assessment/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Tailwind CSS v4 configuration and custom font definitions
│   ├── layout.tsx           # Root layout configuring Nunito and Nunito Sans
│   └── page.tsx             # Main landing page assembling all components
├── components/
│   ├── Navbar/              # Top notice bar, primary navigation, and category links
│   ├── Hero Section/        # Hero header with background image and call-to-action
│   ├── About Section/       # Company overview and key metrics
│   ├── Training Section/    # Program offerings and cards
│   ├── Consultant Section/  # Consultation highlights and booking preview
│   ├── LMS Section/         # LMS platform feature showcase
│   ├── Learning Section/    # Curriculum checklist and illustrations
│   ├── Booking Section/     # Interactive schedule and date selector UI
│   ├── Testimonials Section/# Testimonial card slider matching the design layout
│   ├── Get in touch Section/# Contact banner and CTA button
│   └── Footer/              # Multi-column footer with dynamic copyright year
├── public/
│   └── Images/              # Static assets and graphic illustrations
├── package.json
├── tsconfig.json
└── README.md
```

---

## Implementation Notes

- **Design Accuracy:** Follows the typography scale, letter spacing, font weights, and color palette (`#EF4353`, `#571244`, `#1F131C`, `#0A0308`, `#380D2C`, `#F9F9F9`) specified in Figma.
- **Responsive Layout:** Built with a mobile-first approach using standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`). Intermediate screen sizes between 768px and 1200px are handled with fluid grids to avoid horizontal overflow.
- **Mobile-First Footer:** On mobile viewports, Contact Information is positioned at the top of the footer with Registered Offices directly below, matching the mobile Figma specification before expanding into the multi-column desktop layout.
- **Image Optimization:** All raster and SVG images are handled through Next.js `next/image` with explicit dimensions and layout priorities to prevent layout shifts.
- **Pure Utility Styling:** Implemented strictly with Tailwind CSS utilities without inline `style` tags or external UI component libraries.
- **Dynamic Elements:** The copyright year in the footer dynamically renders the current year.

---

## AI Usage Disclosure

AI assistance was used during development for code review, responsive testing checks, and cross-referencing layout measurements against the Figma design. All components and styling were reviewed, adjusted, and tested directly to ensure adherence to requirements.
