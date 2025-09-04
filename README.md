# Harsha Interiors - Modern Interior Design Website

A modern, responsive, and animated frontend website for Harsha Interiors built with React.js, featuring stunning animations, dark/light mode, and a comprehensive portfolio showcase.

## 🌟 Features

### Design & Animation
- **Modern UI/UX**: Clean, professional design with luxury color palette
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: Implemented with Framer Motion and GSAP
- **Scroll Reveal Effects**: Fade-in, slide-in, and zoom-in animations
- **Interactive Elements**: Hover effects on cards, buttons, and images
- **Page Transitions**: Smooth transitions between routes

### Pages & Components
- **Home Page**: Hero slider, featured services, gallery preview, company highlights
- **Company Page**: About us, process timeline, achievements, locations
- **Services Page**: Detailed service offerings with animations
- **Products Page**: Categorized product showcase with filtering
- **Offers Page**: Current deals and promotional campaigns
- **Blog Page**: Design tips, trends, and company insights
- **Gallery Page**: Project portfolio with lightbox functionality
- **Contact Page**: Contact form, office locations, and direct contact options

### Technical Features
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Sticky Navigation**: Responsive navbar with smooth scroll effects
- **Image Lightbox**: Gallery images with zoom and navigation
- **Form Handling**: Contact forms with validation and feedback
- **SEO Optimized**: Semantic HTML structure and meta tags
- **Performance Optimized**: Lazy loading and optimized assets

## 🛠️ Technology Stack

- **Framework**: React.js 18+ with Vite
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion & GSAP
- **Routing**: React Router DOM
- **Sliders**: Swiper.js
- **Icons**: Heroicons & React Icons
- **Lightbox**: Yet Another React Lightbox
- **Build Tool**: Vite

## 🎨 Design System

### Color Palette
- **Primary (Luxury Gold)**: `#C6A972` - For accents and highlights
- **Secondary (Deep Charcoal)**: `#1E1E1E` - For backgrounds and text
- **Neutral (Off-White)**: `#F5F5F5` - For section backgrounds
- **Accent (Elegant Green)**: `#2F5D50` - For call-to-action areas
- **Highlight (Soft Beige)**: `#EDE1D1` - For warm sections

### Typography
- **Headings**: Playfair Display (serif, luxury feel)
- **Body Text**: Poppins (sans-serif, clean & modern)
- **Buttons**: Montserrat (bold, professional)

### Animation System
- **Page Transitions**: Fade-in with slide-up (0.6s duration)
- **Scroll Animations**: GSAP ScrollTrigger for reveal effects
- **Hover Effects**: Scale transforms with smooth transitions
- **Loading States**: Skeleton screens and smooth state changes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd harsha-interiors
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navbar.jsx     # Navigation with theme toggle
│   └── Footer.jsx     # Footer with contact info
├── pages/             # Page components
│   ├── Home.jsx       # Landing page with hero slider
│   ├── Company.jsx    # About us and company info
│   ├── Services.jsx   # Service offerings
│   ├── Products.jsx   # Product categories
│   ├── Offers.jsx     # Current deals
│   ├── Blogs.jsx      # Blog articles
│   ├── Gallery.jsx    # Project portfolio
│   └── Contact.jsx    # Contact form and info
├── context/           # React Context providers
│   └── ThemeContext.jsx # Dark/Light mode state
├── hooks/             # Custom React hooks
├── data/              # Static data and constants
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎯 Key Components

### Navigation (Navbar.jsx)
- Sticky navigation with scroll effects
- Dark/light mode toggle
- Responsive mobile menu
- Active page indicators

### Hero Slider (Home.jsx)
- Auto-playing image carousel
- Overlay content with CTAs
- Smooth GSAP animations
- Responsive image handling

### Gallery (Gallery.jsx)
- Masonry-style grid layout
- Category filtering
- Lightbox with navigation
- Hover effects with image scaling

### Contact Form (Contact.jsx)
- Form validation and submission
- Success/error feedback
- Direct contact options (WhatsApp, Phone)
- Office location listings

## 🎨 Customization

### Updating Colors
Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: '#C6A972',    // Luxury Gold
  secondary: '#1E1E1E',  // Deep Charcoal
  neutral: '#F5F5F5',    // Off-White
  accent: '#2F5D50',     // Elegant Green
  highlight: '#EDE1D1',  // Soft Beige
}
```

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `App.jsx`
3. Update navigation in `Navbar.jsx`

### Modifying Animations
- GSAP animations: Edit timeline configurations in page components
- Framer Motion: Update `initial`, `animate`, and `transition` props
- CSS animations: Modify keyframes in `tailwind.config.js`

## 📱 Responsive Design

- **Mobile First**: Designed for mobile and scaled up
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grids**: CSS Grid and Flexbox for layouts
- **Responsive Images**: Optimized for different screen sizes
- **Touch Friendly**: Hover states adapted for mobile

## 🔧 Performance Optimizations

- **Lazy Loading**: Images loaded as needed
- **Code Splitting**: Route-based code splitting
- **Optimized Images**: WebP format with fallbacks
- **Minimal Bundle**: Tree-shaking and minification
- **Efficient Animations**: Hardware-accelerated transforms

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Contact Integration

The website includes multiple contact methods:
- Contact form with email integration
- WhatsApp direct messaging
- Phone number click-to-call
- Office location with maps
- Social media links

## 🔮 Future Enhancements

- **CMS Integration**: Admin panel for content management
- **E-commerce**: Online product ordering
- **Blog System**: Dynamic blog with categories
- **Multi-language**: Support for multiple languages
- **3D Visualization**: Product configurator
- **Virtual Tours**: 360° room views

## 📄 License

This project is created for Harsha Interiors. All rights reserved.

## 🤝 Contributing

This is a client project. For any modifications or suggestions, please contact the development team.

---

**Harsha Interiors** - Transforming Spaces, Inspiring Lives

For technical support or questions about this website, please contact the development team.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
