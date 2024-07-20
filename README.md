# Olympic Game

This is a Sports Lobby Management application built with React using Vite. The application allows users to manage a team of sports players, add cash, and handle player selection. It also includes a front page, registration, and login functionalities.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login and registration).
- Selection and management of sports players (Cricket, Football, Hockey, Basketball).
- Cash management with visual indicators.
- Responsive design for different screen sizes.
- Dynamic score calculation and player removal based on performance.

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- Node.js (v14 or above)
- npm (v6 or above)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Praveshkacode/Olympic-Game.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Olympic-Game
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Application

To start the development server, run the following command:
```sh
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```plaintext
src/
├── assets/             # Image assets used in the project
├── components/         # Reusable components
│   ├── AddedPlayers.jsx
│   └── Players/
│       ├── CricketPlayer.jsx
│       ├── FootBallPlayer.jsx
│       ├── HockeyPlayer.jsx
│       └── BasketBallPlayer.jsx
├── pages/              # Main pages of the application
│   ├── NavBar.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── App.jsx             # Main application component
├── main.jsx            # Entry point for React
├── index.css           # Global CSS
└── vite.config.js      # Vite configuration file
```

## Usage

### Front Page

- This is the landing page of the application, providing navigation to login and registration.

### Register

- Users can create a new account by filling in the required details.

### Login

- Registered users can log in with their credentials.

### Lobby

- Users can manage their team of players.
- Add and remove players, manage cash, and view the total score.
- Responsive design adapts to different screen sizes, showing different backgrounds for mobile and desktop views.

## Contributing

We welcome contributions to enhance the functionality and features of this application. If you have suggestions or would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
---
