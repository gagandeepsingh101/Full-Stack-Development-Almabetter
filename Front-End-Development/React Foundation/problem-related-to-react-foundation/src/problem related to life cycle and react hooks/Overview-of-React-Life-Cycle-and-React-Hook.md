# React Lifecycle Methods and Hooks Overview

## Lifecycle Methods

1. **`componentDidMount` Method**

   - Called immediately after a component is mounted to the DOM.
   - Commonly used for initiating API calls, setting up subscriptions, or performing any necessary setup tasks.

2. **`componentDidUpdate` Method**

   - Called whenever the component updates and is re-rendered.
   - Useful for performing actions after a component has been updated, such as updating the DOM or making additional API calls based on prop or state changes.

3. **`componentWillUnmount` Method**

   - Called just before a component is unmounted and removed from the DOM.
   - Typically used for cleaning up resources, unsubscribing from subscriptions, or performing any necessary teardown tasks.

4. **Additional Lifecycle Methods**

   - React provides other lifecycle methods such as `shouldComponentUpdate`, `getDerivedStateFromProps`, `getSnapshotBeforeUpdate`, and `componentDidCatch` for more specific purposes. They are less commonly used in most applications.

## Hooks

1. **`useState` Hook**

   - Allows functional components to manage state.
   - Returns a state value and a function to update that value.
   - React re-renders the component by calling the update function and updating the state value.

2. **`useEffect` Hook**

   - Handles side effects and manages component lifecycle events.
   - Performs tasks such as data fetching, subscribing to events, or cleaning up resources.
   - Takes a function as its argument, executed after rendering, and can optionally specify dependencies to control when the effect is re-executed.

3. **`useContext` Hook**

   - Enables functional components to access the value of a context created using the `createContext` API.
   - Provides a convenient way to access context values without the need for nested components.

4. **`useRef` Hook**

   - Creates a mutable reference object that persists across renders.
   - Used to hold values that need to persist between renders or to reference DOM elements imperatively.

5. **Performance Optimization Hooks: `useCallback` and `useMemo`**

   - **`useCallback`**
     - Memoizes a function to prevent unnecessary re-creations.
   
   - **`useMemo`**
     - Memoizes a value to prevent unnecessary re-computations.
     - Used for performance optimization when dependencies haven't changed.

Feel free to explore the examples and contribute to this React project. If you have any questions or feedback, please open an issue or pull request.