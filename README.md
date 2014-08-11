cover-bench
===========

benchmarks for geo covers

##Usage

```bash
git clone https://github.com/mapbox/cover-bench.git
node index.js
```

##Results

Currently, tile-cover is about an order of magnitude slower than geojson-cover. The main reason for this is that s2 is written in C++, while tile-cover is written in javascript.

```
Counties:
polygon tiles: 10801ms
polygon cells: 2149ms

DC Drinking Fountains:
point tiles: 9989ms
point cells: 2074ms
```
