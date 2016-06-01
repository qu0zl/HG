
var armour = {
	"chain mail":{
		name: "chain mail",
		ac: 4
	},
	"ring mail":{
		name: "ring mail",
		ac: 3
	},
	"leather": {
		name: "leather",
		ac: 2
	},
	"plate mail": {
		name: "plate mail",
		ac: 6
	}
}

var weapon_groups = {
	"dagger":["dagger"],
	"light":["dagger", "short-sword", "club", "hand-axe", "light mace"],
	"heavy":["battle-axe", "flail", "war-hammer", "heavy mace", "polearm", "spear", "bastard-sword", "long-sword", "two-handed sword"],
	"monk":["light mace", "staff", "spear", "dagger"],
	"cleric":["club", "flail", "war-hammer", "heavy mace", "staff", "light mace"],
	"druid":["dagger", "sickle-shaped sword (short-sword)", "spear"],
	"magic user":["dagger", "staff"],
	"magic user ranged":["darts"],
	"cleric ranged":["sling"],
	"ranged":["short-bow", "long-bow", "sling", "javelin", "heavy crossbow", "light crossbow"],
	"light ranged":["short-bow", "sling", "javelin", "light crossbow"]
}

var armour_groups = {
	"light":[[67, armour["leather"]], [100, armour["ring mail"]]],
	"leather":[[100, armour["leather"]]],
	"heavy":[[20, armour["ring mail"]], [67, armour["chain mail"]], [100, armour["plate mail"]]],
	"all":[[20, armour["leather"]], [33, armour["ring mail"]], [50, armour["chain mail"]], [100, armour["plate mail"]]]

}

function get_weapons(groups) {
	if (groups == undefined)
		return [];
	var length = groups.length;
	var i = 0;
	var weapons = [];
	for (i=0; i<groups.length; i++) {
		var choose = randomRange(1, 100);
		if (choose <= groups[i][0]) {
			var weapon_group = weapon_groups[groups[i][1]];
			var weapon_choice = randomRange(0, weapon_group.length-1);
			// only ever choose 2 weapons max from a weapon group
			if (weapons.push(weapon_group[weapon_choice]) >= 2)
				break;
		}
	}
	return weapons;
}

function get_armour(group) {
	var armour_group = armour_groups[group];
	var i = 0;
	for (i=0; i<armour_group.length; i++) {
		var choice = randomRange(1, 100);
	    if (choice <= armour_group[i][0])
			return armour_group[i][1];
	}
	return undefined;
}
