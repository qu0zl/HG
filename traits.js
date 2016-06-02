var traits = [

	// thanks to Stephen Dobson
	"frustrated poet",
	"tries to hide circular scar around neck",
	"one blue eye, one brown",
	"poor personal hygiene",
	"constantly scratching",
	"missing top two front teeth",
	'tattoo on inner forearm in an unusual foreign language that they think says "warrior spirit" but actually means "import duty paid"',
	"thinks they can sing. They're wrong.",
	"silver necklace with four different faiths' holy symbols",
	"dagger with a (costume jewellery) jewelled pommel tucked into their belt",
	"yellow sash stretching from left shoulder to right waist",
	"missing right eye, wears a patch",
	"left little finger missing last joint, scarring evidently old",
	"greying at the temples. attempts to hide with hat.",
	"dirty fingernails",
	"halitosis",
	"heavy drinker (red nose and cheeks)",
	"dried rations make them nauseous",

	// thanks to John Wilson
	"wide mouth",
	"beady eyes",
	"long face",
	"big hands",
	"long legs",
	"bristly hair",
	"limps (but no less agile for it)",
	"lisps",
	"always smiles",
	"greasy",
	"hirsute",

	// thanks to me
	"missing left eye, leaves scar uncovered",
	"has one gold tooth and no others",
	"missing both little fingers",
	'has a pet rat named "Mr Squeek" who lives in their pocket',
	"small hands",
	"dislikes loud noises",
	"scared of dogs",
	"afraid of heights",
	"claustrophobic",
	"tends to whisper",
	"arachnophobic",
	"distrusts men with beards",
	"village wrestling champion",
	"always wanted to be a magic user",
	"un-sure if their chosen deity exists",
	"considers themselves a master of strategy games",
	"inveterate gambler",
	"skilled at sleight of hand tricks",
	"scars run from corners of mouth to below ears",
	"tattoos on fingers of both hands spell words"
];

function get_trait(character_class) {
	var choice = randomRange(0, traits.length-1);
	return(traits[choice]);
}
