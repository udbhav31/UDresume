(()=>{
    var databse = {
        name: "udbhav srivastava",
        mobile: "9739525551",
        dob: "31 July 1987",
        email: "udbhav31@gmail.com",
        location: "Banglore",
    
        aboutme: `I have Strong technical skill-set and attention to detail. With proficiency in using Front End frameworks.\n
                   My current expertise is in AngularJS and work experience in developing and managing websites, applications and programs for various companies.\n 
                   I have understanding of JavaScript design patterns and strongly prefer to write code with most suitable design, best practices and code standards.\n`,
        workExperience: [
            {
                role: "UI Developer/Consultant", company: "Tech Mahindra Ltd.", period: "Aug 2015 - Present", logo: "../assets/images/infosys.png",
                synopsis:  `Designed and developed applications in AngularJS and Backbone JS.
    
                            Built and enhanced order management application.
                            Developed an Service management and SR tracking application for Telia a telecom company using AngularJS.
    
                            Involved in couple of POCs with primary focus on Javascript and responsive web layouts.
                            Build several modules for order status monitoring, data slides, user interface validations.`
            },
            {
                role: "Senior Software Engineer / Programmer", company: "Accenture", period: "Apr 2011 - Aug 2015", logo: "../assets/images/techm.png",
                synopsis: ` Build billing system user-interface. 
                            Utilized HTML, CSS, JavaScript, NPM and JQuery for site development.
    
                            Presented web-site mock-ups to clients to give them better visual of the product and to ensure that all parameters are met.
                            Identify usability and develop functional and smooth, easy-to-operate and eye-catching web application.
                            Resolved design issues through root cause analysis.`,
            }
        ],
        skillsPrimary: [
            {title: "Angular JS", rating: 4},
            {title: "Javascript", rating: 4},
            {title: "Javascript Design Patterns", rating: 3.5},
            {title: "Typescript/ES6", rating: 4},
            {title: "Rxjs Observables", rating: 3.5},
            {title: "BackBone JS", rating: 3}
        ],
        skillsSecondary: [
            "HTML, CSS, Sass, Jquery", "Javascript, Typescript", 
            "Angular (2+), Angular", 
            "Gulp, Webpack", 
            "Nodejs + Express", "Responsive Web Design" 
        ],
        education : "Bachelor of Technology, UPTU",
        totalExp: "7 Years, 6 Months"
    }
    
    angular.module("UDresume").value("databse", databse);
})();

