/*
This is empty on purpose! Your code to build the resume will go here.
 */
bioPic = "images/head_shot.jpg";
emteePic = "images/mileage_tracker_icon_300x300.png";
spotifyStreamerPic = "images/spotify_streamer_code.png";
surveyPic = "images/survey.png";
/*
    bio {
            name : String
            role : String
            contacts: Contact Array
            welcomeMessage: String
            skills: String[]
            biopic String (url)
            display: parameterless function
        }

    contact {
                mobile: String
                email: String
                github: String
                twitter: String (optional)
                location: String
            }
*/

contact = {
    mobile: '408-838-5378',
    email: 'josiah.hadley@gmail.com',
    github: 'github.com/jhadley1406',
    location: 'San Jose, CA'
};
bio = {
    name: 'Josiah Hadley',
    role: 'Software Developer',
    contacts: contact,
    welcomeMessage: 'Welcome to my online resume',
    skills: ["Python", "Django", "JavaScript", "MySQL", "REST", "CSS", "HTML", "Java", "Android"],
    biopic: bioPic,
    display: function() {
        $('#topContacts').before(
                dataReplacer(HTMLheaderName, bio.name),
                dataReplacer(HTMLheaderRole, bio.role)
            )
            .append(
                dataReplacer(HTMLmobile, bio.contacts.mobile),
                dataReplacer(HTMLemail, bio.contacts.email),
                dataReplacer(HTMLgithub, bio.contacts.github),
                dataReplacer(HTMLlocation, bio.contacts.location)
            );

        $('#header').append(dataReplacer(HTMLbioPic, bio.biopic),
            dataReplacer(HTMLwelcomeMsg, bio.welcomeMessage),
            HTMLskillsStart
        );

        this.skills.forEach(function(skill) {
            $('#skills').append(dataReplacer(HTMLskills, skill));
        });

    }
};



/*
    education {
                schools: School Array
                onlineCourses: Courses Array
                display: parameterless function
              }

    school {
                name: String
                location: String
                degree: String
                majors: String[]
                dates: String
                url: String
            }

    onlineCourses {
                title: String
                school: String
                dates: String
                url: String
            }
*/

ccsf = {
    name: 'City College of San Francisco',
    location: 'San Francisco, CA',
    degree: 'Java Certificate',
    majors: ['Certificate'],
    dates: '2012',
    url: 'http://ccsf.edu'
};

androidNanoDegree = {
    title: 'Android Developer Nanodegree',
    school: 'Udacity',
    dates: '2015-2016',
    url: 'http://www.udacity.com'
};

frontEndNanoDegree = {
    title: 'Front End Nanodegree',
    school: 'Udacity',
    dates: '2017 - Curr',
    url: 'http://www.udacity.com'
};

education = {
    schools: [ccsf],
    onlineCourses: [androidNanoDegree, frontEndNanoDegree],
    display: function() {
        $('#education').append(HTMLschoolStart);

        this.schools.forEach(function(school) {
            $('.education-entry').append(
                dataReplacer(HTMLschoolName, school.name),
                dataReplacer(HTMLschoolDegree, school.degree),
                dataReplacer(HTMLschoolDates, school.dates),
                dataReplacer(HTMLschoolLocation, school.location),
                dataReplacer(HTMLschoolMajor, school.majors)
            );
        });
        $('.education-entry').append(HTMLonlineClasses);

        this.onlineCourses.forEach(function(course) {
            $('.education-entry').append(
                dataReplacer(HTMLonlineTitle, course.title),
                dataReplacer(HTMLonlineSchool, course.school),
                dataReplacer(HTMLonlineDates, course.dates),
                dataReplacer(HTMLonlineURL, course.url)
            );
        });
    }
};


/*
    work {
                jobs: Job array
                display: parameterless function
         }

    job {
                employer: String
                title: String
                location: String
                dates: String
                description:
        }
*/

networkTechnician = {
    employer: "Fulifilm e-Systems Inc.",
    title: "Network Technician",
    location: "Rochester, NY 14606",
    dates: "January 2000 - May 2003",
    description: "<ul>" +
        "<li>• Helped establish a 24/7 monitoring department to manage a 160-server data-center to maintain a 99.999% server uptime</li>" +
        "<li>• Managed and maintained data flow and integrity from 26 nationwide locations.</li>" +
        "<li>• Wrote procedures and manuals for the 24/7 department as well as others.</li>" +
        "<li>• Monitored and tested sites such as the Walmart Photo Center and Sam’s Photo Club.</li>" +
        "<li>• Provided technical support for Sam’s and Walmart photo customers via phone and e-mail.</li>" +
        "<li>• Worked with a team to automate tasks to streamline the monitoring of network resources.</li>" +
        "<li>• Designed, developed and deployed online data gathering, databasing, and reporting tools using Javascript and ASP with a SQL backend.</li></ul>"
};

