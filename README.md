# Inputy - React Input Component with Smart Formatting

<div align="center">

[![npm version](https://img.shields.io/npm/v/inputy.svg?style=flat-square)](https://www.npmjs.org/package/inputy)
[![npm downloads](https://img.shields.io/npm/dm/inputy.svg?style=flat-square)](https://npm-stat.com/charts.html?package=inputy)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🎯 A powerful, lightweight React input component with built-in formatters for various input types. Perfect for forms, payment fields, and user data collection. Supports TypeScript, Next.js, and modern React frameworks.

[Quick Start](#-installation) • [Examples](#-usage-examples) • [Features](#-features) • [API Documentation](#-documentation) • [Support](#-contributing)

</div>

---

## Why Choose Inputy?

- 🚀 **Zero Dependencies** - Lightweight and fast
- 💪 **TypeScript Ready** - Full type safety and IntelliSense support
- 🎨 **Framework Agnostic** - Works with Next.js, Create React App, Vite, and more
- 📱 **Mobile Friendly** - Responsive and touch-optimized
- 🌙 **Dark Mode Support** - Automatic dark theme detection
- ♿ **Accessibility First** - WCAG compliant with ARIA support

## 🚀 Installation

Choose your preferred package manager:

```bash
# Using npm
npm install inputy

# Using yarn
yarn add inputy

# Using pnpm
pnpm add inputy
```

## 💻 Framework Compatibility

### Modern React Frameworks

- ⚛️ React 16.8+ with Hooks
- 📱 Next.js 12, 13, 14 (Pages & App Router)
- ⚡ Vite
- 🎯 Create React App (CRA)
- 💨 Remix
- 🌟 Gatsby
- 🔥 React + TypeScript Projects

### Build System Support

- 📦 Webpack 4/5
- 🔄 Rollup
- 🏗️ esbuild
- 🎯 Parcel 2

### CSS Framework Integration

- 🎨 CSS Modules
- 💅 Styled Components
- 🎯 Tailwind CSS
- 🔥 Emotion
- 📝 SASS/SCSS

## 📋 Key Features

- ✨ **Smart Input Formatting**

  - Automatic card number spacing
  - Phone number formatting
  - Date formatting (MM/YY, DD/MM/YYYY)
  - PAN & Aadhar card formatting

- 🎨 **Advanced Styling**

  - Custom CSS classes
  - Theme customization
  - Dark mode support
  - Responsive design

- 🔒 **Developer Experience**

  - TypeScript support
  - React Hook Form compatible
  - Formik integration
  - Redux Form support

- ♿ **Accessibility**
  - ARIA labels
  - Keyboard navigation
  - Screen reader friendly
  - WCAG 2.1 compliant

[View all features](#-features)

## 💻 Quick Start Examples

### Basic React Input

```jsx
import { Inputy } from "inputy";
import "inputy/dist/styles.css";

function App() {
  return (
    <Inputy
      type="phone"
      label="Phone Number"
      required
      onValueChange={(value) => console.log(value)}
    />
  );
}
```

### Next.js Integration

```jsx
// pages/_app.js or app/layout.js
import "inputy/dist/styles.css";

// Your component
import { Inputy } from "inputy";

export default function PaymentForm() {
  return (
    <Inputy
      type="debitCard"
      label="Card Number"
      required
      errorMessage="Invalid card number"
    />
  );
}
```

[View more examples](#-usage-examples)

## 📚 Input Types & Validation

### Supported Input Types

| Type                                     | Use Case          | Format              |
| ---------------------------------------- | ----------------- | ------------------- |
| `debitCard`                              | Payment Forms     | 1234 5678 9012 3456 |
| `phone`                                  | Contact Forms     | 1234567890          |
| `email`                                  | User Registration | user@example.com    |
| `pan`                                    | Tax Forms         | ABCDE1234F          |
| `aadhar`                                 | ID Verification   | 1234 5678 9012      |
| [View all types](#supported-input-types) |                   |                     |

## 🎨 Styling Guide

### Default Theme Customization

```css
.inputy-form-control {
  border-radius: 8px;
  border-color: #6366f1;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .inputy-form-control {
    background-color: #1f2937;
    color: #fff;
  }
}
```

[View styling documentation](#-styling)

## 🧪 Testing Support

Compatible with popular testing frameworks:

- ✅ Jest
- 🧪 React Testing Library
- 🎯 Cypress
- ⚡ Vitest

## 🔧 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Browsers

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

## 📜 License

MIT © [Nk Alam](https://github.com/nk-alam)

---

<div align="center">
<p>Made with ❤️ by <a href="https://github.com/nk-alam">Nk Alam</a></p>

<p>
<a href="https://github.com/nk-alam/Inputy">GitHub</a> •
<a href="https://www.npmjs.com/package/inputy">npm</a> •
<a href="https://github.com/nk-alam/Inputy/issues">Issues</a>
</p>

<p>
<strong>Keywords:</strong> react-input, form-component, input-formatter, react-forms, typescript-react, nextjs-component, react-ui
</p>
</div>
