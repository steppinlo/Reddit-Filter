Template.game.events({
  "click a.finish-game": function(e, tpl){
    e.preventDefault();
    Games.update({_id: this._id}, {$set: {completed: true}});
  },

  "click a.delete-game": function(e, tpl){
    e.preventDefault();
    Games.remove(this._id);
  },

  "click a.score": function(e, tpl){
    e.preventDefault();
    var data = $(e.currentTarget).data();
    var update = {$inc: {}};
    var selector = "teams." + data.index + ".score";
    update.$inc[selector] = data.inc;
    Games.update({_id: this._id}, update);
  }
});
