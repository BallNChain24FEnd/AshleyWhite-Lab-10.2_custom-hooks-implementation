# Lab 10.2 — Custom Hooks Implementation

## Project Description
A React JavaScript application demonstrating two reusable custom hooks: usePagination and useDebounce. Built with React and Vite.

## Features
1. **Pagination:** Displays items across multiple pages with Previous, Next, and numbered page buttons.
2. **Custom Page Settings:** Allows users to change items per page and test empty lists.
3. **Debounced Search:** Delays search results until the user stops typing.
4. **Adjustable Delay:** Supports 300ms, 500ms, and 1000ms debounce settings.
5. **Responsive Design:** Provides a clean layout for desktop and mobile devices.

## Technologies
- React
- JavaScript (JSX)
- Vite
- CSS
- Git 
- GitHub

## Getting Started

Install dependencies:

`npm install`

Start the development server:

`npm run dev`

Build the project:

`npm run build`

## Custom Hooks
- `usePagination.js` — Manages page numbers, item indexes, and navigation.
- `useDebounce.js` — Delays value updates using useEffect and timer cleanup.

## Custom Reflection Questions

**1. What did you learn about custom hooks?**

I learned how to create reusable hooks that manage state and logic separately from components.

**2. How did you handle pagination?**

I used useState, Math.ceil, and navigation functions to calculate and change pages.

**3. Why is cleanup important in useDebounce?**

Using clearTimeout prevents old timers from updating the value when the user continues typing.

**4. What challenges did you face?**

Handling page boundaries and understanding how useEffect dependencies affect the debounce timer.

## Resources
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/guide/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Search](https://www.google.com/)
