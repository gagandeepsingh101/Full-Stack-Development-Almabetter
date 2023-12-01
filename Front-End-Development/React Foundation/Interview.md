# ReactJS Interview Preparation

## 1. Virtual DOM in ReactJS

The Virtual DOM in ReactJS is a lightweight representation of the actual DOM, created and synced with the real DOM. A diffing algorithm is used to efficiently update only the necessary parts of the real DOM, improving performance by minimizing direct manipulations.

## 2. React Hooks vs Class Components
Aspect | Functional Components | Class Components
--- | --- | ---
**State Management** | Use React Hooks (e.g., useState) to manage state | Use this.state and this.setState to manage state
**Lifecycle Methods** | Can use React Hooks for certain lifecycle actions | Use lifecycle methods like componentDidMount, etc.
**Code Length** | Shorter and more concise | Longer and requires more boilerplate code
**Component Definition** | Function that returns JSX | ES6 class that extends React.Component
**Accessing Props** | Passed as function arguments | Accessed using this.props
**Stateful Components** | Use useState and useEffect hooks | Maintain state using this.state
**Pure Components** | Use React.memo or React.PureComponent | Use shouldComponentUpdate or PureComponent for optimization
**Refs** | Use useRef hook | Use React.createRef or callback refs
**Learning Curve** | Easier to learn and use for beginners | Steeper learning curve, especially with lifecycle methods
**Performance Optimization** | Use React.memo or useMemo hook for memoization | Implement shouldComponentUpdate or PureComponent

## 3. Significance of Using Keys in React Lists

Keys are crucial when rendering lists of components in React. They help React efficiently update only the changed elements, minimizing re-rendering of the entire list and ensuring optimal performance.

## 4. "Render Props" in React

"Render props" is a technique where a component receives a function as a prop, which renders the UI and can be called within the component's render method. This pattern enhances reusability and composability, providing an alternative to higher-order components (HOCs) or React hooks.

## 5. Code Splitting in React

Code splitting is a technique to split a large JavaScript bundle into smaller chunks loaded on demand. React tools like React.lazy and Suspense facilitate code splitting, reducing the initial load time by loading only necessary code for the current page or component.

## 6. Differences Between Functional and Class Components

 Aspect | Functional Components | Class Components
--- | --- | ---
**State Management** | Use React Hooks (e.g., useState) to manage state | Use this.state and this.setState to manage state
**Lifecycle Methods** | Can use React Hooks for certain lifecycle actions | Use lifecycle methods like componentDidMount, etc.
**Code Length** | Shorter and more concise | Longer and requires more boilerplate code
**Component Definition** | Function that returns JSX | ES6 class that extends React.Component
**Accessing Props** | Passed as function arguments | Accessed using this.props
**Stateful Components** | Use useState and useEffect hooks | Maintain state using this.state
**Pure Components** | Use React.memo or React.PureComponent | Use shouldComponentUpdate or PureComponent for optimization
**Refs** | Use useRef hook | Use React.createRef or callback refs
**Learning Curve** | Easier to learn and use for beginners | Steeper learning curve, especially with lifecycle methods
**Performance Optimization** | Use React.memo or useMemo hook for memoization | Implement shouldComponentUpdate or PureComponent

## 7. Differences Between Controlled and Uncontrolled Components

Aspect | Controlled Components | Uncontrolled Components
--- | --- | ---
**State Management** | State is managed by React | State is managed by the DOM
**Value Initialization** | Value is set through props and updated through state changes | Value is set through default attribute values
**Data Flow** | Unidirectional (Parent to Child) | Bidirectional (Parent to Child and Child to Parent)
**Accessing Value** | Value can be accessed via state | Value accessed through DOM ref or event handling
**Handling User Input** | Event handlers update state and trigger re-rendering | Event handlers modify DOM directly
**Validation and Control** | Ideal for form validation and controlled user input | Less control over user input and validation
**Performance** | Slightly more overhead due to re-renders on state changes | May have better performance in certain cases
**Form Reset** | Resetting form is straightforward through state | Resetting form requires manual DOM manipulation
**Usability and Testability** | Easier to test and maintain due to predictable behavior | Harder to test and debug, might lead to inconsistent behavior

## 8. Types of Side Effects in React Component

There are two types of side effects in React components:

1. **Effects without Cleanup:** Used in `useEffect` where the browser is not restricted from screen updates. Examples include network requests, logging, and manual DOM mutations.

2. **Effects with Cleanup:** Some Hook effects require cleanup after updating the DOM. For instance, setting up an external data source subscription needs memory cleanup to prevent memory leaks.

