# haversort

An implementation of a haversine algorhythm for finding the  distance, in KM, between two latitudes and longtudes on Earth.

## Usage

`npm install -S haversort`

```javascript
> var h = require('haversort');
> h.distanceSort(10, 10, [[18,18], [12,12], [13,13], [14,14]]);
[ [ 12, 12, 312 ],
  [ 13, 13, 467.5 ],
  [ 14, 14, 622.8 ],
  [ 18, 18, 1240.3 ] ]
> h.haversine(10, 10, 20, 20);
1546.5
```

## API
<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="distanceSort"><span class="type-signature"></span>distanceSort<span class="signature">(lat, lon, points)</span><span class="type-signature"> &rarr; {array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Given a point and a list of points, returns the list sorted by distance
(closest first)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>lat</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="description last"><p>Lat of center point or array of <code>[lat, lon]</code> representing the center point</p></td>
</tr>
<tr>
<td class="name"><code>lon</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="description last"><p>Lon of center point or array of points to sort</p></td>
</tr>
<tr>
<td class="name"><code>points</code></td>
<td class="type">
<span class="param-type">array</span>
</td>
<td class="description last"><p>Array of points to sort</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/haversort/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/haversort/blob/master/index.js#L51">lineno 51</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>Array of points, sorted by distance from center point, with the distance pushed as the last element in each array</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">array</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="haversine"><span class="type-signature"></span>haversine<span class="signature">(lat1, lon1, <span class="optional">lat2</span>, <span class="optional">lon2</span>)</span><span class="type-signature"> &rarr; {number}</span></h4>
</dt>
<dd>
<div class="description">
<p>Compute the distance between two points using the haversine formula, based
on the above defined Radius.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>lat1</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>First lat, or an array of <code>[lat, lon]</code> representing the first point</p></td>
</tr>
<tr>
<td class="name"><code>lon1</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>First lon, or an array of <code>[lat, lon]</code> resresenting the second point</p></td>
</tr>
<tr>
<td class="name"><code>lat2</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>The latitude of the second point</p></td>
</tr>
<tr>
<td class="name"><code>lon2</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>The longitude of the second point</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/haversort/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/haversort/blob/master/index.js#L16">lineno 16</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>The distance, in KM, between the two points, rounded to the tenths.</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">number</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="toRad"><span class="type-signature"></span>toRad<span class="signature">(num)</span><span class="type-signature"> &rarr; {number}</span></h4>
</dt>
<dd>
<div class="description">
<p>Give that trig function a radian.  Trig functions LOVE radians</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>num</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="description last"><p>Angle, in degrees to return as a Radian</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/haversort/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/haversort/blob/master/index.js#L6">lineno 6</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>The radian for that angle.</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">number</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

##License & Copyright
Copyright (c) 2014 Todd Kennedy, licensed under the [MIT License](/LICENSE)