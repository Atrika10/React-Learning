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
using useRef hook which will refer to those input boxes.

Ex : 
1. `const email = useRef(null)`
initial value null
2. in the input box from where we extract the data, write
 
    `ref={email}`

* Note : to stop preventing the loading use `preventDefault()` method inside form as we didn't write any onSubmit method.
