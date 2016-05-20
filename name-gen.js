/*
   All names are from Matt Finch's Borderland Provinces Campaign setting book. He has given permission for their use in this single specific case. If you wish to use them for any other purpose, even another hireling generator then you must gain his permission for that use also.
   */
var first_aachen_male = ['Adjan', 'Aimery', 'Alain', 'Althien', 'Arnault', 'Asemar', 'Balthazart', 'Baudoin', 'Beneset', 'Bernart', 'Bernart', 'Bertran', 'Bertran', 'Carfot', 'Cercamont', 'Ciamel', 'Clasculac', 'Claud', 'Cleeljat', 'Clement', 'Cleomarc', 'Clespiar', 'Cluvien', 'Dalfot', 'Danyel', 'Dormert', 'Emeric', 'Etienne', 'Felip', 'Felquet', 'Foerdi', 'Galtier', 'Gaspart', 'Gaston', 'Gaucelm', 'Girault', 'Guardamon', 'Guilcamon', 'Guilhaut', 'Guilhelm', 'Guillaume', 'Guillem', 'Guy', 'Henri', 'Hugh', 'Huicat', 'Huilienj', 'Hurtold', 'Isarn', 'Jacalt', 'Jacques', 'Jean', 'Jocat', 'Joffrey', 'Jogues', 'Juliac', 'Julian', 'Louis', 'Marcabrun', 'Martin', 'Martin', 'Maurice', 'Melcamont', 'Meljat', 'Meljian', 'Moulienj', 'Olivier', 'Oth', 'Oton', 'Paul', 'Peyrot', 'Pierlou', 'Pierol', 'Polbasc', 'Porthos', 'Raielh', 'Raimon', 'Raimond', 'Savario', 'Savort', 'Sebastian', 'Selerm', 'Stroul', 'Suarvier', 'Talbot', 'Tallac', 'Tellac', 'Tomas', 'Toussaint', 'Tristan', 'Valentin', 'Vasvier', 'Vidal', 'Walter', 'Albair', 'Alberto', 'Kyot', 'Miquel', 'Pierre', 'Piers', 'Robert', 'Roberto'];
var first_eastreach_male = ['Adward', 'Alan', 'Albert', 'Alwin', 'Ambrose', 'Arnold', 'Atson', 'Barthelby', 'Beal', 'Bertrand', 'Bill', 'Bindle', 'Bodwyn', 'Borneod', 'Botho', 'Brogan', 'Bruno', 'Clarth', 'Cormac', 'Courtland', 'Dunald', 'Duncan', 'Duthwin', 'Eddar', 'Emery', 'Eoden', 'Fergus', 'Galt', 'Geoffrey', 'Gesper', 'Giles', 'Gort', 'Gwion', 'Halwin', 'Harken', 'Hart', 'Helmorth', 'Henry', 'Herswith', 'Hestle', 'Hugh', 'Hugh', 'Hugo', 'Ian', 'Jack', 'Jacob', 'Jerss', 'John', 'Jory', 'Kay', 'Keffin', 'Lud', 'Markin', 'Markle', 'Melfyn', 'Melgin', 'Mellon', 'Neal', 'Nicolas', 'Nye', 'Odo', 'Oswyn', 'Oxibur', 'Pagan', 'Parthit', 'Philip', 'Pracken', 'Prospect', 'Quinn', 'Randwin', 'Redwyn', 'Robert', 'Seeler', 'Siamon', 'Spindle', 'Swain', 'Thaddeus', 'Thomas', 'Turbert', 'Tywen', 'Urman', 'Valman', 'Vossin', 'Wallen', 'Walter', 'Warren', 'Wat', 'Wergeld', 'Wickett', 'William', 'Wulfred', 'Yard', 'Yodel', 'Zellard', 'Almaric', 'Milo', 'Peter', 'Petry', 'Seren', 'Todric'];
var last_aachen = ['Azur', 'Barakeen', 'Bezentier', 'Bordelan', 'Briarc', 'Burguniot', 'Campania', 'Capet', 'Carinzac', 'Carnelot', 'Chenard', 'Chioc', 'Contretu', 'Corbin', 'Corenza', 'Cortil', 'Dalfinet', 'Defoere', 'Delac', 'Drampart', 'Esrevaine', 'Fintz', 'Fogelvide', 'Freyathier', 'Galondier', 'Ghendirac', 'Gherier', 'Gonfaloneer', 'Gornault', 'Huebit', 'Huillot', 'Jalatar', 'Jamac', 'Jeyquayt', 'Jolien', 'Kanticleer', 'Keltrantz', 'Keston', 'Kilsanje', 'Le', 'Leocurt', 'Leot', 'Letranj', 'Manasin', 'Marcalt', 'Marroy', 'Meer', 'Melhor', 'Meratz', 'Meridian', 'Merlott', 'Ocseval', 'Octaj', 'Oris', 'Ormaloon', 'Ortalan', 'Ortaliot', 'Palindar', 'Parvantine', 'Pavan', 'Peregrin', 'Perroket', 'Poulett', 'Provensall', 'Quillarc', 'Rohelain', 'Rondemeer', 'Rovenac', 'Sanzalot', 'Sketre', 'Sondrelan', 'Sul', 'Sulerat', 'Sulien', 'Surlenetz', 'Talacar', 'Talaric', 'Tarquin', 'Teliondra', 'Toullen', 'Traval', 'Troubeyl', 'Turcott', 'Turin', 'Ulbrec', 'Vaun', 'Ventador', 'Venzac', 'Vidal', 'Vismarc', 'Vourdon', 'Yllac', 'Yolbiac', 'Ystin', 'Bonfilh', 'Pairdiou', 'Redmont', 'Sulien', 'Tarsentier'];
var last_eastreach = ['Abbitry', 'Ardensman', 'Banter', 'Bardiman', 'Bargol', 'Broave', 'Burgess', 'Chark', 'Clevistoke', 'Cooper', 'Croaten', 'Cromwail', 'Crowcatcher', 'Daan', 'Deacon', 'Drandle', 'Falzabond', 'Fauble', 'Faudily', 'Firkin', 'Fisherdawn', 'Forester', 'Gaelonder', 'Garrison', 'Gaunt', 'Glimrill', 'Gortboat', 'Grangit', 'Hawkins', 'Heldring', 'Heuldown', 'Highcourt', 'Highlander', 'Hoondy', 'Horntile', 'Innskelling', 'Ishenbeck', 'Iudarc', 'Jeems', 'Mar', 'Jorpen', 'Kets', 'Lanternlight', 'Littleward', 'Lowlander', 'Lowwater', 'Lurrible', 'Macobert', 'Magnus', 'Marcher', 'Markoom', 'Medley', 'Melcott', 'Mitrand', 'Morcam', 'Muiriman', 'Naisby', 'Opty', 'Orfendil', 'Ormian', 'Osbert', 'Parlendale', 'Pennyworthy', 'Penperthy', 'Pepperman', 'Ploverdill', 'Porterman', 'Quarin', 'Quindle', 'Rambert', 'Rood', 'Rooster', 'Saltwater', 'Shiresman', 'Smith', 'Spindler', 'Stubble', 'Swithin', 'Swynn', 'Thane', 'Thyrriman', 'Torrin', 'Trackle', 'Tunion', 'Twines', 'Ushery', 'Venipp', 'Waldwater', 'Waxish', 'Weir', 'Wenter', 'Yambles', 'Yarne', 'Zorbicks', 'Bantry', 'Orson', 'Oerson', 'Ploutin', 'Shield', 'Swithin'];

