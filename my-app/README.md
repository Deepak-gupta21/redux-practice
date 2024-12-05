# Redux Practice

## Introduction
This project demonstrates how to manage state using Redux in a React application. Redux is a predictable state container for JavaScript applications, often used in large or complex apps to manage state efficiently.

## Why Redux?
React offers several approaches to manage state, depending on the complexity and size of the application:

- **Local State**: For simple, localized state management, using `useState` or `useReducer`.
- **Context API**: For medium-complexity apps with shared state across components.
- **Redux**: For complex, large-scale apps that require a single source of truth and predictable state transitions.
- **React Query**: Best for managing server-side state (e.g., API requests, caching).
- **Zustand/Recoil**: Lightweight alternatives to Redux for simpler use cases.

This project focuses on learning Redux to effectively manage application state in a scalable manner.

## Features
- Centralized state management using Redux.
- State shared across multiple components.
- State changes through actions and reducers.

## Project Structure
redux-practice/
├── src/
│   ├── components/        # React components
│   ├── store/             # Redux store, reducers, and actions
│   ├── App.js             # Main application file
│   ├── index.js           # Entry point, wrapping the app with Redux Provider
│   └── index.css          # Styles
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation

## Here’s how redux and react-redux work together in a React app:

# redux:

Creates the store.
Manages state through actions and reducers.
Provides a predictable way to handle state transitions.

# react-redux:

Connects React components to the Redux store.
Provides hooks (useSelector, useDispatch) to access state and dispatch actions without boilerplate.

## useSelector
Used to read/select state from the Redux store.
It takes a function (called a selector) as an argument, which extracts a specific part of the state.
Automatically subscribes the component to updates. If the selected state changes, the component re-renders.

## useDispatch
Used to dispatch actions to the Redux store.
It returns the dispatch function, which is used to trigger state changes by sending actions to reducers.
