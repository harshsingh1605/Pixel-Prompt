# **Image Generation using Prompt with User Authentication**

This project is a **Node.js/Express** backend application that provides secure user authentication (JWT-based) and an image generation endpoint. The project uses **MongoDB** as the database and implements routes for user registration, login, credits management, and image generation.

---

## **Features**

1. **User Authentication**:
   - Users can register and log in.
   - JWT (JSON Web Token) is used for securing routes.

2. **Credit Management**:
   - Users are provided with a default credit balance on registration.
   - Credits are required to access the image generation functionality.

3. **Image Generation**:
   - Authenticated users can generate images via a POST request.
   - Each image generation deducts credits from the user's balance.

4. **Middleware**:
   - A custom middleware ensures secure access by verifying JWT tokens.

---

## **Technologies Used**

- **Node.js** & **Express.js**: Backend framework.
- **MongoDB**: Database to store user information.
- **Mongoose**: ODM for MongoDB.
- **Bcrypt.js**: For password hashing.
- **JWT (jsonwebtoken)**: For secure user authentication.
- **dotenv**: To manage environment variables.
- **Cors**: To allow cross-origin requests.

---

## **Project Setup**

### **1. Prerequisites**
Ensure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud-based like MongoDB Atlas)

---

### **2. Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/image-generation-api.git
   cd image-generation-api
