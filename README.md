# Alvin Yanson | Frontend Developer Portfolio

A handcrafted, minimal, and professional developer portfolio website. Designed with a focus on readability, spacing, and subtle elegance.

## 🚀 Tech Stack

- **HTML5 & TypeScript**: Core structure and logic.
- **Tailwind CSS**: Utility-first styling with a custom muted blue theme.
- **Vite**: Ultra-fast development and build tool.
- **Lucide**: Clean and consistent iconography.
- **EmailJS**: Seamless contact form integration.
- **Inter Font**: Modern typography for maximum readability.

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### Building for Production

To create a production-ready build in the `/dist` folder:
```bash
npm run build
```

## 📬 Contact Form Configuration

This portfolio uses **EmailJS** for the contact form. To make it functional:

1. Sign up at [emailjs.com](https://www.emailjs.com/).
2. Create a Service and a Template.
3. Replace the following placeholders in the code:
   - `index.html`: Replace `"API_KEY"` in the initialization script.
   - `src/main.ts`: Replace `'YOUR_SERVICE_ID'` and `'YOUR_TEMPLATE_ID'` in the `emailjs.send` call.

## 👤 Customization

- **Personal Info**: Update the content in `index.html` within the respective sections (About, Experience, Education, etc.).
- **Branding**: Modify the primary blue color in `src/index.css` under the `@theme` block.
- **Icons**: Add or change icons in `src/main.ts` using the `lucide` library.

## 📄 License

Handcrafted by Alvin Yanson.
