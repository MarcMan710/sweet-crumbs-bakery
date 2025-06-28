# Sweet Crumbs Bakery Website

This project is a simple, clean website for the Sweet Crumbs Bakery, built using React, Vite, and Tailwind CSS. It allows customers to learn about the bakery, browse the menu, find contact information and hours, and place custom cake orders.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Styling](#styling)
- [Data](#data)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Home Page:** Welcoming banner, brief introduction, and featured baked goods.
- **Menu Page:** Grid display of all baked goods with images, descriptions, and prices.
- **About Us Page:** Bakery story, team information, and photos.
- **Contact Page:** Contact form, business hours, location details, and an optional map embed.
- **Order a Cake Page:** Form for submitting custom cake orders.
- Responsive design for various screen sizes.
- Warm and cozy color scheme and friendly typography.
- (TBA) Instagram feed embed.
- (TBA) Newsletter signup form.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid styling.
- **React Router DOM:** For handling client-side routing.

## Project Structure

The project follows a standard React application structure:

```
sweet-crumbs-bakery/
├── public/                 # Static assets (logo, images, etc.)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   ├── FeaturedItems.jsx
│   │   ├── MenuItem.jsx
│   │   ├── ContactForm.jsx
│   │   ├── CakeOrderForm.jsx
│   │   ├── Map.jsx
│   ├── pages/              # Page-level components
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Contact.jsx
│   │   └── OrderCake.jsx
│   ├── App.jsx             # Main application component and routing setup
│   ├── main.jsx            # Entry point of the application
│   └── index.css           # Global styles (including Tailwind directives)
├── .gitignore              # Specifies intentionally untracked files
├── index.html              # The main HTML file
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd sweet-crumbs-bakery
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Running Locally

To start the development server and view the project in your browser:

```bash
npm run dev
```

The application will typically be available at `http://localhost:5173/`.

## Building for Production

To create a production-ready build of the application:

```bash
npm run build
```

This will generate optimized static files in the `dist/` directory.

## Styling

This project uses Tailwind CSS for styling.

-   **Configuration:** The `tailwind.config.js` file is used to customize Tailwind's default theme, including defining the project's color palette and typography.
-   **Utility Classes:** Styling is primarily applied using Tailwind's utility classes directly in the JSX.
-   **Custom CSS:** Global styles or any necessary custom CSS can be added in `src/index.css`.

Remember to define your warm and cozy colors and inviting typography in `tailwind.config.js`.

## Data

For simplicity, initial data like menu items can be managed as JavaScript arrays of objects within the components or in a separate data file (e.g., `src/data.js`). For production, you might consider a more robust data management solution.

## Deployment

The production build generated in the `dist/` folder can be deployed to various static hosting services such as Netlify, Vercel, GitHub Pages, or Render.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).
```
