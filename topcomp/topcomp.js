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
    templateUrl : "topcomp/topcomp.html",
    controller : topcomponent,
    controllerAs : "topCon"
})