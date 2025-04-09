# Blog API

Une API RESTful simple pour gérer un blog avec des utilisateurs, des articles et de l’authentification via JWT. Développée en **Node.js + Express** et connectée à une base **MongoDB**.

## 🧩 Fonctionnalités

- Authentification via JWT (register/login)
- Création, lecture, mise à jour et suppression (CRUD) des articles
- Rôles utilisateurs : auteur, lecteur
- Middleware de sécurité pour protéger certaines routes
- Architecture MVC simple et claire

---

## ⚙️ Technologies utilisées

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- dotenv
- bcryptjs
- morgan (logger)
- cors

---

## 📦 Prérequis

- Node.js >= 14.x
- npm ou yarn
- MongoDB local ou cloud (ex: MongoDB Atlas)

---

## 🚀 Installation

```bash
# 1. Cloner le projet
git clone https://github.com/Adodo777/blog-api.git
cd blog-api

# 2. Installer les dépendances
npm install

# 3. Créer un fichier .env
cp .env.example .env

# 4. Lancer le projet
npm run dev
