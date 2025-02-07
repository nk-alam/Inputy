# 🎯 Inputy

<div align="center">

[![npm version](https://img.shields.io/npm/v/inputy.svg?style=flat-square)](https://www.npmjs.org/package/inputy)
[![npm downloads](https://img.shields.io/npm/dm/inputy.svg?style=flat-square)](https://npm-stat.com/charts.html?package=inputy)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful, lightweight React input component with built-in formatters for various input types. Designed for modern web applications with focus on accessibility, type safety, and user experience.

[Installation](#installation) • [Usage](#usage) • [Features](#features) • [Documentation](#documentation) • [Examples](#examples)

</div>

---

## 🚀 Installation

Using npm:
```bash
npm install inputy
```

Using yarn:
```bash
yarn add inputy
```

Using pnpm:
```bash
pnpm add inputy
```

## 📋 Features

- ✨ **Smart Formatting** - Automatic formatting for common input types
- 🎨 **Customizable Styling** - Easy to customize with CSS classes
- 🔒 **Type Safety** - Full TypeScript support
- ♿ **Accessibility** - ARIA-compliant and keyboard-friendly
- 🎯 **Validation** - Built-in validation patterns
- 📱 **Responsive** - Works great on all devices
- 🪶 **Lightweight** - Zero dependencies, small bundle size

## 💻 Usage

### Basic Usage

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

### With Form Integration

```jsx
import { Inputy } from "inputy";
import "inputy/dist/styles.css";

function PaymentForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form handling logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <Inputy
        type="debitCard"
        label="Card Number"
        required
        placeholder="1234 5678 9012 3456"
      />
      <Inputy
        type="expiryDate"
        label="Expiry Date"
        required
        placeholder="MM/YY"
      />
      <Inputy
        type="cvv"
        label="CVV"
        required
        placeholder="123"
      />
      <button type="submit">Pay Now</button>
    </form>
  );
}
```

## 📚 Documentation

### Supported Input Types

| Type | Description | Format Example |
|------|-------------|----------------|
| `text` | Regular text input | Any text |
| `debitCard` | Credit/Debit card number | 1234 5678 9012 3456 |
| `pan` | PAN card number | ABCDE1234F |
| `numeric` | Numbers only | 123456 |
| `password` | Masked password input | •••••• |
| `expiryDate` | Card expiry date | MM/YY |
| `cvv` | Card verification value | 123 |
| `phone` | Phone number | 1234567890 |
| `email` | Email address | user@example.com |
| `dob` | Date of birth | DD/MM/YYYY |
| `aadhar` | Aadhar card number | 1234 5678 9012 |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `InputType` | `'text'` | Type of input (see supported types above) |
| `label` | `string` | `undefined` | Label text for the input |
| `required` | `boolean` | `false` | Whether the input is required |
| `placeholder` | `string` | `''` | Placeholder text |
| `className` | `string` | `''` | Additional CSS classes |
| `maxLength` | `number` | `undefined` | Maximum input length |
| `name` | `string` | `undefined` | Input name attribute |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `onChange` | `(e: ChangeEvent) => void` | `undefined` | Native change event handler |
| `onValueChange` | `(value: string) => void` | `undefined` | Formatted value change handler |

### Styling

The component comes with default styles but can be easily customized using CSS classes:

```css
/* Override default styles */
.inputy-form-control {
  border-radius: 8px;
  border-color: #6366f1;
}

.inputy-form-control:focus {
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}
```

## 🎯 Examples

### Phone Number Input
```jsx
<Inputy
  type="phone"
  label="Phone Number"
  required
  placeholder="1234567890"
  onValueChange={(value) => {
    console.log('Formatted phone number:', value);
  }}
/>
```

### PAN Card Input
```jsx
<Inputy
  type="pan"
  label="PAN Number"
  required
  placeholder="ABCDE1234F"
  onValueChange={(value) => {
    console.log('Formatted PAN:', value);
  }}
/>
```

### Aadhar Card Input
```jsx
<Inputy
  type="aadhar"
  label="Aadhar Number"
  required
  placeholder="1234 5678 9012"
  onValueChange={(value) => {
    console.log('Formatted Aadhar:', value);
  }}
/>
```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

## 📜 License

MIT © Nk Alam

---

<div align="center">
Made with ❤️ by Nk Alam
</div>