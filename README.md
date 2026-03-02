
# 🌳 Academic Tree Visualization

An interactive web app for visualizing academic relationships and hierarchies as a dynamic tree. Built with **React**, **Vite**, and **Tailwind CSS** for a modern, responsive, and engaging experience.

---

## ✨ Features

- **Interactive Tree Canvas**: Zoom, pan, expand/collapse nodes
- **Smart Zoom**: Smooth navigation for large trees
- **Theme Support**: Light & dark modes
- **Responsive Design**: Works on all devices
- **Info Panel**: Detailed node information
- **Landing Screen**: Welcoming intro & instructions

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Controls.jsx
│   │   ├── Header.jsx
│   │   ├── InfoPanel.jsx
│   │   ├── LandingScreen.jsx
│   │   ├── TreeCanvas.jsx
│   │   ├── TreeNode.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── academicData.js
│   ├── hooks/
│   │   └── useSmartZoom.js
│   ├── utils/
│   │   └── treeLayout.js
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
```

---

## 🚀 Getting Started

1. **Install dependencies**
	```bash
	npm install
	```
2. **Run the development server**
	```bash
	npm run dev
	```
3. **Build for production**
	```bash
	npm run build
	```

---

## 🛠️ Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🎨 UI/UX Suggestions

Enhance interactivity and user experience with:

- **Animated Node Expansion**: Smooth transitions for expanding/collapsing nodes
- **Hover Effects**: Highlights and tooltips for nodes
- **Drag & Pan Canvas**: Move the tree with mouse/touch
- **Contextual Menus**: Right-click actions on nodes
- **Breadcrumb Navigation**: Show path from root to selected node
- **Search & Filter**: Quickly locate or filter nodes
- **Dark/Light Mode Toggle**: Easy theme switching
- **Responsive Controls**: Floating action buttons for zoom, reset, theme toggle
- **Animated Loading States**: Skeleton loaders/spinners for data fetching
- **Accessible Design**: Keyboard navigation & screen reader support

---

## 📜 License

MIT License

---

> **Contributions and suggestions are welcome!**
