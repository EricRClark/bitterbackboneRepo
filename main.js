var Backbone = require('backbone');
var $ = require ('jquery');
var bitterTemplate = require('./template');
var BitterModel = require('./bitterModel');
var BitterModelView = require('./bitterModelView');
var BitterCollection = require('./bitterCollection');
var BitterCollectionView = require('./bitterCollectionView');
var BitterFormView = require('./bitterFormView');

// var Router = require('./router');


  $(document).ready(function () {
  var bitterCollection = new BitterCollection();
  // new BitterModelView();
  bitterCollection.fetch().then(function(data) {
       var collection = new BitterCollectionView(data);

       var postMarkUp = new BitterCollectionView({collection: collection});
     });
  var bitterFormView = new BitterFormView();
});

  // new Router();
//   Backbone.history.start({pushstate: true});
// });
