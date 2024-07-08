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

#

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

### Let Us sign up our first user with firebase

- first validate email, password
- if, email & password is valid then proceed further else return
- for valid email & password
  - check is it sign up form or sign in form, write logic based on that
- Go to firebase documentation
  - search Authentication -> web

* Note : As `getAuth()`is an API which is gonna use almost every api call, so make it in a centralize way. & import from that file where you want.

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

  #


### Important API given by firebase onAuthStateChanged
  - whenever we have to handle  sign in/ sign out user or anything related to authentication we can use this api rather than dispatching action again & again from different place.

  Documentation : https://firebase.google.com/docs/auth/web/manage-users

* use this api in root level (although you can use this anywhere you want to)

* this api is kind of eventListener ;
### How ?
we want to call it once, so we will use inside `useEffect` hook.
```

```

#

* Note Just for practice
### Adding Movie slice to the store
- create a movie slice
    - using `createSlice`
- add the slice to the store
    - by add movieSlice's reducer in store's reducer
- dispatch action by passing the data into the store
    - dispatch (actionName (data coming from api) )

### Creating a custom hook
- the name of the custom hook must have `use` in start
  - ex : `useCustomHookName`
- Now put it all the code inside 'useCustomHookName' function 
- export default useCustomHookName;