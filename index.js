var s2Cover = require('geojson-cover'),
    tileCover = require('tile-cover'),
    fs = require('fs')

console.log('Counties:')

var counties = JSON.parse(fs.readFileSync('./fixtures/counties.geojson'))
counties.features = counties.features.slice(0, 200)
console.time('polygon tiles')

counties.features.forEach(function(county){
	console.time()
  tileCover.indexes(county.geometry, {min_zoom:1, max_zoom: 5})
});

console.timeEnd('polygon tiles')


console.time('polygon cells')

counties.features.forEach(function(county){
try{
  s2Cover.geometryIndexes(county.geometry)
}
catch(err){
//console.log('invalid loop')
}
});

console.timeEnd('polygon cells')



console.log('DC Drinking Fountains:')

var dc_fountains = JSON.parse(fs.readFileSync('./fixtures/dc_fountains.geojson'))
dc_fountains.features = dc_fountains.features.slice(0, 200)
console.time('point tiles')

counties.features.forEach(function(fountain){
  console.time()
  tileCover.indexes(fountain.geometry, {min_zoom:1, max_zoom: 5})
});

console.timeEnd('point tiles')


console.time('point cells')

counties.features.forEach(function(fountain){
try{
  s2Cover.geometryIndexes(fountain.geometry)
}
catch(err){
//console.log('invalid loop')
}
});

console.timeEnd('point cells')