var Backbone = require('backbone');
var tmpl = require('./template');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  tagName: 'article',
  template: _.template(tmpl.bitterTemplate),
  // editTemplate: _.template(tmpl.editPost),


initialize: function () {
  this.listenTo(this.model, 'change', this.addAll);
  // this.listenTo(this.collection, 'update', this.addAll);
  },

render: function () {
  var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },


events: {
    'click .deleteBtn': 'deletePost',
    'click .editBtn': 'toggleEdit',
    'click .editPost-button': 'editPost',
  },

  toggleEdit: function () {
      this.$el.append(this.editTemplate(this.model.toJSON()));
    },
editPost: function () {
  event.preventDefault();
  this.model.set ({
    user: this.$el.find('.user-edit').val(),
    postMessage: this.$el.find('.post-edit').val(),

  });
  this.model.save();
},

    deletePost: function () {
      event.preventDefault();
      console.log("Bitter destroyed!!!");
      this.model.destroy();
    }

  });
