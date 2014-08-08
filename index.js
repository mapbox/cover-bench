var s2Cover = require('geojson-cover'),
    tileCover = require('tile-cover'),
    fs = require('fs')

var counties = JSON.parse(fs.readFileSync('./fixtures/counties.geojson'))
counties.features = counties.features.slice(0, 200)
console.time('tiles')

counties.features.forEach(function(county){
	console.time()
  tileCover.indexes(county.geometry, {min_zoom:1, max_zoom: 8})
});

console.timeEnd('tiles')


console.time('cells')

counties.features.forEach(function(county){
try{
  s2Cover.geometryIndexes(county.geometry)
}
catch(err){
//console.log('invalid loop')
}
});

console.timeEnd('cells')
