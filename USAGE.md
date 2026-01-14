# Usage Guide

## Quick Start

1. **Open the file**: Simply open `index.html` in your browser
   - Or run a local server: `python3 -m http.server 8000`
   - Then visit: `http://localhost:8000`

## Features Tested & Working

### ✅ Visual Design
- Frosted glass modal effect with backdrop blur
- Beautiful gradient background with decorative shapes
- Circular logo with avatar image
- Clean, modern form layout
- Professional color scheme matching Figma design

### ✅ Form Fields
- **Full Name**: Text input with placeholder
- **Email**: Email input with validation
- **Password**: Secure input with visibility toggle
- **Confirm Password**: Password confirmation field

### ✅ Interactive Features

#### Password Visibility Toggle
- Click the eye icon to show/hide password
- Works on both password fields independently
- Smooth transition between masked and visible states

#### Real-time Password Validation
The password field validates against these requirements in real-time:
- ✓ 8+ characters
- ✓ 1 uppercase letter
- ✓ 1 number
- ✓ 1 special character (!@#$% etc.)

Each requirement shows a checkmark when met.

#### Form Validation
The form validates on submission:
- All fields must be filled
- Email must be in valid format (user@domain.com)
- Password must meet all requirements
- Passwords must match
- Shows appropriate error messages

### ✅ Responsive Design
- Works on desktop and mobile devices
- Modal adapts to smaller screens
- Maintains design integrity across viewports

## Technical Details

### Files Structure
```
├── index.html          # Main HTML structure
├── styles.css          # All styling with CSS variables
├── script.js           # Form logic and validation
├── assets/             # All images and SVG icons
├── README.md           # Project documentation
└── USAGE.md            # This file
```

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Any browser with backdrop-filter support

### Design Tokens (CSS Variables)
All design values are centralized in CSS variables:
- Spacing: `--space-8`, `--space-16`, etc.
- Colors: `--light-900`, `--light-600`, etc.
- Border radius: `--radius-8`, `--radius-16`, etc.
- Typography: Instrument Sans font family

## Customization

### Colors
Edit the CSS variables in `styles.css` under the `:root` selector:
```css
:root {
    --light-900: rgba(26, 26, 26, 0.8);
    --cyan: #00AFD0;
    /* ... more variables ... */
}
```

### Form Behavior
Modify the validation logic in `script.js`:
- Password requirements (regex patterns)
- Form submission logic
- Error messages

### Integration
To integrate with a backend API:
1. Open `script.js`
2. Find the form submit event listener
3. Replace the console.log with your API call:

```javascript
// Replace this:
console.log('Form submitted successfully!');

// With your API call:
fetch('/api/create-account', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName, email, password })
})
.then(response => response.json())
.then(data => {
    // Handle success
})
.catch(error => {
    // Handle error
});
```

## Testing Results

All features have been tested and verified:
- ✅ Visual design matches Figma specification
- ✅ Password visibility toggle works correctly
- ✅ Real-time password validation functions properly
- ✅ Form submission validates all fields
- ✅ Responsive design works on different screen sizes
- ✅ All interactive elements are functional

## Support

For any issues or questions, refer to the README.md file or check the browser console for debugging information.

