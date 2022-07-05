<div id="top"></div>





<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">Drone Project</h1>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#built-with">Deployed With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#roadmap">Contributors</a></li>
    <li><a href="#roadmap">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project created for the needs of the lesson IoT and further developed for the lesson Advanced Programming Technics in the department of Electrical Engineering and Computer Science, University Of Patras.

The purpose of this project is to manage and monitor multiple autonomous UAVs by collecting the GPS coordinates, thermal camera data, video camera stream and show the results in a webpage.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With


* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Socket.io](https://socket.io/)
* [MongoDB](https://www.mongodb.com/)
* [Mapbox](https://www.mapbox.com/)
* [Video.js](https://videojs.com/)
* [Bootstrap](https://getbootstrap.com)
* [Plotly](https://plotly.com/)

### Deployed With

* [Docker](https://www.docker.com/)
* [Kubernetes](https://kubernetes.io/)
* [Github actions](https://github.com/features/actions)



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
<hr></hr>

### Prerequisites

This project runs on Ubuntu machines.    

* docker <br></br>
    To install docker follow the instructions in the link below <br></br>
  https://docs.docker.com/engine/install/ubuntu/


## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/anastasofpv/drone-project.git
   ```
2. Cd into the project
   ```sh
   cd drone-project
   ```
* ### <b>Run the project local</b>
   
    3. Build docker image
         ```sh
        docker build -t drone-server:latest .
        ```
    4. Start the containers
        ```sh
        docker compose -f "drone.yaml" up -d
        ```


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

* ### <b>Run the project local</b>
   
    1. Build docker image
         ```sh
        docker build -t drone-server:latest .
        ```
    2. Start the containers
        ```sh
        docker compose -f "drone.yaml" up -d
        ```
    3. Visit the website at:
    
       http://localhost:3000 

    4. To add a drone marker to the map make a post request to:

        http://localhost:3000/api/map

        With the following JSON format:
         ```sh
         {
            "droneID": droneID,
            "temperature": temperature,
            "point": point[longitude,latitude]
         }  
        ```
    5. To publish the data from a thermal camera in a heatmap plot make a post request to:

        http://localhost:3000/api/thermal

         With the following JSON format:
         ```sh
        {
            "z" : [
            [2, 20, 30],
            [20, 1, 60],
            [30, 60, 1],
          ]
        } 
        ```
        Where 2 is the value of pixel[0][0]
    
    6. Publish a video stream

         e.g using ffmpeg 
        
        ```sh
        ffmpeg GRAFOUME
        ```

    7. Stop the containers
        ```sh
        docker compose -f "drone.yaml" down 
         ```

* ### <b>Deploy the project to kubernetes cluster</b>
    Coming soon

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Database Integration
- [x] Video Streaming Server
- [x] Thermal Api 
- [x] Support Multiple Drone Markers
- [x] Built CI/CD Pipeline 
- [x] Deployed to Kubernetes Cluster
- [ ] View previous Report Stats

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>


## Contributors 

- Konstantinos Anastasopoulos https://github.com/anastasofpv
- Ioannis Vlachos https://github.com/GianVls
- Aggelos Pournaras https://github.com/JJunior7


## Acknowledgements

We would like to thank:

- Professor Denazis Spyros
- Professor Tranoris Christos 
- Giannopoulos Dimitris 



<p align="right">(<a href="#top">back to top</a>)</p>

