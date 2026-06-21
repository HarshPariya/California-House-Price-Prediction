"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Home, MapPin, Users, DollarSign, Activity, TrendingUp } from "lucide-react";

const AVERAGE_CA_STATS = {
  MedInc: 3.87,
  HouseAge: 28.6,
  AveRooms: 5.4,
  AveBedrms: 1.1,
  Population: 1425,
  AveOccup: 3.0,
};

export default function Predictor() {
  const [formData, setFormData] = useState({
    MedInc: 3.5,
    HouseAge: 25,
    AveRooms: 5,
    AveBedrms: 1,
    Population: 1000,
    AveOccup: 3,
    Latitude: 34.0,
    Longitude: -118.0,
  });

  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value) || 0,
    });
  };

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
      // Always connect directly to the live Render backend!
      // This bypasses the need for you to run python locally on your machine.
      let rawApiUrl = "https://california-house-price-prediction-ycx0.onrender.com";

      // Defensively remove any quotes (if added in Vercel), spaces, and trailing slashes
      const apiUrl = rawApiUrl.replace(/["']/g, "").trim().replace(/\/+$/, "");
      console.log("Making request to:", `${apiUrl}/api/predict`);
      const response = await axios.post(`${apiUrl}/api/predict`, formData);
      if (response.data.status === "success") {
        setPrediction(response.data.prediction);
      } else {
        setError(response.data.message || "An error occurred");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  // Data for the comparison chart
  const comparisonData = [
    {
      name: "Med Income",
      Input: formData.MedInc,
      Average: AVERAGE_CA_STATS.MedInc,
    },
    {
      name: "House Age",
      Input: formData.HouseAge,
      Average: AVERAGE_CA_STATS.HouseAge,
    },
    {
      name: "Ave Rooms",
      Input: formData.AveRooms,
      Average: AVERAGE_CA_STATS.AveRooms,
    },
    {
      name: "Ave Bedrms",
      Input: formData.AveBedrms,
      Average: AVERAGE_CA_STATS.AveBedrms,
    },
    {
      name: "Ave Occup",
      Input: formData.AveOccup,
      Average: AVERAGE_CA_STATS.AveOccup,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 font-sans text-gray-900">
      <header className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 flex items-center justify-center md:justify-start">
          <Home className="mr-3 h-10 w-10 text-blue-600" />
          California House Price Predictor
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Powered by XGBoost & Next.js. Enter the block group features below to get a real-time price prediction.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Form */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-50">
          <div className="flex items-center mb-6">
            <Activity className="h-6 w-6 text-indigo-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Property Details</h2>
          </div>
          
          <form onSubmit={handlePredict} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Median Income ($10k)</label>
                <input
                  type="number"
                  step="0.01"
                  name="MedInc"
                  value={formData.MedInc}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">House Age (Years)</label>
                <input
                  type="number"
                  name="HouseAge"
                  value={formData.HouseAge}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Avg Rooms</label>
                <input
                  type="number"
                  step="0.1"
                  name="AveRooms"
                  value={formData.AveRooms}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Avg Bedrooms</label>
                <input
                  type="number"
                  step="0.1"
                  name="AveBedrms"
                  value={formData.AveBedrms}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Population</label>
                <input
                  type="number"
                  name="Population"
                  value={formData.Population}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Avg Occupancy</label>
                <input
                  type="number"
                  step="0.1"
                  name="AveOccup"
                  value={formData.AveOccup}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" /> Latitude
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="Latitude"
                  value={formData.Latitude}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" /> Longitude
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="Longitude"
                  value={formData.Longitude}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-indigo-200 transform transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <TrendingUp className="mr-2 h-5 w-5" />
              )}
              {loading ? "Analyzing..." : "Predict Price"}
            </button>
            
            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg border border-red-100 text-sm">
                {error}
              </div>
            )}
          </form>
        </div>

        {/* Right Column - Results and Charts */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Prediction Result Card */}
          <div className="bg-gradient-to-br from-gray-900 to-indigo-950 p-8 rounded-2xl shadow-xl shadow-indigo-900/20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-indigo-200 font-semibold mb-2 flex items-center">
                  <DollarSign className="h-5 w-5 mr-1" /> Estimated Value
                </h3>
                {prediction !== null ? (
                  <div className="flex items-baseline">
                    <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                      ${(prediction * 100000).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                ) : (
                  <span className="text-4xl font-bold text-gray-500">Waiting for input...</span>
                )}
              </div>
              <div className="hidden md:block">
                <div className="h-24 w-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Home className="h-10 w-10 text-white/80" />
                </div>
              </div>
            </div>
            
            {prediction !== null && (
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-indigo-200 text-sm">
                  Model confidence based on XGBoost regressor (R² = 85%). Values are estimates for a typical house in the specified block group.
                </p>
              </div>
            )}
          </div>

          {/* Charts Card */}
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-50 flex-grow">
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-indigo-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Feature Comparison vs CA Average</h2>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: '#f3f4f6'}}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="Input" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={30} />
                  <Bar dataKey="Average" fill="#93c5fd" radius={[4, 4, 0, 0]} barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
