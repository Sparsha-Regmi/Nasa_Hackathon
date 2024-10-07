# Nasa_Hackathon


Multi-Stop Route Manager

Multi-Stop Route Manager is a web-based application designed to optimize vehicle routes with multiple stops, helping reduce travel time, fuel consumption, and carbon emissions. By calculating the most efficient path for any number of stops, this tool aids in combating climate change by lowering transportation-related emissions, one of the leading sources of pollution worldwide.
Features

 Multi-stop Route Planning: Users can enter an origin, destination, and multiple intermediate stops to generate an optimized route.
    Google Maps Integration: The app leverages the Google Maps API to display the optimized route on an interactive map.
    Scalability: Ideal for both personal and commercial use (e.g., delivery services, logistics), where route optimization can significantly improve efficiency.
    Environmental Impact: By optimizing routes, the app helps reduce vehicle emissions, fuel consumption, and idle time, contributing to global efforts to fight climate change.

Project Structure

The project consists of three main files:
    index.html: Contains the structure of the web application and integrates the Google Maps API.
    styles.css: Defines the style and layout of the application.
    app.js: Handles the core functionality, including the integration with the Google Maps Directions API for route calculations and user interactions.
Tech Stack:
  HTML/CSS: For building the user interface.
    JavaScript: For handling logic and interactions.
    Google Maps API: For route calculations and map rendering.

Installation & Setup:

   Clone the repository to your local machine:

git clone https://github.com/Sparsha-Regmi/Nasa_Hackathon
cd multi-stop-route-manager

Get a Google Maps API Key:

Replace the API key in the index.html file:

html

    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places"></script>
 Open index.html in your browser to run the app locally.

Usage

 Enter the starting point (Origin).
    Add multiple stops by clicking the "Add Another Stop" button.
    Enter the final destination.
    Click "Generate Route" to display the optimized route on the map.
    The application will calculate the most efficient route and display it on the map using Google Maps.

Environmental Impact

By optimizing routes and reducing travel time, the Multi-Stop Route Manager directly contributes to lowering vehicle emissions. This project aims to support global sustainability goals by:

 Reducing fuel consumption by up to 15-20%.
 Cutting down CO2 emissions by 10-15% annually for frequent commercial or personal routes.
 Lowering traffic congestion and improving air quality in urban areas.

Contributing

Contributions are welcome! Please follow these steps:

  Fork the repository.
    Create your feature branch: git checkout -b feature/my-feature.
    Commit your changes: git commit -m 'Add some feature'.
    Push to the branch: git push origin feature/my-feature.
    Submit a pull request.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Contact

For any inquiries or issues, please contact:
Sparsha Regmi
Email: work.sparsha@gmail.com
This project was developed as part of the NASA Apps Hackathon to support the fight against climate change and improve sustainable transportation solutions.
