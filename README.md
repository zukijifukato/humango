# humango
A npm package for human readable time difference.

## Installation

`npm install humango`

## Usage

```js
const humango = require('humango');

humango(1639144663613); 
```

## Output

Providing timestamp will calculate the timedifference and show output automatically in formats like,

`Just now`, `1 second ago`, `3 minutes ago`, `1 hour ago`, `3 days ago`, `2 months ago`, `on Dec 12`, `on Oct 25, 2018`