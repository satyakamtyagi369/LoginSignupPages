Here's the content for your **README.md** file, tailored to your project:

---

# User Authentication System

This project is a **User Authentication System** built using **Node.js**, **Express**, and **MongoDB**. It allows users to sign up and log in with a unique username and password.

---

## Features

- **Signup Page**: Allows users to create a new account.
- **Login Page**: Enables existing users to log in.
- **MongoDB Integration**: Uses **MongoDB Atlas** as the database to store user credentials.
- **Error Handling**: Handles duplicate usernames and invalid login attempts gracefully.
- **Static File Serving**: Serves static HTML files for the signup and login forms.
  
---

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building APIs and handling routes.
- **MongoDB Atlas**: Cloud-based NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **Body-Parser**: Middleware for parsing form data.
- **HTML & CSS**: Frontend pages for signup and login.

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   ```
2. **Navigate to the project directory**:
   ```bash
   cd <project_folder>
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up MongoDB Atlas**:
   - Create a MongoDB Atlas cluster.
   - Replace the connection string in `server.js` with your MongoDB URI:
     ```javascript
     mongoose.connect('<your_mongodb_connection_string>', {
         useNewUrlParser: true,
         useUnifiedTopology: true
     });
     ```
5. **Run the application**:
   ```bash
   node server.js
   ```
6. **Access the application**:
   ```
   http://localhost:3000
   ```

---

## API Endpoints

### **GET /**  
Serves the signup page.

### **GET /login**  
Serves the login page.

### **POST /signup**  
Registers a new user in the database.

### **POST /login**  
Authenticates a user with the provided credentials.

---

## Folder Structure

```plaintext
|-- public/                  # Static assets (CSS, JS)
|-- views/                   # HTML files (signup.html, login.html)
|-- server.js                # Main server file
|-- package.json             # Project metadata and dependencies
```

---

## How to Use

1. **Sign up** with a unique username and password on the signup page.
2. **Log in** with the registered credentials on the login page.
3. If the credentials are correct, you will be welcomed; otherwise, an error message will be displayed.

---

## Known Issues

- Duplicate username handling: The application responds with an error message if a user tries to sign up with an existing username.
- The current implementation uses plaintext passwords; consider using a hashing mechanism (e.g., bcrypt) for enhanced security.

---

## Contribution

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

---

## License

This project is licensed under the MIT License.

---

## Author

**Satyakam Tyagi**  
Feel free to reach out for any questions or suggestions.

---

Let me know if you'd like any further customization or changes!
