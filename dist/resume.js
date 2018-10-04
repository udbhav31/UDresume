(()=>{
    angular.module("UDresume",[]);

    document.addEventListener("DOMContentLoaded" , function(){
        angular.bootstrap(document.getElementById("approot"), ["UDresume"]);
    })
})();
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


(() => {
    var footercomp = (function () {
        $inject = ["databse"];
        var constructor = function (databse) {

            this.totalExp = databse.totalExp;
        }
        return constructor
    })();


    angular.module("UDresume").component("footerComp", {
        templateUrl: "footercomp.html",
        controllerAs: "footercon",
        controller: footercomp
    });
})();


(()=>{
    var midcomp = (function(){
        var constructor = function(databse){
     
        }
        return constructor
    })();
    
    angular.module("UDresume").component("midComp", {
        templateUrl : "midcomp.html",
        controllerAs: "midcon",
        controller : midcomp
    })
    
    var workexp = (function(){
        $inject = ["databse"];
        var constructor = function(databse){
            this.workArr = databse.workExperience;
            this.totalexp = databse.totalExp;
        }
        return constructor
    })();
    
    angular.module("UDresume").component("workExp", {
        templateUrl : "workcomp.html",
        controllerAs: "workexpcon",
        controller : workexp
    })
    
    var techexp = (function(){
        $inject = ["databse"];
        var constructor = function(databse){
            this.skillsPriArr = databse.skillsPrimary;
            this.skillsSecArr = databse.skillsSecondary;
            this.education = databse.education;
        }
        constructor.prototype.genStars = function(stars) {
            const clsArr = [];
            for (var i = 0; i < 5; i++) {
                var cls = "fa rating-star ";
                cls += stars > i ? (stars - i >= 1 ? "fa-star" : "fa-star-half-o") : "fa-star-o";
                clsArr.push(cls)
            }
            return clsArr;
        }
        return constructor
    })();
    
    angular.module("UDresume").component("techExp", {
        templateUrl : "techcomp.html",
        controllerAs: "techexpcon",
        controller : techexp
    })
})();

(()=>{
    var topcomponent = (function(){
        $inject = ["databse"];
        var constructor = function(databse){
            this.name = databse.name;
            this.mobile = databse.mobile;
            this.email = databse.email;
            this.dob = databse.dob;
            this.loc = databse.location;
            this.aboutme = databse.aboutme;
        }
        return constructor
    })();
    
    angular.module("UDresume").component("topComp",{
        templateUrl : "topcomp.html",
        controller : topcomponent,
        controllerAs : "topCon"
    })
})();
angular.module('UDresume').run(['$templateCache', function($templateCache) {$templateCache.put('footercomp.html','<div class="footer_c">\r\n    \r\n\r\n    <div class="finishbar">\r\n        <div class="finishbartxt">\r\n                This resume is build using AngularJS\r\n        </div>\r\n    </div>\r\n</div>');
$templateCache.put('midcomp.html','<div class="midblock">\r\n    <div class="midleft"><work-exp></work-exp></div>\r\n    <div class="midright"><tech-exp></tech-exp></div>\r\n</div>');
$templateCache.put('techcomp.html','<div class="priskill_c">\r\n    <div class="priskilltab">Primary Skills</div>\r\n    <div class="priskilltabval">\r\n        <div class="rating-line" ng-repeat="ratingObj in techexpcon.skillsPriArr" key={{$index}}>\r\n            <div class="rating-title">{{ratingObj.title}}</div>\r\n            <div class="rating-stars">\r\n                <span ng-repeat="starclass in techexpcon.genStars(ratingObj.rating) track by $index" class={{starclass}}>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="secskill_c">\r\n    <div class="secskilltab">Secondry Skills</div>\r\n    <div class="secskilltabval">\r\n        <div class="skillname" ng-repeat="secskill in techexpcon.skillsSecArr">{{secskill}}</div>\r\n    </div>\r\n</div>\r\n<div class="edu_c">\r\n        <div class="edutab">Education</div>\r\n        <div class="edutabval">{{techexpcon.education}}</div>\r\n    </div>');
$templateCache.put('topcomp.html','<div class=topcomp_c>\r\n    <div class="cvdp_c">\r\n        <div class="cvdp">\r\n            <img src="images/profile.jpg" alt="dp" sizes="" srcset="" height="148px" width="148px">\r\n        </div>\r\n    </div>\r\n    <div class="cvname_c">\r\n        <div class="cvname">{{topCon.name | uppercase}}</div>\r\n    </div>\r\n</div>\r\n<div class="personalinfobar">\r\n    <div class="famobile_c">\r\n        <div class=famobile>\r\n            <i class="fas fa-mobile-alt"></i>\r\n        </div>\r\n        <div class="famobiletxt">{{topCon.mobile}}</div>\r\n    </div>\r\n    <div class="faenvlp_c">\r\n        <div class=faenvlp>\r\n            <i class="fas fa-envelope"></i>\r\n        </div>\r\n        <div class="faenvlptxt">{{topCon.email}}</div>\r\n    </div>\r\n    <div class="faloc_c">\r\n        <div class=faloc>\r\n            <i class="fas fa-search-location"></i>\r\n        </div>\r\n        <div class="faloctxt">{{topCon.loc}}</div>\r\n    </div>\r\n    <div class="fadob_c">\r\n        <div class=fadob>\r\n            <i class="fas fa-birthday-cake"></i>\r\n        </div>\r\n        <div class="fadobtxt">{{topCon.dob}}</div>\r\n    </div>\r\n    \r\n</div>\r\n\r\n<div class="abtmetab_c">\r\n    <div class="abtmetab">About Me</div>\r\n    <div class="abtmetabval"><div class="content">{{topCon.aboutme}}</div></div>\r\n</div>');
$templateCache.put('workcomp.html','<div class="work_c">\r\n    <div class="workexptab">\r\n        <div class="worktittle">Work Experience</div>\r\n        <div class="workyrs">{{workexpcon.totalexp}}</div>\r\n        </div>\r\n    <div class="workexptabval">\r\n        <div ng-repeat = "exper in workexpcon.workArr">\r\n            <div class = "workcontent" key ={{$index}}>\r\n                <div class="job-title">{{exper.role}}</div>\r\n                <div class="company-title">{{exper.company}}</div>\r\n                <div class="period">{{exper.period}}</div>\r\n                <div class="content">{{exper.synopsis}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n');}]);