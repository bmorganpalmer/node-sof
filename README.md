# Simple AWS Amplify App

A basic Node.js application designed to be deployed on AWS Amplify.

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