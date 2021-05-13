# Spotify Community

## Live Links
https://spotify-community.herokuapp.com/
https://github.com/loveliiivelaugh/spotify-community

## Contributors
@jjayjack
@0117Javi
@mfrancisco9
@loveliiivelaugh
@haydenabeck

## Description:

Using Spotify API, we have set out to have a user login, look up an artist or song by an artist then be presented with a playlist generated by their input. We would like to create a custom community which allows users to discover and share artists and songs that they enjoy. This allows users to input an artist or song by an artist and generates a playlist based on their input. By using Spotify's API a user can get a more diverse selection of songs to discover or re-discover based on their listening preferences. The problem that this app solves is letting a user choose what they want to listen to and create a page that has their favorites and discover. 

  ## Table of Contents

  - [Installation](#installation)
  - [Technology Stack](#technology-stack)
  - [Usage](#usage)
  - [Construction](#construction)
  - [Screenshots](#screenshots)
  - [Live Links](#livelinks)
  - [Contact](#contact)
  

## Installation:
  For install, start by installing dependencies (npm, node, ...) then sign up for developers access with Spotify. 

## Technology Stack 
Handlebars, Javascript, CSS

## Usage:
  To start, a user will have to login to their homepage. Once authenticated, the user will have the ability to search for an artist or song by an artist. Once the request has been made, the program will search the Spotify API database in order to field that request by the user input. The response will be a randomly generated playlist that will take in similar aspects of the input's genre.

## Construction

1. `CREATE spotify_db`

2. Create connection

3. Create Models, `/models`

4. Create `Seeds` directory and files

5. `.env` and `.gitignore`

6. `/controllers` directory, `server.js` and accompanying `/routes` containing CRUD operations to interact with API and DB.

7. `/classes` directory, to implement OOP design?

8. `/views`, frontend

...more coming soon!

## Screenshots

Homepage before login
<img src=".\assets\playlisthomepage.png" alt=""/>

Homepage after login
<img src=".\assets\playlisthomepagelogin.png" alt=""/>

Login Page
<img src=".\assets\playlistlogin.png" alt=""/>


## Contact

* Michael Woodward - woodward.michael.a@gmail.com
* Michael Fransisco - m.francisco9@gmail.com
* Jocelyn Jayjack - jocelynjayjack@gmail.com
* JJ Espinoza - javi_espinoza@icloud.com
* Hayden Beck - haydenabeck@gmail.com