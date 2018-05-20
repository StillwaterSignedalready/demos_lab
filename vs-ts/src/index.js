"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
// const
//   rs = fs.createReadStream('../doc/sample.txt', 'utf-8'),
//   ws = fs.createWriteStream('copied')
const rs = fs.createReadStream('./doc/sample.txt', 'utf-8');
rs.on('data', chunk => {
    console.log('DATA===============>');
    // console.log(chunk)
});
rs.on('end', _ => console.log('END--------------->'));
rs.on('error', e => console.log('ERROR--------------->' + e));
//# sourceMappingURL=index.js.map