# E-Commerce Site Demo using React + Redux

A simple **React + Redux + TypeScript** demo built with **Vite**.  
This project demonstrates clean architecture patterns, state management, and API integration in a modular way. It shows how a React project structure can be set up to be modular with high cohesion and low coupling. 

---

## Tech Stack

- ⚛️ **React 19**
- ⚡ **Vite**
- 🧠 **Redux Toolkit (Ducks + Thunks)**
- 🧩 **TypeScript**
- 🌐 **React Router**
- 🎨 **Modular Architecture** - Inspired by Feature-Sliced Design (https://feature-sliced.design/)

---

## 🧱 Features

- Product list with live API (`https://fakestoreapi.com`)  
- Dynamic product detail pages  
- Async state with loading/error handling  
- Centralized route configuration 
- Reusable UI components and clean separation of concerns

---

## 🧰 Project Structure

src/
├── app/ # Store, router, and global config
├── modules/ # Ducks (state logic per domain)
├── pages/ # Page-level React components
├── shared/ # Reusable UI and utilities


---

## 🧪 Run Locally

```bash
# Clone the repo
git clone https://github.com/<your-username>/<repo-name>.git

# Install dependencies
npm install

# Start the dev server
npm run dev

# Then open:
http://localhost:5173

```

## About

This repository is a frontend architecture demo.
It’s designed to show how to structure a scalable React + Redux project with clear naming, modularity, and modern best practices.

Feel free to explore or reach out if you’re interested in frontend architecture discussions: jfranciscordova@gmail.com