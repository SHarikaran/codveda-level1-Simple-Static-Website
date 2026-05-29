# 📸 LensCraft Studio - Professional Photography Website

A premium, modern, and highly responsive static website for a professional photography studio. Designed with custom dark-mode aesthetics, elegant typography, fluid micro-interactions, and detailed layouts to showcase photography services, portfolio gallery, pricing plans, and client bookings.

Developed as part of the **Codveda Internship Level 1 - Task 1**.

---

## 🌟 Live Demo / Repository
- **GitHub Repository**: [codveda-level1-Simple-Static-Website](https://github.com/SHarikaran/codveda-level1-Simple-Static-Website)

---

## 🚀 Key Features

* **Elegant Modern UI**: Built with a dark mode glassmorphism concept, custom linear gradients, fluid animations, and Google Fonts (Outfit).
* **Multi-Page Experience**:
  * **Home (`index.html`)**: Features an engaging hero section, statistical counters (Happy Clients, Photos Captured, Years of Experience, Awards Won), interactive testimonials carousel, and highlighted showcase.
  * **Gallery (`gallery.html`)**: Features a categorized grid layout (All, Portraits, Weddings, Fashion, Events) with active filter buttons, beautiful hover overlay, and a fully functional full-screen lightbox modal for viewing images.
  * **Services (`services.html`)**: Displays pricing packages (Basic Portrait, Wedding Premium, Event Silver, Commercial Gold) with feature checklists, comparison charts, FAQs accordion, and a booking shortcut.
  * **Contact & Booking (`contact.html`)**: Integrates an advanced interactive booking/contact form, complete with dynamic real-time field validation (Email, Phone, Date), booking type options, and custom success popups.
* **Fully Responsive & Accessible**: Crafted using semantic HTML5 elements, CSS Flexbox, and Grid to ensure pixel-perfect rendering across mobile, tablet, and desktop viewports. Accessible menu controls with hamburger icon and drawer drawer.
* **Animated Micro-interactions**: Hover effects, statistical counter counters that count up on page scroll, and fade-in reveal animations using custom vanilla JavaScript.

---

## 📁 Project Structure

```bash
L01.Task1/
│
├── index.html          # Main landing/home page
├── gallery.html        # Interactive photo portfolio with category filtering
├── services.html       # Packages, pricing tiers, and FAQ accordion
├── contact.html        # Booking form with client-side validation
│
├── css/
│   ├── style.css       # Core design tokens, global resets, utility classes, and footer/nav styles
│   ├── home.css        # Specific styling for the landing page hero, stats, and testimonials
│   ├── gallery.css     # Gallery grid layout, category tabs, and lightbox styles
│   ├── services.css    # Service packages, pricing grids, and FAQ interactive panels
│   └── contact.css     # Form layouts, validation states, and booking success modal
│
├── js/
│   ├── main.js         # Navigation controls, scroll indicators, and stats counter animation
│   ├── gallery.js      # Portfolio category filtering logic and modal lightbox viewer
│   └── contact.js      # Contact/booking form validator and interactive success handling
│
└── images/
    ├── hero_bg.png     # Hero section high-res background graphic
    ├── wedding.png     # Custom high-quality placeholder asset
    └── fashion.png     # Custom high-quality placeholder asset
```

---

## 🛠️ Technology Stack

* **Structure**: HTML5 (Semantic elements, Aria roles)
* **Styling**: Vanilla CSS3 (Custom properties/variables, Flexbox, Grid, keyframe animations)
* **Logic/Interactions**: Vanilla JavaScript (ES6+, DOM Manipulation, Event Listeners)
* **Icons**: [Font Awesome v6.4.0](https://fontawesome.com/)
* **Typography**: [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit)

---

## 💻 Local Setup and Development

Since this project consists of standard, client-side static web pages, there are no dependencies or server-side build tools required.

### Option 1: Direct File System
Double-click `index.html` from your file explorer to open the project directly inside your web browser.

### Option 2: Local HTTP Server (Recommended)
To ensure all assets load reliably and without browser path restriction policies, spin up a local server.

If you have Node.js and `npm` installed, you can use:
```bash
# Serve the directory locally
npx serve .
```
Or if you are using VS Code, use the **Live Server** extension to launch with a single click.

---

## ✍️ Author & Credits

* **Designed & Developed by**: [Sivakumar Harikaran](https://github.com/SHarikaran)
* **Task Description**: Codveda Level 1 - Task 1 (Simple Static Website)
* **Copyright**: © 2026 LensCraft Studio. All rights reserved.
