# Alejandro Randon Fullstack Project

This README provides all the necessary instructions to set up and run the project locally. Follow the steps below to get started.

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 20 or higher recommended)
- **npm** (Node Package Manager) or **yarn**

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Indatech/alejandro_randon_fullstack.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd alejandro_randon_fullstack
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

---

## Running the Project

1. **Start the development server**:

   ```bash
   npm run dev
   ```

   or with yarn:

   ```bash
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:5173` to view the application.

---

## Project Structure

The project follows a modular structure for scalability and maintainability. Below is a brief overview:

- **src/**: Contains the main source code.
  - **components/**: Reusable UI components.
  - **hooks/**: Custom React hooks for managing logic.
  - **pages/**: Page-level components for routing.
  - **services/**: API service integrations.
  - **types/**: TypeScript type definitions.

---

## Configuration

### Tailwind CSS

The project uses Tailwind CSS for styling. You can customize the configuration in `tailwind.config.js`.

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_SPOTIFY_API_CLIENT_ID=<your_spotify_client_id>
VITE_SPOTIFY_API_CLIENT_SECRET=<your_spotify_client_secret>
VITE_SPOTIFY_API_REDIRECT_URI=<your_redirect_uri>
```

Replace the placeholders with your actual Spotify API credentials.

---

## Scripts

Here are some useful scripts you can run:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Lints the codebase for errors.
