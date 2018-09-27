var midcomp = (function(){
    var constructor = function(databse){
 
    }
    return constructor
})();

angular.module("UDresume").component("midComp", {
    templateUrl : "./midcomp/midcomp.html",
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
    templateUrl : "./midcomp/workcomp.html",
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
    templateUrl : "./midcomp/techcomp.html",
    controllerAs: "techexpcon",
    controller : techexp
})