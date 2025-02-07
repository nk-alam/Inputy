// File: src/Inputy.tsx
import React, { useState, ChangeEvent, FC, InputHTMLAttributes } from 'react';
import './styles.css';

// Define the allowed input types
type InputType = 'text' | 'debitCard' | 'pan' | 'numeric' | 'password' | 
                'expiryDate' | 'cvv' | 'phone' | 'email' | 'dob' | 'aadhar';

// Create a custom interface for our props
interface InputyCustomProps {
  type?: InputType;
  label?: string;
  onValueChange?: (value: string) => void;
}

// Combine custom props with HTML input props
type InputyProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & InputyCustomProps;

interface BaseInputConfig {
  type?: string;
  maxLength?: number;
  placeholder?: string;
  inputMode?: 'text' | 'numeric' | 'tel' | 'email';
  pattern?: string;
}

type InputConfigs = {
  [key in InputType]: BaseInputConfig;
};

type FormatterFunction = (value: string) => string;

type Formatters = {
  [key in InputType]: FormatterFunction;
};

const Inputy: FC<InputyProps> = ({
  type = 'text',
  label,
  required = false,
  placeholder,
  className = '',
  maxLength,
  name,
  disabled = false,
  onChange,
  onValueChange,
  value,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');

  // Formatters with proper type definition
  const formatters: Formatters = {
    debitCard: (value: string) => {
      const numeric = value.replace(/[^\d]/g, '');
      const groups = numeric.match(/.{1,4}/g) || [];
      return groups.join(' ').substr(0, 19);
    },
    pan: (value: string) => {
      const alphanumeric = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
      return alphanumeric.substr(0, 10);
    },
    numeric: (value: string) => value.replace(/[^\d]/g, ''),
    text: (value: string) => value,
    password: (value: string) => value,
    expiryDate: (value: string) => {
      const numeric = value.replace(/[^\d]/g, '');
      if (numeric.length >= 2) {
        return `${numeric.slice(0, 2)}/${numeric.slice(2, 4)}`;
      }
      return numeric;
    },
    cvv: (value: string) => value.replace(/[^\d]/g, '').substr(0, 4),
    phone: (value: string) => {
      const numeric = value.replace(/[^\d]/g, '');
      return numeric.substr(0, 10);
    },
    email: (value: string) => value.toLowerCase(),
    dob: (value: string) => {
      const numeric = value.replace(/[^\d]/g, '');
      if (numeric.length > 4) {
        if (numeric.length > 6) {
          return `${numeric.slice(0, 2)}/${numeric.slice(2, 4)}/${numeric.slice(4, 8)}`;
        }
        return `${numeric.slice(0, 2)}/${numeric.slice(2, 4)}/${numeric.slice(4)}`;
      }
      if (numeric.length > 2) {
        return `${numeric.slice(0, 2)}/${numeric.slice(2)}`;
      }
      return numeric;
    },
    aadhar: (value: string) => {
      const numeric = value.replace(/[^\d]/g, '');
      const groups = numeric.match(/.{1,4}/g) || [];
      return groups.join(' ').substr(0, 14);
    },
  };

  // Input type configurations with proper typing
  const inputConfigs: InputConfigs = {
    debitCard: {
      maxLength: 19,
      placeholder: '1234 5678 9012 3456',
      inputMode: 'numeric',
      pattern: '[0-9 ]{19}',
    },
    pan: {
      maxLength: 10,
      placeholder: 'ABCDE1234F',
      pattern: '[A-Z]{5}[0-9]{4}[A-Z]{1}',
    },
    numeric: {
      maxLength: 20,
      inputMode: 'numeric',
      pattern: '[0-9]*',
    },
    text: {
      pattern: '.*',
    },
    password: {
      type: 'password',
      maxLength: 50,
    },
    expiryDate: {
      maxLength: 5,
      placeholder: 'MM/YY',
      inputMode: 'numeric',
      pattern: '(0[1-9]|1[0-2])/[0-9]{2}',
    },
    cvv: {
      maxLength: 3,
      placeholder: '123',
      inputMode: 'numeric',
      pattern: '[0-9]{3,4}',
    },
    phone: {
      maxLength: 10,
      placeholder: '1234567890',
      inputMode: 'numeric',
      pattern: '[0-9]{10}',
    },
    email: {
      type: 'email',
      placeholder: 'example@domain.com',
      maxLength: 100,
    },
    dob: {
      maxLength: 10,
      placeholder: 'DD/MM/YYYY',
      inputMode: 'numeric',
      pattern: '(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}',
    },
    aadhar: {
      maxLength: 14,
      placeholder: '1234 5678 9012',
      inputMode: 'numeric',
      pattern: '[0-9 ]{14}',
    },
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatter = formatters[type];
    const formattedValue = formatter(e.target.value);
    setInputValue(formattedValue);
    
    // Call both the original onChange and our custom onValueChange
    if (onChange) {
      onChange(e);
    }
    if (onValueChange) {
      onValueChange(formattedValue);
    }
  };

  const config = inputConfigs[type];

  return (
    <div className="inputy-form-group">
      {label && (
        <label className="inputy-label" htmlFor={name}>
          {label}
          {required && <span className="inputy-mandatory">*</span>}
        </label>
      )}
      <input
        {...config}
        {...props}
        id={name}
        className={`inputy-form-control ${className} ${focused ? 'focused' : ''}`}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        placeholder={placeholder || config.placeholder}
        maxLength={maxLength || config.maxLength}
        name={name}
        disabled={disabled}
        value={inputValue}
      />
    </div>
  );
};

export default Inputy;