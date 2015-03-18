(function(views){
 
  views.Progress = React.createBackboneClass({
    
    createBlock: function(block) {
      var cssClass = "block " + block.status;
      return <span className={cssClass}></span>;
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
        <div className="progress">
          { this.blockData().map(this.createBlock) }
        </div>
      );
    },

  });

  views.Issue = React.createBackboneClass({
    render: function() {
      return (
        <div className="issue">
          <div className="name">{this.props.model.get("name")}</div>
          <views.Progress model={this.props.model}/>
        </div>
      );
    }
  });

  views.IssueList = React.createBackboneClass({

    getItem: function(model, index) {
      return <views.Issue model={model} key={index}/>;
    },

    render: function() {
      return (
        <div>
          { this.props.collection.map(this.getItem)}
        </div>
      );
    }

  });

})(bugtracker.r_views = {});
