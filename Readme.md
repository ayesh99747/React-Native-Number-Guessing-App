# GuessingGame: A Number Guessing Game for React Native

This React Native application is a simple number guessing game where the player tries to guess a randomly selected number between 1 and 100. The app provides feedback after each guess, guiding the player towards the correct answer.

<p align="center">
  <img src="screenshots/1 Home Screen - Android.png" alt="Android version of the Home Screen showing game title and start button" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/1 Home Screen - iOS.png" alt="iOS version of the Home Screen displaying game title and start button" width="45%" />
</p>
<p align="center"><em>Figure 1: Home screen of the app on Android and iOS platforms.</em></p>

<p align="center">
  <img src="screenshots/2 Guessing Screen - Android.png" alt="Android Guessing Screen where user can input their guesses" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/2 Guessing Screen - iOS.png" alt="iOS Guessing Screen showing input field and guess button" width="45%" />
</p>
<p align="center"><em>Figure 2: Guessing screen layout on Android and iOS.</em></p>

<p align="center">
  <img src="screenshots/3 Guessing Screen with Guesses - Android.png" alt="Android Guessing Screen showing a list of previous guesses" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/3 Guessing Screen with Guesses - iOS.png" alt="iOS Guessing Screen displaying guess history" width="45%" />
</p>
<p align="center"><em>Figure 3: Guessing screen with user guesses shown on both platforms.</em></p>

<p align="center">
  <img src="screenshots/4 Game Over Screen - Android.png" alt="Android Game Over Screen displaying results and option to play again" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/4 Game Over Screen - iOS.png" alt="iOS Game Over Screen showing final score and restart button" width="45%" />
</p>
<p align="center"><em>Figure 4: Game over screen on Android and iOS with end-of-game options.</em></p>


## Key Features

- **Intuitive User Interface:** Easy-to-use interface for all skill levels.
- **Number Guessing Logic:** Robust game logic with feedback on each guess.
- **Adaptive UI:** The UI adjusts to different screen sizes.
- **Game Over Screen:** Displays the number of rounds it took to guess the number.
- **Start New Game Functionality:** Allows the player to start a new game immediately.
- **Responsive Design:** Works well on both Android and iOS devices.

## Technologies Used

- **React Native:** The primary framework for building the user interface.
- **Expo:** Used for managing dependencies and building the application.
- **JavaScript (ES6+):** The programming language used throughout the project.
- **React Native Libraries:**
  - `expo-font`: For loading custom fonts.
  - `expo-linear-gradient`: For creating linear gradients.
  - `expo-status-bar`: For customizing the status bar.
  - `@expo/vector-icons`: For using icons.
  - `expo-app-loading`: For handling font loading.

## Prerequisites

- **Node.js and npm (or yarn):** You'll need Node.js and npm (or yarn) installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).
- **Expo CLI:** Install the Expo CLI globally using npm: `npm install -g expo-cli`

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd guessinggame
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
   This will start the Expo development server and provide you with options to run the app in your browser, on an Android emulator/device, or on an iOS simulator/device.

## Usage Examples

- **Starting a new game:** The app begins with a screen prompting the user to enter a number between 1 and 99.
- **Making a guess:** After entering a number, the app displays the opponent's guess and provides buttons to indicate whether the actual number is higher or lower.
- **Game over:** When the player successfully guesses the number, a "Game Over" screen is shown, displaying the number of rounds played.

## Project Structure

The project follows a standard React Native structure:

- **`assets/`:** Contains images and fonts used in the application.
- **`components/`:** Reusable UI components.
  - `game/`: Components specific to the game logic.
  - `ui/`: General UI components.
- **`screens/`:** Individual screens of the application.
- **`util/`:** Utility functions and constants.
- **`App.js`:** The main application component.
- **`app.json`:** The Expo configuration file.
- **`index.js`:** The entry point of the application.
- **`package.json`:** Contains project dependencies and scripts.

## Scripts in `package.json`

- `"start"`: Starts the Expo development server.
- `"android"`: Starts the Expo development server and builds for Android.
- `"ios"`: Starts the Expo development server and builds for iOS.
- `"web"`: Starts the Expo development server and builds for web.

## Configuration (`app.json`)

The `app.json` file contains the application's metadata and configuration, including the app's name, icon, splash screen settings, and other platform-specific settings.

## License

### Disclaimer

This repository contains code created while following the course  
**"React Native - The Practical Guide"** by **Academind** and **Maximilian Schwarzmüller**,  
available at: [O’Reilly Learning Platform](https://learning.oreilly.com/course/react-native-/9781789139747/)

The content is intended for educational purposes only and closely follows the structure and lessons from the original course.

All rights to the course content and materials belong to **Academind GmbH** and **Maximilian Schwarzmüller**.  
This repository is not affiliated with or endorsed by Academind or O’Reilly.

If you are the content owner and would like this repository modified or removed, please contact me directly.

## Error Handling

- **Invalid Number:** If the user enters a number outside the range of 1-99 or enters non-numeric input, an alert will be displayed indicating the error.
- **Incorrect Guess Direction:** If the user provides an incorrect direction ("higher" when the guess is lower than the target, and vice-versa), an alert will prompt them to reconsider.

This README provides a comprehensive overview of the GuessingGame application. For more details, refer to the individual files within the codebase.
