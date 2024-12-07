//Sat Dec 07 2024 14:27:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var P = ["url"];
function L(_0x13c9f3) {
  return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x425131) {
    return typeof _0x425131;
  } : function (_0x62c7ca) {
    return _0x62c7ca && "function" == typeof Symbol && _0x62c7ca.constructor === Symbol && _0x62c7ca !== Symbol.prototype ? "symbol" : typeof _0x62c7ca;
  })(_0x13c9f3);
}
function _(_0x183ea2, _0x15c4b0) {
  if (null == _0x183ea2) {
    return {};
  }
  var _0x12269c,
    _0x337561 = $(_0x183ea2, _0x15c4b0);
  if (Object.getOwnPropertySymbols) {
    for (var _0x3c2e74 = Object.getOwnPropertySymbols(_0x183ea2), _0xc4320f = 0; _0xc4320f < _0x3c2e74.length; _0xc4320f++) {
      _0x12269c = _0x3c2e74[_0xc4320f];
      0 <= _0x15c4b0.indexOf(_0x12269c) || Object.prototype.propertyIsEnumerable.call(_0x183ea2, _0x12269c) && (_0x337561[_0x12269c] = _0x183ea2[_0x12269c]);
    }
  }
  return _0x337561;
}
function $(_0x5bbe77, _0x5116a8) {
  if (null == _0x5bbe77) {
    return {};
  }
  for (var _0x2ccd43, _0x4457da = {}, _0x16a293 = Object.keys(_0x5bbe77), _0x10a1b4 = 0; _0x10a1b4 < _0x16a293.length; _0x10a1b4++) {
    _0x2ccd43 = _0x16a293[_0x10a1b4];
    0 <= _0x5116a8.indexOf(_0x2ccd43) || (_0x4457da[_0x2ccd43] = _0x5bbe77[_0x2ccd43]);
  }
  return _0x4457da;
}
function r(_0x16bb4d, _0x33edb9) {
  var _0x3f6f15,
    _0x5ee4d4 = Object.keys(_0x16bb4d);
  Object.getOwnPropertySymbols && (_0x3f6f15 = Object.getOwnPropertySymbols(_0x16bb4d), _0x33edb9 && (_0x3f6f15 = _0x3f6f15.filter(function (_0x10a740) {
    return Object.getOwnPropertyDescriptor(_0x16bb4d, _0x10a740).enumerable;
  })), _0x5ee4d4.push.apply(_0x5ee4d4, _0x3f6f15));
  return _0x5ee4d4;
}
function J(_0x572973) {
  for (var _0x4c70c7 = 1; _0x4c70c7 < arguments.length; _0x4c70c7++) {
    var _0x3c5006 = null != arguments[_0x4c70c7] ? arguments[_0x4c70c7] : {};
    _0x4c70c7 % 2 ? r(Object(_0x3c5006), !0).forEach(function (_0x551b9a) {
      h(_0x572973, _0x551b9a, _0x3c5006[_0x551b9a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_0x572973, Object.getOwnPropertyDescriptors(_0x3c5006)) : r(Object(_0x3c5006)).forEach(function (_0x10ca3a) {
      Object.defineProperty(_0x572973, _0x10ca3a, Object.getOwnPropertyDescriptor(_0x3c5006, _0x10ca3a));
    });
  }
  return _0x572973;
}
function h(_0x4d32c7, _0x2cdd70, _0xccdf27) {
  (_0x2cdd70 = i(_0x2cdd70)) in _0x4d32c7 ? Object.defineProperty(_0x4d32c7, _0x2cdd70, {
    value: _0xccdf27,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : _0x4d32c7[_0x2cdd70] = _0xccdf27;
  return _0x4d32c7;
}
function f(_0x2cc51b, _0x216de0) {
  if (!(_0x2cc51b instanceof _0x216de0)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function o(_0x43cfc0, _0x333c36) {
  for (var _0x49d23d = 0; _0x49d23d < _0x333c36.length; _0x49d23d++) {
    var _0x3c04d4 = _0x333c36[_0x49d23d];
    _0x3c04d4.enumerable = _0x3c04d4.enumerable || !1;
    _0x3c04d4.configurable = !0;
    "value" in _0x3c04d4 && (_0x3c04d4.writable = !0);
    Object.defineProperty(_0x43cfc0, i(_0x3c04d4.key), _0x3c04d4);
  }
}
function d(_0x12ca9b, _0x11fb77, _0xfa5f0) {
  _0x11fb77 && o(_0x12ca9b.prototype, _0x11fb77);
  _0xfa5f0 && o(_0x12ca9b, _0xfa5f0);
  Object.defineProperty(_0x12ca9b, "prototype", {
    writable: !1
  });
  return _0x12ca9b;
}
function i(_0x1b96b2) {
  _0x1b96b2 = W(_0x1b96b2, "string");
  return "symbol" == L(_0x1b96b2) ? _0x1b96b2 : _0x1b96b2 + "";
}
function W(_0x5736a9, _0x49f635) {
  if ("object" != L(_0x5736a9) || !_0x5736a9) {
    return _0x5736a9;
  }
  var _0x313989 = _0x5736a9[Symbol.toPrimitive];
  if (void 0 === _0x313989) {
    return ("string" === _0x49f635 ? String : Number)(_0x5736a9);
  }
  _0x313989 = _0x313989.call(_0x5736a9, _0x49f635 || "default");
  if ("object" != L(_0x313989)) {
    return _0x313989;
  }
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function E() {
  E = function () {
    return _0x5a810f;
  };
  var _0x58f453,
    _0x5a810f = {},
    _0x427059 = Object.prototype,
    _0x2c920e = _0x427059.hasOwnProperty,
    _0x23753b = Object.defineProperty || function (_0x301a13, _0x5b2890, _0x2c4b05) {
      _0x301a13[_0x5b2890] = _0x2c4b05.value;
    },
    _0x31e2f5 = "function" == typeof Symbol ? Symbol : {},
    _0x5311aa = _0x31e2f5.iterator || "@@iterator",
    _0x29f04c = _0x31e2f5.asyncIterator || "@@asyncIterator",
    _0x25cb2b = _0x31e2f5.toStringTag || "@@toStringTag";
  function _0x16d402(_0xb1e1e4, _0x1606f4, _0x25426d) {
    Object.defineProperty(_0xb1e1e4, _0x1606f4, {
      value: _0x25426d,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
    return _0xb1e1e4[_0x1606f4];
  }
  try {
    _0x16d402({}, "");
  } catch (_0x39ba04) {
    _0x16d402 = function (_0x4a314d, _0x2114df, _0xd35193) {
      return _0x4a314d[_0x2114df] = _0xd35193;
    };
  }
  function _0x279784(_0x5398a3, _0x9d9e50, _0x19e4d5, _0x336eb4) {
    var _0x1d12b5,
      _0x440e9c,
      _0x3567c9,
      _0x29422c,
      _0x9d9e50 = _0x9d9e50 && _0x9d9e50.prototype instanceof _0x31c2c4 ? _0x9d9e50 : _0x31c2c4,
      _0x9d9e50 = Object.create(_0x9d9e50.prototype),
      _0x336eb4 = new _0xb37797(_0x336eb4 || []);
    _0x23753b(_0x9d9e50, "_invoke", {
      value: (_0x1d12b5 = _0x5398a3, _0x440e9c = _0x19e4d5, _0x3567c9 = _0x336eb4, _0x29422c = _0x3ed8c0, function (_0xc21ee1, _0x24d283) {
        if (_0x29422c === _0x126e09) {
          throw Error("Generator is already running");
        }
        if (_0x29422c === _0x22778c) {
          if ("throw" === _0xc21ee1) {
            throw _0x24d283;
          }
          return {
            value: _0x58f453,
            done: !0
          };
        }
        for (_0x3567c9.method = _0xc21ee1, _0x3567c9.arg = _0x24d283;;) {
          var _0x227154 = _0x3567c9.delegate;
          if (_0x227154) {
            _0x227154 = function _0x461463(_0x2ed28f, _0x34dbde) {
              var _0xe53694 = _0x34dbde.method,
                _0x50a9a1 = _0x2ed28f.iterator[_0xe53694];
              if (_0x50a9a1 === _0x58f453) {
                _0x34dbde.delegate = null;
                "throw" === _0xe53694 && _0x2ed28f.iterator.return && (_0x34dbde.method = "return", _0x34dbde.arg = _0x58f453, _0x461463(_0x2ed28f, _0x34dbde), "throw" === _0x34dbde.method) || "return" !== _0xe53694 && (_0x34dbde.method = "throw", _0x34dbde.arg = new TypeError("The iterator does not provide a '" + _0xe53694 + "' method"));
                return _0x101e7d;
              }
              _0xe53694 = _0x5b8cf5(_0x50a9a1, _0x2ed28f.iterator, _0x34dbde.arg);
              if ("throw" === _0xe53694.type) {
                _0x34dbde.method = "throw";
                _0x34dbde.arg = _0xe53694.arg;
                _0x34dbde.delegate = null;
                return _0x101e7d;
              }
              _0x50a9a1 = _0xe53694.arg;
              return _0x50a9a1 ? _0x50a9a1.done ? (_0x34dbde[_0x2ed28f.resultName] = _0x50a9a1.value, _0x34dbde.next = _0x2ed28f.nextLoc, "return" !== _0x34dbde.method && (_0x34dbde.method = "next", _0x34dbde.arg = _0x58f453), _0x34dbde.delegate = null, _0x101e7d) : _0x50a9a1 : (_0x34dbde.method = "throw", _0x34dbde.arg = new TypeError("iterator result is not an object"), _0x34dbde.delegate = null, _0x101e7d);
            }(_0x227154, _0x3567c9);
            if (_0x227154) {
              if (_0x227154 === _0x101e7d) {
                continue;
              }
              return _0x227154;
            }
          }
          if ("next" === _0x3567c9.method) {
            _0x3567c9.sent = _0x3567c9._sent = _0x3567c9.arg;
          } else {
            if ("throw" === _0x3567c9.method) {
              if (_0x29422c === _0x3ed8c0) {
                throw _0x29422c = _0x22778c, _0x3567c9.arg;
              }
              _0x3567c9.dispatchException(_0x3567c9.arg);
            } else {
              "return" === _0x3567c9.method && _0x3567c9.abrupt("return", _0x3567c9.arg);
            }
          }
          _0x29422c = _0x126e09;
          _0x227154 = _0x5b8cf5(_0x1d12b5, _0x440e9c, _0x3567c9);
          if ("normal" === _0x227154.type) {
            if (_0x29422c = _0x3567c9.done ? _0x22778c : _0x254a0e, _0x227154.arg === _0x101e7d) {
              continue;
            }
            return {
              value: _0x227154.arg,
              done: _0x3567c9.done
            };
          }
          "throw" === _0x227154.type && (_0x29422c = _0x22778c, _0x3567c9.method = "throw", _0x3567c9.arg = _0x227154.arg);
        }
      })
    });
    return _0x9d9e50;
  }
  function _0x5b8cf5(_0x3148f9, _0x45f687, _0x3bc0f8) {
    try {
      return {
        type: "normal",
        arg: _0x3148f9.call(_0x45f687, _0x3bc0f8)
      };
    } catch (_0x57b647) {
      return {
        type: "throw",
        arg: _0x57b647
      };
    }
  }
  _0x5a810f.wrap = _0x279784;
  var _0x3ed8c0 = "suspendedStart",
    _0x254a0e = "suspendedYield",
    _0x126e09 = "executing",
    _0x22778c = "completed",
    _0x101e7d = {};
  function _0x31c2c4() {}
  function _0x70716c() {}
  function _0x59ff7c() {}
  var _0x31e2f5 = {},
    _0x7fea5f = (_0x16d402(_0x31e2f5, _0x5311aa, function () {
      return this;
    }), Object.getPrototypeOf),
    _0x7fea5f = _0x7fea5f && _0x7fea5f(_0x7fea5f(_0x1384e6([]))),
    _0x66808b = (_0x7fea5f && _0x7fea5f !== _0x427059 && _0x2c920e.call(_0x7fea5f, _0x5311aa) && (_0x31e2f5 = _0x7fea5f), _0x59ff7c.prototype = _0x31c2c4.prototype = Object.create(_0x31e2f5));
  function _0x26e868(_0x2b36e9) {
    ["next", "throw", "return"].forEach(function (_0x1ca488) {
      _0x16d402(_0x2b36e9, _0x1ca488, function (_0x2245c1) {
        return this._invoke(_0x1ca488, _0x2245c1);
      });
    });
  }
  function _0x477079(_0x54c8b0, _0x1704fa) {
    var _0x394bc1;
    _0x23753b(this, "_invoke", {
      value: function (_0x632426, _0x37d29f) {
        function _0x1e935f() {
          return new _0x1704fa(function (_0x1e97cd, _0x5f33bc) {
            !function _0x1206fa(_0x2bd2f7, _0x305d6b, _0x50f4e4, _0x402aff) {
              var _0x355b34,
                _0x2bd2f7 = _0x5b8cf5(_0x54c8b0[_0x2bd2f7], _0x54c8b0, _0x305d6b);
              if ("throw" !== _0x2bd2f7.type) {
                return (_0x305d6b = (_0x355b34 = _0x2bd2f7.arg).value) && "object" == L(_0x305d6b) && _0x2c920e.call(_0x305d6b, "__await") ? _0x1704fa.resolve(_0x305d6b.__await).then(function (_0x1621af) {
                  _0x1206fa("next", _0x1621af, _0x50f4e4, _0x402aff);
                }, function (_0x548bd2) {
                  _0x1206fa("throw", _0x548bd2, _0x50f4e4, _0x402aff);
                }) : _0x1704fa.resolve(_0x305d6b).then(function (_0x161a73) {
                  _0x355b34.value = _0x161a73;
                  _0x50f4e4(_0x355b34);
                }, function (_0x8013ad) {
                  return _0x1206fa("throw", _0x8013ad, _0x50f4e4, _0x402aff);
                });
              }
              _0x402aff(_0x2bd2f7.arg);
            }(_0x632426, _0x37d29f, _0x1e97cd, _0x5f33bc);
          });
        }
        return _0x394bc1 = _0x394bc1 ? _0x394bc1.then(_0x1e935f, _0x1e935f) : _0x1e935f();
      }
    });
  }
  function _0xf5855(_0x689cdd) {
    var _0x3025f4 = {
      tryLoc: _0x689cdd[0],
      catchLoc: _0x689cdd[1],
      finallyLoc: _0x689cdd[2],
      afterLoc: _0x689cdd[3]
    };
    1 in _0x689cdd;
    2 in _0x689cdd;
    this.tryEntries.push(_0x3025f4);
  }
  function _0x2f397c(_0x40c03c) {
    var _0x476d1d = _0x40c03c.completion || {};
    _0x476d1d.type = "normal";
    delete _0x476d1d.arg;
    _0x40c03c.completion = _0x476d1d;
  }
  function _0xb37797(_0x346b3f) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    _0x346b3f.forEach(_0xf5855, this);
    this.reset(!0);
  }
  function _0x1384e6(_0x2d4a4f) {
    if (_0x2d4a4f || "" === _0x2d4a4f) {
      var _0x23b6a3,
        _0x57b978 = _0x2d4a4f[_0x5311aa];
      if (_0x57b978) {
        return _0x57b978.call(_0x2d4a4f);
      }
      if ("function" == typeof _0x2d4a4f.next) {
        return _0x2d4a4f;
      }
      if (!isNaN(_0x2d4a4f.length)) {
        _0x23b6a3 = -1;
        return (_0x57b978 = function _0x56d96b() {
          for (; ++_0x23b6a3 < _0x2d4a4f.length;) {
            if (_0x2c920e.call(_0x2d4a4f, _0x23b6a3)) {
              _0x56d96b.value = _0x2d4a4f[_0x23b6a3];
              _0x56d96b.done = !1;
              return _0x56d96b;
            }
          }
          _0x56d96b.value = _0x58f453;
          _0x56d96b.done = !0;
          return _0x56d96b;
        }).next = _0x57b978;
      }
    }
    throw new TypeError(L(_0x2d4a4f) + " is not iterable");
  }
  _0x23753b(_0x66808b, "constructor", {
    value: _0x70716c.prototype = _0x59ff7c,
    configurable: !0
  });
  _0x23753b(_0x59ff7c, "constructor", {
    value: _0x70716c,
    configurable: !0
  });
  _0x70716c.displayName = _0x16d402(_0x59ff7c, _0x25cb2b, "GeneratorFunction");
  _0x5a810f.isGeneratorFunction = function (_0x6bb651) {
    _0x6bb651 = "function" == typeof _0x6bb651 && _0x6bb651.constructor;
    return !!_0x6bb651 && (_0x6bb651 === _0x70716c || "GeneratorFunction" === (_0x6bb651.displayName || _0x6bb651.name));
  };
  _0x5a810f.mark = function (_0x52acdf) {
    Object.setPrototypeOf ? Object.setPrototypeOf(_0x52acdf, _0x59ff7c) : (_0x52acdf.__proto__ = _0x59ff7c, _0x16d402(_0x52acdf, _0x25cb2b, "GeneratorFunction"));
    _0x52acdf.prototype = Object.create(_0x66808b);
    return _0x52acdf;
  };
  _0x5a810f.awrap = function (_0x3e1266) {
    return {
      __await: _0x3e1266
    };
  };
  _0x26e868(_0x477079.prototype);
  _0x16d402(_0x477079.prototype, _0x29f04c, function () {
    return this;
  });
  _0x5a810f.AsyncIterator = _0x477079;
  _0x5a810f.async = function (_0x25c4a7, _0x3cca66, _0x11c6bf, _0x32ddfe, _0x33db8d) {
    void 0 === _0x33db8d && (_0x33db8d = Promise);
    var _0xda3008 = new _0x477079(_0x279784(_0x25c4a7, _0x3cca66, _0x11c6bf, _0x32ddfe), _0x33db8d);
    return _0x5a810f.isGeneratorFunction(_0x3cca66) ? _0xda3008 : _0xda3008.next().then(function (_0x3f1162) {
      return _0x3f1162.done ? _0x3f1162.value : _0xda3008.next();
    });
  };
  _0x26e868(_0x66808b);
  _0x16d402(_0x66808b, _0x25cb2b, "Generator");
  _0x16d402(_0x66808b, _0x5311aa, function () {
    return this;
  });
  _0x16d402(_0x66808b, "toString", function () {
    return "[object Generator]";
  });
  _0x5a810f.keys = function (_0x1da682) {
    var _0x21140e,
      _0x2b0979 = Object(_0x1da682),
      _0x49b23f = [];
    for (_0x21140e in _0x2b0979) _0x49b23f.push(_0x21140e);
    _0x49b23f.reverse();
    return function _0x3f33e5() {
      for (; _0x49b23f.length;) {
        var _0x366dfb = _0x49b23f.pop();
        if (_0x366dfb in _0x2b0979) {
          _0x3f33e5.value = _0x366dfb;
          _0x3f33e5.done = !1;
          return _0x3f33e5;
        }
      }
      _0x3f33e5.done = !0;
      return _0x3f33e5;
    };
  };
  _0x5a810f.values = _0x1384e6;
  _0xb37797.prototype = {
    constructor: _0xb37797,
    reset: function (_0x3d723c) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = _0x58f453, this.done = !1, this.delegate = null, this.method = "next", this.arg = _0x58f453, this.tryEntries.forEach(_0x2f397c), !_0x3d723c) {
        for (var _0x4671bd in this) "t" === _0x4671bd.charAt(0) && _0x2c920e.call(this, _0x4671bd) && !isNaN(+_0x4671bd.slice(1)) && (this[_0x4671bd] = _0x58f453);
      }
    },
    stop: function () {
      this.done = !0;
      var _0x3e426d = this.tryEntries[0].completion;
      if ("throw" === _0x3e426d.type) {
        throw _0x3e426d.arg;
      }
      return this.rval;
    },
    dispatchException: function (_0x169fb3) {
      if (this.done) {
        throw _0x169fb3;
      }
      var _0x22bacf = this;
      function _0x5a1368(_0x3f5374, _0x2a8a3e) {
        _0x14501d.type = "throw";
        _0x14501d.arg = _0x169fb3;
        _0x22bacf.next = _0x3f5374;
        _0x2a8a3e && (_0x22bacf.method = "next", _0x22bacf.arg = _0x58f453);
        return !!_0x2a8a3e;
      }
      for (var _0x4681a4 = this.tryEntries.length - 1; 0 <= _0x4681a4; --_0x4681a4) {
        var _0x3c5f01 = this.tryEntries[_0x4681a4],
          _0x14501d = _0x3c5f01.completion;
        if ("root" === _0x3c5f01.tryLoc) {
          return _0x5a1368("end");
        }
        if (_0x3c5f01.tryLoc <= this.prev) {
          var _0x5d6e5f = _0x2c920e.call(_0x3c5f01, "catchLoc"),
            _0x447a30 = _0x2c920e.call(_0x3c5f01, "finallyLoc");
          if (_0x5d6e5f && _0x447a30) {
            if (this.prev < _0x3c5f01.catchLoc) {
              return _0x5a1368(_0x3c5f01.catchLoc, !0);
            }
            if (this.prev < _0x3c5f01.finallyLoc) {
              return _0x5a1368(_0x3c5f01.finallyLoc);
            }
          } else {
            if (_0x5d6e5f) {
              if (this.prev < _0x3c5f01.catchLoc) {
                return _0x5a1368(_0x3c5f01.catchLoc, !0);
              }
            } else {
              if (!_0x447a30) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < _0x3c5f01.finallyLoc) {
                return _0x5a1368(_0x3c5f01.finallyLoc);
              }
            }
          }
        }
      }
    },
    abrupt: function (_0x109cb1, _0x10a119) {
      for (var _0x2dff63 = this.tryEntries.length - 1; 0 <= _0x2dff63; --_0x2dff63) {
        var _0x5cd604 = this.tryEntries[_0x2dff63];
        if (_0x5cd604.tryLoc <= this.prev && _0x2c920e.call(_0x5cd604, "finallyLoc") && this.prev < _0x5cd604.finallyLoc) {
          var _0x5ef127 = _0x5cd604;
          break;
        }
      }
      var _0x7f36a9 = (_0x5ef127 = _0x5ef127 && ("break" === _0x109cb1 || "continue" === _0x109cb1) && _0x5ef127.tryLoc <= _0x10a119 && _0x10a119 <= _0x5ef127.finallyLoc ? null : _0x5ef127) ? _0x5ef127.completion : {};
      _0x7f36a9.type = _0x109cb1;
      _0x7f36a9.arg = _0x10a119;
      return _0x5ef127 ? (this.method = "next", this.next = _0x5ef127.finallyLoc, _0x101e7d) : this.complete(_0x7f36a9);
    },
    complete: function (_0xd2e59d, _0x256f9e) {
      if ("throw" === _0xd2e59d.type) {
        throw _0xd2e59d.arg;
      }
      "break" === _0xd2e59d.type || "continue" === _0xd2e59d.type ? this.next = _0xd2e59d.arg : "return" === _0xd2e59d.type ? (this.rval = this.arg = _0xd2e59d.arg, this.method = "return", this.next = "end") : "normal" === _0xd2e59d.type && _0x256f9e && (this.next = _0x256f9e);
      return _0x101e7d;
    },
    finish: function (_0x271d32) {
      for (var _0x2b3120 = this.tryEntries.length - 1; 0 <= _0x2b3120; --_0x2b3120) {
        var _0x364776 = this.tryEntries[_0x2b3120];
        if (_0x364776.finallyLoc === _0x271d32) {
          this.complete(_0x364776.completion, _0x364776.afterLoc);
          _0x2f397c(_0x364776);
          return _0x101e7d;
        }
      }
    },
    catch: function (_0x3ff0f0) {
      for (var _0x550ce7 = this.tryEntries.length - 1; 0 <= _0x550ce7; --_0x550ce7) {
        var _0x23001b,
          _0x4c933d,
          _0x52e19b = this.tryEntries[_0x550ce7];
        if (_0x52e19b.tryLoc === _0x3ff0f0) {
          "throw" === (_0x23001b = _0x52e19b.completion).type && (_0x4c933d = _0x23001b.arg, _0x2f397c(_0x52e19b));
          return _0x4c933d;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (_0x3d8fb8, _0x53a2e, _0x255ba0) {
      this.delegate = {
        iterator: _0x1384e6(_0x3d8fb8),
        resultName: _0x53a2e,
        nextLoc: _0x255ba0
      };
      "next" === this.method && (this.arg = _0x58f453);
      return _0x101e7d;
    }
  };
  return _0x5a810f;
}
function c(_0x58aae6, _0x42e8d1, _0xa39642, _0x590142, _0x57a875, _0x38e05f, _0x151f5d) {
  try {
    var _0x1d7fd3 = _0x58aae6[_0x38e05f](_0x151f5d),
      _0x6727a0 = _0x1d7fd3.value;
  } catch (_0x3161a9) {
    return void _0xa39642(_0x3161a9);
  }
  _0x1d7fd3.done ? _0x42e8d1(_0x6727a0) : Promise.resolve(_0x6727a0).then(_0x590142, _0x57a875);
}
function v(_0x42c8d8) {
  return function () {
    var _0x3efeb0 = this,
      _0x1201f4 = arguments;
    return new Promise(function (_0x58df0c, _0x69bb30) {
      var _0x153652 = _0x42c8d8.apply(_0x3efeb0, _0x1201f4);
      function _0x5d48e0(_0x5a1209) {
        c(_0x153652, _0x58df0c, _0x69bb30, _0x5d48e0, _0x1be77f, "next", _0x5a1209);
      }
      function _0x1be77f(_0x487b4b) {
        c(_0x153652, _0x58df0c, _0x69bb30, _0x5d48e0, _0x1be77f, "throw", _0x487b4b);
      }
      _0x5d48e0(void 0);
    });
  };
}
function s(_0x39e776, _0x1d8eda) {
  return z(_0x39e776) || F(_0x39e776, _0x1d8eda) || l(_0x39e776, _0x1d8eda) || D();
}
function D() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function F(_0x33a076, _0x184dbd) {
  var _0x366a37 = null == _0x33a076 ? null : "undefined" != typeof Symbol && _0x33a076[Symbol.iterator] || _0x33a076["@@iterator"];
  if (null != _0x366a37) {
    var _0x1846c1,
      _0x4dbfa5,
      _0x4cac87,
      _0x2fca3e,
      _0x2107d1 = [],
      _0x468f8b = !0,
      _0x4966bc = !1;
    try {
      if (_0x4cac87 = (_0x366a37 = _0x366a37.call(_0x33a076)).next, 0 === _0x184dbd) {
        if (Object(_0x366a37) !== _0x366a37) {
          return;
        }
        _0x468f8b = !1;
      } else {
        for (; !(_0x468f8b = (_0x1846c1 = _0x4cac87.call(_0x366a37)).done) && (_0x2107d1.push(_0x1846c1.value), _0x2107d1.length !== _0x184dbd); _0x468f8b = !0) {}
      }
    } catch (_0x51018e) {
      _0x4966bc = !0;
      _0x4dbfa5 = _0x51018e;
    } finally {
      try {
        if (!_0x468f8b && null != _0x366a37.return && (_0x2fca3e = _0x366a37.return(), Object(_0x2fca3e) !== _0x2fca3e)) {
          return;
        }
      } finally {
        if (_0x4966bc) {
          throw _0x4dbfa5;
        }
      }
    }
    return _0x2107d1;
  }
}
function z(_0x55dd36) {
  if (Array.isArray(_0x55dd36)) {
    return _0x55dd36;
  }
}
function u(_0xc97cd1, _0x4b347c) {
  var _0x7c03a7,
    _0x3c6a8c,
    _0x4b0116,
    _0x55d090,
    _0x3ff85e = "undefined" != typeof Symbol && _0xc97cd1[Symbol.iterator] || _0xc97cd1["@@iterator"];
  if (_0x3ff85e) {
    _0x3c6a8c = !(_0x7c03a7 = !0);
    return {
      s: function () {
        _0x3ff85e = _0x3ff85e.call(_0xc97cd1);
      },
      n: function () {
        var _0x2e41dd = _0x3ff85e.next();
        _0x7c03a7 = _0x2e41dd.done;
        return _0x2e41dd;
      },
      e: function (_0x4ab592) {
        _0x3c6a8c = !0;
        _0x4b0116 = _0x4ab592;
      },
      f: function () {
        try {
          _0x7c03a7 || null == _0x3ff85e.return || _0x3ff85e.return();
        } finally {
          if (_0x3c6a8c) {
            throw _0x4b0116;
          }
        }
      }
    };
  }
  if (Array.isArray(_0xc97cd1) || (_0x3ff85e = l(_0xc97cd1)) || _0x4b347c && _0xc97cd1 && "number" == typeof _0xc97cd1.length) {
    _0x3ff85e && (_0xc97cd1 = _0x3ff85e);
    _0x55d090 = 0;
    return {
      s: _0x4b347c = function () {},
      n: function () {
        return _0x55d090 >= _0xc97cd1.length ? {
          done: !0
        } : {
          done: !1,
          value: _0xc97cd1[_0x55d090++]
        };
      },
      e: function (_0x471f5e) {
        throw _0x471f5e;
      },
      f: _0x4b347c
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function l(_0xbff915, _0x5ce1b4) {
  var _0x3154f9;
  if (_0xbff915) {
    return "string" == typeof _0xbff915 ? a(_0xbff915, _0x5ce1b4) : "Map" === (_0x3154f9 = "Object" === (_0x3154f9 = Object.prototype.toString.call(_0xbff915).slice(8, -1)) && _0xbff915.constructor ? _0xbff915.constructor.name : _0x3154f9) || "Set" === _0x3154f9 ? Array.from(_0xbff915) : "Arguments" === _0x3154f9 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x3154f9) ? a(_0xbff915, _0x5ce1b4) : void 0;
  }
}
function a(_0x195578, _0x4de629) {
  (null == _0x4de629 || _0x4de629 > _0x195578.length) && (_0x4de629 = _0x195578.length);
  for (var _0x3ecf04 = 0, _0x45ad8d = new Array(_0x4de629); _0x3ecf04 < _0x4de629; _0x3ecf04++) {
    _0x45ad8d[_0x3ecf04] = _0x195578[_0x3ecf04];
  }
  return _0x45ad8d;
}
var e,
  g = new bt("至尊宝-新"),
  p = (dt(), require("axios")),
  y = require("fs"),
  G = "V1.01",
  m = "zzbyd",
  x = ["\n", "&"],
  b = (g.isNode() ? process.env[m] : g.getdata(m)) || "",
  X = (g.isNode() ? process.env.wxpusherAppToken : g.getdata("wxpusherAppToken")) || "",
  H = (g.isNode() ? process.env.wxpusherTopicId : g.getdata("wxpusherTopicId")) || "",
  K = process.env[m + "ReadEntrysOrigin"] || "https://readlist.gost.nyc.mn",
  w = [],
  Q = 0,
  k = 14,
  B = require("./utils.js"),
  A = require("jimp"),
  V = ("function" == typeof A.read && "function" == typeof A.read || (A = null == (e = A) ? void 0 : e.Jimp), require("jsqr")),
  Y = require("qrcode"),
  Z = require("path"),
  S = "https://ghp.ci/https://raw.githubusercontent.com/Huansheng1/my-qinglong-js/main/",
  et = "",
  nt = !0;
function rt(_0x50ec91) {
  for (var _0x34854f = Object.keys(_0x50ec91).sort(), _0x3ccd5e = {}, _0x3df3c8 = 0; _0x3df3c8 < _0x34854f.length; _0x3df3c8++) {
    _0x3ccd5e[_0x34854f[_0x3df3c8]] = _0x50ec91[_0x34854f[_0x3df3c8]];
  }
  return _0x3ccd5e;
}
function ot(_0x59a8c6) {
  if (!_0x59a8c6 || !it(_0x59a8c6)) {
    return {};
  }
  _0x59a8c6.startsWith("?") && (_0x59a8c6 = _0x59a8c6.substring(1));
  var _0x29c441,
    _0x476052 = {},
    _0x118d5d = u(new URLSearchParams(_0x59a8c6).entries());
  try {
    for (_0x118d5d.s(); !(_0x29c441 = _0x118d5d.n()).done;) {
      var _0xbc2a67 = s(_0x29c441.value, 2),
        _0x34c05c = _0xbc2a67[0],
        _0x2e7d55 = _0xbc2a67[1];
      _0x476052[_0x34c05c] = _0x2e7d55;
    }
  } catch (_0x37e704) {
    _0x118d5d.e(_0x37e704);
  } finally {
    _0x118d5d.f();
  }
  return _0x476052;
}
function it(_0xe5b759) {
  if ("string" != typeof _0xe5b759 || "" === _0xe5b759) {
    return !1;
  }
  if (!/^(?:[^\s=&?]+=[^\s=&?]*(?:&|$))*$/.test(_0xe5b759)) {
    return !1;
  }
  try {
    new URLSearchParams(_0xe5b759);
    return !0;
  } catch (_0x3e89d4) {
    return !1;
  }
}
function at(_0x28c9ec) {
  for (var _0x5d7306 = [], _0x582f63 = 0, _0x47eaf7 = Object.entries(_0x28c9ec); _0x582f63 < _0x47eaf7.length; _0x582f63++) {
    var _0x2c3b06 = s(_0x47eaf7[_0x582f63], 2),
      _0x24ea76 = _0x2c3b06[0],
      _0x2c3b06 = _0x2c3b06[1];
    null != _0x2c3b06 && _0x5d7306.push("".concat(encodeURIComponent(_0x24ea76), "=").concat(encodeURIComponent(_0x2c3b06)));
  }
  return _0x5d7306.join("&");
}
function N(_0x16e4e7) {
  _0x16e4e7 = "string" == typeof _0x16e4e7 ? ot(_0x16e4e7) : _0x16e4e7 || {};
  var _0x3edcc7,
    _0x181aa0 = "",
    _0x2eff6d = Date.parse(new Date()) / 1000,
    _0x148cd1 = (_0x16e4e7.key = "4fck9x4dqa6linkman3ho9b1quarto49x0yp706qi5185o", _0x16e4e7.time = _0x2eff6d, rt(_0x16e4e7));
  for (_0x3edcc7 in _0x148cd1) null != _0x148cd1[_0x3edcc7] && (_0x181aa0 += _0x3edcc7 + "=" + _0x148cd1[_0x3edcc7] + "&");
  _0x181aa0 = _0x181aa0.substr(0, _0x181aa0.length - 1);
  _0x16e4e7 = B.SHA256_Encrypt(_0x181aa0).toString();
  _0x148cd1.time = _0x2eff6d;
  _0x148cd1.sign = _0x16e4e7;
  delete _0x148cd1.key;
  return at(_0x148cd1);
}
function st() {
  return n.apply(this, arguments);
}
function n() {
  return (n = v(E().mark(function _0x256da6() {
    var _0x285793;
    return E().wrap(function (_0x3203fc) {
      for (;;) {
        switch (_0x3203fc.prev = _0x3203fc.next) {
          case 0:
            _0x3203fc.prev = 0;
            _0x3203fc.next = 3;
            return p.get(S + "announce.txt", {
              timeout: 60000,
              validateStatus: function () {
                return !0;
              }
            });
          case 3:
            _0x285793 = _0x3203fc.sent;
            console.log(_0x285793.data || "广告区域（预留）: 啦啦啦~啦啦啦~，我是卖广告的小行家");
            _0x3203fc.next = 10;
            break;
          case 7:
            _0x3203fc.prev = 7;
            _0x3203fc.t0 = _0x3203fc.catch(0);
            console.log("获取公告失败: ".concat(_0x3203fc.t0.message));
          case 10:
          case "end":
            return _0x3203fc.stop();
        }
      }
    }, _0x256da6, null, [[0, 7]]);
  }))).apply(this, arguments);
}
function ct() {
  return O.apply(this, arguments);
}
function O() {
  return (O = v(E().mark(function _0xa54a7d() {
    var _0x5399a0,
      _0x1e889f,
      _0x593c84,
      _0x3d3620 = arguments;
    return E().wrap(function (_0x48a907) {
      for (;;) {
        switch (_0x48a907.prev = _0x48a907.next) {
          case 0:
            _0x5399a0 = 0 < _0x3d3620.length && void 0 !== _0x3d3620[0] ? _0x3d3620[0] : "README.md";
            _0x1e889f = 1 < _0x3d3620.length && void 0 !== _0x3d3620[1] ? _0x3d3620[1] : 20000;
            _0x5399a0 = "".concat(S).concat(_0x5399a0);
            _0x48a907.prev = 3;
            _0x48a907.next = 6;
            return p.get(_0x5399a0, {
              timeout: _0x1e889f,
              validateStatus: function (_0x41a9c5) {
                return 200 <= _0x41a9c5 && _0x41a9c5 < 300;
              }
            });
          case 6:
            _0x5399a0 = _0x48a907.sent;
            _0x1e889f = /版本号：V\s*([\d.]+)/;
            _0x593c84 = _0x5399a0.data.match(_0x1e889f);
            _0x593c84 = _0x593c84 ? _0x593c84[1] : "";
            console.log("当前版本:[".concat(G || "未知", "]>>>>>云端☁️版本:[").concat(_0x593c84 || "未知", "]"));
            return _0x48a907.abrupt("return", _0x593c84);
          case 14:
            _0x48a907.prev = 14;
            _0x48a907.t0 = _0x48a907.catch(3);
            console.error("拉取仓库最新版本脚本失败: ".concat(_0x48a907.t0.message.replace(S + "Huansheng1/my-qinglong-js@main/", "")));
            return _0x48a907.abrupt("return", null);
          case 18:
          case "end":
            return _0x48a907.stop();
        }
      }
    }, _0xa54a7d, null, [[3, 14]]);
  }))).apply(this, arguments);
}
function j(_0x12a23f, _0x1ede9c, _0x265f96) {
  for (var _0x2b26e5, _0x3741f0, _0xa923da = 3 < arguments.length && void 0 !== arguments[3] && arguments[3], _0x2f56b7 = [], _0xb3b2e = _0x12a23f.indexOf(_0x1ede9c); -1 !== _0xb3b2e && -1 !== (_0x3741f0 = (_0x2b26e5 = _0x12a23f.slice(_0xb3b2e + _0x1ede9c.length)).indexOf(_0x265f96)) && (_0x2f56b7.push(_0x2b26e5.slice(0, _0x3741f0)), _0xa923da);) {
    _0xb3b2e = (_0x12a23f = _0x2b26e5.slice(_0x3741f0 + _0x265f96.length)).indexOf(_0x1ede9c);
  }
  return _0xa923da ? _0x2f56b7 : _0x2f56b7[0] || "";
}
function ut(_0x1232fe) {
  try {
    return function () {
      var _0x5ec958 = v(E().mark(function _0x2cb039(_0x10b88f) {
        var _0x3563ad, _0x375350, _0x44d188;
        return E().wrap(function (_0x57c5d9) {
          for (;;) {
            switch (_0x57c5d9.prev = _0x57c5d9.next) {
              case 0:
                if ((_0x3563ad = null) != _0x10b88f && _0x10b88f.startsWith("data:image/") && (_0x3563ad = null == _0x10b88f || null == (_0x375350 = _0x10b88f.split(",")) ? void 0 : _0x375350[1]), null != _0x10b88f && _0x10b88f.includes(";base64,")) {
                  _0x57c5d9.next = 8;
                  break;
                }
                _0x57c5d9.next = 5;
                return A.read(_0x10b88f);
              case 5:
                _0x57c5d9.t0 = _0x57c5d9.sent;
                _0x57c5d9.next = 11;
                break;
              case 8:
                _0x57c5d9.next = 10;
                return A.read(Buffer.from(_0x3563ad, "base64"));
              case 10:
                _0x57c5d9.t0 = _0x57c5d9.sent;
              case 11:
                if (_0x375350 = _0x57c5d9.t0, _0x44d188 = V(_0x375350.bitmap.data, _0x375350.bitmap.width, _0x375350.bitmap.height)) {
                  return _0x57c5d9.abrupt("return", _0x44d188.data);
                }
                _0x57c5d9.next = 17;
                break;
              case 17:
                throw new Error("无法从图片中解析二维码");
              case 18:
              case "end":
                return _0x57c5d9.stop();
            }
          }
        }, _0x2cb039);
      }));
      return function (_0x59b3d0) {
        return _0x5ec958.apply(this, arguments);
      };
    }()(_0x1232fe);
  } catch (_0x24e5e1) {
    console.log("解析二维码失败，错误代码：".concat(_0x24e5e1.message, "，待解析的图片：").concat(_0x1232fe));
    return "";
  }
}
function lt(_0x27583a, _0x583de4, _0x215a95) {
  var _0x5c2863 = {};
  try {
    _0x26b52e = y.readFileSync(_0x27583a + ".json", "utf8");
    _0x5c2863 = JSON.parse(_0x26b52e);
  } catch (_0x408c13) {}
  _0x5c2863[_0x583de4] = _0x215a95;
  var _0x26b52e = JSON.stringify(_0x5c2863);
  try {
    y.writeFileSync(_0x27583a + ".json", _0x26b52e);
  } catch (_0x2ca008) {
    "ENOENT" === _0x2ca008.code ? y.writeFileSync(_0x27583a + ".json", _0x26b52e) : console.error("保存文件时发生错误：", _0x2ca008);
  }
}
function pt(_0x6b362b, _0x1a2625) {
  try {
    var _0x2109b0 = y.readFileSync(_0x6b362b + ".json", "utf8");
    return JSON.parse(_0x2109b0)[_0x1a2625];
  } catch (_0x451f1e) {
    "ENOENT" !== _0x451f1e.code && console.error("读取文件时发生错误：", _0x451f1e);
  }
}
function ht() {
  return T.apply(this, arguments);
}
function T() {
  return (T = v(E().mark(function _0x4bc9be() {
    var _0x500f61;
    return E().wrap(function (_0x1c73fc) {
      for (;;) {
        switch (_0x1c73fc.prev = _0x1c73fc.next) {
          case 0:
            _0x1c73fc.prev = 0;
            _0x1c73fc.next = 3;
            return p.get("".concat(K, "/inviteList"));
          case 3:
            _0x500f61 = _0x1c73fc.sent;
            return _0x1c73fc.abrupt("return", _0x500f61.data);
          case 7:
            _0x1c73fc.prev = 7;
            _0x1c73fc.t0 = _0x1c73fc.catch(0);
            console.error("初始化活动入口失败：", null === _0x1c73fc.t0 || void 0 === _0x1c73fc.t0 ? void 0 : _0x1c73fc.t0.message);
            return _0x1c73fc.abrupt("return", []);
          case 11:
          case "end":
            return _0x1c73fc.stop();
        }
      }
    }, _0x4bc9be, null, [[0, 7]]);
  }))).apply(this, arguments);
}
var R = "api.jiudingliliang.cn",
  ft = function () {
    return d(function _0x45ecad(_0x1714a5) {
      f(this, _0x45ecad);
      this.wxpusherAppToken = X;
      this.wxpusherTopicId = H;
      this.disabledReadJob = !1;
      this.index = ++Q;
      this.valid = !1;
      var _0x3bd45a = null == _0x1714a5 ? void 0 : _0x1714a5.split("#");
      switch (null == _0x3bd45a ? void 0 : _0x3bd45a.length) {
        case 1:
          this.activedAuthToken = _0x3bd45a[0];
          break;
        case 3:
          this.activedAuthToken = _0x3bd45a[0];
          this.wxpusherAppToken = _0x3bd45a[1];
          this.wxpusherTopicId = _0x3bd45a[2];
          break;
        default:
          console.log("[".concat(this.index, "] 参数错误，请检查参数是否正确"));
      }
      this.canReadAuto = this.wxpusherAppToken && this.wxpusherTopicId;
    }, [{
      key: "taskApi",
      value: (_0x2d7701 = v(E().mark(function _0x3e9c63(_0x39ec3f, _0x11cbf3, _0x29343d, _0x3cf85) {
        var _0x2e21a1,
          _0xb58fa5,
          _0x389ae8,
          _0xc75d3e,
          _0xb914f2,
          _0x4d8e88 = arguments;
        return E().wrap(function (_0xc449d3) {
          for (;;) {
            switch (_0xc449d3.prev = _0xc449d3.next) {
              case 0:
                _0x2e21a1 = 4 < _0x4d8e88.length && void 0 !== _0x4d8e88[4] ? _0x4d8e88[4] : {};
                _0xb58fa5 = 5 < _0x4d8e88.length && void 0 !== _0x4d8e88[5] ? _0x4d8e88[5] : 3;
                _0xc449d3.prev = 2;
                _0x2e21a1 = {
                  url: _0x29343d,
                  headers: J({
                    Connection: "keep-alive",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 12; M2011K2C Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240404 MMWEBID/9203 MicroMessenger/8.0.49.2600(0x2800315A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
                    Accept: "*/*",
                    "X-Requested-With": "com.tencent.mm",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Origin: "".concat(this.domain),
                    Referer: "".concat(this.domain, "/"),
                    "Accept-Encoding": "gzip, deflate, br, zstd",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                  }, _0x2e21a1),
                  timeout: 60000
                };
                this.activedAuthToken && (_0x2e21a1.headers.Cookie = this.activedAuthToken);
                _0x3cf85 && (_0x2e21a1.body = _0x3cf85);
                _0xb58fa5 = _0xb58fa5;
              case 7:
                if (0 < _0xb58fa5) {
                  _0xc449d3.prev = 8;
                  _0xc449d3.next = 11;
                  return xt(_0x11cbf3, _0x2e21a1);
                }
                _0xc449d3.next = 44;
                break;
              case 11:
                if (_0x389ae8 = _0xc449d3.sent, this.valid = !(null != _0x389ae8 && null != (_0xc75d3e = _0x389ae8.resp) && null != (_0xc75d3e = _0xc75d3e.headers) && null != (_0xc75d3e = _0xc75d3e.location) && _0xc75d3e.includes("https://open.weixin.qq.com/connect")), _0x389ae8.resp && 200 <= _0x389ae8.resp.statusCode && _0x389ae8.resp.statusCode < 400) {
                  if (_0x389ae8.resp.body) {
                    _0xc449d3.prev = 15;
                    return _0xc449d3.abrupt("return", JSON.parse(_0x389ae8.resp.body) || _0x389ae8.resp.body);
                  }
                  _0xc449d3.next = 24;
                } else {
                  _0xc449d3.next = 29;
                }
                break;
              case 19:
                _0xc449d3.prev = 19;
                _0xc449d3.t0 = _0xc449d3.catch(15);
                return _0xc449d3.abrupt("return", _0x389ae8.resp.body);
              case 22:
                _0xc449d3.next = 27;
                break;
              case 24:
                _0xb914f2 = null != _0x389ae8 && null != (_0xc75d3e = _0x389ae8.resp) && null != (_0xc75d3e = _0xc75d3e.headers) && null != (_0xc75d3e = _0xc75d3e.location) && _0xc75d3e.includes("https://open.weixin.qq.com/connect") ? "账号Cookie过期，请更新" : "服务器没返回任何数据~";
                console.log("账号[".concat(this.index, "] - [").concat(_0x39ec3f, "] 请求异常，").concat(_0xb914f2));
                return _0xc449d3.abrupt("return", "");
              case 27:
                _0xc449d3.next = 33;
                break;
              case 29:
                if (console.log("账号[".concat(this.index, "] - 请求出现未知错误：").concat(_0x389ae8.err || "Invalid status code")), 1 < _0xb58fa5) {
                  _0xb58fa5--;
                  return _0xc449d3.abrupt("continue", 7);
                }
                _0xc449d3.next = 33;
                break;
              case 33:
                return _0xc449d3.abrupt("return", null == (_0xb914f2 = _0x389ae8.resp) ? void 0 : _0xb914f2.body);
              case 36:
                if (_0xc449d3.prev = 36, _0xc449d3.t1 = _0xc449d3.catch(8), console.log("账号[".concat(this.index, "] - [").concat(_0x39ec3f, "]请求出现未知异常："), _0xc449d3.t1), 1 < _0xb58fa5) {
                  _0xb58fa5--;
                  return _0xc449d3.abrupt("continue", 7);
                }
                _0xc449d3.next = 42;
                break;
              case 42:
                _0xc449d3.next = 7;
                break;
              case 44:
                _0xc449d3.next = 49;
                break;
              case 46:
                _0xc449d3.prev = 46;
                _0xc449d3.t2 = _0xc449d3.catch(2);
                console.log("账号[".concat(this.index, "] - [").concat(_0x39ec3f, "]请求出现未知异常："), _0xc449d3.t2);
              case 49:
              case "end":
                return _0xc449d3.stop();
            }
          }
        }, _0x3e9c63, this, [[2, 46], [8, 36], [15, 19]]);
      })), function (_0x2e9002, _0x37b324, _0x937834, _0x52bf29) {
        return _0x2d7701.apply(this, arguments);
      })
    }, {
      key: "getmsg",
      value: (_0x45a74f = v(E().mark(function _0x6d83e2() {
        var _0x3a57a2,
          _0x26302f,
          _0x60f2c1 = this;
        return E().wrap(function (_0x174beb) {
          for (;;) {
            switch (_0x174beb.prev = _0x174beb.next) {
              case 0:
                _0x174beb.prev = 0;
                _0x3a57a2 = "http://".concat(R, "/getmsg");
                _0x26302f = N();
                return _0x174beb.abrupt("return", this.taskApi("获取公告", "post", _0x3a57a2, _0x26302f).then(function () {
                  var _0x10d343 = v(E().mark(function _0x52bdd6(_0x125258) {
                    var _0x4a9136;
                    return E().wrap(function (_0x42b848) {
                      for (;;) {
                        switch (_0x42b848.prev = _0x42b848.next) {
                          case 0:
                            if (null != _0x125258 && _0x125258.msg) {
                              g.logAndNotify("账号[".concat(_0x60f2c1.index, "] ").concat((null == _0x125258 ? void 0 : _0x125258.msg) || "获取公告成功~"));
                              return _0x42b848.abrupt("return", null == _0x125258 ? void 0 : _0x125258.msg);
                            }
                            _0x42b848.next = 5;
                            break;
                          case 5:
                            g.logAndNotify("账号[".concat(_0x60f2c1.index, "] - 获取公告失败：").concat((null == _0x125258 ? void 0 : _0x125258.msg) || JSON.stringify(_0x125258)));
                            (_0x4a9136 = pt(m + "_config", _0x60f2c1.activedAuthToken)) && (_0x60f2c1.iu = _0x4a9136, _0x60f2c1.isIuLogin = !0);
                            return _0x42b848.abrupt("return", !1);
                          case 9:
                          case "end":
                            return _0x42b848.stop();
                        }
                      }
                    }, _0x52bdd6);
                  }));
                  return function (_0x2254fa) {
                    return _0x10d343.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x174beb.prev = 8;
                _0x174beb.t0 = _0x174beb.catch(0);
                g.logAndNotify("账号[".concat(this.index, "] - 获取公告失败：") + (null === _0x174beb.t0 || void 0 === _0x174beb.t0 ? void 0 : _0x174beb.t0.message));
              case 11:
              case "end":
                return _0x174beb.stop();
            }
          }
        }, _0x6d83e2, this, [[0, 8]]);
      })), function () {
        return _0x45a74f.apply(this, arguments);
      })
    }, {
      key: "getselfreadmsg",
      value: (_0xeb4135 = v(E().mark(function _0x6175c0() {
        var _0x3265cc,
          _0x4cb1f2,
          _0xe87609 = this;
        return E().wrap(function (_0x27d75b) {
          for (;;) {
            switch (_0x27d75b.prev = _0x27d75b.next) {
              case 0:
                _0x27d75b.prev = 0;
                _0x3265cc = "http://".concat(R, "/getselfreadmsg").concat(this.isIuLogin && this.iu ? "?iu=".concat(this.iu) : "");
                _0x4cb1f2 = N({
                  uid: this.uid
                });
                return _0x27d75b.abrupt("return", this.taskApi("获取已阅读文章数", "post", _0x3265cc, _0x4cb1f2).then(function () {
                  var _0xa0f3f9 = v(E().mark(function _0x2e82d3(_0x3db12c) {
                    return E().wrap(function (_0x402cdc) {
                      for (;;) {
                        switch (_0x402cdc.prev = _0x402cdc.next) {
                          case 0:
                            g.logAndNotify("账号[".concat(_0xe87609.index, "] 已阅读 ").concat((null == _0x3db12c ? void 0 : _0x3db12c.read) || "0", " 篇文章"));
                          case 1:
                          case "end":
                            return _0x402cdc.stop();
                        }
                      }
                    }, _0x2e82d3);
                  }));
                  return function (_0x48b624) {
                    return _0xa0f3f9.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x27d75b.prev = 8;
                _0x27d75b.t0 = _0x27d75b.catch(0);
                g.logAndNotify("账号[".concat(this.index, "] - 获取已阅读文章数失败：") + (null === _0x27d75b.t0 || void 0 === _0x27d75b.t0 ? void 0 : _0x27d75b.t0.message));
              case 11:
              case "end":
                return _0x27d75b.stop();
            }
          }
        }, _0x6175c0, this, [[0, 8]]);
      })), function () {
        return _0xeb4135.apply(this, arguments);
      })
    }, {
      key: "getUserInfo",
      value: (_0x39117b = v(E().mark(function _0x2b8562() {
        var _0x53914c,
          _0x397015,
          _0x25f2f7 = this;
        return E().wrap(function (_0x4075d4) {
          for (;;) {
            switch (_0x4075d4.prev = _0x4075d4.next) {
              case 0:
                _0x4075d4.prev = 0;
                _0x53914c = "http://".concat(R, "/getusermsg").concat(this.isIuLogin && this.iu ? "?iu=".concat(this.iu) : "");
                _0x397015 = N({});
                return _0x4075d4.abrupt("return", this.taskApi("查询个人信息", "post", _0x53914c, _0x397015).then(function () {
                  var _0x176abc = v(E().mark(function _0x8561af(_0x1d37f5) {
                    return E().wrap(function (_0x1abcca) {
                      for (;;) {
                        switch (_0x1abcca.prev = _0x1abcca.next) {
                          case 0:
                            if ("100" == (null == _0x1d37f5 ? void 0 : _0x1d37f5.statuscode)) {
                              _0x25f2f7.balance = (null == _0x1d37f5 ? void 0 : _0x1d37f5.left_goldmoney) || 0;
                              _0x25f2f7.uid = (null == _0x1d37f5 ? void 0 : _0x1d37f5.uid) || 0;
                              g.logAndNotify("账号[".concat(_0x25f2f7.index, "] 查询个人信息成功，账号余额 ").concat(_0x25f2f7.balance || 0, "，账号ID ").concat((null == _0x25f2f7 ? void 0 : _0x25f2f7.uid) || "-"));
                              _0x25f2f7.valid = !0;
                              return _0x1abcca.abrupt("return", !0);
                            }
                            _0x1abcca.next = 8;
                            break;
                          case 8:
                            g.logAndNotify("账号[".concat(_0x25f2f7.index, "] - 查询个人信息失败：").concat((null == _0x1d37f5 ? void 0 : _0x1d37f5.msg) || JSON.stringify(_0x1d37f5)));
                            _0x25f2f7.valid = !1;
                            return _0x1abcca.abrupt("return", !1);
                          case 11:
                          case "end":
                            return _0x1abcca.stop();
                        }
                      }
                    }, _0x8561af);
                  }));
                  return function (_0x8af3d0) {
                    return _0x176abc.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x4075d4.prev = 8;
                _0x4075d4.t0 = _0x4075d4.catch(0);
                g.logAndNotify("账号[".concat(this.index, "] - 查询个人信息失败：") + (null === _0x4075d4.t0 || void 0 === _0x4075d4.t0 ? void 0 : _0x4075d4.t0.message));
              case 11:
              case "end":
                return _0x4075d4.stop();
            }
          }
        }, _0x2b8562, this, [[0, 8]]);
      })), function () {
        return _0x39117b.apply(this, arguments);
      })
    }, {
      key: "withdraw",
      value: (_0x540ee7 = v(E().mark(function _0x2c44f8() {
        var _0x4ed642,
          _0x2cf5b4,
          _0x291a73 = this;
        return E().wrap(function (_0x403a70) {
          for (;;) {
            switch (_0x403a70.prev = _0x403a70.next) {
              case 0:
                _0x403a70.prev = 0;
                _0x4ed642 = "http://".concat(R, "/tixianforweixin").concat(this.isIuLogin && this.iu ? "?iu=".concat(this.iu) : "");
                _0x2cf5b4 = N({
                  money: 10 * Math.floor(this.balance / 10),
                  uid: this.uid
                });
                return _0x403a70.abrupt("return", this.taskApi("提现到微信", "post", _0x4ed642, _0x2cf5b4).then(function () {
                  var _0x15c667 = v(E().mark(function _0x1678eb(_0x29efcc) {
                    var _0x1a8ba6;
                    return E().wrap(function (_0x245a89) {
                      for (;;) {
                        switch (_0x245a89.prev = _0x245a89.next) {
                          case 0:
                            if (null != _0x29efcc && _0x29efcc.status) {
                              g.logAndNotify("账号[".concat(_0x291a73.index, "] ").concat((null == _0x29efcc || null == (_0x1a8ba6 = _0x29efcc.msg) || null == (_0x1a8ba6 = _0x1a8ba6.replaceAll("\n", " ")) ? void 0 : _0x1a8ba6.replaceAll("\r", " ")) || "-"));
                              return _0x245a89.abrupt("return", null == _0x29efcc ? void 0 : _0x29efcc.url);
                            }
                            _0x245a89.next = 5;
                            break;
                          case 5:
                            g.logAndNotify("账号[".concat(_0x291a73.index, "] 提现到微信失败：").concat((null == _0x29efcc ? void 0 : _0x29efcc.msg) || JSON.stringify(_0x29efcc)));
                            return _0x245a89.abrupt("return", !1);
                          case 7:
                          case "end":
                            return _0x245a89.stop();
                        }
                      }
                    }, _0x1678eb);
                  }));
                  return function (_0x4b1bb9) {
                    return _0x15c667.apply(this, arguments);
                  };
                }()));
              case 7:
                _0x403a70.prev = 7;
                _0x403a70.t0 = _0x403a70.catch(0);
                g.logAndNotify("账号[".concat(this.index, "] 获取阅读入口失败：") + (null === _0x403a70.t0 || void 0 === _0x403a70.t0 ? void 0 : _0x403a70.t0.message));
              case 10:
              case "end":
                return _0x403a70.stop();
            }
          }
        }, _0x2c44f8, this, [[0, 7]]);
      })), function () {
        return _0x540ee7.apply(this, arguments);
      })
    }, {
      key: "getReadEntry",
      value: (_0x2a426d = v(E().mark(function _0x3043d5() {
        var _0x236150,
          _0x2087cb,
          _0x4ec217 = this;
        return E().wrap(function (_0x49a91e) {
          for (;;) {
            switch (_0x49a91e.prev = _0x49a91e.next) {
              case 0:
                _0x49a91e.prev = 0;
                _0x236150 = "http://".concat(R, "/getreadurl").concat(this.isIuLogin && this.iu ? "?iu=".concat(this.iu) : "");
                _0x2087cb = N({});
                return _0x49a91e.abrupt("return", this.taskApi("获取阅读入口", "post", _0x236150, _0x2087cb).then(function () {
                  var _0x5b8b34 = v(E().mark(function _0x565eaf(_0x52aa5) {
                    var _0x599fa7;
                    return E().wrap(function (_0x4bd0b2) {
                      for (;;) {
                        switch (_0x4bd0b2.prev = _0x4bd0b2.next) {
                          case 0:
                            if ("101" == (null == _0x52aa5 ? void 0 : _0x52aa5.statuscode)) {
                              g.logAndNotify("账号[".concat(_0x4ec217.index, "] ").concat((null == _0x52aa5 || null == (_0x599fa7 = _0x52aa5.msg) || null == (_0x599fa7 = _0x599fa7.replaceAll("\n", " ")) ? void 0 : _0x599fa7.replaceAll("\r", " ")) || "-", "，文章链接 ").concat(null == _0x52aa5 ? void 0 : _0x52aa5.url));
                              return _0x4bd0b2.abrupt("return", null == _0x52aa5 ? void 0 : _0x52aa5.url);
                            }
                            _0x4bd0b2.next = 5;
                            break;
                          case 5:
                            g.logAndNotify("账号[".concat(_0x4ec217.index, "] 获取阅读入口失败：").concat((null == _0x52aa5 ? void 0 : _0x52aa5.msg) || JSON.stringify(_0x52aa5)));
                            return _0x4bd0b2.abrupt("return", !1);
                          case 7:
                          case "end":
                            return _0x4bd0b2.stop();
                        }
                      }
                    }, _0x565eaf);
                  }));
                  return function (_0x225c49) {
                    return _0x5b8b34.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x49a91e.prev = 8;
                _0x49a91e.t0 = _0x49a91e.catch(0);
                g.logAndNotify("账号[".concat(this.index, "] 获取阅读入口失败：") + (null === _0x49a91e.t0 || void 0 === _0x49a91e.t0 ? void 0 : _0x49a91e.t0.message));
              case 11:
              case "end":
                return _0x49a91e.stop();
            }
          }
        }, _0x3043d5, this, [[0, 8]]);
      })), function () {
        return _0x2a426d.apply(this, arguments);
      })
    }, {
      key: "initReadEntry",
      value: (_0x3e7ebc = v(E().mark(function _0x552877() {
        var _0x1e9334,
          _0x32665,
          _0x2fc594 = this,
          _0x549346 = arguments;
        return E().wrap(function (_0x480061) {
          for (;;) {
            switch (_0x480061.prev = _0x480061.next) {
              case 0:
                _0x1e9334 = 0 < _0x549346.length && void 0 !== _0x549346[0] ? _0x549346[0] : "";
                _0x480061.prev = 1;
                _0x32665 = _0x1e9334;
                this.readRedictOrigin = new URL(_0x32665).origin;
                return _0x480061.abrupt("return", this.taskApi("获取阅读信息", "get", _0x32665, "").then(function () {
                  var _0x5e995b = v(E().mark(function _0x408cf0(_0x3b0e54) {
                    var _0x18ca7d, _0x354136;
                    return E().wrap(function (_0x10077f) {
                      for (;;) {
                        switch (_0x10077f.prev = _0x10077f.next) {
                          case 0:
                            null != _0x3b0e54 && _0x3b0e54.includes("var url = '") ? (_0x354136 = _0x32665.split("?")[1], _0x18ca7d = j(_0x3b0e54, "var url = '", "'"), _0x354136 = _0x18ca7d + "?" + _0x354136 + j(_0x3b0e54, "get(window.jumpUrl + '", "' + Math.random() + str") + Math.random(), null != _0x18ca7d && _0x18ca7d.startsWith("http") ? (_0x2fc594.url = _0x354136, _0x10077f.next = 10) : _0x10077f.next = 8) : _0x10077f.next = 14;
                            break;
                          case 8:
                            g.logAndNotify("账号[".concat(_0x2fc594.index, "] 获取阅读信息失败：疑似接口被修改了~"));
                            return _0x10077f.abrupt("return", !1);
                          case 10:
                            g.logAndNotify("账号[".concat(_0x2fc594.index, "] 获取阅读信息成功"));
                            return _0x10077f.abrupt("return", !0);
                          case 14:
                            g.logAndNotify("账号[".concat(_0x2fc594.index, "] 获取阅读信息失败，疑似接口被修改：").concat((null == _0x3b0e54 ? void 0 : _0x3b0e54.msg) || JSON.stringify(_0x3b0e54)));
                            return _0x10077f.abrupt("return", !1);
                          case 16:
                          case "end":
                            return _0x10077f.stop();
                        }
                      }
                    }, _0x408cf0);
                  }));
                  return function (_0x29def2) {
                    return _0x5e995b.apply(this, arguments);
                  };
                }()));
              case 9:
                _0x480061.prev = 9;
                _0x480061.t0 = _0x480061.catch(1);
                g.logAndNotify("账号[".concat(this.index, "] 获取阅读信息失败：") + (null === _0x480061.t0 || void 0 === _0x480061.t0 ? void 0 : _0x480061.t0.message));
              case 12:
              case "end":
                return _0x480061.stop();
            }
          }
        }, _0x552877, this, [[1, 9]]);
      })), function () {
        return _0x3e7ebc.apply(this, arguments);
      })
    }, {
      key: "parseTempPage",
      value: (_0x4e9825 = v(E().mark(function _0x4e3fe5() {
        var _0x542fad,
          _0x347c1c,
          _0xa6531d,
          _0x1786ec = this,
          _0x148f9b = arguments;
        return E().wrap(function (_0x410504) {
          for (;;) {
            switch (_0x410504.prev = _0x410504.next) {
              case 0:
                _0x542fad = 0 < _0x148f9b.length && void 0 !== _0x148f9b[0] ? _0x148f9b[0] : "";
                _0x347c1c = 1 < _0x148f9b.length && void 0 !== _0x148f9b[1] ? _0x148f9b[1] : "解析中转页";
                _0x410504.prev = 2;
                _0xa6531d = _0x542fad;
                this.readRedictOrigin = new URL(_0x542fad).origin;
                return _0x410504.abrupt("return", this.taskApi(_0x347c1c, "get", _0xa6531d, "").then(function () {
                  var _0x1f25b8 = v(E().mark(function _0x4a9384(_0x4a7db6) {
                    var _0x313167, _0x2cdd85;
                    return E().wrap(function (_0x67cf7c) {
                      for (;;) {
                        switch (_0x67cf7c.prev = _0x67cf7c.next) {
                          case 0:
                            if (null != _0x4a7db6 && _0x4a7db6.includes("轮已完成")) {
                              _0xa6531d.split("?")[1];
                              _0x313167 = j(_0x4a7db6, "<div class=\"rrp-box1-tips\">", "</div");
                              _0x2cdd85 = j(_0x4a7db6, "$.get('", "'+iu,function(res){");
                              g.logAndNotify("账号[".concat(_0x1786ec.index, "] ").concat(_0x347c1c, "成功，").concat(_0x313167));
                              return _0x67cf7c.abrupt("return", _0x2cdd85 + _0x1786ec.iu);
                            }
                            _0x67cf7c.next = 8;
                            break;
                          case 8:
                            g.logAndNotify("账号[".concat(_0x1786ec.index, "] ").concat(_0x347c1c, "失败，疑似接口被修改：").concat((null == _0x4a7db6 ? void 0 : _0x4a7db6.msg) || JSON.stringify(_0x4a7db6)));
                            return _0x67cf7c.abrupt("return", !1);
                          case 10:
                          case "end":
                            return _0x67cf7c.stop();
                        }
                      }
                    }, _0x4a9384);
                  }));
                  return function (_0x2c3f0b) {
                    return _0x1f25b8.apply(this, arguments);
                  };
                }()));
              case 10:
                _0x410504.prev = 10;
                _0x410504.t0 = _0x410504.catch(2);
                g.logAndNotify("账号[".concat(this.index, "] ").concat(_0x347c1c, "失败：") + (null === _0x410504.t0 || void 0 === _0x410504.t0 ? void 0 : _0x410504.t0.message));
              case 13:
              case "end":
                return _0x410504.stop();
            }
          }
        }, _0x4e3fe5, this, [[2, 10]]);
      })), function () {
        return _0x4e9825.apply(this, arguments);
      })
    }, {
      key: "commonRequest",
      value: (_0x3f2f5d = v(E().mark(function _0x28e9cf(_0x3bd889) {
        var _0x42f69b,
          _0x4f2147,
          _0x34aee5 = this,
          _0x37fe4b = arguments;
        return E().wrap(function (_0x56af1d) {
          for (;;) {
            switch (_0x56af1d.prev = _0x56af1d.next) {
              case 0:
                _0x42f69b = 1 < _0x37fe4b.length && void 0 !== _0x37fe4b[1] ? _0x37fe4b[1] : "确认";
                _0x56af1d.prev = 1;
                return _0x56af1d.abrupt("return", this.taskApi(_0x42f69b, "get", _0x3bd889, "").then(function () {
                  var _0x28d4d8 = v(E().mark(function _0x16cad5(_0x30ca0b) {
                    var _0x278095;
                    return E().wrap(function (_0xb271b) {
                      for (;;) {
                        switch (_0xb271b.prev = _0xb271b.next) {
                          case 0:
                            if (0 == (null == _0x30ca0b ? void 0 : _0x30ca0b.code)) {
                              _0x278095 = null == _0x30ca0b || null == (_0x278095 = _0x30ca0b.data) || null == (_0x278095 = _0x278095.tips) || null == (_0x278095 = _0x278095.replaceAll("<span>", "")) ? void 0 : _0x278095.replaceAll("</span>", "");
                              g.logAndNotify("账号[".concat(_0x34aee5.index, "] ").concat(_0x42f69b, "成功：").concat(_0x278095));
                              return _0xb271b.abrupt("return", !0);
                            }
                            _0xb271b.next = 6;
                            break;
                          case 6:
                            g.logAndNotify("账号[".concat(_0x34aee5.index, "] ").concat(_0x42f69b, "异常：").concat((null == _0x30ca0b ? void 0 : _0x30ca0b.msg) || JSON.stringify(_0x30ca0b)));
                            return _0xb271b.abrupt("return", !1);
                          case 8:
                          case "end":
                            return _0xb271b.stop();
                        }
                      }
                    }, _0x16cad5);
                  }));
                  return function (_0x4cbfdd) {
                    return _0x28d4d8.apply(this, arguments);
                  };
                }()));
              case 7:
                _0x56af1d.prev = 7;
                _0x56af1d.t0 = _0x56af1d.catch(1);
                g.logAndNotify("账号[".concat(this.index, "] - ").concat(_0x42f69b, "失败：").concat((null == (_0x4f2147 = result) ? void 0 : _0x4f2147.msg) || JSON.stringify(result)));
              case 10:
              case "end":
                return _0x56af1d.stop();
            }
          }
        }, _0x28e9cf, this, [[1, 7]]);
      })), function (_0x4160a7) {
        return _0x3f2f5d.apply(this, arguments);
      })
    }, {
      key: "getPostInfo",
      value: (_0x190cca = v(E().mark(function _0x5a6d3f() {
        var _0x5ddf57,
          _0x369dad = this;
        return E().wrap(function (_0xca2230) {
          for (;;) {
            switch (_0xca2230.prev = _0xca2230.next) {
              case 0:
                _0xca2230.prev = 0;
                _0x5ddf57 = this.url + (this.jkey ? "&jkey=" + this.jkey : "");
                return _0xca2230.abrupt("return", this.taskApi("获取文章链接", "get", _0x5ddf57, "").then(function () {
                  var _0x502201 = v(E().mark(function _0xf0197(_0x5afa0d) {
                    var _0x4f0974, _0x2e6450;
                    return E().wrap(function (_0x4072bb) {
                      for (;;) {
                        switch (_0x4072bb.prev = _0x4072bb.next) {
                          case 0:
                            if ((_0x2e6450 = j(null == _0x5afa0d ? void 0 : _0x5afa0d.url, "&error_msg=", "&")) && (_0x5afa0d.url = _0x5afa0d.url.replace(_0x2e6450, decodeURIComponent(_0x2e6450))), _0x369dad.isCompleted = null == (_0x4f0974 = _0x5afa0d.url) ? void 0 : _0x4f0974.startsWith("/bbb.html"), _0x369dad.jkey = null == _0x5afa0d ? void 0 : _0x5afa0d.jkey, _0x369dad.mpUrl = null != _0x5afa0d && null != (_0x4f0974 = _0x5afa0d.url) && _0x4f0974.includes("被限制") ? "" : null == _0x5afa0d ? void 0 : _0x5afa0d.url, !_0x369dad.mpUrl || _0x2e6450) {
                              _0x4072bb.next = 36;
                            } else {
                              if (g.logAndNotify("账号[".concat(_0x369dad.index, "] 获取文章链接成功 ").concat(nt ? "" : null == _0x5afa0d ? void 0 : _0x5afa0d.url)), _0x369dad.isCompleted) {
                                _0x4072bb.next = 10;
                                return _0x369dad.parseTempPage(_0x369dad.readRedictOrigin + _0x369dad.mpUrl, "加载完结中转页");
                              }
                              _0x4072bb.next = 17;
                            }
                            break;
                          case 10:
                            if (_0x4f0974 = _0x4072bb.sent) {
                              _0x4072bb.next = 14;
                              return _0x369dad.commonRequest(_0x4f0974, "确认完结~");
                            }
                            _0x4072bb.next = 15;
                            break;
                          case 14:
                            return _0x4072bb.abrupt("return", !1);
                          case 15:
                            _0x4072bb.next = 34;
                            break;
                          case 17:
                            if (!(null != (_0x2e6450 = _0x369dad.mpUrl) && _0x2e6450.includes("&chksm="))) {
                              _0x4072bb.next = 21;
                              return g.wait(200);
                            }
                            _0x4072bb.next = 27;
                            break;
                          case 21:
                            g.logAndNotify("账号[".concat(_0x369dad.index, "] 模拟阅读 ").concat(k / 2, "秒……"));
                            _0x4072bb.next = 24;
                            return g.wait(2000 * Math.random() + 500 * k);
                          case 24:
                            return _0x4072bb.abrupt("return", !0);
                          case 27:
                            _0x4072bb.next = 29;
                            return _0x369dad.wxpusherSend(_0x369dad.mpUrl);
                          case 29:
                            if (_0x4072bb.sent) {
                              _0x4072bb.next = 31;
                              break;
                            }
                            return _0x4072bb.abrupt("return", !1);
                          case 31:
                            _0x4072bb.next = 33;
                            return g.wait(2000 * Math.random() + 1000 * k);
                          case 33:
                            return _0x4072bb.abrupt("return", !0);
                          case 34:
                            _0x4072bb.next = 42;
                            break;
                          case 36:
                            if (3 == (null == _0x5afa0d ? void 0 : _0x5afa0d.code)) {
                              g.logAndNotify("账号[".concat(_0x369dad.index, "] 已阅读完毕该轮，开始结算……"));
                              return _0x4072bb.abrupt("return", !1);
                            }
                            _0x4072bb.next = 41;
                            break;
                          case 41:
                            g.logAndNotify("账号[".concat(_0x369dad.index, "] - 获取文章信息失败：").concat((null == _0x5afa0d ? void 0 : _0x5afa0d.msg) || JSON.stringify(_0x5afa0d)));
                          case 42:
                          case "end":
                            return _0x4072bb.stop();
                        }
                      }
                    }, _0xf0197);
                  }));
                  return function (_0x367770) {
                    return _0x502201.apply(this, arguments);
                  };
                }()));
              case 8:
                _0xca2230.prev = 8;
                _0xca2230.t0 = _0xca2230.catch(0);
                g.logAndNotify("账号[".concat(this.index, "] 获取文章信息失败：") + (null === _0xca2230.t0 || void 0 === _0xca2230.t0 ? void 0 : _0xca2230.t0.message));
              case 11:
              case "end":
                return _0xca2230.stop();
            }
          }
        }, _0x5a6d3f, this, [[0, 8]]);
      })), function () {
        return _0x190cca.apply(this, arguments);
      })
    }, {
      key: "wxpusherSend",
      value: (_0x4390ff = v(E().mark(function _0x1d699e(_0x4a23e4) {
        var _0x221460,
          _0xfebdd = this;
        return E().wrap(function (_0x2a67fe) {
          for (;;) {
            switch (_0x2a67fe.prev = _0x2a67fe.next) {
              case 0:
                _0x2a67fe.prev = 0;
                _0x221460 = JSON.stringify(h(h(h({
                  appToken: this.wxpusherAppToken,
                  summary: "至尊宝-新阅读",
                  contentType: 2,
                  topicIds: [this.wxpusherTopicId || "11686"]
                }, "contentType", 2), "url", _0x4a23e4), "content", "<body onload=\"window.location.href='".concat(_0x4a23e4, "'\">出现检测文章！！！\n<a style='padding:10px;color:red;font-size:20px;' href='").concat(_0x4a23e4, "'>正在自动跳转中，如果没反应，请点击我打开待检测文章</a>\n请尽快点击链接完成阅读</body>")));
                return _0x2a67fe.abrupt("return", this.taskApi("推送检测文章到Wxpusher", "post", "http://wxpusher.zjiecode.com/api/send/message", _0x221460, {
                  Host: "wxpusher.zjiecode.com",
                  "Content-Type": "application/json",
                  Accept: "*/*",
                  Referer: "http://wxpusher.zjiecode.com/"
                }).then(function () {
                  var _0x3d1918 = v(E().mark(function _0x5c9419(_0x383fe8) {
                    return E().wrap(function (_0x4d5c24) {
                      for (;;) {
                        switch (_0x4d5c24.prev = _0x4d5c24.next) {
                          case 0:
                            if (1000 === (null == _0x383fe8 ? void 0 : _0x383fe8.code)) {
                              g.logAndNotify("账号[".concat(_0xfebdd.index, "] 推送检测文章成功，请在 ").concat(k, " 秒内点击"));
                              return _0x4d5c24.abrupt("return", !0);
                            }
                            _0x4d5c24.next = 5;
                            break;
                          case 5:
                            g.logAndNotify("账号[".concat(_0xfebdd.index, "] 推送检测文章失败：").concat((null == _0x383fe8 ? void 0 : _0x383fe8.msg) || JSON.stringify(_0x383fe8)));
                          case 6:
                          case "end":
                            return _0x4d5c24.stop();
                        }
                      }
                    }, _0x5c9419);
                  }));
                  return function (_0x36b2c0) {
                    return _0x3d1918.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x2a67fe.prev = 8;
                _0x2a67fe.t0 = _0x2a67fe.catch(0);
                g.logAndNotify("账号[".concat(this.index, "] 推送检测文章失败：") + (null === _0x2a67fe.t0 || void 0 === _0x2a67fe.t0 ? void 0 : _0x2a67fe.t0.message));
              case 11:
              case "end":
                return _0x2a67fe.stop();
            }
          }
        }, _0x1d699e, this, [[0, 8]]);
      })), function (_0x8e6f52) {
        return _0x4390ff.apply(this, arguments);
      })
    }, {
      key: "doTask",
      value: (_0x5f1ea0 = v(E().mark(function _0x10e99d() {
        var _0x2bbada, _0x3c7f64;
        return E().wrap(function (_0x336e49) {
          for (;;) {
            switch (_0x336e49.prev = _0x336e49.next) {
              case 0:
                _0x336e49.prev = 0;
                _0x336e49.next = 3;
                return this.getmsg();
              case 3:
                if (_0x336e49.sent) {
                  _0x336e49.next = 5;
                  break;
                }
                return _0x336e49.abrupt("return", !1);
              case 5:
                _0x336e49.next = 7;
                return this.getUserInfo();
              case 7:
                if (_0x336e49.sent) {
                  _0x336e49.next = 9;
                  break;
                }
                return _0x336e49.abrupt("return", !1);
              case 9:
                if (this.valid) {
                  _0x336e49.next = 11;
                  break;
                }
                return _0x336e49.abrupt("return");
              case 11:
                _0x336e49.next = 13;
                return this.getselfreadmsg();
              case 13:
                if (this.canReadAuto) {
                  _0x336e49.next = 16;
                  return this.getReadEntry();
                }
                _0x336e49.next = 36;
                break;
              case 16:
                if (_0x2bbada = _0x336e49.sent) {
                  _0x336e49.next = 20;
                  return this.initReadEntry(_0x2bbada);
                }
                _0x336e49.next = 34;
                break;
              case 20:
                if (this.iu = null == (_0x2bbada = new URL(this.url)) || null == (_0x2bbada = _0x2bbada.searchParams) ? void 0 : _0x2bbada.get("iu"), this.ch = null == (_0x3c7f64 = new URL(this.url)) || null == (_0x3c7f64 = _0x3c7f64.searchParams) ? void 0 : _0x3c7f64.get("ch"), !this.iu || !this.ch) {
                  _0x336e49.next = 33;
                  break;
                }
                lt(m + "_config", this.activedAuthToken, this.iu);
              case 24:
                _0x336e49.next = 26;
                return this.getPostInfo();
              case 26:
                if (_0x336e49.sent) {
                  _0x336e49.next = 29;
                  return g.wait(2000 * Math.random());
                }
                _0x336e49.next = 31;
                break;
              case 29:
                _0x336e49.next = 24;
                break;
              case 31:
                _0x336e49.next = 34;
                break;
              case 33:
                g.logAndNotify("账号[".concat(this.index, "] 跳转获取文章页面失败：").concat(parseReadLink));
              case 34:
                _0x336e49.next = 37;
                break;
              case 36:
                g.logAndNotify("账号[".concat(this.index, "] 未配置好阅读推送，跳过阅读任务……"));
              case 37:
                _0x336e49.next = 39;
                return g.wait(2000 * Math.random() + 200);
              case 39:
                _0x336e49.next = 41;
                return this.getUserInfo();
              case 41:
                _0x336e49.next = 43;
                return g.wait(2000 * Math.random() + 200);
              case 43:
                _0x336e49.next = 45;
                return this.withdraw();
              case 45:
                _0x336e49.next = 50;
                break;
              case 47:
                _0x336e49.prev = 47;
                _0x336e49.t0 = _0x336e49.catch(0);
                g.logAndNotify("\n账号[".concat(this.index, "] 执行任务失败：") + (null === _0x336e49.t0 || void 0 === _0x336e49.t0 ? void 0 : _0x336e49.t0.message));
              case 50:
              case "end":
                return _0x336e49.stop();
            }
          }
        }, _0x10e99d, this, [[0, 47]]);
      })), function () {
        return _0x5f1ea0.apply(this, arguments);
      })
    }]);
    var _0x5f1ea0, _0x4390ff, _0x190cca, _0x3f2f5d, _0x4e9825, _0x3e7ebc, _0x2a426d, _0x540ee7, _0x39117b, _0xeb4135, _0x45a74f, _0x2d7701;
  }();
function dt() {
  g.isNode() && (process.on("uncaughtException", function (_0x28f312) {
    var _0x449113;
    "MODULE_NOT_FOUND" === _0x28f312.code ? (_0x449113 = _0x28f312.message.split("'")[1]).startsWith("./") ? console.log("缺少依赖文件，请前往代码库寻找 ".concat(_0x449113, " 代码文件，放在本脚本同一目录下 \n 什么？不会？v我50我教你！")) : console.log("缺少依赖，请安装 ".concat(_0x449113, " 库： ").concat(_0x449113, " \n 什么？不会？v我50我教你！")) : console.log("发生错误：" + _0x28f312.message);
  }), process.on("unhandledRejection", function (_0x65f3e9) {
    var _0x31c15a,
      _0xe8e108 = _0x65f3e9.stack.split("\n");
    1 < _0xe8e108.length ? (_0xe8e108 = _0xe8e108[1].match(/\((.*):(\d+):(\d+)\)/)) && (_0x31c15a = _0xe8e108[1], _0xe8e108 = _0xe8e108[2], console.log("程序执行出现异常，错误信息：" + _0x65f3e9.message + "，错误发生在 ".concat(_0x31c15a, " 的第 ").concat(_0xe8e108, " 行 \n 请在本仓库建立 issue 并附上日志或者截图即可？什么，很着急？v我50疯狂星期四！"))) : console.log("发生错误：" + _0x65f3e9.message);
  }));
}
function vt() {
  return q.apply(this, arguments);
}
function q() {
  return (q = v(E().mark(function _0x2f9f6a() {
    var _0x26d030, _0x519f0a, _0x49e6ac;
    return E().wrap(function (_0x4bf797) {
      for (;;) {
        switch (_0x4bf797.prev = _0x4bf797.next) {
          case 0:
            _0x4bf797.prev = 0;
            _0x4bf797.next = 3;
            return p.get("https://".concat(R, "/domain/temp"), {
              params: {
                mid: 1770365
              },
              headers: {
                Connection: "keep-alive",
                "Content-Type": "application/json;charset=utf-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36",
                Accept: "*/*",
                Origin: "http://xuw6q.lmqk.cn",
                Referer: "http://xuw6q.lmqk.cn/index.html?mid=1770365"
              }
            });
          case 3:
            if (null != (_0x26d030 = _0x4bf797.sent) && null != (_0x519f0a = _0x26d030.data) && null != (_0x519f0a = _0x519f0a.result) && _0x519f0a.host) {
              _0x4bf797.next = 7;
              return ut(null == _0x26d030 || null == (_0x519f0a = _0x26d030.data) || null == (_0x519f0a = _0x519f0a.result) ? void 0 : _0x519f0a.host);
            }
            _0x4bf797.next = 11;
            break;
          case 7:
            _0x519f0a = _0x4bf797.sent;
            return _0x4bf797.abrupt("return", _0x519f0a);
          case 11:
            console.log("获取项目最新入口地址失败~".concat((null == _0x26d030 || null == (_0x49e6ac = _0x26d030.data) ? void 0 : _0x49e6ac.msg) || ""));
          case 12:
            _0x4bf797.next = 17;
            break;
          case 14:
            _0x4bf797.prev = 14;
            _0x4bf797.t0 = _0x4bf797.catch(0);
            console.log("获取项目最新入口地址失败~".concat((null === _0x4bf797.t0 || void 0 === _0x4bf797.t0 ? void 0 : _0x4bf797.t0.message) || "疑似活动入口变更！"));
          case 17:
          case "end":
            return _0x4bf797.stop();
        }
      }
    }, _0x2f9f6a, null, [[0, 14]]);
  }))).apply(this, arguments);
}
function gt(_0x58b0f4) {
  return U.apply(this, arguments);
}
function U() {
  return (U = v(E().mark(function _0x403f24(_0x34260f) {
    var _0xa80775;
    return E().wrap(function (_0x55cfd3) {
      for (;;) {
        switch (_0x55cfd3.prev = _0x55cfd3.next) {
          case 0:
            _0x55cfd3.prev = 0;
            _0x55cfd3.next = 3;
            return Y.toString(_0x34260f, {
              errorCorrectionLevel: "H",
              type: "terminal",
              small: !0
            });
          case 3:
            _0xa80775 = _0x55cfd3.sent;
            return _0x55cfd3.abrupt("return", _0xa80775);
          case 7:
            _0x55cfd3.prev = 7;
            _0x55cfd3.t0 = _0x55cfd3.catch(0);
            return _0x55cfd3.abrupt("return", "");
          case 10:
          case "end":
            return _0x55cfd3.stop();
        }
      }
    }, _0x403f24, null, [[0, 7]]);
  }))).apply(this, arguments);
}
function yt() {
  return I.apply(this, arguments);
}
function I() {
  return (I = v(E().mark(function _0x188756() {
    var _0x30e30c, _0x2198af, _0x21cc6f;
    return E().wrap(function (_0x574c61) {
      for (;;) {
        switch (_0x574c61.prev = _0x574c61.next) {
          case 0:
            _0x30e30c = Z.basename(__filename);
            console.log("======== ▷ 开始启动脚本 ◁ ========\n当前脚本：".concat(_0x30e30c, " 🤪"));
            _0x574c61.next = 4;
            return st();
          case 4:
            _0x574c61.next = 6;
            return ct("".concat(_0x30e30c));
          case 6:
            _0x574c61.next = 8;
            return ht();
          case 8:
            _0x21cc6f = _0x574c61.sent;
            R = "v443g.5234lrerka.xin";
            _0x2198af = "http://v443g.5234lrerka.xin?saleid=592029744752";
            null != _0x21cc6f && _0x21cc6f.length && (_0x21cc6f = null == _0x21cc6f || null == (_0x21cc6f = _0x21cc6f.find(function (_0xc13310) {
              return "新-至尊宝" === (null == _0xc13310 ? void 0 : _0xc13310.title);
            })) ? void 0 : _0x21cc6f.url) && (_0x2198af = _0x21cc6f);
            _0x21cc6f = _0x2198af;
            et = new URL(_0x2198af).host;
            g.logAndNotify("活动入口：".concat(_0x21cc6f, "\n\n=============================================================\n"));
            g.wait(100);
          case 16:
          case "end":
            return _0x574c61.stop();
        }
      }
    }, _0x188756);
  }))).apply(this, arguments);
}
function mt() {
  return M.apply(this, arguments);
}
function M() {
  return (M = v(E().mark(function _0x452bd1() {
    var _0x2f0177, _0x4bbf86, _0x43e044, _0x471fb9, _0x16b518, _0x3b13d5;
    return E().wrap(function (_0x79e843) {
      for (;;) {
        switch (_0x79e843.prev = _0x79e843.next) {
          case 0:
            if (!b) {
              _0x79e843.next = 25;
              break;
            }
            _0x2f0177 = x[0];
            _0x4bbf86 = u(x);
            _0x79e843.prev = 3;
            _0x4bbf86.s();
          case 5:
            if ((_0x43e044 = _0x4bbf86.n()).done) {
              _0x79e843.next = 12;
            } else {
              if (_0x43e044 = _0x43e044.value, -1 < b.indexOf(_0x43e044)) {
                _0x2f0177 = _0x43e044;
                return _0x79e843.abrupt("break", 12);
              }
              _0x79e843.next = 10;
            }
            break;
          case 10:
            _0x79e843.next = 5;
            break;
          case 12:
            _0x79e843.next = 17;
            break;
          case 14:
            _0x79e843.prev = 14;
            _0x79e843.t0 = _0x79e843.catch(3);
            _0x4bbf86.e(_0x79e843.t0);
          case 17:
            _0x79e843.prev = 17;
            _0x4bbf86.f();
            return _0x79e843.finish(17);
          case 20:
            _0x471fb9 = u(b.split(_0x2f0177));
            try {
              for (_0x471fb9.s(); !(_0x16b518 = _0x471fb9.n()).done;) {
                (_0x3b13d5 = _0x16b518.value) && w.push(new ft(_0x3b13d5));
              }
            } catch (_0x5491a3) {
              _0x471fb9.e(_0x5491a3);
            } finally {
              _0x471fb9.f();
            }
            userCount = w.length;
            _0x79e843.next = 27;
            break;
          case 25:
            console.log("未找到 配置信息，请检查是否配置 变量：", m);
            return _0x79e843.abrupt("return");
          case 27:
            console.log("共找到".concat(userCount, "个账号"));
            return _0x79e843.abrupt("return", !0);
          case 29:
          case "end":
            return _0x79e843.stop();
        }
      }
    }, _0x452bd1, null, [[3, 14, 17, 20]]);
  }))).apply(this, arguments);
}
function xt(_0x735545, _0x4b8e14) {
  return C.apply(this, arguments);
}
function C() {
  return (C = v(E().mark(function _0x3f73b6(_0x3dd0a8, _0x378082) {
    return E().wrap(function (_0x21c00c) {
      for (;;) {
        switch (_0x21c00c.prev = _0x21c00c.next) {
          case 0:
            httpErr = null;
            httpReq = null;
            httpResp = null;
            return _0x21c00c.abrupt("return", new Promise(function (_0x4b471c) {
              g.send(_0x3dd0a8, _0x378082, function () {
                var _0x1f546a = v(E().mark(function _0x9cd5e9(_0x49d3e4, _0x34f738, _0xe32d33) {
                  return E().wrap(function (_0x4fd9cf) {
                    for (;;) {
                      switch (_0x4fd9cf.prev = _0x4fd9cf.next) {
                        case 0:
                          httpErr = _0x49d3e4;
                          httpReq = _0x34f738;
                          httpResp = _0xe32d33;
                          _0x4b471c({
                            err: _0x49d3e4,
                            req: _0x34f738,
                            resp: _0xe32d33
                          });
                        case 2:
                        case "end":
                          return _0x4fd9cf.stop();
                      }
                    }
                  }, _0x9cd5e9);
                }));
                return function (_0x443e08, _0x5cf9fd, _0x2e62ba) {
                  return _0x1f546a.apply(this, arguments);
                };
              }());
            }));
          case 2:
          case "end":
            return _0x21c00c.stop();
        }
      }
    }, _0x3f73b6);
  }))).apply(this, arguments);
}
function bt(_0x32f1de, _0xdfabb4) {
  "undefined" != typeof process && -1 < JSON.stringify(process.env).indexOf("GITHUB") && process.exit(0);
  return new (function () {
    return d(function _0x1e646a(_0x3306fb, _0x393c16) {
      f(this, _0x1e646a);
      this.name = _0x3306fb;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x393c16);
      console.log("".concat(this.name, " 开始运行：\n"));
    }, [{
      key: "isNode",
      value: function () {
        return "undefined" != typeof module && !!module.exports;
      }
    }, {
      key: "isQuanX",
      value: function () {
        return "undefined" != typeof $task;
      }
    }, {
      key: "isSurge",
      value: function () {
        return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
      }
    }, {
      key: "isLoon",
      value: function () {
        return "undefined" != typeof $loon;
      }
    }, {
      key: "getdata",
      value: function (_0x292fb9) {
        var _0x82860a = this.getval(_0x292fb9);
        if (/^@/.test(_0x292fb9)) {
          var _0x28eb7f = s(/^@(.*?)\.(.*?)$/.exec(_0x292fb9), 3),
            _0x28368e = _0x28eb7f[1],
            _0x28eb7f = _0x28eb7f[2],
            _0x28368e = _0x28368e ? this.getval(_0x28368e) : "";
          if (_0x28368e) {
            try {
              var _0x4f9f7b = JSON.parse(_0x28368e),
                _0x82860a = _0x4f9f7b ? this.lodash_get(_0x4f9f7b, _0x28eb7f, "") : _0x82860a;
            } catch (_0x2991a2) {
              _0x82860a = "";
            }
          }
        }
        return _0x82860a;
      }
    }, {
      key: "setdata",
      value: function (_0x57fdb0, _0x1a734f) {
        var _0x97528b = !1;
        if (/^@/.test(_0x1a734f)) {
          var _0x470325 = s(/^@(.*?)\.(.*?)$/.exec(_0x1a734f), 3),
            _0x1fb406 = _0x470325[1],
            _0x470325 = _0x470325[2],
            _0x102141 = this.getval(_0x1fb406),
            _0x102141 = _0x1fb406 ? "null" === _0x102141 ? null : _0x102141 || "{}" : "{}";
          try {
            var _0x231d6f = JSON.parse(_0x102141);
            this.lodash_set(_0x231d6f, _0x470325, _0x57fdb0);
            _0x97528b = this.setval(JSON.stringify(_0x231d6f), _0x1fb406);
          } catch (_0x2499ce) {
            _0x102141 = {};
            this.lodash_set(_0x102141, _0x470325, _0x57fdb0);
            _0x97528b = this.setval(JSON.stringify(_0x102141), _0x1fb406);
          }
        } else {
          _0x97528b = this.setval(_0x57fdb0, _0x1a734f);
        }
        return _0x97528b;
      }
    }, {
      key: "getval",
      value: function (_0x4d4449) {
        return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4d4449) : this.isQuanX() ? $prefs.valueForKey(_0x4d4449) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4d4449]) : this.data && this.data[_0x4d4449] || null;
      }
    }, {
      key: "setval",
      value: function (_0x53e400, _0x48731c) {
        return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x53e400, _0x48731c) : this.isQuanX() ? $prefs.setValueForKey(_0x53e400, _0x48731c) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x48731c] = _0x53e400, this.writedata(), !0) : this.data && this.data[_0x48731c] || null;
      }
    }, {
      key: "send",
      value: function (_0x5c3c98, _0xef5611) {
        var _0x1dab70,
          _0x4ea5ac = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function () {};
        "get" != _0x5c3c98 && "post" != _0x5c3c98 && "put" != _0x5c3c98 && "delete" != _0x5c3c98 ? console.log("无效的http方法：".concat(_0x5c3c98)) : this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0xef5611.headers = _0xef5611.headers || {}, Object.assign(_0xef5611.headers, {
          "X-Surge-Skip-Scripting": !1
        })), _0x1dab70 = {
          method: _0x5c3c98,
          url: _0xef5611.url,
          headers: _0xef5611.headers,
          timeout: _0xef5611.timeout,
          data: _0xef5611.body
        }, "get" == _0x5c3c98 && delete _0x1dab70.data, $axios(_0x1dab70).then(function (_0x36daa8) {
          var _0x2d0ea6 = _0x36daa8.status,
            _0x2d948f = _0x36daa8.request,
            _0x287717 = _0x36daa8.headers,
            _0x36daa8 = _0x36daa8.data;
          _0x4ea5ac(null, _0x2d948f, {
            statusCode: _0x2d0ea6,
            headers: _0x287717,
            body: _0x36daa8
          });
        }).catch(function (_0x1fb50f) {
          return console.log(_0x1fb50f);
        })) : this.isQuanX() ? (_0xef5611.method = _0x5c3c98.toUpperCase(), this.isNeedRewrite && (_0xef5611.opts = _0xef5611.opts || {}, Object.assign(_0xef5611.opts, {
          hints: !1
        })), $task.fetch(_0xef5611).then(function (_0x5fc9a8) {
          var _0xb74c8d = _0x5fc9a8.statusCode,
            _0x5c017e = _0x5fc9a8.request,
            _0x40c638 = _0x5fc9a8.headers,
            _0x5fc9a8 = _0x5fc9a8.body;
          _0x4ea5ac(null, _0x5c017e, {
            statusCode: _0xb74c8d,
            headers: _0x40c638,
            body: _0x5fc9a8
          });
        }, function (_0x15c522) {
          return _0x4ea5ac(_0x15c522);
        })) : this.isNode() && (this.got = this.got || require("got"), _0x1dab70 = _0xef5611.url, _0xef5611 = _(_0xef5611, P), this.instance = this.got.extend({
          followRedirect: !1,
          hooks: {
            beforeRequest: [function (_0x44a95a) {
              for (var _0x170d73 in _0x44a95a.headers) {
                var _0x3f0d52 = _0x170d73.split("-").map(function (_0x50ea26) {
                  return "dnt" === _0x50ea26 ? _0x50ea26.toUpperCase() : _0x50ea26.charAt(0).toUpperCase() + _0x50ea26.slice(1);
                }).join("-");
                _0x44a95a.headers[_0x3f0d52] = _0x44a95a.headers[_0x170d73];
                delete _0x44a95a.headers[_0x170d73];
              }
            }]
          }
        }), this.instance[_0x5c3c98](_0x1dab70, _0xef5611).then(function (_0x41d969) {
          var _0x4e13a4 = _0x41d969.statusCode,
            _0x33a4b6 = _0x41d969.request,
            _0x2c7bd0 = _0x41d969.headers,
            _0x41d969 = _0x41d969.body;
          _0x4ea5ac(null, _0x33a4b6, {
            statusCode: _0x4e13a4,
            headers: _0x2c7bd0,
            body: _0x41d969
          });
        }, function (_0x25182c) {
          var _0x4bac51 = _0x25182c.message,
            _0x22b33a = _0x25182c.request,
            _0x25182c = _0x25182c.response;
          _0x4ea5ac(_0x4bac51, _0x22b33a, _0x25182c);
        }));
      }
    }, {
      key: "time",
      value: function (_0x44dd59) {
        var _0x28bc73,
          _0x4acb1a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
          _0x4acb1a = _0x4acb1a ? new Date(_0x4acb1a) : new Date(),
          _0x146bbc = {
            "M+": _0x4acb1a.getMonth() + 1,
            "d+": _0x4acb1a.getDate(),
            "h+": _0x4acb1a.getHours(),
            "m+": _0x4acb1a.getMinutes(),
            "s+": _0x4acb1a.getSeconds(),
            "q+": Math.floor((_0x4acb1a.getMonth() + 3) / 3),
            S: _0x4acb1a.getMilliseconds()
          };
        for (_0x28bc73 in /(y+)/.test(_0x44dd59) && (_0x44dd59 = _0x44dd59.replace(RegExp.$1, (_0x4acb1a.getFullYear() + "").substr(4 - RegExp.$1.length))), _0x146bbc) new RegExp("(" + _0x28bc73 + ")").test(_0x44dd59) && (_0x44dd59 = _0x44dd59.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x146bbc[_0x28bc73] : ("00" + _0x146bbc[_0x28bc73]).substr(("" + _0x146bbc[_0x28bc73]).length)));
        return _0x44dd59;
      }
    }, {
      key: "showmsg",
      value: (_0x5c0f3e = v(E().mark(function _0x5758d4() {
        var _0x5a45e6, _0x73644b;
        return E().wrap(function (_0xc491a7) {
          for (;;) {
            switch (_0xc491a7.prev = _0xc491a7.next) {
              case 0:
                if (this.notifyStr) {
                  _0xc491a7.next = 2;
                  break;
                }
                return _0xc491a7.abrupt("return");
              case 2:
                if (_0x5a45e6 = this.name + " 运行通知\n\n" + this.notifyStr, g.isNode()) {
                  _0x73644b = require("./sendNotify");
                  console.log("\n============== 推送 ==============");
                  _0xc491a7.next = 8;
                  return _0x73644b.sendNotify(this.name, _0x5a45e6);
                }
                _0xc491a7.next = 10;
                break;
              case 8:
                _0xc491a7.next = 11;
                break;
              case 10:
                this.msg(_0x5a45e6);
              case 11:
              case "end":
                return _0xc491a7.stop();
            }
          }
        }, _0x5758d4, this);
      })), function () {
        return _0x5c0f3e.apply(this, arguments);
      })
    }, {
      key: "logAndNotify",
      value: function (_0xa4b5c0) {
        console.log(_0xa4b5c0);
        this.notifyStr += _0xa4b5c0;
        this.notifyStr += "\n";
      }
    }, {
      key: "logAndNotifyWithTime",
      value: function (_0x368a16) {
        _0x368a16 = "[" + this.time("hh:mm:ss.S") + "]" + _0x368a16;
        console.log(_0x368a16);
        this.notifyStr += _0x368a16;
        this.notifyStr += "\n";
      }
    }, {
      key: "logWithTime",
      value: function (_0x23d7b3) {
        console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x23d7b3);
      }
    }, {
      key: "msg",
      value: function () {
        function _0x339bff(_0x4e2fe0) {
          return _0x4e2fe0 && ("string" == typeof _0x4e2fe0 ? _0x1a90ed.isLoon() ? _0x4e2fe0 : _0x1a90ed.isQuanX() ? {
            "open-url": _0x4e2fe0
          } : _0x1a90ed.isSurge() ? {
            url: _0x4e2fe0
          } : void 0 : "object" == L(_0x4e2fe0) ? _0x1a90ed.isLoon() ? {
            openUrl: _0x4e2fe0.openUrl || _0x4e2fe0.url || _0x4e2fe0["open-url"],
            mediaUrl: _0x4e2fe0.mediaUrl || _0x4e2fe0["media-url"]
          } : _0x1a90ed.isQuanX() ? {
            "open-url": _0x4e2fe0["open-url"] || _0x4e2fe0.url || _0x4e2fe0.openUrl,
            "media-url": _0x4e2fe0["media-url"] || _0x4e2fe0.mediaUrl
          } : _0x1a90ed.isSurge() ? {
            url: _0x4e2fe0.url || _0x4e2fe0.openUrl || _0x4e2fe0["open-url"]
          } : void 0 : void 0);
        }
        var _0x1a90ed = this,
          _0x325e4d = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : t,
          _0x28d346 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
          _0x136ba9 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
          _0x4d38a8 = 3 < arguments.length ? arguments[3] : void 0,
          _0x4d38a8 = (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x325e4d, _0x28d346, _0x136ba9, _0x339bff(_0x4d38a8)) : this.isQuanX() && $notify(_0x325e4d, _0x28d346, _0x136ba9, _0x339bff(_0x4d38a8))), ["", "============== 系统通知 =============="]);
        _0x4d38a8.push(_0x325e4d);
        _0x28d346 && _0x4d38a8.push(_0x28d346);
        _0x136ba9 && _0x4d38a8.push(_0x136ba9);
        console.log(_0x4d38a8.join("\n"));
      }
    }, {
      key: "getMin",
      value: function (_0x435c90, _0x11ffcc) {
        return _0x435c90 < _0x11ffcc ? _0x435c90 : _0x11ffcc;
      }
    }, {
      key: "getMax",
      value: function (_0x345258, _0x3077ab) {
        return _0x345258 < _0x3077ab ? _0x3077ab : _0x345258;
      }
    }, {
      key: "padStr",
      value: function (_0x167c03, _0x3c56f5) {
        for (var _0x123a7b = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "0", _0x167c03 = String(_0x167c03), _0x37f383 = _0x3c56f5 > _0x167c03.length ? _0x3c56f5 - _0x167c03.length : 0, _0x29d023 = "", _0x5e421f = 0; _0x5e421f < _0x37f383; _0x5e421f++) {
          _0x29d023 += _0x123a7b;
        }
        return _0x29d023 += _0x167c03;
      }
    }, {
      key: "json2str",
      value: function (_0x484a08, _0x5ec607) {
        var _0x55016a,
          _0x59637f = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          _0x342d8e = [],
          _0x2e79ef = u(Object.keys(_0x484a08).sort());
        try {
          for (_0x2e79ef.s(); !(_0x55016a = _0x2e79ef.n()).done;) {
            var _0x2a28b9 = _0x55016a.value,
              _0x1fd8a7 = _0x484a08[_0x2a28b9];
            _0x1fd8a7 && _0x59637f && (_0x1fd8a7 = encodeURIComponent(_0x1fd8a7));
            _0x342d8e.push(_0x2a28b9 + "=" + _0x1fd8a7);
          }
        } catch (_0x23fcf2) {
          _0x2e79ef.e(_0x23fcf2);
        } finally {
          _0x2e79ef.f();
        }
        return _0x342d8e.join(_0x5ec607);
      }
    }, {
      key: "str2json",
      value: function (_0x270cca) {
        var _0x323c8f,
          _0xcc9129 = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          _0x2a429b = {},
          _0x362efb = u(_0x270cca.split("&"));
        try {
          for (_0x362efb.s(); !(_0x323c8f = _0x362efb.n()).done;) {
            var _0x234108,
              _0x32f647,
              _0x18faec,
              _0x316f8e = _0x323c8f.value;
            _0x316f8e && -1 != (_0x234108 = _0x316f8e.indexOf("=")) && (_0x32f647 = _0x316f8e.substr(0, _0x234108), _0x18faec = _0x316f8e.substr(_0x234108 + 1), _0xcc9129 && (_0x18faec = decodeURIComponent(_0x18faec)), _0x2a429b[_0x32f647] = _0x18faec);
          }
        } catch (_0x393a26) {
          _0x362efb.e(_0x393a26);
        } finally {
          _0x362efb.f();
        }
        return _0x2a429b;
      }
    }, {
      key: "randomString",
      value: function (_0x3138c5) {
        for (var _0x4669e7 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "abcdef0123456789", _0x5e079d = "", _0x4c272c = 0; _0x4c272c < _0x3138c5; _0x4c272c++) {
          _0x5e079d += _0x4669e7.charAt(Math.floor(Math.random() * _0x4669e7.length));
        }
        return _0x5e079d;
      }
    }, {
      key: "randomList",
      value: function (_0x25d38a) {
        return _0x25d38a[Math.floor(Math.random() * _0x25d38a.length)];
      }
    }, {
      key: "wait",
      value: function (_0x19db2d) {
        return new Promise(function (_0x2c2e69) {
          return setTimeout(_0x2c2e69, _0x19db2d);
        });
      }
    }, {
      key: "done",
      value: function () {
        var _0x3bfd2b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          _0x37f2e9 = (new Date().getTime() - this.startTime) / 1000;
        console.log("\n".concat(this.name, " 运行结束，共运行了 ").concat(_0x37f2e9, " 秒！"));
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x3bfd2b);
      }
    }]);
    var _0x5c0f3e;
  }())(_0x32f1de, _0xdfabb4);
}
v(E().mark(function t() {
  var _0x31da30, _0x410fec, _0x4faab0;
  return E().wrap(function (_0x3b4861) {
    for (;;) {
      switch (_0x3b4861.prev = _0x3b4861.next) {
        case 0:
          _0x3b4861.next = 2;
          return yt();
        case 2:
          _0x3b4861.next = 4;
          return mt();
        case 4:
          if (_0x3b4861.sent) {
            _0x3b4861.next = 6;
            break;
          }
          return _0x3b4861.abrupt("return");
        case 6:
          if (console.log("\n================ 开始执行 ================"), !(0 < (_0x410fec = w).length)) {
            _0x3b4861.next = 20;
            break;
          }
          console.log("\n================ 任务队列构建完毕 ================");
          _0x31da30 = 0;
          _0x410fec = _0x410fec;
        case 11:
          if (_0x31da30 < _0x410fec.length) {
            _0x4faab0 = _0x410fec[_0x31da30];
            _0x3b4861.next = 15;
            return _0x4faab0.doTask();
          }
          _0x3b4861.next = 18;
          break;
        case 15:
          _0x31da30++;
          _0x3b4861.next = 11;
          break;
        case 18:
          _0x3b4861.next = 21;
          break;
        case 20:
          console.log("\n============== 幻生提示：无可用账号，请检查配置 ============");
        case 21:
          _0x3b4861.next = 23;
          return g.showmsg();
        case 23:
        case "end":
          return _0x3b4861.stop();
      }
    }
  }, t);
}))().catch(function (_0x28ab63) {
  return console.log(_0x28ab63);
}).finally(function () {
  return g.done();
});