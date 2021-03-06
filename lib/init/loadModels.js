'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const fs = require('fs');
const path = require('path');
const init = (() => {
  var _ref = _asyncToGenerator(function* () {
    const list = fs.readdirSync(path.resolve(__dirname, '../models'));
    if (!list) {
      return Promise.reject('load models error');
    }
    for (let l of list) {
      yield appRequire('models/' + l).createTable();
    }
    return;
  });

  return function init() {
    return _ref.apply(this, arguments);
  };
})();

exports.init = init;