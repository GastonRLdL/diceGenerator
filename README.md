# 🎲 diceGenerator

A dynamic and interactive frontend project that allows you to create and roll custom dice with various functionalities. Perfect for your board games, role-playing sessions, or simply for experimenting with random number generation!

---

## 🌟 Features

* **Variable Number of Faces:** Easily define how many faces your die will have (e.g., d4, d6, d8, d10, d12, d20, d100, or any custom count!).
* **Standard Mode (1-N):** A classic die that generates numerical results from 1 up to the specified number of faces.
* **Custom Mode:** Assign unique content to each face of your die. You can use text, numbers, or anything you can imagine (e.g., "Success", "Critical Fail", "Gold", "BOOM!").
* **Elimination Die Mode:** An advanced feature where once a result is rolled, that specific "face" is removed from the pool of possible outcomes for subsequent rolls. Ideal for unique game mechanics!
* **Minimalist (Terminal-Style) Interface:** Focused purely on functionality, with a dark background and bright green text aesthetic reminiscent of a classic code terminal.

---

### 🚀 How to Use

Since this project utilizes **ES Modules (`<script type="module">`)**, it **cannot be run by simply opening the `index.html` file directly** in your browser from your local file system (`file:///` protocol). To comply with browser security policies (CORS), the application must be served via a **local web server**.

#### Option 1: Using GitHub Codespaces (Recommended and Easiest)

If you are working within a GitHub Codespace (or any VS Code-based environment that integrates Live Preview):

1.  Open your Codespace for this repository.
2.  In the VS Code file explorer (left sidebar), right-click on the **`index.html`** file.
3.  Select the option **"Open with Live Preview"** (or "Show Live Preview").
4.  This will automatically start a development web server and open the application in a new browser tab or an integrated panel.

#### Option 2: Using a Local Web Server (Outside Codespaces / Local Development)

If you have cloned the repository to your local machine:

1.  **Ensure you have Python installed** (it's pre-installed on most operating systems).
2.  Open your terminal or command prompt.
3.  Navigate to the root directory of your `diceGenerator` project where `index.html` is located:
    ```bash
    cd /path/to/your/project/diceGenerator
    ```
4.  Start a simple HTTP server (for example, on port 8000):
    ```bash
    python3 -m http.server 8000
    # If you only have 'python' and not 'python3': python -m http.server 8000
    ```
5.  Open your web browser and navigate to the URL: `http://localhost:8000`
    The application should load and function correctly.

---

## 🛠️ Technologies Used

* **HTML5:** For the basic structure of the web page.
* **CSS3:** To apply the minimalist terminal-like styling.
* **JavaScript (ES6+):** Powers all the interactive logic of the dice, including face management, mode switching, and the rolling mechanism.

---

## 📈 Scalability & Future Enhancements

This project is developed with scalability in mind, making it easy to add new features and expand functionality. Potential future enhancements include:

* Saving and loading custom dice configurations.
* Dice rolling animations.
* Support for rolling multiple dice simultaneously.
* Roll history tracking.
* Accessibility options.

---

## 🤝 Contributing

Contributions are highly welcome! If you have ideas for improving the project, find a bug, or want to add a new feature, feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Make your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## 📧 Contact

Gastón Román - [gastonrldl@gmail.com](mailto:gastonrldl@gmail.com)

Project Link: [https://github.com/GastonRLdL/diceGenerator](https://github.com/GastonRLdL/diceGenerator)
