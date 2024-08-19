# Vue3 Awesome CV Template

**Vue3 Awesome CV Template** is a Vue3 version of [Awesome CV](https://github.com/posquit0/Awesome-CV) for a CV(Curriculum Vitae) or Résumé. Using Vue SFC (Single File Components) and JSON, it is very easy to use and greatly customizable, and also supports mobile responsiveness.

## Screenshots

| Web | Mobile |
|:---:|:---:|
| ![Résumé Web View](images/resume-web-view.png)  | ![Résumé Mobile View](images/resume-mobile-view.png)|

## Components

| Component | Screenshot |
|:---:|:---:|
| DetailListing | ![DetailListing](images/detail-listing.png) |
| MinimalListing | ![MinimalListing](images/minimal-listing.png) |
| TableList | ![TableList](images/table-list.png) |

## Quick Start

1. Install the dependencies

    ```sh
    npm install
    ```

2. Run the development server

    ```sh
    npm run dev
    ```

## Customization

Go to `public` directory and edit `resume.json` or `styles.json` file to customize your CV. Keep the structure of the JSON file as it is especially the keys.

The loading screen image and text can be switched by replacing `public/mario-jump.gif` file and changing the file path in `styles.json`.

```json
 "loadingScreen": {
    "imageUrl": "/mario-jump.gif",
    "text": "Here we go... preparing your adventure!"
  }
```

## Visitor Counter API

This repository is a submodule of [k3ii/mscc-cloud-resume-challenge](https://github.com/k3ii/mscc-cloud-resume-challenge), which required the implementation of a visitor counter using different AWS services such as API Gateway, Lamdba and DynamoDB.

Implement your own visitor counter API endpoints to extend the *AWESOMENESS* of your resume and update them in `.env` file.

```env
VUE_APP_SET_VISITOR_COUNT_API=""
VUE_APP_INCREMENT_VISITOR_COUNT_API=""
```

**Important:** If you don't want the visitor counter, you just need to keep the values of the above environment variables empty.

### Types and Required Responses of the Visitor Counter API Endpoints

Make sure to implement the following types and responses for the visitor counter API endpoints.

1. Set Visitor Count - retrieve number of views

    ```sh
    {
      "statusCode": 200,
      "body": {
        "views": 92
      }
    }
    ```

2. Increment Visitor Count - increment and retrieve the number of views

    ```sh
    {
      "statusCode": 200,
      "body": {
        "message": "Counter incremented successfully",
        "views": 93
      }
    }
    ```

## For Production

- To type-check, compile and minify

    ```sh
    npm run build
    ```

- Lint with [ESLint](https://eslint.org/)

    ```sh
    npm run lint
    ```

## Deploy your own copy to GitHub Pages

1. Fork the repository
2. (Optional) Change the `base` path in `vite.config.ts` to the same name as the repository.
3. Push your changes to the `main` branch, `GitHub Actions` will automatically build and deploy to `GitHub Pages`.
4. (Optional) If you want to deploy using a different branch, update `Deployment branches and tags` in the repository settings `Environment/Configure github-pages`.

## Credit

- [Awesome CV](https://github.com/posquit0/Awesome-CV)
