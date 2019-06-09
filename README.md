# Tyne & Wear Hospital Route Finder App 

## Introduction

### What it does
This App finds and displays
- routes on an interactive Google Map between the five boroughs of Tyne & Wear and the local hospitals serving them. Routes can be displayed for four modes of travel i.e. public transport, walking, cycling and driving.
- map markers for various hubs, departure points and destinations such as Metro stations, rail stations, bus stations, Ferry terminals and hospitals.

### Operation
The App is based on a single page but its content is dynamically changed according to various selections made by the user. On initialisation the user is presented with an image of a Google map of Tyne & Wear, showing its boundary (it was not possible to show the boundary on an interactive Google Map because the Google Maps API does not expose the means to do so.) On initialisation, the Info tab gives information on what the App does and how to get started. The Routes and Markers tabs are disabled at this stage. The user must first select the borough from which they wish to travel (referred to as the Departure Area in the App) from the Departure Area menu. Once this is done, an interactive map of the Departure Area is displayed centered on the approximate geographical centre of the borough. The Routes and Markers tabs are also enabled, with the Routes tab made active. Users can then use the dropdown and checkbox controls, within these tabs, to display both routes and markers. The App can be reset at any time by the user to its initial state. The map can also be cleared of rendered routes and markers from buttons within the respective tabs.

### Aims For This Release

The aims of the release are:
- to provide visual route information to people in Tyne & Wear wishing to travel from its major population areas to any of the hospitals that serve the county.
- separately display Metro, train, ferry and bus stations using markers, with clustering of markers where appropriate.

## UX
 
### Website Audience

The App is mainly aimed at public transport users wishing to travel to hospitals in Tyne & Wear. However other forms of travel such as by bicycle, walking and driving can also be selected within the App.

### User Stories

User stories to be catered for in this release: 
- As a user, I want to display a route on a map so that I can find my way to any hospital in Tyne & Wear.

- As a user, I want to display multiple routes on a map so that I can compare routes to a number of different hospitals I may wish to travel to.

- As a user, I want to be able to specify the modes of transport that I wish to use on my journey to hospital.

- As a user, I want to display markers on a map so that I can see the locations of various places that are important to me for planning my journey to hospital.

### Layouts

The files below are stored in the [_Project Documentation](https://github.com/kevald1963/milestone-2-interactive-front-end/tree/master/_Project%20Documentation) folder in the GitHub repository.

- Layout (1st draft), Home page, wide screen.jpg
- Layout, with county or borough map, wide screen.jpg
- Layout, with county or borough map, narrow screen.jpg

## Features

### Existing Features

- A simple Bootstrap menu that collapses into a hamburger icon when screen size is less that 768px.
- An interactive Google Map.
- An Info tab providing information on what the app does and how to get started.
- A Routes tab that allows user to select a Departure Point and a Destination Hospital in order to display routes between them on the map.
- A Markers tab that allows user to select all Departure Points and/or all Destination Hospitals, within the entire county of Tyne & Wear, in order to mark them on the map.
- A means of resetting the App to its initial state i.e. by clicking the Home page menu.
- A means of resetting the Google map to its initial state i.e. clearing routes and markers using buttons.

### Features Left to Implement
- Provide a means to the user of removing the most recently displayed route from the map.
- Provide a means to the user of removing the most recently displayed marker from the map.
- Provide timetables, journey times, alternative routes and other information, in textual format, for displayed routes where public transport is featured. (An attempt was made to implement this in the current release but hit technical problems with Cross-origin Resource Sharing (CORS) when requesting data from Google Maps Platform web services. This will need further investigation at a later date, as it was proving too time-consuming to find a solution and complete the current release within a reasonable timescale.)

## Technologies Used

- [HTML5](https://www.w3.org/TR/html52/) 
  - To build page structure and content

- [CSS3](https://www.w3.org/standards/techs/css#w3c_all)
  - To style page structure and content.

- [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/getting-started/)
  - To provide template components to easily create and style responsive elements like the navigation menu, buttons, etc.

- [Google Fonts](https://fonts.google.com/)
  - For 'Roboto' font style used.

- [Font Awesome 5](https://fontawesome.com/icons?d=gallery)
  - Used to create 'icon' characters for menus, video and audio links, social media, external links, etc.

- [JQuery](https://jquery.com)
  - Used to simplify DOM manipulation.

- [JavaScript](https://www.w3schools.com/js/js_versions.asp) added to:
  - to make the HTML content dynamic in response to user selections.
  - to create and interrogate a local data object for holding all relevant geographical data for use in displaying routes and markers.
  - to implement the Google Maps API functionality as below.

- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
  - Computing and displaying routes and markers on a Google Map.

## Testing
- Excel workbook,'Test plan - Tyne & Wear Hospital Finder', stored in the [_Project Documentation](https://github.com/kevald1963/milestone-2-interactive-front-end/tree/master/_Project%20Documentation/Test%20plan) folder in the GitHub repository, details all the functional and responsiveness tests carried out across several popular browsers.

## Deployment
- The project is deployed on GitHub Pages, using the default settings at [https://kevald1963.github.io/milestone-2-interactive-front-end/](https://kevald1963.github.io/milestone-2-interactive-front-end/). The Google Maps API key has been enabled for this URL.
- A master branch only has been created for the project.
- There are no differences between the deployed version and the development version on Cloud9 at [https://ide.c9.io/kevald1963/milestone-2-interactive-front-end](https://ide.c9.io/kevald1963/milestone-2-interactive-front-end).

## Credits

"Harnessing the Google Maps JavaScript API the Right Way"
June 01, 2016 By Jamie Shields
https://www.sitepoint.com/google-maps-javascript-api-the-right-way/

### Content
- The text throughout the project was written by myself.

### Media
The App uses just one image, a map of Tyne & Wear showing its boundary, obtained from 
    - [Google Maps](https://www.google.com/maps). Google's copyright is displayed on map.

### Acknowledgements

- I received inspiration for this project from Wendy Gascoigne and Michael Charlton of South Tyneside Public Transport Users Group who have actively campaigned for better public transport information for people in South Tyneside travelling to hospital. A big Thank You is also due to my hard-working mentor, Chris Zielinski, for his patience and help in keeping this project on track and within the project criteria.
