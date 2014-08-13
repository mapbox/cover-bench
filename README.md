cover-bench
===========

benchmarks for geo covers

##Usage

```bash
git clone https://github.com/mapbox/cover-bench.git
node index.js
```

##Results

- tile-cover is over twice as fast for points
- s2 is a bit less than twice as fast for polygons

```
./fixtures/dc_fountains.geojson

tileCover.indexes x 446,243 ops/sec ±0.81% (90 runs sampled)
s2.indexes x 200,499 ops/sec ±2.23% (79 runs sampled)
Fastest is tileCover.indexes

./fixtures/counties.geojson

tileCover.indexes x 101 ops/sec ±13.03% (8 runs sampled)
s2.indexes x 186 ops/sec ±3.45% (8 runs sampled)
Fastest is s2.indexes
```