labTechnician = {
    employer: "Spinergy Media",
    title: "Lab Technician",
    location: "East Rochester, NY 14445",
    dates: "October 2003 - January 2004",
    description: "<ul>" +
        "<li>• Worked in a small lab environment managing CD duplication machinery such as Rimage Protege and Everest copiers and Otari CPD-64 to complete large orders in a fast paced production environment. </li>" +
        "<li>• Processed orders through all stages of the fulfillment process including pulling and staging blank inventory, duplication, labeling, and packaging. </li>" +
        "<li>• Used custom test equipment to assure job quality. </li>" +
        "<li>• Maintained and repaired duplication equipment.</li></ul>"
};

qaTech = {
    employer: "FujiFilm e-Systems Inc.",
    title: "Quality Assurance Technician",
    location: "Rochester, NY 14606",
    dates: "January 2004 - February 2005",
    description: "<ul>" +
        "<li>• Tested new software and firmware releases for Frontier Digital Minilab photo printers and customer facing photo-ordering kiosks.</li>" +
        "<li>• Assisted with alpha and beta testing for nationwide online distributed photo ordering system. </li>" +
        "<li>• Wrote and executed test plans, performed regression testing and bug reporting.</li>" +
        "<li>• Maintained and assisted in repair of the Frontier Digital Minilabs, film scanners and lab computers.</li>" +
        "<li>• Designed isolated LANs for equipment testing.</li></ul>"
};

dataTransTech = {
    employer: "ChoiceOne Communications",
    title: "Data Translations Technician",
    location: "Rochester, NY 14604",
    dates: "February 2005 - December 2007",
    description: "<ul>" +
        "<li>• Provided technical support for field technicians and clients, including router and PC networking setup. </li>" +
        "<li>• Used the OSI model to troubleshoot two and four wire circuits.</li>" +
        "<li>• Assigned static IP addresses and built cross connects through digital subscriber equipment using frame-relay and ATM technologies. </li>" +
        "<li>• Configured client site IAD equipment for use with bridged and routed IP addresses. </li>" +
        "<li>• Interfaced with Verizon, Frontier, and AT&T to assure stable and clean continuity between One Comm. central offices and client sites. </li>" +
        "<li>• Wrote training and procedural documentation and trained new employees. </li>" +
        "<li>• Participated in committee planning first new products after major merger.</li></ul>"
};

techSupport = {
    employer: "Podiatry Residency Resource (PRR)",
    title: "Technical Support Manager",
    location: "San Francisco, CA 94117",
    dates: "April 2008 - April 2013",
    description: "<ul>" +
        "<li>• Acted as primary technical and general support contact for a website with approximately 5000 active users.</li>" +
        "<li>• Planned and wrote specifications for website upgrades and improvements. </li>" +
        "<li>• Planned, designed, and deployed a customized Microsoft CRM implementation.</li>" +
        "<li>• Designed and wrote software to manage automated systems in both Python and C#.</li>" +
        "<li>• Managed and cleaned data in a Microsoft SQL environment. Wrote complex T-SQL queries to accomplish data and user management tasks.</li></ul>"
};

testSiteManager = {
    employer: "American Board of Podiatric Surgery (ABPS)",
    title: "Test Site Manager",
    location: "San Francisco, CA 94117",
    dates: "April 2008 - April 2013",
    description: "<ul>" +
        "<li>• Provided phone and e-mail support for exam candidates. </li>" +
        "<li>• Ensured that all candidates who registered for an examination with ABPS were able to schedule for a time and place. </li>" +
        "<li>• Provided test day support for candidates who required additional assistance in locating test centers.</li>" +
        "<li>• Managed and rescheduled candidates who missed their exam window. </li>" +
        "<li>• Wrote scripts and software to automate back end processes using Python and C#.</li></ul>"
};

