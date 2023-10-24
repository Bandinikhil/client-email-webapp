# Email Client App

This is a React-based email client app with features similar to Microsoft Outlook. The app fetches email data from an API and provides functionality to view, mark as favorite, and filter emails.

## Deployed Link
[client-email-webApp](https://client-email-webapp.netlify.app/)

## ScreenShoots of WebApp

![Screenshot (117)](https://github.com/Bandinikhil/client-email-webapp/assets/105233916/842c6af4-cd46-403e-9254-cde0a5eb8332)




![Screenshot (118)](https://github.com/Bandinikhil/client-email-webapp/assets/105233916/f63d115d-8298-4dbc-b3e6-14902dcfd34a)




![Screenshot (119)](https://github.com/Bandinikhil/client-email-webapp/assets/105233916/57013ce8-af03-44b5-a21b-0215c7c3b016)


## Overview

The email client app allows users to view a list of emails sent to them. Clicking on an email item displays its content in a split-screen format, with the email list on the left and the email body on the right. The app provides options to mark emails as favorites, distinguish between read and unread emails, and filter emails based on these criteria.

## Features


- **Email List Page**: Displays a list of emails fetched from the API.
- **Email Details View**: Clicking on an email item opens the email details, including subject, body, and date and time.
- **Mark as Favorite**: Allows users to mark an email as a favorite using a button in the email body section.
- **Filtering**: Supports filtering emails by "favorites," "read," and "unread."
- **Date and Time Format**: Displays the date in the format "dd/MM/yyyy hh:mm a."
- **Persistent Storage**: Persists favorited and read emails across sessions.
- **Visual Aesthetics**: Adheres to a minimalist visual design/layout inspired by the provided mocks.
- **Modular Code Design**: Emphasizes code modularity and clean design for performance.

## API Sources

- [Emails List APIs](https://flipkart-email-mock.now.sh/): Fetches email data from an API.
  - [https://flipkart-email-mock.now.sh/](https://flipkart-email-mock.now.sh/)
  - [https://flipkart-email-mock.now.sh/?page=<pageNumber>](https://flipkart-email-mock.now.sh/?page=<pageNumber>)
- [Email Body API](https://flipkart-email-mock.now.sh/?id=<email-item-id>)

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

1. Run `npm start` to start the development server.
2. Open your web browser and access the app at http://localhost:3000.

## Technologies

- React
- Redux
- CSS

## Contributing

Contributions are welcome! Please follow the GitHub flow for contributing to this project.

1. Fork the repository.
2. Create a new branch with your feature or bug fix.
3. Commit your changes.
4. Push to your branch.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
