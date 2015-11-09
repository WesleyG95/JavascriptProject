$('#search').keyup(function(){
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, 'i');
	$.getJSON('http://ddragon.leagueoflegends.com/cdn/5.22.1/data/en_US/champion.json', function(results){
		var output = '<ul class="searchresult">';
		
		$.each(results.data, function(key, val) {
			if(val.name.search(myExp) != -1)
			{
				val.name = val.name.replace(/\s+/g, '');
				output +='<li>';
				output +='<h2>' + val.name + '</h2>';
				output +='<img src="http://ddragon.leagueoflegends.com/cdn/5.22.1/img/champion/' + val.image.full + '"></img>';
				output +='<p>' + val.title + '</p>';
				output +='<p>' + val.blurb + '</p>';
				output +='</li>';
			}
		});
		
		output += '</ul>';
		$('#update').html(output);
		
	});
});

/*
$('#search').keyup(function(){
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, 'i');
	$.getJSON('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=b38114a0-1167-4959-8137-98e9e3103f8c', function(data){
		var output = '<ul class="searchresult">';
		$.each(data, function(key, val){
			if((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
				output +='<li>';
				output +='<h2>' + val.name + '</h2>';
				output +='<img src="images/' + val.shortname + '_tn.jpg" alt="'+ val.name +'" />';
				output +='<p>' + val.bio + '</p>';
				output +='</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	});
});
*/