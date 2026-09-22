# Satyanarayana Real Estate — Official Business Website

A modern, fast, mobile-first real estate portfolio and lead-generation landing website built for **Satyanarayana Real Estate Consultancy**.

Designed specifically for genuine local property consulting, this website introduces property categories (**Open Plots**, **Residential Plots**, and **Independent Houses**), showcases Satyanarayana's profile, and enables customers to contact him directly via phone, WhatsApp, or by submitting an enquiry form that automatically logs leads into **Google Sheets**.

---

## 🌟 Key Features

- **📱 Mobile-First Responsive Design**: Optimized for mobile visitors arriving via WhatsApp or social links. Includes a persistent mobile sticky action bar (`📞 Call Now` & `💬 WhatsApp`).
- **👤 Owner Profile & Photo Integration**: High-trust presentation with Dad's photograph, credentials, focus service areas, and direct contact options.
- **🏡 3 Core Property Categories**:
  - **Open Plots**: High-growth land for investment and development.
  - **Residential Plots**: Gated and housing layout plots ready for construction.
  - **Independent Houses**: Standalone individual houses with private living spaces.
  - *Interactive Category Selection*: Clicking *"Enquire Now"* on any property card smoothly scrolls down and auto-selects that property category in the form.
- **📋 Lead Generation & Validation**:
  - Validates 10-digit Indian mobile numbers (`6-9` series).
  - Collects preferred call time windows (e.g., 10 AM – 12 PM, 12 PM – 3 PM, etc.).
  - Captures customer location and property preferences.
- **📊 Automatic Google Sheets Integration**: Zero backend maintenance! Form submissions flow directly into Google Sheets via Google Apps Script.
- **💬 Centralized WhatsApp & Calling**:
  - Contextual prefilled WhatsApp messages for general inquiries and property-specific interest.
  - Floating pulsing WhatsApp quick-action widget.
  - One-tap phone dialer (`tel:`) buttons.
- **🎨 Premium Visual Theme**: Deep Navy (`#0A192F`), Warm Gold (`#C59B27`), Off-White (`#F8FAFC`), and clean typography (`Outfit` & `Inter`).

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | React 19 + TypeScript | Component-based, type-safe UI |
| **Build Tool** | Vite 6 | Instant HMR, lightning-fast production builds |
| **Styling** | SCSS (Modern Compiler) | Clean, modular design system with centralized variables |
| **Icons** | Lucide React | Modern, lightweight iconography |
| **Lead Capture** | Google Sheets + Apps Script | Serverless, free, spreadsheet-based CRM |
| **Hosting** | Vercel / Netlify / GitHub Pages | Fast global edge deployment |

---

## 📁 Project Structure