var first_aachen_female = ['Adjanie', 'Aimelle', 'Alaina', 'Alitzia', 'Althiena', 'Aseile', 'Auril', 'Balthazine', 'Beguille', 'Beldienne', 'Belletelia', 'Benetzelle', 'Bertrandel', 'Carfarine', 'Cercamelle', 'Ciamela', 'Clascaile', 'Claudette', 'Cleira', 'Clejacinde', 'Clemesinthe', 'Clespia', 'Cluvienne', 'Daania', 'Dalencia', 'Danyelle', 'Dormerinne', 'Esylt', 'Eylaran', 'Falasinthe', 'Fierann', 'Foerdia', 'Freyat', 'Galiatia', 'Gallerine', 'Ghirmine', 'Gialmia', 'Giselle', 'Guilcamet', 'Guilhera', 'Guillemin', 'Guinevere', 'Halia', 'Halline', 'Henriett', 'Hermienne', 'Iocasta', 'Isarnia', 'Jacaltia', 'Jacqueline', 'Jeanne', 'Jenivere', 'Jillienne', 'Jocasta', 'Joffrine', 'Julia', 'Julienne', 'Katrinne', 'Kylivere', 'Lienja', 'Louette', 'Marcabrine', 'Martina', 'Martinette', 'Mauricelle', 'Melisse', 'Meljathia', 'Meljiette', 'Miqueline', 'Oersia', 'Olivia', 'Othine', 'Otonnie', 'Palcinet', 'Peyrovanne', 'Piera', 'Pierlanne', 'Pieroline', 'Piertinne', 'Polbasinne', 'Raielha', 'Raimelie', 'Raimona', 'Rosbertine', 'Saavia', 'Savariette', 'Sebaette', 'Selecine', 'Seleia', 'Strallinne', 'Talberie', 'Tallacine', 'Tomasine', 'Toussaintine', 'Tristalle', 'Valentina', 'Valeria', 'Videnne', 'Wistrianne'];
var first_eastreach_female = ['Aliana', 'Alice', 'Almarinda', 'Alyria', 'Atsaine', 'Barthil', 'Bealdrun', 'Beladine', 'Bertianne', 'Bessilia', 'Biniss', 'Bornaliss', 'Briana', 'Carmen', 'Claress', 'Claudia', 'Cormacine', 'Courtney', 'Dalarin', 'Dunwynn', 'Dythren', 'Eduine', 'Elaine', 'Emily', 'Eowynn', 'Faradila', 'Galtania', 'Gessivere', 'Gilliana', 'Gorlana', 'Guindara', 'Guinivere', 'Gwien', 'Halwen', 'Harklinn', 'Hartsvere', 'Hayla', 'Helena', 'Herswen', 'Heslieth', 'Ianeria', 'Ingril', 'Isarne', 'Jaclinn', 'Jeanette', 'Jesslyn', 'Joy', 'Kay', 'Kylaina', 'Kyllera', 'Louisa', 'Markleia', 'Marlena', 'Melfianna', 'Melginia', 'Mellara', 'Milimara', 'Miribelle', 'Nialda', 'Nicole', 'Nylaine', 'Odwina', 'Olivia', 'Oscela', 'Ossine', 'Pagana', 'Parthitelle', 'Piresse', 'Praccania', 'Prosperine', 'Raniss', 'Rediss', 'Rilriss', 'Seelserynn', 'Serenia', 'Siamone', 'Sisterill', 'Spinilen', 'Swanille', 'Teliandra', 'Tessina', 'Thadlaine', 'Thomasine', 'Turceline', 'Tyweness', 'Valwen', 'Vossille', 'Walwynn', 'Wendria', 'Wicwynn', 'Wilaina', 'Wylfrieda', 'Wyrwyth', 'Yardcyl', 'Yscalie', 'Yssende', 'Yssila', 'Zellriss', 'Aliana'];


function _randomRange(min,max) {
	    var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
		    return randomNumber;
}

function name_gen(gender) {
	var first_name;
	var last_name;
	var first, last;
	if (_randomRange(0,1) == 0) {
		last_name = last_eastreach;
		if (gender) {
			first_name = first_eastreach_female;
		} else {
			first_name = first_eastreach_male;
		}
	}
	else {
		last_name = last_aachen;
		if (gender) {
			first_name = first_aachen_female;
		} else {
			first_name = first_aachen_male;
		}
	}
	first = _randomRange(0,first_name.length-1);
	last = _randomRange(0,last_name.length-1);
	return first_name[first] + ' ' + last_name[last];
}

function name_credits() {
	return "Names courtesy of Matt Finch, from his Borderland Provinces campaign setting book. Available at <a href=http://www.tabletoplibrary.com>TableTopLibrary</a>, along with other great Matt Finch, OSR, 5e and RPG products.";
}
