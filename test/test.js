'use strict';

var test = require('tap').test;
var haversine = require('../index');

test('Haversine implementation', function(t){
  var actualDistance = 1546.5; // computed using google maps between 10,10 and 20,20
  t.equal(actualDistance, haversine.haversine(10, 10, 20, 20), 'computation correct');
  t.equal(actualDistance, haversine.haversine(20, 20, 10, 10), 'reverse calculation correct');
  t.equal(actualDistance, haversine.haversine([20, 20], [10, 10]), 'accepts arrays');
  t.throws(function(){
    haversine.haversine([20, 20], 10);
  }, 'throws with mixed inputs');
  t.throws(function(){
    haversine.haversine([20], [20,20]);
  }, 'throws on missing input');
  t.end();
});


test('Sort implementation', function(t){
  var expected = [[12, 12, 312] ,[13, 13, 467.5], [14, 14, 622.8], [ 18, 18, 1240.3]];
  var actual = haversine.distanceSort(10, 10, [[18, 18], [13, 13], [14, 14], [12, 12]]);
  t.deepEqual(expected, actual, 'sorts match');
  t.throws(function(){
    haversine.distanceSort('cookies');
  }, 'throws on bad input');
  t.end();
});