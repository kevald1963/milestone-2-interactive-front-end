# Tyneside Hospital Route Finder App 

## Introduction

This project finds and displays interactive routes maps between main population areas and local hospitals in the Tyne & Wear, England, UK, for various modes of transport using Google Maps. Public transport timetable information is also provided, in text format, to accompany the visual map routes, when this mode of transport is selected. It also provides the facility to display map markers for various points of interest such as Metro stations, bus stations, Ferry terminals and hospitals.

### Aims For This Release

The aims of the release are:
- to provide visual route information to people in Tyneside wishing to travel from it major population areas to any of the hospitals that serve the county.
- separately display Metro, train, ferry and bus stations using markers, with clustering of markers where appropriate.
- provide timetable information in text format corresponding to public transport services on any routes displayed.

## UX
 
### Website Audience

This consists of public transport users, cyclists, pedestrians and drivers wishing to travel to and from hospitals in and around Tyne & Wear.

### User Stories

User stories to be catered for in this release:

### Layouts

The files shown below are stored in the __Project Documentation_ folder in the GitHub repository. The layout diagrams show both wide screen and mobile layouts.

- South Tyneside local group page layouts.jpg
- Google Map page layouts.jpg

## Features

### Pages implemented and styled:

- South Tyneside group page
- Google Map page
- Email validation

### Existing Features

- All pages:
    - A comprehensive Bootstrap menu that collapses into a hamburger icon when screen size is less that 768px.
    - A footer showing summary About info, an email link and social media links.

- southtyneside.html (? check filename correct!) :
    - Displays tooltip text for the Google Maps image of the borough with its boundaries. On hovering, the text informs users that clicking on the image will navigate them to a larger interactive map.

### Features Left to Implement

- Fully develop content and layout for pages currently displayed as Under Construction (referenced above).
- Validation of email forms, particularly to check the first email address matches the confirmation email.
- Get the site to send real emails to a test email account.
- Use JavaScript (or some other language) to send the media link to video and audio modals, so that only one code instance of each is required in a page.
I don't know how to do this currently, so individual blocks of HTML have to copied and modified for every video or audio file that is shown in the news panel. This could make the HTML very cumbersome and slow to load.
- Find a way to create just one instance of a common element, such as the navigation menu or footer (which can then be 'called' into each page as required) so it can be maintained in just one place. This especially important on big sites because no-one wants to, for example, to insert (and test!) a new menu dropdown item for each page on a large site. From my searches online, I understand this can be achieved using either server side includes or a programming language.

## Technologies Used

- [HTML5](https://www.w3.org/TR/html52/) 
  - To build page structure and content

- [CSS3](https://www.w3.org/standards/techs/css#w3c_all)
  - To style page structure and content.

- [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/getting-started/)
  - To provide template components to easily create and style responsive elements like the navigation menu, buttons, banners, etc.

- [Google Fonts](https://fonts.google.com/)
  - For 'Roboto' font style used on all pages.

- [Font Awesome 5](https://fontawesome.com/icons?d=gallery)
  - Used to create 'icon' characters for menus, video and audio links, social media, external links, etc.

- [JQuery](https://jquery.com)
  - Used to simplify DOM manipulation ???

- [JavaScript](https://www.w3schools.com/js/js_versions.asp) added to:
  - implement Google maps object to allow the following functionality
  
## Testing

- Excel workbook,'Test plan - TWPTUG redesign', stored in the __Project Documentation_ folder in the GitHub repository, details all the functional and responsiveness tests carried out across several popular browsers.

- As the site gets bigger I will definitely need to create some automated test scripts, because manual testing will just get too slow and tedious to carry out. I did consider doing it for this particular phase of 
  development, using a product, based on Selenium IDE, called Katalon Recorder but, after a bit of experimentation, I found it was not sophisticated enough to capture page and window identifying information without 
  writing some programming code in its sister product Katalon Studio. This is too much of a learning curve for me at this point in time.

## Deployment
- The Project is deployed on GitHub Pages, using the default settings. Click [here](https://kevald1963.github.io/milestone-1-twptug-redesign/) to view.

## Credits

### Content
- The text for the Welcome sections on the Group pages was copied from the TWPTUG 2018 Annual Report, and edited to suit.
- The text for the About page comes from a combination of the About and Partner pages on the live TWPTUG website.
- The News panel articles on the Home and Group pages are replicated from the the live TWPTUG website.

### Media
- The images used in this site were obtained from 
    - [Pixabay](https://pixabay.com/en/). These are the large images on the Group pages, except for South Shields and Sunderland.
    - Existing TWPTUG resources, mostly photos taken by activists. These are the images on the About page.
    - [Reinventing Transport](https://www.reinventingtransport.org/) logo, shared under a Creative Commons licence. Logo is used in the audio modal as a link to the RT website. A link to the CC licence (which must be shown) is provided in the footer of the modal.
    - The large images on the South Shields and Sunderland group pages were licensed by TWPTUG from John R. Short, author of Facebook page [See Tyne and Wear Differently](https://www.facebook.com/ctynewear/).
- The embedded video file is from [Parliament TV](https://www.parliamentlive.tv)
- The embedded audio file is from Reinventing Transport (above)

### Code Snippets
- to pause modal video/audio playback when modal widow is closed is credited to user3376436 on Stack Overflow at https://stackoverflow.com/questions/5958132/javascript-to-stop-html5-video-playback-on-modal-window-close
- to allow user to return back to previous page credited to W3 Schools at https://www.w3schools.com/jsref/met_his_back.asp
- to clear modal email forms is credited to user3127109 on Stack Overflow at https://stackoverflow.com/questions/15827262/how-to-reset-form-body-in-bootstrap-modal-box

### Acknowledgements

- I received inspiration for this project from Paul Baker and Vicki Glbert who work tirelessly on behalf of TWPTUG. Many thanks also to my mentor, Chris Zielinski, for his expertise advice and guidance, particularly on responsivity. Also thanks to Slack regulars 'Jo Wings' and 'Eventyret_mentor' for sorting out my mistakes and misunderstandings.
