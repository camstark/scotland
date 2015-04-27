var mainmap = function(){

	//Create Initial Map View
	var map_object = new L.Map('map', {
		center: [56.879109,-3.313462], // Scotland
		zoom: 6,
		defaultExtentControl: true,
	});

	//Chose basemap tiles
	L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	  attribution: '&copy;'
	}).addTo(map_object);

	 var geojson;
	
	//Adding Some Functions
	
	//Highlight point features
	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 3,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera) {
			layer.bringToFront();
		}
		
		info.update(layer.feature.properties);

	}
	
	//Reset the highlight on mouseout
	function resetHighlight(e) {
		var layer = e.target;

		layer.setStyle({
			color: "#000",
			weight: 1,
		});
		
		info.update();

	}
	
	//function zoomToFeature(e) {
	//    map_object.fitBounds(e.target.getBounds(), {padding: [200,200]});
	//}

	//function zoomToFeature(e) {
	//    map_object.setView([-6.196114, 57.412375], 9); //feature.geometry.coordinates
	//}

	//Functions to occur for each city feature
	function onEachFeature(feature, layer) {
	  
		function zoomToFeature(e) {
			map_object.setView([feature.geometry.coordinates[1],feature.geometry.coordinates[0]], feature.geometry.zoom); //feature.geometry.coordinates, 9
		}
		
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
		

		var popupContent = "<p>" + feature.properties.CITY + " (" + feature.properties.ISLE +")"
								+"<br>" + "Arrive: " + feature.properties.DT_ARRIVE
								+"<br>" + "Depart: " + feature.properties.DT_DEPART
								+"<br>" + "Key fun thing: " + feature.properties.FUN;
			    // does this feature have a property named popupContent?
				//if (feature.properties && feature.properties.CITY) {
				//	layer.bindPopup(popupContent);
				//}
	}

	//geoJson formatted city itinerary data
	var geojsonCitiesPoints = [
		{
		"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [-4.251685,55.864516],
				"zoom": 11
			},
			"properties": {
				"CITY": "Glasgow",
				"ISLE": "Place",
				"DT_ARRIVE": "8/31/2015",
				"DT_DEPART": "8/31/2015",
				"HOTEL": "None",
				"NIGHTS": "0",
				"FUN": "Car rental",
				"ITINERARY": "Pick up the rental car and get the hell out of dodge."
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [-3.188904,55.953081],
				"zoom": 11
			},
			"properties": {
				"CITY": "Edinburgh",
				"ISLE": "Edinburgh",
				"DT_ARRIVE": "8/31/2015",
				"DT_DEPART": "9/2/2015",
				"HOTEL": "Motel One",
				"NIGHTS": "2",
				"FUN": "'Culture'",
				"ITINERARY": "Hang out in Edinburgh."
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [-5.483194,56.421897],
				"zoom": 12
			},
			"properties": {
				"CITY": "Oban",
				"ISLE": "N/A",
				"DT_ARRIVE": "9/2/2015",
				"DT_DEPART": "9/3/2015",
				"HOTEL": "Barriemore",
				"NIGHTS": "1",
				"FUN": "Scotch",
				"ITINERARY": "TBD"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [-5.026011,56.668997],
				"zoom": 10
			},
			"properties": {
				"CITY": "Glencoe",
				"ISLE": "Highlands",
				"DT_ARRIVE": "9/3/2015",
				"DT_DEPART": "9/3/2015",
				"HOTEL": "N/A",
				"NIGHTS": "0",
				"FUN": "Hillwalking",
				"ITINERARY": "Lost Valley, Aonach Eagach"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [-5.108478,56.818718],
				"zoom": 12
			},
			"properties": {
				"CITY": "Fort William",
				"ISLE": "Highlands",
				"DT_ARRIVE": "9/3/2015",
				"DT_DEPART": "9/4/2015",
				"HOTEL": "Ossian's Hotel",
				"NIGHTS": "1",
				"FUN": "Scotch",
				"ITINERARY": "Arrive after a day of hillwalking in Glencoe."
			},
		},		
		{
		"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [-6.196114, 57.412375],
				"zoom": 11
			},
			"properties": {
				"CITY": "Portree",
				"ISLE": "Skye",
				"DT_ARRIVE": "9/4/2015",
				"DT_DEPART": "9/6/2015",
				"HOTEL": "Woodlands B&B",
				"NIGHTS": "2",
				"FUN": "Highland Games",
				"ITINERARY": "Spend some nights with Joan-Anne once she has returned all of our destroyed credit card information and then we'll be able to see the Isle of Skye!"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [-7.012138,57.768419],
				"zoom": 12
			},
			"properties": {
				"CITY": "Leverburgh",
				"ISLE": "Harris",
				"DT_ARRIVE": "9/6/2015",
				"DT_DEPART": "9/7/2015",
				"HOTEL": "Carminish Inn",
				"NIGHTS": "1",
				"FUN": "Remote; Puffins",
				"ITINERARY": "TBD"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [-6.196114, 57.412375],
				"zoom": 11
			},
			"properties": {
				"CITY": "Portree",
				"ISLE": "Skye",
				"DT_ARRIVE": "9/7/2015",
				"DT_DEPART": "9/8/2015",
				"HOTEL": "Woodlands B&B",
				"NIGHTS": "1",
				"FUN": "Port Righ",
				"ITINERARY": "Back here after an excursion to the Isle of Harris!"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [-4.251685,55.864516],
				"zoom": 11
			},
			"properties": {
				"CITY": "Glasgow",
				"ISLE": "Place",
				"DT_ARRIVE": "9/8/2015",
				"DT_DEPART": "9/9/2015",
				"HOTEL": "Novotel Glasgow",
				"NIGHTS": "1",
				"FUN": "Pubs",
				"ITINERARY": "Spend some time. Depart GLA at 9:30am..."
			},
		},		
	];

	 

	/*var geojsonMarkerOptions = {
		radius: 5,
		fillColor: getColor(feature.properties.NIGHTS),//"#9ecae1", //#cf1b41
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	};*/


	var scotland = L.geoJson(geojsonCitiesPoints, {
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, { //geojsonMarkerOptions
											radius: 5,
											fillColor: getColor(feature.properties.NIGHTS),//"#9ecae1", //#cf1b41
											color: "#000",
											weight: 1,
											opacity: 1,
											fillOpacity: 0.8
											}
			);
		},
		onEachFeature: onEachFeature,
	}).addTo(map_object);

	
	//Infobox
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
		this.update();
		return this._div;
	};

	// method that we will use to update the control based on feature properties passed
	info.updateSegment = function (props) {
	
		this._div.innerHTML = '<h4>Itinerary</h4>' +  (props ?
			'<b> Travel from ' + props.DEPART + ' to ' + props.ARRIVE + '</b><br /> on ' + props.PLAINDATE + '<br /> (' + props.DISTANCE + ' km. ' + props.TIME + ' drive)' 
			: 'Hover over a destination')
		;
	};
	
	info.update = function (props) {
	
		this._div.innerHTML = '<h4>Itinerary</h4>' +  (props ?
			'<b>' + props.NIGHTS + ' nights in ' + props.CITY + '</b> (' + props.ISLE + ')<br /> Arrive ' + props.DT_ARRIVE + ' and depart ' + props.DT_DEPART + '<br /> Accomodation: ' + props.HOTEL + '<br /> Fun: ' + props.FUN + '<br />' + props.ITINERARY 
			: 'Hover over a destination')
		;
	};
	
	//Add the infobox to the map
	info.addTo(map_object);


	//getColor function from Leaflet chropleth map example
	function getColor(d) {
		return d > 2  ? '#2171b5' :
			   d > 1  ? '#6baed6' :
			   d > 0  ? '#bdd7e7' :
						'#eff3ff';
	}

	//Legend
	var legend = L.control({position: 'bottomleft'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 1, 2, 3],
			labels = [];

		// loop through our density intervals and generate a label with a colored square for each interval
		/*for (var i = 0; i < grades.length; i++) {
			div.innerHTML +=
				'<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
				grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + ' nights<br>' : '+');
		}*/
		div.innerHTML = 'Nights<br>';
		for (var i = 0; i < grades.length; i++) {
			div.innerHTML +=
				'<i style="background:' + getColor(grades[i]) + '"></i> ' +
				grades[i] + '<br>';
		}	
		
		return div;
	};

	legend.addTo(map_object);

	//geoJson routes data
	var routes = [
		{
		"type": "Feature",
			"geometry": {
				"type": "LineString",
				"coordinates": [[-4.251685,55.864516], [-3.188904,55.953081]]
			},
			"properties": {
				"DEPART": "Glasgow",
				"ARRIVE": "Edinburgh",
				"DATE": "8/31/2015",
				"PLAINDATE": "Friday, July 31st",
				"TIME": "1 hour",
				"DISTANCE": "75"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "LineString",
				"coordinates": [[-3.188904,55.953081], [-5.483194,56.421897]]
			},
			"properties": {
				"DEPART": "Edinburgh",
				"ARRIVE": "Oban",
				"DATE": "9/2/2015",
				"PLAINDATE": "Sunday, August 2nd",
				"TIME": "3 hour",
				"DISTANCE": "200"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "LineString",
				"coordinates": [[-5.483194,56.421897],[-5.026011,56.668997]]
			},
			"properties": {
				"DEPART": "Oban",
				"ARRIVE": "Glencoe",
				"DATE": "9/3/2015",
				"PLAINDATE": "Monday, August 3rd",
				"TIME": "45 minute",
				"DISTANCE": "40",
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "LineString",
				"coordinates": [[-5.026011,56.668997], [-5.108478,56.818718]]
			},
			"properties": {
				"DEPART": "Glencoe",
				"ARRIVE": "Fort William",
				"DATE": "9/3/2015",
				"PLAINDATE": "Monday, August 3rd",
				"TIME": "30 minute",
				"DISTANCE": "30"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "LineString",
				"coordinates": [[-5.108478,56.818718], [-6.196114, 57.412375]]
			},
			"properties": {
				"DEPART": "Fort William",
				"ARRIVE": "Portree",
				"DATE": "9/4/2015",
				"PLAINDATE": "Tuesday, August 4th",
				"TIME": "2.5 hour",
				"DISTANCE": "175"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "LineString",
				"coordinates": [[-6.196114, 57.412375], [-7.012138,57.768419]]
			},
			"properties": {
				"DEPART": "Portree",
				"ARRIVE": "Leverburgh",
				"DATE": "9/6/2015",
				"PLAINDATE": "Thursday, August 6th",
				"TIME": "3.5 hour",
				"DISTANCE": "100"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "LineString",
				"coordinates": [[-7.012138,57.768419],[-6.196114, 57.412375]]
			},
			"properties": {
				"DEPART": "Leverburgh",
				"ARRIVE": "Portree",
				"DATE": "9/7/2015",
				"PLAINDATE": "Friday, August 7th",
				"TIME": "3.5 hour",
				"DISTANCE": "100"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "LineString",
				"coordinates": [[-6.196114, 57.412375],[-4.251685,55.864516]]
			},
			"properties": {
				"DEPART": "Portree",
				"ARRIVE": "Glasgow",
				"DATE": "9/8/2015",
				"PLAINDATE": "Saturday, August 8th",
				"TIME": "5 hour",
				"DISTANCE": "350"
			},
		},
		{
		"type": "Feature",
			"geometry": {
				"type": "LineString",
				"coordinates": [
					[-4.25161,55.86483],[-4.25369,55.86505],[-4.25389,55.86507],[-4.25375,55.86546],[-4.25371,55.8656],[-4.25372,55.86567],[-4.25383,55.86597],[-4.25393,55.86604],[-4.25451,55.86724],[-4.25538,55.86996],[-4.25369,55.86998],[-4.25221,55.8699],[-4.25156,55.86987],[-4.25147,55.87004],[-4.25126,55.87043],[-4.25022,55.87029],[-4.24696,55.87001],[-4.24462,55.86968],[-4.241,55.86927],[-4.23865,55.86886],[-4.23662,55.86812],[-4.2341,55.86705],[-4.23273,55.8666],[-4.23137,55.86638],[-4.22887,55.86622],[-4.22448,55.86613],[-4.22133,55.8664],[-4.21709,55.86695],[-4.21328,55.86721],[-4.21121,55.8676],[-4.20511,55.86899],[-4.20132,55.87019],[-4.19937,55.87089],[-4.19525,55.87207],[-4.19284,55.87266],[-4.19052,55.87344],[-4.18883,55.87388],[-4.18767,55.87405],[-4.18646,55.87409],[-4.18516,55.874],[-4.1837,55.87367],[-4.18215,55.87304],[-4.17989,55.87186],[-4.17813,55.87113],[-4.17613,55.87014],[-4.17382,55.86863],[-4.1727,55.86819],[-4.17127,55.86789],[-4.16997,55.86782],[-4.16807,55.86794],[-4.16344,55.86846],[-4.15217,55.86967],[-4.14901,55.86983],[-4.14415,55.86983],[-4.14189,55.86971],[-4.13936,55.86943],[-4.13677,55.86896],[-4.13438,55.86835],[-4.13192,55.86751],[-4.12972,55.86653],[-4.12734,55.86531],[-4.12546,55.86459],[-4.12241,55.86388],[-4.11488,55.86259],[-4.10577,55.8613],[-4.10335,55.86064],[-4.10196,55.86008],[-4.10049,55.85932],[-4.09882,55.85813],[-4.09745,55.85706],[-4.0953,55.85563],[-4.09285,55.85435],[-4.09013,55.85323],[-4.08737,55.85226],[-4.08057,55.84968],[-4.07841,55.84885],[-4.07649,55.84834],[-4.0729,55.84787],[-4.0698,55.84753],[-4.06589,55.84711],[-4.06067,55.84629],[-4.05434,55.84493],[-4.05099,55.84435],[-4.04717,55.8439],[-4.03576,55.84256],[-4.0252,55.84132],[-4.00435,55.839],[-3.99675,55.83803],[-3.98754,55.83739],[-3.9802,55.83642],[-3.95424,55.83261],[-3.95125,55.83227],[-3.9482,55.83215],[-3.94496,55.83225],[-3.94181,55.83259],[-3.93883,55.83314],[-3.93186,55.83495],[-3.91524,55.83932],[-3.90546,55.84183],[-3.89775,55.84342],[-3.89337,55.84411],[-3.88927,55.84465],[-3.88014,55.84544],[-3.85805,55.84706],[-3.85362,55.84753],[-3.84978,55.84812],[-3.84565,55.84904],[-3.83611,55.85197],[-3.82843,55.85452],[-3.82555,55.85508],[-3.82236,55.85536],[-3.81793,55.85528],[-3.81279,55.8551],[-3.80998,55.85503],[-3.80737,55.85509],[-3.80313,55.8554],[-3.80012,55.85568],[-3.79217,55.85658],[-3.78631,55.85742],[-3.77685,55.85911],[-3.7705,55.86048],[-3.76465,55.86193],[-3.75601,55.86414],[-3.74969,55.86558],[-3.74152,55.86715],[-3.7348,55.86821],[-3.72948,55.86891],[-3.72221,55.86967],[-3.71555,55.87016],[-3.70981,55.87044],[-3.70194,55.87061],[-3.6856,55.87054],[-3.67132,55.87049],[-3.6669,55.87064],[-3.66379,55.87101],[-3.6604,55.87163],[-3.65752,55.87241],[-3.65232,55.87432],[-3.65047,55.87499],[-3.64814,55.87568],[-3.64559,55.87626],[-3.64151,55.87687],[-3.63641,55.87726],[-3.63419,55.87747],[-3.63163,55.87784],[-3.62836,55.87855],[-3.62532,55.87947],[-3.62229,55.88069],[-3.61989,55.88192],[-3.6053,55.89022],[-3.59788,55.89444],[-3.59224,55.89755],[-3.58568,55.9005],[-3.55321,55.91466],[-3.55071,55.91559],[-3.54846,55.91626],[-3.54583,55.91684],[-3.54329,55.91723],[-3.54123,55.91743],[-3.53806,55.91756],[-3.53545,55.91749],[-3.53298,55.91729],[-3.52931,55.91679],[-3.52688,55.91655],[-3.52393,55.91641],[-3.51933,55.91655],[-3.51503,55.91708],[-3.5089,55.91839],[-3.50508,55.9191],[-3.50021,55.91977],[-3.49516,55.92019],[-3.49053,55.92035],[-3.48511,55.92039],[-3.47878,55.92056],[-3.47269,55.92111],[-3.46661,55.92205],[-3.46299,55.92282],[-3.45787,55.92419],[-3.4517,55.92593],[-3.44824,55.92658],[-3.44547,55.9269],[-3.44188,55.92707],[-3.43896,55.92701],[-3.43487,55.92664],[-3.42962,55.92573],[-3.42559,55.92525],[-3.42574,55.9251],[-3.42539,55.92964],[-3.42493,55.93591],[-3.42473,55.94271],[-3.42472,55.9489],[-3.42487,55.95363],[-3.42032,55.95385],[-3.41776,55.95425],[-3.41538,55.95487],[-3.41104,55.95636],[-3.4084,55.95702],[-3.40457,55.95756],[-3.39947,55.95802],[-3.39751,55.95808],[-3.39017,55.9578],[-3.38611,55.95746],[-3.38326,55.95691],[-3.38131,55.95633],[-3.37926,55.95549],[-3.37791,55.95476],[-3.37651,55.95383],[-3.37334,55.95134],[-3.37091,55.94965],[-3.36906,55.94866],[-3.36742,55.94798],[-3.3654,55.94736],[-3.36243,55.94677],[-3.35945,55.94652],[-3.35659,55.94656],[-3.35405,55.94685],[-3.3519,55.94728],[-3.34998,55.94783],[-3.34832,55.94845],[-3.34228,55.95115],[-3.3412,55.95163],[-3.34082,55.95191],[-3.34069,55.95228],[-3.34039,55.95262],[-3.34,55.95279],[-3.33933,55.95287],[-3.33868,55.95264],[-3.33839,55.9521],[-3.33735,55.95107],[-3.33431,55.94889],[-3.33256,55.94785],[-3.33222,55.94765],[-3.33167,55.94755],[-3.33039,55.94775],[-3.32965,55.948],[-3.32849,55.94828],[-3.32705,55.94846],[-3.32486,55.94876],[-3.32061,55.9496],[-3.32013,55.94966],[-3.31983,55.94973],[-3.31946,55.94998],[-3.31767,55.95018],[-3.31264,55.95086],[-3.30979,55.95134],[-3.3095,55.95152],[-3.30919,55.95174],[-3.30881,55.95175],[-3.30849,55.95165],[-3.30793,55.95164],[-3.30676,55.95186],[-3.30322,55.95271],[-3.29901,55.95376],[-3.29862,55.95399],[-3.29859,55.95406],[-3.29835,55.95422],[-3.2972,55.95417],[-3.29619,55.95439],[-3.29529,55.95485],[-3.2934,55.95593],[-3.29068,55.95705],[-3.28993,55.95713],[-3.28685,55.95721],[-3.28488,55.95735],[-3.28395,55.95758],[-3.27925,55.95904],[-3.27823,55.95889]
					]
			},
			"properties": {
				"DEPART": "Glasgow",
				"ARRIVE": "Edinburgh",
				"DATE": "8/31/2015",
				"PLAINDATE": "Friday, July 31st",
				"TIME": "1 hour"
			},
		},
	];

	//Reset highlight for line segments
	function resetHighlightSegment(e) {
		var layer = e.target;

		layer.setStyle({
			color: "#666",
			weight: 1,
		});
		
		info.updateSegment();

	}
	
	//Highlight function for line segments
	function highlightFeatureSegment(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 4,
			color: '#cf1b41',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera) {
			layer.bringToFront();
		}
		
		info.updateSegment(layer.feature.properties);

	}
	
	function onEachSegment(feature, layer) {
	  
		function zoomToFeatureSegment(e) {
			//map_object.fitBounds(L.LatLngBounds([[-5.026011,56.668997],[-5.483194,56.421897]]));
			//map_object.setView([-6.196114, 57.412375], 9);
			//map_object.setView([feature.geometry.coordinates[0][1],feature.geometry.coordinates[0][0]], 8);
			map_object.fitBounds(e.target.getBounds());
		}
		
		layer.on({
			mouseover: highlightFeatureSegment,
			mouseout: resetHighlightSegment,
			click: zoomToFeatureSegment
		});
		
	}

	L.geoJson(routes, {	color: "#666",
						weight: 1,
						opacity: 1,
						fillOpacity: 0.8,
						onEachFeature: onEachSegment
						}
				).addTo(map_object);
	

};

$(document).ready(mainmap);









