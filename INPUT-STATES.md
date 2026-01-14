# Input Field States Documentation

This document describes all the input field states implemented based on the Figma designs.

## States Overview

### 1. **Idle State** (Default)
**Appearance:**
- Border: `1px solid rgba(26, 26, 26, 0.09)` - Light gray border
- Text: Placeholder text in `rgba(26, 26, 26, 0.48)` - Gray placeholder
- Background: White

**When:**
- Input field is empty and not focused
- User has not interacted with the field yet

**CSS:**
```css
.form-input {
    border: 1px solid var(--light-100); /* rgba(26, 26, 26, 0.09) */
}

.form-input::placeholder {
    color: var(--light-500); /* rgba(26, 26, 26, 0.48) */
}
```

---

### 2. **Hover State**
**Appearance:**
- Border: `1px solid rgba(26, 26, 26, 0.2)` - Darker gray border
- Text: Placeholder text stays the same
- Background: White

**When:**
- Mouse cursor hovers over the input field
- Field is not focused

**CSS:**
```css
.form-input:hover:not(:focus) {
    border-color: var(--light-200); /* rgba(26, 26, 26, 0.2) */
}
```

---

### 3. **Focus/Click State**
**Appearance:**
- Border: `1px solid rgba(16, 104, 68, 0.08)` - Light green border
- Shadow: `0 0 0 2px rgba(16, 104, 68, 0.36)` - Green focus ring
- Text: Darker text `rgba(26, 26, 26, 0.8)` when typing
- Background: White
- Cursor: Blinking text cursor visible

**When:**
- User clicks on the input field
- Field is actively being edited
- Field receives focus via Tab key

**CSS:**
```css
.form-input:focus {
    border-color: var(--brand-100); /* rgba(16, 104, 68, 0.08) */
    box-shadow: 0 0 0 2px var(--brand-400); /* rgba(16, 104, 68, 0.36) */
    color: var(--light-900); /* rgba(26, 26, 26, 0.8) */
}
```

---

### 4. **Filled State**
**Appearance:**
- Border: `1px solid rgba(26, 26, 26, 0.09)` - Same as idle state
- Text: Darker text `rgba(26, 26, 26, 0.8)` - Shows actual value
- Background: White
- No placeholder visible (replaced by actual content)

**When:**
- User has entered text and moved away from the field
- Field contains a value but is not focused

**CSS:**
```css
.form-input:not(:placeholder-shown) {
    color: var(--light-900); /* rgba(26, 26, 26, 0.8) */
}
```

---

## Visual Comparison

| State  | Border Color | Border Opacity | Focus Ring | Text Color | Placeholder |
|--------|-------------|----------------|------------|------------|-------------|
| Idle   | Gray        | 0.09          | No         | Light Gray | Visible     |
| Hover  | Gray        | 0.20          | No         | Light Gray | Visible     |
| Focus  | Green       | 0.08          | Yes (Green)| Dark Gray  | Hidden      |
| Filled | Gray        | 0.09          | No         | Dark Gray  | Hidden      |

---

## Color Variables

```css
/* Brand Colors (Focus State) */
--brand-700: #106844;
--brand-100: rgba(16, 104, 68, 0.08);
--brand-400: rgba(16, 104, 68, 0.36);

/* Neutral Colors */
--light-100: rgba(26, 26, 26, 0.09);   /* Idle/Filled border */
--light-200: rgba(26, 26, 26, 0.2);    /* Hover border */
--light-500: rgba(26, 26, 26, 0.48);   /* Placeholder text */
--light-900: rgba(26, 26, 26, 0.8);    /* Filled/Focus text */
--white: #ffffff;                       /* Background */
```

---

## Transitions

All state changes are animated smoothly:

```css
.form-input {
    transition: all 0.2s ease;
}
```

This creates smooth transitions between:
- Border color changes (Idle → Hover → Focus)
- Shadow appearance (No ring → Focus ring)
- Text color changes (Placeholder → Filled)

---

## Implementation Notes

1. **Focus Ring**: The green focus ring uses `box-shadow` instead of `outline` for better visual control
2. **Hover Prevention**: The hover state is disabled when focused using `:hover:not(:focus)` selector
3. **Placeholder Detection**: The filled state uses `:not(:placeholder-shown)` pseudo-class to detect when the input has a value
4. **Accessibility**: The focus ring provides clear visual feedback for keyboard navigation

---

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS pseudo-classes (`:hover`, `:focus`, `:not()`, `:placeholder-shown`)
  - CSS transitions
  - Box-shadow for focus ring

---

## Testing Checklist

- [x] Idle state displays with light gray border
- [x] Hover state shows darker border on mouse over
- [x] Focus state displays green border and ring
- [x] Filled state shows darker text without focus ring
- [x] Smooth transitions between all states
- [x] Keyboard navigation (Tab key) triggers focus state
- [x] Works on all form inputs (text, email, password)

