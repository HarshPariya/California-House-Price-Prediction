# California House Price Prediction Web App 🏡

A modern, full-stack web application that predicts California house prices based on block group features. This project showcases a decoupled architecture using a **Next.js (React)** frontend and a **Flask (Python)** REST API backend, powered by an **XGBoost** machine learning model (R² = 85%).

## Features ✨
- **Machine Learning Integration**: Accurate price predictions using a pre-trained XGBoost model.
- **Modern UI/UX**: A sleek, responsive, glassmorphic UI built with Tailwind CSS.
- **Interactive Data Visualization**: Real-time comparative charts using Recharts to visualize how inputs compare against California averages.
- **Decoupled Architecture**: Separation of concerns between the frontend UI and the backend API, allowing for scalable deployment.

## Tech Stack 🛠️
### Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- Recharts
- Axios
- Lucide React (Icons)

### Backend
- Python
- Flask & Flask-CORS
- XGBoost
- Scikit-Learn
- Pandas & NumPy

## Running the Application Locally 🚀

You will need two terminal windows to run both the frontend and backend servers simultaneously.

### 1. Start the Flask Backend
Open a terminal in the root directory of this project:
```bash
# Install dependencies
pip install -r requirements.txt

# Start the Flask API
python app.py
```
The backend API will be available at `http://localhost:5000`.

### 2. Start the Next.js Frontend
Open a **second** terminal and navigate to the `frontend` folder:
```bash
cd frontend

# Install Node modules
npm install

# Start the development server
npm run dev
```
The frontend UI will be available at `http://localhost:3000`.

## Deployment Instructions 🌍

This repository is structured to easily deploy the backend and frontend separately.

### Deploying the Backend (Render)
1. Push this repository to GitHub.
2. Log in to [Render](https://render.com/) and create a new **Web Service**.
3. Connect your GitHub repository.
4. Set the build command: `pip install -r requirements.txt`
5. Set the start command: `gunicorn app:app`
6. Deploy and copy the resulting API URL.

### Deploying the Frontend (Vercel)
1. Log in to [Vercel](https://vercel.com/) and click **Add New -> Project**.
2. Import this GitHub repository.
3. Set the **Root Directory** to `frontend`.
4. In the Environment Variables section, add:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: `[YOUR_RENDER_BACKEND_URL]` (from the previous step)
5. Deploy. Your modern UI is now live!

## License
MIT License
