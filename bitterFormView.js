var Backbone = require('backbone');
var _ = require('underscore');
var tmpl = require('./template');
var BitterModel = require('./bitterModel');
var BitterModelView = require('./bitterModelView');

module.exports = Backbone.View.extend({
    el: '.addBitter-container',
    // model: null,
    template: _.template(tmpl.addBitter),
    events: {
        'click .addPost-button': 'addBitter'
    },

    initialize: function() {
        this.model = new BitterModel({});
        this.render();
    },
    render: function() {
        var markup = this.template(this.model.toJSON());
        this.$el.html(markup);
        return this;
    },


    addBitter: function(event) {
        event.preventDefault();
        var newPost = {
            user: this.$el.find('.user-input').val(),
            postMessage: this.$el.find('.post-input').val(),
        };

        var newPostMessage = new BitterModel(newPost);
        this.$el.find('input').val('');
        newPostMessage.save();
    },

});
