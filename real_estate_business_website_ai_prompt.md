# Real Estate Business Website — Complete AI Development Prompt

## Role

You are an expert frontend engineer and UI/UX designer helping me build a small, professional, production-ready real-estate business website for my father's real-estate business.

The website is for a real local business, so prioritize:
- Simplicity
- Professional appearance
- Mobile-first design
- Easy customer contact
- Lead generation
- Maintainable React architecture
- Good visual hierarchy
- Fast loading
- Easy future expansion

Do not overengineer the first version.

---

# 1. Business Context

My father runs a real-estate business.

He primarily handles:

1. Open plots
2. Residential plots
3. Independent houses

The website should introduce my father/business, showcase these three property categories, and make it very easy for customers to contact him.

I have a photograph of my father that should be included in the website.

The website should display:
- Father's name
- Phone number
- WhatsApp contact
- Business/address
- Property categories
- Father's photograph
- Customer enquiry form

The website should feel like a trustworthy local real-estate consultant/business rather than a huge corporate property portal.

---

# 2. Main Website Goal

The primary goal is lead generation.

The customer journey should be:

Customer visits website
→ Understands what properties are offered
→ Sees my father's profile/contact information
→ Fills out an enquiry form
→ Customer details are automatically stored in Google Sheets
→ My father can contact the customer

The website should make these actions extremely obvious:

- Call
- WhatsApp
- Enquire

The primary conversion should be:

**Customer visits → sees property types → submits enquiry → lead enters Google Sheet → father contacts customer.**

---

# 3. Technology Stack

Use:

### Frontend
- React
- TypeScript
- Vite
- SCSS

### Lead management
- Google Sheets
- Google Apps Script

### Deployment
- Vercel

### Communication
- WhatsApp
- Phone calls

Do NOT introduce MongoDB, Express, authentication, a custom backend, or other unnecessary infrastructure in Version 1.

Google Sheets + Google Apps Script is sufficient for the first version.

---

# 4. Website Type

Build this initially as a **single-page React landing website**.

The page should have these sections:

1. Navbar
2. Hero section
3. Property Types
4. Why Choose Us
5. About Owner
6. Enquiry Form
7. Contact Section
8. Footer

Use smooth scrolling between sections.

---

# 5. Overall Page Structure

Use this structure as the target UX:

```text
┌─────────────────────────────────┐
│ Navbar                          │
│ Logo | Properties | About | ☎  │
├─────────────────────────────────┤
│                                 │
│        HERO SECTION             │
│  "Find Your Perfect Property"   │
│                                 │
│  Open Plots | Residential Plots │
│  Independent Houses             │
│                                 │
│  [ Enquire Now ] [ WhatsApp ]   │
│                                 │
│                  Dad's Photo    │
├─────────────────────────────────┤
│                                 │
│        PROPERTY TYPES           │
│                                 │
│  🏞 Open Plots                  │
│  🏡 Residential Plots           │
│  🏠 Independent Houses          │
│                                 │
├─────────────────────────────────┤
│                                 │
│       WHY CONTACT US            │
│                                 │
│  ✓ Local Knowledge              │
│  ✓ Genuine Properties           │
│  ✓ Direct Assistance            │
│  ✓ Site Visit Support           │
│                                 │
├─────────────────────────────────┤
│                                 │
│       ABOUT YOUR DAD            │
│                                 │
│  Photo + short introduction     │
│  Name                           │
│  Experience / area              │
│                                 │
├─────────────────────────────────┤
│                                 │
│       ENQUIRE NOW               │
│                                 │
│  Name *                         │
│  Phone *                        │
│  Preferred Call Time            │
│  Address / Location             │
│  Property Interested In         │
│                                 │
│        [ Submit Enquiry ]       │
│                                 │
├─────────────────────────────────┤
│                                 │
│       CONTACT                  │
│                                 │
│  📞 Phone                       │
│  💬 WhatsApp                   │
│  📍 Address                     │
│                                 │
├─────────────────────────────────┤
│ Footer                          │
└─────────────────────────────────┘
```

