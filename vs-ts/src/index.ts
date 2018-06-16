import * as fs from 'fs';
import * as crypto from 'crypto';
import * as http from 'http';
import * as path from 'path';
import * as util from 'util';
import * as events from 'events';

var emitter = new events.EventEmitter();

emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'byvoid', 1991);

let i = 0;