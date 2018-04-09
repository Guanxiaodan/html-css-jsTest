/**
 * Created by GXD on 2018/3/21.
 *
 */
'use strict';
function fetch(a, b){
  return function (c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
  }
}

fetch('guan', 'xiao')()