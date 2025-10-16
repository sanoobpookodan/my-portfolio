import { __esmMin as e } from "./rolldown-runtime.DSjM2LRs.mjs";
import { init_ssg_sandbox_shims as t, window as n } from "./react.CL8SE-Jx.mjs";
import {
  ControlType as r,
  QueryCache as i,
  QueryEngine as a,
  addPropertyControls as o,
  init_framer_TLIAXGT6 as s,
} from "./framer.tQbOOGJb.mjs";
function c(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function l(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function u(e) {
  throw Error(`Unexpected value: ${e}`);
}
function d(e, t, n, r) {
  l(e >= t, e, `outside lower bound for`, r),
    l(e <= n, e, `outside upper bound for`, r);
}
function f(e) {
  return Number.isFinite(e);
}
function p(e) {
  return e === null;
}
function m(e) {
  if (p(e)) return 0;
  switch (e.type) {
    case r.Array:
      return 1;
    case r.Boolean:
      return 2;
    case r.Color:
      return 3;
    case r.Date:
      return 4;
    case r.Enum:
      return 5;
    case r.File:
      return 6;
    case r.ResponsiveImage:
      return 10;
    case r.Link:
      return 7;
    case r.Number:
      return 8;
    case r.Object:
      return 9;
    case r.RichText:
      return 11;
    case r.String:
      return 12;
    default:
      u(e);
  }
}
function ee(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = _.read(e);
    n.push(t);
  }
  return { type: r.Array, value: n };
}
function te(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) _.write(e, n);
}
function ne(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = _.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function re(e) {
  return { type: r.Boolean, value: e.readUint8() !== 0 };
}
function ie(e, t) {
  e.writeUint8(t.value ? 1 : 0);
}
function ae(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function oe(e) {
  return { type: r.Color, value: e.readString() };
}
function se(e, t) {
  e.writeString(t.value);
}
function ce(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function le(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: r.Date, value: n.toISOString() };
}
function ue(e, t) {
  let n = new Date(t.value),
    r = n.getTime();
  e.writeInt64(r);
}
function de(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function fe(e) {
  return { type: r.Enum, value: e.readString() };
}
function pe(e, t) {
  e.writeString(t.value);
}
function me(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function he(e) {
  return { type: r.File, value: e.readString() };
}
function ge(e, t) {
  e.writeString(t.value);
}
function _e(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ve(e) {
  return { type: r.Link, value: e.readJson() };
}
function ye(e, t) {
  e.writeJson(t.value);
}
function be(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function xe(e) {
  return { type: r.Number, value: e.readFloat64() };
}
function Se(e, t) {
  e.writeFloat64(t.value);
}
function Ce(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function we(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = _.read(e);
  }
  return { type: r.Object, value: n };
}
function Te(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    e.writeString(t), _.write(e, r);
}
function Ee(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = _.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function De(e) {
  return { type: r.ResponsiveImage, value: e.readJson() };
}
function Oe(e, t) {
  e.writeJson(t.value);
}
function ke(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Ae(e) {
  return { type: r.RichText, value: e.readUint32() };
}
function je(e, t) {
  e.writeUint32(t.value);
}
function Me(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function Ne(e) {
  return { type: r.String, value: e.readString() };
}
function Pe(e, t) {
  e.writeString(t.value);
}
function Fe(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
async function Ie(e) {
  let t = Math.floor(Ve * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function h(e, t) {
  let n = Le(t),
    r = [],
    i = 0;
  for (let e of n) r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from);
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await H(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Ue(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    u.write(e.from, r), (d = n);
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function g(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return r.set(e, 0), r.set(t, e.length), r;
}
function Le(e) {
  l(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to
      ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
      : n.push(e);
  }
  return n;
}
var _,
  v,
  y,
  b,
  x,
  S,
  C,
  w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  Re,
  F,
  I,
  L,
  R,
  z,
  ze,
  B,
  Be,
  V,
  Ve,
  He,
  H,
  Ue,
  U,
  W,
  We,
  Ge,
  Ke = e(() => {
    t(),
      s(),
      (v = Object.create),
      (y = Object.defineProperty),
      (b = Object.getOwnPropertyDescriptor),
      (x = Object.getOwnPropertyNames),
      (S = Object.getPrototypeOf),
      (C = Object.prototype.hasOwnProperty),
      (w = (e, t, n) =>
        t in e
          ? y(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (T = (e, t) =>
        function () {
          return (
            t || (0, e[x(e)[0]])((t = { exports: {} }).exports, t), t.exports
          );
        }),
      (E = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of x(t))
            C.call(e, i) ||
              i === n ||
              y(e, i, {
                get: () => t[i],
                enumerable: !(r = b(t, i)) || r.enumerable,
              });
        return e;
      }),
      (D = (e, t, n) => (
        (n = e == null ? {} : v(S(e))),
        E(
          !t && e && e.__esModule
            ? n
            : y(n, `default`, { value: e, enumerable: !0 }),
          e
        )
      )),
      (O = (e, t, n) => w(e, typeof t == `symbol` ? t : t + ``, n)),
      (k = T({
        "../../../node_modules/dataloader/index.js"(e, t) {
          var n,
            r = (function () {
              function e(e, t) {
                if (typeof e != `function`)
                  throw TypeError(
                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                      e +
                      `.`
                  );
                (this._batchLoadFn = e),
                  (this._maxBatchSize = (function (e) {
                    if (!(!e || !1 !== e.batch)) return 1;
                    var t = e && e.maxBatchSize;
                    if (t === void 0) return 1 / 0;
                    if (typeof t != `number` || t < 1)
                      throw TypeError(
                        `maxBatchSize must be a positive number: ` + t
                      );
                    return t;
                  })(t)),
                  (this._batchScheduleFn = (function (e) {
                    var t = e && e.batchScheduleFn;
                    if (t === void 0) return i;
                    if (typeof t != `function`)
                      throw TypeError(
                        `batchScheduleFn must be a function: ` + t
                      );
                    return t;
                  })(t)),
                  (this._cacheKeyFn = (function (e) {
                    var t = e && e.cacheKeyFn;
                    if (t === void 0)
                      return function (e) {
                        return e;
                      };
                    if (typeof t != `function`)
                      throw TypeError(`cacheKeyFn must be a function: ` + t);
                    return t;
                  })(t)),
                  (this._cacheMap = (function (e) {
                    if (!(!e || !1 !== e.cache)) return null;
                    var t = e && e.cacheMap;
                    if (t === void 0) return new Map();
                    if (t !== null) {
                      var n = [`get`, `set`, `delete`, `clear`].filter(
                        function (e) {
                          return t && typeof t[e] != `function`;
                        }
                      );
                      if (n.length !== 0)
                        throw TypeError(
                          `Custom cacheMap missing methods: ` + n.join(`, `)
                        );
                    }
                    return t;
                  })(t)),
                  (this._batch = null),
                  (this.name = t && t.name ? t.name : null);
              }
              var t = e.prototype;
              return (
                (t.load = function (e) {
                  if (e == null)
                    throw TypeError(
                      `The loader.load() function must be called with a value, but got: ` +
                        String(e) +
                        `.`
                    );
                  var t = (function (e) {
                      var t = e._batch;
                      if (
                        t !== null &&
                        !t.hasDispatched &&
                        t.keys.length < e._maxBatchSize
                      )
                        return t;
                      var n = { hasDispatched: !1, keys: [], callbacks: [] };
                      return (
                        (e._batch = n),
                        e._batchScheduleFn(function () {
                          (function (e, t) {
                            var n;
                            if (((t.hasDispatched = !0), t.keys.length === 0)) {
                              o(t);
                              return;
                            }
                            try {
                              n = e._batchLoadFn(t.keys);
                            } catch (n) {
                              return a(
                                e,
                                t,
                                TypeError(
                                  `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                    String(n) +
                                    `.`
                                )
                              );
                            }
                            if (!n || typeof n.then != `function`)
                              return a(
                                e,
                                t,
                                TypeError(
                                  `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                    String(n) +
                                    `.`
                                )
                              );
                            n.then(function (e) {
                              if (!s(e))
                                throw TypeError(
                                  `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                    String(e) +
                                    `.`
                                );
                              if (e.length !== t.keys.length)
                                throw TypeError(
                                  `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                    String(t.keys) +
                                    `

Values:
` +
                                    String(e)
                                );
                              o(t);
                              for (var n = 0; n < t.callbacks.length; n++) {
                                var r = e[n];
                                r instanceof Error
                                  ? t.callbacks[n].reject(r)
                                  : t.callbacks[n].resolve(r);
                              }
                            }).catch(function (n) {
                              a(e, t, n);
                            });
                          })(e, n);
                        }),
                        n
                      );
                    })(this),
                    n = this._cacheMap,
                    r = this._cacheKeyFn(e);
                  if (n) {
                    var i = n.get(r);
                    if (i) {
                      var c = (t.cacheHits ||= []);
                      return new Promise(function (e) {
                        c.push(function () {
                          e(i);
                        });
                      });
                    }
                  }
                  t.keys.push(e);
                  var l = new Promise(function (e, n) {
                    t.callbacks.push({ resolve: e, reject: n });
                  });
                  return n && n.set(r, l), l;
                }),
                (t.loadMany = function (e) {
                  if (!s(e))
                    throw TypeError(
                      `The loader.loadMany() function must be called with Array<key> but got: ` +
                        e +
                        `.`
                    );
                  for (var t = [], n = 0; n < e.length; n++)
                    t.push(
                      this.load(e[n]).catch(function (e) {
                        return e;
                      })
                    );
                  return Promise.all(t);
                }),
                (t.clear = function (e) {
                  var t = this._cacheMap;
                  if (t) {
                    var n = this._cacheKeyFn(e);
                    t.delete(n);
                  }
                  return this;
                }),
                (t.clearAll = function () {
                  var e = this._cacheMap;
                  return e && e.clear(), this;
                }),
                (t.prime = function (e, t) {
                  var n = this._cacheMap;
                  if (n) {
                    var r,
                      i = this._cacheKeyFn(e);
                    n.get(i) === void 0 &&
                      (t instanceof Error
                        ? (r = Promise.reject(t)).catch(function () {})
                        : (r = Promise.resolve(t)),
                      n.set(i, r));
                  }
                  return this;
                }),
                e
              );
            })(),
            i =
              typeof process == `object` &&
              typeof process.nextTick == `function`
                ? function (e) {
                    (n ||= Promise.resolve()),
                      n.then(function () {
                        process.nextTick(e);
                      });
                  }
                : typeof setImmediate == `function`
                ? function (e) {
                    setImmediate(e);
                  }
                : function (e) {
                    setTimeout(e);
                  };
          function a(e, t, n) {
            o(t);
            for (var r = 0; r < t.keys.length; r++)
              e.clear(t.keys[r]), t.callbacks[r].reject(n);
          }
          function o(e) {
            if (e.cacheHits)
              for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
          }
          function s(e) {
            return (
              typeof e == `object` &&
              !!e &&
              typeof e.length == `number` &&
              (e.length === 0 ||
                (e.length > 0 &&
                  Object.prototype.hasOwnProperty.call(e, e.length - 1)))
            );
          }
          t.exports = r;
        },
      })),
      (A = D(k())),
      (j = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (M = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = j.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return (this.offset += e), t;
        }
        readUint16() {
          let e = j.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return (this.offset += e), t;
        }
        readUint32() {
          let e = j.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return (this.offset += e), t;
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = j.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return (this.offset += e), t;
        }
        readInt8() {
          let e = j.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return (this.offset += e), t;
        }
        readInt16() {
          let e = j.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return (this.offset += e), t;
        }
        readInt32() {
          let e = j.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return (this.offset += e), t;
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = j.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return (this.offset += e), t;
        }
        readFloat32() {
          let e = j.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return (this.offset += e), t;
        }
        readFloat64() {
          let e = j.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return (this.offset += e), t;
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return (this.offset = n), r;
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          (this.bytes = e),
            O(this, `offset`, 0),
            O(this, `view`),
            O(this, `decoder`, new TextDecoder()),
            (this.view = c(this.bytes));
        }
      }),
      (N = n !== void 0),
      N && n.requestIdleCallback,
      (P = 1024),
      (Re = 1.5),
      (F = (e) => 2 ** e - 1),
      (I = (e) => -(2 ** (e - 1))),
      (L = (e) => 2 ** (e - 1) - 1),
      (R = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: I(8),
        Int16: I(16),
        Int32: I(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (z = {
        Uint8: F(8),
        Uint16: F(16),
        Uint32: F(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: L(8),
        Int16: L(16),
        Int32: L(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (ze = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * Re) + e);
          n.set(this.bytes), (this.bytes = n), (this.view = c(n));
        }
        writeUint8(e) {
          d(e, R.Uint8, z.Uint8, `Uint8`);
          let t = j.Uint8;
          this.ensureLength(t),
            this.view.setUint8(this.offset, e),
            (this.offset += t);
        }
        writeUint16(e) {
          d(e, R.Uint16, z.Uint16, `Uint16`);
          let t = j.Uint16;
          this.ensureLength(t),
            this.view.setUint16(this.offset, e),
            (this.offset += t);
        }
        writeUint32(e) {
          d(e, R.Uint32, z.Uint32, `Uint32`);
          let t = j.Uint32;
          this.ensureLength(t),
            this.view.setUint32(this.offset, e),
            (this.offset += t);
        }
        writeUint64(e) {
          d(e, R.Uint64, z.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          d(e, R.BigUint64, z.BigUint64, `BigUint64`);
          let t = j.BigUint64;
          this.ensureLength(t),
            this.view.setBigUint64(this.offset, e),
            (this.offset += t);
        }
        writeInt8(e) {
          d(e, R.Int8, z.Int8, `Int8`);
          let t = j.Int8;
          this.ensureLength(t),
            this.view.setInt8(this.offset, e),
            (this.offset += t);
        }
        writeInt16(e) {
          d(e, R.Int16, z.Int16, `Int16`);
          let t = j.Int16;
          this.ensureLength(t),
            this.view.setInt16(this.offset, e),
            (this.offset += t);
        }
        writeInt32(e) {
          d(e, R.Int32, z.Int32, `Int32`);
          let t = j.Int32;
          this.ensureLength(t),
            this.view.setInt32(this.offset, e),
            (this.offset += t);
        }
        writeInt64(e) {
          d(e, R.Int64, z.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          d(e, R.BigInt64, z.BigInt64, `BigInt64`);
          let t = j.BigInt64;
          this.ensureLength(t),
            this.view.setBigInt64(this.offset, e),
            (this.offset += t);
        }
        writeFloat32(e) {
          let t = j.Float32;
          this.ensureLength(t),
            this.view.setFloat32(this.offset, e),
            (this.offset += t);
        }
        writeFloat64(e) {
          let t = j.Float64;
          this.ensureLength(t),
            this.view.setFloat64(this.offset, e),
            (this.offset += t);
        }
        writeBytes(e) {
          let t = e.length;
          this.ensureLength(t),
            this.bytes.set(e, this.offset),
            (this.offset += t);
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return this.encodedStrings.set(e, n), n;
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          this.writeUint32(n), this.writeBytes(t);
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          O(this, `offset`, 0),
            O(this, `bytes`, new Uint8Array(P)),
            O(this, `view`, c(this.bytes)),
            O(this, `encoder`, new TextEncoder()),
            O(this, `encodedStrings`, new Map());
        }
      }),
      (B = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            l(f(n), `Invalid chunkId`),
            l(f(r), `Invalid offset`),
            l(f(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          e.writeUint16(this.chunkId),
            e.writeUint32(this.offset),
            e.writeUint32(this.length);
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
            ? 1
            : this.offset < e.offset
            ? -1
            : this.offset > e.offset
            ? 1
            : (l(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (this.chunkId = e), (this.offset = t), (this.length = n);
        }
      }),
      ((e) => {
        (e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return ee(e);
            case 2:
              return re(e);
            case 3:
              return oe(e);
            case 4:
              return le(e);
            case 5:
              return fe(e);
            case 6:
              return he(e);
            case 7:
              return ve(e);
            case 8:
              return xe(e);
            case 9:
              return we(e);
            case 10:
              return De(e);
            case 11:
              return Ae(e);
            case 12:
              return Ne(e);
            default:
              u(t);
          }
        }),
          (e.write = function (e, t) {
            let n = m(t);
            if ((e.writeUint8(n), !p(t)))
              switch (t.type) {
                case r.Array:
                  return te(e, t);
                case r.Boolean:
                  return ie(e, t);
                case r.Color:
                  return se(e, t);
                case r.Date:
                  return ue(e, t);
                case r.Enum:
                  return pe(e, t);
                case r.File:
                  return ge(e, t);
                case r.Link:
                  return ye(e, t);
                case r.Number:
                  return Se(e, t);
                case r.Object:
                  return Te(e, t);
                case r.ResponsiveImage:
                  return Oe(e, t);
                case r.RichText:
                  return je(e, t);
                case r.String:
                  return Pe(e, t);
                default:
                  u(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let i = m(e),
              a = m(t);
            if (i < a) return -1;
            if (i > a) return 1;
            if (p(e) || p(t)) return 0;
            switch (e.type) {
              case r.Array:
                return l(t.type === r.Array), ne(e, t, n);
              case r.Boolean:
                return l(t.type === r.Boolean), ae(e, t);
              case r.Color:
                return l(t.type === r.Color), ce(e, t);
              case r.Date:
                return l(t.type === r.Date), de(e, t);
              case r.Enum:
                return l(t.type === r.Enum), me(e, t);
              case r.File:
                return l(t.type === r.File), _e(e, t);
              case r.Link:
                return l(t.type === r.Link), be(e, t);
              case r.Number:
                return l(t.type === r.Number), Ce(e, t);
              case r.Object:
                return l(t.type === r.Object), Ee(e, t, n);
              case r.ResponsiveImage:
                return l(t.type === r.ResponsiveImage), ke(e, t);
              case r.RichText:
                return l(t.type === r.RichText), Me(e, t);
              case r.String:
                return l(t.type === r.String), Fe(e, t, n);
              default:
                u(e);
            }
          });
      })((_ ||= {})),
      (Be = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = _.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new M(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = _.read(n);
              e.push(t);
            }
            let t = B.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new ze();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(),
          e.writeUint32(this.entries.length),
          this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) _.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          (this.fieldNames = e), (this.options = t), O(this, `entries`, []);
        }
      }),
      (V = 3),
      (Ve = 250),
      (He = [408, 429, 500, 502, 503, 504]),
      (H = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!He.includes(r.status) || ++n > V) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > V) throw e;
          }
          await Ie(n);
        }
      }),
      (Ue = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((l(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start,
                  i = e.data.subarray(0, r);
                (t = g(i, t)), (n = e.start);
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((l(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                (t = g(t, i)), (r = e.end);
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          O(this, `chunks`, []);
        }
      }),
      (U = class {
        async loadModel() {
          let [e] = await h(this.options.url, [this.options.range]);
          return l(e, `Failed to load model`), Be.deserialize(e);
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          l(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      u(t);
                  }
                }),
              [t.entries]
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n],
                  i = t.values[n];
                e[r] = i;
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return s.length > 0 && a.push(s), a;
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== r.String || t.value?.type !== r.String) return !1;
            let n = e.value,
              i = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (i = i.toLowerCase())),
              n.includes(i)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== r.String || t.value?.type !== r.String) return !1;
            let n = e.value,
              i = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (i = i.toLowerCase())),
              n.startsWith(i)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== r.String || t.value?.type !== r.String) return !1;
            let n = e.value,
              i = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (i = i.toLowerCase())),
              n.endsWith(i)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a],
              s = o.values[t];
            0 > _.compare(s, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a],
              s = o.values[t];
            _.compare(s, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a],
              s = o.values[t],
              c = n(s);
            if (!c) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          (this.options = e),
            O(this, `schema`),
            O(this, `fields`),
            O(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            O(this, `modelPromise`),
            O(this, `model`),
            O(this, `collation`);
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            l(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e });
          }
          (this.schema = t),
            (this.fields = n),
            (this.collation = this.options.collation);
        }
      }),
      (W = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = _.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            e.writeString(t), _.write(e, n);
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          O(this, `fields`, new Map());
        }
      }),
      (We = class {
        scanItems() {
          return (
            (this.itemsPromise ??= H(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new Uint8Array(t),
                r = new M(n),
                i = [],
                a = r.readUint32();
              for (let e = 0; e < a; e++) {
                let e = r.getOffset(),
                  t = W.read(r),
                  n = r.getOffset() - e,
                  a = new B(this.id, e, n),
                  o = a.toString(),
                  s = { pointer: o, data: t.getData() };
                this.itemLoader.prime(o, s), i.push(s);
              }
              return i;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          (this.id = e),
            (this.url = t),
            O(this, `itemsPromise`),
            O(
              this,
              `itemLoader`,
              new A.default(async (e) => {
                let t = e.map((e) => {
                    let t = B.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  }),
                  n = await h(this.url, t);
                return n.map((t, n) => {
                  let r = new M(t),
                    i = W.read(r),
                    a = e[n];
                  return (
                    l(a, `Missing pointer`), { pointer: a, data: i.getData() }
                  );
                });
              })
            );
        }
      }),
      (Ge = class {
        async scanItems() {
          let e = await Promise.all(
            this.chunks.map(async (e) => e.scanItems())
          );
          return e.flat();
        }
        async resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = B.fromString(e),
                n = this.chunks[t.chunkId];
              return l(n, `Missing chunk`), n.resolveItem(e);
            })
          );
        }
        compareItems(e, t) {
          let n = B.fromString(e.pointer),
            r = B.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return _.compare(e, t, n);
        }
        constructor(e) {
          (this.options = e),
            O(this, `schema`),
            O(this, `indexes`),
            O(this, `resolveRichText`),
            O(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new We(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText);
        }
      });
  });
async function qe(e) {
  let t = Je[e];
  if (t) return await t();
}
var G,
  K,
  Je,
  Ye = e(() => {
    (G = (e, t) => async () => {
      let n = await e();
      return n[t];
    }),
      (K = () => import(`./HvA2icrab-2.BAYq8eDg.mjs`)),
      (Je = [
        G(K, `richText`),
        G(K, `richText1`),
        G(K, `richText2`),
        G(K, `richText3`),
        G(K, `richText4`),
        G(K, `richText5`),
        G(K, `richText6`),
        G(K, `richText7`),
        G(K, `richText8`),
        G(K, `richText9`),
        G(K, `richText10`),
        G(K, `richText11`),
        G(K, `richText12`),
        G(K, `richText13`),
        G(K, `richText14`),
        G(K, `richText15`),
        G(K, `richText16`),
        G(K, `richText17`),
        G(K, `richText18`),
        G(K, `richText19`),
        G(K, `richText20`),
        G(K, `richText21`),
        G(K, `richText22`),
        G(K, `richText23`),
        G(K, `richText24`),
        G(K, `richText25`),
        G(K, `richText26`),
        G(K, `richText27`),
        G(K, `richText28`),
        G(K, `richText29`),
        G(K, `richText30`),
        G(K, `richText31`),
      ]);
  }),
  q,
  Xe,
  J,
  Ze,
  Qe,
  $e,
  et,
  tt,
  Y,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  X,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  Z,
  Q,
  St,
  Ct,
  $,
  wt = e(() => {
    s(),
      Ke(),
      Ye(),
      (q = {
        A8sm32gWH: { isNullable: !0, type: r.String },
        BMTficmln: { isNullable: !0, type: r.RichText },
        cVobtGrRA: { isNullable: !0, type: r.String },
        dmWpifHXf: { isNullable: !0, type: r.RichText },
        eaLPJhT5r: { isNullable: !0, type: r.String },
        fSgeTqVb1: { isNullable: !0, type: r.RichText },
        GB58lb58W: { isNullable: !0, type: r.RichText },
        hmiwRshIE: { isNullable: !0, type: r.String },
        id: { isNullable: !1, type: r.String },
        kE9euIhGF: { isNullable: !0, type: r.RichText },
        kgG0k_IKk: { isNullable: !0, type: r.Number },
        luo1px2aF: { isNullable: !0, type: r.String },
        mGSxA9kUq: { isNullable: !0, type: r.ResponsiveImage },
        nextItemId: { isNullable: !0, type: r.String },
        previousItemId: { isNullable: !0, type: r.String },
        Qu2rKmYGL: { isNullable: !0, type: r.ResponsiveImage },
        QuvZ4HDQA: { isNullable: !0, type: r.RichText },
        STfcJD53R: { isNullable: !0, type: r.Link },
        vCgKJH5c7: { isNullable: !0, type: r.ResponsiveImage },
        WwkjvGLl1: { isNullable: !0, type: r.String },
        X1TGaZ7Fp: { isNullable: !0, type: r.ResponsiveImage },
        za1BGUKEX: { isNullable: !0, type: r.RichText },
        zPTh_wHSr: { isNullable: !0, type: r.RichText },
        ZrgHlNStT: { isNullable: !0, type: r.ResponsiveImage },
      }),
      (Xe = [
        `id`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (J = { type: 1 }),
      (Ze = [
        `previousItemId`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (Qe = [
        `nextItemId`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      ($e = [`id`, `cVobtGrRA`]),
      (et = [`cVobtGrRA`, `id`]),
      (tt = [
        `WwkjvGLl1`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (Y = { type: 0 }),
      (nt = [
        `eaLPJhT5r`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (rt = [
        `hmiwRshIE`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (it = [
        `luo1px2aF`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (at = [
        `A8sm32gWH`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (ot = [
        `Qu2rKmYGL`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (st = [
        `kgG0k_IKk`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (ct = [
        `cVobtGrRA`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (lt = [
        `STfcJD53R`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (ut = [
        `QuvZ4HDQA`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (dt = [
        `fSgeTqVb1`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (ft = [
        `BMTficmln`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (pt = [
        `za1BGUKEX`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (mt = [
        `GB58lb58W`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (ht = [
        `kE9euIhGF`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (X = [
        `X1TGaZ7Fp`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (gt = [
        `ZrgHlNStT`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (_t = [
        `vCgKJH5c7`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (vt = [
        `mGSxA9kUq`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (yt = [
        `dmWpifHXf`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (bt = [
        `zPTh_wHSr`,
        `QuvZ4HDQA`,
        `fSgeTqVb1`,
        `BMTficmln`,
        `za1BGUKEX`,
        `GB58lb58W`,
        `kE9euIhGF`,
        `dmWpifHXf`,
        `zPTh_wHSr`,
      ]),
      (xt = new a()),
      (Z = new i(xt)),
      (Q = {
        collectionByLocaleId: {
          default: new Ge({
            chunks: [
              new URL(
                `./HvA2icrab-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            indexes: [
              new U({
                collation: J,
                collectionSchema: q,
                fieldNames: Xe,
                range: { from: 0, to: 385 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: J,
                collectionSchema: q,
                fieldNames: Ze,
                range: { from: 385, to: 769 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: J,
                collectionSchema: q,
                fieldNames: Qe,
                range: { from: 769, to: 1149 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: J,
                collectionSchema: q,
                fieldNames: $e,
                range: { from: 1149, to: 1342 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: J,
                collectionSchema: q,
                fieldNames: et,
                range: { from: 1342, to: 1535 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: tt,
                range: { from: 1535, to: 2035 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: nt,
                range: { from: 2035, to: 2603 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: rt,
                range: { from: 2603, to: 3006 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: it,
                range: { from: 3006, to: 3418 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: at,
                range: { from: 3418, to: 3835 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: ot,
                range: { from: 3835, to: 6391 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: st,
                range: { from: 6391, to: 6763 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: ct,
                range: { from: 6763, to: 7158 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: lt,
                range: { from: 7158, to: 7587 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: ut,
                range: { from: 7587, to: 7943 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: dt,
                range: { from: 7943, to: 8299 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: ft,
                range: { from: 8299, to: 8655 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: pt,
                range: { from: 8655, to: 9011 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: mt,
                range: { from: 9011, to: 9367 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: ht,
                range: { from: 9367, to: 9723 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: X,
                range: { from: 9723, to: 12171 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: gt,
                range: { from: 12171, to: 14639 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: _t,
                range: { from: 14639, to: 16984 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: vt,
                range: { from: 16984, to: 17324 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: yt,
                range: { from: 17324, to: 17680 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: bt,
                range: { from: 17680, to: 18036 },
                url: new URL(
                  `./HvA2icrab-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/55Ky7RnLdSepYsEvrfAE/TNUHcKxeLrp8CBjJOL9n/HvA2icrab.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: qe,
            schema: q,
          }),
        },
        displayName: `Case Studies`,
      }),
      o(Q, {
        WwkjvGLl1: { defaultValue: ``, title: `Title`, type: r.String },
        eaLPJhT5r: { defaultValue: ``, title: `Tagline`, type: r.String },
        hmiwRshIE: { defaultValue: ``, title: `Company`, type: r.String },
        luo1px2aF: { defaultValue: ``, title: `Role`, type: r.String },
        A8sm32gWH: { defaultValue: ``, title: `Expertise`, type: r.String },
        Qu2rKmYGL: { title: `Hero Image`, type: r.ResponsiveImage },
        kgG0k_IKk: {
          defaultValue: 2024,
          displayStepper: !0,
          title: `Year`,
          type: r.Number,
        },
        cVobtGrRA: { title: `Slug`, type: r.String },
        STfcJD53R: { title: `redirct to og`, type: r.Link },
        QuvZ4HDQA: {
          defaultValue: ``,
          title: `Project/ Header & Description`,
          type: r.RichText,
        },
        fSgeTqVb1: {
          defaultValue: ``,
          title: `Project/ Details`,
          type: r.RichText,
        },
        BMTficmln: {
          defaultValue: ``,
          title: `Process/ Header & Description`,
          type: r.RichText,
        },
        za1BGUKEX: {
          defaultValue: ``,
          title: `Process/ Details`,
          type: r.RichText,
        },
        GB58lb58W: {
          defaultValue: ``,
          title: `Solution/ Header & Description`,
          type: r.RichText,
        },
        kE9euIhGF: {
          defaultValue: ``,
          title: `Solution/ Details`,
          type: r.RichText,
        },
        X1TGaZ7Fp: { title: `Slideshow Image 1`, type: r.ResponsiveImage },
        ZrgHlNStT: { title: `Slideshow Image 2`, type: r.ResponsiveImage },
        vCgKJH5c7: { title: `Slideshow Image 3`, type: r.ResponsiveImage },
        mGSxA9kUq: { title: `Sideshow Image 4`, type: r.ResponsiveImage },
        dmWpifHXf: {
          defaultValue: ``,
          title: `Results/ Header & Description`,
          type: r.RichText,
        },
        zPTh_wHSr: {
          defaultValue: ``,
          title: `Results/ Details`,
          type: r.RichText,
        },
        previousItemId: {
          dataIdentifier: `local-module:collection/HvA2icrab:default`,
          title: `Previous`,
          type: r.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/HvA2icrab:default`,
          title: `Next`,
          type: r.CollectionReference,
        },
      }),
      (St = {}),
      (Ct = {
        async getSlugByRecordId(e, t) {
          let [n] = await Z.get(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `cVobtGrRA`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          ).readAsync();
          return n?.cVobtGrRA;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Z.get(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `cVobtGrRA`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          ).readAsync();
          return n?.id;
        },
      }),
      ($ = {
        exports: {
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          utils: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerCollectionId: `HvA2icrab`,
              framerCollectionUtils: `1`,
              framerColorSyntax: `false`,
              framerData: ``,
              framerEnumToDisplayNameUtils: `2`,
              framerRecordIdKey: `id`,
              framerContractVersion: `1`,
              framerSlug: `cVobtGrRA`,
              framerAutoSizeImages: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
export {
  $ as __FramerMetadata__,
  St as enumToDisplayNameFunctions,
  wt as init_HvA2icrab,
  Q as k,
  Ct as utils,
};
//# sourceMappingURL=HvA2icrab.BdPc-sYg.mjs.map
