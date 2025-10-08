# Web development Assessment

This project is a comprehensive test assignment that involves building a feature-rich application using React, Vite, and Tailwind CSS. The application includes a countdown timer, weather API integration, and a conceptual backend API for user profiles.

## ✨ Features

### TIMER

- **User-Defined Time**: Input box to set the countdown duration in seconds. Accepts positive numbers only.
- **Start/Stop Control**: A "Start" button initiates the countdown, which decrements every second.
- **Real-Time Display**: The remaining time is clearly displayed and updates in real-time.
- **Completion Alert**: Shows a "Time’s up!" message when the countdown finishes or reach 0.
- **Reset Functionality**: A "Reset" button to stop the timer at any point and revert to the initial set time.

### WEATHER

- **City Search**: A search box to look up weather information for any city.
- **Weather Display**: A clean card interface to show the current weather data for the searched city.

### UI/UX

- **Modern Design**: A clean, centered card-based layout.
- **Intuitive Controls**: Clearly labeled and color-coded buttons (Green for Start, Red for Reset).

### BACKEND (Conceptual Endpoints)

- **User Profile Management**: Endpoints for creating, updating, deleting, and retrieving user profiles.
- **Flexible Retrieval**: Get a single user profile by ID or fetch all user profiles.

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **API Communication**: Axios or Fetch API

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development.


### Installation & Setup

1. **Fork the repository:**

2. **Clone the forked repository:**

   ```
   git clone [https://github.com/your-username/countdown-timer-test.git](https://github.com/your-username/countdown-timer-test.git)
   ```

3. **Setup your project with Vite and Tailwind v4**



## API Endpoints (Backend)

The following endpoints describe the required backend functionality for user profile management.

| **Method** | **Endpoint**                 | **Description**                               |
| ---------- | ---------------------------- | --------------------------------------------- |
| `POST`     | `/api/users`                 | Creates a new user profile.                   |
| `PUT`      | `/api/users/:userId`         | Updates an existing user profile by their ID. |
| `DELETE`   | `/api/users/:userId`         | Deletes a user profile by their ID.           |
| `GET`      | `/api/users`                 | Retrieves a list of all user profiles.        |
| `GET`      | `/api/users?user_id=:userId` | Retrieves a single user profile by their ID.  |



## ✅ Submission Checklist

* [ ] All frontend timer functionalities are implemented and working correctly.
* [ ] The UI is clean, centered, and matches the design requirements.
* [ ] Weather API is integrated with a search box and displays data.
* [ ] Backend endpoint logic is conceptually defined or implemented.
* [ ] The code is pushed to a GitHub repository named `web-development-assessment`.
* [ ] This `README.md` file is included in the repository.
* [ ] The project runs without any errors using `npm run dev`.
