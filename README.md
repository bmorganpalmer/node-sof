# Simple AWS Amplify App with Cognito Authentication

A Node.js application designed to be deployed on AWS Amplify with Amazon Cognito user authentication.

> **Note**: When deployed to AWS Amplify, this application uses a static JSON file (`hello.json`) instead of a dynamic API endpoint. This is because AWS Amplify's standard hosting doesn't support running a Node.js server. For dynamic API functionality in production, we recommend using AWS Lambda functions through Amplify's backend services.

## Authentication

This application uses Amazon Cognito for user authentication with the following configuration:

- **User Pool ID**: us-east-1_HBR3XpaTX
- **App Client ID**: o3p0n43e4s8c66medioapfkq5
- **Auth Domain**: us-east-1yeflr48wo.auth.us-east-1.amazoncognito.com

Authentication flow:
1. Users are redirected to the login page if not authenticated
2. After successful login, users can access the main application
3. Users can log out using the logout button in the header

## Local Development

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Visit `http://localhost:3000` in your browser

## Deploying to AWS Amplify

1. Push your code to a Git repository (GitHub, BitBucket, GitLab, etc.)

2. Log in to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home)

3. Choose "Connect app"

4. Select your Git provider and repository

5. Configure build settings:
   - The default settings should work as the repository includes an `amplify.yml` file
   - Alternatively, you can use the following build settings:

   Build Settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

6. Review and confirm deployment

7. Wait for the deployment to complete

8. Access your application at the provided Amplify URL

## Project Structure

- `public/` - Static assets and HTML entry point
- `src/` - Application code
- `package.json` - Project dependencies and scripts
- `amplify.yml` - AWS Amplify build configuration
