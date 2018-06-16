"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const events = __importStar(require("events"));
var emitter = new events.EventEmitter();
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'byvoid', 1991);
let i = 0;
//# sourceMappingURL=index.js.map