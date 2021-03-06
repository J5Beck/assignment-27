(function(views){
 
  views.Progress = React.createBackboneClass({
    
    createBlock: function(block) {
      var cssClass = "block " + block.status;
      return React.createElement("span", {className: cssClass});
    },

    blockData: function() {
      var data = [];
      var num = this.props.model.get("progress") * 10;
      var filled = Math.floor(num);
      var empty = 10 - num;
      console.log(num, filled, empty);
      _.each(_.range(0, filled), function() {
        data.push({status: "filled"});
      });
      _.each(_.range(0, empty), function() {
        data.push({status: "empty"});
      });
      return data;
    },

    render: function() {
      return (
        React.createElement("div", {className: "progress"}, 
           this.blockData().map(this.createBlock) 
        )
      );
    },

  });

  views.Issue = React.createBackboneClass({
    render: function() {
      return (
        React.createElement("div", {className: "issue"}, 
          React.createElement("div", {className: "name"}, this.props.model.get("name")), 
          React.createElement(views.Progress, {model: this.props.model})
        )
      );
    }
  });

  views.IssueList = React.createBackboneClass({

    getItem: function(model, index) {
      return React.createElement(views.Issue, {model: model, key: index});
    },

    render: function() {
      return (
        React.createElement("div", null, 
           this.props.collection.map(this.getItem)
        )
      );
    }

  });

})(bugtracker.r_views = {});
