# 🏠 California House Price Prediction Using Machine Learning

🚀 **Live Demo:** [https://california-house-price-prediction-g4vbqt29g.vercel.app/](https://california-house-price-prediction-g4vbqt29g.vercel.app/)

## 📌 Project Overview

This project predicts California house prices using Machine Learning techniques and compares multiple regression algorithms to identify the best-performing model. The project has been upgraded into a full-stack modern web application, allowing users to make real-time predictions through a beautiful interface.

The project covers:
- Data Cleaning
- Exploratory Data Analysis (EDA)
- Correlation Analysis
- Feature Importance Analysis
- Model Training & Evaluation
- Model Comparison
- House Price Prediction
- **Full-Stack Web App (Next.js + Flask)**

The objective is to accurately predict median house values using demographic and geographic features from the California Housing Dataset, and deliver these predictions via a professional web dashboard.

---

# 📊 Dataset Information

**Dataset:** California Housing Dataset
**Source:** Scikit-Learn
**Records:** 20,640
**Features:** 8
**Target Variable:** MedHouseVal

## Features

| Feature | Description |
|----------|-------------|
| MedInc | Median Income |
| HouseAge | Median House Age |
| AveRooms | Average Rooms |
| AveBedrms | Average Bedrooms |
| Population | Population in Area |
| AveOccup | Average Occupancy |
| Latitude | Latitude Coordinate |
| Longitude | Longitude Coordinate |

---

# 🛠️ Technologies Used

### Machine Learning & Data Science
- Python, Pandas, NumPy
- Matplotlib, Seaborn
- Scikit-Learn, XGBoost
- Google Colab

### Full-Stack Web Development
- **Frontend**: Next.js (React), Tailwind CSS, Recharts, Lucide Icons, Axios
- **Backend**: Python, Flask, Flask-CORS, Gunicorn

---

# 🌐 Web Application Architecture

To make the machine learning model accessible and user-friendly, this project includes a completely decoupled, production-ready web application:

### 1. Flask API Backend
The `app.py` script serves the trained XGBoost model as a REST API. It receives JSON payloads with house features, standardizes them, and returns a real-time price prediction. It uses `flask-cors` to allow seamless integration with the frontend.

### 2. Next.js Frontend Dashboard
A modern, glassmorphic UI built with Next.js and Tailwind CSS (located in the `frontend/` folder). It features:
- Interactive forms for users to input block group features.
- Live prediction results formatted in standard USD.
- Dynamic data visualization using `recharts` to compare the user's input features against California state averages.

---

# 🚀 Running the Web App Locally

You will need two terminal windows to run both the frontend and backend servers simultaneously.

### Start the Flask Backend
Open a terminal in the root directory:
```bash
pip install -r requirements.txt
python app.py
```
*(Runs on http://localhost:5000)*

### Start the Next.js Frontend
Open a **second** terminal and navigate to the `frontend` folder:
```bash
cd frontend
npm install
npm run dev
```
*(Runs on http://localhost:3000)*

---

# 🌍 Deployment Guide

This project is structured for easy deployment to cloud platforms:

**Backend (Render):**
1. Connect your GitHub repository to [Render](https://render.com/).
2. Set Build Command: `pip install -r requirements.txt`
3. Set Start Command: `gunicorn app:app`

**Frontend (Vercel):**
1. Connect your GitHub repository to [Vercel](https://vercel.com/).
2. Set the Root Directory to `frontend`.
3. Add an Environment Variable: `NEXT_PUBLIC_API_URL` pointing to your deployed Render URL.

---

# 🔍 Data Cleaning

Performed data quality checks:
- Checked Missing Values
- Checked Duplicate Records
- Verified Data Types
- Validated Dataset Integrity

### Results
```text
Missing Values = 0
Duplicate Rows = 0
```

---

# 📈 Exploratory Data Analysis (EDA)

### Distribution Analysis
Analyzed the distribution of house prices to understand data spread and identify potential outliers.

### Correlation Analysis
Created a correlation heatmap to identify relationships among features.

### Key Finding
```text
Correlation (MedInc, MedHouseVal) = 0.69
```
Median Income showed the strongest correlation with house prices.

---

# 📊 Feature Importance Analysis

Using XGBoost Feature Importance:

| Rank | Feature |
|--------|---------|
| 1 | MedInc |
| 2 | Longitude |
| 3 | Latitude |
| 4 | AveOccup |
| 5 | AveRooms |

### Insight
Income level and geographic location are the strongest indicators of housing prices.

---

# 🤖 Machine Learning Models

The following models were trained and evaluated:

1. **Linear Regression**: Baseline regression model used for comparison.
2. **Gradient Boosting Regressor**: Boosting-based ensemble model for improved performance.
3. **Random Forest Regressor**: Tree-based ensemble learning model.
4. **XGBoost Regressor**: Advanced gradient boosting algorithm optimized for speed and performance.

---

# 📈 Model Performance

| Model | R² Score |
|---------|---------:|
| Linear Regression | 0.5758 |
| Gradient Boosting | 0.8020 |
| Random Forest | 0.8051 |
| 🏆 **XGBoost** | **0.8503** |

---

# 🏆 Best Model: XGBoost Regressor

### Performance Metrics
```text
MAE  = 0.3275
RMSE = 0.5053
R²   = 0.8503
```

### Interpretation
The XGBoost model explains approximately **85.03%** of the variation in California house prices, making it the best-performing model in this project.

---

# 📉 Visualizations

The Jupyter Notebook includes:
- House Price Distribution Plot
- Correlation Heatmap
- Feature Importance Graph
- Actual vs Predicted Plot
- Model Comparison Table

---

# 🎯 Key Insights

- Median Income is the strongest predictor of house prices.
- Geographic location significantly influences housing values.
- Ensemble models outperform traditional Linear Regression.
- XGBoost achieved the highest predictive performance.

---

# 🚀 Future Improvements

Potential enhancements:
- Hyperparameter Tuning using GridSearchCV
- Cross Validation
- Advanced Feature Engineering
- Docker Containerization
- AWS/Azure/GCP Cloud Native Deployment

---

# 📂 Project Structure

```text
California-House-Price-Prediction/
│
├── California_House_Price_Prediction.ipynb  # ML Training Notebook
├── README.md
├── requirements.txt
├── app.py                                   # Flask API Backend
├── house_price_model.pkl                    # Trained XGBoost Model
│
├── frontend/                                # Next.js Frontend App
│   ├── src/
│   │   ├── app/
│   │   └── components/
│   ├── package.json
│   ├── tailwind.config.ts
│   └── next.config.ts
│
└── images/                                  # EDA Visualizations
    ├── distribution_plot.png
    ├── correlation_heatmap.png
    ├── feature_importance.png
    ├── actual_vs_predicted.png
    └── model_comparison.png
```

---

# 💡 Skills Demonstrated

- Data Cleaning & Exploratory Data Analysis (EDA)
- Data Visualization
- Feature Engineering
- Machine Learning & Regression Modeling
- Ensemble Learning (Random Forest, Gradient Boosting, XGBoost)
- Python API Development (Flask)
- Modern Web Development (React, Next.js, Tailwind CSS)
- Full-Stack Architecture & Integration

---

# 👨💻 Author

**Harsh Pariya**  
Aspiring AI/ML Engineer


⭐ *If you found this project useful, consider giving it a star!*
