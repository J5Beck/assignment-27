(function(models){

  models.Issue = Backbone.Model.extend();

  models.Issues = Backbone.Collection.extend({
    model: models.Issue,
    url: "issues.json"

  });

})(bugtracker.models = {});