 $(document).ready(function mySearch(){
 var data = [
    {
           "Record":"1",
           "Character":"<h3>Luke Skywalker</h3>",
           "Image":"./images/luke.png",
           "Homeworld":"Tatooine",
           "Profession":"Jedi Master",
           "Afilliation":" Rebel Alliance; New Republic; New Jedi Order; Resistance",
           "Spaceship":" X-Wing",
           "Ship": "./images/x-wing.png",
           "Parents": "  Anakin Skywalker", 
           "Siblings": " Lea Skywalker", 
           "Age": "50", 
           "Teacher": " Yoda; Obi Wan Kenobi",
           "Profile":"<a href=https://starwars.fandom.com/wiki/Luke_Skywalker>Profile Homepage</a>",
           "Report":"<a href=./reports/starwars.pdf>Star Wars 1973 Scripts</a>",
           "Blueprint":"<a href=./images/x_wing_blueprint.png>X-Wing Blueprint</a>"
    }, 
    {
            "Record":"2",
            "Character":"<h3>Din Djarin: Mandalorian</h3>",
            "Image":"./images/mando.png",
            "Homeworld":" Mandalore",
            "Profession":" Bounty Hunter",
            "Afilliation":" New Republic",
            "Spaceship":" Razor Crest",
            "Ship": "./images/razor.png",
            "Parents": " None ", 
            "Siblings": " None",
            "Age": "50", 
            "Teacher": "The Armorer; Boba Fett; Paz Vizsla",
            "Profile":"<a href=https://characterprofile.fandom.com/wiki/The_Mandalorian#1>Profile Homepage</a>",
            "Report":"<a href=./reports/starwars.pdf>Star Wars 1973 Scripts</a>",
            "Blueprint":"<a href=./images/razor_blueprint.png>Razor Crest Blueprint</a>"
    },
   
    {
            "Record":"3",
            "Character":"<h3>Darth Vader, Anakin Skywalker</h3>",
            "Image":"./images/vader.png",
            "Homeworld":" Tatooine",
            "Profession":" Lord Sith; Jedi Master, Empirial Commander",
            "Afilliation":" Jedi Order,Galactic Republic,Grand Army of the Republic,501st Legion Sith,Galactic Empire,Imperial High Command,Imperial Military",
            "Spaceship":" Tie-Fighter",
            "Ship": "./images/tie_fighter.png", 
            "Parents": "Shmi Skywalker ", 
            "Siblings": " None ", 
            "Age": "50",
            "Teacher": "Obi Wan Kenobi, Darth Sidious",
            "Profile":"<a href=https://starwarsrebels.fandom.com/wiki/Darth_Vader>Profile Homepage</a>",
            "Report":"<a href=./reports/starwars.pdf>Star Wars 1973 Scripts</a>",
            "Blueprint":"<a href=./images/tie_fighter_blueprint.png>Tie-Fighter Blueprint</a>"
    },
    
    {
            "Record":"4",
            "Character":"<h3>Boba Fett</h3>",
            "Image":"./images/fett.png",
            "Homeworld":" Kamino",
            "Profession":" Bounty Hunter; Assasin",
            "Afilliation":" Empire; New Republic; The Fringe",
            "Spaceship":" FireSpray",
            "Ship": "./images/firespray.png", 
            "Parents": " Jango Fett",
            "Siblings": " None ",
            "Age": "150",
            "Teacher": "Jango Fett; Jabba the Hutt",
            "Profile":"<a href=https://www.starwars.com/databank/boba-fett>Profile Homepage</a>",
            "Report":"<a href=./reports/starwars.pdf>Star Wars 1973 Scripts</a>",
            "Blueprint":"<a href=./images/firespray_blueprint.png>Firespray</a>"
    },
    
    {
            "Record":"5",
            "Character":"<h3>Princess Leia Skywalker Organa Solo</h3>",
            "Image":"./images/leia.png",
            "Homeworld":" Alderan",
            "Profession":" Princess",
            "Afilliation":" Rebel Alliance; The Resistance; Galactic Senate; Alderaan Royal Family ",
            "Spaceship":" Tentative IV",
            "Ship": "./images/tentative_4.png", 
            "Parents": " Anakin Skywalker and Princess Patne Organa", 
            "Siblings": "Luke Skywalker",
            "Age": "60",
            "Teacher": "Luke Skywalker, ",
            "Profile":"<a href=https://starwars.fandom.com/wiki/Leia_Skywalker_Organa_Solo>Profile Homepage</a>",
            "Report":"<a href=./reports/starwars.pdf>Star Wars 1973 Scripts</a>",
            "Blueprint":"<a href=./images/tentative_4_blueprint.png>Tentative IV</a>"
    },
    
    {
            "Record":"6",
            "Character":"<h3>Han Solo Solo</h3>",
            "Image":"./images/solo.png",
            "Homeworld":" Corellia",
            "Profession":" Merchant, Rebel",
            "Afilliation":" Heroes of Yavin; Endor Strike Team; Rebel Alliance; The Resistance ",
            "Spaceship":" Millenium Falcom",
            "Ship": "./images/millenium_falcon.png",
            "Parents": " Parent: Anakin Skywalker and Princess Patne Organa", 
            "Siblings": " None ",
            "Age": "62",
            "Teacher": "Luke Skywalker, ",
            "Profile":"<a href=https://starwars.fandom.com/wiki/Han_Solo>Profile Homepage</a>",
            "Report":"<a href=./reports/starwars.pdf>Star Wars 1973 Scripts</a>",
            "Blueprint":"<a href=./images/millenium_falcon_blueprint.png>Millenium Falcon</a>"
    }

 ]
     
        $('#txt-search').keyup(function(){
            var searchField = $(this).val();
			if(searchField === '')  {
				$('#content').html('');
				return;
			}
			
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
			  $.each(data, function(key, val){
				if ((val.Character.search(regex) !== -1) || (val.Profession.search(regex) !== -1)|| (val.Homeworld.search(regex) !== -1)|| (val.Ship.search(regex) !== -1)) {
				  output += '<div class="col-md-6 well">';
				  output += '<div class="col-md-3"><img class="img-responsive" src="'+ val.Image +'" alt="'+ val.last_name +'" /></div>';
				  output += '<div class="col-md-7">';
				  output += '<h5>' + val.Character + '</h5>';
				  output += '<p>' + val.Homeworld + '</p>'
                                   output += '<p>' + val.Profession + '</p>'
                                   output += '<p>' + val.Afilliation + '</p>'
                                   output += '<p>' + val.Spaceship + '</p>'
                                   output += '<p class="col-md-3"><img class="img-responsive" src="'+ val.Ship +'" /></p>';
                                   output += '<p>'+ val.Profile + '</p>'
                                   output += '<p>'+ val.Report + '</p>'
                                   output += '<p>'+ val.Blueprint + '</p>'
				  output += '</div>';
				  output += '</div>';
				  if(count%2 == 0){
					output += '</div><div class="row">'
				  }
				  count++;
				}
			  });
			  output += '</div>';
			  $('#content').html(output);
        });
  });