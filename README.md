# Project: Search Application

## Introduction
This project is a technical demonstration of my skills in React development, organization, and clean code practices. The goal is to implement a search application inspired by Google's search interface, incorporating functionality such as search input, result display, and detailed views of selected results.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Architecture and Structure](#architecture-and-structure)
3. [Features](#features)
4. [Tecnologies](#tecnologies-used)



## Getting Started

To run the PTTalentAgile Test locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/AMarchmarti/PTPodcast.git
    ```

2. Navigate to the project directory:

    ```bash
    cd PTPodcast
    ```

3. Install dependencies using pnpm:

    ```bash
    pnpm install
    ```

4. Start the development server:

    ```bash
    pnpm dev
    ```

5. Run the tests:

    ```bash
    pnpm test
    ```

# Architecture and Structure

The Podcast Explorer App follows a modular architecture and folder structure to keep the code organized and maintainable. Here's an overview of the main directories and files:

-   **assets**: Stores assets such as images, fonts, or other static files used in the application.
-   **constants**: Houses constant values or configurations used throughout the application.
-   **presentation**:
    -   **components**: Houses reusable UI components organized by feature or functionality.
    -   **hooks**: Contains custom React hooks created for the application.
    -   **pages**: Contains React components representing different pages/routes of the application.
    -   **routes**: Contains configuration for routing using react-router-dom.
-   **domain**: Contains model, repositories, and use cases.
    -   **model**: Defines the core entities of the application.
    -   **services**: Contains the business logic of the application.
-   **infrastructure**: Contains services for interacting with external resources.
    -   **http**: Implements concrete interactions with external services.
    -   **utils**: Contains utility functions for handling API responses and other services.
-   **utils**: Contains utility functions for app.

# Features
- **Google-Inspired Search Interface**: Includes a search bar with a dynamic layout, featuring a magnifying glass icon and a clear (X) button.
- **Responsive Design**:
  - On larger screens: A two-column layout where results occupy 2/3 of the screen and the detailed view occupies 1/3.
  - On tablets and mobile devices: The detailed view opens as a modal, maintaining a user-friendly experience.
- **Dynamic Loading**: Displays a skeleton loader while fetching search results.
- **Modular Components**: Each part of the application (e.g., search bar, results, details view) is developed as an independent, reusable React component.
- **Performance Optimization**: Leveraging `React.memo`, `useCallback`, and `useMemo` for optimal performance.
- **Styling with TailwindCSS**: All styles are implemented using TailwindCSS, ensuring consistency and flexibility without relying on external UI libraries.

# Technologies Used
   - **React**: Component-based architecture for building a responsive and dynamic UI.  
   - **TypeScript**: Ensures type safety and better maintainability of the codebase.  
   - **Tailwind CSS**: Provides custom styling while maintaining design consistency and responsiveness.  
   - **Vitest**: Fast unit testing to ensure code reliability.  
   - **React Testing Library**: Simplifies testing of UI components and their behavior.

