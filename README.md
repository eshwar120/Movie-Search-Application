# Movie Search App

![Movie Search App](<img width="1080" alt="Screenshot 2023-08-05 234701" src="https://github.com/eshwar120/Movie-Search-Application/assets/125289759/1f99b2d4-02c0-45a8-925c-623bd7eb97aa">)

Welcome to the Movie Search App! This application allows you to explore popular movies and access detailed information about each movie. You can also use the search option to query movies by name and find your favorites easily. Additionally, the app provides support for both dark and light themes, enhancing your movie browsing experience.

## Live Demo
![Uploading Screenshot 2023-08-05 234701.png…](<img width="1066" alt="Screenshot 2023-08-05 235011" src="https://github.com/eshwar120/Movie-Search-Application/assets/125289759/b19efbea-cdd0-4066-bdb4-f27558ca545f">
)

You can access the live demo of the Movie Search App at (https://movie-search-by-eshwar.netlify.app/).

## Features

- Browse popular movies with ease
- Access detailed information for each movie
- Access detailed informatiom of each cast member
- Search for movies by name
- Enjoy a visually appealing dark and light theme

## Technologies Used

- Frontend: Vite, React, Tailwind CSS, React Router
- Backend: Node.js, Express.js
- Data Source: The Movie Database (TMDb) API
- Hosting: Render.com (Backend), Netlify (Frontend)

## Getting Started

Follow the instructions below to set up the project on your local machine:

### Prerequisites

- Node.js (v14 or later) must be installed on your system.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/movie-search-app.git
```

2. Navigate to the project directory:

```bash
cd movie-search-app
```

3. Install the dependencies:

```bash
npm install
```

### Configuration

Before running the application, you need to obtain an API key from The Movie Database (TMDb). Visit [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api) to create an account and get your API key.

Once you have the API key, create a `.env` file in the root of the project and add the following line:

```
API_KEY=your-tmdb-api-key
```

### Development

To start the development server, run the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

## Contributing

Contributions to the Movie Search App are welcome! If you find any issues or have ideas to improve the app, please feel free to open an issue or create a pull request.

## Acknowledgments

- The Movie Database (TMDb) for providing the movie data API.
- Create React App for the project bootstrapping inspiration.
- Vite for the fast build tooling.
- Tailwind CSS for the utility-first CSS framework.

Enjoy exploring movies with the Movie Search App! 🎬🍿
