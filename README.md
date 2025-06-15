# Food Ordering App

A React-based food ordering application with features like restaurant listing, cart management, and user authentication.

## Tech Stack

- React
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Parcel

## Key Features

### Components
- Header with navigation and cart
- Restaurant listing with search and filtering
- Restaurant menu with categories
- Cart functionality
- About and Contact pages
- Lazy loaded Grocery section
- Error handling component

### State Management
- Redux store for cart management
- User context for authentication
- Restaurant data fetching using APIs

### Routing
- Dynamic routing for restaurant pages
- Protected routes
- Error boundary handling

## Project Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run start
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
  ├── components/
  │   ├── Header.js
  │   ├── Body.js
  │   ├── RestaurantCard.js
  │   ├── RestaurantMenu.js
  │   ├── Cart.js
  │   └── ...
  ├── utils/
  │   ├── appStore.js
  │   ├── cartSlice.js
  │   └── UserContext.js
  └── app.js
```

## Features Implementation

### Redux Setup
- Store configuration in appStore.js
- Cart slice for managing cart items
- Redux Provider wrapper in app.js

### Context API
- UserContext for managing user data
- Provider wrapped around app for global state

### Routing
- BrowserRouter setup with dynamic routes
- Lazy loading for Grocery component
- Error handling with ErrorComponent

### Performance Optimizations
- Lazy loading of components
- Redux for efficient state management
- Suspense for better loading states

