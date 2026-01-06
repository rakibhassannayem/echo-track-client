# EcoTrack

![EcoTrack Homepage Screenshot](public/screenshots/ecoTrack.png)

# EcoTrack (Echo Track Client)

Live site (client): https://ecotrack-dd506.web.app  
API (server): https://echo-track-server.vercel.app

Description
-----------
EcoTrack (Echo Track Client) is a React frontend for tracking personal and community sustainability challenges. The app lets users discover challenges, join them, update progress, and view detailed activity history. It connects to the Echo Track API to read and modify user-challenge data.

Technology stack
----------------
- React (Vite)
- React Router (react-router-dom) for routing and loaders
- Tailwind CSS + DaisyUI for styling
- React Icons
- React Toastify for notifications
- Hosted (client) on Vercel (example live URL above)

Main features
-------------
- Join and track sustainability challenges with daily progress updates
- View and manage "My Activities" with progress bars and status
- Update activity progress via PATCH requests to the API
- Responsive UI with light/dark theme support
- Authentication-ready structure (email / OAuth can be integrated)
- Pages and components include activity details, activity creation/editing, and community tips

Notable files
-------------
- App entry: [src/main.jsx](src/main.jsx)  
- Routes & loaders: [src/router/Routes.jsx](src/router/Routes.jsx)  
- My Activities page: [src/pages/MyActivities/MyActivities.jsx](src/pages/MyActivities/MyActivities.jsx)  
- Update Activity page: [src/pages/UpdateActivity/UpdateActivity.jsx](src/pages/UpdateActivity/UpdateActivity.jsx)  
- Component example: [src/components/MyActivitiesCard/MyActivitiesCard.jsx](src/components/MyActivitiesCard/MyActivitiesCard.jsx)  
- Footer component: [src/components/Footer/Footer.jsx](src/components/Footer/Footer.jsx)

Dependencies
------------
Key dependencies (package.json):
- react
- react-dom
- react-router-dom
- tailwindcss
- daisyui
- react-icons
- react-toastify
- axios (if used) or fetch (native)

How to run locally
------------------
1. Clone the repo
   - git clone <your-repo-url>
2. Enter the client directory
   - cd echo-track-client
3. Install dependencies (Windows)
   - npm install
4. Create environment variables (if required)
   - Duplicate .env.example to .env and update API base URL or keys
     - Example: VITE_API_URL=https://echo-track-server.vercel.app
5. Start the dev server
   - npm run dev
6. Open the app in the browser
   - http://localhost:5173 (Vite default) or the terminal URL shown

Build and deploy
----------------
- Build for production:
  - npm run build
- Preview production build locally:
  - npm run preview
- Deploy to Vercel / Netlify by connecting the repository or uploading the build output.

Troubleshooting
---------------
- If a route using useLoaderData() returns undefined, check that your route loader returns parsed JSON (await res.json()) and that you import router helpers from "react-router-dom".
- For deferred loaders (defer()), wrap Promise-based loader data in <Suspense> and <Await> inside the page component.
- Use browser DevTools → Network to inspect API calls and responses (CORS, request URL, response body, and status).

Useful links
------------
- Live client: https://ecotrack-dd506.web.app  
- Live API: https://echo-track-server.vercel.app  
- Repo (client): https://github.com/rakibhassannayem/echo-track-client