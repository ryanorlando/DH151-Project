// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3;
let path = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS_PlPERpLYVzWdq_FLrMAzv7ZANCa1qvC0egyBeB5EBR2te24SmY2EqZSl-WwSFxuhw0p-KNl7lJwG/pub?output=csv";
let markers = L.featureGroup();

// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
	readCSV(path);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}


// function to read csv data
function readCSV(path){
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			
			mapCSV(data); // map the data

		}
	});
}

function mapCSV(data){
	
	// circle options
	let circleCarbon = {
		radius: 15,
		weight: 1,
		color: 'white',
		fillColor: 'green',
		fillOpacity: .5,
	}

	let circleData = {
		radius: 15, 
		weight: 1,
		color: 'white',
		fillColor: 'blue',
		fillOpacity: .5,
	}

	// loop through each entry
	data.data.forEach(function(item,index){

        circleCarbon.radius = item.latest_value * 20

		for (i = 0; i < 109; i++){
			let marker = L.circleMarker([item.lat,item.lon],circleData).on('mouseover', function(){
				this.bindPopup(`<h3>${item.Location}</h3>${item.Quantity} Data Centers`)
			}
			)
		}

		for (i = 0; i < 143; i++){
			
		}
		let marker = L.circleMarker([item.latitude,item.longitude],circleCarbon)
		.on('mouseover',function(){
			this.bindPopup(`<h3>${item.geoAreaName}</h3>${item.latest_value} KG of CO2 emitted per dollar of GDP`).openPopup()
		})

		

		// add marker to featuregroup
		markers.addLayer(marker)
		
		

		// add entry to sidebar
		$('.sidebar').append(`<img src="https://images.emojiterra.com/twitter/v13.0/512px/1f5fa.png"  onmouseover="panToImage(${index})"> ${item.geoAreaName}<br>`)
	})

	markers.addTo(map); // add featuregroup to map
	

	map.fitBounds(markers.getBounds()); // fit markers to map
}

data.data.forEach(function(item,index){
	L.marker([item.lat,item.lon]).addTo(map).bindPopup('<h3>'+item.Location+'</h3>' +'<p>' + item.Quantity + '</p').openPopup();		
	})

L.control.layers()

function panToImage(index){
	map.setZoom(5);
	map.panTo(markers.getLayers()[index]._latlng).openPopup();
}

