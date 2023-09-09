# CRWN Ecommerce Web App

![CRWN Ecomm](crwn-ecomm-screenshot.png)

CRWN Ecomm is a full-featured eCommerce web application built using React, JavaScript, Redux, and Firebase. It's designed to provide a seamless shopping experience for both users and administrators. With features like user authentication, product management, cart functionality, and more, it's a robust example of what a modern eCommerce site can achieve.

## Table of Contents

- [Demo](#demo)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can experience the CRWN Ecomm web app live by visiting the [CRWN Ecomm Demo](https://crwn-ecomm.vercel.app/).

## Getting Started

To run the CRWN Ecomm web app locally and explore the codebase, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/devthedud3/crwn-ecomm.git
   cd crwn-ecomm
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Firebase**:

   - Create a Firebase project and set up Firebase Authentication and Firestore.
   - Update Firebase configuration in the `src/firebase/firebase.utils.js` file with your Firebase project settings.

4. **Start the Development Server**:

   ```bash
   npm start
   ```

5. **Open the App**:

   Open your web browser and go to `http://localhost:3000` to view the CRWN Ecomm app locally.

## Technologies Used

CRWN Ecomm is built using the following technologies and libraries:

- [React](https://reactjs.org/): A popular JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/): A state management library for managing global application state.
- [Firebase](https://firebase.google.com/): A cloud-based platform for building web and mobile applications.
- [SASS](https://sass-lang.com/): A CSS preprocessor that adds features like variables, nesting, and more.
- [Stripe](https://stripe.com/): A payment processing platform for online businesses.

## Project Structure

The project structure is organized to separate concerns and improve maintainability. Here's a brief overview of the project structure:

- `src/components`: Contains React components used in the app.
- `src/pages`: Defines the individual pages/routes of the app.
- `src/redux`: Manages the state of the application using Redux.
- `src/firebase`: Configures Firebase services and utilities.
- `src/styles`: Contains SASS files for styling the app.
- `public`: Includes static assets like images and the `index.html` file.

## Contributing

We welcome contributions from the community to make CRWN Ecomm even better. If you'd like to contribute, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes with clear and concise messages.
- Push your changes to your fork.
- Open a pull request explaining the changes you've made.

## License

The CRWN Ecomm web app is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as needed for your own projects.