## Intall react app
`npm create vite@latest`

`cd yourproject`

`npm install`

`npm run dev`

Vite is a bundler which has more option, it support react, Vanila JS, preact, solid alot of things. so we need to tell what we want to build or what we want to bundle together.
Vite only brought only file not install those files, we've to install those file using npm install

## setup tailwind
Go to tailwind official website -> choose your framework -> follow given steps

configured tailwind.config.js

Now we can use tailwind in our project

## Features

## Setup React Router

Docs : https://reactrouter.com/en/main/start/tutorial

1> npm i react-router-dom

2> Go to body.jsx (your main file)

3> `import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";`

4> setup router using createBrowserRouter inside main function

Ex : `
   
   const router = createBrowserRouter(
 
    [
    {
      path : "/",
      element : <Login/>,
    },
    {
      path : "/browse",
      element : <Browse/>
    }]
    )
    
`

5 > Add RouterProvider inside return

` <RouterProvider router={appRouter}/> `

### Convert Sign in form to Sign up form using Usestate hook

### How do you write validation inside forms
to validate the data, first we have to get the data.
How will we get ?
using `useRef` hook which will refer to those input boxes.

Ex : 
1. `const email = useRef(null)`
initial value null
2. in the input box from where we extract the data, write
 
    `ref={email}`

* Note : to stop preventing the loading use `preventDefault()` method inside form as we didn't write any onSubmit method.


## Authentication

To Authenticate we need a backend, to build this project we'll be using firebase.
* Go to Firebase website
* create a project -> register your app
* To add firebase sdk
  * npm install firebase
  * write firebase configuration to connect to your database (Steps will be there)

* Enable Authentication inside firebase app
  * Get Started
  * choose sign-in provider
  * like I allow you my user to registered themselfs using email & password do I enable that option.
  * Now I can registered my users & it'll be showing inside users tab


## How to deploy a web app to Firebase

 * install firebase CLI using `npm install -g firebase-tools`  [ This command enables the globally available firebase command.]

 * `npm install firebase`
 
 * `firebase login`

    - if it is restrict you, then open your powershell (run as administrator)
      - Set-ExecutionPolicy RemoteSigned (as initially your ExecutionPolicy is Restricted, now it'll be RemoteSigned)
  * `firebase init`
  
    - it will ask you some question to setup your project
     * NOTE : use `build` as your public directory if you are using `CRA`
     * NOTE : use `dist` as your public directory if you are using `react+vite`

* Before deploy our project, add `"predeploy" : ["npm run build"]` in firebase.json
  - `npm run build`   [ will run before deployment ]

* Finally run last step
  - `firebase deploy`