Name of my project: A-5 Dev Stack Builder Website
A little description: Dev Stack Builder is an interactive web application built with React, TypeScript, and Tailwind CSS that helps developers select, configure, and visualize their ideal tech stack for modern web development projects.
Technology that use:
React.js
Tailwind CSS, DaisyUI
TypeScript / JavaScript (ES6+)
React-Toastify (NPM Package)
JSON (for technology data)
Vite (build tool)
3 features about project:
Dev Stack Builder is a fun web app I built using React, TypeScript, and Tailwind CSS that lets you easily pick and organize your ideal tech stack for any project. It allows you to browse through a list of popular tools to select what you need, gives you an instant visual summary of your chosen stack complete with icons and categories, and features a clean, super smooth UI that works seamlessly across both phones and laptops.

What is JSX, and why is it used in React?

JSX is a JavaScript syntax extension that lets us write HTML-like code directly in React to make UI building easier and more readable.

What is the difference between props and state?

Props are read-only data passed down from parent components, while state is internal, mutable data managed within the component itself.

What does the useState hook do, and where did you use it in this project?

The useState hook adds reactive state to functional components, and I used it to track and update the list of selected technologies in the stack builder.

What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook handles side effects in components, and I used it to fetch and load the tool data from the local JSON file when the app first loads.

Why does every item in a .map() list need a unique key prop?

Keys help React efficiently track which items have changed, been added, or been removed to optimize rendering performance.

What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing UI elements based on specific conditions, such as displaying an empty stack message when no technologies are selected.

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parents pass data to children via props, and children send data back to parents by calling callback functions that the parent passed down as props.