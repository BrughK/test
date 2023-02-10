const User = require('./User');
const Teams = require('./Teams');
const Players = require('./Players');
const Roster = require('./Roster');
const { Player } = require('cfb.js');

// user only gets to have one roster. (one to one)
User.hasOne(Roster, {
   foreignKey: 'user_id',
   onDelete: 'CASCADE',
})

// roster belongs to user.
Roster.belongsTo(User, {
   foreignKey: 'user_id',
})

// Teams have many players. (Many to one)
Teams.hasMany(Players, {
   foreignKey: 'teams_id',
   onDelete:'CASCADE',
})

//players belongs to teams.
Players.belongsTo(Teams, {
   foreignKey: 'teams_id',
})

Roster.hasMany(Players, {
   foreignKey: 'roster_id',
   onDelete: "CASCADE",
})

Players.belongsTo(Roster, {
   foreignKey: 'roster_id',
})



module.exports = {
     User,
     Teams,
     Players,
     Roster,
};