---

# 6. Navbar

Create a clean, minimal navbar.

Include:

- Business logo/name
- Properties
- About
- Contact
- Call/Enquire CTA

On mobile, use a hamburger menu if necessary.

Navbar should remain clean and uncluttered.

Possible navigation:

```text
Logo | Properties | About | Contact | Enquire
```

Use smooth scrolling to the appropriate section.

---

# 7. Hero Section

The hero section is the most important visual section.

Use a headline similar to:

**Find the Right Property for Your Future**

Supporting text:

> Open plots, residential plots and independent houses available in and around [Area/City].

Do not hard-code the final business location until I provide it.

Include two prominent CTA buttons:

**View Properties**

**WhatsApp Us**

The "View Properties" button should scroll to the property section.

The WhatsApp button should open WhatsApp directly.

Place my father's photograph prominently on the right on desktop and appropriately stacked on mobile.

The design should feel like a premium local real-estate business.

---

# 8. Property Types Section

Create three visually attractive property cards.

## Card 1 — Open Plots

Title:
**Open Plots**

Description:

> Explore open plots suitable for investment and future development.

CTA:

**Enquire Now**

---

## Card 2 — Residential Plots

Title:
**Residential Plots**

Description:

> Find plots suitable for building your dream home.

CTA:

**Enquire Now**

---

## Card 3 — Independent Houses

Title:
**Independent Houses**

Description:

> Explore independent homes available for purchase.

CTA:

**Enquire Now**

---

Each "Enquire Now" button should scroll to the enquiry form and ideally preselect the corresponding property type.

For example:

Clicking "Open Plots"
→ enquiry form opens/scrolls
→ "Open Plot" is preselected.

---

# 9. Why Choose Us Section

Create a simple trust-focused section.

Suggested points:

### Local Knowledge
> Local understanding of available properties and surrounding areas.

### Genuine Properties
> Help customers explore available property options directly.

### Direct Assistance
> Customers can communicate directly with the person handling the property.

### Site Visit Support
> Assist customers in understanding and visiting suitable properties.

Do not make unsupported claims such as "100% verified", "guaranteed investment", "best prices", etc. unless I explicitly provide those facts.

Keep the copy honest and professional.

---

# 10. About Owner Section

Create a personal profile section for my father.

Use his photograph.

Suggested structure:

### Meet [Dad's Name]

> I help customers find suitable plots and independent houses based on their requirements, location preferences and budget.

Display:

- Father's name
- Real-estate/business role
- Area/service location
- Phone
- WhatsApp

Include CTA buttons:

**Call Now**

**WhatsApp**

The section should build trust without exaggerating experience or credentials.

I will provide the actual name, experience, location and other details later.

---

# 11. Enquiry Form

This is one of the most important parts of the website.

The form should collect customer leads.

Required fields:

### Name
Required.

### Phone Number
Required.

Validate it properly.

Because this is for an Indian business, support Indian phone numbers appropriately.

### Preferred Time to Call
Required.

Options:

```text
Morning
Afternoon
Evening
```

Prefer more useful time ranges such as:

```text
10 AM – 12 PM
12 PM – 3 PM
3 PM – 6 PM
6 PM – 9 PM
```

### Address / Location
Optional.

This should capture the customer's location/address or preferred location.

### Interested Property
Required.

Options:

```text
Open Plot
Residential Plot
Independent House
Not Sure
```

Submit button:

**Submit Enquiry**

---

# 12. Form UX

The form should:

- Have clear labels
- Show required fields
- Validate inputs
- Display useful validation messages
- Prevent invalid phone numbers
- Disable the submit button while submitting
- Show a loading state
- Show success feedback after submission
- Show an understandable error if submission fails
- Clear/reset the form after successful submission if appropriate

Do not expose Google Apps Script implementation details to the customer.

Example success message:

> Thank you! Your enquiry has been received. We will contact you soon.

---

