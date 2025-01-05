# Migrainez: Migraine Management Web Application

## Overview
This project is a comprehensive web application designed to assist users in managing migraines. The application offers several features, including the ability to book appointments with doctors, access curated YouTube videos and research resources, use a migraine detection model, and contact the development team for support.

The project was developed using the **MERN stack**:
- **MongoDB**: For storing and managing user and appointment data.
- **Express.js**: For backend API and server functionality.
- **React.js**: For the frontend user interface.
- **Node.js**: For running the backend server.

### Features
1. **Book Appointments**: Users can schedule appointments with doctors, and the details are stored in a MongoDB database.
2. **Migraine Detection Model**: Users can upload relevant data for analysis, and the model predicts the likelihood of migraines.
3. **Resources**: Curated YouTube videos and research papers related to migraines are available for user education.
4. **Contact Us**: A simple contact form to reach out to the team for feedback or assistance.

---

## How to Set Up and Run the Project

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or later)
- **npm** or **yarn**
- **MongoDB**

### Steps to Start
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/migraine-management.git
   cd migrainez
   ```

2. **Set Up the Backend**
   ```bash
   npm install
   ```
   - Create a `.env` file with the following:
     ```env
     MONGODB_CONN_STRING=your_mongodb_connection_string
     ```
   - Start the backend server:
     ```bash
     noder server.js
     ```

3. **Set Up the Frontend**
   ```bash
   cd my-app
   npm install
   ```
   - Start the React development server:
     ```bash
     npm run dev
     ```

4. **Access the Application**
   - Open your browser and go to `http://localhost:3000` to view the application.

---

## Usage
### Booking Appointments
- Navigate to the "Book Appointment" page.
- Fill in your name, email, phone number, and a message.
- Click "Book" to schedule an appointment.

### Migraine Detection
- Navigate to the "Migraine Detection" page.
- Upload the required input data and click "Submit" to get predictions from the model.

### Resources
- Visit the "Resources" section to access YouTube videos and relevant research papers on migraines.

### Contact Us
- Use the contact form at the bottom of the page to send a message to the development team.

---

## Technologies Used
- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Migraine Detection**: Machine learning model using PyTorch TabNet (details in the main folder)

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your branch and submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For questions or support, please reach out via the contact form on the application or email us at email IDs mentioned in the webpage. 

