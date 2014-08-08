cover-bench
===========

benchmarks for geo covers

##Usage

```bash
git clone https://github.com/mapbox/cover-bench.git
node index.js
```

Currently, tile-cover is about an order of magnitude slower than geojson-cover. The main reason for this is that s2 is written in C++, while tile-cover is written in javascript.

```
indexing 200 polygons:
tiles: 12938ms
cells: 1786ms
```