# 13. Google Sheets Integration

The form should automatically send customer details to Google Sheets.

Use this architecture:

```text
Customer
   ↓
React Form
   ↓
Google Apps Script Web App
   ↓
Google Sheet
```

The React application should send the form data to the Google Apps Script endpoint.

Do not create a custom backend for this initial version.

---

# 14. Google Sheet Structure

The Google Sheet should contain columns similar to:

| Date | Name | Phone | Call Time | Address | Property | Status |
|---|---|---|---|---|---|---|
| 22/09/26 | Ravi | 98765... | Evening | Vizag | Open Plot | New |
| 22/09/26 | Suresh | 91234... | Morning | Madhurawada | House | Contacted |

At minimum, automatically store:

- Submission date/time
- Customer name
- Phone
- Preferred call time
- Address/location
- Property interest

If possible, include:

- Lead status

Default status:

**New**

Later the sheet can be manually updated with:

```text
New
Contacted
Site Visit
Interested
Closed
Not Interested
```

The website does not need a dashboard in Version 1.

---

# 15. WhatsApp Integration

Add WhatsApp functionality throughout the website.

There should be:

1. Hero WhatsApp CTA
2. About section WhatsApp CTA
3. Contact section WhatsApp CTA
4. Floating WhatsApp button

The WhatsApp button should open a direct chat with my father's WhatsApp number.

Use a prefilled message such as:

> Hi, I am interested in your properties. I found your website and would like to know more.

For property-specific enquiry buttons, generate contextual messages.

For example:

> Hi, I'm interested in Open Plots. Please share the available properties.

Do not hard-code the WhatsApp number in multiple components. Store it centrally in the business configuration.

---

# 16. Phone Call Integration

On mobile, clicking:

**Call Now**

should open the phone dialer.

Use:

```text
tel:+91XXXXXXXXXX
```

Again, keep the actual phone number in the central business configuration.

---

# 17. Google Maps / Address

The contact section should show:

📍 Business Address

Optionally provide:

**Get Directions**

using Google Maps.

Do not invent the address or coordinates.

I will provide the actual address later.

---

# 18. Contact Section

Create a simple final contact section.

Display:

### Contact Us

📞 Phone  
💬 WhatsApp  
📍 Address

Include prominent:

**Call Now**

**WhatsApp**

**Get Directions**

Keep this section simple.

---

# 19. Footer

Footer should contain:

- Business name
- Short description
- Navigation links
- Phone
- WhatsApp
- Address
- Copyright

Example:

```text
[Business Name]

Open Plots • Residential Plots • Independent Houses

Call | WhatsApp | Contact

© 2026 [Business Name]. All rights reserved.
```

Do not add fake certifications or claims.

---

# 20. Mobile-First Design

Mobile responsiveness is extremely important.

Many customers may arrive through:

**WhatsApp → Website**

on their phone.

Design mobile-first.

On mobile, aim for:

```text
Logo
☰

Hero
Dad's Photo
Enquire Now
WhatsApp

Property Types

Why Choose Us

About Dad

Enquiry Form

Contact
```

Also create a sticky bottom action bar on mobile:

```text
┌──────────────────────────────────┐
│  📞 Call      💬 WhatsApp       │
└──────────────────────────────────┘
```

This should make contacting my father extremely easy.

Ensure the sticky bar does not cover form fields or important content.

---

# 21. Visual Design

The website should feel:

- Professional
- Trustworthy
- Premium but approachable
- Modern
- Clean
- Local-business friendly
- Not overly corporate
- Not cluttered

Avoid:
- Excessive animations
- Huge amounts of text
- Too many colors
- Unnecessary gradients
- Generic stock-photo-heavy design
- Overly complicated layouts

Use whitespace effectively.

Use subtle animations only where they improve UX.

---

# 22. Color Theme

Recommended initial direction:

### Premium Real Estate Theme

```text
Deep Navy
+
Warm Gold
+
Off White
+
White
```

The initial theme should feel premium and trustworthy.