softwareDeveloper = {
    employer: "American Board of Podiatric Surgery (ABPS)",
    title: "Software Developer",
    location: "San Francisco, CA 94117",
    dates: "April 2013 - September 2015",
    description: "<ul>" +
        "<li>• Designed and managed updates and upgrades to company website, written in C# using asp.net. </li>" +
        "<li>• Wrote task tracker software for Android, implementing both internal task storage, and RESTful API support for a central database. </li>" +
        "<li>• Authored a discussion forum for podiatrists using Python and Django on a LAMP stack. </li>" +
        "<li>• Created an internal system to manage and track examination candidate data both historical and current in C#. </li>" +
        "<li>• Wrote back end processes to manage workflows and data management. </li>" +
        "<li>• Merged and updated large data-sets in live systems. </li>" +
        "<li>• Created tools for office staff to generate reports and edit candidate data.</li>" +
        "<li>• Worked directly with third party vendors to create MSCRM custom plugins to fit business needs.</li></ul>"
};

softwareDeveloperSE = {
    employer: "Freelance",
    title: "Freelance Software Developer",
    location: "San Jose, CA 95113",
    dates: "May 2015 - Present",
    description: "<ul>" +
        "<li>• Worked closely with clients to design website backends</li>" +
        "<li>• Developed data driven websites in Django</li>" +
        "<li>• Built tools in python and android to assist in development</li>" +
        "<li>• Developed RESTful APIs to allow data migrations, and provide access points for mobile applications</li>" +
        "<li>• Built and deployed Shibboleth Single Sign On native service provider with Django support</li></ul>"
};

work = {
    jobs: [softwareDeveloperSE,
        softwareDeveloper,
        testSiteManager,
        techSupport,
        dataTransTech,
        qaTech,
        labTechnician,
        networkTechnician
    ],
    display: function() {
        $('#workExperience').append(HTMLworkStart);

        this.jobs.forEach(function(job) {
            jobBlock = $(HTMLworkBlock);
            blockName = job.name + '-block';
            jobBlock.attr('id', blockName);
            $('.work-entry').append(jobBlock);
            jobBlock.append(
                dataReplacer(HTMLworkEmployer, job.employer),
                dataReplacer(HTMLworkTitle, job.title),
                dataReplacer(HTMLworkDates, job.dates),
                dataReplacer(HTMLworkLocation, job.location),
                dataReplacer(HTMLworkDescription, job.description)
            );
        });
    }
};

/*
    projects {
                projects: Project Array
                display: parameterless function
             }

    project {
                title: String
                dates: String
                description: String
                images: String[]
            }
 */


eMTee = {
    title: "eMTee Mileage Tracker",
    dates: "2016",
    description: "eMTee is an android app used to log and track fuel mileage and cost for multiple vehicles." +
        "It utilizes the My Gas Feed restful api to help locate gas stations, while using a SQLite backend to store each vehicle/fillup." +
        "This app is a polished version of my Udacity Android Nanodegree capstone project, and is currently available" +
        "on the Google Play Store for free with ad support.",
    images: [emteePic]
};

spotifyStreamer = {
    title: "Spotify Streamer",
    dates: "2015",
    description: "This android app was the second and third project for the Udacity Android Nanodegree.  This project interacts" +
        "with the Spotify restful API to allow users to search by Artist and stream song samples.  " +
        "It uses fragments to provide both a phone and tablet UI.",
    images: [spotifyStreamerPic]
};

survey = {
    title: "Survey App",
    dates: "2016",
    description: "This site is an example survey site implemented in Django with a Bootstrap and JQuery front end.  " +
        "It supports user account created and login, and allowes users to create and take surveys made up of multiple question types.",
    images: [surveyPic,]
};

projects = {
    projects: [eMTee, spotifyStreamer, survey],
    display: function() {
        $('#projects').append(HTMLprojectStart);

        this.projects.forEach(function(project) {
            projectBlock = $(HTMLprojectBlock);
            blockName = project.name + '-block';
            projectBlock.attr('id', blockName);
            $('.project-entry').append(projectBlock);
            projectBlock.append(
                dataReplacer(HTMLprojectTitle, project.title),
                dataReplacer(HTMLprojectDates, project.dates),
                dataReplacer(HTMLprojectDescription, project.description)
            );
            project.images.forEach(function(image){
                projectBlock.append(
                    dataReplacer(HTMLprojectImage, image)
                );
            });
        });
    }
};



bio.display();

work.display();

projects.display();

education.display();

$('#mapDiv').append(googleMap);