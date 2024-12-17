# Netflix GPT
    - Create React App
    - Configured Tailwind
    - Header
    - Routing
    - Login Form
        - Formik Library for forms
    - Sign Form
    - Form Validation
    - useRef Hook
    - Firebase Setup
    - Deploying our app to production
    - Create Sign up User Account
    - Implement Sign in user API
    - Created Redux store with userSlice
    - Implemented Signout
    - bugFix:- If the user is not logged in then redirect to the "/" and if loginned once and save the password then direct redirect to the "/browser" 
    - Movie API working fine (take from TMDB)
    - Start making browser page
    - Created custom hook for nowPlaying Movies
    - Planning for main container and Secondary container
    - Fetch data for trailer video
    - Embedded the youtube video & make it autoplay and mute
    - We added tailwind css to make it usable
    - Build Secondary component
    - Built Movie List
    - Built Movie Card
    - TMDB img CDN found
    - Made Browse page with Tailwind
    - usePopularMovies and other movies categories with custom hooks






# Features
    -Login/Signup Page
        -Sign Up/ Sign In Page
        -redirect to Browser Page

    - Browser Page (after authentication)
        - Header
        - Main movie
            - Movie Trailer in background
            - Title and description above trailor
        - Movie Suggestion
            - All movies in that suggestion in carousel
    
    - Netflix GPT
    - Movie Suggestions

  <React.StrictMode>:- We see our result twice in the console due to this strict mode because it want to recheck our
  things twice, which is fine but it will not same in the production level. When our code will push to the production level then it will only show once.
