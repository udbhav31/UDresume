var footercomp = (function(){
    $inject = ["databse"];
    var constructor = function(databse){

        this.totalExp = databse.totalExp;
    }
    return constructor
})();


angular.module("UDresume").component("footerComp", {
    templateUrl : "footercomp/footercomp.html",
    controllerAs : "footercon",
    controller : footercomp
});