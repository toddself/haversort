'use strict';

// Hey google, what's the radius of the Earth, in KM?
var RadKM = 6378.1;

/**
 * Give that trig function a radian.  Trig functions LOVE radians
 * @method  toRad
 * @param   {number} num Angle, in degrees to return as a Radian
 * @returns {number} The radian for that angle.
 */
var toRad = exports.toRad = function(num){
  return num * Math.PI / 180;
};

/**
 * Compute the distance between two points using the haversine formula, based
 * on the above defined Radius.
 * @method  haversine
 * @param   {mixed} lat1 First lat, or an array of `[lat, lon]` representing the first point
 * @param   {mixed} lon1 First lon, or an array of `[lat, lon]` resresenting the second point
 * @param   {number} [lat2] The latitude of the second point
 * @param   {number} [lon2] The longitude of the second point
 * @returns {number} The distance, in KM, between the two points, rounded to the tenths.
 */
var haversine = exports.haversine = function(lat1, lon1, lat2, lon2){
  if(Array.isArray(lat1) && Array.isArray(lon1)){
    if(lat1.length === 2 && lon1.length === 2){
      lat2 = lon1[0];
      lon2 = lon1[1];
      lon1 = lat1[1];
      lat1 = lat1[0];
    } else {
      throw new Error('Array parameters must contain a lat and a lon');
    }
  } else if((Array.isArray(lat1) && !Array.isArray(lon1)) || (!Array.isArray(lat1) && Array.isArray(lon1))){
    throw new Error('Parameters must match: provide either arrays or digits');
  }

  var degreesLat = Math.abs(toRad(lat2 - lat1));
  var degreesLon = Math.abs(toRad(lon2 - lon1));
  var sinLat = Math.pow(Math.sin(degreesLat / 2), 2);
  var sinLon = Math.pow(Math.sin(degreesLon / 2), 2);
  var cosLat = Math.cos(toRad(lat1))* Math.cos(toRad(lat2));
  var a = sinLat + (cosLat * sinLon);
  var c = 2 * Math.asin(Math.sqrt(a));
  var d = RadKM * c;
  return Math.round(d * 10)/10;
};

/**
 * Given a point and a list of points, returns the list sorted by distance
 * (closest first)
 * @method  distanceSort
 * @param   {mixed} lat Lat of center point or array of `[lat, lon]` representing the center point
 * @param   {mixed} lon Lon of center point or array of points to sort
 * @param   {array} points Array of points to sort
 * @returns {array} Array of points, sorted by distance from center point, with the distance pushed as the last element in each array
 */
exports.distanceSort = function (lat, lon, points){
  if(Array.isArray(lat)){
    points = lon;
    lon = lat[1];
    lat = lat[0];
  }

  if(typeof lat !== 'number' || typeof lon !== 'number' || !Array.isArray(points)){
    throw new Error('You must supply correct inputs');
  }

  return points
    .map(function(point){
      var distance = haversine(lat, lon, point[0], point[1]);
      point.push(distance);
      return point;
    })
    .sort(function(a, b){
      return a.slice(-1)[0] - b.slice(-1)[0];
    });
};