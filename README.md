README.md for React Frontend (Copy & Save inside your frontend/ folder)
markdown
Copy
Edit
# Asset Inventory Frontend

This is the **React.js frontend** for the Asset Inventory Management system.  
It connects to a Spring Boot backend and allows users to **view, add, edit, and delete** assets such as equipment, furniture, etc.

---

## 🚀 Features

- 📋 View list of assets
- ➕ Add new assets
- ✏️ Edit asset information
- ❌ Delete assets
- 🌗 Dark/Light theme toggle
- 📦 Export data (CSV / PDF) *(upcoming)*
- 📱 Responsive design

---

## ⚙️ Tech Stack

- React 18
- Tailwind CSS
- Axios
- React Router
- ShadCN UI (optional for UI)
- HTML5 + CSS3

---

## 📁 Project Structure

frontend/
├── public/
├── src/
│ ├── components/ # Reusable components (e.g., Navbar, Sidebar)
│ ├── pages/ # Pages like Dashboard, AssetList, etc.
│ ├── services/ # API integration (axios)
│ ├── App.jsx
│ └── main.jsx
├── .env
├── package.json
└── tailwind.config.js

yaml
Copy
Edit

---

## 🔗 Backend API Connection

Make sure the backend is running at:

http://localhost:8080

vbnet
Copy
Edit

In your React app, use `axios` to call APIs like:

```js
axios.get("http://localhost:8080/api/assets")
💻 How to Run
1. Install dependencies
bash
Copy
Edit
npm install
2. Start the development server
bash
Copy
Edit
npm run dev
The app will run at:

arduino
Copy
Edit
http://localhost:5173
🌱 Sample .env File
bash
Copy
Edit
VITE_API_BASE_URL=http://localhost:8080/api
Then use it like this in your code:

js
Copy
Edit
axios.get(`${import.meta.env.VITE_API_BASE_URL}/assets`);
📄 License
This project is created by Sayantan Dutta for learning and demo purposes.

yaml
Copy
Edit

---

## ✅ What to Do:

1. Save this file as `README.md` inside your **`frontend/` folder**.
2. In the terminal:
```bash
git add README.md
git commit -m "Add README for frontend"
git push