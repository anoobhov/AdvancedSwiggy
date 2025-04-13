# 🍔 Swiggy Clone

This project is a Swiggy Clone built using React and Parcel. It dynamically fetches data using Swiggy's live APIs (captured via browser network inspector). It is **not a static site**—all restaurant and food data are rendered dynamically using real-time API calls.

## 🔧 Tech Stack

- **Frontend**: React.js
- **State Management**: Redux Toolkit (used for cart functionality)
- **Bundler**: Parcel
- **Data Source**: Swiggy Live APIs (accessed via Network Inspector)

## ✅ Features Implemented

- Dynamic fetching of restaurant listings and menus via Swiggy APIs
- Real-time rendering of food items and restaurant details
- Cart management using Redux Toolkit

## 🧩 Functionalities to be Added

- 🔍 **Search**: Allow users to search for restaurants or dishes
- 🛒 **Improved Cart UI**: Show total price, quantity updates, etc.
- 📱 **Responsive Design**: Enhance for mobile and tablet viewports
- 💬 **User Reviews**: Display reviews (if retrievable from APIs)
- 📦 **Checkout Flow**: Add mock or dummy payment process

## 📦 Installation

```bash
git clone https://github.com/your-username/swiggy-clone.git
cd swiggy-clone
npm install
npm parcel src/index.html
