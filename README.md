https://hsl-bike-production.up.railway.app/ all journeys viewable after journeys to and from station loaded.

Project Name:
HSLbike-app

Description:

The HSLbike-app is a web application that displays data from Helsinki city bikes during the summer season. It provides information about bike journeys and bike stations. The application is deployed on Railway at the following address: https://hsl-bike-production.up.railway.app/. all journeys viewable after journeys to and from station loaded.

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

Run locally


1. Create .env file to your server/src/main/resources.
2. Add to .env file 

MONGO_DATABASE="your-database"
MONGO_USER="your-user"
MONGO_PASSWORD="your-password"
MONGO_CLUSTER="your-cluster"

3. Install
    - maven  https://maven.apache.org/download.cgi.
    - Java 17 https://www.oracle.com/java/technologies/downloads/#java17
    - node.js  https://nodejs.org


6. Open  /server/src/main/client in IDE like VScode. Edit apislice.js basequery to 'http://localhost:8080/' 

5. Build and run the Spring Boot application. You can run it locally from /server using the IDE's "Run as Maven build" option or in the terminal using the command mvnw spring-boot:run. Remember to do ".\mvnw package" at /server if you make changes.


6. The app will be accessible at http://localhost:8080. Note that the base URL is updated in the apislice.js file in the frontend, so there is no need to configure the frontend separately.
Access the application in your web browser at http://localhost:8080.

Contributing
We welcome contributions to the HSLbike-app project. To contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix.

Make the necessary changes and commit them.

Push your changes to your forked repository.

Submit a pull request to the main repository.

Please ensure that your code follows the established coding conventions and includes appropriate documentation.

contact terho.mikko@gmailcom for more information