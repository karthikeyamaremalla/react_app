# My React App

This is a simple React application that displays user information using functional components. The application consists of a dashboard that lists user cards, each showing the user's name and email.

## Project Structure

```
my-react-app
├── src
│   ├── components
│   │   ├── UserCard.js
│   │   └── UserDashboard.js
│   ├── data
│   │   └── users.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Components

- **UserCard**: A functional component that displays individual user information.
- **UserDashboard**: A functional component that manages the state of users and renders a list of UserCard components.

## Data

The user data is stored in `src/data/users.js`, which exports an array of user objects.

## License

This project is licensed under the MIT License.