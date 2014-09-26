cover-bench
===========

benchmarks for geo covers

##Usage

```bash
git clone https://github.com/mapbox/cover-bench.git
node index.js
```

##Results

```
./fixtures/dc_fountains.geojson
 
tileCover.indexes x 419,853 ops/sec ±2.01% (90 runs sampled)
s2.indexes x 214,060 ops/sec ±2.06% (82 runs sampled)
Fastest is tileCover.indexes
 
./fixtures/multipoint.geojson
 
tileCover.indexes x 221,267 ops/sec ±3.46% (90 runs sampled)
s2.indexes x 1,356,118 ops/sec ±1.24% (95 runs sampled)
Fastest is s2.indexes
 
./fixtures/counties.geojson
 
tileCover.indexes x 219 ops/sec ±2.47% (84 runs sampled)
s2.indexes x 13,833 ops/sec ±3.97% (84 runs sampled)
Fastest is s2.indexes
```
