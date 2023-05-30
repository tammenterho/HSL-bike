https://hsl-bike-production.up.railway.app/

Project Name:
HSLbike-app

Description:

The HSLbike-app is a web application that displays data from Helsinki city bikes during the summer season. It provides information about bike journeys and bike stations. The application is deployed on Railway at the following address: https://hsl-bike-production.up.railway.app/.

Features:

Display all bike journeys:

    - Startpoint

    - Endpoint

    - Travelled distance

    - Duration of the journey

Display all the stations:

    - Name

    - Address

    - Journeys from the station

    - Journeys to the station

    - Shows 10 results per page

    - Shows only journeys longer than 10 meters and 10 seconds

Additional features currently in progress


Technologies Used:

Backend:

Spring Boot,
Maven,
Java version 17,
MongoDB Atlas (free tier) as the database,


Frontend:

React
Redux for state management


Installation:

To run the application locally, follow these steps:

Clone the repository.

Set up the MongoDB Atlas database and obtain the connection URL.
Import data from the CSV files to a database.
csv-files >>>> https://github.com/solita/dev-academy-2023-exercise

Configure the backend:

Open the backend project in your preferred Java IDE.
Update the MongoDB connection URL in the application.properties file.
Build and run the Spring Boot application. You can run it locally from /server using the IDE's "Run as Maven build" option or in the terminal using the command mvnw spring-boot:run. The backend will be accessible at http://localhost:8080. Note that the base URL is updated in the apislice.js file in the frontend, so there is no need to configure the frontend separately.
Access the application in your web browser at http://localhost:8080.

Contributing
We welcome contributions to the HSLbike-app project. To contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix.

Make the necessary changes and commit them.

Push your changes to your forked repository.

Submit a pull request to the main repository.

Please ensure that your code follows the established coding conventions and includes appropriate documentation.