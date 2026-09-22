# Bheemarasetty Satyanarayana Real Estate — Official Website

A modern, fast, bilingual (English & తెలుగు) real estate portfolio and lead-generation landing website built for **Bheemarasetty Satyanarayana Real Estate Consultancy**.

Designed specifically for genuine local property consulting in **Visakhapatnam, Andhra Pradesh**, this website introduces property categories (**Open Plots / ఓపెన్ ప్లాట్లు**, **Residential Plots / రెసిడెన్షియల్ ప్లాట్లు**, and **Independent Houses / ఇండిపెండెంట్ ఇళ్ళు**), showcases Satyanarayana's personal profile and photograph, and enables customers to contact him directly via Phone (`+91 88975 82265`), WhatsApp, or by submitting an enquiry form connected to his [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4/edit?usp=drivesdk).

---

## 🌟 Key Features

- **🌐 Dual Language Support (English & తెలుగు)**: Instant one-click language toggle in the top navbar allowing Telugu-speaking and English-speaking customers to navigate seamlessly.
- **✨ Clean, High-Spaced Header**: Minimalist, perfectly aligned top navbar without crowded links — featuring brand identity, language switcher, direct call button, and instant enquire CTA.
- **👤 Owner Profile & Photo Integration**: High-trust presentation with Satyanarayana's photograph in the Hero & About sections, accompanied by his direct phone number and focus service locations.
- **🏡 3 Core Property Categories**:
  - **Open Plots / ఓపెన్ ప్లాట్లు**: High-growth land for investment and future appreciation.
  - **Residential Plots / రెసిడెన్షియల్ ప్లాట్లు**: Gated and housing layouts ready for home construction.
  - **Independent Houses / ఇండిపెండెంట్ ఇళ్ళు**: Standalone residential homes with private parking and compound.
  - *Interactive Preselection*: Clicking *"Enquire Now"* on any card smoothly scrolls down and auto-selects that property category in the form.
- **📋 Lead Generation & Validation**:
  - Validates 10-digit Indian mobile numbers (`6-9` series).
  - Collects preferred call time windows (10 AM – 12 PM, 12 PM – 3 PM, 3 PM – 6 PM, 6 PM – 9 PM).
  - Captures customer location and property preferences.
- **📊 Real-time Google Sheets CRM**:
  - Connected to Google Spreadsheet: `1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4`
  - Submissions are logged automatically with Date, Name, Phone, Call Time, Location, Property Type, and Status (`New`).
- **📱 Mobile-First Sticky Action Bar**: One-tap `📞 Call Now` & `💬 WhatsApp` bar on mobile screens.

---

## 📞 Business & Contact Information

- **Owner Name**: Bheemarasetty Satyanarayana
- **Phone / Calling**: `+91 88975 82265` (`8897582265`)
- **WhatsApp**: `+91 88975 82265`
- **Office Location**: Near Santhoshimatha Temple, Thatichetlapalem, Visakhapatnam, Andhra Pradesh, India
- **Focus Service Locations**: Madhurawada, Bhogapuram Highway, Anandapuram, Tagarapuvalasa, Thatichetlapalem, Pendurthi & Visakhapatnam Regions
- **Google Spreadsheet**: [View Leads Sheet](https://docs.google.com/spreadsheets/d/1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4/edit?usp=drivesdk)

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | React 19 + TypeScript | Component-based, type-safe UI |
| **Localization** | React Context (EN / TE) | Zero-overhead instant English & Telugu switcher |
| **Build Tool** | Vite 6 | Instant HMR, lightning-fast production builds |
| **Styling** | SCSS (Modern Compiler) | Clean modular design system with centralized variables |
| **Icons** | Lucide React | Modern, lightweight iconography |
| **Lead Capture** | Google Sheets + Apps Script | Serverless, zero-maintenance spreadsheet CRM |
| **Hosting** | Vercel | Fast global edge deployment |

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone repository
git clone https://github.com/Praneesha18/satyanarayana-real-estate-portfolio.git
cd satyanarayana-real-estate-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Production build
npm run build
```

---

## 📊 Connecting the Google Sheet (Google Apps Script)

The code is pre-configured for your Google Spreadsheet ID (`1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4`):

1. Open your sheet: [Google Sheet Link](https://docs.google.com/spreadsheets/d/1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4/edit?usp=drivesdk)
2. Click **Extensions** > **Apps Script**.
3. Replace any text in `Code.gs` with the contents of [`google-apps-script/Code.gs`](file:///Users/deepak/Documents/dads_realestate_project/google-apps-script/Code.gs).
4. Click **Deploy** > **New deployment**.
5. Select **Web app** (`⚙️` icon):
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` *(Required)*
6. Click **Deploy**, Authorize access, and copy the **Web app URL**.
7. Put the URL in `.env`:
   ```env
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## 🌐 Deploying to Vercel (1-Click)

1. Push your repository to GitHub: `https://github.com/Praneesha18/satyanarayana-real-estate-portfolio`
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select `satyanarayana-real-estate-portfolio`.
4. Add the environment variable:
   - `VITE_GOOGLE_APPS_SCRIPT_URL` = `(Your Google Apps Script Web App URL)`
5. Click **Deploy**.

---

## 📄 License & Ownership

Developed with ❤️ for **Bheemarasetty Satyanarayana Real Estate Consultancy**. All rights reserved.
