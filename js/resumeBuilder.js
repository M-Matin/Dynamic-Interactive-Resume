/*
This is empty on purpose! Your code to build the resume will go here.
 */ // - - - - - - - - - - - - - - - - - - - basic JS practice- - - - - - - - - - - - -  - - - - - -
//  $("#main").append("Maha Matin");
//  var awsome = "My name is " + name + " I am awsome.";
// //selector.replace(old,new)
// var fun = awsome.replace("awsome", "fun");
// console.log(awsome);
// console.log(fun);
// $("#main").append(fun);
// - - - - - - - - - - - - - - - - - - -   nameChanger - - - - - - - - - - - - -  - - - - - -
//function to make first name of string lowerCase and last name of string upper case
// function nameChanger(oldName) {
//     var finalName = oldName;
//     var names = oldName.split(" ");
//     names[1] = names[1].toUpperCase();
//     names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//     finalName = names.join(" ");
//     return finalName;
// }
// - - - - - - - - - - - - - - - function  nameChanger - - - - - - - - - - - - -  - - - - - -
//function to make first name of string lowerCase and last name of string upper case
// function nameChanger(oldName) {
//     var finalName = oldName;
//     var names = oldName.split(" ");
//     names[1] = names[1].toUpperCase();
//     names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//     finalName = names.join(" ");
//     return finalName;
// }
// - - - - - function for deactiving others script code with regular experation- - - - - - - -
// var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
//
// var charEscape = function(_html) {
//     var newHTML = _html;
//     // How will you make sure that newHTML doesn't contain any < or > ?
//     // Your code goes here!
// newHTML = newHTML.replace(/</g,"\"");
//       newHTML = newHTML.replace(/>/g,"\"");
//
//     // Don't delete this line!
//     return newHTML;
// };
//
// // Did your code work? The line below will tell you!
// console.log(charEscape(html));

