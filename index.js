var s2Cover = require('geojson-cover'),
    tileCover = require('tile-cover'),
    queue = require('queue-async'),
    Benchmark = require('benchmark'),
    fs = require('fs');

global.tileCover = tileCover;
global.s2Cover = s2Cover;
global.fs = fs;

function testData(file, callback) {
    console.log('\n' + file + '\n');
    global.file = file;
    var suite = new Benchmark.Suite(file);
    suite
    .add({
        name: 'tileCover.indexes',
        fn: function() {
            counties.features.forEach(function(county){
              global.tileCover.indexes(county.geometry, {min_zoom:1, max_zoom: 9})
            });
        },
        setup: function() {
            var counties = JSON.parse(global.fs.readFileSync(global.file));
            counties.features = counties.features.slice(0, 2)
        }
    })
    .add({
        name: 's2.indexes',
        fn: function() {
            counties.features.forEach(function(county){
              global.s2Cover.geometryIndexes(county.geometry, {index_min_level: 1, index_max_level: 10, max_index_cells: 50000000})
            });
        },
        setup: function() {
            var counties = JSON.parse(global.fs.readFileSync(global.file));
            counties.features = counties.features.slice(0, 2)
        }
    })
    .on('cycle', function(event) {
      console.log(String(event.target));
    })
    .on('complete', function() {
      console.log('Fastest is ' + this.filter('fastest').pluck('name'));
      callback();
    })
    .run();
}

queue(1)
    .defer(testData, './fixtures/dc_fountains.geojson')
    .defer(testData, './fixtures/multipoint.geojson')
    .defer(testData, './fixtures/counties.geojson');