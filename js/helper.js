/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="dark-blue-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = HTMLcontactGeneric.replace('%contact%', 'mobile');
var HTMLemail = HTMLcontactGeneric.replace('%contact%', 'email');
var HTMLtwitter = HTMLcontactGeneric.replace('%contact%', 'twitter');
var HTMLgithub = HTMLcontactGeneric.replace('%contact%', 'github');
var HTMLblog = HTMLcontactGeneric.replace('%contact%', 'blog');
var HTMLlocation = HTMLcontactGeneric.replace('%contact%', 'location');

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkBlock = '<div class="work-block panel"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectBlock = '<div class="project-block panel"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="project-image" src="%data%">';

var HTMLschoolStart = '<div class="education-entry panel"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';
var googleMapAPIKey = "AIzaSyCEjACA8kM0o8y1klqOgI0xX4w0Nn4pTlw";

var HTMLlistBase = "<ul>%list%</ul>";
var HTMLlistItem = "<li>%data%</li>";


function dataReplacer(object, string){
  return object.replace("%data%", string);
}



/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable
var locations = []; // declare locations globally to prevent clearing on re-initialization
var places = []; // declare places globally to prevent clearing on re-initialization
/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {
    console.log("Initializing map");



  var mapOptions = {
      disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function addLocation(location){
        if($.inArray(location, locations) === -1){
            locations.push(location);
        }
  }

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    addLocation(bio.contacts.location);

    education.schools.forEach(function(school){
      addLocation(school.location);
    });

    work.jobs.forEach(function(job){
      addLocation(job.location);
    });

    return locations;
  }


  function createMapMarker(placeData) {
    console.log("creating map marker");
    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window
    console.log(name);

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });


    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }


  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        if ($.inArray(results[0], places) === -1){
            places.push(results[0]);
        }
        console.log("places length = " + places.length + " locations length = " + locations.length);
        if(places.length === locations.length){     // Was getting a weird race condition
            places.forEach(function(place){         // seeing if this will fix it
                createMapMarker(place);
            });
        }

    }
  }


  function pinPoster(locations) {


    var service = new google.maps.places.PlacesService(map);

    locations.forEach(function(place){

        var request = {
            query: place
        };

        service.textSearch(request, callback);
    });
  }

  window.mapBounds = new google.maps.LatLngBounds();


  locations = locationFinder();


  pinPoster(locations);

}

window.addEventListener('load', initializeMap);


window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
});
