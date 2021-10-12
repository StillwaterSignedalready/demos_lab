'use strict'

const recur = (layer = 0) => {
  console.log('- ', layer)
  recur(layer + 1);
}

recur()