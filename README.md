# CarbonTrackr - Carbon Footprint Tracker

## Overview
CarbonTrackr is a minimal proof-of-concept web application that helps users track and offset their carbon footprint based on their travel data. The application calculates the carbon footprint and provides AI-generated recommendations to reduce emissions.

## Technologies Used

### Frontend
- **React.js**
- **Zustand** (for state management)
- **Shadcn** (for UI components)
- **TypeScript**
- **Vite** (for fast development)

### Backend
- **Node.js**
- **Express.js**
- **Google AI Studio**
- **@google/generative-ai SDK**

## Deployment

### Frontend
Deployed on **Vercel**: [CarbonTrackr Frontend](https://carbon-kh75k9q98-sgkolipyakas-projects.vercel.app/)

### Backend
Deployed on **Render**: [CarbonTrackr Backend](https://carbon-trackr-backend.onrender.com)


## Features
- **Carbon Footprint Calculator**: Users can input their travel details (mode, distance, fuel type, passengers) to calculate their carbon footprint.
- **AI Recommendations**: The system generates recommendations to help users reduce their carbon emissions.
- **Local Storage**: All calculations and recommendations are stored using Zustand for persistence.
- **Minimal UI**: The focus is on functionality rather than aesthetics.

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x)
- npm or yarn

### Steps to Run Locally
### Frontend Setup
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173` (or the port Vite provides).


### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

## Application Deployment
The application is deployed on Vercel. You can access it here:
[CarbonTrackr Live](https://carbon-kh75k9q98-sgkolipyakas-projects.vercel.app/)

## Folder Structure Frontend
```
CarbonTrackr/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   ├── store/            # Zustand store for state management
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
├── public/               # Static assets
├── package.json          # Dependencies & scripts
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## Folder Structure Backend
```
CARBON-TRACKR-BACKEND/
│-- models/
│   ├── carbonModel.js
│-- routes/
│   ├── carbonRoute.js
│-- .env
│-- .gitignore
│-- db.js
│-- index.js
│-- package-lock.json
│-- package.json
│-- README.md
│-- sample.env.txt
```

## Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

## License
MIT License

---
🚀 **Happy Tracking!**

![Screenshot (152)](https://github.com/user-attachments/assets/dae6053d-c38b-480a-af8d-d78ec5fb947b)
![Screenshot (153)](https://github.com/user-attachments/assets/fb5016d9-8b5d-4abb-bffc-487ffe11a1ef)
![Screenshot (154)](https://github.com/user-attachments/assets/aa7f92ed-f981-4692-9075-5a33da44b7c7)




