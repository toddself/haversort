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


*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

##License & Copyright
Copyright (c) 2014 Todd Kennedy, licensed under the [MIT License](/LICENSE)