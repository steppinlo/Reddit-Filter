Meteor.startup(function () {
  if (Teams.find().count() === 0) {
    [
      {name: "BenisaTen"},
      {name: "TracyissoCracy"},
      {name: "Angela"}
    ].forEach(function(team){
      Teams.insert(team);
    });
  }
});