// - - - - - -get the number of char in 'p' and  add it to the end of 'p'- - - - - - - - - - - - -  - - - - - -
//
// function numAdd(){
//
// var text = $(this).text();
// var num = text.length;
//     $(this).text(text+ ""+num);
// }
// $('p').each(numAdd);
// - - - - - -evnt listener for button clicked- - - - - - - - - - - - -  - - - - - -
// $("#my-button").on("click",function(){
//     $(this).remove();
//     $('body').addClass("success");
// });
//- - - - - - -  - - - - - - - - - - - - - -All Data in Json - - - - - - -  - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - Json for  bio  - - - - - - - - - - - - -  - - - - - -
var bio = {
    "name": "Maha Matin",
    "role": "Web Developer",
    "contacts": {
        "mobile": "925-818-0198",
        "gitHub": "Maha-Matin",
        "email": "matin643@gmail.com",
        "twitter": "@MMatinn",
        "location": "San Francisco, CA",
    },
    "skills": [
        "Front-End", "web developer", "JavaScript", "gitHub"
    ],
    "biopic": "https://avatars1.githubusercontent.com/u/12793193?v=3&u=ccbd72d0012c9149837e18cf2cd5614f11ef8927&s=140",
    "welcomeMessage": "Welcome to my website!"
};
// - - - - - - - - - - - - - - - - - - -   Json for work - - - - - - - - - - - - -  - - - - - -
//forex work experience
//Web developer work experience
var work = {
    "jobs": [{
        "employer": "Self-Employed",
        "title": "Forex Trader",
        "dates": "2012 -",
        "location": "Home Office",
        "description": "I am a forex trader. I have been trading since 2012. I would say trading is not my best job. I found out so much stress and hard working made me to thinking about alternative solution in last year."
    }, {
        "employer": "self-employed",
        "title": "Front-End Web Designer",
        "dates": "January 2015 -",
        "location": "San Francisco, CA",
        "description": "I have been learning web development since 2015. I am a Computer Information Student, and started to learn coding since 2015. My ultimate goal is to develop my skills in front-end web development.Curently I am working on some project from the Udacity,which is nanodegree university. I have so much pation with my job.Sometimes I found myself spending several hours on coding."
    }]
};
// - - - - - - - - - - - - - - - - - -  project part - - - - - - - - - - - - -  - - - - - -
var projects = {
    "projects": [{
        "title": "My personal website",
        "dates": "June 2016",
        "description": "This is a very basic personal portfolio. I made it with love. It is mostly HTML and CSS, but I want to add Javascript to it as well.",
        "image": ["images/project-pic.jpeg"]
    }, {
        "title": "Tip Calculator",
        "dates": "June 2016",
        "description": "<a href='https://m-matin.github.io/Tip-Calculator/'>Tip Calculator</a> This is a very basic personal portfolio. I made it with love. It is mostly HTML and CSS, but I want to add Javascript to it as well.",
        "image": ["images/Tip-Calculator.png"]
    }]
};
// - - - - - - - - - - - - - - - - - -Json for education - - - - - - - - - - - - -  - - - - - -
var education = {
    "schools": [{
        "name": "Azad University",
        "location": "Iran, Mazandaran",
        "degree": "Bachelor",
        "major": [
            "Business Administration"
        ],
        "date": "2003 2007"
    }, {
        "name": "Diablo Valley College",
        "degree": "Under Graduate",
        "date": "January 2015 -",
        "location": "Pleasant Hill, CA, US",
        "major": [
            "Computer Information System"
        ]
    }],
    "onlineClasses": [{
        "title": "https://www.udacity.com/",
        "school": "Front-End Web Developer Nanodegree Program - Udacity",
        "dates": "June 2016 -",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

// - - - - - - - - - - -apending bio to HTML header and FOOTER with function - - - - - - - - - - - - -  - - - - - -
bio.display = function() { //declare display method for bio object
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header:last").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header:last").prepend(formattedName);
    //contact information for topContact in gray header
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts:last, #footerContacts").prepend(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts:last, #footerContacts").prepend(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
    $("#topContacts:last, #footerContacts").prepend(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts:last, #footerContacts").prepend(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts:last, #footerContacts").prepend(formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $(".center-content:last").append(formattedBioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $(".center-content:last").append(formattedwelcomeMsg);
    //- - - - - - - - - - - -apending skills bio to HTML with function  - - - - - - -
    $("#header").append(HTMLskillsStart);
    for (var i = 0 ; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
};
bio.display();
//- - - - - - - - - - - -apending work to HTML with function  - - - - - - -
work.display = function() { //passing display method to work object
    for (var i = 0; i < work.jobs.length; i++) {
            var formattedworkStart = HTMLworkStart;
            $("#workExperience:last").append(formattedworkStart);
            var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $(".work-entry:last").append(workEmployer);
            var workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(workDates);
            var workLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(workLocation);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedworkDescription);
    }
};
work.display(); //passing work object to my function
// - - - - - - - - - - - - - - - - - -apending project to HTML with function - - - - - - - - - - - - -  - - - - - -
projects.display = function() { //passing display method to project object
    $("#projects").append(HTMLprojectStart);
    for (var val= 0; val< projects.projects.length; val++) {
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[val].title);
            $(".project-entry:last").append(formattedprojectTitle);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[val].dates);
            $(".project-entry:last").append(formattedprojectDates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[val].description);
            $(".project-entry:last").append(formattedprojectDescription);

            for (var i = 0 ; i < projects.projects[val].image.length; i++) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[val].image[i]);
                $(".project-entry:last").append(formattedprojectImage);
        }
    }
};
projects.display();
// - - - - - - - - - - - - - - - -apending school to HTML with function - - - - - - - - - - - - -  - - - - - -
// //passing display method to education object
education.display = function() {
    for (var val = 0; val<education.schools.length ; val++) {
            $("#education:last").append(HTMLschoolStart);
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[val].name) + HTMLschoolDegree.replace("%data%", education.schools[val].degree);
            $(".education-entry:last").append(formattedschoolName);
            var formattedschoolDate = HTMLschoolDates.replace("%data%", education.schools[val].date);
            $(".education-entry:last").append(formattedschoolDate);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[val].location);
            $(".education-entry:last").append(formattedschoolLocation);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[val].major);
            $(".education-entry:last").append(formattedschoolMajor);
        }
// - - - - - - - - - - - - - - - apending onlineClasses to HTML with function- - - - - - - - - - - - - - - -  - - - - - -
    for (var i = 0;  i<education.onlineClasses.length; i++) {
            var formattedonlineClasses = HTMLonlineClasses;
            $(".education-entry:last").append(formattedonlineClasses);
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineClasses[i].school);
            $(".education-entry:last").append(formattedonlineTitle);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[i].dates);
            $(".education-entry:last").append(formattedonlineDates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[i].url);
            $(".education-entry:last").append(formattedonlineURL);
    }
};
education.display();
// - - - - - - - - - - - - - - - -map for the page - - - - - - - - - - - - -
$("#mapDiv").append(googleMap);
// - - - - - - - - - - - - - - - button - - - - - - -  - - - - - -
// var formattedinternationalizeButton = internationalizeButton;
// $("#main").append(formattedinternationalizeButton);