However, keep colors centralized in SCSS variables so the theme can easily be changed later.

Example conceptual variables:

```scss
$primary: ...;
$secondary: ...;
$background: ...;
$text-primary: ...;
$text-secondary: ...;
$border: ...;
```

Do not scatter color values throughout components.

---

# 23. Typography

Use a clean, modern typography system.

Use a professional heading font paired with a highly readable body font if appropriate.

Typography should establish:

- Strong hero heading
- Clear section headings
- Readable descriptions
- Prominent CTA text
- Comfortable mobile body text

Avoid unnecessarily decorative fonts.

---

# 24. Dad's Photo

I already have a photograph of my father.

Use the supplied image rather than generating a fake person.

Use it in:
- Hero section
- About section if visually appropriate

Optimize the image for web performance.

Use:
- Responsive sizing
- Proper `alt` text
- Rounded/modern presentation
- Object-fit where appropriate

Do not distort the image.

---

# 25. React Folder Structure

Use a clean and maintainable architecture.

Recommended structure:

```text
real-estate-website/
│
├── public/
│   ├── images/
│   │   └── dad-photo.jpg
│   │
│   └── favicon.ico
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.scss
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.scss
│   │   │
│   │   ├── PropertyCard/
│   │   │   ├── PropertyCard.tsx
│   │   │   └── PropertyCard.scss
│   │   │
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.tsx
│   │   │   └── ContactForm.scss
│   │   │
│   │   ├── AboutOwner/
│   │   │   ├── AboutOwner.tsx
│   │   │   └── AboutOwner.scss
│   │   │
│   │   ├── ContactSection/
│   │   │   ├── ContactSection.tsx
│   │   │   └── ContactSection.scss
│   │   │
│   │   ├── WhatsAppButton/
│   │   │   ├── WhatsAppButton.tsx
│   │   │   └── WhatsAppButton.scss
│   │   │
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       └── Footer.scss
│   │
│   ├── sections/
│   │   ├── PropertyTypes/
│   │   ├── WhyChooseUs/
│   │   └── About/
│   │
│   ├── services/
│   │   └── leadService.ts
│   │
│   ├── config/
│   │   └── business.ts
│   │
│   ├── types/
│   │   └── enquiry.ts
│   │
│   ├── styles/
│   │   ├── variables.scss
│   │   ├── global.scss
│   │   └── mixins.scss
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .env
├── package.json
└── README.md
```

You may improve this structure if there is a clear technical reason, but do not unnecessarily complicate it.

---

# 26. Central Business Configuration

Do not hard-code business information in multiple components.

Create a central configuration such as:

```text
src/config/business.ts
```

It should contain values such as:

```text
businessName
ownerName
phone
whatsapp
address
serviceAreas
```

Potentially:

```text
googleMapsUrl
whatsappMessage
```

Components should consume this configuration.

If my father changes his phone number later, I should only need to update one place.

---

# 27. TypeScript

Use proper TypeScript.

Create types such as:

```text
src/types/enquiry.ts
```

Example conceptual data:

```text
Enquiry
- name
- phone
- preferredCallTime
- address
- propertyType
```

Do not use `any`.

Use meaningful interfaces/types.

Keep component props typed.

---

# 28. Lead Service

Create:

```text
src/services/leadService.ts
```

This should contain the Google Apps Script submission logic.

Do not put API/request logic directly inside the UI component if it can be separated cleanly.

The ContactForm component should call the lead service.

---

# 29. Environment Variables

Keep configurable endpoint information outside component code where appropriate.

For example:

```text
VITE_GOOGLE_APPS_SCRIPT_URL
```

Do not commit sensitive secrets.

Note: Google Apps Script endpoint URLs are not secret credentials, but keeping configuration centralized still makes deployment easier.

---

# 30. Accessibility

Implement good basic accessibility:

- Semantic HTML
- Proper labels for inputs
- Keyboard navigation
- Visible focus states
- Alt text for images
- Sufficient color contrast
- Buttons should be actual `<button>` elements
- Links should be actual `<a>` elements
- Avoid clickable `<div>` elements
- Proper heading hierarchy

