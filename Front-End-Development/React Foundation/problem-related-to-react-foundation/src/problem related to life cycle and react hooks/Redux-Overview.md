# Redux Overview

## Single Source of Truth

- Redux follows the principle of having a single source of truth for your application's state.
- All the data for your application is stored in a single JavaScript object called the "store."

## Immutability in Redux

- In Redux, the state is immutable, meaning it cannot be directly modified.
- Updates to the state involve creating new copies of the state, ensuring predictable state changes and easing debugging.

## Actions in Redux

- Actions are plain JavaScript objects that describe an event or intention to change the state.
- They have a `type` property describing the action and can contain additional data known as the `payload`.

## Reducers in Redux

- Reducers are pure functions specifying how the application's state changes in response to actions.
- They take the current state and an action as input and return a new state, updating it immutably.

## The Redux Store

- The store is the central hub in Redux, holding the application's state and providing methods to interact with it.
- It allows you to dispatch actions to trigger state changes, subscribe to changes, and retrieve the current state.

## State Changes in Redux

- To initiate a state change, dispatch an action to the store using `store.dispatch(action)`.
- The action is then passed to the reducers, determining how the state should be updated.

## Subscribing to State Changes

- Subscribe to the store's state changes using `store.subscribe(callback)`.
- This enables updating the UI or performing other side effects in response to state changes.

## Middleware in Redux

- Redux supports middleware, functions that intercept actions before reaching the reducers.
- Middleware can be used for various purposes such as logging, handling asynchronous operations, or modifying actions.

