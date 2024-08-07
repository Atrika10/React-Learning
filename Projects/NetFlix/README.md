#### Covered
- create react+vite app
- Congigured TailwindCss
- Header
- Routing of App
- Login Form
- Sign up Form
    - used useState hook
- Form Validation using useRef hook
- Showing error msg using useState hook
- firebase setup
- Deployed our app to prouction
- Create signup user account
- created our redux store 
    - userSlice
- Bug fix : user display name & photoURL
- Bug fix : if the user is not logged in redirect user to '/' page
            & redirect to '/browse' page if user logged in 
- Unsubscribe to the onAuthStateChange Callback  (good practice)
- Adding constant File for hard coded value
- Registered for tmdb & get access token
- Get Data from tmdb now playing movies list
- created a custom hook and shifted NowPlayingMovies into that hook
- Main Container & Video Title page created
- VideoBack Ground page is created by fetching videos API
    - extracting key & then get youtube video accordingly
- add trailer into the store
- Complete css of main container
- Setup secondary container
- created movielist & moviecard
- displayed now playing movies horizontally with proper css
- created more custom hook for top rated, popular & upcoming movies
- update movie slice with new 3 action
- rendered all categories movies in secondary container
- search page for getting movie recommended from chatgpt
- created new slice for gptSearch
- Added multi language support in gpt search page
- created new slice for app configurations (for lang, theme etc)

## Features

- Plan Browse Page
- Browse page will be in 2 part    
    - Main container
        - Video Background
            - Navbar
            - Search
            - notification
        - Video Title
            - play
            - more info
    - Secondary Container
        - Movielist * n number
            - Trending Now
            - Now playing
            - Released in past year
            - Documentaries  etc
        - MovieCard * n number
- Search page for getting result from open AI gpt api
    - a search button will help us to redirect to that page

#### Note : create a config slice which will contain some app level configuration like language prefarence, theme - dark theme, light theme, user pref etc