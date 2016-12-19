// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
      // Note: The URL is relative to our `index.html` file
      templateUrl: 'Scripts/angular/phone-list/phone-list.template.html',
      //template:
      //    '<ul>' +
      //      '<li ng-repeat="phone in $ctrl.phones">' +
      //        '<span>{{phone.name}}</span>' +
      //        '<p>{{phone.snippet}}</p>' +
      //      '</li>' +
      //    '</ul>',
      //controller:['$http', function PhoneListController($http) {
      //    var self = this;
      //    self.orderProp = 'age';

      //    $http.get('Scripts/angular/data/phones.json').then(function (response) {
      //        self.phones = response.data;
      //    });
      //}]

      controller:['Phone', function PhoneListController(Phone) {
          this.phones = Phone.query();
          this.orderProp = 'age';
      }]
  });