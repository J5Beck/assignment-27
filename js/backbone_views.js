(function(views){

  views.Progress = Backbone.View.extend({

    template: JST["progress"],

    renderData: function() {
      // 0.652345345
      var data = [];
      var num = this.model.get("progress")* 10;
      var filled = Math.floor(num);
      var empty = 10 - filled;
      _.each(_.range(0,filled), function(){
        data.push({status: "filled"});
      });
      _.each(_.range(0,empty), function(){
        data.push({status: "empty"});
      });
      return {blocks: data};
     },

     render: function() {
      var data = this.renderData();
      this.$el.html(this.template(data));
      return this;
     }

  });

  views.Issue = Backbone.View.extend({
    template: JST["issue"],

    className: "issue",

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      var progress = new views.Progress({
        el: this.$(".progress"),
        model: this.model
      });
      progress.render();
      return this;
    }

  });

})(bugtracker.bb_views = {});