$(function(){
  window.issues = new bugtracker.models.Issues();
  issues.fetch().done(function(){
    issues.each(function(model){
      var issueView = new bugtracker.bb_views.Issue({model: model});
      $(".backbone-view").append(issueView.render().el);
    });
  });

});