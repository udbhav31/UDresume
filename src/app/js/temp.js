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