```text
satyanarayana-real-estate-portfolio/
│
├── public/
│   ├── images/
│   │   └── dad-photo.jpeg            # Dad's photograph for Hero & About sections
│   ├── favicon.svg                   # Custom gold & navy SVG favicon
│   └── ...
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── dad-photo.jpeg
│   │
│   ├── components/
│   │   ├── Navbar/                   # Sticky navbar + mobile drawer
│   │   ├── Hero/                     # High-impact hero section with photo & CTAs
│   │   ├── PropertyCard/             # Property category card component
│   │   ├── WhyChooseUs/              # Trust pillars (Local knowledge, direct assistance)
│   │   ├── AboutOwner/               # Satyanarayana's profile & personal bio
│   │   ├── ContactForm/              # Lead capture form with Indian phone validation
│   │   ├── ContactSection/           # Direct phone, WhatsApp, and office address cards
│   │   ├── WhatsAppButton/           # Floating WhatsApp CTA with pulse animation
│   │   ├── MobileBottomBar/          # Sticky bottom Call/WhatsApp bar for mobile
│   │   └── Footer/                   # Navigation, contact info, copyright
│   │
│   ├── sections/
│   │   └── PropertyTypes/            # 3 Property category grid
│   │
│   ├── config/
│   │   └── business.ts               # ⭐ Single central business configuration file
│   │
│   ├── services/
│   │   └── leadService.ts            # Google Apps Script submission service
│   │
│   ├── types/
│   │   └── enquiry.ts                # TypeScript interfaces & types
│   │
│   ├── styles/
│   │   ├── variables.scss            # Color palette, breakpoints, shadows, typography
│   │   ├── mixins.scss               # Responsive media queries & glassmorphism
│   │   └── global.scss               # Base reset, layout, and button styling
│   │
│   ├── App.tsx                       # Root application component
│   ├── main.tsx                      # React DOM entrypoint
│   └── vite-env.d.ts                 # Environment type definitions
│
├── google-apps-script/
│   └── Code.gs                       # Ready-to-deploy Google Apps Script code
│
├── .env.example                      # Environment variables template
├── index.html                        # HTML template with SEO & Google Fonts
├── package.json                      # Dependencies and npm scripts
├── tsconfig.json                     # TypeScript compiler configuration
├── vite.config.ts                    # Vite build configuration
└── README.md                         # Documentation
```

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (v9 or higher)

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/Praneesha18/satyanarayana-real-estate-portfolio.git
cd satyanarayana-real-estate-portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` directory.

---

## ⚙️ Central Business Configuration

All business information, owner details, phone numbers, WhatsApp numbers, address, service areas, and prefilled messages are configured in a **single file**:

👉 `src/config/business.ts`

```typescript
export const BUSINESS_CONFIG = {
  businessName: "Satyanarayana Real Estate",
  ownerName: "Satyanarayana",
  role: "Real Estate Consultant & Property Advisor",
  phone: "+91 98765 43210",              // Displayed phone number
  rawPhone: "+919876543210",              // For tel: links
  whatsappNumber: "919876543210",         // For wa.me links
  email: "contact@satyanarayanarealestate.com",
  address: {
    line1: "D.No. 12-34/5, Main Commercial Road",
    line2: "Near RTC Complex",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    pincode: "530016",
    full: "Main Commercial Road, Near RTC Complex, Visakhapatnam, Andhra Pradesh 530016",
  },
  serviceAreas: [
    "Madhurawada",
    "Bhogapuram Highway",
    "Anandapuram",
    "Tagarapuvalasa",
    "Pendurthi",
    "Gajuwaka & Surrounding Areas",
  ],
  photoUrl: "/images/dad-photo.jpeg",     // Dad's photograph
  // ...
};
```

Whenever phone numbers or locations change in the future, updating this single file automatically updates the entire website!

---

## 📊 Setting Up Google Sheets Lead Integration (5 Minutes)

You can connect your Google Sheet to receive leads in real time without needing a paid database:

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.new) and create a new sheet (e.g. named `Real Estate Leads`).
2. Add the following header row in Row 1 (optional, the script will create it automatically if empty):
   - **A1**: `Date & Time`
   - **B1**: `Customer Name`
   - **C1**: `Phone Number`
   - **D1**: `Preferred Call Time`
   - **E1**: `Address / Location`
   - **F1**: `Property Type`
   - **G1**: `Status`
   - **H1**: `Source URL`

### Step 2: Add the Google Apps Script
1. In Google Sheets, click **Extensions** > **Apps Script**.
2. Delete any code in `Code.gs` and copy-paste the entire contents of [`google-apps-script/Code.gs`](file:///Users/deepak/Documents/dads_realestate_project/google-apps-script/Code.gs).
3. Click the **Save** icon (`💾`).

### Step 3: Deploy as Web App
1. Click **Deploy** > **New deployment** (top right).
2. Select type: **Web app** (gear icon).
3. Fill in the deployment details:
   - **Description**: `Real Estate Lead Webhook`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(Crucial: Allows the website form to submit leads)*
4. Click **Deploy**.
5. Grant permissions / Authorize access when prompted.
6. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/AKfycbx.../exec`).

### Step 4: Configure in the Website
1. Create a `.env` file in the project root (or copy from `.env.example`):
   ```env
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbx.../exec
   ```
2. Restart your dev server (`npm run dev`) or redeploy to Vercel with this environment variable set.
3. Every time a customer fills out the enquiry form, a new row will instantly appear in your Google Sheet!

---

## 🌐 Deploying to Vercel (1-Click)

1. Push this repository to GitHub: `https://github.com/Praneesha18/satyanarayana-real-estate-portfolio`.
2. Go to [Vercel](https://vercel.com) and click **Add New...** > **Project**.
3. Import the `satyanarayana-real-estate-portfolio` repository.
4. Under **Environment Variables**, add:
   - `VITE_GOOGLE_APPS_SCRIPT_URL` = *(Your Google Apps Script Web App URL)*
5. Click **Deploy**.
6. Your website will be live at `https://satyanarayana-real-estate-portfolio.vercel.app`!

---

## 🔒 Privacy & Content Integrity

- No hardcoded secrets or sensitive API credentials.
- All property descriptions are honest, transparent, and compliant with local consulting practices.
- Zero unnecessary bloat or third-party tracking scripts.

---

## 📄 License & Ownership

Developed with ❤️ for **Satyanarayana Real Estate Consultancy**. All rights reserved.