The site should be usable without relying entirely on color.

---

# 31. SEO Basics

Because this is a real business website, include basic SEO.

Add:

- Meaningful page title
- Meta description
- Relevant headings
- Descriptive image alt text
- Open Graph metadata where appropriate
- Favicon

Use location-specific SEO only after I provide the actual business location.

Do not stuff keywords unnaturally.

---

# 32. Performance

Keep the website lightweight.

Prioritize:

- Optimized images
- Lazy loading where appropriate
- Minimal dependencies
- No unnecessary libraries
- Avoid excessive animations
- Efficient CSS
- Good mobile performance

The website should load quickly even on mobile networks.

---

# 33. Security and Form Handling

The Google Apps Script integration should validate incoming data as much as reasonably possible.

On the React side:

- Validate name
- Validate phone
- Validate property type
- Validate call time
- Sanitize/handle user input appropriately
- Prevent accidental duplicate submissions where practical

Do not expose credentials or API keys.

---

# 34. Version 1 Scope

The first release should include ONLY:

```text
Landing page
+
Property categories
+
Dad profile
+
Lead form
+
Google Sheets integration
+
WhatsApp
+
Phone call
+
Address
+
Responsive design
```

Do not build an admin dashboard yet.

Do not build authentication.

Do not build a property-management backend.

Do not build a database.

Do not build a complex search/filter system.

Do not build individual property pages yet.

---

# 35. Future Expansion

Design the architecture so it can eventually support:

## Version 2 — Property Listings

Example:

```text
Properties

┌───────────────┐
│ Property Img  │
│ Open Plot     │
│ Location      │
│ 150 Sq Yards  │
│ ₹ XX Lakhs    │
│ View Details  │
└───────────────┘
```

Potential data:
- Property type
- Location
- Size
- Price
- Images
- Features
- Availability

---

## Version 3 — Individual Property Pages

Example:

```text
/property/open-plot-madhurawada-01
```

Could contain:
- Multiple photos
- Property details
- Location
- Size
- Price
- Features
- Google Maps
- WhatsApp enquiry

---

## Version 4 — Admin Dashboard

Potential dashboard:

```text
Dashboard

New Leads       12
Contacted        8
Site Visits      4
Closed           2
```

Potential features:
- Lead management
- Property management
- Enquiry status
- Customer history

Do not implement these features now unless specifically requested.

---

# 36. Development Phases

Build the project incrementally.

## Phase 1 — Collect Business Information

Before finalizing content, identify placeholders for:

- Dad's name
- Business name
- Phone number
- WhatsApp number
- Address
- Service areas
- Short business description
- Dad's photograph
- Property photographs if available
- Preferred theme

If information is missing, use clearly marked placeholders rather than inventing facts.

---

## Phase 2 — Build UI

Implement:

```text
Navbar
↓
Hero
↓
Property Types
↓
Why Choose Us
↓
About Dad
↓
Contact Form
↓
Contact
↓
Footer
```

Focus first on visual quality and responsive behavior.

---

## Phase 3 — Build Form

Implement:

```text
Name
Phone
Preferred Call Time
Address
Property Type
```

Add validation and submission states.

---

## Phase 4 — Google Sheets

Implement:

```text
React
 ↓
Google Apps Script
 ↓
Google Sheet
```

Test actual submissions.

---

## Phase 5 — Communication

Add:

```text
WhatsApp
Phone
Google Maps
```

Test all links on mobile.

---

## Phase 6 — Responsive Testing

Test:

- Mobile
- Tablet
- Laptop
- Desktop

Pay particular attention to:
- Navbar
- Hero
- Property cards
- Form
- Sticky mobile CTA
- Dad's photo
- Buttons
- Text wrapping

---

## Phase 7 — Deployment

Deploy to Vercel.

Initial URL can be something similar to:

