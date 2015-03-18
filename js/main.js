$(function(){
  window.issues = new bugtracker.models.Issues();
  issues.fetch().done(function(){
    
    // rendering backbone views
    issues.each(function(model){
      var issueView = new bugtracker.bb_views.Issue({model: model});
      $(".backbone-view").append(issueView.render().el);
    });

    // rendering react
    var elem = React.createElement(bugtracker.r_views.IssueList, {collection: issues});
    var el = $(".react-view").get(0);
    React.render(elem, el);

  });

});
