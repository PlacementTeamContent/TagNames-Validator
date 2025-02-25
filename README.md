
# **JSON Validator**

## **Description**
JSON Validator is a web-based React application designed to help users upload, validate, and process JSON files. It ensures that the uploaded files follow a proper format and highlights any errors in the file content. This app provides a user-friendly interface for validation, allowing users to validate JSON files for specific criteria, such as required fields and correct data types.

### **Key Features:**
- Upload JSON files for validation.
- Real-time error detection and reporting.
- Displays validation results with error details.
- Provides a loading spinner while processing.
- Displays a success message if the validation is successful.
- Reset functionality to restart the validation process.
- Responsive design to support different screen sizes.

---

## **Demo & Screenshots**

### **Live Demo**:
You can view the live demo of the application here: [Insert live demo link]

### **Screenshots**:
![Screenshot 1](path_to_screenshot_1.jpg)  
![Screenshot 2](path_to_screenshot_2.jpg)

---

## **Installation Guide**

To set up the project locally, follow these steps:

### **Prerequisites**:
1. Make sure you have **Node.js** installed on your machine. You can download it from [here](https://nodejs.org/).
2. Ensure **npm** (Node Package Manager) is installed. It comes with Node.js, but you can verify it by running:
   ```bash
   npm -v
   ```

### **Steps to Install**:
1. Clone the repository:
   ```bash
   git clone https://github.com/LakshmipathiNakka/Tag-Validator-2025.git
   ```
2. Navigate into the project directory:
   ```bash
   cd tag-validator
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

---

## **Usage Instructions**

Once the project is set up locally, follow these steps to interact with the application:

### **Key Functionalities**:
- **Upload JSON File**: Click on the "Upload Topics & Sub-Topics JSON" button and select a valid `.json` file from your computer.
- **Validate**: Once the file is uploaded, click on the "Validate" button to check if the JSON file is valid. The app will process the file and display either success or error messages.
- **Reset**: After validation, you can click on the **Reset** button at the bottom of the screen to start a new validation process with a new file.

---

## **Project Structure**

Here’s a breakdown of the project structure:

```
/project-root
│── /public
│── /src
│   │── /components
│   │   │── /common         (Reusable UI components like Button, Modal, Loader)
│   │   │── /pages          (Pages like JSONUploader, ValidationResults)
│   │   │── /utils          (Helper functions for JSON validation)
│   │── /assets             (Images, icons, etc.)
│   │── /styles             (Global styles, theme, animations)
│   │── App.js              (Main React component for the app)
│   │── index.js            (Entry point for React app)
│── package.json            (Contains project dependencies)
│── README.md               (This file)
```

### **Description of Directories/Files**:
- `/src/components`: Contains all the React components used in the app, like the file upload UI and validation result display.
- `/src/utils`: Contains utility functions, such as JSON validation logic.
- `/public`: Contains the static files, including `index.html`.
- `/src/styles`: Global styles and animations used across the app.
- `App.js`: Main component that manages the app flow and renders other components.
- `package.json`: Lists the dependencies required for the project and other project metadata.

---

## **Technologies Used**

This project utilizes the following technologies:
- **React.js**: Frontend framework used to build the user interface.
- **React Router**: For managing navigation and routing in the app.
- **JavaScript (ES6+)**: Language used to build the application logic.
- **CSS/SCSS**: For styling the components and adding animations.
- **Bootstrap**: For responsive design and styling (spinner component).
- **FileReader API**: For reading files and parsing JSON data.
- **npm**: To manage project dependencies.

---



## **Contributing Guidelines**

We welcome contributions from the community. If you want to contribute to this project, please follow these steps:

1. **Fork the repository** on GitHub.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/LakshmipathiNakka/Tag-Validator-2025.git
   ```
3. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature-name
   ```
4. **Make your changes** and commit them:
   ```bash
   git commit -m "Describe your changes"
   ```
5. **Push your changes**:
   ```bash
   git push origin feature-name
   ```
6. **Create a Pull Request**: Go to the original repository and open a pull request with your changes.

---

## **License & Acknowledgments**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

- **Third-Party Tools**:
  - [React.js](https://reactjs.org/) for building the user interface.
  - [Bootstrap](https://getbootstrap.com/) for responsive UI components.
  - [React Router](https://reactrouter.com/) for routing between pages.

---

## **Contact Information**

If you have any questions or need further assistance, feel free to reach out:

- Email: lakshmeepathin184@gmail.com
- GitHub: https://github.com/LakshmipathiNakka

---
