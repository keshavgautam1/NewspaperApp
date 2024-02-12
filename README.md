
## Newspaper App
This repository contains the source code for the Newspaper App, a mobile application built using React Native and Expo. The app provides a platform to view top news articles across different categories, including general, health, technology, and sports.

# Installation
Follow these steps to set up and run the app on your local machine:

# 1. Clone the repository:
git clone <repository-url>
cd newspaper-app


# 2. Install dependencies:
npm install
Start the Expo development server:


# 3. Start the Expo development server:
npm start  or  npm run web


# 4. Follow the prompts to open the app on an emulator or scan the QR code with the Expo Go app on your mobile device.



##### Issues Faced and Solutions

### WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI

## Steps to fix this issue -(StackOverFlow)

# 1 - uninstall expo-cli:

npm uninstall --global expo-cli

# 2 - Install Expo CLI (version 4 or higher):

npm install --global @expo-cli

# 3 - Create a New Expo TypeScript Project:

npx create-expo-app demo_app --template expo-template-blank-typescript

# 4 - Navigate to Your Project:

cd demo_app

# 5 - Install react-native-web@~0.19.6:

npm install react-native-web@~0.19.6

# 6 - Install react-dom@18.2.0:

npm install react-dom@18.2.0

# 7 - Install @expo/webpack-config@^19.0.0:

npm install @expo/webpack-config@^19.0.0

# 8 - Run project:

npm run web
