
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