(() => {
    angular.module("UDresume").component("footerComp", {
        templateUrl: "footercomp.html"
    });
})();


(()=>{
    angular.module("UDresume").component("midComp", {
        templateUrl : "midcomp.html"
    })
    
    var workexp = (function(){
        
        var constructor = function(db){
            this.workArr = db.workExperience;
            this.totalexp = db.totalExp;
        }
        return constructor
    })();
    workexp.$inject = ["databse"];
    angular.module("UDresume").component("workExp", {
        templateUrl : "workcomp.html",
        controllerAs: "workexpcon",
        controller : workexp
    })
    
    var techexp = (function(){
        var constructor = function(db){
            this.skillsPriArr = db.skillsPrimary;
            this.skillsSecArr = db.skillsSecondary;
            this.education = db.education;
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
        constructor.$inject = ["databse"];
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
        
        var constructor = function(db){
            this.name = db.name;
            this.mobile = db.mobile;
            this.email = db.email;
            this.dob = db.dob;
            this.loc = db.location;
            this.aboutme = db.aboutme;
        }
        constructor.$inject = ["databse"];
        return constructor
    })();
    
    angular.module("UDresume").component("topComp",{
        templateUrl : "topcomp.html",
        controller : topcomponent,
        controllerAs : "topCon"
    })
})();