```text
yourbusiness.vercel.app
```

Later connect a custom domain such as:

```text
yourbusiness.in
```

when the business is ready.

---

# 37. UX Principles

Follow these principles throughout the implementation:

### Principle 1
Customers should understand the business within 5 seconds.

### Principle 2
Contacting my father should require as few clicks as possible.

### Principle 3
The website should work beautifully on mobile.

### Principle 4
The enquiry form should be short.

### Principle 5
Do not overwhelm customers with information.

### Principle 6
Trust should come from clarity, real contact information, the owner's profile, and honest descriptions.

### Principle 7
Do not make unsupported claims.

### Principle 8
Build for future expansion without overengineering Version 1.

---

# 38. Important Content Rules

Do NOT invent:

- Property prices
- Locations
- Property availability
- Square footage
- Business experience
- Certifications
- Customer testimonials
- Awards
- Guarantees
- Investment returns
- Legal claims

Use placeholders until I provide the actual information.

If I provide actual property information later, incorporate it.

---

# 39. Expected Quality

I do not want a generic beginner React website.

The final result should look like a polished small-business website that could realistically be shown to customers.

Aim for:

- Premium visual hierarchy
- Clean spacing
- Consistent cards
- Professional typography
- Strong CTA design
- Excellent mobile layout
- Smooth interactions
- Good accessibility
- Maintainable code
- Clear component boundaries
- Type-safe implementation

At the same time, avoid unnecessary complexity.

---

# 40. Initial Deliverables

When starting implementation, produce the project in this order:

1. Project setup
2. Folder structure
3. Global theme/styles
4. Business configuration
5. Navbar
6. Hero
7. Property type cards
8. Why Choose Us
9. About Owner
10. Enquiry Form
11. Contact Section
12. WhatsApp button
13. Footer
14. Google Apps Script integration
15. Google Sheets setup instructions
16. Responsive improvements
17. SEO metadata
18. Final testing checklist
19. Vercel deployment instructions

Do not skip the Google Sheets integration because lead collection is one of the main purposes of the website.

---

# 41. Final Target Architecture

The intended Version 1 flow is:

```text
                     REAL ESTATE WEBSITE
                              │
              ┌───────────────┴───────────────┐
              │                               │
         INFORMATION                      CONTACT
              │                               │
       ┌──────┼──────┐                 ┌──────┼──────┐
       │      │      │                 │      │      │
      Plots  Houses  About            Call  WhatsApp Form
                                      │      │       │
                                      │      │       ↓
                                      │      │   Google Apps
                                      │      │       Script
                                      │      │       ↓
                                      │      │   Google Sheet
                                      │      │       ↓
                                      └──────┴→  Dad contacts
                                                customer
```

---

# 42. Important Instruction to the AI Developer

Build this as a real, usable business website, not just a visual mockup.

The Google Sheets lead submission should actually work once the Apps Script URL and business details are configured.

However, do not invent any missing business information.

Use placeholders such as:

```text
[DAD_NAME]
[BUSINESS_NAME]
[PHONE_NUMBER]
[WHATSAPP_NUMBER]
[BUSINESS_ADDRESS]
[SERVICE_AREA]
```

until I provide the real values.

When I later provide:
- Father's photo
- Name
- Phone
- WhatsApp
- Address
- Service areas
- Business name
- Property photos
- Property details

replace the placeholders cleanly throughout the project.

Keep all business-specific values centralized wherever possible.

---

# 43. Collaboration Style

Work with me iteratively.

Do not attempt to add every possible feature at once.

First establish the Version 1 foundation.

When I ask for refinements, modify the existing architecture rather than rewriting the entire project unnecessarily.

If a design or technical decision has multiple reasonable options, explain the tradeoff briefly and choose the simplest option that satisfies the business requirement.

The final goal is:

**A small, beautiful, trustworthy, mobile-first real-estate website that generates genuine customer enquiries and sends those leads automatically to my father's Google Sheet, while making phone and WhatsApp contact extremely easy.**
