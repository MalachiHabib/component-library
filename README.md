# Malachi's Component Library

**Version**  
**License:** MIT

Welcome to Malachi's Component Library! This is a collection of reusable and customizable UI components built with React and TypeScript. Whether you're building a web application or a design system, this library provides a solid foundation to create beautiful and interactive user interfaces.

## Installation

To install Malachi's Component Library, run the following command:

```bash
npm install malachi-component-library
```

## Usage

Import the desired component(s) from the library and start using them in your React application.

```ts
import { Button } from 'malachi-component-library';

function MyComponent() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

## Components

Button: The Button component is designed with flexibility and extensibility in mind, allowing you to customize its appearance and behavior to match your application's needs.

## Theming

```ts
import { ThemeProvider } from 'malachi-component-library';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    // ...
  },
  // ...
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your application components */}
    </ThemeProvider>
  );
}
```

## Contributing

We welcome contributions from the community! If you encounter any issues, have suggestions for improvements, or would like to contribute new components, please read our contributing guidelines to get started

## License

Malachi's Component Library is open-source software licensed under the MIT license.