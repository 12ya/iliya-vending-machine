# Vending Machine

This project is a simple vending machine application built with React, TypeScript, and Vite.

## How to Run

1. **Clone the repository:**

    ```bash
    git clone https://github.com/12ya/iliya-vending-machine.git
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

4. **Open your browser** and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## Project Structure

-   **Core Logic:** The main vending machine logic, including state management for drinks, balance, and messages, is encapsulated within the `useVendingMachine` custom hook located at `src/hooks/use-vending-machine.ts`.
-   **Main Component:** The primary `VendingMachine` component, which orchestrates the UI and integrates the core logic, is found at `src/components/vending-machine/index.tsx`.
-   **Sub-Components:** Other files within the `src/components/vending-machine/` directory (e.g., `cash-button.tsx`, `drink.tsx`, `insert.tsx`) are individual UI components that make up the vending machine interface.

## Versions

-   **React:** 19.2.0
-   **TypeScript:** 5.8.3
-   **Vite:** 7.0.0
-   **Node.js:** 20.9.0


<div style="display: flex; gap: 10px; justify-content: center; align-items: flex-start;">
  <img width="1789" alt="Screenshot 2025-07-02 at 2 52 40 AM" src="https://github.com/user-attachments/assets/1ee0e44e-3c41-426c-b7a6-c5fb735c4770" style="max-width: 100%; height: auto;">
  <img width="400" height="800" alt="Screenshot 2025-07-02 at 2 52 40 AM" src="https://github.com/user-attachments/assets/fa3b8f41-73ab-4121-9561-bcefa301194e" style="max-width: 100%; height: auto;">
</div>


