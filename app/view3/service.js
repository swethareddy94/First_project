
angular.module('myApp.view3')
.service('fetchService',function($http){
    console.log('insidefetchservice');
    this.getfunction=function(){
      return  $http.get("https://wpv96pp4nh.execute-api.us-east-1.amazonaws.com/dev/book");
   }
})

  