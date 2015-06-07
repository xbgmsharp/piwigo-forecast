function FastClick(e) {
    "use strict";
    var t, n = this;
    this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.layer = e;
    if (!e || !e.nodeType) throw new TypeError("Layer must be a document node");
    this.onClick = function() {
        return FastClick.prototype.onClick.apply(n, arguments)
    }, this.onMouse = function() {
        return FastClick.prototype.onMouse.apply(n, arguments)
    }, this.onTouchStart = function() {
        return FastClick.prototype.onTouchStart.apply(n, arguments)
    }, this.onTouchEnd = function() {
        return FastClick.prototype.onTouchEnd.apply(n, arguments)
    }, this.onTouchCancel = function() {
        return FastClick.prototype.onTouchCancel.apply(n, arguments)
    };
    if (typeof window.ontouchstart == "undefined") return;
    this.deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, r) {
        var i = Node.prototype.removeEventListener;
        t === "click" ? i.call(e, t, n.hijacked || n, r) : i.call(e, t, n, r)
    }, e.addEventListener = function(t, n, r) {
        var i = Node.prototype.addEventListener;
        t === "click" ? i.call(e, t, n.hijacked || (n.hijacked = function(e) {
            e.propagationStopped || n(e)
        }), r) : i.call(e, t, n, r)
    }), typeof e.onclick == "function" && (t = e.onclick, e.addEventListener("click", function(e) {
        t(e)
    }, !1), e.onclick = null)
}

function isRetina() {
    return "devicePixelRatio" in window && devicePixelRatio > 1 || "matchMedia" in window && matchMedia("(min-resolution:144dpi)").matches
}

function DataPoint(e, t) {
    e instanceof Object ? this.time = Math.round(e.time) : (this.time = typeof e == "string" ? parseInt(e, 10) : typeof e == "number" ? Math.round(e) : undefined, e = undefined), this.forecastTime = e && e.forecastTime || t, this.weight = e && e.weight !== undefined ? e.weight : 1, this.summary = e && e.summary, this.icon = e && e.icon, this.sunriseTime = e && e.sunriseTime, this.sunsetTime = e && e.sunsetTime, this.precipIntensity = e && e.precipIntensity, this.precipIntensityError = e && e.precipIntensityError, this.precipIntensityMax = e && e.precipIntensityMax, this.precipIntensityMaxError = e && e.precipIntensityMaxError, this.precipIntensityMaxTime = e && e.precipIntensityMaxTime, this.precipProbability = e && e.precipProbability, this.precipProbabilityError = e && e.precipProbabilityError, this.precipType = e && e.precipType, this.precipAccumulation = e && e.precipAccumulation, this.precipAccumulationError = e && e.precipAccumulationError, this.temperature = e && e.temperature, this.temperatureError = e && e.temperatureError, this.temperatureMin = e && e.temperatureMin, this.temperatureMinError = e && e.temperatureMinError, this.temperatureMinTime = e && e.temperatureMinTime, this.temperatureMax = e && e.temperatureMax, this.temperatureMaxError = e && e.temperatureMaxError, this.temperatureMaxTime = e && e.temperatureMaxTime, this.windSpeed = e && e.windSpeed, this.windSpeedError = e && e.windSpeedError, this.windBearing = e && e.windBearing, this.cloudCover = e && e.cloudCover, this.cloudCoverError = e && e.cloudCoverError, this.humidity = e && e.humidity, this.humidityError = e && e.humidityError, this.pressure = e && e.pressure, this.pressureError = e && e.pressureError, this.visibility = e && e.visibility, this.visibilityError = e && e.visibilityError
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function y(e) {
        var t = e.length,
            n = p.type(e);
        return "function" === n || p.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function x(e, t, n) {
        if (p.isFunction(t)) return p.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return p.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (S.test(t)) return p.filter(t, e, n);
            t = p.filter(t, e)
        }
        return p.grep(e, function(e) {
            return p.inArray(e, t) >= 0 !== n
        })
    }

    function O(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function D(e) {
        var t = _[e] = {};
        return p.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function H() {
        N.addEventListener ? (N.removeEventListener("DOMContentLoaded", B, !1), e.removeEventListener("load", B, !1)) : (N.detachEvent("onreadystatechange", B), e.detachEvent("onload", B))
    }

    function B() {
        (N.addEventListener || "load" === event.type || "complete" === N.readyState) && (H(), p.ready())
    }

    function R(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(q, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : I.test(n) ? p.parseJSON(n) : n
                } catch (i) {}
                p.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function U(e) {
        var t;
        for (t in e)
            if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function z(e, t, r, i) {
        if (p.acceptData(e)) {
            var s, o, u = p.expando,
                a = e.nodeType,
                f = a ? p.cache : e,
                l = a ? e[u] : e[u] && u;
            if (l && f[l] && (i || f[l].data) || void 0 !== r || "string" != typeof t) return l || (l = a ? e[u] = n.pop() || p.guid++ : u), f[l] || (f[l] = a ? {} : {
                toJSON: p.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? f[l] = p.extend(f[l], t) : f[l].data = p.extend(f[l].data, t)), o = f[l], i || (o.data || (o.data = {}), o = o.data), void 0 !== r && (o[p.camelCase(t)] = r), "string" == typeof t ? (s = o[t], null == s && (s = o[p.camelCase(t)])) : s = o, s
        }
    }

    function W(e, t, n) {
        if (p.acceptData(e)) {
            var r, i, s = e.nodeType,
                o = s ? p.cache : e,
                u = s ? e[p.expando] : p.expando;
            if (o[u]) {
                if (t && (r = n ? o[u] : o[u].data)) {
                    p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in r ? t = [t] : (t = p.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !U(r) : !p.isEmptyObject(r)) return
                }(n || (delete o[u].data, U(o[u]))) && (s ? p.cleanData([e], !0) : c.deleteExpando || o != o.window ? delete o[u] : o[u] = null)
            }
        }
    }

    function tt() {
        return !0
    }

    function nt() {
        return !1
    }

    function rt() {
        try {
            return N.activeElement
        } catch (e) {}
    }

    function it(e) {
        var t = st.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Et(e, t) {
        var n, r, i = 0,
            s = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [], n = e.childNodes || e; null != (r = n[i]); i++)!t || p.nodeName(r, t) ? s.push(r) : p.merge(s, Et(r, t));
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], s) : s
    }

    function St(e) {
        K.test(e.type) && (e.defaultChecked = e.checked)
    }

    function xt(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Tt(e) {
        return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type, e
    }

    function Nt(e) {
        var t = mt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ct(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) p._data(n, "globalEval", !t || p._data(t[r], "globalEval"))
    }

    function kt(e, t) {
        if (1 === t.nodeType && p.hasData(e)) {
            var n, r, i, s = p._data(e),
                o = p._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; i > r; r++) p.event.add(t, n, u[n][r])
            }
            o.data && (o.data = p.extend({}, o.data))
        }
    }

    function Lt(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !c.noCloneEvent && t[p.expando]) {
                i = p._data(t);
                for (r in i.events) p.removeEvent(t, r, i.handle);
                t.removeAttribute(p.expando)
            }
            "script" === n && t.text !== e.text ? (Tt(t).text = e.text, Nt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && K.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function Mt(t, n) {
        var r = p(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : p.css(r[0], "display");
        return r.detach(), i
    }

    function _t(e) {
        var t = N,
            n = Ot[e];
        return n || (n = Mt(e, t), "none" !== n && n || (At = (At || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (At[0].contentWindow || At[0].contentDocument).document, t.write(), t.close(), n = Mt(e, t), At.detach()), Ot[e] = n), n
    }

    function Ft(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function $t(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Vt.length;
        while (i--)
            if (t = Vt[i] + n, t in e) return t;
        return r
    }

    function Jt(e, t) {
        for (var n, r, i, s = [], o = 0, u = e.length; u > o; o++) r = e[o], r.style && (s[o] = p._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && $(r) && (s[o] = p._data(r, "olddisplay", _t(r.nodeName)))) : s[o] || (i = $(r), (n && "none" !== n || !i) && p._data(r, "olddisplay", i ? n : p.css(r, "display"))));
        for (o = 0; u > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e
    }

    function Kt(e, t, n) {
        var r = Ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Qt(e, t, n, r, i) {
        for (var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += p.css(e, n + V[s], !0, i)), r ? ("content" === n && (o -= p.css(e, "padding" + V[s], !0, i)), "margin" !== n && (o -= p.css(e, "border" + V[s] + "Width", !0, i))) : (o += p.css(e, "padding" + V[s], !0, i), "padding" !== n && (o += p.css(e, "border" + V[s] + "Width", !0, i)));
        return o
    }

    function Gt(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Ht(e),
            o = c.boxSizing() && "border-box" === p.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = Bt(e, t, s), (0 > i || null == i) && (i = e.style[t]), Pt.test(i)) return i;
            r = o && (c.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Qt(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function Yt(e, t, n, r, i) {
        return new Yt.prototype.init(e, t, n, r, i)
    }

    function un() {
        return setTimeout(function() {
            Zt = void 0
        }), Zt = p.now()
    }

    function an(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = V[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function fn(e, t, n) {
        for (var r, i = (on[t] || []).concat(on["*"]), s = 0, o = i.length; o > s; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function ln(e, t, n) {
        var r, i, s, o, u, a, f, l, h = this,
            d = {}, v = e.style,
            m = e.nodeType && $(e),
            g = p._data(e, "fxshow");
        n.queue || (u = p._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, h.always(function() {
            h.always(function() {
                u.unqueued--, p.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], f = p.css(e, "display"), l = _t(e.nodeName), "none" === f && (f = l), "inline" === f && "none" === p.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== l ? v.zoom = 1 : v.display = "inline-block")), n.overflow && (v.overflow = "hidden", c.shrinkWrapBlocks() || h.always(function() {
            v.overflow = n.overflow[0], v.overflowX = n.overflow[1], v.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], tn.exec(i)) {
                if (delete t[r], s = s || "toggle" === i, i === (m ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    m = !0
                }
                d[r] = g && g[r] || p.style(e, r)
            }
        if (!p.isEmptyObject(d)) {
            g ? "hidden" in g && (m = g.hidden) : g = p._data(e, "fxshow", {}), s && (g.hidden = !m), m ? p(e).show() : h.done(function() {
                p(e).hide()
            }), h.done(function() {
                var t;
                p._removeData(e, "fxshow");
                for (t in d) p.style(e, t, d[t])
            });
            for (r in d) o = fn(m ? g[r] : 0, r, h), r in g || (g[r] = o.start, m && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function cn(e, t) {
        var n, r, i, s, o;
        for (n in e)
            if (r = p.camelCase(n), i = t[r], s = e[n], p.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = p.cssHooks[r], o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
    }

    function hn(e, t, n) {
        var r, i, s = 0,
            o = sn.length,
            u = p.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                if (i) return !1;
                for (var t = Zt || un(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length; a > o; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), !1)
            }, f = u.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zt || un(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = p.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        for (cn(l, f.opts.specialEasing); o > s; s++)
            if (r = sn[s].call(f, e, l, f.opts)) return r;
        return p.map(l, fn, f), p.isFunction(f.opts.start) && f.opts.start.call(e, f), p.fx.timer(p.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function In(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(M) || [];
            if (p.isFunction(n))
                while (r = s[i++]) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, p.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                return "string" != typeof f || s || i[f] ? s ? !(a = f) : void 0 : (t.dataTypes.unshift(f), o(f), !1)
            }), a
        }
        var i = {}, s = e === Bn;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Rn(e, t) {
        var n, r, i = p.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && p.extend(!0, e, n), e
    }

    function Un(e, t, n) {
        var r, i, s, o, u = e.contents,
            a = e.dataTypes;
        while ("*" === a[0]) a.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    a.unshift(o);
                    break
                }
        if (a[0] in n) s = a[0];
        else {
            for (o in n) {
                if (!a[0] || e.converters[o + " " + a[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== a[0] && a.unshift(s), n[s]) : void 0
    }

    function zn(e, t, n, r) {
        var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
                if ("*" === s) s = a;
                else if ("*" !== a && a !== s) {
            if (o = f[a + " " + s] || f["* " + s], !o)
                for (i in f)
                    if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                        o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: o ? c : "No conversion from " + a + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Kn(e, t, n, r) {
        var i;
        if (p.isArray(t)) p.each(t, function(t, i) {
            n || Xn.test(e) ? r(e, i) : Kn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== p.type(t)) r(e, t);
        else
            for (i in t) Kn(e + "[" + i + "]", t[i], n, r)
    }

    function Zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function er() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function sr(e) {
        return p.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var n = [],
        r = n.slice,
        i = n.concat,
        s = n.push,
        o = n.indexOf,
        u = {}, a = u.toString,
        f = u.hasOwnProperty,
        l = "".trim,
        c = {}, h = "1.11.0",
        p = function(e, t) {
            return new p.fn.init(e, t)
        }, d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        v = /^-ms-/,
        m = /-([\da-z])/gi,
        g = function(e, t) {
            return t.toUpperCase()
        };
    p.fn = p.prototype = {
        jquery: h,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return p.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(p.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, p.extend = p.fn.extend = function() {
        var e, t, n, r, i, s, o = arguments[0] || {}, u = 1,
            a = arguments.length,
            f = !1;
        for ("boolean" == typeof o && (f = o, o = arguments[u] || {}, u++), "object" == typeof o || p.isFunction(o) || (o = {}), u === a && (o = this, u--); a > u; u++)
            if (null != (i = arguments[u]))
                for (r in i) e = o[r], n = i[r], o !== n && (f && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, s = e && p.isArray(e) ? e : []) : s = e && p.isPlainObject(e) ? e : {}, o[r] = p.extend(f, s, n)) : void 0 !== n && (o[r] = n));
        return o
    }, p.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === p.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === p.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
            try {
                if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (c.ownLast)
                for (t in e) return f.call(e, t);
            for (t in e);
            return void 0 === t || f.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[a.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && p.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(v, "ms-").replace(m, g)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                s = e.length,
                o = y(e);
            if (n) {
                if (o) {
                    for (; s > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (o) {
                for (; s > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: l && !l.call("﻿ ") ? function(e) {
            return null == e ? "" : l.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (y(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (o) return o.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            var n = +t.length,
                r = 0,
                i = e.length;
            while (n > r) e[i++] = t[r++];
            if (n !== n)
                while (void 0 !== t[r]) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], s = 0, o = e.length, u = !n; o > s; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var r, s = 0,
                o = e.length,
                u = y(e),
                a = [];
            if (u)
                for (; o > s; s++) r = t(e[s], s, n), null != r && a.push(r);
            else
                for (s in e) r = t(e[s], s, n), null != r && a.push(r);
            return i.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, s;
            return "string" == typeof t && (s = e[t], t = e, e = s), p.isFunction(e) ? (n = r.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(r.call(arguments)))
            }, i.guid = e.guid = e.guid || p.guid++, i) : void 0
        },
        now: function() {
            return +(new Date)
        },
        support: c
    }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function(e) {
        function rt(e, t, r, i) {
            var s, o, u, a, f, h, v, m, w, E;
            if ((t ? t.ownerDocument || t : b) !== c && l(t), t = t || c, r = r || [], !e || "string" != typeof e) return r;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (p && !i) {
                if (s = G.exec(e))
                    if (u = s[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(u), !o || !o.parentNode) return r;
                            if (o.id === u) return r.push(o), r
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u) return r.push(o), r
                    } else {
                        if (s[2]) return _.apply(r, t.getElementsByTagName(e)), r;
                        if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(u)), r
                    }
                if (n.qsa && (!d || !d.test(e))) {
                    if (m = v = y, w = t, E = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        h = dt(e), (v = t.getAttribute("id")) ? m = v.replace(Z, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = h.length;
                        while (f--) h[f] = m + vt(h[f]);
                        w = Y.test(e) && ht(t.parentNode) || t, E = h.join(",")
                    }
                    if (E) try {
                        return _.apply(r, w.querySelectorAll(E)), r
                    } catch (S) {} finally {
                        v || t.removeAttribute("id")
                    }
                }
            }
            return xt(e.replace(R, "$1"), t, r, i)
        }

        function it() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function st(e) {
            return e[y] = !0, e
        }

        function ot(e) {
            var t = c.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ut(e, t) {
            var n = e.split("|"),
                i = e.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function at(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || k) - (~e.sourceIndex || k);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ct(e) {
            return st(function(t) {
                return t = +t, st(function(n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ht(e) {
            return e && typeof e.getElementsByTagName !== C && e
        }

        function pt() {}

        function dt(e, t) {
            var n, i, s, o, u, a, f, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = r.preFilter;
            while (u) {
                (!n || (i = U.exec(u))) && (i && (u = u.slice(i[0].length) || u), a.push(s = [])), n = !1, (i = z.exec(u)) && (n = i.shift(), s.push({
                    value: n,
                    type: i[0].replace(R, " ")
                }), u = u.slice(n.length));
                for (o in r.filter)!(i = $[o].exec(u)) || f[o] && !(i = f[o](i)) || (n = i.shift(), s.push({
                    value: n,
                    type: o,
                    matches: i
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? rt.error(e) : x(e, a).slice(0)
        }

        function vt(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function mt(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                s = E++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (1 === t.nodeType || i) return e(t, n, s)
            } : function(t, n, o) {
                var u, a, f = [w, s];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || i) && e(t, n, o)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || i) {
                            if (a = t[y] || (t[y] = {}), (u = a[r]) && u[0] === w && u[1] === s) return f[2] = u[2];
                            if (a[r] = f, f[2] = e(t, n, o)) return !0
                        }
            }
        }

        function gt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function yt(e, t, n, r, i) {
            for (var s, o = [], u = 0, a = e.length, f = null != t; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
            return o
        }

        function bt(e, t, n, r, i, s) {
            return r && !r[y] && (r = bt(r)), i && !i[y] && (i = bt(i, s)), st(function(s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || St(t || "*", u.nodeType ? [u] : u, []),
                    m = !e || !s && t ? v : yt(v, h, e, u, a),
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                if (n && n(m, g, u, a), r) {
                    f = yt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = yt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
            })
        }

        function wt(e) {
            for (var t, n, i, s = e.length, o = r.relative[e[0].type], a = o || r.relative[" "], f = o ? 1 : 0, l = mt(function(e) {
                    return e === t
                }, a, !0), c = mt(function(e) {
                    return P.call(t, e) > -1
                }, a, !0), h = [
                    function(e, n, r) {
                        return !o && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }
                ]; s > f; f++)
                if (n = r.relative[e[f].type]) h = [mt(gt(h), n)];
                else {
                    if (n = r.filter[e[f].type].apply(null, e[f].matches), n[y]) {
                        for (i = ++f; s > i; i++)
                            if (r.relative[e[i].type]) break;
                        return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({
                            value: " " === e[f - 2].type ? "*" : ""
                        })).replace(R, "$1"), n, i > f && wt(e.slice(f, i)), s > i && wt(e = e.slice(i)), s > i && vt(e))
                    }
                    h.push(n)
                }
            return gt(h)
        }

        function Et(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                s = function(s, o, a, f, l) {
                    var h, p, d, v = 0,
                        m = "0",
                        g = s && [],
                        y = [],
                        b = u,
                        E = s || i && r.find.TAG("*", l),
                        S = w += null == b ? 1 : Math.random() || .1,
                        x = E.length;
                    for (l && (u = o !== c && o); m !== x && null != (h = E[m]); m++) {
                        if (i && h) {
                            p = 0;
                            while (d = e[p++])
                                if (d(h, o, a)) {
                                    f.push(h);
                                    break
                                }
                            l && (w = S)
                        }
                        n && ((h = !d && h) && v--, s && g.push(h))
                    }
                    if (v += m, n && m !== v) {
                        p = 0;
                        while (d = t[p++]) d(g, y, o, a);
                        if (s) {
                            if (v > 0)
                                while (m--) g[m] || y[m] || (y[m] = O.call(f));
                            y = yt(y)
                        }
                        _.apply(f, y), l && !s && y.length > 0 && v + t.length > 1 && rt.uniqueSort(f)
                    }
                    return l && (w = S, u = b), g
                };
            return n ? st(s) : s
        }

        function St(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) rt(e, t[r], n);
            return n
        }

        function xt(e, t, i, s) {
            var u, a, f, l, c, h = dt(e);
            if (!s && 1 === h.length) {
                if (a = h[0] = h[0].slice(0), a.length > 2 && "ID" === (f = a[0]).type && n.getById && 9 === t.nodeType && p && r.relative[a[1].type]) {
                    if (t = (r.find.ID(f.matches[0].replace(et, tt), t) || [])[0], !t) return i;
                    e = e.slice(a.shift().value.length)
                }
                u = $.needsContext.test(e) ? 0 : a.length;
                while (u--) {
                    if (f = a[u], r.relative[l = f.type]) break;
                    if ((c = r.find[l]) && (s = c(f.matches[0].replace(et, tt), Y.test(a[0].type) && ht(t.parentNode) || t))) {
                        if (a.splice(u, 1), e = s.length && vt(a), !e) return _.apply(i, s), i;
                        break
                    }
                }
            }
            return o(e, h)(s, t, !p, i, Y.test(e) && ht(t.parentNode) || t), i
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y = "sizzle" + -(new Date),
            b = e.document,
            w = 0,
            E = 0,
            S = it(),
            x = it(),
            T = it(),
            N = function(e, t) {
                return e === t && (f = !0), 0
            }, C = "undefined",
            k = 1 << 31,
            L = {}.hasOwnProperty,
            A = [],
            O = A.pop,
            M = A.push,
            _ = A.push,
            D = A.slice,
            P = A.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = j.replace("w", "w#"),
            I = "\\[" + B + "*(" + j + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + B + "*\\]",
            q = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
            R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            U = new RegExp("^" + B + "*," + B + "*"),
            z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
            X = new RegExp(q),
            V = new RegExp("^" + F + "$"),
            $ = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            }, J = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Y = /[+~]/,
            Z = /'|\\/g,
            et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
            tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            _.apply(A = D.call(b.childNodes), b.childNodes), A[b.childNodes.length].nodeType
        } catch (nt) {
            _ = {
                apply: A.length ? function(e, t) {
                    M.apply(e, D.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        n = rt.support = {}, s = rt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, l = rt.setDocument = function(e) {
            var t, i = e ? e.ownerDocument || e : b,
                o = i.defaultView;
            return i !== c && 9 === i.nodeType && i.documentElement ? (c = i, h = i.documentElement, p = !s(i), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
                l()
            }, !1) : o.attachEvent && o.attachEvent("onunload", function() {
                l()
            })), n.attributes = ot(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ot(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(i.getElementsByClassName) && ot(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), n.getById = ot(function(e) {
                return h.appendChild(e).id = y, !i.getElementsByName || !i.getElementsByName(y).length
            }), n.getById ? (r.find.ID = function(e, t) {
                if (typeof t.getElementById !== C && p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== C ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = s[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== C && p ? t.getElementsByClassName(e) : void 0
            }, v = [], d = [], (n.qsa = Q.test(i.querySelectorAll)) && (ot(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || d.push("\\[" + B + "*(?:value|" + H + ")"), e.querySelectorAll(":checked").length || d.push(":checked")
            }), ot(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && d.push("name" + B + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
            }), d = d.length && new RegExp(d.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), g = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !! r && 1 === r.nodeType && !! (n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, N = t ? function(e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === b && g(b, e) ? -1 : t === i || t.ownerDocument === b && g(b, t) ? 1 : a ? P.call(a, e) - P.call(a, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    s = e.parentNode,
                    o = t.parentNode,
                    u = [e],
                    l = [t];
                if (!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : a ? P.call(a, e) - P.call(a, t) : 0;
                if (s === o) return at(e, t);
                n = e;
                while (n = n.parentNode) u.unshift(n);
                n = t;
                while (n = n.parentNode) l.unshift(n);
                while (u[r] === l[r]) r++;
                return r ? at(u[r], l[r]) : u[r] === b ? -1 : l[r] === b ? 1 : 0
            }, i) : c
        }, rt.matches = function(e, t) {
            return rt(e, null, null, t)
        }, rt.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== c && l(e), t = t.replace(W, "='$1']"), !(!n.matchesSelector || !p || v && v.test(t) || d && d.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return rt(t, c, null, [e]).length > 0
        }, rt.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t)
        }, rt.attr = function(e, t) {
            (e.ownerDocument || e) !== c && l(e);
            var i = r.attrHandle[t.toLowerCase()],
                s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : void 0;
            return void 0 !== s ? s : n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        }, rt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, rt.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                s = 0;
            if (f = !n.detectDuplicates, a = !n.sortStable && e.slice(0), e.sort(N), f) {
                while (t = e[s++]) t === e[s] && (i = r.push(s));
                while (i--) e.splice(r[i], 1)
            }
            return a = null, e
        }, i = rt.getText = function(e) {
            var t, n = "",
                r = 0,
                s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === s || 4 === s) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, r = rt.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: $,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || rt.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && rt.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return $.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && X.test(n) && (t = dt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(et, tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && S(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== C && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = rt.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        u = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            b = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    d = v = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? m.firstChild : m.lastChild], o && b) {
                                l = m[y] || (m[y] = {}), f = l[e] || [], p = f[0] === w && f[1], h = f[0] === w && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (1 === c.nodeType && ++h && c === t) {
                                        l[e] = [w, p, h];
                                        break
                                    }
                            } else if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (b && ((c[y] || (c[y] = {}))[e] = [w, h]), c === t)) break; return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || rt.error("unsupported pseudo: " + e);
                    return i[y] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                        var r, s = i(e, t),
                            o = s.length;
                        while (o--) r = P.call(e, s[o]), e[r] = !(n[r] = s[o])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: st(function(e) {
                    var t = [],
                        n = [],
                        r = o(e.replace(R, "$1"));
                    return r[y] ? st(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: st(function(e) {
                    return function(t) {
                        return rt(e, t).length > 0
                    }
                }),
                contains: st(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: st(function(e) {
                    return V.test(e || "") || rt.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return J.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ct(function() {
                    return [0]
                }),
                last: ct(function(e, t) {
                    return [t - 1]
                }),
                eq: ct(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ct(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: ct(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: ct(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ct(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, r.pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) r.pseudos[t] = ft(t);
        for (t in {
            submit: !0,
            reset: !0
        }) r.pseudos[t] = lt(t);
        return pt.prototype = r.filters = r.pseudos, r.setFilters = new pt, o = rt.compile = function(e, t) {
            var n, r = [],
                i = [],
                s = T[e + " "];
            if (!s) {
                t || (t = dt(e)), n = t.length;
                while (n--) s = wt(t[n]), s[y] ? r.push(s) : i.push(s);
                s = T(e, Et(i, r))
            }
            return s
        }, n.sortStable = y.split("").sort(N).join("") === y, n.detectDuplicates = !! f, l(), n.sortDetached = ot(function(e) {
            return 1 & e.compareDocumentPosition(c.createElement("div"))
        }), ot(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ut("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ot(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ut("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ot(function(e) {
            return null == e.getAttribute("disabled")
        }) || ut(H, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), rt
    }(e);
    p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;
    var w = p.expr.match.needsContext,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^.[^:#\[\.,]*$/;
    p.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, p.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (p.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) p.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? p.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(x(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(x(this, e || [], !0))
        },
        is: function(e) {
            return !!x(this, "string" == typeof e && w.test(e) ? p(e) : e || [], !1).length
        }
    });
    var T, N = e.document,
        C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = p.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : C.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, !0)), E.test(n[1]) && p.isPlainObject(t))
                        for (n in t) p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = N.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return T.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = N, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? "undefined" != typeof T.ready ? T.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
        };
    k.prototype = p.fn, T = p(N);
    var L = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.extend({
        dir: function(e, t, n) {
            var r = [],
                i = e[t];
            while (i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !p(i).is(n))) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), p.fn.extend({
        has: function(e) {
            var t, n = p(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (p.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, s = [], o = w.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? p.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return p.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return p.dir(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return p.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return p.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return p.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return p.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return p.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return p.sibling(e.firstChild)
        },
        contents: function(e) {
            return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
        }
    }, function(e, t) {
        p.fn[e] = function(n, r) {
            var i = p.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = p.filter(r, i)), this.length > 1 && (A[e] || (i = p.unique(i)), L.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var M = /\S+/g,
        _ = {};
    p.Callbacks = function(e) {
        e = "string" == typeof e ? _[e] || D(e) : p.extend({}, e);
        var t, n, r, i, s, o, u = [],
            a = !e.once && [],
            f = function(c) {
                for (n = e.memory && c, r = !0, s = o || 0, o = 0, i = u.length, t = !0; u && i > s; s++)
                    if (u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
            }, l = {
                add: function() {
                    if (u) {
                        var r = u.length;
                        ! function s(t) {
                            p.each(t, function(t, n) {
                                var r = p.type(n);
                                "function" === r ? e.unique && l.has(n) || u.push(n) : n && n.length && "string" !== r && s(n)
                            })
                        }(arguments), t ? i = u.length : n && (o = r, f(n))
                    }
                    return this
                },
                remove: function() {
                    return u && p.each(arguments, function(e, n) {
                        var r;
                        while ((r = p.inArray(n, u, r)) > -1) u.splice(r, 1), t && (i >= r && i--, s >= r && s--)
                    }), this
                },
                has: function(e) {
                    return e ? p.inArray(e, u) > -1 : !! u && !! u.length
                },
                empty: function() {
                    return u = [], i = 0, this
                },
                disable: function() {
                    return u = a = n = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return a = void 0, n || l.disable(), this
                },
                locked: function() {
                    return !a
                },
                fireWith: function(e, n) {
                    return !u || r && !a || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? a.push(n) : f(n)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    }, p.extend({
        Deferred: function(e) {
            var t = [
                ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                ["notify", "progress", p.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return p.Deferred(function(n) {
                            p.each(t, function(t, s) {
                                var o = p.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && p.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? p.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, p.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = r.call(arguments),
                i = n.length,
                s = 1 !== i || e && p.isFunction(e.promise) ? i : 0,
                o = 1 === s ? e : p.Deferred(),
                u = function(e, t, n) {
                    return function(i) {
                        t[e] = this, n[e] = arguments.length > 1 ? r.call(arguments) : i, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                    }
                }, a, f, l;
            if (i > 1)
                for (a = new Array(i), f = new Array(i), l = new Array(i); i > t; t++) n[t] && p.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a)) : --s;
            return s || o.resolveWith(l, n), o.promise()
        }
    });
    var P;
    p.fn.ready = function(e) {
        return p.ready.promise().done(e), this
    }, p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++ : p.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--p.readyWait : !p.isReady) {
                if (!N.body) return setTimeout(p.ready);
                p.isReady = !0, e !== !0 && --p.readyWait > 0 || (P.resolveWith(N, [p]), p.fn.trigger && p(N).trigger("ready").off("ready"))
            }
        }
    }), p.ready.promise = function(t) {
        if (!P)
            if (P = p.Deferred(), "complete" === N.readyState) setTimeout(p.ready);
            else if (N.addEventListener) N.addEventListener("DOMContentLoaded", B, !1), e.addEventListener("load", B, !1);
        else {
            N.attachEvent("onreadystatechange", B), e.attachEvent("onload", B);
            var n = !1;
            try {
                n = null == e.frameElement && N.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!p.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    H(), p.ready()
                }
            }()
        }
        return P.promise(t)
    };
    var j = "undefined",
        F;
    for (F in p(c)) break;
    c.ownLast = "0" !== F, c.inlineBlockNeedsLayout = !1, p(function() {
        var e, t, n = N.getElementsByTagName("body")[0];
        n && (e = N.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = N.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== j && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (c.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
    }),
    function() {
        var e = N.createElement("div");
        if (null == c.deleteExpando) {
            c.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                c.deleteExpando = !1
            }
        }
        e = null
    }(), p.acceptData = function(e) {
        var t = p.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        q = /([A-Z])/g;
    p.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando], !! e && !U(e)
        },
        data: function(e, t, n) {
            return z(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return z(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        }
    }), p.fn.extend({
        data: function(e, t) {
            var n, r, i, s = this[0],
                o = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (i = p.data(s), 1 === s.nodeType && !p._data(s, "parsedAttrs"))) {
                    n = o.length;
                    while (n--) r = o[n].name, 0 === r.indexOf("data-") && (r = p.camelCase(r.slice(5)), R(s, r, i[r]));
                    p._data(s, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                p.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                p.data(this, e, t)
            }) : s ? R(s, e, p.data(s, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                p.removeData(this, e)
            })
        }
    }), p.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = p._data(e, t), n && (!r || p.isArray(n) ? r = p._data(e, t, p.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = p.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = p._queueHooks(e, t),
                o = function() {
                    p.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return p._data(e, n) || p._data(e, n, {
                empty: p.Callbacks("once memory").add(function() {
                    p._removeData(e, t + "queue"), p._removeData(e, n)
                })
            })
        }
    }), p.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                p.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = p.Deferred(),
                s = this,
                o = this.length,
                u = function() {
                    --r || i.resolveWith(s, [s])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (o--) n = p._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        V = ["Top", "Right", "Bottom", "Left"],
        $ = function(e, t) {
            return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
        }, J = p.access = function(e, t, n, r, i, s, o) {
            var u = 0,
                a = e.length,
                f = null == n;
            if ("object" === p.type(n)) {
                i = !0;
                for (u in n) p.access(e, t, u, n[u], !0, s, o)
            } else if (void 0 !== r && (i = !0, p.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
                return f.call(p(e), n)
            })), t))
                for (; a > u; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)));
            return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
        }, K = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = N.createDocumentFragment(),
            t = N.createElement("div"),
            n = N.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", c.leadingWhitespace = 3 === t.firstChild.nodeType, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !! t.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), c.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
            c.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == c.deleteExpando) {
            c.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                c.deleteExpando = !1
            }
        }
        e = t = n = null
    }(),
    function() {
        var t, n, r = N.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t, (c[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), c[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Q = /^(?:input|select|textarea)$/i,
        G = /^key/,
        Y = /^(?:mouse|contextmenu)|click/,
        Z = /^(?:focusinfocus|focusoutblur)$/,
        et = /^([^.]*)(?:\.(.+)|)$/;
    p.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, d, v, m, g = p._data(e);
            if (g) {
                n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = p.guid++), (o = g.events) || (o = g.events = {}), (l = g.handle) || (l = g.handle = function(e) {
                    return typeof p === j || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(l.elem, arguments)
                }, l.elem = e), t = (t || "").match(M) || [""], u = t.length;
                while (u--) s = et.exec(t[u]) || [], d = m = s[1], v = (s[2] || "").split(".").sort(), d && (f = p.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = p.event.special[d] || {}, c = p.extend({
                    type: d,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && p.expr.match.needsContext.test(i),
                    namespace: v.join(".")
                }, a), (h = o[d]) || (h = o[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, r, v, l) !== !1 || (e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l))), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), p.event.global[d] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, d, v, m, g = p.hasData(e) && p._data(e);
            if (g && (l = g.events)) {
                t = (t || "").match(M) || [""], f = t.length;
                while (f--)
                    if (u = et.exec(t[f]) || [], d = m = u[1], v = (u[2] || "").split(".").sort(), d) {
                        c = p.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, h = l[d] || [], u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                        while (s--) o = h[s], !i && m !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                        a && !h.length && (c.teardown && c.teardown.call(e, v, g.handle) !== !1 || p.removeEvent(e, d, g.handle), delete l[d])
                    } else
                        for (d in l) p.event.remove(e, d + t[f], n, r, !0);
                p.isEmptyObject(l) && (delete g.handle, p._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var s, o, u, a, l, c, h, d = [r || N],
                v = f.call(t, "type") ? t.type : t,
                m = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (u = c = r = r || N, 3 !== r.nodeType && 8 !== r.nodeType && !Z.test(v + p.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), o = v.indexOf(":") < 0 && "on" + v, t = t[p.expando] ? t : new p.Event(v, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : p.makeArray(n, [t]), l = p.event.special[v] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !p.isWindow(r)) {
                    for (a = l.delegateType || v, Z.test(a + v) || (u = u.parentNode); u; u = u.parentNode) d.push(u), c = u;
                    c === (r.ownerDocument || N) && d.push(c.defaultView || c.parentWindow || e)
                }
                h = 0;
                while ((u = d[h++]) && !t.isPropagationStopped()) t.type = h > 1 ? a : l.bindType || v, s = (p._data(u, "events") || {})[t.type] && p._data(u, "handle"), s && s.apply(u, n), s = o && u[o], s && s.apply && p.acceptData(u) && (t.result = s.apply(u, n), t.result === !1 && t.preventDefault());
                if (t.type = v, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && p.acceptData(r) && o && r[v] && !p.isWindow(r)) {
                    c = r[o], c && (r[o] = null), p.event.triggered = v;
                    try {
                        r[v]()
                    } catch (g) {}
                    p.event.triggered = void 0, c && (r[o] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, n, i, s, o, u = [],
                a = r.call(arguments),
                f = (p._data(this, "events") || {})[e.type] || [],
                l = p.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = p.event.handlers.call(this, e, f), t = 0;
                while ((s = u[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((p.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, s, o = [],
                u = t.delegateCount,
                a = e.target;
            if (u && a.nodeType && (!e.button || "click" !== e.type))
                for (; a != this; a = a.parentNode || this)
                    if (1 === a.nodeType && (a.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], s = 0; u > s; s++) r = t[s], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? p(n, this).index(a) >= 0 : p.find(n, this, null, [a]).length), i[n] && i.push(r);
                        i.length && o.push({
                            elem: a,
                            handlers: i
                        })
                    }
            return u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            }), o
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = Y.test(i) ? this.mouseHooks : G.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new p.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || N), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || N, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== rt() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === rt() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = p.extend(new p.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, p.removeEvent = N.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === j && (e[r] = null), e.detachEvent(r, n))
    }, p.Event = function(e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? tt : nt) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    }, p.Event.prototype = {
        isDefaultPrevented: nt,
        isPropagationStopped: nt,
        isImmediatePropagationStopped: nt,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = tt, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = tt, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                return (!i || i !== r && !p.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), c.submitBubbles || (p.event.special.submit = {
        setup: function() {
            return p.nodeName(this, "form") ? !1 : void p.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : void 0;
                n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), p._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return p.nodeName(this, "form") ? !1 : void p.event.remove(this, "._submit")
        }
    }), c.changeBubbles || (p.event.special.change = {
        setup: function() {
            return Q.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (p.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), p.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, e, !0)
            })), !1) : void p.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Q.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e, !0)
                }), p._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return p.event.remove(this, "._change"), !Q.test(this.nodeName)
        }
    }), c.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e), !0)
        };
        p.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t);
                i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t) - 1;
                i ? p._data(r, t, i) : (r.removeEventListener(e, n, !0), p._removeData(r, t))
            }
        }
    }), p.fn.extend({
        on: function(e, t, n, r, i) {
            var s, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = nt;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return p().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = p.guid++)), this.each(function() {
                p.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = nt), this.each(function() {
                p.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                p.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? p.event.trigger(e, t, n, !0) : void 0
        }
    });
    var st = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ot = / jQuery\d+="(?:null|\d+)"/g,
        ut = new RegExp("<(?:" + st + ")[\\s/>]", "i"),
        at = /^\s+/,
        ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        lt = /<([\w:]+)/,
        ct = /<tbody/i,
        ht = /<|&#?\w+;/,
        pt = /<(?:script|style|link)/i,
        dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        vt = /^$|\/(?:java|ecma)script/i,
        mt = /^true\/(.*)/,
        gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, bt = it(N),
        wt = bt.appendChild(N.createElement("div"));
    yt.optgroup = yt.option, yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, p.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = p.contains(e.ownerDocument, e);
            if (c.html5Clone || p.isXMLDoc(e) || !ut.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (wt.innerHTML = e.outerHTML, wt.removeChild(s = wt.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                for (r = Et(s), u = Et(e), o = 0; null != (i = u[o]); ++o) r[o] && Lt(i, r[o]);
            if (t)
                if (n)
                    for (u = u || Et(e), r = r || Et(s), o = 0; null != (i = u[o]); o++) kt(i, r[o]);
                else kt(e, s);
            return r = Et(s, "script"), r.length > 0 && Ct(r, !a && Et(e, "script")), r = u = i = null, s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, s, o, u, a, f, l, h = e.length, d = it(t), v = [], m = 0; h > m; m++)
                if (s = e[m], s || 0 === s)
                    if ("object" === p.type(s)) p.merge(v, s.nodeType ? [s] : s);
                    else if (ht.test(s)) {
                u = u || d.appendChild(t.createElement("div")), a = (lt.exec(s) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, u.innerHTML = l[1] + s.replace(ft, "<$1></$2>") + l[2], i = l[0];
                while (i--) u = u.lastChild;
                if (!c.leadingWhitespace && at.test(s) && v.push(t.createTextNode(at.exec(s)[0])), !c.tbody) {
                    s = "table" !== a || ct.test(s) ? "<table>" !== l[1] || ct.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length;
                    while (i--) p.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                }
                p.merge(v, u.childNodes), u.textContent = "";
                while (u.firstChild) u.removeChild(u.firstChild);
                u = d.lastChild
            } else v.push(t.createTextNode(s));
            u && d.removeChild(u), c.appendChecked || p.grep(Et(v, "input"), St), m = 0;
            while (s = v[m++])
                if ((!r || -1 === p.inArray(s, r)) && (o = p.contains(s.ownerDocument, s), u = Et(d.appendChild(s), "script"), o && Ct(u), n)) {
                    i = 0;
                    while (s = u[i++]) vt.test(s.type || "") && n.push(s)
                }
            return u = null, d
        },
        cleanData: function(e, t) {
            for (var r, i, s, o, u = 0, a = p.expando, f = p.cache, l = c.deleteExpando, h = p.event.special; null != (r = e[u]); u++)
                if ((t || p.acceptData(r)) && (s = r[a], o = s && f[s])) {
                    if (o.events)
                        for (i in o.events) h[i] ? p.event.remove(r, i) : p.removeEvent(r, i, o.handle);
                    f[s] && (delete f[s], l ? delete r[a] : typeof r.removeAttribute !== j ? r.removeAttribute(a) : r[a] = null, n.push(s))
                }
        }
    }), p.fn.extend({
        text: function(e) {
            return J(this, function(e) {
                return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = xt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = xt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? p.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || p.cleanData(Et(n)), n.parentNode && (t && p.contains(n.ownerDocument, n) && Ct(Et(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && p.cleanData(Et(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && p.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return p.clone(this, e, t)
            })
        },
        html: function(e) {
            return J(this, function(e) {
                var t = this[0] || {}, n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ot, "") : void 0;
                if (!("string" != typeof e || pt.test(e) || !c.htmlSerialize && ut.test(e) || !c.leadingWhitespace && at.test(e) || yt[(lt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(ft, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (p.cleanData(Et(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, p.cleanData(Et(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n, r, s, o, u, a, f = 0,
                l = this.length,
                h = this,
                d = l - 1,
                v = e[0],
                m = p.isFunction(v);
            if (m || l > 1 && "string" == typeof v && !c.checkClone && dt.test(v)) return this.each(function(n) {
                var r = h.eq(n);
                m && (e[0] = v.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (a = p.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (o = p.map(Et(a, "script"), Tt), s = o.length; l > f; f++) r = a, f !== d && (r = p.clone(r, !0, !0), s && p.merge(o, Et(r, "script"))), t.call(this[f], r, f);
                if (s)
                    for (u = o[o.length - 1].ownerDocument, p.map(o, Nt), f = 0; s > f; f++) r = o[f], vt.test(r.type || "") && !p._data(r, "globalEval") && p.contains(u, r) && (r.src ? p._evalUrl && p._evalUrl(r.src) : p.globalEval((r.text || r.textContent || r.innerHTML || "").replace(gt, "")));
                a = n = null
            }
            return this
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        p.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = p(e), u = o.length - 1; u >= r; r++) n = r === u ? this : this.clone(!0), p(o[r])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var At, Ot = {};
    ! function() {
        var e, t, n = N.createElement("div"),
            r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(e.style.opacity), c.cssFloat = !! e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, c.shrinkWrapBlocks = function() {
            var e, n, i, s;
            if (null == t) {
                if (e = N.getElementsByTagName("body")[0], !e) return;
                s = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = N.createElement("div"), i = N.createElement("div"), e.appendChild(n).appendChild(i), t = !1, typeof i.style.zoom !== j && (i.style.cssText = r + ";width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = 3 !== i.offsetWidth), e.removeChild(n), e = n = i = null
            }
            return t
        }
    }();
    var Dt = /^margin/,
        Pt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
        Ht, Bt, jt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (Ht = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, Bt = function(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || Ht(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || p.contains(e.ownerDocument, e) || (o = p.style(e, t)), Pt.test(o) && Dt.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), void 0 === o ? o : o + ""
    }) : N.documentElement.currentStyle && (Ht = function(e) {
        return e.currentStyle
    }, Bt = function(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || Ht(e), o = n ? n[t] : void 0, null == o && u && u[t] && (o = u[t]), Pt.test(o) && !jt.test(t) && (r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = "fontSize" === t ? "1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), void 0 === o ? o : o + "" || "auto"
    }), ! function() {
        function l() {
            var t, n, u = N.getElementsByTagName("body")[0];
            u && (t = N.createElement("div"), n = N.createElement("div"), t.style.cssText = a, u.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", p.swap(u, null != u.style.zoom ? {
                zoom: 1
            } : {}, function() {
                r = 4 === n.offsetWidth
            }), i = !0, s = !1, o = !0, e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(n, null) || {}).top, i = "4px" === (e.getComputedStyle(n, null) || {
                width: "4px"
            }).width), u.removeChild(t), n = u = null)
        }
        var t, n, r, i, s, o, u = N.createElement("div"),
            a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            f = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = u.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(t.style.opacity), c.cssFloat = !! t.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === u.style.backgroundClip, t = u = null, p.extend(c, {
            reliableHiddenOffsets: function() {
                if (null != n) return n;
                var e, t, r, i = N.createElement("div"),
                    s = N.getElementsByTagName("body")[0];
                if (s) return i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = N.createElement("div"), e.style.cssText = a, s.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", r = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", n = r && 0 === t[0].offsetHeight, s.removeChild(e), i = s = null, n
            },
            boxSizing: function() {
                return null == r && l(), r
            },
            boxSizingReliable: function() {
                return null == i && l(), i
            },
            pixelPosition: function() {
                return null == s && l(), s
            },
            reliableMarginRight: function() {
                var t, n, r, i;
                if (null == o && e.getComputedStyle) {
                    if (t = N.getElementsByTagName("body")[0], !t) return;
                    n = N.createElement("div"), r = N.createElement("div"), n.style.cssText = a, t.appendChild(n).appendChild(r), i = r.appendChild(N.createElement("div")), i.style.cssText = r.style.cssText = f, i.style.marginRight = i.style.width = "0", r.style.width = "1px", o = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(n)
                }
                return o
            }
        })
    }(), p.swap = function(e, t, n, r) {
        var i, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t) e.style[s] = o[s];
        return i
    };
    var It = /alpha\([^)]*\)/i,
        qt = /opacity\s*=\s*([^)]*)/,
        Rt = /^(none|table(?!-c[ea]).+)/,
        Ut = new RegExp("^(" + X + ")(.*)$", "i"),
        zt = new RegExp("^([+-])=(" + X + ")", "i"),
        Wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Xt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Vt = ["Webkit", "O", "Moz", "ms"];
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Bt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, s, o, u = p.camelCase(t),
                    a = e.style;
                if (t = p.cssProps[u] || (p.cssProps[u] = $t(a, u)), o = p.cssHooks[t] || p.cssHooks[u], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : a[t];
                if (s = typeof n, "string" === s && (i = zt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t)), s = "number"), null != n && n === n && ("number" !== s || p.cssNumber[u] || (n += "px"), c.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (a[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, r))))) try {
                    a[t] = "", a[t] = n
                } catch (f) {}
            }
        },
        css: function(e, t, n, r) {
            var i, s, o, u = p.camelCase(t);
            return t = p.cssProps[u] || (p.cssProps[u] = $t(e.style, u)), o = p.cssHooks[t] || p.cssHooks[u], o && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = Bt(e, t, r)), "normal" === s && t in Xt && (s = Xt[t]), "" === n || n ? (i = parseFloat(s), n === !0 || p.isNumeric(i) ? i || 0 : s) : s
        }
    }), p.each(["height", "width"], function(e, t) {
        p.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && Rt.test(p.css(e, "display")) ? p.swap(e, Wt, function() {
                    return Gt(e, t, r)
                }) : Gt(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && Ht(e);
                return Kt(e, n, r ? Qt(e, t, r, c.boxSizing() && "border-box" === p.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), c.opacity || (p.cssHooks.opacity = {
        get: function(e, t) {
            return qt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === p.trim(s.replace(It, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = It.test(s) ? s.replace(It, i) : s + " " + i)
        }
    }), p.cssHooks.marginRight = Ft(c.reliableMarginRight, function(e, t) {
        return t ? p.swap(e, {
            display: "inline-block"
        }, Bt, [e, "marginRight"]) : void 0
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + V[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Dt.test(e) || (p.cssHooks[e + t].set = Kt)
    }), p.fn.extend({
        css: function(e, t) {
            return J(this, function(e, t, n) {
                var r, i, s = {}, o = 0;
                if (p.isArray(t)) {
                    for (r = Ht(e), i = t.length; i > o; o++) s[t[o]] = p.css(e, t[o], !1, r);
                    return s
                }
                return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Jt(this, !0)
        },
        hide: function() {
            return Jt(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $(this) ? p(this).show() : p(this).hide()
            })
        }
    }), p.Tween = Yt, Yt.prototype = {
        constructor: Yt,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (p.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yt.propHooks[this.prop];
            return this.pos = t = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yt.propHooks._default.set(this), this
        }
    }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, p.fx = Yt.prototype.init, p.fx.step = {};
    var Zt, en, tn = /^(?:toggle|show|hide)$/,
        nn = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
        rn = /queueHooks$/,
        sn = [ln],
        on = {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = nn.exec(t),
                        s = i && i[3] || (p.cssNumber[e] ? "" : "px"),
                        o = (p.cssNumber[e] || "px" !== s && +r) && nn.exec(p.css(n.elem, e)),
                        u = 1,
                        a = 20;
                    if (o && o[3] !== s) {
                        s = s || o[3], i = i || [], o = +r || 1;
                        do u = u || ".5", o /= u, p.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && 1 !== u && --a)
                    }
                    return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };
    p.Animation = p.extend(hn, {
        tweener: function(e, t) {
            p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? sn.unshift(e) : sn.push(e)
        }
    }), p.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? p.extend({}, e) : {
            complete: n || !n && t || p.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !p.isFunction(t) && t
        };
        return r.duration = p.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            p.isFunction(r.old) && r.old.call(this), r.queue && p.dequeue(this, r.queue)
        }, r
    }, p.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter($).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = p.isEmptyObject(e),
                s = p.speed(t, n, r),
                o = function() {
                    var t = hn(this, p.extend({}, e), s);
                    (i || p._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    s = p.timers,
                    o = p._data(this);
                if (i) o[i] && o[i].stop && r(o[i]);
                else
                    for (i in o) o[i] && o[i].stop && rn.test(i) && r(o[i]);
                for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                (t || !n) && p.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = p._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = p.timers,
                    o = r ? r.length : 0;
                for (n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), p.each(["toggle", "show", "hide"], function(e, t) {
        var n = p.fn[t];
        p.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(an(t, !0), e, r, i)
        }
    }), p.each({
        slideDown: an("show"),
        slideUp: an("hide"),
        slideToggle: an("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        p.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), p.timers = [], p.fx.tick = function() {
        var e, t = p.timers,
            n = 0;
        for (Zt = p.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || p.fx.stop(), Zt = void 0
    }, p.fx.timer = function(e) {
        p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
    }, p.fx.interval = 13, p.fx.start = function() {
        en || (en = setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.stop = function() {
        clearInterval(en), en = null
    }, p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, p.fn.delay = function(e, t) {
        return e = p.fx ? p.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    },
    function() {
        var e, t, n, r, i = N.createElement("div");
        i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], n = N.createElement("select"), r = n.appendChild(N.createElement("option")), t = i.getElementsByTagName("input")[0], e.style.cssText = "top:1px", c.getSetAttribute = "t" !== i.className, c.style = /top/.test(e.getAttribute("style")), c.hrefNormalized = "/a" === e.getAttribute("href"), c.checkOn = !! t.value, c.optSelected = r.selected, c.enctype = !! N.createElement("form").enctype, n.disabled = !0, c.optDisabled = !r.disabled, t = N.createElement("input"), t.setAttribute("value", ""), c.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), c.radioValue = "t" === t.value, e = t = n = r = i = null
    }();
    var pn = /\r/g;
    p.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            if (arguments.length) return r = p.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, p(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : p.isArray(i) && (i = p.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            });
            if (i) return t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(pn, "") : null == n ? "" : n)
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t : p.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, o = s ? null : [], u = s ? i + 1 : r.length, a = 0 > i ? u : s ? i : 0; u > a; a++)
                        if (n = r[a], !(!n.selected && a !== i || (c.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && p.nodeName(n.parentNode, "optgroup"))) {
                            if (t = p(n).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        s = p.makeArray(t),
                        o = i.length;
                    while (o--)
                        if (r = i[o], p.inArray(p.valHooks.option.get(r), s) >= 0) try {
                            r.selected = n = !0
                        } catch (u) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(e, t) {
                return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) >= 0 : void 0
            }
        }, c.checkOn || (p.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var dn, vn, mn = p.expr.attrHandle,
        gn = /^(?:checked|selected)$/i,
        yn = c.getSetAttribute,
        bn = c.input;
    p.fn.extend({
        attr: function(e, t) {
            return J(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                p.removeAttr(this, e)
            })
        }
    }), p.extend({
        attr: function(e, t, n) {
            var r, i, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === j ? p.prop(e, t, n) : (1 === s && p.isXMLDoc(e) || (t = t.toLowerCase(), r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? vn : dn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = p.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void p.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                s = t && t.match(M);
            if (s && 1 === e.nodeType)
                while (n = s[i++]) r = p.propFix[n] || n, p.expr.match.bool.test(n) ? bn && yn || !gn.test(n) ? e[r] = !1 : e[p.camelCase("default-" + n)] = e[r] = !1 : p.attr(e, n, ""), e.removeAttribute(yn ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!c.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), vn = {
        set: function(e, t, n) {
            return t === !1 ? p.removeAttr(e, n) : bn && yn || !gn.test(n) ? e.setAttribute(!yn && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mn[t] || p.find.attr;
        mn[t] = bn && yn || !gn.test(t) ? function(e, t, r) {
            var i, s;
            return r || (s = mn[t], mn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, mn[t] = s), i
        } : function(e, t, n) {
            return n ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), bn && yn || (p.attrHooks.value = {
        set: function(e, t, n) {
            return p.nodeName(e, "input") ? void(e.defaultValue = t) : dn && dn.set(e, t, n)
        }
    }), yn || (dn = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, mn.id = mn.name = mn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, p.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: dn.set
    }, p.attrHooks.contenteditable = {
        set: function(e, t, n) {
            dn.set(e, "" === t ? !1 : t, n)
        }
    }, p.each(["width", "height"], function(e, t) {
        p.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), c.style || (p.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var wn = /^(?:input|select|textarea|button|object)$/i,
        En = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return J(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = p.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), p.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, s, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !p.isXMLDoc(e), s && (t = p.propFix[t] || t, i = p.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wn.test(e.nodeName) || En.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), c.hrefNormalized || p.each(["href", "src"], function(e, t) {
        p.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), c.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        p.propFix[this.toLowerCase()] = this
    }), c.enctype || (p.propFix.enctype = "encoding");
    var Sn = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).addClass(e.call(this, t, this.className))
            });
            if (f)
                for (t = (e || "").match(M) || []; a > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Sn, " ") : " ")) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = p.trim(r), n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = 0 === arguments.length || "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).removeClass(e.call(this, t, this.className))
            });
            if (f)
                for (t = (e || "").match(M) || []; a > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Sn, " ") : "")) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        o = e ? p.trim(r) : "", n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ? function(n) {
                p(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n) {
                    var t, r = 0,
                        i = p(this),
                        s = e.match(M) || [];
                    while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else(n === j || "boolean" === n) && (this.className && p._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : p._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Sn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        p.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var xn = p.now(),
        Tn = /\?/,
        Nn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = p.trim(t + "");
        return i && !p.trim(i.replace(Nn, function(e, t, i, s) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !s - !i, "")
        })) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
    }, p.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), n
    };
    var Cn, kn, Ln = /#.*$/,
        An = /([?&])_=[^&]*/,
        On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        _n = /^(?:GET|HEAD)$/,
        Dn = /^\/\//,
        Pn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hn = {}, Bn = {}, jn = "*/".concat("*");
    try {
        kn = location.href
    } catch (Fn) {
        kn = N.createElement("a"), kn.href = "", kn = kn.href
    }
    Cn = Pn.exec(kn.toLowerCase()) || [], p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kn,
            type: "GET",
            isLocal: Mn.test(Cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rn(Rn(e, p.ajaxSettings), t) : Rn(p.ajaxSettings, e)
        },
        ajaxPrefilter: In(Hn),
        ajaxTransport: In(Bn),
        ajax: function(e, t) {
            function x(e, t, n, r) {
                var f, g, y, w, S, x = t;
                2 !== b && (b = 2, o && clearTimeout(o), a = void 0, s = r || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && 300 > e || 304 === e, n && (w = Un(l, E, n)), w = zn(l, w, E, f), f ? (l.ifModified && (S = E.getResponseHeader("Last-Modified"), S && (p.lastModified[i] = S), S = E.getResponseHeader("etag"), S && (p.etag[i] = S)), 204 === e || "HEAD" === l.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, g = w.data, y = w.error, f = !y)) : (y = x, (e || !x) && (x = "error", 0 > e && (e = 0))), E.status = e, E.statusText = (t || x) + "", f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]), E.statusCode(m), m = void 0, u && h.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]), v.fireWith(c, [E, x]), u && (h.trigger("ajaxComplete", [E, l]), --p.active || p.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, i, s, o, u, a, f, l = p.ajaxSetup({}, t),
                c = l.context || l,
                h = l.context && (c.nodeType || c.jquery) ? p(c) : p.event,
                d = p.Deferred(),
                v = p.Callbacks("once memory"),
                m = l.statusCode || {}, g = {}, y = {}, b = 0,
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!f) {
                                f = {};
                                while (t = On.exec(s)) f[t[1].toLowerCase()] = t[2]
                            }
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (l.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else E.always(e[E.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return a && a.abort(t), x(0, t), this
                    }
                };
            if (d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, l.url = ((e || l.url || kn) + "").replace(Ln, "").replace(Dn, Cn[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = p.trim(l.dataType || "*").toLowerCase().match(M) || [""], null == l.crossDomain && (n = Pn.exec(l.url.toLowerCase()), l.crossDomain = !(!n || n[1] === Cn[1] && n[2] === Cn[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = p.param(l.data, l.traditional)), qn(Hn, l, t, E), 2 === b) return E;
            u = l.global, u && 0 === p.active++ && p.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !_n.test(l.type), i = l.url, l.hasContent || (l.data && (i = l.url += (Tn.test(i) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = An.test(i) ? i.replace(An, "$1_=" + xn++) : i + (Tn.test(i) ? "&" : "?") + "_=" + xn++)), l.ifModified && (p.lastModified[i] && E.setRequestHeader("If-Modified-Since", p.lastModified[i]), p.etag[i] && E.setRequestHeader("If-None-Match", p.etag[i])), (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", l.contentType), E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + jn + "; q=0.01" : "") : l.accepts["*"]);
            for (r in l.headers) E.setRequestHeader(r, l.headers[r]);
            if (!l.beforeSend || l.beforeSend.call(c, E, l) !== !1 && 2 !== b) {
                w = "abort";
                for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) E[r](l[r]);
                if (a = qn(Bn, l, t, E)) {
                    E.readyState = 1, u && h.trigger("ajaxSend", [E, l]), l.async && l.timeout > 0 && (o = setTimeout(function() {
                        E.abort("timeout")
                    }, l.timeout));
                    try {
                        b = 1, a.send(g, x)
                    } catch (S) {
                        if (!(2 > b)) throw S;
                        x(-1, S)
                    }
                } else x(-1, "No Transport");
                return E
            }
            return E.abort()
        },
        getJSON: function(e, t, n) {
            return p.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return p.get(e, void 0, t, "script")
        }
    }), p.each(["get", "post"], function(e, t) {
        p[t] = function(e, n, r, i) {
            return p.isFunction(n) && (i = i || r, r = n, n = void 0), p.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, p.fn.extend({
        wrapAll: function(e) {
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(p.isFunction(e) ? function(t) {
                p(this).wrapInner(e.call(this, t))
            } : function() {
                var t = p(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each(function(n) {
                p(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }), p.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && "none" === (e.style && e.style.display || p.css(e, "display"))
    }, p.expr.filters.visible = function(e) {
        return !p.expr.filters.hidden(e)
    };
    var Wn = /%20/g,
        Xn = /\[\]$/,
        Vn = /\r?\n/g,
        $n = /^(?:submit|button|image|reset|file)$/i,
        Jn = /^(?:input|select|textarea|keygen)/i;
    p.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = p.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Kn(n, e[n], t, i);
        return r.join("&").replace(Wn, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && Jn.test(this.nodeName) && !$n.test(e) && (this.checked || !K.test(e))
            }).map(function(e, t) {
                var n = p(this).val();
                return null == n ? null : p.isArray(n) ? p.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Vn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Vn, "\r\n")
                }
            }).get()
        }
    }), p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zn() || er()
    } : Zn;
    var Qn = 0,
        Gn = {}, Yn = p.ajaxSettings.xhr();
    e.ActiveXObject && p(e).on("unload", function() {
        for (var e in Gn) Gn[e](void 0, !0)
    }), c.cors = !! Yn && "withCredentials" in Yn, Yn = c.ajax = !! Yn, Yn && p.ajaxTransport(function(e) {
        if (!e.crossDomain || c.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, s = e.xhr(),
                        o = ++Qn;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && s.setRequestHeader(i, n[i] + "");
                    s.send(e.hasContent && e.data || null), t = function(n, i) {
                        var u, a, f;
                        if (t && (i || 4 === s.readyState))
                            if (delete Gn[o], t = void 0, s.onreadystatechange = p.noop, i) 4 !== s.readyState && s.abort();
                            else {
                                f = {}, u = s.status, "string" == typeof s.responseText && (f.text = s.responseText);
                                try {
                                    a = s.statusText
                                } catch (l) {
                                    a = ""
                                }
                                u || !e.isLocal || e.crossDomain ? 1223 === u && (u = 204) : u = f.text ? 200 : 404
                            }
                        f && r(u, a, f, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = Gn[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), p.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = N.head || p("head")[0] || N.documentElement;
            return {
                send: function(r, i) {
                    t = N.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tr = [],
        nr = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tr.pop() || p.expando + "_" + xn++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, s, o, u = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        return u || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Tn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || p.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
            o = arguments
        }, r.always(function() {
            e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), o && p.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), p.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || N;
        var r = E.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = p.buildFragment([e], t, i), i && i.length && p(i).remove(), p.merge([], r.childNodes))
    };
    var rr = p.fn.load;
    p.fn.load = function(e, t, n) {
        if ("string" != typeof e && rr) return rr.apply(this, arguments);
        var r, i, s, o = this,
            u = e.indexOf(" ");
        return u >= 0 && (r = e.slice(u, e.length), e = e.slice(0, u)), p.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), o.length > 0 && p.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, o.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, i || [e.responseText, t, e])
        }), this
    }, p.expr.filters.animated = function(e) {
        return p.grep(p.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    p.offset = {
        setOffset: function(e, t, n) {
            var r, i, s, o, u, a, f, l = p.css(e, "position"),
                c = p(e),
                h = {};
            "static" === l && (e.style.position = "relative"), u = c.offset(), s = p.css(e, "top"), a = p.css(e, "left"), f = ("absolute" === l || "fixed" === l) && p.inArray("auto", [s, a]) > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), p.isFunction(t) && (t = t.call(e, n, u)), null != t.top && (h.top = t.top - u.top + o), null != t.left && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
        }
    }, p.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                p.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                }, i = this[0],
                s = i && i.ownerDocument;
            if (s) return t = s.documentElement, p.contains(t, i) ? (typeof i.getBoundingClientRect !== j && (r = i.getBoundingClientRect()), n = sr(s), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                return "fixed" === p.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - p.css(r, "marginTop", !0),
                    left: t.left - n.left - p.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || ir;
                while (e && !p.nodeName(e, "html") && "static" === p.css(e, "position")) e = e.offsetParent;
                return e || ir
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function(r) {
            return J(this, function(e, r, i) {
                var s = sr(e);
                return void 0 === i ? s ? t in s ? s[t] : s.document.documentElement[r] : e[r] : void(s ? s.scrollTo(n ? p(s).scrollLeft() : i, n ? i : p(s).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), p.each(["top", "left"], function(e, t) {
        p.cssHooks[t] = Ft(c.pixelPosition, function(e, n) {
            return n ? (n = Bt(e, t), Pt.test(n) ? p(e).position()[t] + "px" : n) : void 0
        })
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            p.fn[r] = function(r, i) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return J(this, function(t, n, r) {
                    var i;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? p.css(t, n, o) : p.style(t, n, r, o)
                }, t, s ? r : void 0, s, null)
            }
        })
    }), p.fn.size = function() {
        return this.length
    }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return p
    });
    var or = e.jQuery,
        ur = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = ur), t && e.jQuery === p && (e.jQuery = or), p
    }, typeof t === j && (e.jQuery = e.$ = p), p
}),
function(e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !! o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0,
        r = /^ui-id-\d+$/;
    e.ui = e.ui || {};
    if (e.ui.version) return;
    e.extend(e.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        _focus: e.fn.focus,
        focus: function(t, n) {
            return typeof t == "number" ? this.each(function() {
                var r = this;
                setTimeout(function() {
                    e(r).focus(), n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]),
                    i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0) return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                r.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex"),
                r = isNaN(n);
            return (r || n >= 0) && i(t, !r)
        }
    }), e(function() {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight, e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
        function u(t, n, r, s) {
            return e.each(i, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            s = r.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + r] = function(n) {
            return n === t ? o["inner" + r].call(this) : this.each(function() {
                e(this).css(s, u(this, n) + "px")
            })
        }, e.fn["outer" + r] = function(t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)),
    function() {
        var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = parseFloat(t[1], 10) === 6
    }(), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
            },
            call: function(e, t, n) {
                var r, i = e.plugins[t];
                if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
                for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        contains: e.contains,
        hasScroll: function(t, n) {
            if (e(t).css("overflow") === "hidden") return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
        },
        isOverAxis: function(e, t, n) {
            return e > t && e < t + n
        },
        isOver: function(t, n, r, i, s, o) {
            return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
        }
    })
}(jQuery),
function(e, t) {
    var n = 0,
        r = Array.prototype.slice,
        i = e.cleanData;
    e.cleanData = function(t) {
        for (var n = 0, r;
            (r = t[n]) != null; n++) try {
            e(r).triggerHandler("remove")
        } catch (s) {}
        i(t)
    }, e.widget = function(t, n, r) {
        var i, s, o, u, a = t.split(".")[0];
        t = t.split(".")[1], i = a + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }, e[a] = e[a] || {}, s = e[a][t], o = e[a][t] = function(e, t) {
            if (!this._createWidget) return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, i) {
            e.isFunction(i) && (r[t] = function() {
                var e = function() {
                    return n.prototype[t].apply(this, arguments)
                }, r = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t = this._super,
                        n = this._superApply,
                        s;
                    return this._super = e, this._superApply = r, s = i.apply(this, arguments), this._super = t, this._superApply = n, s
                }
            }())
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix : t
        }, r, {
            constructor: o,
            namespace: a,
            widgetName: t,
            widgetBaseClass: i,
            widgetFullName: i
        }), s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
    }, e.widget.extend = function(n) {
        var i = r.call(arguments, 1),
            s = 0,
            o = i.length,
            u, a;
        for (; s < o; s++)
            for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }, e.widget.bridge = function(n, i) {
        var s = i.prototype.widgetFullName || n;
        e.fn[n] = function(o) {
            var u = typeof o == "string",
                a = r.call(arguments, 1),
                f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function() {
                var r, i = e.data(this, s);
                if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
            }) : this.each(function() {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
            }), f
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, r) {
            r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetName, this), e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === r && this.destroy()
                }
            }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, r) {
            var i = n,
                s, o, u;
            if (arguments.length === 0) return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {}, s = n.split("."), n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                    n = s.pop();
                    if (r === t) return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (r === t) return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, n, r) {
            var i, s = this;
            typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                function u() {
                    if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
                    return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                }
                typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^(\w+)\s*(.*)$/),
                    f = a[1] + s.eventNamespace,
                    l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s)
                for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {}, typeof i == "number" && (i = {
                duration: i
            }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && (e.effects.effect[u] || e.uiBackCompat !== !1 && e.effects[u]) ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    })
}(jQuery),
function(e, t) {
    var n = !1;
    e(document).mouseup(function(e) {
        n = !1
    }), e.widget("ui.mouse", {
        version: "1.9.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (n) return;
            this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
            var r = this,
                i = t.which === 1,
                s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t)) return !0;
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted) return t.preventDefault(), !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                return r._mouseMove(e)
            }, this._mouseUpDelegate = function(e) {
                return r._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
        },
        _mouseMove: function(t) {
            return !e.ui.ie || document.documentMode >= 9 || !! t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function(e) {
            return this.mouseDelayMet
        },
        _mouseStart: function(e) {},
        _mouseDrag: function(e) {},
        _mouseStop: function(e) {},
        _mouseCapture: function(e) {
            return !0
        }
    })
}(jQuery),
function(e, t) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, n) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var n = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
            var r = this.element[0],
                i = !1;
            while (r && (r = r.parentNode)) r == document && (i = !0);
            if (!i && this.options.helper === "original") return !1;
            if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                var s = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    s._trigger("stop", t) !== !1 && s._clear()
                })
            } else this._trigger("stop", t) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t.target && (n = !0)
            }), n
        },
        _createHelper: function(t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return r.parents("body").length || r.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo), r[0] != this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.ui.ie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [t.containment == "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t.containment == "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (t.containment == "document" ? 0 : e(window).scrollLeft()) + e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t.containment == "document" ? 0 : e(window).scrollTop()) + (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
                var n = e(t.containment),
                    r = n[0];
                if (!r) return;
                var i = n.offset(),
                    s = e(r).css("overflow") != "hidden";
                this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (s ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
            } else t.containment.constructor == Array && (this.containment = t.containment)
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var r = t == "absolute" ? 1 : -1,
                i = this.options,
                s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName),
                s = t.pageX,
                o = t.pageY;
            if (this.originalPosition) {
                var u;
                if (this.containment) {
                    if (this.relative_container) {
                        var a = this.relative_container.offset();
                        u = [this.containment[0] + a.left, this.containment[1] + a.top, this.containment[2] + a.left, this.containment[3] + a.top]
                    } else u = this.containment;
                    t.pageX - this.offset.click.left < u[0] && (s = u[0] + this.offset.click.left), t.pageY - this.offset.click.top < u[1] && (o = u[1] + this.offset.click.top), t.pageX - this.offset.click.left > u[2] && (s = u[2] + this.offset.click.left), t.pageY - this.offset.click.top > u[3] && (o = u[3] + this.offset.click.top)
                }
                if (n.grid) {
                    var f = n.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
                    o = u ? f - this.offset.click.top < u[1] || f - this.offset.click.top > u[3] ? f - this.offset.click.top < u[1] ? f + n.grid[1] : f - n.grid[1] : f : f;
                    var l = n.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
                    s = u ? l - this.offset.click.left < u[0] || l - this.offset.click.left > u[2] ? l - this.offset.click.left < u[0] ? l + n.grid[0] : l - n.grid[0] : l : l
                }
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(t, n, r) {
            return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function(e) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = e.extend({}, n, {
                    item: r.element
                });
            r.sortables = [], e(i.connectToSortable).each(function() {
                var n = e.data(this, "sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n.refreshPositions(), n._trigger("activate", t, s))
            })
        },
        stop: function(t, n) {
            var r = e(this).data("draggable"),
                i = e.extend({}, n, {
                    item: r.element
                });
            e.each(r.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function(t, n) {
            var r = e(this).data("draggable"),
                i = this,
                s = function(t) {
                    var n = this.offset.click.top,
                        r = this.offset.click.left,
                        i = this.positionAbs.top,
                        s = this.positionAbs.left,
                        o = t.height,
                        u = t.width,
                        a = t.top,
                        f = t.left;
                    return e.ui.isOver(i + n, s + r, a, f, o, u)
                };
            e.each(r.sortables, function(s) {
                var o = !1,
                    u = this;
                this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, e.each(r.sortables, function() {
                    return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this != u && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(u.instance.element[0], this.instance.element[0]) && (o = !1), o
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function(t, n) {
            var r = e("body"),
                i = e(this).data("draggable").options;
            r.css("cursor") && (i._cursor = r.css("cursor")), r.css("cursor", i.cursor)
        },
        stop: function(t, n) {
            var r = e(this).data("draggable").options;
            r._cursor && e("body").css("cursor", r._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, n) {
            var r = e(n.helper),
                i = e(this).data("draggable").options;
            r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity)
        },
        stop: function(t, n) {
            var r = e(this).data("draggable").options;
            r._opacity && e(n.helper).css("opacity", r._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function(t, n) {
            var r = e(this).data("draggable");
            r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" && (r.overflowOffset = r.scrollParent.offset())
        },
        drag: function(t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = !1;
            if (r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML") {
                if (!i.axis || i.axis != "x") r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop - i.scrollSpeed);
                if (!i.axis || i.axis != "y") r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft - i.scrollSpeed)
            } else {
                if (!i.axis || i.axis != "x") t.pageY - e(document).scrollTop() < i.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed));
                if (!i.axis || i.axis != "y") t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))
            }
            s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function(t, n) {
            var r = e(this).data("draggable"),
                i = r.options;
            r.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
                var t = e(this),
                    n = t.offset();
                this != r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function(t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = i.snapTolerance,
                o = n.offset.left,
                u = o + r.helperProportions.width,
                a = n.offset.top,
                f = a + r.helperProportions.height;
            for (var l = r.snapElements.length - 1; l >= 0; l--) {
                var c = r.snapElements[l].left,
                    h = c + r.snapElements[l].width,
                    p = r.snapElements[l].top,
                    d = p + r.snapElements[l].height;
                if (!(c - s < o && o < h + s && p - s < a && a < d + s || c - s < o && o < h + s && p - s < f && f < d + s || c - s < u && u < h + s && p - s < a && a < d + s || c - s < u && u < h + s && p - s < f && f < d + s)) {
                    r.snapElements[l].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                        snapItem: r.snapElements[l].item
                    })), r.snapElements[l].snapping = !1;
                    continue
                }
                if (i.snapMode != "inner") {
                    var v = Math.abs(p - f) <= s,
                        m = Math.abs(d - a) <= s,
                        g = Math.abs(c - u) <= s,
                        y = Math.abs(h - o) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
                        top: d,
                        left: 0
                    }).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c - r.helperProportions.width
                    }).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left - r.margins.left)
                }
                var b = v || m || g || y;
                if (i.snapMode != "outer") {
                    var v = Math.abs(p - a) <= s,
                        m = Math.abs(d - f) <= s,
                        g = Math.abs(c - o) <= s,
                        y = Math.abs(h - u) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p,
                        left: 0
                    }).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
                        top: d - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c
                    }).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h - r.helperProportions.width
                    }).left - r.margins.left)
                }!r.snapElements[l].snapping && (v || m || g || y || b) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[l].item
                })), r.snapElements[l].snapping = v || m || g || y || b
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function(t, n) {
            var r = e(this).data("draggable").options,
                i = e.makeArray(e(r.stack)).sort(function(t, n) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                });
            if (!i.length) return;
            var s = parseInt(i[0].style.zIndex) || 0;
            e(i).each(function(e) {
                this.style.zIndex = s + e
            }), this[0].style.zIndex = s + i.length
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, n) {
            var r = e(n.helper),
                i = e(this).data("draggable").options;
            r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex)
        },
        stop: function(t, n) {
            var r = e(this).data("draggable").options;
            r._zIndex && e(n.helper).css("zIndex", r._zIndex)
        }
    })
}(jQuery),
function(e, t) {
    var n = 5;
    e.widget("ui.slider", e.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var t, r, i = this.options,
                s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                u = [];
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (i.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), i.range && (i.range === !0 && (i.values || (i.values = [this._valueMin(), this._valueMin()]), i.values.length && i.values.length !== 2 && (i.values = [i.values[0], i.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (i.range === "min" || i.range === "max" ? " ui-slider-range-" + i.range : ""))), r = i.values && i.values.length || 1;
            for (t = s.length; t < r; t++) u.push(o);
            this.handles = s.add(e(u.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(e) {
                e.preventDefault()
            }).mouseenter(function() {
                i.disabled || e(this).addClass("ui-state-hover")
            }).mouseleave(function() {
                e(this).removeClass("ui-state-hover")
            }).focus(function() {
                i.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
            }).blur(function() {
                e(this).removeClass("ui-state-focus")
            }), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            }), this._on(this.handles, {
                keydown: function(t) {
                    var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            t.preventDefault();
                            if (!this._keySliding) {
                                this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u);
                                if (r === !1) return
                            }
                    }
                    o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                            s = this._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            s = this._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            s = this._trimAlignValue(i + o);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            s = this._trimAlignValue(i - o)
                    }
                    this._slide(t, u, s)
                },
                keyup: function(t) {
                    var n = e(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
                }
            }), this._refreshValue(), this._animateOff = !1
        },
        _destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n, r, i, s, o, u, a, f, l = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: t.pageX,
                y: t.pageY
            }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var n = Math.abs(r - l.values(t));
                i > n && (i = n, s = e(this), o = t)
            }), c.range === !0 && this.values(1) === c.min && (o += 1, s = e(this.handles[o])), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = f ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - a.left - s.width() / 2,
                top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, n, r, i, s;
            return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
        },
        _start: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function(e, t, n) {
            var r, i, s;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: i
            }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), s !== !1 && this.value(n))
        },
        _stop: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
            }
        },
        value: function(e) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(t, n) {
            var r, i, s;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
                return
            }
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            r = this.options.values, i = arguments[0];
            for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
            this._refreshValue()
        },
        _setOption: function(t, n) {
            var r, i = 0;
            e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
                case "disabled":
                    n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                    break;
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0, this._refreshValue();
                    for (r = 0; r < i; r += 1) this._change(null, r);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e), e
        },
        _values: function(e) {
            var t, n, r;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t), t;
            n = this.options.values.slice();
            for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
            return n
        },
        _trimAlignValue: function(e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                n = (e - this._valueMin()) % t,
                r = e - n;
            return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t, n, r, i, s, o = this.options.range,
                u = this.options,
                a = this,
                f = this._animateOff ? !1 : u.animate,
                l = {};
            this.options.values && this.options.values.length ? this.handles.each(function(r) {
                n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    left: n + "%"
                }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                    width: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                })) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    bottom: n + "%"
                }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                    height: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                }))), t = n
            }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                width: n + "%"
            }, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                height: n + "%"
            }, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }))
        }
    })
}(jQuery), this.Handlebars = {},
function(e) {
    e.VERSION = "1.0.rc.1", e.helpers = {}, e.partials = {}, e.registerHelper = function(e, t, n) {
        n && (t.not = n), this.helpers[e] = t
    }, e.registerPartial = function(e, t) {
        this.partials[e] = t
    }, e.registerHelper("helperMissing", function(e) {
        if (arguments.length === 2) return undefined;
        throw new Error("Could not find property '" + e + "'")
    });
    var t = Object.prototype.toString,
        n = "[object Function]";
    e.registerHelper("blockHelperMissing", function(r, i) {
        var s = i.inverse || function() {}, o = i.fn,
            u = "",
            a = t.call(r);
        return a === n && (r = r.call(this)), r === !0 ? o(this) : r === !1 || r == null ? s(this) : a === "[object Array]" ? r.length > 0 ? e.helpers.each(r, i) : s(this) : o(r)
    }), e.K = function() {}, e.createFrame = Object.create || function(t) {
        e.K.prototype = t;
        var n = new e.K;
        return e.K.prototype = null, n
    }, e.registerHelper("each", function(t, n) {
        var r = n.fn,
            i = n.inverse,
            s = "",
            o;
        n.data && (o = e.createFrame(n.data));
        if (t && t.length > 0)
            for (var u = 0, a = t.length; u < a; u++) o && (o.index = u), s += r(t[u], {
                data: o
            });
        else s = i(this);
        return s
    }), e.registerHelper("if", function(r, i) {
        var s = t.call(r);
        return s === n && (r = r.call(this)), !r || e.Utils.isEmpty(r) ? i.inverse(this) : i.fn(this)
    }), e.registerHelper("unless", function(t, n) {
        var r = n.fn,
            i = n.inverse;
        return n.fn = i, n.inverse = r, e.helpers["if"].call(this, t, n)
    }), e.registerHelper("with", function(e, t) {
        return t.fn(e)
    }), e.registerHelper("log", function(t) {
        e.log(t)
    })
}(this.Handlebars);
var handlebars = function() {
    function n() {
        this.yy = {}
    }
    var e = {
        trace: function() {},
        yy: {},
        symbols_: {
            error: 2,
            root: 3,
            program: 4,
            EOF: 5,
            statements: 6,
            simpleInverse: 7,
            statement: 8,
            openInverse: 9,
            closeBlock: 10,
            openBlock: 11,
            mustache: 12,
            partial: 13,
            CONTENT: 14,
            COMMENT: 15,
            OPEN_BLOCK: 16,
            inMustache: 17,
            CLOSE: 18,
            OPEN_INVERSE: 19,
            OPEN_ENDBLOCK: 20,
            path: 21,
            OPEN: 22,
            OPEN_UNESCAPED: 23,
            OPEN_PARTIAL: 24,
            params: 25,
            hash: 26,
            DATA: 27,
            param: 28,
            STRING: 29,
            INTEGER: 30,
            BOOLEAN: 31,
            hashSegments: 32,
            hashSegment: 33,
            ID: 34,
            EQUALS: 35,
            pathSegments: 36,
            SEP: 37,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            5: "EOF",
            14: "CONTENT",
            15: "COMMENT",
            16: "OPEN_BLOCK",
            18: "CLOSE",
            19: "OPEN_INVERSE",
            20: "OPEN_ENDBLOCK",
            22: "OPEN",
            23: "OPEN_UNESCAPED",
            24: "OPEN_PARTIAL",
            27: "DATA",
            29: "STRING",
            30: "INTEGER",
            31: "BOOLEAN",
            34: "ID",
            35: "EQUALS",
            37: "SEP"
        },
        productions_: [0, [3, 2],
            [4, 3],
            [4, 1],
            [4, 0],
            [6, 1],
            [6, 2],
            [8, 3],
            [8, 3],
            [8, 1],
            [8, 1],
            [8, 1],
            [8, 1],
            [11, 3],
            [9, 3],
            [10, 3],
            [12, 3],
            [12, 3],
            [13, 3],
            [13, 4],
            [7, 2],
            [17, 3],
            [17, 2],
            [17, 2],
            [17, 1],
            [17, 1],
            [25, 2],
            [25, 1],
            [28, 1],
            [28, 1],
            [28, 1],
            [28, 1],
            [28, 1],
            [26, 1],
            [32, 2],
            [32, 1],
            [33, 3],
            [33, 3],
            [33, 3],
            [33, 3],
            [33, 3],
            [21, 1],
            [36, 3],
            [36, 1]
        ],
        performAction: function(t, n, r, i, s, o, u) {
            var a = o.length - 1;
            switch (s) {
                case 1:
                    return o[a - 1];
                case 2:
                    this.$ = new i.ProgramNode(o[a - 2], o[a]);
                    break;
                case 3:
                    this.$ = new i.ProgramNode(o[a]);
                    break;
                case 4:
                    this.$ = new i.ProgramNode([]);
                    break;
                case 5:
                    this.$ = [o[a]];
                    break;
                case 6:
                    o[a - 1].push(o[a]), this.$ = o[a - 1];
                    break;
                case 7:
                    this.$ = new i.BlockNode(o[a - 2], o[a - 1].inverse, o[a - 1], o[a]);
                    break;
                case 8:
                    this.$ = new i.BlockNode(o[a - 2], o[a - 1], o[a - 1].inverse, o[a]);
                    break;
                case 9:
                    this.$ = o[a];
                    break;
                case 10:
                    this.$ = o[a];
                    break;
                case 11:
                    this.$ = new i.ContentNode(o[a]);
                    break;
                case 12:
                    this.$ = new i.CommentNode(o[a]);
                    break;
                case 13:
                    this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                    break;
                case 14:
                    this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                    break;
                case 15:
                    this.$ = o[a - 1];
                    break;
                case 16:
                    this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                    break;
                case 17:
                    this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], !0);
                    break;
                case 18:
                    this.$ = new i.PartialNode(o[a - 1]);
                    break;
                case 19:
                    this.$ = new i.PartialNode(o[a - 2], o[a - 1]);
                    break;
                case 20:
                    break;
                case 21:
                    this.$ = [
                        [o[a - 2]].concat(o[a - 1]), o[a]
                    ];
                    break;
                case 22:
                    this.$ = [
                        [o[a - 1]].concat(o[a]), null
                    ];
                    break;
                case 23:
                    this.$ = [
                        [o[a - 1]], o[a]
                    ];
                    break;
                case 24:
                    this.$ = [
                        [o[a]], null
                    ];
                    break;
                case 25:
                    this.$ = [
                        [new i.DataNode(o[a])], null
                    ];
                    break;
                case 26:
                    o[a - 1].push(o[a]), this.$ = o[a - 1];
                    break;
                case 27:
                    this.$ = [o[a]];
                    break;
                case 28:
                    this.$ = o[a];
                    break;
                case 29:
                    this.$ = new i.StringNode(o[a]);
                    break;
                case 30:
                    this.$ = new i.IntegerNode(o[a]);
                    break;
                case 31:
                    this.$ = new i.BooleanNode(o[a]);
                    break;
                case 32:
                    this.$ = new i.DataNode(o[a]);
                    break;
                case 33:
                    this.$ = new i.HashNode(o[a]);
                    break;
                case 34:
                    o[a - 1].push(o[a]), this.$ = o[a - 1];
                    break;
                case 35:
                    this.$ = [o[a]];
                    break;
                case 36:
                    this.$ = [o[a - 2], o[a]];
                    break;
                case 37:
                    this.$ = [o[a - 2], new i.StringNode(o[a])];
                    break;
                case 38:
                    this.$ = [o[a - 2], new i.IntegerNode(o[a])];
                    break;
                case 39:
                    this.$ = [o[a - 2], new i.BooleanNode(o[a])];
                    break;
                case 40:
                    this.$ = [o[a - 2], new i.DataNode(o[a])];
                    break;
                case 41:
                    this.$ = new i.IdNode(o[a]);
                    break;
                case 42:
                    o[a - 2].push(o[a]), this.$ = o[a - 2];
                    break;
                case 43:
                    this.$ = [o[a]]
            }
        },
        table: [{
            3: 1,
            4: 2,
            5: [2, 4],
            6: 3,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 11],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {
            1: [3]
        }, {
            5: [1, 16]
        }, {
            5: [2, 3],
            7: 17,
            8: 18,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 19],
            20: [2, 3],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {
            5: [2, 5],
            14: [2, 5],
            15: [2, 5],
            16: [2, 5],
            19: [2, 5],
            20: [2, 5],
            22: [2, 5],
            23: [2, 5],
            24: [2, 5]
        }, {
            4: 20,
            6: 3,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 11],
            20: [2, 4],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {
            4: 21,
            6: 3,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 11],
            20: [2, 4],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {
            5: [2, 9],
            14: [2, 9],
            15: [2, 9],
            16: [2, 9],
            19: [2, 9],
            20: [2, 9],
            22: [2, 9],
            23: [2, 9],
            24: [2, 9]
        }, {
            5: [2, 10],
            14: [2, 10],
            15: [2, 10],
            16: [2, 10],
            19: [2, 10],
            20: [2, 10],
            22: [2, 10],
            23: [2, 10],
            24: [2, 10]
        }, {
            5: [2, 11],
            14: [2, 11],
            15: [2, 11],
            16: [2, 11],
            19: [2, 11],
            20: [2, 11],
            22: [2, 11],
            23: [2, 11],
            24: [2, 11]
        }, {
            5: [2, 12],
            14: [2, 12],
            15: [2, 12],
            16: [2, 12],
            19: [2, 12],
            20: [2, 12],
            22: [2, 12],
            23: [2, 12],
            24: [2, 12]
        }, {
            17: 22,
            21: 23,
            27: [1, 24],
            34: [1, 26],
            36: 25
        }, {
            17: 27,
            21: 23,
            27: [1, 24],
            34: [1, 26],
            36: 25
        }, {
            17: 28,
            21: 23,
            27: [1, 24],
            34: [1, 26],
            36: 25
        }, {
            17: 29,
            21: 23,
            27: [1, 24],
            34: [1, 26],
            36: 25
        }, {
            21: 30,
            34: [1, 26],
            36: 25
        }, {
            1: [2, 1]
        }, {
            6: 31,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 11],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {
            5: [2, 6],
            14: [2, 6],
            15: [2, 6],
            16: [2, 6],
            19: [2, 6],
            20: [2, 6],
            22: [2, 6],
            23: [2, 6],
            24: [2, 6]
        }, {
            17: 22,
            18: [1, 32],
            21: 23,
            27: [1, 24],
            34: [1, 26],
            36: 25
        }, {
            10: 33,
            20: [1, 34]
        }, {
            10: 35,
            20: [1, 34]
        }, {
            18: [1, 36]
        }, {
            18: [2, 24],
            21: 41,
            25: 37,
            26: 38,
            27: [1, 45],
            28: 39,
            29: [1, 42],
            30: [1, 43],
            31: [1, 44],
            32: 40,
            33: 46,
            34: [1, 47],
            36: 25
        }, {
            18: [2, 25]
        }, {
            18: [2, 41],
            27: [2, 41],
            29: [2, 41],
            30: [2, 41],
            31: [2, 41],
            34: [2, 41],
            37: [1, 48]
        }, {
            18: [2, 43],
            27: [2, 43],
            29: [2, 43],
            30: [2, 43],
            31: [2, 43],
            34: [2, 43],
            37: [2, 43]
        }, {
            18: [1, 49]
        }, {
            18: [1, 50]
        }, {
            18: [1, 51]
        }, {
            18: [1, 52],
            21: 53,
            34: [1, 26],
            36: 25
        }, {
            5: [2, 2],
            8: 18,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 11],
            20: [2, 2],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {
            14: [2, 20],
            15: [2, 20],
            16: [2, 20],
            19: [2, 20],
            22: [2, 20],
            23: [2, 20],
            24: [2, 20]
        }, {
            5: [2, 7],
            14: [2, 7],
            15: [2, 7],
            16: [2, 7],
            19: [2, 7],
            20: [2, 7],
            22: [2, 7],
            23: [2, 7],
            24: [2, 7]
        }, {
            21: 54,
            34: [1, 26],
            36: 25
        }, {
            5: [2, 8],
            14: [2, 8],
            15: [2, 8],
            16: [2, 8],
            19: [2, 8],
            20: [2, 8],
            22: [2, 8],
            23: [2, 8],
            24: [2, 8]
        }, {
            14: [2, 14],
            15: [2, 14],
            16: [2, 14],
            19: [2, 14],
            20: [2, 14],
            22: [2, 14],
            23: [2, 14],
            24: [2, 14]
        }, {
            18: [2, 22],
            21: 41,
            26: 55,
            27: [1, 45],
            28: 56,
            29: [1, 42],
            30: [1, 43],
            31: [1, 44],
            32: 40,
            33: 46,
            34: [1, 47],
            36: 25
        }, {
            18: [2, 23]
        }, {
            18: [2, 27],
            27: [2, 27],
            29: [2, 27],
            30: [2, 27],
            31: [2, 27],
            34: [2, 27]
        }, {
            18: [2, 33],
            33: 57,
            34: [1, 58]
        }, {
            18: [2, 28],
            27: [2, 28],
            29: [2, 28],
            30: [2, 28],
            31: [2, 28],
            34: [2, 28]
        }, {
            18: [2, 29],
            27: [2, 29],
            29: [2, 29],
            30: [2, 29],
            31: [2, 29],
            34: [2, 29]
        }, {
            18: [2, 30],
            27: [2, 30],
            29: [2, 30],
            30: [2, 30],
            31: [2, 30],
            34: [2, 30]
        }, {
            18: [2, 31],
            27: [2, 31],
            29: [2, 31],
            30: [2, 31],
            31: [2, 31],
            34: [2, 31]
        }, {
            18: [2, 32],
            27: [2, 32],
            29: [2, 32],
            30: [2, 32],
            31: [2, 32],
            34: [2, 32]
        }, {
            18: [2, 35],
            34: [2, 35]
        }, {
            18: [2, 43],
            27: [2, 43],
            29: [2, 43],
            30: [2, 43],
            31: [2, 43],
            34: [2, 43],
            35: [1, 59],
            37: [2, 43]
        }, {
            34: [1, 60]
        }, {
            14: [2, 13],
            15: [2, 13],
            16: [2, 13],
            19: [2, 13],
            20: [2, 13],
            22: [2, 13],
            23: [2, 13],
            24: [2, 13]
        }, {
            5: [2, 16],
            14: [2, 16],
            15: [2, 16],
            16: [2, 16],
            19: [2, 16],
            20: [2, 16],
            22: [2, 16],
            23: [2, 16],
            24: [2, 16]
        }, {
            5: [2, 17],
            14: [2, 17],
            15: [2, 17],
            16: [2, 17],
            19: [2, 17],
            20: [2, 17],
            22: [2, 17],
            23: [2, 17],
            24: [2, 17]
        }, {
            5: [2, 18],
            14: [2, 18],
            15: [2, 18],
            16: [2, 18],
            19: [2, 18],
            20: [2, 18],
            22: [2, 18],
            23: [2, 18],
            24: [2, 18]
        }, {
            18: [1, 61]
        }, {
            18: [1, 62]
        }, {
            18: [2, 21]
        }, {
            18: [2, 26],
            27: [2, 26],
            29: [2, 26],
            30: [2, 26],
            31: [2, 26],
            34: [2, 26]
        }, {
            18: [2, 34],
            34: [2, 34]
        }, {
            35: [1, 59]
        }, {
            21: 63,
            27: [1, 67],
            29: [1, 64],
            30: [1, 65],
            31: [1, 66],
            34: [1, 26],
            36: 25
        }, {
            18: [2, 42],
            27: [2, 42],
            29: [2, 42],
            30: [2, 42],
            31: [2, 42],
            34: [2, 42],
            37: [2, 42]
        }, {
            5: [2, 19],
            14: [2, 19],
            15: [2, 19],
            16: [2, 19],
            19: [2, 19],
            20: [2, 19],
            22: [2, 19],
            23: [2, 19],
            24: [2, 19]
        }, {
            5: [2, 15],
            14: [2, 15],
            15: [2, 15],
            16: [2, 15],
            19: [2, 15],
            20: [2, 15],
            22: [2, 15],
            23: [2, 15],
            24: [2, 15]
        }, {
            18: [2, 36],
            34: [2, 36]
        }, {
            18: [2, 37],
            34: [2, 37]
        }, {
            18: [2, 38],
            34: [2, 38]
        }, {
            18: [2, 39],
            34: [2, 39]
        }, {
            18: [2, 40],
            34: [2, 40]
        }],
        defaultActions: {
            16: [2, 1],
            24: [2, 25],
            38: [2, 23],
            55: [2, 21]
        },
        parseError: function(t, n) {
            throw new Error(t)
        },
        parse: function(t) {
            function v(e) {
                r.length = r.length - 2 * e, i.length = i.length - e, s.length = s.length - e
            }

            function m() {
                var e;
                return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e
            }
            var n = this,
                r = [0],
                i = [null],
                s = [],
                o = this.table,
                u = "",
                a = 0,
                f = 0,
                l = 0,
                c = 2,
                h = 1;
            this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
            var p = this.lexer.yylloc;
            s.push(p);
            var d = this.lexer.options && this.lexer.options.ranges;
            typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
            var g, y, b, w, E, S, x = {}, T, N, C, k;
            for (;;) {
                b = r[r.length - 1];
                if (this.defaultActions[b]) w = this.defaultActions[b];
                else {
                    if (g === null || typeof g == "undefined") g = m();
                    w = o[b] && o[b][g]
                } if (typeof w == "undefined" || !w.length || !w[0]) {
                    var L = "";
                    if (!l) {
                        k = [];
                        for (T in o[b]) this.terminals_[T] && T > 2 && k.push("'" + this.terminals_[T] + "'");
                        this.lexer.showPosition ? L = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : L = "Parse error on line " + (a + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError(L, {
                            text: this.lexer.match,
                            token: this.terminals_[g] || g,
                            line: this.lexer.yylineno,
                            loc: p,
                            expected: k
                        })
                    }
                }
                if (w[0] instanceof Array && w.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + g);
                switch (w[0]) {
                    case 1:
                        r.push(g), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(w[1]), g = null, y ? (g = y, y = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, l > 0 && l--);
                        break;
                    case 2:
                        N = this.productions_[w[1]][1], x.$ = i[i.length - N], x._$ = {
                            first_line: s[s.length - (N || 1)].first_line,
                            last_line: s[s.length - 1].last_line,
                            first_column: s[s.length - (N || 1)].first_column,
                            last_column: s[s.length - 1].last_column
                        }, d && (x._$.range = [s[s.length - (N || 1)].range[0], s[s.length - 1].range[1]]), S = this.performAction.call(x, u, f, a, this.yy, w[1], i, s);
                        if (typeof S != "undefined") return S;
                        N && (r = r.slice(0, -1 * N * 2), i = i.slice(0, -1 * N), s = s.slice(0, -1 * N)), r.push(this.productions_[w[1]][0]), i.push(x.$), s.push(x._$), C = o[r[r.length - 2]][r[r.length - 1]], r.push(C);
                        break;
                    case 3:
                        return !0
                }
            }
            return !0
        }
    }, t = function() {
            var e = {
                EOF: 1,
                parseError: function(t, n) {
                    if (!this.yy.parser) throw new Error(t);
                    this.yy.parser.parseError(t, n)
                },
                setInput: function(e) {
                    return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                },
                input: function() {
                    var e = this._input[0];
                    this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
                    var t = e.match(/(?:\r\n?|\n).*/g);
                    return t ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
                },
                unput: function(e) {
                    var t = e.length,
                        n = e.split(/(?:\r\n?|\n)/g);
                    this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
                    var r = this.match.split(/(?:\r\n?|\n)/g);
                    this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                    var i = this.yylloc.range;
                    return this.yylloc = {
                        first_line: this.yylloc.first_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.first_column,
                        last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
                    }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this
                },
                more: function() {
                    return this._more = !0, this
                },
                less: function(e) {
                    this.unput(this.match.slice(e))
                },
                pastInput: function() {
                    var e = this.matched.substr(0, this.matched.length - this.match.length);
                    return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                },
                upcomingInput: function() {
                    var e = this.match;
                    return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                },
                showPosition: function() {
                    var e = this.pastInput(),
                        t = (new Array(e.length + 1)).join("-");
                    return e + this.upcomingInput() + "\n" + t + "^"
                },
                next: function() {
                    if (this.done) return this.EOF;
                    this._input || (this.done = !0);
                    var e, t, n, r, i, s;
                    this._more || (this.yytext = "", this.match = "");
                    var o = this._currentRules();
                    for (var u = 0; u < o.length; u++) {
                        n = this._input.match(this.rules[o[u]]);
                        if (n && (!t || n[0].length > t[0].length)) {
                            t = n, r = u;
                            if (!this.options.flex) break
                        }
                    }
                    if (t) {
                        s = t[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                        }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1);
                        if (e) return e;
                        return
                    }
                    return this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    })
                },
                lex: function() {
                    var t = this.next();
                    return typeof t != "undefined" ? t : this.lex()
                },
                begin: function(t) {
                    this.conditionStack.push(t)
                },
                popState: function() {
                    return this.conditionStack.pop()
                },
                _currentRules: function() {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                },
                topState: function() {
                    return this.conditionStack[this.conditionStack.length - 2]
                },
                pushState: function(t) {
                    this.begin(t)
                }
            };
            return e.options = {}, e.performAction = function(t, n, r, i) {
                var s = i;
                switch (r) {
                    case 0:
                        n.yytext.slice(-1) !== "\\" && this.begin("mu"), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1), this.begin("emu"));
                        if (n.yytext) return 14;
                        break;
                    case 1:
                        return 14;
                    case 2:
                        return n.yytext.slice(-1) !== "\\" && this.popState(), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1)), 14;
                    case 3:
                        return 24;
                    case 4:
                        return 16;
                    case 5:
                        return 20;
                    case 6:
                        return 19;
                    case 7:
                        return 19;
                    case 8:
                        return 23;
                    case 9:
                        return 23;
                    case 10:
                        return n.yytext = n.yytext.substr(3, n.yyleng - 5), this.popState(), 15;
                    case 11:
                        return 22;
                    case 12:
                        return 35;
                    case 13:
                        return 34;
                    case 14:
                        return 34;
                    case 15:
                        return 37;
                    case 16:
                        break;
                    case 17:
                        return this.popState(), 18;
                    case 18:
                        return this.popState(), 18;
                    case 19:
                        return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"'), 29;
                    case 20:
                        return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"'), 29;
                    case 21:
                        return n.yytext = n.yytext.substr(1), 27;
                    case 22:
                        return 31;
                    case 23:
                        return 31;
                    case 24:
                        return 30;
                    case 25:
                        return 34;
                    case 26:
                        return n.yytext = n.yytext.substr(1, n.yyleng - 2), 34;
                    case 27:
                        return "INVALID";
                    case 28:
                        return 5
                }
            }, e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[} ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@[a-zA-Z]+)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:[0-9]+(?=[}\s]))/, /^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], e.conditions = {
                mu: {
                    rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
                    inclusive: !1
                },
                emu: {
                    rules: [2],
                    inclusive: !1
                },
                INITIAL: {
                    rules: [0, 1, 28],
                    inclusive: !0
                }
            }, e
        }();
    return e.lexer = t, n.prototype = e, e.Parser = n, new n
}();
typeof require != "undefined" && typeof exports != "undefined" && (exports.parser = handlebars, exports.Parser = handlebars.Parser, exports.parse = function() {
    return handlebars.parse.apply(handlebars, arguments)
}, exports.main = function(t) {
    if (!t[1]) throw new Error("Usage: " + t[0] + " FILE");
    var n, r;
    return typeof process != "undefined" ? n = require("fs").readFileSync(require("path").resolve(t[1]), "utf8") : n = require("file").path(require("file").cwd()).join(t[1]).read({
        charset: "utf-8"
    }), exports.parser.parse(n)
}, typeof module != "undefined" && require.main === module && exports.main(typeof process != "undefined" ? process.argv.slice(1) : require("system").args)), Handlebars.Parser = handlebars, Handlebars.parse = function(e) {
    return Handlebars.Parser.yy = Handlebars.AST, Handlebars.Parser.parse(e)
}, Handlebars.print = function(e) {
    return (new Handlebars.PrintVisitor).accept(e)
}, Handlebars.logger = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,
    log: function(e, t) {}
}, Handlebars.log = function(e, t) {
    Handlebars.logger.log(e, t)
},
function() {
    Handlebars.AST = {}, Handlebars.AST.ProgramNode = function(e, t) {
        this.type = "program", this.statements = e, t && (this.inverse = new Handlebars.AST.ProgramNode(t))
    }, Handlebars.AST.MustacheNode = function(e, t, n) {
        this.type = "mustache", this.escaped = !n, this.hash = t;
        var r = this.id = e[0],
            i = this.params = e.slice(1),
            s = this.eligibleHelper = r.isSimple;
        this.isHelper = s && (i.length || t)
    }, Handlebars.AST.PartialNode = function(e, t) {
        this.type = "partial", this.id = e, this.context = t
    };
    var e = function(e, t) {
        if (e.original !== t.original) throw new Handlebars.Exception(e.original + " doesn't match " + t.original)
    };
    Handlebars.AST.BlockNode = function(t, n, r, i) {
        e(t.id, i), this.type = "block", this.mustache = t, this.program = n, this.inverse = r, this.inverse && !this.program && (this.isInverse = !0)
    }, Handlebars.AST.ContentNode = function(e) {
        this.type = "content", this.string = e
    }, Handlebars.AST.HashNode = function(e) {
        this.type = "hash", this.pairs = e
    }, Handlebars.AST.IdNode = function(e) {
        this.type = "ID", this.original = e.join(".");
        var t = [],
            n = 0;
        for (var r = 0, i = e.length; r < i; r++) {
            var s = e[r];
            s === ".." ? n++ : s === "." || s === "this" ? this.isScoped = !0 : t.push(s)
        }
        this.parts = t, this.string = t.join("."), this.depth = n, this.isSimple = e.length === 1 && !this.isScoped && n === 0
    }, Handlebars.AST.DataNode = function(e) {
        this.type = "DATA", this.id = e
    }, Handlebars.AST.StringNode = function(e) {
        this.type = "STRING", this.string = e
    }, Handlebars.AST.IntegerNode = function(e) {
        this.type = "INTEGER", this.integer = e
    }, Handlebars.AST.BooleanNode = function(e) {
        this.type = "BOOLEAN", this.bool = e
    }, Handlebars.AST.CommentNode = function(e) {
        this.type = "comment", this.comment = e
    }
}(), Handlebars.Exception = function(e) {
    var t = Error.prototype.constructor.apply(this, arguments);
    for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
    this.message = t.message
}, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function(e) {
    this.string = e
}, Handlebars.SafeString.prototype.toString = function() {
    return this.string.toString()
},
function() {
    var e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, t = /[&<>"'`]/g,
        n = /[&<>"'`]/,
        r = function(t) {
            return e[t] || "&amp;"
        };
    Handlebars.Utils = {
        escapeExpression: function(e) {
            return e instanceof Handlebars.SafeString ? e.toString() : e == null || e === !1 ? "" : n.test(e) ? e.replace(t, r) : e
        },
        isEmpty: function(e) {
            return typeof e == "undefined" ? !0 : e === null ? !0 : e === !1 ? !0 : Object.prototype.toString.call(e) === "[object Array]" && e.length === 0 ? !0 : !1
        }
    }
}(), Handlebars.Compiler = function() {}, Handlebars.JavaScriptCompiler = function() {},
function(e, t) {
    e.prototype = {
        compiler: e,
        disassemble: function() {
            var e = this.opcodes,
                t, n = [],
                r, i;
            for (var s = 0, o = e.length; s < o; s++) {
                t = e[s];
                if (t.opcode === "DECLARE") n.push("DECLARE " + t.name + "=" + t.value);
                else {
                    r = [];
                    for (var u = 0; u < t.args.length; u++) i = t.args[u], typeof i == "string" && (i = '"' + i.replace("\n", "\\n") + '"'), r.push(i);
                    n.push(t.opcode + " " + r.join(" "))
                }
            }
            return n.join("\n")
        },
        guid: 0,
        compile: function(e, t) {
            this.children = [], this.depths = {
                list: []
            }, this.options = t;
            var n = this.options.knownHelpers;
            this.options.knownHelpers = {
                helperMissing: !0,
                blockHelperMissing: !0,
                each: !0,
                "if": !0,
                unless: !0,
                "with": !0,
                log: !0
            };
            if (n)
                for (var r in n) this.options.knownHelpers[r] = n[r];
            return this.program(e)
        },
        accept: function(e) {
            return this[e.type](e)
        },
        program: function(e) {
            var t = e.statements,
                n;
            this.opcodes = [];
            for (var r = 0, i = t.length; r < i; r++) n = t[r], this[n.type](n);
            return this.isSimple = i === 1, this.depths.list = this.depths.list.sort(function(e, t) {
                return e - t
            }), this
        },
        compileProgram: function(e) {
            var t = (new this.compiler).compile(e, this.options),
                n = this.guid++,
                r;
            this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
            for (var i = 0, s = t.depths.list.length; i < s; i++) {
                r = t.depths.list[i];
                if (r < 2) continue;
                this.addDepth(r - 1)
            }
            return n
        },
        block: function(e) {
            var t = e.mustache,
                n = e.program,
                r = e.inverse;
            n && (n = this.compileProgram(n)), r && (r = this.compileProgram(r));
            var i = this.classifyMustache(t);
            i === "helper" ? this.helperMustache(t, n, r) : i === "simple" ? (this.simpleMustache(t), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("pushLiteral", "{}"), this.opcode("blockValue")) : (this.ambiguousMustache(t, n, r), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("pushLiteral", "{}"), this.opcode("ambiguousBlockValue")), this.opcode("append")
        },
        hash: function(e) {
            var t = e.pairs,
                n, r;
            this.opcode("push", "{}");
            for (var i = 0, s = t.length; i < s; i++) n = t[i], r = n[1], this.accept(r), this.opcode("assignToHash", n[0])
        },
        partial: function(e) {
            var t = e.id;
            this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.original), this.opcode("append")
        },
        content: function(e) {
            this.opcode("appendContent", e.string)
        },
        mustache: function(e) {
            var t = this.options,
                n = this.classifyMustache(e);
            n === "simple" ? this.simpleMustache(e) : n === "helper" ? this.helperMustache(e) : this.ambiguousMustache(e), e.escaped && !t.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
        },
        ambiguousMustache: function(e, t, n) {
            var r = e.id,
                i = r.parts[0];
            this.opcode("getContext", r.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("invokeAmbiguous", i)
        },
        simpleMustache: function(e, t, n) {
            var r = e.id;
            r.type === "DATA" ? this.DATA(r) : r.parts.length ? this.ID(r) : (this.addDepth(r.depth), this.opcode("getContext", r.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
        },
        helperMustache: function(e, t, n) {
            var r = this.setupFullMustacheParams(e, t, n),
                i = e.id.parts[0];
            if (this.options.knownHelpers[i]) this.opcode("invokeKnownHelper", r.length, i);
            else {
                if (this.knownHelpersOnly) throw new Error("You specified knownHelpersOnly, but used the unknown helper " + i);
                this.opcode("invokeHelper", r.length, i)
            }
        },
        ID: function(e) {
            this.addDepth(e.depth), this.opcode("getContext", e.depth);
            var t = e.parts[0];
            t ? this.opcode("lookupOnContext", e.parts[0]) : this.opcode("pushContext");
            for (var n = 1, r = e.parts.length; n < r; n++) this.opcode("lookup", e.parts[n])
        },
        DATA: function(e) {
            this.options.data = !0, this.opcode("lookupData", e.id)
        },
        STRING: function(e) {
            this.opcode("pushString", e.string)
        },
        INTEGER: function(e) {
            this.opcode("pushLiteral", e.integer)
        },
        BOOLEAN: function(e) {
            this.opcode("pushLiteral", e.bool)
        },
        comment: function() {},
        opcode: function(e) {
            this.opcodes.push({
                opcode: e,
                args: [].slice.call(arguments, 1)
            })
        },
        declare: function(e, t) {
            this.opcodes.push({
                opcode: "DECLARE",
                name: e,
                value: t
            })
        },
        addDepth: function(e) {
            if (isNaN(e)) throw new Error("EWOT");
            if (e === 0) return;
            this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e))
        },
        classifyMustache: function(e) {
            var t = e.isHelper,
                n = e.eligibleHelper,
                r = this.options;
            if (n && !t) {
                var i = e.id.parts[0];
                r.knownHelpers[i] ? t = !0 : r.knownHelpersOnly && (n = !1)
            }
            return t ? "helper" : n ? "ambiguous" : "simple"
        },
        pushParams: function(e) {
            var t = e.length,
                n;
            while (t--) n = e[t], this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.string)) : this[n.type](n)
        },
        setupMustacheParams: function(e) {
            var t = e.params;
            return this.pushParams(t), e.hash ? this.hash(e.hash) : this.opcode("pushLiteral", "{}"), t
        },
        setupFullMustacheParams: function(e, t, n) {
            var r = e.params;
            return this.pushParams(r), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.hash(e.hash) : this.opcode("pushLiteral", "{}"), r
        }
    };
    var n = function(e) {
        this.value = e
    };
    t.prototype = {
        nameLookup: function(e, n, r) {
            return /^[0-9]+$/.test(n) ? e + "[" + n + "]" : t.isValidJavaScriptVariableName(n) ? e + "." + n : e + "['" + n + "']"
        },
        appendToBuffer: function(e) {
            return this.environment.isSimple ? "return " + e + ";" : "buffer += " + e + ";"
        },
        initializeBuffer: function() {
            return this.quotedString("")
        },
        namespace: "Handlebars",
        compile: function(e, t, n, r) {
            this.environment = e, this.options = t || {}, Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !! n, this.context = n || {
                programs: [],
                aliases: {}
            }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
                list: []
            }, this.compileStack = [], this.compileChildren(e, t);
            var i = e.opcodes,
                s;
            this.i = 0;
            for (o = i.length; this.i < o; this.i++) s = i[this.i], s.opcode === "DECLARE" ? this[s.name] = s.value : this[s.opcode].apply(this, s.args);
            return this.createFunctionContext(r)
        },
        nextOpcode: function() {
            var e = this.environment.opcodes,
                t = e[this.i + 1];
            return e[this.i + 1]
        },
        eat: function(e) {
            this.i = this.i + 1
        },
        preamble: function() {
            var e = [];
            if (!this.isChild) {
                var t = this.namespace,
                    n = "helpers = helpers || " + t + ".helpers;";
                this.environment.usePartial && (n = n + " partials = partials || " + t + ".partials;"), this.options.data && (n += " data = data || {};"), e.push(n)
            } else e.push("");
            this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
        },
        createFunctionContext: function(e) {
            var t = this.stackVars.concat(this.registers.list);
            t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", "));
            if (!this.isChild) {
                var n = [];
                for (var r in this.context.aliases) this.source[1] = this.source[1] + ", " + r + "=" + this.context.aliases[r]
            }
            this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
            var i = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
            for (var s = 0, o = this.environment.depths.list.length; s < o; s++) i.push("depth" + this.environment.depths.list[s]);
            if (e) return i.push(this.source.join("\n  ")), Function.apply(this, i);
            var u = "function " + (this.name || "") + "(" + i.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
            return Handlebars.log(Handlebars.logger.DEBUG, u + "\n\n"), u
        },
        blockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var e = ["depth0"];
            this.setupParams(0, e), this.replaceStack(function(t) {
                return e.splice(1, 0, t), t + " = blockHelperMissing.call(" + e.join(", ") + ")"
            })
        },
        ambiguousBlockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var e = ["depth0"];
            this.setupParams(0, e);
            var t = this.topStack();
            e.splice(1, 0, t), this.source.push("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
        },
        appendContent: function(e) {
            this.source.push(this.appendToBuffer(this.quotedString(e)))
        },
        append: function() {
            var e = this.popStack();
            this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
        },
        appendEscaped: function() {
            var e = this.nextOpcode(),
                t = "";
            this.context.aliases.escapeExpression = "this.escapeExpression", e && e.opcode === "appendContent" && (t = " + " + this.quotedString(e.args[0]), this.eat(e)), this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + t))
        },
        getContext: function(e) {
            this.lastContext !== e && (this.lastContext = e)
        },
        lookupOnContext: function(e) {
            this.pushStack(this.nameLookup("depth" + this.lastContext, e, "context"))
        },
        pushContext: function() {
            this.pushStackLiteral("depth" + this.lastContext)
        },
        resolvePossibleLambda: function() {
            this.context.aliases.functionType = '"function"', this.replaceStack(function(e) {
                return "typeof " + e + " === functionType ? " + e + "() : " + e
            })
        },
        lookup: function(e) {
            this.replaceStack(function(t) {
                return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
            })
        },
        lookupData: function(e) {
            this.pushStack(this.nameLookup("data", e, "data"))
        },
        pushStringParam: function(e) {
            this.pushStackLiteral("depth" + this.lastContext), this.pushString(e)
        },
        pushString: function(e) {
            this.pushStackLiteral(this.quotedString(e))
        },
        push: function(e) {
            this.pushStack(e)
        },
        pushLiteral: function(e) {
            this.pushStackLiteral(e)
        },
        pushProgram: function(e) {
            e != null ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
        },
        invokeHelper: function(e, t) {
            this.context.aliases.helperMissing = "helpers.helperMissing";
            var n = this.lastHelper = this.setupHelper(e, t);
            this.register("foundHelper", n.name), this.pushStack("foundHelper ? foundHelper.call(" + n.callParams + ") " + ": helperMissing.call(" + n.helperMissingParams + ")")
        },
        invokeKnownHelper: function(e, t) {
            var n = this.setupHelper(e, t);
            this.pushStack(n.name + ".call(" + n.callParams + ")")
        },
        invokeAmbiguous: function(e) {
            this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
            var t = this.setupHelper(0, e),
                n = this.lastHelper = this.nameLookup("helpers", e, "helper");
            this.register("foundHelper", n);
            var r = this.nameLookup("depth" + this.lastContext, e, "context"),
                i = this.nextStack();
            this.source.push("if (foundHelper) { " + i + " = foundHelper.call(" + t.callParams + "); }"), this.source.push("else { " + i + " = " + r + "; " + i + " = typeof " + i + " === functionType ? " + i + "() : " + i + "; }")
        },
        invokePartial: function(e) {
            var t = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"];
            this.options.data && t.push("data"), this.context.aliases.self = "this", this.pushStack("self.invokePartial(" + t.join(", ") + ");")
        },
        assignToHash: function(e) {
            var t = this.popStack(),
                n = this.topStack();
            this.source.push(n + "['" + e + "'] = " + t + ";")
        },
        compiler: t,
        compileChildren: function(e, t) {
            var n = e.children,
                r, i;
            for (var s = 0, o = n.length; s < o; s++) {
                r = n[s], i = new this.compiler, this.context.programs.push("");
                var u = this.context.programs.length;
                r.index = u, r.name = "program" + u, this.context.programs[u] = i.compile(r, t, this.context)
            }
        },
        programExpression: function(e) {
            this.context.aliases.self = "this";
            if (e == null) return "self.noop";
            var t = this.environment.children[e],
                n = t.depths.list,
                r, i = [t.index, t.name, "data"];
            for (var s = 0, o = n.length; s < o; s++) r = n[s], r === 1 ? i.push("depth0") : i.push("depth" + (r - 1));
            return n.length === 0 ? "self.program(" + i.join(", ") + ")" : (i.shift(), "self.programWithDepth(" + i.join(", ") + ")")
        },
        register: function(e, t) {
            this.useRegister(e), this.source.push(e + " = " + t + ";")
        },
        useRegister: function(e) {
            this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e))
        },
        pushStackLiteral: function(e) {
            return this.compileStack.push(new n(e)), e
        },
        pushStack: function(e) {
            return this.source.push(this.incrStack() + " = " + e + ";"), this.compileStack.push("stack" + this.stackSlot), "stack" + this.stackSlot
        },
        replaceStack: function(e) {
            var t = e.call(this, this.topStack());
            return this.source.push(this.topStack() + " = " + t + ";"), "stack" + this.stackSlot
        },
        nextStack: function(e) {
            var t = this.incrStack();
            return this.compileStack.push("stack" + this.stackSlot), t
        },
        incrStack: function() {
            return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), "stack" + this.stackSlot
        },
        popStack: function() {
            var e = this.compileStack.pop();
            return e instanceof n ? e.value : (this.stackSlot--, e)
        },
        topStack: function() {
            var e = this.compileStack[this.compileStack.length - 1];
            return e instanceof n ? e.value : e
        },
        quotedString: function(e) {
            return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'
        },
        setupHelper: function(e, t) {
            var n = [];
            this.setupParams(e, n);
            var r = this.nameLookup("helpers", t, "helper");
            return {
                params: n,
                name: r,
                callParams: ["depth0"].concat(n).join(", "),
                helperMissingParams: ["depth0", this.quotedString(t)].concat(n).join(", ")
            }
        },
        setupParams: function(e, t) {
            var n = [],
                r = [],
                i, s, o;
            n.push("hash:" + this.popStack()), s = this.popStack(), o = this.popStack();
            if (o || s) o || (this.context.aliases.self = "this", o = "self.noop"), s || (this.context.aliases.self = "this", s = "self.noop"), n.push("inverse:" + s), n.push("fn:" + o);
            for (var u = 0; u < e; u++) i = this.popStack(), t.push(i), this.options.stringParams && r.push(this.popStack());
            return this.options.stringParams && n.push("contexts:[" + r.join(",") + "]"), this.options.data && n.push("data:data"), t.push("{" + n.join(",") + "}"), t.join(", ")
        }
    };
    var r = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),
        i = t.RESERVED_WORDS = {};
    for (var s = 0, o = r.length; s < o; s++) i[r[s]] = !0;
    t.isValidJavaScriptVariableName = function(e) {
        return !t.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1
    }
}(Handlebars.Compiler, Handlebars.JavaScriptCompiler), Handlebars.precompile = function(e, t) {
    t = t || {};
    var n = Handlebars.parse(e),
        r = (new Handlebars.Compiler).compile(n, t);
    return (new Handlebars.JavaScriptCompiler).compile(r, t)
}, Handlebars.compile = function(e, t) {
    function r() {
        var n = Handlebars.parse(e),
            r = (new Handlebars.Compiler).compile(n, t),
            i = (new Handlebars.JavaScriptCompiler).compile(r, t, undefined, !0);
        return Handlebars.template(i)
    }
    t = t || {};
    var n;
    return function(e, t) {
        return n || (n = r()), n.call(this, e, t)
    }
}, Handlebars.VM = {
    template: function(e) {
        var t = {
            escapeExpression: Handlebars.Utils.escapeExpression,
            invokePartial: Handlebars.VM.invokePartial,
            programs: [],
            program: function(e, t, n) {
                var r = this.programs[e];
                return n ? Handlebars.VM.program(t, n) : r ? r : (r = this.programs[e] = Handlebars.VM.program(t), r)
            },
            programWithDepth: Handlebars.VM.programWithDepth,
            noop: Handlebars.VM.noop
        };
        return function(n, r) {
            return r = r || {}, e.call(t, Handlebars, n, r.helpers, r.partials, r.data)
        }
    },
    programWithDepth: function(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 2);
        return function(n, i) {
            return i = i || {}, e.apply(this, [n, i.data || t].concat(r))
        }
    },
    program: function(e, t) {
        return function(n, r) {
            return r = r || {}, e(n, r.data || t)
        }
    },
    noop: function() {
        return ""
    },
    invokePartial: function(e, t, n, r, i, s) {
        var o = {
            helpers: r,
            partials: i,
            data: s
        };
        if (e === undefined) throw new Handlebars.Exception("The partial " + t + " could not be found");
        if (e instanceof Function) return e(n, o);
        if (!Handlebars.compile) throw new Handlebars.Exception("The partial " + t + " could not be compiled when running in runtime-only mode");
        return i[t] = Handlebars.compile(e, {
            data: s !== undefined
        }), i[t](n, o)
    }
}, Handlebars.template = Handlebars.VM.template,
function(e) {
    function O(e, t, n, r) {
        var i = n.lang();
        return i[e].call ? i[e](n, r) : i[e][t]
    }

    function M(e, t) {
        return function(n) {
            return B(e.call(this, n), t)
        }
    }

    function _(e) {
        return function(t) {
            var n = e.call(this, t);
            return n + this.lang().ordinal(n)
        }
    }

    function D(e, t, n) {
        this._d = e, this._isUTC = !! t, this._a = e._a || null, this._lang = n || !1
    }

    function P(e) {
        var t = this._data = {}, n = e.years || e.y || 0,
            r = e.months || e.M || 0,
            i = e.weeks || e.w || 0,
            s = e.days || e.d || 0,
            o = e.hours || e.h || 0,
            u = e.minutes || e.m || 0,
            a = e.seconds || e.s || 0,
            f = e.milliseconds || e.ms || 0;
        this._milliseconds = f + a * 1e3 + u * 6e4 + o * 36e5, this._days = s + i * 7, this._months = r + n * 12, t.milliseconds = f % 1e3, a += H(f / 1e3), t.seconds = a % 60, u += H(a / 60), t.minutes = u % 60, o += H(u / 60), t.hours = o % 24, s += H(o / 24), s += i * 7, t.days = s % 30, r += H(s / 30), t.months = r % 12, n += H(r / 12), t.years = n, this._lang = !1
    }

    function H(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }

    function B(e, t) {
        var n = e + "";
        while (n.length < t) n = "0" + n;
        return n
    }

    function j(e, t, n) {
        var r = t._milliseconds,
            i = t._days,
            s = t._months,
            o;
        r && e._d.setTime(+e + r * n), i && e.date(e.date() + i * n), s && (o = e.date(), e.date(1).month(e.month() + s * n).date(Math.min(o, e.daysInMonth())))
    }

    function F(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }

    function I(e, t) {
        var n = Math.min(e.length, t.length),
            r = Math.abs(e.length - t.length),
            i = 0,
            s;
        for (s = 0; s < n; s++)~~ e[s] !== ~~t[s] && i++;
        return i + r
    }

    function q(e, t, n, r) {
        var i, s, o = [];
        for (i = 0; i < 7; i++) o[i] = e[i] = e[i] == null ? i === 2 ? 1 : 0 : e[i];
        return e[7] = o[7] = t, e[8] != null && (o[8] = e[8]), e[3] += n || 0, e[4] += r || 0, s = new Date(0), t ? (s.setUTCFullYear(e[0], e[1], e[2]), s.setUTCHours(e[3], e[4], e[5], e[6])) : (s.setFullYear(e[0], e[1], e[2]), s.setHours(e[3], e[4], e[5], e[6])), s._a = o, s
    }

    function R(e, n) {
        var r, i, o = [];
        !n && u && (n = require("./lang/" + e));
        for (r = 0; r < a.length; r++) n[a[r]] = n[a[r]] || s.en[a[r]];
        for (r = 0; r < 12; r++) i = t([2e3, r]), o[r] = new RegExp("^" + (n.months[r] || n.months(i, "")) + "|^" + (n.monthsShort[r] || n.monthsShort(i, "")).replace(".", ""), "i");
        return n.monthsParse = n.monthsParse || o, s[e] = n, n
    }

    function U(e) {
        var n = typeof e == "string" && e || e && e._lang || null;
        return n ? s[n] || R(n) : t
    }

    function z(e) {
        return e.match(/\[.*\]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function W(e) {
        var t = e.match(l),
            n, r;
        for (n = 0, r = t.length; n < r; n++) A[t[n]] ? t[n] = A[t[n]] : t[n] = z(t[n]);
        return function(i) {
            var s = "";
            for (n = 0; n < r; n++) s += typeof t[n].call == "function" ? t[n].call(i, e) : t[n];
            return s
        }
    }

    function X(e, t) {
        function r(t) {
            return e.lang().longDateFormat[t] || t
        }
        var n = 5;
        while (n-- && c.test(t)) t = t.replace(c, r);
        return C[t] || (C[t] = W(t)), C[t](e)
    }

    function V(e) {
        switch (e) {
            case "DDDD":
                return v;
            case "YYYY":
                return m;
            case "S":
            case "SS":
            case "SSS":
            case "DDD":
                return d;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
            case "a":
            case "A":
                return g;
            case "Z":
            case "ZZ":
                return y;
            case "T":
                return b;
            case "MM":
            case "DD":
            case "YY":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
                return p;
            default:
                return new RegExp(e.replace("\\", ""))
        }
    }

    function $(e, t, n, r) {
        var i, s;
        switch (e) {
            case "M":
            case "MM":
                n[1] = t == null ? 0 : ~~t - 1;
                break;
            case "MMM":
            case "MMMM":
                for (i = 0; i < 12; i++)
                    if (U().monthsParse[i].test(t)) {
                        n[1] = i, s = !0;
                        break
                    }
                s || (n[8] = !1);
                break;
            case "D":
            case "DD":
            case "DDD":
            case "DDDD":
                t != null && (n[2] = ~~t);
                break;
            case "YY":
                n[0] = ~~t + (~~t > 70 ? 1900 : 2e3);
                break;
            case "YYYY":
                n[0] = ~~Math.abs(t);
                break;
            case "a":
            case "A":
                r.isPm = (t + "").toLowerCase() === "pm";
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                n[3] = ~~t;
                break;
            case "m":
            case "mm":
                n[4] = ~~t;
                break;
            case "s":
            case "ss":
                n[5] = ~~t;
                break;
            case "S":
            case "SS":
            case "SSS":
                n[6] = ~~ (("0." + t) * 1e3);
                break;
            case "Z":
            case "ZZ":
                r.isUTC = !0, i = (t + "").match(x), i && i[1] && (r.tzh = ~~i[1]), i && i[2] && (r.tzm = ~~i[2]), i && i[0] === "+" && (r.tzh = -r.tzh, r.tzm = -r.tzm)
        }
        t == null && (n[8] = !1)
    }

    function J(e, t) {
        var n = [0, 0, 1, 0, 0, 0, 0],
            r = {
                tzh: 0,
                tzm: 0
            }, i = t.match(l),
            s, o;
        for (s = 0; s < i.length; s++) o = (V(i[s]).exec(e) || [])[0], o && (e = e.slice(e.indexOf(o) + o.length)), A[i[s]] && $(i[s], o, n, r);
        return r.isPm && n[3] < 12 && (n[3] += 12), r.isPm === !1 && n[3] === 12 && (n[3] = 0), q(n, r.isUTC, r.tzh, r.tzm)
    }

    function K(e, t) {
        var n, r = e.match(h) || [],
            i, s = 99,
            o, u, a;
        for (o = 0; o < t.length; o++) u = J(e, t[o]), i = X(new D(u), t[o]).match(h) || [], a = I(r, i), a < s && (s = a, n = u);
        return n
    }

    function Q(e) {
        var t = "YYYY-MM-DDT",
            n;
        if (w.exec(e)) {
            for (n = 0; n < 4; n++)
                if (S[n][1].exec(e)) {
                    t += S[n][0];
                    break
                }
            return y.exec(e) ? J(e, t + " Z") : J(e, t)
        }
        return new Date(e)
    }

    function G(e, t, n, r, i) {
        var s = i.relativeTime[e];
        return typeof s == "function" ? s(t || 1, !! n, e, r) : s.replace(/%d/i, t || 1)
    }

    function Y(e, t, n) {
        var i = r(Math.abs(e) / 1e3),
            s = r(i / 60),
            o = r(s / 60),
            u = r(o / 24),
            a = r(u / 365),
            f = i < 45 && ["s", i] || s === 1 && ["m"] || s < 45 && ["mm", s] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", r(u / 30)] || a === 1 && ["y"] || ["yy", a];
        return f[2] = t, f[3] = e > 0, f[4] = n, G.apply({}, f)
    }

    function Z(e, n) {
        t.fn[e] = function(e) {
            var t = this._isUTC ? "UTC" : "";
            return e != null ? (this._d["set" + t + n](e), this) : this._d["get" + t + n]()
        }
    }

    function et(e) {
        t.duration.fn[e] = function() {
            return this._data[e]
        }
    }

    function tt(e, n) {
        t.duration.fn["as" + e] = function() {
            return +this / n
        }
    }
    var t, n = "1.7.2",
        r = Math.round,
        i, s = {}, o = "en",
        u = typeof module != "undefined" && module.exports,
        a = "months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),
        f = /^\/?Date\((\-?\d+)/i,
        l = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,
        c = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,
        h = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,
        p = /\d\d?/,
        d = /\d{1,3}/,
        v = /\d{3}/,
        m = /\d{1,4}/,
        g = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,
        y = /Z|[\+\-]\d\d:?\d\d/i,
        b = /T/i,
        w = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        E = "YYYY-MM-DDTHH:mm:ssZ",
        S = [
            ["HH:mm:ss.S", /T\d\d:\d\d:\d\d\.\d{1,3}/],
            ["HH:mm:ss", /T\d\d:\d\d:\d\d/],
            ["HH:mm", /T\d\d:\d\d/],
            ["HH", /T\d\d/]
        ],
        x = /([\+\-]|\d\d)/gi,
        T = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
        N = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }, C = {}, k = "DDD w M D d".split(" "),
        L = "M D H h m s w".split(" "),
        A = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(e) {
                return O("monthsShort", this.month(), this, e)
            },
            MMMM: function(e) {
                return O("months", this.month(), this, e)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                var e = new Date(this.year(), this.month(), this.date()),
                    t = new Date(this.year(), 0, 1);
                return~~ ((e - t) / 864e5 + 1.5)
            },
            d: function() {
                return this.day()
            },
            dd: function(e) {
                return O("weekdaysMin", this.day(), this, e)
            },
            ddd: function(e) {
                return O("weekdaysShort", this.day(), this, e)
            },
            dddd: function(e) {
                return O("weekdays", this.day(), this, e)
            },
            w: function() {
                var e = new Date(this.year(), this.month(), this.date() - this.day() + 5),
                    t = new Date(e.getFullYear(), 0, 4);
                return~~ ((e - t) / 864e5 / 7 + 1.5)
            },
            YY: function() {
                return B(this.year() % 100, 2)
            },
            YYYY: function() {
                return B(this.year(), 4)
            },
            a: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return~~ (this.milliseconds() / 100)
            },
            SS: function() {
                return B(~~(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return B(this.milliseconds(), 3)
            },
            Z: function() {
                var e = -this.zone(),
                    t = "+";
                return e < 0 && (e = -e, t = "-"), t + B(~~(e / 60), 2) + ":" + B(~~e % 60, 2)
            },
            ZZ: function() {
                var e = -this.zone(),
                    t = "+";
                return e < 0 && (e = -e, t = "-"), t + B(~~(10 * e / 6), 4)
            }
        };
    while (k.length) i = k.pop(), A[i + "o"] = _(A[i]);
    while (L.length) i = L.pop(), A[i + i] = M(A[i], 2);
    A.DDDD = M(A.DDD, 3), t = function(n, r) {
        if (n === null || n === "") return null;
        var i, s;
        return t.isMoment(n) ? new D(new Date(+n._d), n._isUTC, n._lang) : (r ? F(r) ? i = K(n, r) : i = J(n, r) : (s = f.exec(n), i = n === e ? new Date : s ? new Date(+s[1]) : n instanceof Date ? n : F(n) ? q(n) : typeof n == "string" ? Q(n) : new Date(n)), new D(i))
    }, t.utc = function(e, n) {
        return F(e) ? new D(q(e, !0), !0) : (typeof e == "string" && !y.exec(e) && (e += " +0000", n && (n += " Z")), t(e, n).utc())
    }, t.unix = function(e) {
        return t(e * 1e3)
    }, t.duration = function(e, n) {
        var r = t.isDuration(e),
            i = typeof e == "number",
            s = r ? e._data : i ? {} : e,
            o;
        return i && (n ? s[n] = e : s.milliseconds = e), o = new P(s), r && (o._lang = e._lang), o
    }, t.humanizeDuration = function(e, n, r) {
        return t.duration(e, n === !0 ? null : n).humanize(n === !0 ? !0 : r)
    }, t.version = n, t.defaultFormat = E, t.lang = function(e, n) {
        var r;
        if (!e) return o;
        (n || !s[e]) && R(e, n);
        if (s[e]) {
            for (r = 0; r < a.length; r++) t[a[r]] = s[e][a[r]];
            t.monthsParse = s[e].monthsParse, o = e
        }
    }, t.langData = U, t.isMoment = function(e) {
        return e instanceof D
    }, t.isDuration = function(e) {
        return e instanceof P
    }, t.lang("en", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        meridiem: function(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinal: function(e) {
            var t = e % 10;
            return~~ (e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th"
        }
    }), t.fn = D.prototype = {
        clone: function() {
            return t(this)
        },
        valueOf: function() {
            return +this._d
        },
        unix: function() {
            return Math.floor(+this._d / 1e3)
        },
        toString: function() {
            return this._d.toString()
        },
        toDate: function() {
            return this._d
        },
        toArray: function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds(), !! this._isUTC]
        },
        isValid: function() {
            return this._a ? this._a[8] != null ? !! this._a[8] : !I(this._a, (this._a[7] ? t.utc(this._a) : t(this._a)).toArray()) : !isNaN(this._d.getTime())
        },
        utc: function() {
            return this._isUTC = !0, this
        },
        local: function() {
            return this._isUTC = !1, this
        },
        format: function(e) {
            return X(this, e ? e : t.defaultFormat)
        },
        add: function(e, n) {
            var r = n ? t.duration(+n, e) : t.duration(e);
            return j(this, r, 1), this
        },
        subtract: function(e, n) {
            var r = n ? t.duration(+n, e) : t.duration(e);
            return j(this, r, -1), this
        },
        diff: function(e, n, i) {
            var s = this._isUTC ? t(e).utc() : t(e).local(),
                o = (this.zone() - s.zone()) * 6e4,
                u = this._d - s._d - o,
                a = this.year() - s.year(),
                f = this.month() - s.month(),
                l = this.date() - s.date(),
                c;
            return n === "months" ? c = a * 12 + f + l / 30 : n === "years" ? c = a + (f + l / 30) / 12 : c = n === "seconds" ? u / 1e3 : n === "minutes" ? u / 6e4 : n === "hours" ? u / 36e5 : n === "days" ? u / 864e5 : n === "weeks" ? u / 6048e5 : u, i ? c : r(c)
        },
        from: function(e, n) {
            return t.duration(this.diff(e)).lang(this._lang).humanize(!n)
        },
        fromNow: function(e) {
            return this.from(t(), e)
        },
        calendar: function() {
            var e = this.diff(t().sod(), "days", !0),
                n = this.lang().calendar,
                r = n.sameElse,
                i = e < -6 ? r : e < -1 ? n.lastWeek : e < 0 ? n.lastDay : e < 1 ? n.sameDay : e < 2 ? n.nextDay : e < 7 ? n.nextWeek : r;
            return this.format(typeof i == "function" ? i.apply(this) : i)
        },
        isLeapYear: function() {
            var e = this.year();
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        },
        isDST: function() {
            return this.zone() < t([this.year()]).zone() || this.zone() < t([this.year(), 5]).zone()
        },
        day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return e == null ? t : this.add({
                d: e - t
            })
        },
        startOf: function(e) {
            switch (e.replace(/s$/, "")) {
                case "year":
                    this.month(0);
                case "month":
                    this.date(1);
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return this
        },
        endOf: function(e) {
            return this.startOf(e).add(e.replace(/s?$/, "s"), 1).subtract("ms", 1)
        },
        sod: function() {
            return this.clone().startOf("day")
        },
        eod: function() {
            return this.clone().endOf("day")
        },
        zone: function() {
            return this._isUTC ? 0 : this._d.getTimezoneOffset()
        },
        daysInMonth: function() {
            return t.utc([this.year(), this.month() + 1, 0]).date()
        },
        lang: function(t) {
            return t === e ? U(this) : (this._lang = t, this)
        }
    };
    for (i = 0; i < T.length; i++) Z(T[i].toLowerCase(), T[i]);
    Z("year", "FullYear"), t.duration.fn = P.prototype = {
        weeks: function() {
            return H(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6
        },
        humanize: function(e) {
            var t = +this,
                n = this.lang().relativeTime,
                r = Y(t, !e, this.lang()),
                i = t <= 0 ? n.past : n.future;
            return e && (typeof i == "function" ? r = i(r) : r = i.replace(/%s/i, r)), r
        },
        lang: t.fn.lang
    };
    for (i in N) N.hasOwnProperty(i) && (tt(i, N[i]), et(i.toLowerCase()));
    tt("Weeks", 6048e5), u && (module.exports = t), typeof ender == "undefined" && (this.moment = t), typeof define == "function" && define.amd && define("moment", [], function() {
        return t
    })
}.call(this),
function() {
    function o() {
        try {
            return r in t && t[r]
        } catch (e) {
            return !1
        }
    }
    var e = {}, t = window,
        n = t.document,
        r = "localStorage",
        i = "__storejs__",
        s;
    e.disabled = !1, e.set = function(e, t) {}, e.get = function(e) {}, e.remove = function(e) {}, e.clear = function() {}, e.transact = function(t, n, r) {
        var i = e.get(t);
        r == null && (r = n, n = null), typeof i == "undefined" && (i = n || {}), r(i), e.set(t, i)
    }, e.getAll = function() {}, e.serialize = function(e) {
        return JSON.stringify(e)
    }, e.deserialize = function(e) {
        if (typeof e != "string") return undefined;
        try {
            return JSON.parse(e)
        } catch (t) {
            return e || undefined
        }
    };
    if (o()) s = t[r], e.set = function(t, n) {
        return n === undefined ? e.remove(t) : (s.setItem(t, e.serialize(n)), n)
    }, e.get = function(t) {
        return e.deserialize(s.getItem(t))
    }, e.remove = function(e) {
        s.removeItem(e)
    }, e.clear = function() {
        s.clear()
    }, e.getAll = function() {
        var t = {};
        for (var n = 0; n < s.length; ++n) {
            var r = s.key(n);
            t[r] = e.get(r)
        }
        return t
    };
    else if (n.documentElement.addBehavior) {
        var u, a;
        try {
            a = new ActiveXObject("htmlfile"), a.open(), a.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>'), a.close(), u = a.w.frames[0].document, s = u.createElement("div")
        } catch (f) {
            s = n.createElement("div"), u = n.body
        }

        function l(t) {
            return function() {
                var n = Array.prototype.slice.call(arguments, 0);
                n.unshift(s), u.appendChild(s), s.addBehavior("#default#userData"), s.load(r);
                var i = t.apply(e, n);
                return u.removeChild(s), i
            }
        }
        var c = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");

        function h(e) {
            return e.replace(c, "___")
        }
        e.set = l(function(t, n, i) {
            return n = h(n), i === undefined ? e.remove(n) : (t.setAttribute(n, e.serialize(i)), t.save(r), i)
        }), e.get = l(function(t, n) {
            return n = h(n), e.deserialize(t.getAttribute(n))
        }), e.remove = l(function(e, t) {
            t = h(t), e.removeAttribute(t), e.save(r)
        }), e.clear = l(function(e) {
            var t = e.XMLDocument.documentElement.attributes;
            e.load(r);
            for (var n = 0, i; i = t[n]; n++) e.removeAttribute(i.name);
            e.save(r)
        }), e.getAll = l(function(t) {
            var n = t.XMLDocument.documentElement.attributes;
            t.load(r);
            var i = {};
            for (var s = 0, o; o = n[s]; ++s) i[o] = e.get(o);
            return i
        })
    }
    try {
        e.set(i, i), e.get(i) != i && (e.disabled = !0), e.remove(i)
    } catch (f) {
        e.disabled = !0
    }
    e.enabled = !e.disabled, typeof module != "undefined" && typeof module != "function" ? module.exports = e : typeof define == "function" && define.amd ? define(e) : this.store = e
}(),
function(e, t, n, r) {
    "use strict";

    function c(e, t) {
        if (typeof e == "function") return e.call(t)
    }

    function h(e) {
        return (e < 10 ? "0" : "") + e
    }

    function p(e, t, n, r) {
        return t = Array.isArray(t) ? t.join("") : t, n = n ? ' class="' + n + '"' : "", r = r ? " " + r : "", "<" + e + n + r + ">" + t + "</" + e + ">"
    }

    function d(e, t) {
        return Array.isArray(e) ? e = new Date(e[0], e[1], e[2]) : isNaN(e) ? t || (e = new Date, e.setHours(0, 0, 0, 0)) : e = new Date(e), {
            YEAR: t || e.getFullYear(),
            MONTH: t || e.getMonth(),
            DATE: t || e.getDate(),
            DAY: t || e.getDay(),
            TIME: t || e.getTime()
        }
    }
    var i = 7,
        s = 6,
        o = s * i,
        u = "div",
        a = "pickadate__",
        f = e(n),
        l = function(t, r) {
            function O(e) {
                if (e && N.YEAR >= w.YEAR && N.MONTH >= w.MONTH || !e && N.YEAR <= b.YEAR && N.MONTH <= b.MONTH) return "";
                var t = "month" + (e ? "Next" : "Prev");
                return p(u, r[t], m[t], "data-nav=" + (e || -1))
            }

            function M(e) {
                return r.monthSelector ? p("select", e.map(function(e, t) {
                    return p("option", e, 0, "value=" + t + (N.MONTH == t ? " selected" : "") + W(t, N.YEAR, " disabled", ""))
                }), m.monthSelector, "tabindex=" + (v.isOpen ? 0 : -1)) : p(u, e[N.MONTH], m.month)
            }

            function _() {
                var e = N.YEAR,
                    t = r.yearSelector;
                if (t) {
                    t = t === !0 ? 5 : ~~(t / 2);
                    var n = [],
                        i = e - t,
                        s = H(i, b.YEAR),
                        o = e + t + (s - i),
                        a = H(o, w.YEAR, 1);
                    t = o - a, t && (s = H(i - t, b.YEAR));
                    for (var f = 0; f <= a - s; f += 1) n.push(s + f);
                    return p("select", n.map(function(t) {
                        return p("option", t, 0, "value=" + t + (e == t ? " selected" : ""))
                    }), m.yearSelector, "tabindex=" + (v.isOpen ? 0 : -1))
                }
                return p(u, e, m.year)
            }

            function D() {
                var e, t, n, r = [],
                    s = "",
                    a = d([N.YEAR, N.MONTH + 1, 0]).DATE,
                    f = B(N.DATE, N.DAY),
                    l = function(e, t) {
                        var n = !1,
                            r = [m.day, t ? m.dayInfocus : m.dayOutfocus];
                        if (e.TIME < b.TIME || e.TIME > w.TIME || E && E.filter(S, e).length) n = !0, r.push(m.dayDisabled);
                        return e.TIME == y.TIME && r.push(m.dayToday), e.TIME == x.TIME && r.push(m.dayHighlighted), e.TIME == T.TIME && r.push(m.daySelected), [r.join(" "), "data-" + (n ? "disabled" : "date") + "=" + [e.YEAR, e.MONTH, e.DATE].join("/")]
                    };
                for (var c = 0; c < o; c += 1) t = c - f, e = d([N.YEAR, N.MONTH, t]), n = l(e, t > 0 && t <= a), r.push(p("td", p(u, e.DATE, n[0], n[1]))), c % i + 1 == i && (s += p("tr", r.splice(0, i)));
                return p("tbody", s, m.calendarBody)
            }

            function P() {
                return p(u, p(u, p(u, O() + O(1), m.monthNav) + p(u, M(r.showMonthsFull ? r.monthsFull : r.monthsShort), m.monthWrap) + p(u, _(), m.yearWrap) + p("table", [k, D()], m.calendarTable), m.calendar), m.calendarWrap)
            }

            function H(e, t, n) {
                return n && e < t || !n && e > t ? e : t
            }

            function B(e, t) {
                var n = e % i,
                    s = t - n + (r.firstDay ? -1 : 0);
                return t >= n ? s : i + s
            }

            function j(e, t) {
                x = e, N = e, t ? X() : F(e, 1)
            }

            function F(e, t) {
                T = e, l.value = a.getDate(), C && (C.value = a.getDate(r.formatSubmit)), t && X(), c(r.onSelect, a)
            }

            function I(e, t) {
                return N = d([t, e, 1])
            }

            function q(e) {
                return L.find("." + e)
            }

            function R(e, t) {
                t = t || N.YEAR, e = W(e, t), I(e, t), X()
            }

            function U(e, t) {
                return e === !0 ? y : Array.isArray(e) ? (--e[1], d(e)) : e && !isNaN(e) ? d([y.YEAR, y.MONTH, y.DATE + e]) : d(0, t ? Infinity : -Infinity)
            }

            function z(e, t) {
                e = e.TIME ? e : d(e);
                if (E) {
                    var n = e;
                    while (E.filter(S, e).length) e = d([e.YEAR, e.MONTH, e.DATE + (t || 1)]), e.MONTH != n.MONTH && (e = d([n.YEAR, n.MONTH, t > 0 ? ++n.DATE : --n.DATE]), n = e)
                }
                return e.TIME < b.TIME ? e = z(b) : e.TIME > w.TIME && (e = z(w, -1)), e
            }

            function W(e, t, n, r) {
                return t <= b.YEAR && e < b.MONTH ? n || b.MONTH : t >= w.YEAR && e > w.MONTH ? n || w.MONTH : r != null ? r : e
            }

            function X() {
                L.html(P()), V()
            }

            function V() {
                v.selectMonth = q(m.monthSelector).on({
                    click: function(e) {
                        e.stopPropagation()
                    },
                    change: function() {
                        R(+this.value), q(m.monthSelector).focus()
                    }
                })[0], v.selectYear = q(m.yearSelector).on({
                    click: function(e) {
                        e.stopPropagation()
                    },
                    change: function() {
                        R(N.MONTH, +this.value), q(m.yearSelector).focus()
                    }
                })[0]
            }

            function J(n) {
                var r = e(n.target),
                    i = r.data();
                n.stopPropagation(), t.focus();
                if (i.date) {
                    var s = i.date.split("/").map(function(e) {
                        return +e
                    });
                    j(d(s), !1, r), a.close()
                }
                i.nav && R(N.MONTH + i.nav)
            }

            function K(e) {
                var n = e.keyCode,
                    r = e.target;
                if (r != l && r != v.selectMonth && r != v.selectYear) {
                    a.close();
                    return
                }
                if (r == v.selectMonth || r == v.selectYear) {
                    t.removeClass(m.inputFocus);
                    return
                }
                if (n && r == l) {
                    !e.metaKey && n != 9 && e.preventDefault();
                    if (n == 13) {
                        F(x, 1), a.close();
                        return
                    }
                    if (n == 27) {
                        a.close();
                        return
                    }
                    A[n] && j(z([N.YEAR, N.MONTH, x.DATE + A[n]], A[n]), 1)
                }
            }
            var s = function() {}, a = s.prototype = {
                    constructor: s,
                    init: function() {
                        return t.on({
                            "focusin click": a.open,
                            keydown: function(e) {
                                var t = e.keyCode;
                                if (t == 8 || !v.isOpen && A[t]) e.preventDefault(), e.stopPropagation(), t != 8 && a.open()
                            }
                        }).after([L, C]), l.autofocus && a.open(), V(), c(r.onStart, a), a
                    },
                    open: function() {
                        return v.isOpen ? a : (v.isOpen = !0, t.addClass(m.inputFocus), L.addClass(m.open), v.selectMonth && (v.selectMonth.tabIndex = 0), v.selectYear && (v.selectYear.tabIndex = 0), f.on("click.P" + v.id + " focusin.P" + v.id + " keydown.P" + v.id, K), c(r.onOpen, a), a)
                    },
                    close: function() {
                        return v.isOpen = !1, t.removeClass(m.inputFocus), L.removeClass(m.open), v.selectMonth && (v.selectMonth.tabIndex = -1), v.selectYear && (v.selectYear.tabIndex = -1), f.off(".P" + v.id), c(r.onClose, a), a
                    },
                    show: function(e, t) {
                        return R(--e, t), a
                    },
                    getDate: function(e, t) {
                        return g.toArray(e || r.format).map(function(e) {
                            return c(g[e], t || T) || e
                        }).join("")
                    },
                    setDate: function(e, t, n, r) {
                        return j(z([e, --t, n]), r), a
                    },
                    getDateLimit: function(e, t) {
                        return a.getDate(t, e ? w : b)
                    },
                    setDateLimit: function(e, t) {
                        return t ? (w = U(e, t), N.TIME > w.TIME && (N = w)) : (b = U(e), N.TIME < b.TIME && (N = b)), X(), a
                    }
                }, l = function(e) {
                    return e.autofocus = e == n.activeElement, e.type = "text", e.readOnly = !0, e
                }(t[0]),
                v = {
                    id: ~~(Math.random() * 1e9)
                }, m = r.klass,
                g = function() {
                    function e(e) {
                        return e.match(/\w+/)[0].length
                    }

                    function t(e) {
                        return /\d/.test(e[1]) ? 2 : 1
                    }

                    function n(e, t, n) {
                        var r = e.match(/\w+/)[0];
                        return !t.mm && !t.m && (t.m = n.indexOf(r) + 1), r.length
                    }
                    return {
                        d: function(e) {
                            return e ? t(e) : this.DATE
                        },
                        dd: function(e) {
                            return e ? 2 : h(this.DATE)
                        },
                        ddd: function(t) {
                            return t ? e(t) : r.weekdaysShort[this.DAY]
                        },
                        dddd: function(t) {
                            return t ? e(t) : r.weekdaysFull[this.DAY]
                        },
                        m: function(e) {
                            return e ? t(e) : this.MONTH + 1
                        },
                        mm: function(e) {
                            return e ? 2 : h(this.MONTH + 1)
                        },
                        mmm: function(e, t) {
                            var i = r.monthsShort;
                            return e ? n(e, t, i) : i[this.MONTH]
                        },
                        mmmm: function(e, t) {
                            var i = r.monthsFull;
                            return e ? n(e, t, i) : i[this.MONTH]
                        },
                        yy: function(e) {
                            return e ? 2 : ("" + this.YEAR).slice(2)
                        },
                        yyyy: function(e) {
                            return e ? 4 : this.YEAR
                        },
                        toArray: function(e) {
                            return e.split(/(?=\b)(d{1,4}|m{1,4}|y{4}|yy)+(\b)/g)
                        }
                    }
                }(),
                y = d(),
                b = U(r.dateMin),
                w = U(r.dateMax, 1),
                E = function(e) {
                    if (Array.isArray(e)) return e[0] === !0 && (v.disabled = e.shift()), e.map(function(e) {
                        return isNaN(e) ? (--e[1], d(e)) : --e + r.firstDay
                    })
                }(r.datesDisabled),
                S = function() {
                    var e = function(e) {
                        return this.TIME == e.TIME || E.indexOf(this.DAY) > -1
                    };
                    return v.disabled ? function(t, n, r) {
                        return r.map(e, this).indexOf(!0) < 0
                    } : e
                }(),
                x = function(e, t) {
                    return e ? (t = {}, g.toArray(r.formatSubmit).map(function(n) {
                        var r = g[n] ? g[n](e, t) : n.length;
                        g[n] && (t[n] = e.slice(0, r)), e = e.slice(r)
                    }), t = [+(t.yyyy || t.yy), +(t.mm || t.m) - 1, +(t.dd || t.d)]) : t = Date.parse(t), z(!isNaN(t) || Array.isArray(t) ? t : y)
                }(l.getAttribute("data-value"), l.value),
                T = x,
                N = x,
                C = r.formatSubmit ? e("<input type=hidden name=" + l.name + r.hiddenSuffix + ">").val(l.value ? a.getDate(r.formatSubmit) : "")[0] : null,
                k = function(e) {
                    return r.firstDay && e.push(e.splice(0, 1)[0]), p("thead", p("tr", e.map(function(e) {
                        return p("th", e, m.weekdays)
                    })))
                }((r.showWeekdaysShort ? r.weekdaysShort : r.weekdaysFull).slice(0)),
                L = e(p(u, P(), m.holder)).on("click", J),
                A = {
                    40: 7,
                    38: -7,
                    39: 1,
                    37: -1
                };
            return new a.init
        };
    e.fn.pickadate = function(t) {
        var n = "pickadate";
        return t = e.extend(!0, {}, e.fn.pickadate.defaults, t), t.disablePicker ? this : this.each(function() {
            var r = e(this);
            this.nodeName == "INPUT" && !r.data(n) && r.data(n, new l(r, t))
        })
    }, e.fn.pickadate.defaults = {
        monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        monthPrev: "&#9664;",
        monthNext: "&#9654;",
        showMonthsFull: !0,
        showWeekdaysShort: !0,
        format: "d mmmm, yyyy",
        formatSubmit: !1,
        hiddenSuffix: "_submit",
        firstDay: 0,
        monthSelector: !1,
        yearSelector: !1,
        dateMin: !1,
        dateMax: !1,
        datesDisabled: !1,
        disablePicker: !1,
        onOpen: null,
        onClose: null,
        onSelect: null,
        onStart: null,
        klass: {
            inputFocus: a + "input--focused",
            holder: a + "holder",
            open: a + "holder--opened",
            calendar: a + "calendar",
            calendarWrap: a + "calendar--wrap",
            calendarTable: a + "calendar--table",
            calendarBody: a + "calendar--body",
            year: a + "year",
            yearWrap: a + "year--wrap",
            yearSelector: a + "year--selector",
            month: a + "month",
            monthWrap: a + "month--wrap",
            monthSelector: a + "month--selector",
            monthNav: a + "month--nav",
            monthPrev: a + "month--prev",
            monthNext: a + "month--next",
            week: a + "week",
            weekdays: a + "weekday",
            day: a + "day",
            dayDisabled: a + "day--disabled",
            daySelected: a + "day--selected",
            dayHighlighted: a + "day--highlighted",
            dayToday: a + "day--today",
            dayInfocus: a + "day--infocus",
            dayOutfocus: a + "day--outfocus"
        }
    }
}(jQuery, window, document), Date.CultureInfo = {
    name: "en-US",
    englishName: "English (United States)",
    nativeName: "English (United States)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },
    abbreviatedTimeZoneStandard: {
        GMT: "-000",
        EST: "-0400",
        CST: "-0500",
        MST: "-0600",
        PST: "-0700"
    },
    abbreviatedTimeZoneDST: {
        GMT: "-000",
        EDT: "-0500",
        CDT: "-0600",
        MDT: "-0700",
        PDT: "-0800"
    }
}, Date.getMonthNumberFromName = function(e) {
    var t = Date.CultureInfo.monthNames,
        n = Date.CultureInfo.abbreviatedMonthNames,
        r = e.toLowerCase();
    for (var i = 0; i < t.length; i++)
        if (t[i].toLowerCase() == r || n[i].toLowerCase() == r) return i;
    return -1
}, Date.getDayNumberFromName = function(e) {
    var t = Date.CultureInfo.dayNames,
        n = Date.CultureInfo.abbreviatedDayNames,
        r = Date.CultureInfo.shortestDayNames,
        i = e.toLowerCase();
    for (var s = 0; s < t.length; s++)
        if (t[s].toLowerCase() == i || n[s].toLowerCase() == i) return s;
    return -1
}, Date.isLeapYear = function(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
}, Date.getDaysInMonth = function(e, t) {
    return [31, Date.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
}, Date.getTimezoneOffset = function(e, t) {
    return t || !1 ? Date.CultureInfo.abbreviatedTimeZoneDST[e.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[e.toUpperCase()]
}, Date.getTimezoneAbbreviation = function(e, t) {
    var n = t || !1 ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard,
        r;
    for (r in n)
        if (n[r] === e) return r;
    return null
}, Date.prototype.clone = function() {
    return new Date(this.getTime())
}, Date.prototype.compareTo = function(e) {
    if (isNaN(this)) throw new Error(this);
    if (e instanceof Date && !isNaN(e)) return this > e ? 1 : this < e ? -1 : 0;
    throw new TypeError(e)
}, Date.prototype.equals = function(e) {
    return this.compareTo(e) === 0
}, Date.prototype.between = function(e, t) {
    var n = this.getTime();
    return n >= e.getTime() && n <= t.getTime()
}, Date.prototype.addMilliseconds = function(e) {
    return this.setMilliseconds(this.getMilliseconds() + e), this
}, Date.prototype.addSeconds = function(e) {
    return this.addMilliseconds(e * 1e3)
}, Date.prototype.addMinutes = function(e) {
    return this.addMilliseconds(e * 6e4)
}, Date.prototype.addHours = function(e) {
    return this.addMilliseconds(e * 36e5)
}, Date.prototype.addDays = function(e) {
    return this.addMilliseconds(e * 864e5)
}, Date.prototype.addWeeks = function(e) {
    return this.addMilliseconds(e * 6048e5)
}, Date.prototype.addMonths = function(e) {
    var t = this.getDate();
    return this.setDate(1), this.setMonth(this.getMonth() + e), this.setDate(Math.min(t, this.getDaysInMonth())), this
}, Date.prototype.addYears = function(e) {
    return this.addMonths(e * 12)
}, Date.prototype.add = function(e) {
    if (typeof e == "number") return this._orient = e, this;
    var t = e;
    return (t.millisecond || t.milliseconds) && this.addMilliseconds(t.millisecond || t.milliseconds), (t.second || t.seconds) && this.addSeconds(t.second || t.seconds), (t.minute || t.minutes) && this.addMinutes(t.minute || t.minutes), (t.hour || t.hours) && this.addHours(t.hour || t.hours), (t.month || t.months) && this.addMonths(t.month || t.months), (t.year || t.years) && this.addYears(t.year || t.years), (t.day || t.days) && this.addDays(t.day || t.days), this
}, Date._validate = function(e, t, n, r) {
    if (typeof e != "number") throw new TypeError(e + " is not a Number.");
    if (e < t || e > n) throw new RangeError(e + " is not a valid value for " + r + ".");
    return !0
}, Date.validateMillisecond = function(e) {
    return Date._validate(e, 0, 999, "milliseconds")
}, Date.validateSecond = function(e) {
    return Date._validate(e, 0, 59, "seconds")
}, Date.validateMinute = function(e) {
    return Date._validate(e, 0, 59, "minutes")
}, Date.validateHour = function(e) {
    return Date._validate(e, 0, 23, "hours")
}, Date.validateDay = function(e, t, n) {
    return Date._validate(e, 1, Date.getDaysInMonth(t, n), "days")
}, Date.validateMonth = function(e) {
    return Date._validate(e, 0, 11, "months")
}, Date.validateYear = function(e) {
    return Date._validate(e, 1, 9999, "seconds")
}, Date.prototype.set = function(e) {
    var t = e;
    return !t.millisecond && t.millisecond !== 0 && (t.millisecond = -1), !t.second && t.second !== 0 && (t.second = -1), !t.minute && t.minute !== 0 && (t.minute = -1), !t.hour && t.hour !== 0 && (t.hour = -1), !t.day && t.day !== 0 && (t.day = -1), !t.month && t.month !== 0 && (t.month = -1), !t.year && t.year !== 0 && (t.year = -1), t.millisecond != -1 && Date.validateMillisecond(t.millisecond) && this.addMilliseconds(t.millisecond - this.getMilliseconds()), t.second != -1 && Date.validateSecond(t.second) && this.addSeconds(t.second - this.getSeconds()), t.minute != -1 && Date.validateMinute(t.minute) && this.addMinutes(t.minute - this.getMinutes()), t.hour != -1 && Date.validateHour(t.hour) && this.addHours(t.hour - this.getHours()), t.month !== -1 && Date.validateMonth(t.month) && this.addMonths(t.month - this.getMonth()), t.year != -1 && Date.validateYear(t.year) && this.addYears(t.year - this.getFullYear()), t.day != -1 && Date.validateDay(t.day, this.getFullYear(), this.getMonth()) && this.addDays(t.day - this.getDate()), t.timezone && this.setTimezone(t.timezone), t.timezoneOffset && this.setTimezoneOffset(t.timezoneOffset), this
}, Date.prototype.clearTime = function() {
    return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), this
}, Date.prototype.isLeapYear = function() {
    var e = this.getFullYear();
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
}, Date.prototype.isWeekday = function() {
    return !this.is().sat() && !this.is().sun()
}, Date.prototype.getDaysInMonth = function() {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
}, Date.prototype.moveToFirstDayOfMonth = function() {
    return this.set({
        day: 1
    })
}, Date.prototype.moveToLastDayOfMonth = function() {
    return this.set({
        day: this.getDaysInMonth()
    })
}, Date.prototype.moveToDayOfWeek = function(e, t) {
    var n = (e - this.getDay() + 7 * (t || 1)) % 7;
    return this.addDays(n === 0 ? n += 7 * (t || 1) : n)
}, Date.prototype.moveToMonth = function(e, t) {
    var n = (e - this.getMonth() + 12 * (t || 1)) % 12;
    return this.addMonths(n === 0 ? n += 12 * (t || 1) : n)
}, Date.prototype.getDayOfYear = function() {
    return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 864e5)
}, Date.prototype.getWeekOfYear = function(e) {
    var t = this.getFullYear(),
        n = this.getMonth(),
        r = this.getDate(),
        i = e || Date.CultureInfo.firstDayOfWeek,
        s = 8 - (new Date(t, 0, 1)).getDay();
    s == 8 && (s = 1);
    var o = (Date.UTC(t, n, r, 0, 0, 0) - Date.UTC(t, 0, 1, 0, 0, 0)) / 864e5 + 1,
        u = Math.floor((o - s + 7) / 7);
    if (u === i) {
        t--;
        var a = 8 - (new Date(t, 0, 1)).getDay();
        a == 2 || a == 8 ? u = 53 : u = 52
    }
    return u
}, Date.prototype.isDST = function() {
    return console.log("isDST"), this.toString().match(/(E|C|M|P)(S|D)T/)[2] == "D"
}, Date.prototype.getTimezone = function() {
    return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST())
}, Date.prototype.setTimezoneOffset = function(e) {
    var t = this.getTimezoneOffset(),
        n = Number(e) * -6 / 10;
    return this.addMinutes(n - t), this
}, Date.prototype.setTimezone = function(e) {
    return this.setTimezoneOffset(Date.getTimezoneOffset(e))
}, Date.prototype.getUTCOffset = function() {
    var e = this.getTimezoneOffset() * -10 / 6,
        t;
    return e < 0 ? (t = (e - 1e4).toString(), t[0] + t.substr(2)) : (t = (e + 1e4).toString(), "+" + t.substr(1))
}, Date.prototype.getDayName = function(e) {
    return e ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()]
}, Date.prototype.getMonthName = function(e) {
    return e ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()]
}, Date.prototype._toString = Date.prototype.toString, Date.prototype.toString = function(e) {
    var t = this,
        n = function(t) {
            return t.toString().length == 1 ? "0" + t : t
        };
    return e ? e.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, function(e) {
        switch (e) {
            case "hh":
                return n(t.getHours() < 13 ? t.getHours() : t.getHours() - 12);
            case "h":
                return t.getHours() < 13 ? t.getHours() : t.getHours() - 12;
            case "HH":
                return n(t.getHours());
            case "H":
                return t.getHours();
            case "mm":
                return n(t.getMinutes());
            case "m":
                return t.getMinutes();
            case "ss":
                return n(t.getSeconds());
            case "s":
                return t.getSeconds();
            case "yyyy":
                return t.getFullYear();
            case "yy":
                return t.getFullYear().toString().substring(2, 4);
            case "dddd":
                return t.getDayName();
            case "ddd":
                return t.getDayName(!0);
            case "dd":
                return n(t.getDate());
            case "d":
                return t.getDate().toString();
            case "MMMM":
                return t.getMonthName();
            case "MMM":
                return t.getMonthName(!0);
            case "MM":
                return n(t.getMonth() + 1);
            case "M":
                return t.getMonth() + 1;
            case "t":
                return t.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
            case "tt":
                return t.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
            case "zzz":
            case "zz":
            case "z":
                return ""
        }
    }) : this._toString()
}, Date.now = function() {
    return new Date
}, Date.today = function() {
    return Date.now().clearTime()
}, Date.prototype._orient = 1, Date.prototype.next = function() {
    return this._orient = 1, this
}, Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function() {
    return this._orient = -1, this
}, Date.prototype._is = !1, Date.prototype.is = function() {
    return this._is = !0, this
}, Number.prototype._dateElement = "day", Number.prototype.fromNow = function() {
    var e = {};
    return e[this._dateElement] = this, Date.now().add(e)
}, Number.prototype.ago = function() {
    var e = {};
    return e[this._dateElement] = this * -1, Date.now().add(e)
},
function() {
    var e = Date.prototype,
        t = Number.prototype,
        n = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/),
        r = "january february march april may june july august september october november december".split(/\s/),
        i = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/),
        s, o = function(e) {
            return function() {
                return this._is ? (this._is = !1, this.getDay() == e) : this.moveToDayOfWeek(e, this._orient)
            }
        };
    for (var u = 0; u < n.length; u++) e[n[u]] = e[n[u].substring(0, 3)] = o(u);
    var a = function(e) {
        return function() {
            return this._is ? (this._is = !1, this.getMonth() === e) : this.moveToMonth(e, this._orient)
        }
    };
    for (var f = 0; f < r.length; f++) e[r[f]] = e[r[f].substring(0, 3)] = a(f);
    var l = function(e) {
        return function() {
            return e.substring(e.length - 1) != "s" && (e += "s"), this["add" + e](this._orient)
        }
    }, c = function(e) {
            return function() {
                return this._dateElement = e, this
            }
        };
    for (var h = 0; h < i.length; h++) s = i[h].toLowerCase(), e[s] = e[s + "s"] = l(i[h]), t[s] = t[s + "s"] = c(s)
}(), Date.prototype.toJSONString = function() {
    return this.toString("yyyy-MM-ddThh:mm:ssZ")
}, Date.prototype.toShortDateString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern)
}, Date.prototype.toLongDateString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.longDatePattern)
}, Date.prototype.toShortTimeString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern)
}, Date.prototype.toLongTimeString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.longTimePattern)
}, Date.prototype.getOrdinal = function() {
    switch (this.getDate()) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th"
    }
},
function() {
    Date.Parsing = {
        Exception: function(e) {
            this.message = "Parse error at '" + e.substring(0, 10) + " ...'"
        }
    };
    var e = Date.Parsing,
        t = e.Operators = {
            rtoken: function(t) {
                return function(n) {
                    var i = n.match(t);
                    if (i) return [i[0], n.substring(i[0].length)];
                    throw new e.Exception(n)
                }
            },
            token: function(e) {
                return function(e) {
                    return t.rtoken(new RegExp("^s*" + e + "s*"))(e)
                }
            },
            stoken: function(e) {
                return t.rtoken(new RegExp("^" + e))
            },
            until: function(e) {
                return function(t) {
                    var n = [],
                        r = null;
                    while (t.length) {
                        try {
                            r = e.call(this, t)
                        } catch (i) {
                            n.push(r[0]), t = r[1];
                            continue
                        }
                        break
                    }
                    return [n, t]
                }
            },
            many: function(e) {
                return function(t) {
                    var n = [],
                        r = null;
                    while (t.length) {
                        try {
                            r = e.call(this, t)
                        } catch (i) {
                            return [n, t]
                        }
                        n.push(r[0]), t = r[1]
                    }
                    return [n, t]
                }
            },
            optional: function(e) {
                return function(t) {
                    var n = null;
                    try {
                        n = e.call(this, t)
                    } catch (r) {
                        return [null, t]
                    }
                    return [n[0], n[1]]
                }
            },
            not: function(t) {
                return function(n) {
                    try {
                        t.call(this, n)
                    } catch (r) {
                        return [null, n]
                    }
                    throw new e.Exception(n)
                }
            },
            ignore: function(e) {
                return e ? function(t) {
                    var n = null;
                    return n = e.call(this, t), [null, n[1]]
                } : null
            },
            product: function() {
                var e = arguments[0],
                    n = Array.prototype.slice.call(arguments, 1),
                    r = [];
                for (var i = 0; i < e.length; i++) r.push(t.each(e[i], n));
                return r
            },
            cache: function(t) {
                var n = {}, r = null;
                return function(i) {
                    try {
                        r = n[i] = n[i] || t.call(this, i)
                    } catch (s) {
                        r = n[i] = s
                    }
                    if (r instanceof e.Exception) throw r;
                    return r
                }
            },
            any: function() {
                var t = arguments;
                return function(n) {
                    var r = null;
                    for (var i = 0; i < t.length; i++) {
                        if (t[i] == null) continue;
                        try {
                            r = t[i].call(this, n)
                        } catch (s) {
                            r = null
                        }
                        if (r) return r
                    }
                    throw new e.Exception(n)
                }
            },
            each: function() {
                var t = arguments;
                return function(n) {
                    var r = [],
                        i = null;
                    for (var s = 0; s < t.length; s++) {
                        if (t[s] == null) continue;
                        try {
                            i = t[s].call(this, n)
                        } catch (o) {
                            throw new e.Exception(n)
                        }
                        r.push(i[0]), n = i[1]
                    }
                    return [r, n]
                }
            },
            all: function() {
                var e = arguments,
                    t = t;
                return t.each(t.optional(e))
            },
            sequence: function(n, r, i) {
                return r = r || t.rtoken(/^\s*/), i = i || null, n.length == 1 ? n[0] : function(t) {
                    var s = null,
                        o = null,
                        u = [];
                    for (var a = 0; a < n.length; a++) {
                        try {
                            s = n[a].call(this, t)
                        } catch (f) {
                            break
                        }
                        u.push(s[0]);
                        try {
                            o = r.call(this, s[1])
                        } catch (l) {
                            o = null;
                            break
                        }
                        t = o[1]
                    }
                    if (!s) throw new e.Exception(t);
                    if (o) throw new e.Exception(o[1]);
                    if (i) try {
                        s = i.call(this, s[1])
                    } catch (h) {
                        throw new e.Exception(s[1])
                    }
                    return [u, s ? s[1] : t]
                }
            },
            between: function(e, n, i) {
                i = i || e;
                var s = t.each(t.ignore(e), n, t.ignore(i));
                return function(e) {
                    var t = s.call(this, e);
                    return [[t[0][0], r[0][2]], t[1]]
                }
            },
            list: function(e, n, r) {
                return n = n || t.rtoken(/^\s*/), r = r || null, e instanceof Array ? t.each(t.product(e.slice(0, -1), t.ignore(n)), e.slice(-1), t.ignore(r)) : t.each(t.many(t.each(e, t.ignore(n))), px, t.ignore(r))
            },
            set: function(n, r, i) {
                return r = r || t.rtoken(/^\s*/), i = i || null,
                function(s) {
                    var o = null,
                        u = null,
                        a = null,
                        f = null,
                        l = [
                            [], s
                        ],
                        h = !1;
                    for (var p = 0; p < n.length; p++) {
                        a = null, u = null, o = null, h = n.length == 1;
                        try {
                            o = n[p].call(this, s)
                        } catch (v) {
                            continue
                        }
                        f = [
                            [o[0]], o[1]
                        ];
                        if (o[1].length > 0 && !h) try {
                            a = r.call(this, o[1])
                        } catch (m) {
                            h = !0
                        } else h = !0;
                        !h && a[1].length === 0 && (h = !0);
                        if (!h) {
                            var g = [];
                            for (var y = 0; y < n.length; y++) p != y && g.push(n[y]);
                            u = t.set(g, r).call(this, a[1]), u[0].length > 0 && (f[0] = f[0].concat(u[0]), f[1] = u[1])
                        }
                        f[1].length < l[1].length && (l = f);
                        if (l[1].length === 0) break
                    }
                    if (l[0].length === 0) return l;
                    if (i) {
                        try {
                            a = i.call(this, l[1])
                        } catch (b) {
                            throw new e.Exception(l[1])
                        }
                        l[1] = a[1]
                    }
                    return l
                }
            },
            forward: function(e, t) {
                return function(n) {
                    return e[t].call(this, n)
                }
            },
            replace: function(e, t) {
                return function(n) {
                    var r = e.call(this, n);
                    return [t, r[1]]
                }
            },
            process: function(e, t) {
                return function(n) {
                    var r = e.call(this, n);
                    return [t.call(this, r[0]), r[1]]
                }
            },
            min: function(t, n) {
                return function(r) {
                    var i = n.call(this, r);
                    if (i[0].length < t) throw new e.Exception(r);
                    return i
                }
            }
        }, n = function(e) {
            return function() {
                var t = null,
                    n = [];
                arguments.length > 1 ? t = Array.prototype.slice.call(arguments) : arguments[0] instanceof Array && (t = arguments[0]);
                if (!t) return e.apply(null, arguments);
                for (var r = 0, i = t.shift(); r < i.length; r++) return t.unshift(i[r]), n.push(e.apply(null, t)), t.shift(), n
            }
        }, i = "optional not ignore cache".split(/\s/);
    for (var s = 0; s < i.length; s++) t[i[s]] = n(t[i[s]]);
    var o = function(e) {
        return function() {
            return arguments[0] instanceof Array ? e.apply(null, arguments[0]) : e.apply(null, arguments)
        }
    }, u = "each any all".split(/\s/);
    for (var a = 0; a < u.length; a++) t[u[a]] = o(t[u[a]])
}(),
function() {
    var e = function(t) {
        var n = [];
        for (var r = 0; r < t.length; r++) t[r] instanceof Array ? n = n.concat(e(t[r])) : t[r] && n.push(t[r]);
        return n
    };
    Date.Grammar = {}, Date.Translator = {
        hour: function(e) {
            return function() {
                this.hour = Number(e)
            }
        },
        minute: function(e) {
            return function() {
                this.minute = Number(e)
            }
        },
        second: function(e) {
            return function() {
                this.second = Number(e)
            }
        },
        meridian: function(e) {
            return function() {
                this.meridian = e.slice(0, 1).toLowerCase()
            }
        },
        timezone: function(e) {
            return function() {
                var t = e.replace(/[^\d\+\-]/g, "");
                t.length ? this.timezoneOffset = Number(t) : this.timezone = e.toLowerCase()
            }
        },
        day: function(e) {
            var t = e[0];
            return function() {
                this.day = Number(t.match(/\d+/)[0])
            }
        },
        month: function(e) {
            return function() {
                this.month = e.length == 3 ? Date.getMonthNumberFromName(e) : Number(e) - 1
            }
        },
        year: function(e) {
            return function() {
                var t = Number(e);
                this.year = e.length > 2 ? t : t + (t + 2e3 < Date.CultureInfo.twoDigitYearMax ? 2e3 : 1900)
            }
        },
        rday: function(e) {
            return function() {
                switch (e) {
                    case "yesterday":
                        this.days = -1;
                        break;
                    case "tomorrow":
                        this.days = 1;
                        break;
                    case "today":
                        this.days = 0;
                        break;
                    case "now":
                        this.days = 0, this.now = !0
                }
            }
        },
        finishExact: function(e) {
            e = e instanceof Array ? e : [e];
            var t = new Date;
            this.year = t.getFullYear(), this.month = t.getMonth(), this.day = 1, this.hour = 0, this.minute = 0, this.second = 0;
            for (var n = 0; n < e.length; n++) e[n] && e[n].call(this);
            this.hour = this.meridian == "p" && this.hour < 13 ? this.hour + 12 : this.hour;
            if (this.day > Date.getDaysInMonth(this.year, this.month)) throw new RangeError(this.day + " is not a valid value for days.");
            var r = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
            return this.timezone ? r.set({
                timezone: this.timezone
            }) : this.timezoneOffset && r.set({
                timezoneOffset: this.timezoneOffset
            }), r
        },
        finish: function(t) {
            t = t instanceof Array ? e(t) : [t];
            if (t.length === 0) return null;
            for (var n = 0; n < t.length; n++) typeof t[n] == "function" && t[n].call(this);
            if (this.now) return new Date;
            var r = Date.today(),
                i = null,
                s = this.days != null || !! this.orient || !! this.operator;
            if (s) {
                var o, u, a;
                a = this.orient == "past" || this.operator == "subtract" ? -1 : 1, this.weekday && (this.unit = "day", o = Date.getDayNumberFromName(this.weekday) - r.getDay(), u = 7, this.days = o ? (o + a * u) % u : a * u), this.month && (this.unit = "month", o = this.month - r.getMonth(), u = 12, this.months = o ? (o + a * u) % u : a * u, this.month = null), this.unit || (this.unit = "day");
                if (this[this.unit + "s"] == null || this.operator != null) this.value || (this.value = 1), this.unit == "week" && (this.unit = "day", this.value = this.value * 7), this[this.unit + "s"] = this.value * a;
                return r.add(this)
            }
            return this.meridian && this.hour && (this.hour = this.hour < 13 && this.meridian == "p" ? this.hour + 12 : this.hour), this.weekday && !this.day && (this.day = r.addDays(Date.getDayNumberFromName(this.weekday) - r.getDay()).getDate()), this.month && !this.day && (this.day = 1), r.set(this)
        }
    };
    var t = Date.Parsing.Operators,
        n = Date.Grammar,
        r = Date.Translator,
        i;
    n.datePartDelimiter = t.rtoken(/^([\s\-\.\,\/\x27]+)/), n.timePartDelimiter = t.stoken(":"), n.whiteSpace = t.rtoken(/^\s*/), n.generalDelimiter = t.rtoken(/^(([\s\,]|at|on)+)/);
    var s = {};
    n.ctoken = function(e) {
        var n = s[e];
        if (!n) {
            var r = Date.CultureInfo.regexPatterns,
                i = e.split(/\s+/),
                o = [];
            for (var u = 0; u < i.length; u++) o.push(t.replace(t.rtoken(r[i[u]]), i[u]));
            n = s[e] = t.any.apply(null, o)
        }
        return n
    }, n.ctoken2 = function(e) {
        return t.rtoken(Date.CultureInfo.regexPatterns[e])
    }, n.h = t.cache(t.process(t.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), r.hour)), n.hh = t.cache(t.process(t.rtoken(/^(0[0-9]|1[0-2])/), r.hour)), n.H = t.cache(t.process(t.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), r.hour)), n.HH = t.cache(t.process(t.rtoken(/^([0-1][0-9]|2[0-3])/), r.hour)), n.m = t.cache(t.process(t.rtoken(/^([0-5][0-9]|[0-9])/), r.minute)), n.mm = t.cache(t.process(t.rtoken(/^[0-5][0-9]/), r.minute)), n.s = t.cache(t.process(t.rtoken(/^([0-5][0-9]|[0-9])/), r.second)), n.ss = t.cache(t.process(t.rtoken(/^[0-5][0-9]/), r.second)), n.hms = t.cache(t.sequence([n.H, n.mm, n.ss], n.timePartDelimiter)), n.t = t.cache(t.process(n.ctoken2("shortMeridian"), r.meridian)), n.tt = t.cache(t.process(n.ctoken2("longMeridian"), r.meridian)), n.z = t.cache(t.process(t.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), r.timezone)), n.zz = t.cache(t.process(t.rtoken(/^(\+|\-)\s*\d\d\d\d/), r.timezone)), n.zzz = t.cache(t.process(n.ctoken2("timezone"), r.timezone)), n.timeSuffix = t.each(t.ignore(n.whiteSpace), t.set([n.tt, n.zzz])), n.time = t.each(t.optional(t.ignore(t.stoken("T"))), n.hms, n.timeSuffix), n.d = t.cache(t.process(t.each(t.rtoken(/^([0-2]\d|3[0-1]|\d)/), t.optional(n.ctoken2("ordinalSuffix"))), r.day)), n.dd = t.cache(t.process(t.each(t.rtoken(/^([0-2]\d|3[0-1])/), t.optional(n.ctoken2("ordinalSuffix"))), r.day)), n.ddd = n.dddd = t.cache(t.process(n.ctoken("sun mon tue wed thu fri sat"), function(e) {
        return function() {
            this.weekday = e
        }
    })), n.M = t.cache(t.process(t.rtoken(/^(1[0-2]|0\d|\d)/), r.month)), n.MM = t.cache(t.process(t.rtoken(/^(1[0-2]|0\d)/), r.month)), n.MMM = n.MMMM = t.cache(t.process(n.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), r.month)), n.y = t.cache(t.process(t.rtoken(/^(\d\d?)/), r.year)), n.yy = t.cache(t.process(t.rtoken(/^(\d\d)/), r.year)), n.yyy = t.cache(t.process(t.rtoken(/^(\d\d?\d?\d?)/), r.year)), n.yyyy = t.cache(t.process(t.rtoken(/^(\d\d\d\d)/), r.year)), i = function() {
        return t.each(t.any.apply(null, arguments), t.not(n.ctoken2("timeContext")))
    }, n.day = i(n.d, n.dd), n.month = i(n.M, n.MMM), n.year = i(n.yyyy, n.yy), n.orientation = t.process(n.ctoken("past future"), function(e) {
        return function() {
            this.orient = e
        }
    }), n.operator = t.process(n.ctoken("add subtract"), function(e) {
        return function() {
            this.operator = e
        }
    }), n.rday = t.process(n.ctoken("yesterday tomorrow today now"), r.rday), n.unit = t.process(n.ctoken("minute hour day week month year"), function(e) {
        return function() {
            this.unit = e
        }
    }), n.value = t.process(t.rtoken(/^\d\d?(st|nd|rd|th)?/), function(e) {
        return function() {
            this.value = e.replace(/\D/g, "")
        }
    }), n.expression = t.set([n.rday, n.operator, n.value, n.unit, n.orientation, n.ddd, n.MMM]), i = function() {
        return t.set(arguments, n.datePartDelimiter)
    }, n.mdy = i(n.ddd, n.month, n.day, n.year), n.ymd = i(n.ddd, n.year, n.month, n.day), n.dmy = i(n.ddd, n.day, n.month, n.year), n.date = function(e) {
        return (n[Date.CultureInfo.dateElementOrder] || n.mdy).call(this, e)
    }, n.format = t.process(t.many(t.any(t.process(t.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(e) {
        if (n[e]) return n[e];
        throw Date.Parsing.Exception(e)
    }), t.process(t.rtoken(/^[^dMyhHmstz]+/), function(e) {
        return t.ignore(t.stoken(e))
    }))), function(e) {
        return t.process(t.each.apply(null, e), r.finishExact)
    });
    var o = {}, u = function(e) {
            return o[e] = o[e] || n.format(e)[0]
        };
    n.formats = function(e) {
        if (e instanceof Array) {
            var n = [];
            for (var r = 0; r < e.length; r++) n.push(u(e[r]));
            return t.any.apply(null, n)
        }
        return u(e)
    }, n._formats = n.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]), n._start = t.process(t.set([n.date, n.time, n.expression], n.generalDelimiter, n.whiteSpace), r.finish), n.start = function(e) {
        try {
            var t = n._formats.call({}, e);
            if (t[1].length === 0) return t
        } catch (r) {}
        return n._start.call({}, e)
    }
}(), Date._parse = Date.parse, Date.parseFancy = function(e) {
    var t = null;
    if (!e) return null;
    try {
        t = Date.Grammar.start.call({}, e)
    } catch (n) {
        return null
    }
    return t[1].length === 0 ? t[0] : null
}, Date.getParseFunction = function(e) {
    var t = Date.Grammar.formats(e);
    return function(e) {
        var n = null;
        try {
            n = t.call({}, e)
        } catch (r) {
            return null
        }
        return n[1].length === 0 ? n[0] : null
    }
}, Date.parseExact = function(e, t) {
    return Date.getParseFunction(t)(e)
}, FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
        case "button":
        case "input":
            if (this.deviceIsIOS && e.type === "file") return !0;
            return e.disabled;
        case "label":
        case "video":
            return !0;
        default:
            return /\bneedsclick\b/.test(e.className)
    }
}, FastClick.prototype.needsFocus = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
        case "textarea":
        case "select":
            return !0;
        case "input":
            switch (e.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !e.disabled && !e.readOnly;
        default:
            return /\bneedsfocus\b/.test(e.className)
    }
}, FastClick.prototype.sendClick = function(e, t) {
    "use strict";
    var n, r;
    document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent("click", !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
}, FastClick.prototype.focus = function(e) {
    "use strict";
    var t;
    this.deviceIsIOS && e.setSelectionRange ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
}, FastClick.prototype.updateScrollParent = function(e) {
    "use strict";
    var t, n;
    t = e.fastClickScrollParent;
    if (!t || !t.contains(e)) {
        n = e;
        do {
            if (n.scrollHeight > n.offsetHeight) {
                t = n, e.fastClickScrollParent = n;
                break
            }
            n = n.parentElement
        } while (n)
    }
    t && (t.fastClickLastScrollTop = t.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
    "use strict";
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
}, FastClick.prototype.onTouchStart = function(e) {
    "use strict";
    var t, n, r;
    t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0];
    if (this.deviceIsIOS) {
        r = window.getSelection();
        if (r.rangeCount && !r.isCollapsed) return !0;
        if (!this.deviceIsIOS4) {
            if (n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
            this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
        }
    }
    return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < 200 && e.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function(e) {
    "use strict";
    var t = e.changedTouches[0];
    return Math.abs(t.pageX - this.touchStartX) > 10 || Math.abs(t.pageY - this.touchStartY) > 10 ? !0 : !1
}, FastClick.prototype.findControl = function(e) {
    "use strict";
    return e.control !== undefined ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function(e) {
    "use strict";
    var t, n, r, i, s, o = this.targetElement;
    this.touchHasMoved(e) && (this.trackingClick = !1, this.targetElement = null);
    if (!this.trackingClick) return !0;
    if (e.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
    this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (s = e.changedTouches[0], o = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset)), r = o.tagName.toLowerCase();
    if (r === "label") {
        t = this.findControl(o);
        if (t) {
            this.focus(o);
            if (this.deviceIsAndroid) return !1;
            o = t
        }
    } else if (this.needsFocus(o)) {
        if (e.timeStamp - n > 100 || this.deviceIsIOS && window.top !== window && r === "input") return this.targetElement = null, !1;
        this.focus(o);
        if (!this.deviceIsIOS4 || r !== "select") this.targetElement = null, e.preventDefault();
        return !1
    }
    if (this.deviceIsIOS && !this.deviceIsIOS4) {
        i = o.fastClickScrollParent;
        if (i && i.fastClickLastScrollTop !== i.scrollTop) return !0
    }
    return this.needsClick(o) || (e.preventDefault(), this.sendClick(o, e)), !1
}, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function(e) {
    "use strict";
    return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0 : !0
}, FastClick.prototype.onClick = function(e) {
    "use strict";
    var t;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : e.target.type === "submit" && e.detail === 0 ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
}, FastClick.prototype.destroy = function() {
    "use strict";
    var e = this.layer;
    this.deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.attach = function(e) {
    "use strict";
    return new FastClick(e)
}, typeof define != "undefined" && define.amd && define(function() {
    "use strict";
    return FastClick
}), typeof module != "undefined" && module.exports && (module.exports = FastClick.attach, module.exports.FastClick = FastClick);
var Skycons;
(function(e) {
    "use strict";

    function u(e, t, n, r) {
        e.beginPath(), e.arc(t, n, r, 0, s, !1), e.fill()
    }

    function a(e, t, n, r, i) {
        e.beginPath(), e.moveTo(t, n), e.lineTo(r, i), e.stroke()
    }

    function f(e, t, n, r, i, o, a, f) {
        var l = Math.cos(t * s),
            c = Math.sin(t * s);
        f -= a, u(e, n - c * i, r + l * o + f * .5, a + (1 - l * .5) * f)
    }

    function l(e, t, n, r, i, s, o, u) {
        var a;
        for (a = 5; a--;) f(e, t + a / 5, n, r, i, s, o, u)
    }

    function c(e, t, n, r, i, s, o) {
        t /= 3e4;
        var u = i * .21,
            a = i * .12,
            f = i * .24,
            c = i * .28;
        e.fillStyle = o, l(e, t, n, r, u, a, f, c), e.globalCompositeOperation = "destination-out", l(e, t, n, r, u, a, f - s, c - s), e.globalCompositeOperation = "source-over"
    }

    function h(e, t, n, r, i, o, u) {
        t /= 12e4;
        var f = i * .25 - o * .5,
            l = i * .32 + o * .5,
            c = i * .5 - o * .5,
            h, p, d, v;
        e.strokeStyle = u, e.lineWidth = o, e.lineCap = "round", e.lineJoin = "round", e.beginPath(), e.arc(n, r, f, 0, s, !1), e.stroke();
        for (h = 8; h--;) p = (t + h / 8) * s, d = Math.cos(p), v = Math.sin(p), a(e, n + d * l, r + v * l, n + d * c, r + v * c)
    }

    function p(e, t, n, r, i, u, a) {
        t /= 15e3;
        var f = i * .29 - u * .5,
            l = i * .05,
            c = Math.cos(t * s),
            h = c * s / -16;
        e.strokeStyle = a, e.lineWidth = u, e.lineCap = "round", e.lineJoin = "round", n += c * l, e.beginPath(), e.arc(n, r, f, h + s / 8, h + s * 7 / 8, !1), e.arc(n + Math.cos(h) * f * o, r + Math.sin(h) * f * o, f, h + s * 5 / 8, h + s * 3 / 8, !0), e.closePath(), e.stroke()
    }

    function d(e, t, n, r, i, o, u) {
        t /= 1350;
        var a = i * .16,
            f = s * 11 / 12,
            l = s * 7 / 12,
            c, h, p, d;
        e.fillStyle = u;
        for (c = 4; c--;) h = (t + c / 4) % 1, p = n + (c - 1.5) / 1.5 * (c === 1 || c === 2 ? -1 : 1) * a, d = r + h * h * i, e.beginPath(), e.moveTo(p, d - o * 1.5), e.arc(p, d, o * .75, f, l, !1), e.fill()
    }

    function v(e, t, n, r, i, o, u) {
        t /= 750;
        var f = i * .1875,
            l = s * 11 / 12,
            c = s * 7 / 12,
            h, p, d, v;
        e.strokeStyle = u, e.lineWidth = o * .5, e.lineCap = "round", e.lineJoin = "round";
        for (h = 4; h--;) p = (t + h / 4) % 1, d = Math.floor(n + (h - 1.5) / 1.5 * (h === 1 || h === 2 ? -1 : 1) * f) + .5, v = r + p * i, a(e, d, v - o * 1.5, d, v + o * 1.5)
    }

    function m(e, t, n, r, i, o, u) {
        t /= 3e3;
        var f = i * .16,
            l = o * .75,
            c = t * s * .7,
            h = Math.cos(c) * l,
            p = Math.sin(c) * l,
            d = c + s / 3,
            v = Math.cos(d) * l,
            m = Math.sin(d) * l,
            g = c + s * 2 / 3,
            y = Math.cos(g) * l,
            b = Math.sin(g) * l,
            w, E, S, x;
        e.strokeStyle = u, e.lineWidth = o * .5, e.lineCap = "round", e.lineJoin = "round";
        for (w = 4; w--;) E = (t + w / 4) % 1, S = n + Math.sin((E + w / 4) * s) * f, x = r + E * i, a(e, S - h, x - p, S + h, x + p), a(e, S - v, x - m, S + v, x + m), a(e, S - y, x - b, S + y, x + b)
    }

    function g(e, t, n, r, i, s, o) {
        t /= 3e4;
        var u = i * .21,
            a = i * .06,
            f = i * .21,
            c = i * .28;
        e.fillStyle = o, l(e, t, n, r, u, a, f, c), e.globalCompositeOperation = "destination-out", l(e, t, n, r, u, a, f - s, c - s), e.globalCompositeOperation = "source-over"
    }

    function w(e, t, n, r, i, o, u) {
        var a = i / 8,
            f = a / 3,
            l = 2 * f,
            c = t % 1 * s,
            h = Math.cos(c),
            p = Math.sin(c);
        e.fillStyle = u, e.strokeStyle = u, e.lineWidth = o, e.lineCap = "round", e.lineJoin = "round", e.beginPath(), e.arc(n, r, a, c, c + Math.PI, !1), e.arc(n - f * h, r - f * p, l, c + Math.PI, c, !1), e.arc(n + l * h, r + l * p, f, c + Math.PI, c, !0), e.globalCompositeOperation = "destination-out", e.fill(), e.globalCompositeOperation = "source-over", e.stroke()
    }

    function E(e, t, n, r, i, s, o, u, a) {
        t /= 2500;
        var f = y[o],
            l = (t + o - b[o].start) % u,
            c = (t + o - b[o].end) % u,
            h = (t + o) % u,
            p, d, v, m;
        e.strokeStyle = a, e.lineWidth = s, e.lineCap = "round", e.lineJoin = "round";
        if (l < 1) {
            e.beginPath(), l *= f.length / 2 - 1, p = Math.floor(l), l -= p, p *= 2, p += 2, e.moveTo(n + (f[p - 2] * (1 - l) + f[p] * l) * i, r + (f[p - 1] * (1 - l) + f[p + 1] * l) * i);
            if (c < 1) {
                c *= f.length / 2 - 1, d = Math.floor(c), c -= d, d *= 2, d += 2;
                for (m = p; m !== d; m += 2) e.lineTo(n + f[m] * i, r + f[m + 1] * i);
                e.lineTo(n + (f[d - 2] * (1 - c) + f[d] * c) * i, r + (f[d - 1] * (1 - c) + f[d + 1] * c) * i)
            } else
                for (m = p; m !== f.length; m += 2) e.lineTo(n + f[m] * i, r + f[m + 1] * i);
            e.stroke()
        } else if (c < 1) {
            e.beginPath(), c *= f.length / 2 - 1, d = Math.floor(c), c -= d, d *= 2, d += 2, e.moveTo(n + f[0] * i, r + f[1] * i);
            for (m = 2; m !== d; m += 2) e.lineTo(n + f[m] * i, r + f[m + 1] * i);
            e.lineTo(n + (f[d - 2] * (1 - c) + f[d] * c) * i, r + (f[d - 1] * (1 - c) + f[d + 1] * c) * i), e.stroke()
        }
        h < 1 && (h *= f.length / 2 - 1, v = Math.floor(h), h -= v, v *= 2, v += 2, w(e, t, n + (f[v - 2] * (1 - h) + f[v] * h) * i, r + (f[v - 1] * (1 - h) + f[v + 1] * h) * i, i, s, a))
    }
    var t, n;
    (function() {
        var r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame,
            i = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || e.msCancelAnimationFrame;
        r && i ? (t = function(e, t) {
            function i() {
                n.value = r(i), e()
            }
            var n = {
                value: null
            };
            return i(), n
        }, n = function(e) {
            i(e.value)
        }) : (t = setInterval, n = clearInterval)
    })();
    var r = 500,
        i = .08,
        s = 2 * Math.PI,
        o = 2 / Math.sqrt(2),
        y = [
            [-0.75, -0.18, -0.7219, -0.1527, -0.6971, -0.1225, -0.6739, -0.091, -0.6516, -0.0588, -0.6298, -0.0262, -0.6083, .0065, -0.5868, .0396, -0.5643, .0731, -0.5372, .1041, -0.5033, .1259, -0.4662, .1406, -0.4275, .1493, -0.3881, .153, -0.3487, .1526, -0.3095, .1488, -0.2708, .1421, -0.2319, .1342, -0.1943, .1217, -0.16, .1025, -0.129, .0785, -0.1012, .0509, -0.0764, .0206, -0.0547, -0.012, -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241, -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964, -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453, -0.229, -0.1085, -0.2327, -0.0697, -0.224, -0.0317, -0.2064, .0033, -0.1853, .0362, -0.1613, .0672, -0.135, .0961, -0.1051, .1213, -0.0706, .1397, -0.0332, .1512, .0053, .158, .0442, .1624, .0833, .1636, .1224, .1615, .1613, .1565, .1999, .15, .2378, .1402, .2749, .1279, .3118, .1147, .3487, .1015, .3858, .0892, .4236, .0787, .4621, .0715, .5012, .0702, .5398, .0766, .5768, .089, .6123, .1055, .6466, .1244, .6805, .144, .7147, .163, .75, .18],
            [-0.75, 0, -0.7033, .0195, -0.6569, .0399, -0.6104, .06, -0.5634, .0789, -0.5155, .0954, -0.4667, .1089, -0.4174, .1206, -0.3676, .1299, -0.3174, .1365, -0.2669, .1398, -0.2162, .1391, -0.1658, .1347, -0.1157, .1271, -0.0661, .1169, -0.017, .1046, .0316, .0903, .0791, .0728, .1259, .0534, .1723, .0331, .2188, .0129, .2656, -0.0064, .3122, -0.0263, .3586, -0.0466, .4052, -0.0665, .4525, -0.0847, .5007, -0.1002, .5497, -0.113, .5991, -0.124, .6491, -0.1325, .6994, -0.138, .75, -0.14]
        ],
        b = [{
            start: .36,
            end: .11
        }, {
            start: .56,
            end: .16
        }];
    Skycons = function(e) {
        this.list = [], this.interval = null, this.color = e && e.color ? e.color : "black", this.resizeClear = !! e && !! e.resizeClear
    }, Skycons.CLEAR_DAY = function(e, t, n) {
        var r = e.canvas.width,
            s = e.canvas.height,
            o = Math.min(r, s);
        h(e, t, r * .5, s * .5, o, o * i, n)
    }, Skycons.CLEAR_NIGHT = function(e, t, n) {
        var r = e.canvas.width,
            s = e.canvas.height,
            o = Math.min(r, s);
        p(e, t, r * .5, s * .5, o, o * i, n)
    }, Skycons.PARTLY_CLOUDY_DAY = function(e, t, n) {
        var r = e.canvas.width,
            s = e.canvas.height,
            o = Math.min(r, s);
        h(e, t, r * .625, s * .375, o * .75, o * i, n), c(e, t, r * .375, s * .625, o * .75, o * i, n)
    }, Skycons.PARTLY_CLOUDY_NIGHT = function(e, t, n) {
        var r = e.canvas.width,
            s = e.canvas.height,
            o = Math.min(r, s);
        p(e, t, r * .667, s * .375, o * .75, o * i, n), c(e, t, r * .375, s * .625, o * .75, o * i, n)
    }, Skycons.CLOUDY = function(e, t, n) {
        var r = e.canvas.width,
            s = e.canvas.height,
            o = Math.min(r, s);
        c(e, t, r * .5, s * .5, o, o * i, n)
    }, Skycons.RAIN = function(e, t, n) {
        var r = e.canvas.width,
            s = e.canvas.height,
            o = Math.min(r, s);
        d(e, t, r * .5, s * .37, o * .9, o * i, n), c(e, t, r * .5, s * .37, o * .9, o * i, n)
    }, Skycons.SLEET = function(e, t, n) {
        var r = e.canvas.width,
            s = e.canvas.height,
            o = Math.min(r, s);
        v(e, t, r * .5, s * .37, o * .9, o * i, n), c(e, t, r * .5, s * .37, o * .9, o * i, n)
    }, Skycons.SNOW = function(e, t, n) {
        var r = e.canvas.width,
            s = e.canvas.height,
            o = Math.min(r, s);
        m(e, t, r * .5, s * .37, o * .9, o * i, n), c(e, t, r * .5, s * .37, o * .9, o * i, n)
    }, Skycons.WIND = function(e, t, n) {
        var r = e.canvas.width,
            s = e.canvas.height,
            o = Math.min(r, s);
        E(e, t, r * .5, s * .5, o, o * i, 0, 2, n), E(e, t, r * .5, s * .5, o, o * i, 1, 2, n)
    }, Skycons.FOG = function(e, t, n) {
        var r = e.canvas.width,
            o = e.canvas.height,
            u = Math.min(r, o),
            f = u * i;
        g(e, t, r * .5, o * .32, u * .75, f, n), t /= 5e3;
        var l = Math.cos(t * s) * u * .02,
            c = Math.cos((t + .25) * s) * u * .02,
            h = Math.cos((t + .5) * s) * u * .02,
            p = Math.cos((t + .75) * s) * u * .02,
            d = o * .936,
            v = Math.floor(d - f * .5) + .5,
            m = Math.floor(d - f * 2.5) + .5;
        e.strokeStyle = n, e.lineWidth = f, e.lineCap = "round", e.lineJoin = "round", a(e, l + r * .2 + f * .5, v, c + r * .8 - f * .5, v), a(e, h + r * .2 + f * .5, m, p + r * .8 - f * .5, m)
    }, Skycons.prototype = {
        add: function(e, t) {
            var n;
            typeof e == "string" && (e = document.getElementById(e)), n = {
                element: e,
                context: e.getContext("2d"),
                drawing: t
            }, this.list.push(n), this.draw(n, r)
        },
        set: function(e, t) {
            var n;
            typeof e == "string" && (e = document.getElementById(e));
            for (n = this.list.length; n--;)
                if (this.list[n].element === e) {
                    this.list[n].drawing = t, this.draw(this.list[n], r);
                    return
                }
            this.add(e, t)
        },
        remove: function(e) {
            var t;
            typeof e == "string" && (e = document.getElementById(e));
            for (t = this.list.length; t--;)
                if (this.list[t].element === e) {
                    this.list.splice(t, 1);
                    return
                }
        },
        draw: function(e, t) {
            var n = e.context.canvas;
            this.resizeClear ? n.width = n.width : e.context.clearRect(0, 0, n.width, n.height), e.drawing(e.context, t, this.color)
        },
        play: function() {
            var e = this;
            this.pause(), this.interval = t(function() {
                var t = Date.now(),
                    n;
                for (n = e.list.length; n--;) e.draw(e.list[n], t)
            }, 1e3 / 60)
        },
        pause: function() {
            var e;
            this.interval && (n(this.interval), this.interval = null)
        }
    }
})(this),
function() {
    function e(e, t) {
        var n;
        e || (e = {});
        for (n in t) e[n] = t[n];
        return e
    }

    function t() {
        var e, t = arguments.length,
            n = {}, r = function(e, t) {
                var n, i;
                for (i in t) t.hasOwnProperty(i) && (n = t[i], typeof e != "object" && (e = {}), e[i] = n && typeof n == "object" && Object.prototype.toString.call(n) !== "[object Array]" && typeof n.nodeType != "number" ? r(e[i] || {}, n) : t[i]);
                return e
            };
        for (e = 0; e < t; e++) n = r(n, arguments[e]);
        return n
    }

    function n(e, t) {
        return parseInt(e, t || 10)
    }

    function r(e) {
        return typeof e == "string"
    }

    function i(e) {
        return typeof e == "object"
    }

    function s(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }

    function o(e) {
        return typeof e == "number"
    }

    function u(e) {
        return X.log(e) / X.LN10
    }

    function a(e) {
        return X.pow(10, e)
    }

    function f(e, t) {
        for (var n = e.length; n--;)
            if (e[n] === t) {
                e.splice(n, 1);
                break
            }
    }

    function l(e) {
        return e !== U && e !== null
    }

    function c(e, t, n) {
        var s, o;
        if (r(t)) l(n) ? e.setAttribute(t, n) : e && e.getAttribute && (o = e.getAttribute(t));
        else if (l(t) && i(t))
            for (s in t) e.setAttribute(s, t[s]);
        return o
    }

    function h(e) {
        return s(e) ? e : [e]
    }

    function p() {
        var e = arguments,
            t, n, r = e.length;
        for (t = 0; t < r; t++)
            if (n = e[t], typeof n != "undefined" && n !== null) return n
    }

    function d(t, n) {
        it && n && n.opacity !== U && (n.filter = "alpha(opacity=" + n.opacity * 100 + ")"), e(t.style, n)
    }

    function v(t, n, r, i, s) {
        return t = z.createElement(t), n && e(t, n), s && d(t, {
            padding: 0,
            border: Ct,
            margin: 0
        }), r && d(t, r), i && i.appendChild(t), t
    }

    function m(t, n) {
        var r = function() {};
        return r.prototype = new t, e(r.prototype, n), r
    }

    function g(e, t, r, i) {
        var s = yt.lang,
            o = t === -1 ? ((e || 0).toString().split(".")[1] || "").length : isNaN(t = G(t)) ? 2 : t,
            t = r === void 0 ? s.decimalPoint : r,
            i = i === void 0 ? s.thousandsSep : i,
            s = e < 0 ? "-" : "",
            r = String(n(e = G(+e || 0).toFixed(o))),
            u = r.length > 3 ? r.length % 3 : 0;
        return s + (u ? r.substr(0, u) + i : "") + r.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + i) + (o ? t + G(e - r).toFixed(o).slice(2) : "")
    }

    function y(e, t) {
        return Array((t || 2) + 1 - String(e).length).join(0) + e
    }

    function b(e, t) {
        for (var n = "{", r = !1, i, s, o, u, a, f = [];
            (n = e.indexOf(n)) !== -1;) {
            i = e.slice(0, n);
            if (r) {
                s = i.split(":"), o = s.shift().split("."), a = o.length, i = t;
                for (u = 0; u < a; u++) i = i[o[u]];
                s.length && (s = s.join(":"), o = /\.([0-9])/, u = yt.lang, a = void 0, /f$/.test(s) ? (a = (a = s.match(o)) ? a[1] : -1, i = g(i, a, u.decimalPoint, s.indexOf(",") > -1 ? u.thousandsSep : "")) : i = bt(s, i))
            }
            f.push(i), e = e.slice(n + 1), n = (r = !r) ? "}" : "{"
        }
        return f.push(e), f.join("")
    }

    function w(e, t, n, r) {
        var i, n = p(n, 1);
        i = e / n, t || (t = [1, 2, 2.5, 5, 10], r && r.allowDecimals === !1 && (n === 1 ? t = [1, 2, 5, 10] : n <= .1 && (t = [1 / n])));
        for (r = 0; r < t.length; r++)
            if (e = t[r], i <= (t[r] + (t[r + 1] || t[r])) / 2) break;
        return e *= n, e
    }

    function E(e, t) {
        var n = t || [
            [Lt, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            [At, [1, 2, 5, 10, 15, 30]],
            [Ot, [1, 2, 5, 10, 15, 30]],
            [Mt, [1, 2, 3, 4, 6, 8, 12]],
            [_t, [1, 2]],
            [Dt, [1, 2]],
            [Pt, [1, 2, 3, 4, 6]],
            [Ht, null]
        ],
            r = n[n.length - 1],
            i = St[r[0]],
            s = r[1],
            o;
        for (o = 0; o < n.length; o++)
            if (r = n[o], i = St[r[0]], s = r[1], n[o + 1] && e <= (i * s[s.length - 1] + St[n[o + 1][0]]) / 2) break;
        return i === St[Ht] && e < 5 * i && (s = [1, 2, 5]), i === St[Ht] && e < 5 * i && (s = [1, 2, 5]), n = w(e / i, s), {
            unitRange: i,
            count: n,
            unitName: r[0]
        }
    }

    function S(t, n, r, i) {
        var s = [],
            o = {}, u = yt.global.useUTC,
            a, f = new Date(n),
            c = t.unitRange,
            h = t.count;
        if (l(n)) {
            c >= St[At] && (f.setMilliseconds(0), f.setSeconds(c >= St[Ot] ? 0 : h * $(f.getSeconds() / h))), c >= St[Ot] && f[Wt](c >= St[Mt] ? 0 : h * $(f[Ft]() / h)), c >= St[Mt] && f[Xt](c >= St[_t] ? 0 : h * $(f[It]() / h)), c >= St[_t] && f[Vt](c >= St[Pt] ? 1 : h * $(f[Rt]() / h)), c >= St[Pt] && (f[$t](c >= St[Ht] ? 0 : h * $(f[Ut]() / h)), a = f[zt]()), c >= St[Ht] && (a -= a % h, f[Jt](a)), c === St[Dt] && f[Vt](f[Rt]() - f[qt]() + p(i, 1)), n = 1, a = f[zt]();
            for (var i = f.getTime(), d = f[Ut](), v = f[Rt](), f = u ? 0 : (864e5 + f.getTimezoneOffset() * 6e4) % 864e5; i < r;) s.push(i), c === St[Ht] ? i = jt(a + n * h, 0) : c === St[Pt] ? i = jt(a, d + n * h) : !! u || c !== St[_t] && c !== St[Dt] ? (c <= St[Mt] && i % St[_t] === f && (o[i] = _t), i += c * h) : i = jt(a, d, v + n * h * (c === St[_t] ? 1 : 7)), n++;
            s.push(i)
        }
        return s.info = e(t, {
            higherRanks: o,
            totalRange: c * h
        }), s
    }

    function x() {
        this.symbol = this.color = 0
    }

    function T(e, t) {
        var n = e.length,
            r, i;
        for (i = 0; i < n; i++) e[i].ss_i = i;
        e.sort(function(e, n) {
            return r = t(e, n), r === 0 ? e.ss_i - n.ss_i : r
        });
        for (i = 0; i < n; i++) delete e[i].ss_i
    }

    function N(e) {
        for (var t = e.length, n = e[0]; t--;) e[t] < n && (n = e[t]);
        return n
    }

    function C(e) {
        for (var t = e.length, n = e[0]; t--;) e[t] > n && (n = e[t]);
        return n
    }

    function k(e, t) {
        for (var n in e) e[n] && e[n] !== t && e[n].destroy && e[n].destroy(), delete e[n]
    }

    function L(e) {
        gt || (gt = v(Nt)), e && gt.appendChild(e), gt.innerHTML = ""
    }

    function A(e, t) {
        var n = "Highcharts error #" + e + ": www.highcharts.com/errors/" + e;
        if (t) throw n;
        W.console && console.log(n)
    }

    function O(e) {
        return parseFloat(e.toPrecision(14))
    }

    function M(e, t) {
        wt = p(e, t.animation)
    }

    function _() {
        var e = yt.global.useUTC,
            t = e ? "getUTC" : "get",
            n = e ? "setUTC" : "set";
        jt = e ? Date.UTC : function(e, t, n, r, i, s) {
            return (new Date(e, t, p(n, 1), p(r, 0), p(i, 0), p(s, 0))).getTime()
        }, Ft = t + "Minutes", It = t + "Hours", qt = t + "Day", Rt = t + "Date", Ut = t + "Month", zt = t + "FullYear", Wt = n + "Minutes", Xt = n + "Hours", Vt = n + "Date", $t = n + "Month", Jt = n + "FullYear"
    }

    function D() {}

    function P(e, t, n, r) {
        this.axis = e, this.pos = t, this.type = n || "", this.isNew = !0, !n && !r && this.addLabel()
    }

    function H(e, t) {
        this.axis = e, t && (this.options = t, this.id = t.id)
    }

    function B(e, t, n, r, i, s) {
        var o = e.chart.inverted;
        this.axis = e, this.isNegative = n, this.options = t, this.x = r, this.stack = i, this.percent = s === "percent", this.alignOptions = {
            align: t.align || (o ? n ? "left" : "right" : "center"),
            verticalAlign: t.verticalAlign || (o ? "middle" : n ? "bottom" : "top"),
            y: p(t.y, o ? 4 : n ? 14 : -6),
            x: p(t.x, o ? n ? -6 : 6 : 0)
        }, this.textAlign = t.textAlign || (o ? n ? "right" : "left" : "center")
    }

    function j() {
        this.init.apply(this, arguments)
    }

    function F() {
        this.init.apply(this, arguments)
    }

    function I(e, t) {
        this.init(e, t)
    }

    function q(e, t) {
        this.init(e, t)
    }

    function R() {
        this.init.apply(this, arguments)
    }
    var U, z = document,
        W = window,
        X = Math,
        V = X.round,
        $ = X.floor,
        J = X.ceil,
        K = X.max,
        Q = X.min,
        G = X.abs,
        Y = X.cos,
        Z = X.sin,
        et = X.PI,
        tt = et * 2 / 360,
        nt = navigator.userAgent,
        rt = W.opera,
        it = /msie/i.test(nt) && !rt,
        st = z.documentMode === 8,
        ot = /AppleWebKit/.test(nt),
        ut = /Firefox/.test(nt),
        at = /(Mobile|Android|Windows Phone)/.test(nt),
        ft = "http://www.w3.org/2000/svg",
        lt = !! z.createElementNS && !! z.createElementNS(ft, "svg").createSVGRect,
        ct = ut && parseInt(nt.split("Firefox/")[1], 10) < 4,
        ht = !lt && !it && !! z.createElement("canvas").getContext,
        pt, dt = z.documentElement.ontouchstart !== U,
        vt = {}, mt = 0,
        gt, yt, bt, wt, Et, St, xt = function() {}, Tt = [],
        Nt = "div",
        Ct = "none",
        kt = "rgba(192,192,192," + (lt ? 1e-4 : .002) + ")",
        Lt = "millisecond",
        At = "second",
        Ot = "minute",
        Mt = "hour",
        _t = "day",
        Dt = "week",
        Pt = "month",
        Ht = "year",
        Bt = "stroke-width",
        jt, Ft, It, qt, Rt, Ut, zt, Wt, Xt, Vt, $t, Jt, Kt = {};
    W.Highcharts = W.Highcharts ? A(16, !0) : {}, bt = function(t, n, r) {
        if (!l(n) || isNaN(n)) return "Invalid date";
        var t = p(t, "%Y-%m-%d %H:%M:%S"),
            i = new Date(n),
            s, o = i[It](),
            u = i[qt](),
            a = i[Rt](),
            f = i[Ut](),
            c = i[zt](),
            h = yt.lang,
            d = h.weekdays,
            i = e({
                a: d[u].substr(0, 3),
                A: d[u],
                d: y(a),
                e: a,
                b: h.shortMonths[f],
                B: h.months[f],
                m: y(f + 1),
                y: c.toString().substr(2, 2),
                Y: c,
                H: y(o),
                I: y(o % 12 || 12),
                l: o % 12 || 12,
                M: y(i[Ft]()),
                p: o < 12 ? "AM" : "PM",
                P: o < 12 ? "am" : "pm",
                S: y(i.getSeconds()),
                L: y(V(n % 1e3), 3)
            }, Highcharts.dateFormats);
        for (s in i)
            for (; t.indexOf("%" + s) !== -1;) t = t.replace("%" + s, typeof i[s] == "function" ? i[s](n) : i[s]);
        return r ? t.substr(0, 1).toUpperCase() + t.substr(1) : t
    }, x.prototype = {
        wrapColor: function(e) {
            this.color >= e && (this.color = 0)
        },
        wrapSymbol: function(e) {
            this.symbol >= e && (this.symbol = 0)
        }
    }, St = function() {
        for (var e = 0, t = arguments, n = t.length, r = {}; e < n; e++) r[t[e++]] = t[e];
        return r
    }(Lt, 1, At, 1e3, Ot, 6e4, Mt, 36e5, _t, 864e5, Dt, 6048e5, Pt, 26784e5, Ht, 31556952e3), Et = {
        init: function(e, t, n) {
            var t = t || "",
                r = e.shift,
                i = t.indexOf("C") > -1,
                s = i ? 7 : 3,
                o, t = t.split(" "),
                n = [].concat(n),
                u, a, f = function(e) {
                    for (o = e.length; o--;) e[o] === "M" && e.splice(o + 1, 0, e[o + 1], e[o + 2], e[o + 1], e[o + 2])
                };
            i && (f(t), f(n)), e.isArea && (u = t.splice(t.length - 6, 6), a = n.splice(n.length - 6, 6));
            if (r <= n.length / s)
                for (; r--;) n = [].concat(n).splice(0, s).concat(n);
            e.shift = 0;
            if (t.length)
                for (e = n.length; t.length < e;) r = [].concat(t).splice(t.length - s, s), i && (r[s - 6] = r[s - 2], r[s - 5] = r[s - 1]), t = t.concat(r);
            return u && (t = t.concat(u), n = n.concat(a)), [t, n]
        },
        step: function(e, t, n, r) {
            var i = [],
                s = e.length;
            if (n === 1) i = r;
            else if (s === t.length && n < 1)
                for (; s--;) r = parseFloat(e[s]), i[s] = isNaN(r) ? e[s] : n * parseFloat(t[s] - r) + r;
            else i = t;
            return i
        }
    },
    function(t) {
        W.HighchartsAdapter = W.HighchartsAdapter || t && {
            init: function(e) {
                var n = t.fx,
                    i = n.step,
                    s, o = t.Tween,
                    u = o && o.propHooks;
                t.extend(t.easing, {
                    easeOutQuad: function(e, t, n, r, i) {
                        return -r * (t /= i) * (t - 2) + n
                    }
                }), t.each(["cur", "_default", "width", "height", "opacity"], function(e, t) {
                    var r = i,
                        s, a;
                    t === "cur" ? r = n.prototype : t === "_default" && o && (r = u[t], t = "set"), (s = r[t]) && (r[t] = function(n) {
                        return n = e ? n : this, a = n.elem, a.attr ? a.attr(n.prop, t === "cur" ? U : n.now) : s.apply(this, arguments)
                    })
                }), s = function(t) {
                    var n = t.elem,
                        r;
                    t.started || (r = e.init(n, n.d, n.toD), t.start = r[0], t.end = r[1], t.started = !0), n.attr("d", e.step(t.start, t.end, t.pos, n.toD))
                }, o ? u.d = {
                    set: s
                } : i.d = s, this.each = Array.prototype.forEach ? function(e, t) {
                    return Array.prototype.forEach.call(e, t)
                } : function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (t.call(e[n], e[n], n, e) === !1) return n
                }, t.fn.highcharts = function() {
                    var e = "Chart",
                        t = arguments,
                        n, i;
                    return r(t[0]) && (e = t[0], t = Array.prototype.slice.call(t, 1)), n = t[0], n !== U && (n.chart = n.chart || {}, n.chart.renderTo = this[0], new Highcharts[e](n, t[1]), i = this), n === U && (i = Tt[c(this[0], "data-highcharts-chart")]), i
                }
            },
            getScript: t.getScript,
            inArray: t.inArray,
            adapterRun: function(e, n) {
                return t(e)[n]()
            },
            grep: t.grep,
            map: function(e, t) {
                for (var n = [], r = 0, i = e.length; r < i; r++) n[r] = t.call(e[r], e[r], r, e);
                return n
            },
            offset: function(e) {
                return t(e).offset()
            },
            addEvent: function(e, n, r) {
                t(e).bind(n, r)
            },
            removeEvent: function(e, n, r) {
                var i = z.removeEventListener ? "removeEventListener" : "detachEvent";
                z[i] && e && !e[i] && (e[i] = function() {}), t(e).unbind(n, r)
            },
            fireEvent: function(n, r, i, s) {
                var o = t.Event(r),
                    u = "detached" + r,
                    a;
                !it && i && (delete i.layerX, delete i.layerY), e(o, i), n[r] && (n[u] = n[r], n[r] = null), t.each(["preventDefault", "stopPropagation"], function(e, t) {
                    var n = o[t];
                    o[t] = function() {
                        try {
                            n.call(o)
                        } catch (e) {
                            t === "preventDefault" && (a = !0)
                        }
                    }
                }), t(n).trigger(o), n[u] && (n[r] = n[u], n[u] = null), s && !o.isDefaultPrevented() && !a && s(o)
            },
            washMouseEvent: function(e) {
                var t = e.originalEvent || e;
                return t.pageX === U && (t.pageX = e.pageX, t.pageY = e.pageY), t
            },
            animate: function(e, n, r) {
                var i = t(e);
                n.d && (e.toD = n.d, n.d = 1), i.stop(), n.opacity !== U && e.attr && (n.opacity += "px"), i.animate(n, r)
            },
            stop: function(e) {
                t(e).stop()
            }
        }
    }(W.jQuery);
    var Qt = W.HighchartsAdapter,
        Gt = Qt || {};
    Qt && Qt.init.call(Qt, Et);
    var Yt = Gt.adapterRun,
        Zt = Gt.getScript,
        en = Gt.inArray,
        tn = Gt.each,
        nn = Gt.grep,
        rn = Gt.offset,
        sn = Gt.map,
        on = Gt.addEvent,
        un = Gt.removeEvent,
        an = Gt.fireEvent,
        fn = Gt.washMouseEvent,
        ln = Gt.animate,
        cn = Gt.stop,
        Gt = {
            enabled: !0,
            align: "center",
            x: 0,
            y: 15,
            style: {
                color: "#666",
                cursor: "default",
                fontSize: "11px",
                lineHeight: "14px"
            }
        };
    yt = {
        colors: "#2f7ed8,#0d233a,#8bbc21,#910000,#1aadce,#492970,#f28f43,#77a1e5,#c42525,#a6c96a".split(","),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/3.0.1/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/3.0.1/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 5,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacingTop: 10,
            spacingRight: 10,
            spacingBottom: 15,
            spacingLeft: 10,
            style: {
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
                fontSize: "12px"
            },
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            y: 15,
            style: {
                color: "#274b6d",
                fontSize: "16px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            y: 30,
            style: {
                color: "#4d759e"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1e3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    enabled: !0,
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: t(Gt, {
                    enabled: !1,
                    formatter: function() {
                        return this.y
                    },
                    verticalAlign: "bottom",
                    y: 0
                }),
                cropThreshold: 300,
                pointRange: 0,
                showInLegend: !0,
                states: {
                    hover: {
                        marker: {}
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderWidth: 1,
            borderColor: "#909090",
            borderRadius: 5,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                cursor: "pointer",
                color: "#274b6d",
                fontSize: "12px"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolWidth: 16,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "1em"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: lt,
            backgroundColor: "rgba(255, 255, 255, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: at ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var hn = yt.plotOptions,
        Qt = hn.line;
    _();
    var pn = function(e) {
        var r = [],
            i, s;
        return function(e) {
            e && e.stops ? s = sn(e.stops, function(e) {
                return pn(e[1])
            }) : (i = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(e)) ? r = [n(i[1]), n(i[2]), n(i[3]), parseFloat(i[4], 10)] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e)) ? r = [n(i[1], 16), n(i[2], 16), n(i[3], 16), 1] : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e)) && (r = [n(i[1]), n(i[2]), n(i[3]), 1])
        }(e), {
            get: function(n) {
                var i;
                return s ? (i = t(e), i.stops = [].concat(i.stops), tn(s, function(e, t) {
                    i.stops[t] = [i.stops[t][0], e.get(n)]
                })) : i = r && !isNaN(r[0]) ? n === "rgb" ? "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")" : n === "a" ? r[3] : "rgba(" + r.join(",") + ")" : e, i
            },
            brighten: function(e) {
                if (s) tn(s, function(t) {
                    t.brighten(e)
                });
                else if (o(e) && e !== 0) {
                    var t;
                    for (t = 0; t < 3; t++) r[t] += n(e * 255), r[t] < 0 && (r[t] = 0), r[t] > 255 && (r[t] = 255)
                }
                return this
            },
            rgba: r,
            setOpacity: function(e) {
                return r[3] = e, this
            }
        }
    };
    D.prototype = {
        init: function(e, t) {
            this.element = t === "span" ? v(t) : z.createElementNS(ft, t), this.renderer = e, this.attrSetters = {}
        },
        opacity: 1,
        animate: function(e, n, r) {
            n = p(n, wt, !0), cn(this), n ? (n = t(n), r && (n.complete = r), ln(this, e, n)) : (this.attr(e), r && r())
        },
        attr: function(e, t) {
            var i, s, o, u, a = this.element,
                f = a.nodeName.toLowerCase(),
                h = this.renderer,
                p, d = this.attrSetters,
                v = this.shadows,
                m, g, y = this;
            r(e) && l(t) && (i = e, e = {}, e[i] = t);
            if (r(e)) i = e, f === "circle" ? i = {
                x: "cx",
                y: "cy"
            }[i] || i : i === "strokeWidth" && (i = "stroke-width"), y = c(a, i) || this[i] || 0, i !== "d" && i !== "visibility" && (y = parseFloat(y));
            else {
                for (i in e)
                    if (p = !1, s = e[i], o = d[i] && d[i].call(this, s, i), o !== !1) {
                        o !== U && (s = o);
                        if (i === "d") s && s.join && (s = s.join(" ")), /(NaN| {2}|^$)/.test(s) && (s = "M 0 0");
                        else if (i === "x" && f === "text")
                            for (o = 0; o < a.childNodes.length; o++) u = a.childNodes[o], c(u, "x") === c(a, "x") && c(u, "x", s);
                        else if (!this.rotation || i !== "x" && i !== "y")
                            if (i === "fill") s = h.color(s, a, i);
                            else if (f !== "circle" || i !== "x" && i !== "y")
                            if (f === "rect" && i === "r") c(a, {
                                rx: s,
                                ry: s
                            }), p = !0;
                            else if (i === "translateX" || i === "translateY" || i === "rotation" || i === "verticalAlign" || i === "scaleX" || i === "scaleY") p = g = !0;
                        else if (i === "stroke") s = h.color(s, a, i);
                        else if (i === "dashstyle") {
                            if (i = "stroke-dasharray", s = s && s.toLowerCase(), s === "solid") s = Ct;
                            else if (s) {
                                s = s.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                                for (o = s.length; o--;) s[o] = n(s[o]) * e["stroke-width"];
                                s = s.join(",")
                            }
                        } else i === "width" ? s = n(s) : i === "align" ? (i = "text-anchor", s = {
                            left: "start",
                            center: "middle",
                            right: "end"
                        }[s]) : i === "title" && (o = a.getElementsByTagName("title")[0], o || (o = z.createElementNS(ft, "title"), a.appendChild(o)), o.textContent = s);
                        else i = {
                            x: "cx",
                            y: "cy"
                        }[i] || i;
                        else g = !0;
                        i === "strokeWidth" && (i = "stroke-width");
                        if (i === "stroke-width" || i === "stroke") this[i] = s, this.stroke && this["stroke-width"] ? (c(a, "stroke", this.stroke), c(a, "stroke-width", this["stroke-width"]), this.hasStroke = !0) : i === "stroke-width" && s === 0 && this.hasStroke && (a.removeAttribute("stroke"), this.hasStroke = !1), p = !0;
                        this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(i) && (m || (this.symbolAttr(e), m = !0), p = !0);
                        if (v && /^(width|height|visibility|x|y|d|transform)$/.test(i))
                            for (o = v.length; o--;) c(v[o], i, i === "height" ? K(s - (v[o].cutHeight || 0), 0) : s);
                        (i === "width" || i === "height") && f === "rect" && s < 0 && (s = 0), this[i] = s, i === "text" ? (s !== this.textStr && delete this.bBox, this.textStr = s, this.added && h.buildText(this)) : p || c(a, i, s)
                    }
                g && this.updateTransform()
            }
            return y
        },
        addClass: function(e) {
            return c(this.element, "class", c(this.element, "class") + " " + e), this
        },
        symbolAttr: function(e) {
            var t = this;
            tn("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(n) {
                t[n] = p(e[n], t[n])
            }), t.attr({
                d: t.renderer.symbols[t.symbolName](t.x, t.y, t.width, t.height, t)
            })
        },
        clip: function(e) {
            return this.attr("clip-path", e ? "url(" + this.renderer.url + "#" + e.id + ")" : Ct)
        },
        crisp: function(e, t, n, r, i) {
            var s, o = {}, u = {}, a, e = e || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;
            a = V(e) % 2 / 2, u.x = $(t || this.x || 0) + a, u.y = $(n || this.y || 0) + a, u.width = $((r || this.width || 0) - 2 * a), u.height = $((i || this.height || 0) - 2 * a), u.strokeWidth = e;
            for (s in u) this[s] !== u[s] && (this[s] = o[s] = u[s]);
            return o
        },
        css: function(t) {
            var n = this.element,
                n = t && t.width && n.nodeName.toLowerCase() === "text",
                r, i = "",
                s = function(e, t) {
                    return "-" + t.toLowerCase()
                };
            t && t.color && (t.fill = t.color), this.styles = t = e(this.styles, t), ht && n && delete t.width;
            if (it && !lt) n && delete t.width, d(this.element, t);
            else {
                for (r in t) i += r.replace(/([A-Z])/g, s) + ":" + t[r] + ";";
                this.attr({
                    style: i
                })
            }
            return n && this.added && this.renderer.buildText(this), this
        },
        on: function(e, t) {
            return dt && e === "click" && (this.element.ontouchstart = function(e) {
                e.preventDefault(), t()
            }), this.element["on" + e] = t, this
        },
        setRadialReference: function(e) {
            return this.element.radialReference = e, this
        },
        translate: function(e, t) {
            return this.attr({
                translateX: e,
                translateY: t
            })
        },
        invert: function() {
            return this.inverted = !0, this.updateTransform(), this
        },
        htmlCss: function(t) {
            var n = this.element;
            if (n = t && n.tagName === "SPAN" && t.width) delete t.width, this.textWidth = n, this.updateTransform();
            return this.styles = e(this.styles, t), d(this.element, t), this
        },
        htmlGetBBox: function() {
            var e = this.element,
                t = this.bBox;
            return t || (e.nodeName === "text" && (e.style.position = "absolute"), t = this.bBox = {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: e.offsetWidth,
                height: e.offsetHeight
            }), t
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var e = this.renderer,
                    t = this.element,
                    r = this.translateX || 0,
                    i = this.translateY || 0,
                    s = this.x || 0,
                    o = this.y || 0,
                    u = this.textAlign || "left",
                    a = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[u],
                    f = u && u !== "left",
                    c = this.shadows;
                if (r || i) d(t, {
                    marginLeft: r,
                    marginTop: i
                }), c && tn(c, function(e) {
                    d(e, {
                        marginLeft: r + 1,
                        marginTop: i + 1
                    })
                });
                this.inverted && tn(t.childNodes, function(n) {
                    e.invertChild(n, t)
                });
                if (t.tagName === "SPAN") {
                    var h, v, c = this.rotation,
                        m, g = 0,
                        y = 1,
                        g = 0,
                        b;
                    m = n(this.textWidth);
                    var w = this.xCorr || 0,
                        E = this.yCorr || 0,
                        S = [c, u, t.innerHTML, this.textWidth].join(",");
                    h = {}, S !== this.cTT && (l(c) && (e.isSVG ? (w = it ? "-ms-transform" : ot ? "-webkit-transform" : ut ? "MozTransform" : rt ? "-o-transform" : "", h[w] = h.transform = "rotate(" + c + "deg)") : (g = c * tt, y = Y(g), g = Z(g), h.filter = c ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", y, ", M12=", -g, ", M21=", g, ", M22=", y, ", sizingMethod='auto expand')"].join("") : Ct), d(t, h)), h = p(this.elemWidth, t.offsetWidth), v = p(this.elemHeight, t.offsetHeight), h > m && /[ \-]/.test(t.textContent || t.innerText) && (d(t, {
                        width: m + "px",
                        display: "block",
                        whiteSpace: "normal"
                    }), h = m), m = e.fontMetrics(t.style.fontSize).b, w = y < 0 && -h, E = g < 0 && -v, b = y * g < 0, w += g * m * (b ? 1 - a : a), E -= y * m * (c ? b ? a : 1 - a : 1), f && (w -= h * a * (y < 0 ? -1 : 1), c && (E -= v * a * (g < 0 ? -1 : 1)), d(t, {
                        textAlign: u
                    })), this.xCorr = w, this.yCorr = E), d(t, {
                        left: s + w + "px",
                        top: o + E + "px"
                    }), ot && (v = t.offsetHeight), this.cTT = S
                }
            } else this.alignOnAdd = !0
        },
        updateTransform: function() {
            var e = this.translateX || 0,
                t = this.translateY || 0,
                n = this.scaleX,
                r = this.scaleY,
                i = this.inverted,
                s = this.rotation,
                o = [];
            i && (e += this.attr("width"), t += this.attr("height")), (e || t) && o.push("translate(" + e + "," + t + ")"), i ? o.push("rotate(90) scale(-1,1)") : s && o.push("rotate(" + s + " " + (this.x || 0) + " " + (this.y || 0) + ")"), (l(n) || l(r)) && o.push("scale(" + p(n, 1) + " " + p(r, 1) + ")"), o.length && c(this.element, "transform", o.join(" "))
        },
        toFront: function() {
            var e = this.element;
            return e.parentNode.appendChild(e), this
        },
        align: function(e, t, n) {
            var i, s, o, u, a = {};
            s = this.renderer, o = s.alignedObjects;
            if (e) {
                if (this.alignOptions = e, this.alignByTranslate = t, !n || r(n)) this.alignTo = i = n || "renderer", f(o, this), o.push(this), n = null
            } else e = this.alignOptions, t = this.alignByTranslate, i = this.alignTo;
            n = p(n, s[i], s), i = e.align, s = e.verticalAlign, o = (n.x || 0) + (e.x || 0), u = (n.y || 0) + (e.y || 0);
            if (i === "right" || i === "center") o += (n.width - (e.width || 0)) / {
                right: 1,
                center: 2
            }[i];
            a[t ? "translateX" : "x"] = V(o);
            if (s === "bottom" || s === "middle") u += (n.height - (e.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[s] || 1);
            return a[t ? "translateY" : "y"] = V(u), this[this.placed ? "animate" : "attr"](a), this.placed = !0, this.alignAttr = a, this
        },
        getBBox: function() {
            var t = this.bBox,
                n = this.renderer,
                r, i = this.rotation;
            r = this.element;
            var s = this.styles,
                o = i * tt;
            if (!t) {
                if (r.namespaceURI === ft || n.forExport) {
                    try {
                        t = r.getBBox ? e({}, r.getBBox()) : {
                            width: r.offsetWidth,
                            height: r.offsetHeight
                        }
                    } catch (u) {}
                    if (!t || t.width < 0) t = {
                        width: 0,
                        height: 0
                    }
                } else t = this.htmlGetBBox();
                n.isSVG && (n = t.width, r = t.height, it && s && s.fontSize === "11px" && r.toPrecision(3) === "22.7" && (t.height = r = 14), i && (t.width = G(r * Z(o)) + G(n * Y(o)), t.height = G(r * Y(o)) + G(n * Z(o)))), this.bBox = t
            }
            return t
        },
        show: function() {
            return this.attr({
                visibility: "visible"
            })
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(e) {
            var t = this;
            t.animate({
                opacity: 0
            }, {
                duration: e || 150,
                complete: function() {
                    t.hide()
                }
            })
        },
        add: function(e) {
            var t = this.renderer,
                r = e || t,
                i = r.element || t.box,
                s = i.childNodes,
                o = this.element,
                u = c(o, "zIndex"),
                a;
            e && (this.parentGroup = e), this.parentInverted = e && e.inverted, this.textStr !== void 0 && t.buildText(this), u && (r.handleZ = !0, u = n(u));
            if (r.handleZ)
                for (r = 0; r < s.length; r++)
                    if (e = s[r], t = c(e, "zIndex"), e !== o && (n(t) > u || !l(u) && l(t))) {
                        i.insertBefore(o, e), a = !0;
                        break
                    }
            return a || i.appendChild(o), this.added = !0, an(this, "add"), this
        },
        safeRemoveChild: function(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        },
        destroy: function() {
            var e = this,
                t = e.element || {}, n = e.shadows,
                r, i;
            t.onclick = t.onmouseout = t.onmouseover = t.onmousemove = t.point = null, cn(e), e.clipPath && (e.clipPath = e.clipPath.destroy());
            if (e.stops) {
                for (i = 0; i < e.stops.length; i++) e.stops[i] = e.stops[i].destroy();
                e.stops = null
            }
            e.safeRemoveChild(t), n && tn(n, function(t) {
                e.safeRemoveChild(t)
            }), e.alignTo && f(e.renderer.alignedObjects, e);
            for (r in e) delete e[r];
            return null
        },
        shadow: function(e, t, n) {
            var r = [],
                i, s, o = this.element,
                u, a, f, l;
            if (e) {
                a = p(e.width, 3), f = (e.opacity || .15) / a, l = this.parentInverted ? "(-1,-1)" : "(" + p(e.offsetX, 1) + ", " + p(e.offsetY, 1) + ")";
                for (i = 1; i <= a; i++) s = o.cloneNode(0), u = a * 2 + 1 - 2 * i, c(s, {
                    isShadow: "true",
                    stroke: e.color || "black",
                    "stroke-opacity": f * i,
                    "stroke-width": u,
                    transform: "translate" + l,
                    fill: Ct
                }), n && (c(s, "height", K(c(s, "height") - u, 0)), s.cutHeight = u), t ? t.element.appendChild(s) : o.parentNode.insertBefore(s, o), r.push(s);
                this.shadows = r
            }
            return this
        }
    };
    var dn = function() {
        this.init.apply(this, arguments)
    };
    dn.prototype = {
        Element: D,
        init: function(e, t, n, r) {
            var i = location,
                s;
            s = this.createElement("svg").attr({
                xmlns: ft,
                version: "1.1"
            }), e.appendChild(s.element), this.isSVG = !0, this.box = s.element, this.boxWrapper = s, this.alignedObjects = [], this.url = (ut || ot) && z.getElementsByTagName("base").length ? i.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(z.createTextNode("Created with Highcharts 3.0.1")), this.defs = this.createElement("defs").add(), this.forExport = r, this.gradients = {}, this.setSize(t, n, !1);
            var o;
            ut && e.getBoundingClientRect && (this.subPixelFix = t = function() {
                d(e, {
                    left: 0,
                    top: 0
                }), o = e.getBoundingClientRect(), d(e, {
                    left: J(o.left) - o.left + "px",
                    top: J(o.top) - o.top + "px"
                })
            }, t(), on(W, "resize", t))
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var e = this.defs;
            return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), k(this.gradients || {}), this.gradients = null, e && (this.defs = e.destroy()), this.subPixelFix && un(W, "resize", this.subPixelFix), this.alignedObjects = null
        },
        createElement: function(e) {
            var t = new this.Element;
            return t.init(this, e), t
        },
        draw: function() {},
        buildText: function(e) {
            for (var t = e.element, r = this, i = r.forExport, s = p(e.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), o = t.childNodes, u = /style="([^"]+)"/, a = /href="([^"]+)"/, f = c(t, "x"), l = e.styles, h = l && l.width && n(l.width), v = l && l.lineHeight, m = o.length; m--;) t.removeChild(o[m]);
            h && !e.added && this.box.appendChild(t), s[s.length - 1] === "" && s.pop(), tn(s, function(n, s) {
                var o, p = 0,
                    n = n.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                o = n.split("|||"), tn(o, function(n) {
                    if (n !== "" || o.length === 1) {
                        var m = {}, g = z.createElementNS(ft, "tspan"),
                            y;
                        u.test(n) && (y = n.match(u)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), c(g, "style", y)), a.test(n) && !i && (c(g, "onclick", 'location.href="' + n.match(a)[1] + '"'), d(g, {
                            cursor: "pointer"
                        })), n = (n.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"), g.appendChild(z.createTextNode(n)), p ? m.dx = 0 : m.x = f, c(g, m), !p && s && (!lt && i && d(g, {
                            display: "block"
                        }), c(g, "dy", v || r.fontMetrics(/px$/.test(g.style.fontSize) ? g.style.fontSize : l.fontSize).h, ot && g.offsetHeight)), t.appendChild(g), p++;
                        if (h)
                            for (var n = n.replace(/([^\^])-/g, "$1- ").split(" "), b, w = []; n.length || w.length;) delete e.bBox, b = e.getBBox().width, m = b > h, !m || n.length === 1 ? (n = w, w = [], n.length && (g = z.createElementNS(ft, "tspan"), c(g, {
                                dy: v || 16,
                                x: f
                            }), y && c(g, "style", y), t.appendChild(g), b > h && (h = b))) : (g.removeChild(g.firstChild), w.unshift(n.pop())), n.length && g.appendChild(z.createTextNode(n.join(" ").replace(/- /g, "-")))
                    }
                })
            })
        },
        button: function(n, r, i, s, o, u, a) {
            var f = this.label(n, r, i, null, null, null, null, null, "button"),
                l = 0,
                c, h, p, d, v, n = {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                }, o = t({
                    "stroke-width": 1,
                    stroke: "#CCCCCC",
                    fill: {
                        linearGradient: n,
                        stops: [
                            [0, "#FEFEFE"],
                            [1, "#F6F6F6"]
                        ]
                    },
                    r: 2,
                    padding: 5,
                    style: {
                        color: "black"
                    }
                }, o);
            return p = o.style, delete o.style, u = t(o, {
                stroke: "#68A",
                fill: {
                    linearGradient: n,
                    stops: [
                        [0, "#FFF"],
                        [1, "#ACF"]
                    ]
                }
            }, u), d = u.style, delete u.style, a = t(o, {
                stroke: "#68A",
                fill: {
                    linearGradient: n,
                    stops: [
                        [0, "#9BD"],
                        [1, "#CDF"]
                    ]
                }
            }, a), v = a.style, delete a.style, on(f.element, "mouseenter", function() {
                f.attr(u).css(d)
            }), on(f.element, "mouseleave", function() {
                c = [o, u, a][l], h = [p, d, v][l], f.attr(c).css(h)
            }), f.setState = function(e) {
                (l = e) ? e === 2 && f.attr(a).css(v) : f.attr(o).css(p)
            }, f.on("click", function() {
                s.call(f)
            }).attr(o).css(e({
                cursor: "default"
            }, p))
        },
        crispLine: function(e, t) {
            return e[1] === e[4] && (e[1] = e[4] = V(e[1]) - t % 2 / 2), e[2] === e[5] && (e[2] = e[5] = V(e[2]) + t % 2 / 2), e
        },
        path: function(t) {
            var n = {
                fill: Ct
            };
            return s(t) ? n.d = t : i(t) && e(n, t), this.createElement("path").attr(n)
        },
        circle: function(e, t, n) {
            return e = i(e) ? e : {
                x: e,
                y: t,
                r: n
            }, this.createElement("circle").attr(e)
        },
        arc: function(e, t, n, r, s, o) {
            return i(e) && (t = e.y, n = e.r, r = e.innerR, s = e.start, o = e.end, e = e.x), this.symbol("arc", e || 0, t || 0, n || 0, n || 0, {
                innerR: r || 0,
                start: s || 0,
                end: o || 0
            })
        },
        rect: function(e, t, n, r, s, o) {
            return s = i(e) ? e.r : s, s = this.createElement("rect").attr({
                rx: s,
                ry: s,
                fill: Ct
            }), s.attr(i(e) ? e : s.crisp(o, e, t, K(n, 0), K(r, 0)))
        },
        setSize: function(e, t, n) {
            var r = this.alignedObjects,
                i = r.length;
            this.width = e, this.height = t;
            for (this.boxWrapper[p(n, !0) ? "animate" : "attr"]({
                width: e,
                height: t
            }); i--;) r[i].align()
        },
        g: function(e) {
            var t = this.createElement("g");
            return l(e) ? t.attr({
                "class": "highcharts-" + e
            }) : t
        },
        image: function(t, n, r, i, s) {
            var o = {
                preserveAspectRatio: Ct
            };
            return arguments.length > 1 && e(o, {
                x: n,
                y: r,
                width: i,
                height: s
            }), o = this.createElement("image").attr(o), o.element.setAttributeNS ? o.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", t) : o.element.setAttribute("hc-svg-href", t), o
        },
        symbol: function(t, n, r, i, s, o) {
            var u, a = this.symbols[t],
                a = a && a(V(n), V(r), i, s, o),
                f = /^url\((.*?)\)$/,
                l, c;
            return a ? (u = this.path(a), e(u, {
                symbolName: t,
                x: n,
                y: r,
                width: i,
                height: s
            }), o && e(u, o)) : f.test(t) && (c = function(e, t) {
                e.element && (e.attr({
                    width: t[0],
                    height: t[1]
                }), e.alignByTranslate || e.translate(V((i - t[0]) / 2), V((s - t[1]) / 2)))
            }, l = t.match(f)[1], t = vt[l], u = this.image(l).attr({
                x: n,
                y: r
            }), u.isImg = !0, t ? c(u, t) : (u.attr({
                width: 0,
                height: 0
            }), v("img", {
                onload: function() {
                    c(u, vt[l] = [this.width, this.height])
                },
                src: l
            }))), u
        },
        symbols: {
            circle: function(e, t, n, r) {
                var i = .166 * n;
                return ["M", e + n / 2, t, "C", e + n + i, t, e + n + i, t + r, e + n / 2, t + r, "C", e - i, t + r, e - i, t, e + n / 2, t, "Z"]
            },
            square: function(e, t, n, r) {
                return ["M", e, t, "L", e + n, t, e + n, t + r, e, t + r, "Z"]
            },
            triangle: function(e, t, n, r) {
                return ["M", e + n / 2, t, "L", e + n, t + r, e, t + r, "Z"]
            },
            "triangle-down": function(e, t, n, r) {
                return ["M", e, t, "L", e + n, t, e + n / 2, t + r, "Z"]
            },
            diamond: function(e, t, n, r) {
                return ["M", e + n / 2, t, "L", e + n, t + r / 2, e + n / 2, t + r, e, t + r / 2, "Z"]
            },
            arc: function(e, t, n, r, i) {
                var s = i.start,
                    n = i.r || n || r,
                    o = i.end - .001,
                    r = i.innerR,
                    u = i.open,
                    a = Y(s),
                    f = Z(s),
                    l = Y(o),
                    o = Z(o),
                    i = i.end - s < et ? 0 : 1;
                return ["M", e + n * a, t + n * f, "A", n, n, 0, i, 1, e + n * l, t + n * o, u ? "M" : "L", e + r * l, t + r * o, "A", r, r, 0, i, 0, e + r * a, t + r * f, u ? "" : "Z"]
            }
        },
        clipRect: function(e, t, n, r) {
            var i = "highcharts-" + mt++,
                s = this.createElement("clipPath").attr({
                    id: i
                }).add(this.defs),
                e = this.rect(e, t, n, r, 0).add(s);
            return e.id = i, e.clipPath = s, e
        },
        color: function(e, n, r) {
            var i = this,
                o, u = /^rgba/,
                a, f, h, p, d, v, m, g = [];
            e && e.linearGradient ? a = "linearGradient" : e && e.radialGradient && (a = "radialGradient");
            if (a) {
                r = e[a], f = i.gradients, p = e.stops, n = n.radialReference, s(r) && (e[a] = r = {
                    x1: r[0],
                    y1: r[1],
                    x2: r[2],
                    y2: r[3],
                    gradientUnits: "userSpaceOnUse"
                }), a === "radialGradient" && n && !l(r.gradientUnits) && (r = t(r, {
                    cx: n[0] - n[2] / 2 + r.cx * n[2],
                    cy: n[1] - n[2] / 2 + r.cy * n[2],
                    r: r.r * n[2],
                    gradientUnits: "userSpaceOnUse"
                }));
                for (m in r) m !== "id" && g.push(m, r[m]);
                for (m in p) g.push(p[m]);
                return g = g.join(","), f[g] ? e = f[g].id : (r.id = e = "highcharts-" + mt++, f[g] = h = i.createElement(a).attr(r).add(i.defs), h.stops = [], tn(p, function(e) {
                    u.test(e[1]) ? (o = pn(e[1]), d = o.get("rgb"), v = o.get("a")) : (d = e[1], v = 1), e = i.createElement("stop").attr({
                        offset: e[0],
                        "stop-color": d,
                        "stop-opacity": v
                    }).add(h), h.stops.push(e)
                })), "url(" + i.url + "#" + e + ")"
            }
            return u.test(e) ? (o = pn(e), c(n, r + "-opacity", o.get("a")), o.get("rgb")) : (n.removeAttribute(r + "-opacity"), e)
        },
        text: function(e, t, n, r) {
            var i = yt.chart.style,
                s = ht || !lt && this.forExport;
            return r && !this.forExport ? this.html(e, t, n) : (t = V(p(t, 0)), n = V(p(n, 0)), e = this.createElement("text").attr({
                x: t,
                y: n,
                text: e
            }).css({
                fontFamily: i.fontFamily,
                fontSize: i.fontSize
            }), s && e.css({
                position: "absolute"
            }), e.x = t, e.y = n, e)
        },
        html: function(t, n, r) {
            var i = yt.chart.style,
                s = this.createElement("span"),
                o = s.attrSetters,
                u = s.element,
                a = s.renderer;
            return o.text = function(e) {
                return e !== u.innerHTML && delete this.bBox, u.innerHTML = e, !1
            }, o.x = o.y = o.align = function(e, t) {
                return t === "align" && (t = "textAlign"), s[t] = e, s.htmlUpdateTransform(), !1
            }, s.attr({
                text: t,
                x: V(n),
                y: V(r)
            }).css({
                position: "absolute",
                whiteSpace: "nowrap",
                fontFamily: i.fontFamily,
                fontSize: i.fontSize
            }), s.css = s.htmlCss, a.isSVG && (s.add = function(t) {
                var n, r = a.box.parentNode,
                    i = [];
                if (t) {
                    if (n = t.div, !n) {
                        for (; t;) i.push(t), t = t.parentGroup;
                        tn(i.reverse(), function(t) {
                            var i;
                            n = t.div = t.div || v(Nt, {
                                className: c(t.element, "class")
                            }, {
                                position: "absolute",
                                left: (t.translateX || 0) + "px",
                                top: (t.translateY || 0) + "px"
                            }, n || r), i = n.style, e(t.attrSetters, {
                                translateX: function(e) {
                                    i.left = e + "px"
                                },
                                translateY: function(e) {
                                    i.top = e + "px"
                                },
                                visibility: function(e, t) {
                                    i[t] = e
                                }
                            })
                        })
                    }
                } else n = r;
                return n.appendChild(u), s.added = !0, s.alignOnAdd && s.htmlUpdateTransform(), s
            }), s
        },
        fontMetrics: function(e) {
            var e = n(e || 11),
                e = e < 24 ? e + 4 : V(e * 1.2),
                t = V(e * .8);
            return {
                h: e,
                b: t
            }
        },
        label: function(n, r, i, s, o, u, a, f, c) {
            function h() {
                var e, n;
                e = y.element.style, w = (T === void 0 || N === void 0 || g.styles.textAlign) && y.getBBox(), g.width = (T || w.width || 0) + 2 * S + x, g.height = (N || w.height || 0) + 2 * S, O = S + m.fontMetrics(e && e.fontSize).b, M && (b || (e = V(-E * S), n = f ? -O : 0, g.box = b = s ? m.symbol(s, e, n, g.width, g.height) : m.rect(e, n, g.width, g.height, 0, A[Bt]), b.add(g)), b.isImg || b.attr(t({
                    width: g.width,
                    height: g.height
                }, A)), A = null)
            }

            function p() {
                var e = g.styles,
                    e = e && e.textAlign,
                    t = x + S * (1 - E),
                    n;
                n = f ? 0 : O, l(T) && (e === "center" || e === "right") && (t += {
                    center: .5,
                    right: 1
                }[e] * (T - w.width)), (t !== y.x || n !== y.y) && y.attr({
                    x: t,
                    y: n
                }), y.x = t, y.y = n
            }

            function d(e, t) {
                b ? b.attr(e, t) : A[e] = t
            }

            function v() {
                y.add(g), g.attr({
                    text: n,
                    x: r,
                    y: i
                }), b && l(o) && g.attr({
                    anchorX: o,
                    anchorY: u
                })
            }
            var m = this,
                g = m.g(c),
                y = m.text("", 0, 0, a).attr({
                    zIndex: 1
                }),
                b, w, E = 0,
                S = 3,
                x = 0,
                T, N, C, k, L = 0,
                A = {}, O, a = g.attrSetters,
                M;
            on(g, "add", v), a.width = function(e) {
                return T = e, !1
            }, a.height = function(e) {
                return N = e, !1
            }, a.padding = function(e) {
                return l(e) && e !== S && (S = e, p()), !1
            }, a.paddingLeft = function(e) {
                return l(e) && e !== x && (x = e, p()), !1
            }, a.align = function(e) {
                return E = {
                    left: 0,
                    center: .5,
                    right: 1
                }[e], !1
            }, a.text = function(e, t) {
                return y.attr(t, e), h(), p(), !1
            }, a[Bt] = function(e, t) {
                return M = !0, L = e % 2 / 2, d(t, e), !1
            }, a.stroke = a.fill = a.r = function(e, t) {
                return t === "fill" && (M = !0), d(t, e), !1
            }, a.anchorX = function(e, t) {
                return o = e, d(t, e + L - C), !1
            }, a.anchorY = function(e, t) {
                return u = e, d(t, e - k), !1
            }, a.x = function(e) {
                return g.x = e, e -= E * ((T || w.width) + S), C = V(e), g.attr("translateX", C), !1
            }, a.y = function(e) {
                return k = g.y = V(e), g.attr("translateY", k), !1
            };
            var _ = g.css;
            return e(g, {
                css: function(e) {
                    if (e) {
                        var n = {}, e = t(e);
                        tn("fontSize,fontWeight,fontFamily,color,lineHeight,width".split(","), function(t) {
                            e[t] !== U && (n[t] = e[t], delete e[t])
                        }), y.css(n)
                    }
                    return _.call(g, e)
                },
                getBBox: function() {
                    return {
                        width: w.width + 2 * S,
                        height: w.height + 2 * S,
                        x: w.x - S,
                        y: w.y - S
                    }
                },
                shadow: function(e) {
                    return b && b.shadow(e), g
                },
                destroy: function() {
                    un(g, "add", v), un(g.element, "mouseenter"), un(g.element, "mouseleave"), y && (y = y.destroy()), b && (b = b.destroy()), D.prototype.destroy.call(g), g = m = h = p = d = v = null
                }
            })
        }
    }, pt = dn;
    var vn;
    if (!lt && !ht) {
        Highcharts.VMLElement = vn = {
            init: function(e, t) {
                var n = ["<", t, ' filled="f" stroked="f"'],
                    r = ["position: ", "absolute", ";"],
                    i = t === Nt;
                (t === "shape" || i) && r.push("left:0;top:0;width:1px;height:1px;"), r.push("visibility: ", i ? "hidden" : "visible"), n.push(' style="', r.join(""), '"/>'), t && (n = i || t === "span" || t === "img" ? n.join("") : e.prepVML(n), this.element = v(n)), this.renderer = e, this.attrSetters = {}
            },
            add: function(e) {
                var t = this.renderer,
                    n = this.element,
                    r = t.box,
                    r = e ? e.element || e : r;
                return e && e.inverted && t.invertChild(n, r), r.appendChild(n), this.added = !0, this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform(), an(this, "add"), this
            },
            updateTransform: D.prototype.htmlUpdateTransform,
            attr: function(e, t) {
                var n, i, s, u = this.element || {}, a = u.style,
                    f = u.nodeName,
                    h = this.renderer,
                    p = this.symbolName,
                    d, m = this.shadows,
                    g, y = this.attrSetters,
                    b = this;
                r(e) && l(t) && (n = e, e = {}, e[n] = t);
                if (r(e)) n = e, b = n === "strokeWidth" || n === "stroke-width" ? this.strokeweight : this[n];
                else
                    for (n in e)
                        if (i = e[n], g = !1, s = y[n] && y[n].call(this, i, n), s !== !1 && i !== null) {
                            s !== U && (i = s);
                            if (p && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(n)) d || (this.symbolAttr(e), d = !0), g = !0;
                            else if (n === "d") {
                                i = i || [], this.d = i.join(" "), s = i.length, g = [];
                                for (var w; s--;)
                                    if (o(i[s])) g[s] = V(i[s] * 10) - 5;
                                    else if (i[s] === "Z") g[s] = "x";
                                else if (g[s] = i[s], i.isArc && (i[s] === "wa" || i[s] === "at")) w = i[s] === "wa" ? 1 : -1, g[s + 5] === g[s + 7] && (g[s + 7] -= w), g[s + 6] === g[s + 8] && (g[s + 8] -= w);
                                i = g.join(" ") || "x", u.path = i;
                                if (m)
                                    for (s = m.length; s--;) m[s].path = m[s].cutOff ? this.cutOffPath(i, m[s].cutOff) : i;
                                g = !0
                            } else if (n === "visibility") {
                                if (m)
                                    for (s = m.length; s--;) m[s].style[n] = i;
                                f === "DIV" && (i = i === "hidden" ? "-999em" : 0, st || (a[n] = i ? "visible" : "hidden"), n = "top"), a[n] = i, g = !0
                            } else n === "zIndex" ? (i && (a[n] = i), g = !0) : en(n, ["x", "y", "width", "height"]) !== -1 ? (this[n] = i, n === "x" || n === "y" ? n = {
                                x: "left",
                                y: "top"
                            }[n] : i = K(0, i), this.updateClipping ? (this[n] = i, this.updateClipping()) : a[n] = i, g = !0) : n === "class" && f === "DIV" ? u.className = i : n === "stroke" ? (i = h.color(i, u, n), n = "strokecolor") : n === "stroke-width" || n === "strokeWidth" ? (u.stroked = i ? !0 : !1, n = "strokeweight", this[n] = i, o(i) && (i += "px")) : n === "dashstyle" ? ((u.getElementsByTagName("stroke")[0] || v(h.prepVML(["<stroke/>"]), null, null, u))[n] = i || "solid", this.dashstyle = i, g = !0) : n === "fill" ? f === "SPAN" ? a.color = i : f !== "IMG" && (u.filled = i !== Ct ? !0 : !1, i = h.color(i, u, n, this), n = "fillcolor") : n === "opacity" ? g = !0 : f === "shape" && n === "rotation" ? (this[n] = i, u.style.left = -V(Z(i * tt) + 1) + "px", u.style.top = V(Y(i * tt)) + "px") : n === "translateX" || n === "translateY" || n === "rotation" ? (this[n] = i, this.updateTransform(), g = !0) : n === "text" && (this.bBox = null, u.innerHTML = i, g = !0);
                            g || (st ? u[n] = i : c(u, n, i))
                        } return b
            },
            clip: function(e) {
                var t = this,
                    n;
                return e ? (n = e.members, f(n, t), n.push(t), t.destroyClip = function() {
                    f(n, t)
                }, e = e.getCSS(t)) : (t.destroyClip && t.destroyClip(), e = {
                    clip: st ? "inherit" : "rect(auto)"
                }), t.css(e)
            },
            css: D.prototype.htmlCss,
            safeRemoveChild: function(e) {
                e.parentNode && L(e)
            },
            destroy: function() {
                return this.destroyClip && this.destroyClip(), D.prototype.destroy.apply(this)
            },
            on: function(e, t) {
                return this.element["on" + e] = function() {
                    var e = W.event;
                    e.target = e.srcElement, t(e)
                }, this
            },
            cutOffPath: function(e, t) {
                var r, e = e.split(/[ ,]/);
                r = e.length;
                if (r === 9 || r === 11) e[r - 4] = e[r - 2] = n(e[r - 2]) - 10 * t;
                return e.join(" ")
            },
            shadow: function(e, t, r) {
                var i = [],
                    s, o = this.element,
                    u = this.renderer,
                    a, f = o.style,
                    l, c = o.path,
                    h, d, m, g;
                c && typeof c.value != "string" && (c = "x"), d = c;
                if (e) {
                    m = p(e.width, 3), g = (e.opacity || .15) / m;
                    for (s = 1; s <= 3; s++) h = m * 2 + 1 - 2 * s, r && (d = this.cutOffPath(c.value, h + .5)), l = ['<shape isShadow="true" strokeweight="', h, '" filled="false" path="', d, '" coordsize="10 10" style="', o.style.cssText, '" />'], a = v(u.prepVML(l), null, {
                        left: n(f.left) + p(e.offsetX, 1),
                        top: n(f.top) + p(e.offsetY, 1)
                    }), r && (a.cutOff = h + 1), l = ['<stroke color="', e.color || "black", '" opacity="', g * s, '"/>'], v(u.prepVML(l), null, null, a), t ? t.element.appendChild(a) : o.parentNode.insertBefore(a, o), i.push(a);
                    this.shadows = i
                }
                return this
            }
        }, vn = m(D, vn);
        var mn = {
            Element: vn,
            isIE8: nt.indexOf("MSIE 8.0") > -1,
            init: function(e, t, n) {
                var r, i;
                this.alignedObjects = [], r = this.createElement(Nt), i = r.element, i.style.position = "relative", e.appendChild(r.element), this.isVML = !0, this.box = i, this.boxWrapper = r, this.setSize(t, n, !1), z.namespaces.hcv || (z.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), z.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ")
            },
            isHidden: function() {
                return !this.box.offsetWidth
            },
            clipRect: function(t, n, r, s) {
                var o = this.createElement(),
                    u = i(t);
                return e(o, {
                    members: [],
                    left: u ? t.x : t,
                    top: u ? t.y : n,
                    width: u ? t.width : r,
                    height: u ? t.height : s,
                    getCSS: function(t) {
                        var n = t.element,
                            r = n.nodeName,
                            t = t.inverted,
                            i = this.top - (r === "shape" ? n.offsetTop : 0),
                            s = this.left,
                            n = s + this.width,
                            o = i + this.height,
                            i = {
                                clip: "rect(" + V(t ? s : i) + "px," + V(t ? o : n) + "px," + V(t ? n : o) + "px," + V(t ? i : s) + "px)"
                            };
                        return !t && st && r === "DIV" && e(i, {
                            width: n + "px",
                            height: o + "px"
                        }), i
                    },
                    updateClipping: function() {
                        tn(o.members, function(e) {
                            e.css(o.getCSS(e))
                        })
                    }
                })
            },
            color: function(e, t, n, r) {
                var i = this,
                    s, o = /^rgba/,
                    u, a, f = Ct;
                e && e.linearGradient ? a = "gradient" : e && e.radialGradient && (a = "pattern");
                if (a) {
                    var l, c, h = e.linearGradient || e.radialGradient,
                        p, d, m, g, y, b = "",
                        e = e.stops,
                        w, E = [],
                        S = function() {
                            u = ['<fill colors="' + E.join(",") + '" opacity="', m, '" o:opacity2="', d, '" type="', a, '" ', b, 'focus="100%" method="any" />'], v(i.prepVML(u), null, null, t)
                        };
                    p = e[0], w = e[e.length - 1], p[0] > 0 && e.unshift([0, p[1]]), w[0] < 1 && e.push([1, w[1]]), tn(e, function(e, t) {
                        o.test(e[1]) ? (s = pn(e[1]), l = s.get("rgb"), c = s.get("a")) : (l = e[1], c = 1), E.push(e[0] * 100 + "% " + l), t ? (m = c, g = l) : (d = c, y = l)
                    });
                    if (n === "fill")
                        if (a === "gradient") n = h.x1 || h[0] || 0, e = h.y1 || h[1] || 0, p = h.x2 || h[2] || 0, h = h.y2 || h[3] || 0, b = 'angle="' + (90 - X.atan((h - e) / (p - n)) * 180 / et) + '"', S();
                        else {
                            var f = h.r,
                                x = f * 2,
                                T = f * 2,
                                N = h.cx,
                                C = h.cy,
                                k = t.radialReference,
                                L, f = function() {
                                    k && (L = r.getBBox(), N += (k[0] - L.x) / L.width - .5, C += (k[1] - L.y) / L.height - .5, x *= k[2] / L.width, T *= k[2] / L.height), b = 'src="' + yt.global.VMLRadialGradientURL + '" size="' + x + "," + T + '" origin="0.5,0.5" position="' + N + "," + C + '" color2="' + y + '" ', S()
                                };
                            r.added ? f() : on(r, "add", f), f = g
                        } else f = l
                } else o.test(e) && t.tagName !== "IMG" ? (s = pn(e), u = ["<", n, ' opacity="', s.get("a"), '"/>'], v(this.prepVML(u), null, null, t), f = s.get("rgb")) : (f = t.getElementsByTagName(n), f.length && (f[0].opacity = 1, f[0].type = "solid"), f = e);
                return f
            },
            prepVML: function(e) {
                var t = this.isIE8,
                    e = e.join("");
                return t ? (e = e.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), e = e.indexOf('style="') === -1 ? e.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : e.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : e = e.replace("<", "<hcv:"), e
            },
            text: dn.prototype.html,
            path: function(t) {
                var n = {
                    coordsize: "10 10"
                };
                return s(t) ? n.d = t : i(t) && e(n, t), this.createElement("shape").attr(n)
            },
            circle: function(e, t, n) {
                return i(e) && (n = e.r, t = e.y, e = e.x), this.symbol("circle").attr({
                    x: e - n,
                    y: t - n,
                    width: 2 * n,
                    height: 2 * n
                })
            },
            g: function(e) {
                var t;
                return e && (t = {
                    className: "highcharts-" + e,
                    "class": "highcharts-" + e
                }), this.createElement(Nt).attr(t)
            },
            image: function(e, t, n, r, i) {
                var s = this.createElement("img").attr({
                    src: e
                });
                return arguments.length > 1 && s.attr({
                    x: t,
                    y: n,
                    width: r,
                    height: i
                }), s
            },
            rect: function(e, t, n, r, s, o) {
                i(e) && (t = e.y, n = e.width, r = e.height, o = e.strokeWidth, e = e.x);
                var u = this.symbol("rect");
                return u.r = s, u.attr(u.crisp(o, e, t, K(n, 0), K(r, 0)))
            },
            invertChild: function(e, t) {
                var r = t.style;
                d(e, {
                    flip: "x",
                    left: n(r.width) - 1,
                    top: n(r.height) - 1,
                    rotation: -90
                })
            },
            symbols: {
                arc: function(e, t, n, r, i) {
                    var s = i.start,
                        o = i.end,
                        u = i.r || n || r,
                        n = i.innerR,
                        r = Y(s),
                        a = Z(s),
                        f = Y(o),
                        l = Z(o);
                    return o - s === 0 ? ["x"] : (s = ["wa", e - u, t - u, e + u, t + u, e + u * r, t + u * a, e + u * f, t + u * l], i.open && !n && s.push("e", "M", e, t), s.push("at", e - n, t - n, e + n, t + n, e + n * f, t + n * l, e + n * r, t + n * a, "x", "e"), s.isArc = !0, s)
                },
                circle: function(e, t, n, r) {
                    return ["wa", e, t, e + n, t + r, e + n, t + r / 2, e + n, t + r / 2, "e"]
                },
                rect: function(e, t, n, r, i) {
                    var s = e + n,
                        o = t + r,
                        u;
                    return !l(i) || !i.r ? s = dn.prototype.symbols.square.apply(0, arguments) : (u = Q(i.r, n, r), s = ["M", e + u, t, "L", s - u, t, "wa", s - 2 * u, t, s, t + 2 * u, s - u, t, s, t + u, "L", s, o - u, "wa", s - 2 * u, o - 2 * u, s, o, s, o - u, s - u, o, "L", e + u, o, "wa", e, o - 2 * u, e + 2 * u, o, e + u, o, e, o - u, "L", e, t + u, "wa", e, t, e + 2 * u, t + 2 * u, e, t + u, e + u, t, "x", "e"]), s
                }
            }
        };
        Highcharts.VMLRenderer = vn = function() {
            this.init.apply(this, arguments)
        }, vn.prototype = t(dn.prototype, mn), pt = vn
    }
    var gn;
    ht && (Highcharts.CanVGRenderer = vn = function() {
        ft = "http://www.w3.org/1999/xhtml"
    }, vn.prototype.symbols = {}, gn = function() {
        function e() {
            var e = t.length,
                n;
            for (n = 0; n < e; n++) t[n]();
            t = []
        }
        var t = [];
        return {
            push: function(n, r) {
                t.length === 0 && Zt(r, e), t.push(n)
            }
        }
    }(), pt = vn), P.prototype = {
        addLabel: function() {
            var t = this.axis,
                n = t.options,
                r = t.chart,
                i = t.horiz,
                s = t.categories,
                u = t.series[0] && t.series[0].names,
                f = this.pos,
                c = n.labels,
                h = t.tickPositions,
                i = i && s && !c.step && !c.staggerLines && !c.rotation && r.plotWidth / h.length || !i && (r.optionsMarginLeft || r.plotWidth / 2),
                d = f === h[0],
                v = f === h[h.length - 1],
                u = s ? p(s[f], u && u[f], f) : f,
                s = this.label,
                h = h.info,
                m;
            t.isDatetimeAxis && h && (m = n.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]), this.isFirst = d, this.isLast = v, n = t.labelFormatter.call({
                axis: t,
                chart: r,
                isFirst: d,
                isLast: v,
                dateTimeLabelFormat: m,
                value: t.isLog ? O(a(u)) : u
            }), f = i && {
                width: K(1, V(i - 2 * (c.padding || 10))) + "px"
            }, f = e(f, c.style), l(s) ? s && s.attr({
                text: n
            }).css(f) : (i = {
                align: c.align
            }, o(c.rotation) && (i.rotation = c.rotation), this.label = l(n) && c.enabled ? r.renderer.text(n, 0, 0, c.useHTML).attr(i).css(f).add(t.labelGroup) : null)
        },
        getLabelSize: function() {
            var e = this.label,
                t = this.axis;
            return e ? (this.labelBBox = e.getBBox())[t.horiz ? "height" : "width"] : 0
        },
        getLabelSides: function() {
            var e = this.axis.options.labels,
                t = this.labelBBox.width,
                e = t * {
                    left: 0,
                    center: .5,
                    right: 1
                }[e.align] - e.x;
            return [-e, t - e]
        },
        handleOverflow: function(e, t) {
            var n = !0,
                r = this.axis,
                i = r.chart,
                s = this.isFirst,
                o = this.isLast,
                u = t.x,
                a = r.reversed,
                f = r.tickPositions;
            if (s || o) {
                var l = this.getLabelSides(),
                    c = l[0],
                    l = l[1],
                    i = i.plotLeft,
                    h = i + r.len,
                    f = (r = r.ticks[f[e + (s ? 1 : -1)]]) && r.label.xy && r.label.xy.x + r.getLabelSides()[s ? 0 : 1];
                s && !a || o && a ? u + c < i && (u = i - c, r && u + l > f && (n = !1)) : u + l > h && (u = h - l, r && u + c < f && (n = !1)), t.x = u
            }
            return n
        },
        getPosition: function(e, t, n, r) {
            var i = this.axis,
                s = i.chart,
                o = r && s.oldChartHeight || s.chartHeight;
            return {
                x: e ? i.translate(t + n, null, null, r) + i.transB : i.left + i.offset + (i.opposite ? (r && s.oldChartWidth || s.chartWidth) - i.right - i.left : 0),
                y: e ? o - i.bottom + i.offset - (i.opposite ? i.height : 0) : o - i.translate(t + n, null, null, r) - i.transB
            }
        },
        getLabelPosition: function(e, t, r, i, s, o, u, a) {
            var f = this.axis,
                c = f.transA,
                h = f.reversed,
                f = f.staggerLines,
                e = e + s.x - (o && i ? o * c * (h ? -1 : 1) : 0),
                t = t + s.y - (o && !i ? o * c * (h ? 1 : -1) : 0);
            return l(s.y) || (t += n(r.styles.lineHeight) * .9 - r.getBBox().height / 2), f && (t += u / (a || 1) % f * 16), {
                x: e,
                y: t
            }
        },
        getMarkPath: function(e, t, n, r, i, s) {
            return s.crispLine(["M", e, t, "L", e + (i ? 0 : -n), t + (i ? n : 0)], r)
        },
        render: function(e, t, n) {
            var r = this.axis,
                i = r.options,
                s = r.chart.renderer,
                o = r.horiz,
                u = this.type,
                a = this.label,
                f = this.pos,
                l = i.labels,
                c = this.gridLine,
                h = u ? u + "Grid" : "grid",
                d = u ? u + "Tick" : "tick",
                v = i[h + "LineWidth"],
                m = i[h + "LineColor"],
                g = i[h + "LineDashStyle"],
                y = i[d + "Length"],
                h = i[d + "Width"] || 0,
                b = i[d + "Color"],
                w = i[d + "Position"],
                d = this.mark,
                E = l.step,
                S = !0,
                x = r.tickmarkOffset,
                T = this.getPosition(o, f, x, t),
                N = T.x,
                T = T.y,
                C = o && N === r.pos || !o && T === r.pos + r.len ? -1 : 1,
                k = r.staggerLines;
            this.isActive = !0, v && (f = r.getPlotLinePath(f + x, v * C, t, !0), c === U && (c = {
                stroke: m,
                "stroke-width": v
            }, g && (c.dashstyle = g), u || (c.zIndex = 1), t && (c.opacity = 0), this.gridLine = c = v ? s.path(f).attr(c).add(r.gridGroup) : null), !t && c && f && c[this.isNew ? "attr" : "animate"]({
                d: f,
                opacity: n
            })), h && y && (w === "inside" && (y = -y), r.opposite && (y = -y), t = this.getMarkPath(N, T, y, h * C, o, s), d ? d.animate({
                d: t,
                opacity: n
            }) : this.mark = s.path(t).attr({
                stroke: b,
                "stroke-width": h,
                opacity: n
            }).add(r.axisGroup)), a && !isNaN(N) && (a.xy = T = this.getLabelPosition(N, T, a, o, l, x, e, E), this.isFirst && !p(i.showFirstLabel, 1) || this.isLast && !p(i.showLastLabel, 1) ? S = !1 : !k && o && l.overflow === "justify" && !this.handleOverflow(e, T) && (S = !1), E && e % E && (S = !1), S && !isNaN(T.y) ? (T.opacity = n, a[this.isNew ? "attr" : "animate"](T), this.isNew = !1) : a.attr("y", -9999))
        },
        destroy: function() {
            k(this, this.axis)
        }
    }, H.prototype = {
        render: function() {
            var e = this,
                n = e.axis,
                r = n.horiz,
                i = (n.pointRange || 0) / 2,
                s = e.options,
                o = s.label,
                a = e.label,
                f = s.width,
                c = s.to,
                h = s.from,
                d = l(h) && l(c),
                v = s.value,
                m = s.dashStyle,
                g = e.svgElem,
                y = [],
                b, w = s.color,
                E = s.zIndex,
                S = s.events,
                x = n.chart.renderer;
            n.isLog && (h = u(h), c = u(c), v = u(v));
            if (f) {
                if (y = n.getPlotLinePath(v, f), i = {
                    stroke: w,
                    "stroke-width": f
                }, m) i.dashstyle = m
            } else {
                if (!d) return;
                if (h = K(h, n.min - i), c = Q(c, n.max + i), y = n.getPlotBandPath(h, c, s), i = {
                    fill: w
                }, s.borderWidth) i.stroke = s.borderColor, i["stroke-width"] = s.borderWidth
            }
            l(E) && (i.zIndex = E);
            if (g) y ? g.animate({
                d: y
            }, null, g.onGetPath) : (g.hide(), g.onGetPath = function() {
                g.show()
            });
            else if (y && y.length && (e.svgElem = g = x.path(y).attr(i).add(), S))
                for (b in s = function(t) {
                    g.on(t, function(n) {
                        S[t].apply(e, [n])
                    })
                }, S) s(b);
            return o && l(o.text) && y && y.length && n.width > 0 && n.height > 0 ? (o = t({
                align: r && d && "center",
                x: r ? !d && 4 : 10,
                verticalAlign: !r && d && "middle",
                y: r ? d ? 16 : 10 : d ? 6 : -4,
                rotation: r && !d && 90
            }, o), a || (e.label = a = x.text(o.text, 0, 0).attr({
                align: o.textAlign || o.align,
                rotation: o.rotation,
                zIndex: E
            }).css(o.style).add()), n = [y[1], y[4], p(y[6], y[1])], y = [y[2], y[5], p(y[7], y[2])], r = N(n), d = N(y), a.align(o, !1, {
                x: r,
                y: d,
                width: C(n) - r,
                height: C(y) - d
            }), a.show()) : a && a.hide(), e
        },
        destroy: function() {
            f(this.axis.plotLinesAndBands, this), k(this, this.axis)
        }
    }, B.prototype = {
        destroy: function() {
            k(this, this.axis)
        },
        setTotal: function(e) {
            this.cum = this.total = e
        },
        render: function(e) {
            var t = this.options,
                n = t.formatter.call(this);
            this.label ? this.label.attr({
                text: n,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(n, 0, 0, t.useHTML).css(t.style).attr({
                align: this.textAlign,
                rotation: t.rotation,
                visibility: "hidden"
            }).add(e)
        },
        setOffset: function(e, t) {
            var n = this.axis,
                r = n.chart,
                i = r.inverted,
                s = this.isNegative,
                o = n.translate(this.percent ? 100 : this.total, 0, 0, 0, 1),
                n = n.translate(0),
                n = G(o - n),
                u = r.xAxis[0].translate(this.x) + e,
                a = r.plotHeight,
                s = {
                    x: i ? s ? o : o - n : u,
                    y: i ? a - u - t : s ? a - o - n : a - o,
                    width: i ? n : t,
                    height: i ? t : n
                };
            if (i = this.label) i.align(this.alignOptions, null, s), s = i.alignAttr, i.attr({
                visibility: this.options.crop === !1 || r.isInsidePlot(s.x, s.y) ? lt ? "inherit" : "visible" : "hidden"
            })
        }
    }, j.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#C0C0C0",
            labels: Gt,
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 5,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {
                align: "middle",
                style: {
                    color: "#4d759e",
                    fontWeight: "bold"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                align: "right",
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            tickWidth: 0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return this.total
                },
                style: Gt.style
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                align: "right",
                x: -8,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                align: "left",
                x: 8,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                align: "center",
                x: 0,
                y: 14
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                align: "center",
                x: 0,
                y: -5
            },
            title: {
                rotation: 0
            }
        },
        init: function(e, t) {
            var n = t.isX;
            this.horiz = e.inverted ? !n : n, this.xOrY = (this.isXAxis = n) ? "x" : "y", this.opposite = t.opposite, this.side = this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3, this.setOptions(t);
            var r = this.options,
                i = r.type;
            this.labelFormatter = r.labels.formatter || this.defaultLabelFormatter, this.staggerLines = this.horiz && r.labels.staggerLines, this.userOptions = t, this.minPixelPadding = 0, this.chart = e, this.reversed = r.reversed, this.zoomEnabled = r.zoomEnabled !== !1, this.categories = r.categories || i === "category", this.isLog = i === "logarithmic", this.isDatetimeAxis = i === "datetime", this.isLinked = l(r.linkedTo), this.tickmarkOffset = this.categories && r.tickmarkPlacement === "between" ? .5 : 0, this.ticks = {}, this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = r.minRange || r.maxZoom, this.range = r.range, this.offset = r.offset || 0, this.stacks = {}, this._stacksTouched = 0, this.min = this.max = null;
            var s, r = this.options.events;
            en(this, e.axes) === -1 && (e.axes.push(this), e[n ? "xAxis" : "yAxis"].push(this)), this.series = this.series || [], e.inverted && n && this.reversed === U && (this.reversed = !0), this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (s in r) on(this, s, r[s]);
            this.isLog && (this.val2lin = u, this.lin2val = a)
        },
        setOptions: function(e) {
            this.options = t(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], t(yt[this.isXAxis ? "xAxis" : "yAxis"], e))
        },
        update: function(e, n) {
            var r = this.chart,
                e = r.options[this.xOrY + "Axis"][this.options.index] = t(this.userOptions, e);
            this.destroy(), this._addedPlotLB = !1, this.init(r, e), r.isDirtyBox = !0, p(n, !0) && r.redraw()
        },
        remove: function(e) {
            var t = this.chart,
                n = this.xOrY + "Axis";
            tn(this.series, function(e) {
                e.remove(!1)
            }), f(t.axes, this), f(t[n], this), t.options[n].splice(this.options.index, 1), this.destroy(), t.isDirtyBox = !0, p(e, !0) && t.redraw()
        },
        defaultLabelFormatter: function() {
            var e = this.axis,
                t = this.value,
                n = e.categories,
                r = this.dateTimeLabelFormat,
                i = yt.lang.numericSymbols,
                s = i && i.length,
                o, u = e.options.labels.format,
                e = e.isLog ? t : e.tickInterval;
            if (u) o = b(u, this);
            else if (n) o = t;
            else if (r) o = bt(r, t);
            else if (s && e >= 1e3)
                for (; s-- && o === U;) n = Math.pow(1e3, s + 1), e >= n && i[s] !== null && (o = g(t / n, -1) + i[s]);
            return o === U && (o = t >= 1e3 ? g(t, 0) : g(t, -1)), o
        },
        getSeriesExtremes: function() {
            var e = this,
                t = e.chart,
                n = e.stacks,
                r = [],
                i = [],
                s = e._stacksTouched += 1,
                o, u;
            e.hasVisibleSeries = !1, e.dataMin = e.dataMax = null, tn(e.series, function(o) {
                if (o.visible || !t.options.chart.ignoreHiddenSeries) {
                    var a = o.options,
                        f, c, h, d, v, m, g, y, b, w = a.threshold,
                        E, S = [],
                        x = 0;
                    e.hasVisibleSeries = !0, e.isLog && w <= 0 && (w = a.threshold = null);
                    if (e.isXAxis) {
                        if (a = o.xData, a.length) e.dataMin = Q(p(e.dataMin, a[0]), N(a)), e.dataMax = K(p(e.dataMax, a[0]), C(a))
                    } else {
                        var T, k, L, A = o.cropped,
                            M = o.xAxis.getExtremes(),
                            _ = !! o.modifyValue;
                        f = a.stacking, e.usePercentage = f === "percent", f && (v = a.stack, d = o.type + p(v, ""), m = "-" + d, o.stackKey = d, c = r[d] || [], r[d] = c, h = i[m] || [], i[m] = h), e.usePercentage && (e.dataMin = 0, e.dataMax = 99), a = o.processedXData, g = o.processedYData, E = g.length;
                        for (u = 0; u < E; u++) {
                            y = a[u], b = g[u], f && (k = (T = b < w) ? h : c, L = T ? m : d, l(k[y]) ? (k[y] = O(k[y] + b), b = [b, k[y]]) : k[y] = b, n[L] || (n[L] = {}), n[L][y] || (n[L][y] = new B(e, e.options.stackLabels, T, y, v, f)), n[L][y].setTotal(k[y]), n[L][y].touched = s);
                            if (b !== null && b !== U && (!e.isLog || b.length || b > 0))
                                if (_ && (b = o.modifyValue(b)), o.getExtremesFromAll || A || (a[u + 1] || y) >= M.min && (a[u - 1] || y) <= M.max)
                                    if (y = b.length)
                                        for (; y--;) b[y] !== null && (S[x++] = b[y]);
                                    else S[x++] = b
                        }!e.usePercentage && S.length && (o.dataMin = f = N(S), o.dataMax = o = C(S), e.dataMin = Q(p(e.dataMin, f), f), e.dataMax = K(p(e.dataMax, o), o)), l(w) && (e.dataMin >= w ? (e.dataMin = w, e.ignoreMinPadding = !0) : e.dataMax < w && (e.dataMax = w, e.ignoreMaxPadding = !0))
                    }
                }
            });
            for (o in n)
                for (u in n[o]) n[o][u].touched < s && (n[o][u].destroy(), delete n[o][u])
        },
        translate: function(e, t, n, r, i, s) {
            var o = this.len,
                u = 1,
                a = 0,
                f = r ? this.oldTransA : this.transA,
                r = r ? this.oldMin : this.min,
                l = this.minPixelPadding,
                i = (this.options.ordinal || this.isLog && i) && this.lin2val;
            return f || (f = this.transA), n && (u *= -1, a = o), this.reversed && (u *= -1, a -= u * o), t ? (e = e * u + a, e -= l, e = e / f + r, i && (e = this.lin2val(e))) : (i && (e = this.val2lin(e)), e = u * (e - r) * f + a + u * l + (s ? f * this.pointRange / 2 : 0)), e
        },
        toPixels: function(e, t) {
            return this.translate(e, !1, !this.horiz, null, !0) + (t ? 0 : this.pos)
        },
        toValue: function(e, t) {
            return this.translate(e - (t ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(e, t, n, r) {
            var i = this.chart,
                s = this.left,
                o = this.top,
                u, a, f, e = this.translate(e, null, null, n),
                l = n && i.oldChartHeight || i.chartHeight,
                c = n && i.oldChartWidth || i.chartWidth,
                h;
            u = this.transB, n = a = V(e + u), u = f = V(l - e - u);
            if (isNaN(e)) h = !0;
            else if (this.horiz) {
                if (u = o, f = l - this.bottom, n < s || n > s + this.width) h = !0
            } else if (n = s, a = c - this.right, u < o || u > o + this.height) h = !0;
            return h && !r ? null : i.renderer.crispLine(["M", n, u, "L", a, f], t || 0)
        },
        getPlotBandPath: function(e, t) {
            var n = this.getPlotLinePath(t),
                r = this.getPlotLinePath(e);
            return r && n ? r.push(n[4], n[5], n[1], n[2]) : r = null, r
        },
        getLinearTickPositions: function(e, t, n) {
            for (var r, t = O($(t / e) * e), n = O(J(n / e) * e), i = []; t <= n;) {
                i.push(t), t = O(t + e);
                if (t === r) break;
                r = t
            }
            return i
        },
        getLogTickPositions: function(e, t, n, r) {
            var i = this.options,
                s = this.len,
                o = [];
            r || (this._minorAutoInterval = null);
            if (e >= .5) e = V(e), o = this.getLinearTickPositions(e, t, n);
            else if (e >= .08)
                for (var s = $(t), f, l, c, h, d, i = e > .3 ? [1, 2, 4] : e > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; s < n + 1 && !d; s++) {
                    l = i.length;
                    for (f = 0; f < l && !d; f++) c = u(a(s) * i[f]), c > t && (!r || h <= n) && o.push(h), h > n && (d = !0), h = c
                } else if (t = a(t), n = a(n), e = i[r ? "minorTickInterval" : "tickInterval"], e = p(e === "auto" ? null : e, this._minorAutoInterval, (n - t) * (i.tickPixelInterval / (r ? 5 : 1)) / ((r ? s / this.tickPositions.length : s) || 1)), e = w(e, null, X.pow(10, $(X.log(e) / X.LN10))), o = sn(this.getLinearTickPositions(e, t, n), u), !r) this._minorAutoInterval = e / 5;
            return r || (this.tickInterval = e), o
        },
        getMinorTickPositions: function() {
            var e = this.options,
                t = this.tickPositions,
                n = this.minorTickInterval,
                r = [],
                i;
            if (this.isLog) {
                i = t.length;
                for (e = 1; e < i; e++) r = r.concat(this.getLogTickPositions(n, t[e - 1], t[e], !0))
            } else if (this.isDatetimeAxis && e.minorTickInterval === "auto") r = r.concat(S(E(n), this.min, this.max, e.startOfWeek)), r[0] < this.min && r.shift();
            else
                for (t = this.min + (t[0] - this.min) % n; t <= this.max; t += n) r.push(t);
            return r
        },
        adjustForMinRange: function() {
            var e = this.options,
                t = this.min,
                n = this.max,
                r, i = this.dataMax - this.dataMin >= this.minRange,
                s, o, u, a, f;
            this.isXAxis && this.minRange === U && !this.isLog && (l(e.min) || l(e.max) ? this.minRange = null : (tn(this.series, function(e) {
                a = e.xData;
                for (o = f = e.xIncrement ? 1 : a.length - 1; o > 0; o--)
                    if (u = a[o] - a[o - 1], s === U || u < s) s = u
            }), this.minRange = Q(s * 5, this.dataMax - this.dataMin)));
            if (n - t < this.minRange) {
                var c = this.minRange;
                r = (c - n + t) / 2, r = [t - r, p(e.min, t - r)], i && (r[2] = this.dataMin), t = C(r), n = [t + c, p(e.max, t + c)], i && (n[2] = this.dataMax), n = N(n), n - t < c && (r[0] = n - c, r[1] = p(e.min, n - c), t = C(r))
            }
            this.min = t, this.max = n
        },
        setAxisTranslation: function(e) {
            var t = this.max - this.min,
                n = 0,
                r, i = 0,
                s = 0,
                o = this.linkedParent,
                u = this.transA;
            this.isXAxis && (o ? (i = o.minPointOffset, s = o.pointRangePadding) : tn(this.series, function(e) {
                var o = e.pointRange,
                    u = e.options.pointPlacement,
                    a = e.closestPointRange;
                o > t && (o = 0), n = K(n, o), i = K(i, u ? 0 : o / 2), s = K(s, u === "on" ? 0 : o), !e.noSharedTooltip && l(a) && (r = l(r) ? Q(r, a) : a)
            }), o = this.ordinalSlope ? this.ordinalSlope / r : 1, this.minPointOffset = i *= o, this.pointRangePadding = s *= o, this.pointRange = Q(n, t), this.closestPointRange = r), e && (this.oldTransA = u), this.translationSlope = this.transA = u = this.len / (t + s || 1), this.transB = this.horiz ? this.left : this.bottom, this.minPixelPadding = u * i
        },
        setTickPositions: function(e) {
            var t = this,
                n = t.chart,
                r = t.options,
                i = t.isLog,
                s = t.isDatetimeAxis,
                o = t.isXAxis,
                a = t.isLinked,
                f = t.options.tickPositioner,
                c = r.maxPadding,
                h = r.minPadding,
                d = r.tickInterval,
                v = r.minTickInterval,
                m = r.tickPixelInterval,
                g = t.categories;
            a ? (t.linkedParent = n[o ? "xAxis" : "yAxis"][r.linkedTo], n = t.linkedParent.getExtremes(), t.min = p(n.min, n.dataMin), t.max = p(n.max, n.dataMax), r.type !== t.linkedParent.options.type && A(11, 1)) : (t.min = p(t.userMin, r.min, t.dataMin), t.max = p(t.userMax, r.max, t.dataMax)), i && (!e && Q(t.min, p(t.dataMin, t.min)) <= 0 && A(10, 1), t.min = O(u(t.min)), t.max = O(u(t.max))), t.range && (t.userMin = t.min = K(t.min, t.max - t.range), t.userMax = t.max, e) && (t.range = null), t.beforePadding && t.beforePadding(), t.adjustForMinRange(), !g && !t.usePercentage && !a && l(t.min) && l(t.max) && (n = t.max - t.min) && (!l(r.min) && !l(t.userMin) && h && (t.dataMin < 0 || !t.ignoreMinPadding) && (t.min -= n * h), !l(r.max) && !l(t.userMax) && c && (t.dataMax > 0 || !t.ignoreMaxPadding) && (t.max += n * c)), t.tickInterval = t.min === t.max || t.min === void 0 || t.max === void 0 ? 1 : a && !d && m === t.linkedParent.options.tickPixelInterval ? t.linkedParent.tickInterval : p(d, g ? 1 : (t.max - t.min) * m / (t.len || 1)), o && !e && tn(t.series, function(e) {
                e.processData(t.min !== t.oldMin || t.max !== t.oldMax)
            }), t.setAxisTranslation(!0), t.beforeSetTickPositions && t.beforeSetTickPositions(), t.postProcessTickInterval && (t.tickInterval = t.postProcessTickInterval(t.tickInterval)), !d && t.tickInterval < v && (t.tickInterval = v), !s && !i && (e = X.pow(10, $(X.log(t.tickInterval) / X.LN10)), !d) && (t.tickInterval = w(t.tickInterval, null, e, r)), t.minorTickInterval = r.minorTickInterval === "auto" && t.tickInterval ? t.tickInterval / 5 : r.minorTickInterval, t.tickPositions = f = r.tickPositions ? [].concat(r.tickPositions) : f && f.apply(t, [t.min, t.max]), f || (f = s ? (t.getNonLinearTimeTicks || S)(E(t.tickInterval, r.units), t.min, t.max, r.startOfWeek, t.ordinalPositions, t.closestPointRange, !0) : i ? t.getLogTickPositions(t.tickInterval, t.min, t.max) : t.getLinearTickPositions(t.tickInterval, t.min, t.max), t.tickPositions = f), a || (i = f[0], s = f[f.length - 1], a = t.minPointOffset || 0, r.startOnTick ? t.min = i : t.min - a > i && f.shift(), r.endOnTick ? t.max = s : t.max + a < s && f.pop(), f.length === 1 && (t.min -= .001, t.max += .001))
        },
        setMaxTicks: function() {
            var e = this.chart,
                t = e.maxTicks || {}, n = this.tickPositions,
                r = this._maxTicksKey = [this.xOrY, this.pos, this.len].join("-");
            !this.isLinked && !this.isDatetimeAxis && n && n.length > (t[r] || 0) && this.options.alignTicks !== !1 && (t[r] = n.length), e.maxTicks = t
        },
        adjustTickAmount: function() {
            var e = this._maxTicksKey,
                t = this.tickPositions,
                n = this.chart.maxTicks;
            if (n && n[e] && !this.isDatetimeAxis && !this.categories && !this.isLinked && this.options.alignTicks !== !1) {
                var r = this.tickAmount,
                    i = t.length;
                this.tickAmount = e = n[e];
                if (i < e) {
                    for (; t.length < e;) t.push(O(t[t.length - 1] + this.tickInterval));
                    this.transA *= (i - 1) / (e - 1), this.max = t[t.length - 1]
                }
                l(r) && e !== r && (this.isDirty = !0)
            }
        },
        setScale: function() {
            var e = this.stacks,
                t, n, r, i;
            this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), i = this.len !== this.oldAxisLength, tn(this.series, function(e) {
                if (e.isDirtyData || e.isDirty || e.xAxis.isDirty) r = !0
            });
            if (i || r || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax)
                if (this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickPositions(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, !this.isDirty) this.isDirty = i || this.min !== this.oldMin || this.max !== this.oldMax;
            if (!this.isXAxis)
                for (t in e)
                    for (n in e[t]) e[t][n].cum = e[t][n].total;
            this.setMaxTicks()
        },
        setExtremes: function(t, n, r, i, s) {
            var o = this,
                u = o.chart,
                r = p(r, !0),
                s = e(s, {
                    min: t,
                    max: n
                });
            an(o, "setExtremes", s, function() {
                o.userMin = t, o.userMax = n, o.isDirtyExtremes = !0, r && u.redraw(i)
            })
        },
        zoom: function(e, t) {
            return this.allowZoomOutside || (e <= this.dataMin && (e = U), t >= this.dataMax && (t = U)), this.displayBtn = e !== U || t !== U, this.setExtremes(e, t, !1, U, {
                trigger: "zoom"
            }), !0
        },
        setAxisSize: function() {
            var e = this.chart,
                t = this.options,
                n = t.offsetLeft || 0,
                r = t.offsetRight || 0,
                i = this.horiz,
                s, o;
            this.left = o = p(t.left, e.plotLeft + n), this.top = s = p(t.top, e.plotTop), this.width = n = p(t.width, e.plotWidth - n + r), this.height = t = p(t.height, e.plotHeight), this.bottom = e.chartHeight - t - s, this.right = e.chartWidth - n - o, this.len = K(i ? n : t, 0), this.pos = i ? o : s
        },
        getExtremes: function() {
            var e = this.isLog;
            return {
                min: e ? O(a(this.min)) : this.min,
                max: e ? O(a(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(e) {
            var t = this.isLog,
                n = t ? a(this.min) : this.min,
                t = t ? a(this.max) : this.max;
            return n > e || e === null ? e = n : t < e && (e = t), this.translate(e, 0, 1, 0, 1)
        },
        addPlotBand: function(e) {
            this.addPlotBandOrLine(e, "plotBands")
        },
        addPlotLine: function(e) {
            this.addPlotBandOrLine(e, "plotLines")
        },
        addPlotBandOrLine: function(e, t) {
            var n = (new H(this, e)).render(),
                r = this.userOptions;
            return t && (r[t] = r[t] || [], r[t].push(e)), this.plotLinesAndBands.push(n), n
        },
        getOffset: function() {
            var e = this,
                t = e.chart,
                n = t.renderer,
                r = e.options,
                i = e.tickPositions,
                s = e.ticks,
                o = e.horiz,
                u = e.side,
                a = t.inverted ? [1, 0, 3, 2][u] : u,
                f, c = 0,
                h, d = 0,
                v = r.title,
                m = r.labels,
                g = 0,
                y = t.axisOffset,
                b = t.clipOffset,
                w = [-1, 1, 1, -1][u],
                E;
            e.hasData = t = e.hasVisibleSeries || l(e.min) && l(e.max) && !! i, e.showAxis = f = t || p(r.showEmpty, !0), e.axisGroup || (e.gridGroup = n.g("grid").attr({
                zIndex: r.gridZIndex || 1
            }).add(), e.axisGroup = n.g("axis").attr({
                zIndex: r.zIndex || 2
            }).add(), e.labelGroup = n.g("axis-labels").attr({
                zIndex: m.zIndex || 7
            }).add());
            if (t || e.isLinked) tn(i, function(t) {
                s[t] ? s[t].addLabel() : s[t] = new P(e, t)
            }), tn(i, function(e) {
                if (u === 0 || u === 2 || {
                    1: "left",
                    3: "right"
                }[u] === m.align) g = K(s[e].getLabelSize(), g)
            }), e.staggerLines && (g += (e.staggerLines - 1) * 16);
            else
                for (E in s) s[E].destroy(), delete s[E];
            v && v.text && v.enabled !== !1 && (e.axisTitle || (e.axisTitle = n.text(v.text, 0, 0, v.useHTML).attr({
                zIndex: 7,
                rotation: v.rotation || 0,
                align: v.textAlign || {
                    low: "left",
                    middle: "center",
                    high: "right"
                }[v.align]
            }).css(v.style).add(e.axisGroup), e.axisTitle.isNew = !0), f && (c = e.axisTitle.getBBox()[o ? "height" : "width"], d = p(v.margin, o ? 5 : 10), h = v.offset), e.axisTitle[f ? "show" : "hide"]()), e.offset = w * p(r.offset, y[u]), e.axisTitleMargin = p(h, g + d + (u !== 2 && g && w * r.labels[o ? "y" : "x"])), y[u] = K(y[u], e.axisTitleMargin + c + w * e.offset), b[a] = K(b[a], r.lineWidth)
        },
        getLinePath: function(e) {
            var t = this.chart,
                n = this.opposite,
                r = this.offset,
                i = this.horiz,
                s = this.left + (n ? this.width : 0) + r;
            return this.lineTop = r = t.chartHeight - this.bottom - (n ? this.height : 0) + r, n || (e *= -1), t.renderer.crispLine(["M", i ? this.left : s, i ? r : this.top, "L", i ? t.chartWidth - this.right : s, i ? r : t.chartHeight - this.bottom], e)
        },
        getTitlePosition: function() {
            var e = this.horiz,
                t = this.left,
                r = this.top,
                i = this.len,
                s = this.options.title,
                o = e ? t : r,
                u = this.opposite,
                a = this.offset,
                f = n(s.style.fontSize || 12),
                i = {
                    low: o + (e ? 0 : i),
                    middle: o + i / 2,
                    high: o + (e ? i : 0)
                }[s.align],
                t = (e ? r + this.height : t) + (e ? 1 : -1) * (u ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? f : 0);
            return {
                x: e ? i : t + (u ? this.width : 0) + a + (s.x || 0),
                y: e ? t - (u ? this.height : 0) + a : i + (s.y || 0)
            }
        },
        render: function() {
            var e = this,
                t = e.chart,
                n = t.renderer,
                r = e.options,
                i = e.isLog,
                s = e.isLinked,
                o = e.tickPositions,
                u = e.axisTitle,
                f = e.stacks,
                c = e.ticks,
                h = e.minorTicks,
                p = e.alternateBands,
                d = r.stackLabels,
                v = r.alternateGridColor,
                m = e.tickmarkOffset,
                g = r.lineWidth,
                y, b = t.hasRendered && l(e.oldMin) && !isNaN(e.oldMin);
            y = e.hasData;
            var w = e.showAxis,
                E, S;
            tn([c, h, p], function(e) {
                for (var t in e) e[t].isActive = !1
            });
            if (y || s)
                if (e.minorTickInterval && !e.categories && tn(e.getMinorTickPositions(), function(t) {
                    h[t] || (h[t] = new P(e, t, "minor")), b && h[t].isNew && h[t].render(null, !0), h[t].render(null, !1, 1)
                }), o.length && (tn(o.slice(1).concat([o[0]]), function(t, n) {
                    n = n === o.length - 1 ? 0 : n + 1;
                    if (!s || t >= e.min && t <= e.max) c[t] || (c[t] = new P(e, t)), b && c[t].isNew && c[t].render(n, !0), c[t].render(n, !1, 1)
                }), m && e.min === 0 && (c[-1] || (c[-1] = new P(e, -1, null, !0)), c[-1].render(-1))), v && tn(o, function(t, n) {
                    n % 2 === 0 && t < e.max && (p[t] || (p[t] = new H(e)), E = t + m, S = o[n + 1] !== U ? o[n + 1] + m : e.max, p[t].options = {
                        from: i ? a(E) : E,
                        to: i ? a(S) : S,
                        color: v
                    }, p[t].render(), p[t].isActive = !0)
                }), !e._addedPlotLB) tn((r.plotLines || []).concat(r.plotBands || []), function(t) {
                    e.addPlotBandOrLine(t)
                }), e._addedPlotLB = !0;
            tn([c, h, p], function(e) {
                var n, r, i = [],
                    s = wt ? wt.duration || 500 : 0,
                    o = function() {
                        for (r = i.length; r--;) e[i[r]] && !e[i[r]].isActive && (e[i[r]].destroy(), delete e[i[r]])
                    };
                for (n in e) e[n].isActive || (e[n].render(n, !1, 0), e[n].isActive = !1, i.push(n));
                e === p || !t.hasRendered || !s ? o() : s && setTimeout(o, s)
            }), g && (y = e.getLinePath(g), e.axisLine ? e.axisLine.animate({
                d: y
            }) : e.axisLine = n.path(y).attr({
                stroke: r.lineColor,
                "stroke-width": g,
                zIndex: 7
            }).add(e.axisGroup), e.axisLine[w ? "show" : "hide"]()), u && w && (u[u.isNew ? "attr" : "animate"](e.getTitlePosition()), u.isNew = !1);
            if (d && d.enabled) {
                var x, T, r = e.stackTotalGroup;
                r || (e.stackTotalGroup = r = n.g("stack-labels").attr({
                    visibility: "visible",
                    zIndex: 6
                }).add()), r.translate(t.plotLeft, t.plotTop);
                for (x in f)
                    for (T in n = f[x], n) n[T].render(r)
            }
            e.isDirty = !1
        },
        removePlotBandOrLine: function(e) {
            for (var t = this.plotLinesAndBands, n = t.length; n--;) t[n].id === e && t[n].destroy()
        },
        setTitle: function(e, t) {
            this.update({
                title: e
            }, t)
        },
        redraw: function() {
            var e = this.chart.pointer;
            e.reset && e.reset(!0), this.render(), tn(this.plotLinesAndBands, function(e) {
                e.render()
            }), tn(this.series, function(e) {
                e.isDirty = !0
            })
        },
        setCategories: function(e, t) {
            this.update({
                categories: e
            }, t)
        },
        destroy: function() {
            var e = this,
                t = e.stacks,
                n;
            un(e);
            for (n in t) k(t[n]), t[n] = null;
            tn([e.ticks, e.minorTicks, e.alternateBands, e.plotLinesAndBands], function(e) {
                k(e)
            }), tn("stackTotalGroup,axisLine,axisGroup,gridGroup,labelGroup,axisTitle".split(","), function(t) {
                e[t] && (e[t] = e[t].destroy())
            })
        }
    }, F.prototype = {
        init: function(e, t) {
            var r = t.borderWidth,
                i = t.style,
                s = n(i.padding);
            this.chart = e, this.options = t, this.crosshairs = [], this.now = {
                x: 0,
                y: 0
            }, this.isHidden = !0, this.label = e.renderer.label("", 0, 0, t.shape, null, null, t.useHTML, null, "tooltip").attr({
                padding: s,
                fill: t.backgroundColor,
                "stroke-width": r,
                r: t.borderRadius,
                zIndex: 8
            }).css(i).css({
                padding: 0
            }).hide().add(), ht || this.label.shadow(t.shadow), this.shared = t.shared
        },
        destroy: function() {
            tn(this.crosshairs, function(e) {
                e && e.destroy()
            }), this.label && (this.label = this.label.destroy())
        },
        move: function(t, n, r, i) {
            var s = this,
                o = s.now,
                u = s.options.animation !== !1 && !s.isHidden;
            e(o, {
                x: u ? (2 * o.x + t) / 3 : t,
                y: u ? (o.y + n) / 2 : n,
                anchorX: u ? (2 * o.anchorX + r) / 3 : r,
                anchorY: u ? (o.anchorY + i) / 2 : i
            }), s.label.attr(o), u && (G(t - o.x) > 1 || G(n - o.y) > 1) && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                s && s.move(t, n, r, i)
            }, 32))
        },
        hide: function() {
            var e = this,
                t;
            this.isHidden || (t = this.chart.hoverPoints, this.hideTimer = setTimeout(function() {
                e.label.fadeOut(), e.isHidden = !0
            }, p(this.options.hideDelay, 500)), t && tn(t, function(e) {
                e.setState()
            }), this.chart.hoverPoints = null)
        },
        hideCrosshairs: function() {
            tn(this.crosshairs, function(e) {
                e && e.hide()
            })
        },
        getAnchor: function(e, t) {
            var n, r = this.chart,
                i = r.inverted,
                s = r.plotTop,
                o = 0,
                u = 0,
                a, e = h(e);
            return n = e[0].tooltipPos, this.followPointer && t && (t.chartX === U && (t = r.pointer.normalize(t)), n = [t.chartX - r.plotLeft, t.chartY - s]), n || (tn(e, function(e) {
                a = e.series.yAxis, o += e.plotX, u += (e.plotLow ? (e.plotLow + e.plotHigh) / 2 : e.plotY) + (!i && a ? a.top - s : 0)
            }), o /= e.length, u /= e.length, n = [i ? r.plotWidth - u : o, this.shared && !i && e.length > 1 && t ? t.chartY - s : i ? r.plotHeight - o : u]), sn(n, V)
        },
        getPosition: function(e, t, n) {
            var r = this.chart,
                i = r.plotLeft,
                s = r.plotTop,
                o = r.plotWidth,
                u = r.plotHeight,
                a = p(this.options.distance, 12),
                f = n.plotX,
                n = n.plotY,
                r = f + i + (r.inverted ? a : -e - a),
                l = n - t + s + 15,
                c;
            return r < 7 && (r = i + K(f, 0) + a), r + e > i + o && (r -= r + e - (i + o), l = n - t + s - a, c = !0), l < s + 5 && (l = s + 5, c && n >= l && n <= l + t && (l = n + s + a)), l + t > s + u && (l = K(s, s + u - t - a)), {
                x: r,
                y: l
            }
        },
        defaultFormatter: function(e) {
            var t = this.points || h(this),
                n = t[0].series,
                r;
            return r = [n.tooltipHeaderFormatter(t[0])], tn(t, function(e) {
                n = e.series, r.push(n.tooltipFormatter && n.tooltipFormatter(e) || e.point.tooltipFormatter(n.tooltipOptions.pointFormat))
            }), r.push(e.options.footerFormat || ""), r.join("")
        },
        refresh: function(e, t) {
            var n = this.chart,
                r = this.label,
                i = this.options,
                s, o, a, f = {}, l, c = [];
            l = i.formatter || this.defaultFormatter;
            var f = n.hoverPoints,
                d, v = i.crosshairs;
            a = this.shared, clearTimeout(this.hideTimer), this.followPointer = h(e)[0].series.tooltipOptions.followPointer, o = this.getAnchor(e, t), s = o[0], o = o[1], a && (!e.series || !e.series.noSharedTooltip) ? (n.hoverPoints = e, f && tn(f, function(e) {
                e.setState()
            }), tn(e, function(e) {
                e.setState("hover"), c.push(e.getLabelConfig())
            }), f = {
                x: e[0].category,
                y: e[0].y
            }, f.points = c, e = e[0]) : f = e.getLabelConfig(), l = l.call(f, this), f = e.series, a = a || !f.isCartesian || f.tooltipOutsidePlot || n.isInsidePlot(s, o), l === !1 || !a ? this.hide() : (this.isHidden && (cn(r), r.attr("opacity", 1).show()), r.attr({
                text: l
            }), d = i.borderColor || e.color || f.color || "#606060", r.attr({
                stroke: d
            }), this.updatePosition({
                plotX: s,
                plotY: o
            }), this.isHidden = !1);
            if (v) {
                v = h(v);
                for (r = v.length; r--;)
                    if (i = e.series[r ? "yAxis" : "xAxis"], v[r] && i)(a = r ? p(e.stackY, e.y) : e.x, i.isLog && (a = u(a)), i = i.getPlotLinePath(a, 1), this.crosshairs[r]) ? this.crosshairs[r].attr({
                        d: i,
                        visibility: "visible"
                    }) : (a = {
                        "stroke-width": v[r].width || 1,
                        stroke: v[r].color || "#C0C0C0",
                        zIndex: v[r].zIndex || 2
                    }, v[r].dashStyle && (a.dashstyle = v[r].dashStyle), this.crosshairs[r] = n.renderer.path(i).attr(a).add())
            }
            an(n, "tooltipRefresh", {
                text: l,
                x: s + n.plotLeft,
                y: o + n.plotTop,
                borderColor: d
            })
        },
        updatePosition: function(e) {
            var t = this.chart,
                n = this.label,
                n = (this.options.positioner || this.getPosition).call(this, n.width, n.height, e);
            this.move(V(n.x), V(n.y), e.plotX + t.plotLeft, e.plotY + t.plotTop)
        }
    }, I.prototype = {
        init: function(e, t) {
            var n = ht ? "" : t.chart.zoomType,
                r = e.inverted,
                i;
            this.options = t, this.chart = e, this.zoomX = i = /x/.test(n), this.zoomY = n = /y/.test(n), this.zoomHor = i && !r || n && r, this.zoomVert = n && !r || i && r, this.pinchDown = [], this.lastValidTouch = {}, t.tooltip.enabled && (e.tooltip = new F(e, t.tooltip)), this.setDOMEvents()
        },
        normalize: function(t) {
            var n, r, i, t = t || W.event;
            return t.target || (t.target = t.srcElement), t = fn(t), i = t.touches ? t.touches.item(0) : t, this.chartPosition = n = rn(this.chart.container), i.pageX === U ? (r = t.x, n = t.y) : (r = i.pageX - n.left, n = i.pageY - n.top), e(t, {
                chartX: V(r),
                chartY: V(n)
            })
        },
        getCoordinates: function(e) {
            var t = {
                xAxis: [],
                yAxis: []
            };
            return tn(this.chart.axes, function(n) {
                t[n.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: n,
                    value: n.toValue(e[n.horiz ? "chartX" : "chartY"])
                })
            }), t
        },
        getIndex: function(e) {
            var t = this.chart;
            return t.inverted ? t.plotHeight + t.plotTop - e.chartY : e.chartX - t.plotLeft
        },
        runPointActions: function(e) {
            var t = this.chart,
                n = t.series,
                r = t.tooltip,
                i, s = t.hoverPoint,
                o = t.hoverSeries,
                u, a, f = t.chartWidth,
                l = this.getIndex(e);
            if (r && this.options.tooltip.shared && (!o || !o.noSharedTooltip)) {
                i = [], u = n.length;
                for (a = 0; a < u; a++) n[a].visible && n[a].options.enableMouseTracking !== !1 && !n[a].noSharedTooltip && n[a].tooltipPoints.length && (t = n[a].tooltipPoints[l], t.series) && (t._dist = G(l - t.clientX), f = Q(f, t._dist), i.push(t));
                for (u = i.length; u--;) i[u]._dist > f && i.splice(u, 1);
                i.length && i[0].clientX !== this.hoverX && (r.refresh(i, e), this.hoverX = i[0].clientX)
            }
            o && o.tracker ? (t = o.tooltipPoints[l]) && t !== s && t.onMouseOver(e) : r && r.followPointer && !r.isHidden && (e = r.getAnchor([{}], e), r.updatePosition({
                plotX: e[0],
                plotY: e[1]
            }))
        },
        reset: function(e) {
            var t = this.chart,
                n = t.hoverSeries,
                r = t.hoverPoint,
                i = t.tooltip,
                t = i && i.shared ? t.hoverPoints : r;
            (e = e && i && t) && h(t)[0].plotX === U && (e = !1), e ? i.refresh(t) : (r && r.onMouseOut(), n && n.onMouseOut(), i && (i.hide(), i.hideCrosshairs()), this.hoverX = null)
        },
        scaleGroups: function(e, t) {
            var n = this.chart;
            tn(n.series, function(r) {
                r.xAxis.zoomEnabled && (r.group.attr(e), r.markerGroup && (r.markerGroup.attr(e), r.markerGroup.clip(t ? n.clipRect : null)), r.dataLabelsGroup && r.dataLabelsGroup.attr(e))
            }), n.clipRect.attr(t || n.clipBox)
        },
        pinchTranslateDirection: function(e, t, n, r, i, s, o) {
            var u = this.chart,
                a = e ? "x" : "y",
                f = e ? "X" : "Y",
                l = "chart" + f,
                c = e ? "width" : "height",
                h = u["plot" + (e ? "Left" : "Top")],
                p, d, v = 1,
                m = u.inverted,
                g = u.bounds[e ? "h" : "v"],
                y = t.length === 1,
                b = t[0][l],
                w = n[0][l],
                E = !y && t[1][l],
                S = !y && n[1][l],
                x, n = function() {
                    !y && G(b - E) > 20 && (v = G(w - S) / G(b - E)), d = (h - w) / v + b, p = u["plot" + (e ? "Width" : "Height")] / v
                };
            n(), t = d, t < g.min ? (t = g.min, x = !0) : t + p > g.max && (t = g.max - p, x = !0), x ? (w -= .8 * (w - o[a][0]), y || (S -= .8 * (S - o[a][1])), n()) : o[a] = [w, S], m || (s[a] = d - h, s[c] = p), s = m ? 1 / v : v, i[c] = p, i[a] = t, r[m ? e ? "scaleY" : "scaleX" : "scale" + f] = v, r["translate" + f] = s * h + (w - s * b)
        },
        pinch: function(t) {
            var n = this,
                r = n.chart,
                i = n.pinchDown,
                s = r.tooltip.options.followTouchMove,
                o = t.touches,
                u = o.length,
                a = n.lastValidTouch,
                f = n.zoomHor || n.pinchHor,
                l = n.zoomVert || n.pinchVert,
                c = f || l,
                h = n.selectionMarker,
                p = {}, d = {};
            t.type === "touchstart" && s && (n.inClass(t.target, "highcharts-tracker") ? (!r.runTrackerClick || u > 1) && t.preventDefault() : (!r.runChartClick || u > 1) && t.preventDefault()), sn(o, function(e) {
                return n.normalize(e)
            }), t.type === "touchstart" ? (tn(o, function(e, t) {
                i[t] = {
                    chartX: e.chartX,
                    chartY: e.chartY
                }
            }), a.x = [i[0].chartX, i[1] && i[1].chartX], a.y = [i[0].chartY, i[1] && i[1].chartY], tn(r.axes, function(e) {
                if (e.zoomEnabled) {
                    var t = r.bounds[e.horiz ? "h" : "v"],
                        n = e.minPixelPadding,
                        i = e.toPixels(e.dataMin),
                        s = e.toPixels(e.dataMax),
                        o = Q(i, s),
                        i = K(i, s);
                    t.min = Q(e.pos, o - n), t.max = K(e.pos + e.len, i + n)
                }
            })) : i.length && (h || (n.selectionMarker = h = e({
                destroy: xt
            }, r.plotBox)), f && n.pinchTranslateDirection(!0, i, o, p, h, d, a), l && n.pinchTranslateDirection(!1, i, o, p, h, d, a), n.hasPinched = c, n.scaleGroups(p, d), !c && s && u === 1 && this.runPointActions(n.normalize(t)))
        },
        dragStart: function(e) {
            var t = this.chart;
            t.mouseIsDown = e.type, t.cancelClick = !1, t.mouseDownX = this.mouseDownX = e.chartX, this.mouseDownY = e.chartY
        },
        drag: function(e) {
            var t = this.chart,
                n = t.options.chart,
                r = e.chartX,
                e = e.chartY,
                i = this.zoomHor,
                s = this.zoomVert,
                o = t.plotLeft,
                u = t.plotTop,
                a = t.plotWidth,
                f = t.plotHeight,
                l, c = this.mouseDownX,
                h = this.mouseDownY;
            r < o ? r = o : r > o + a && (r = o + a), e < u ? e = u : e > u + f && (e = u + f), this.hasDragged = Math.sqrt(Math.pow(c - r, 2) + Math.pow(h - e, 2)), this.hasDragged > 10 && (l = t.isInsidePlot(c - o, h - u), t.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !this.selectionMarker && (this.selectionMarker = t.renderer.rect(o, u, i ? 1 : a, s ? 1 : f, 0).attr({
                fill: n.selectionMarkerFill || "rgba(69,114,167,0.25)",
                zIndex: 7
            }).add()), this.selectionMarker && i && (i = r - c, this.selectionMarker.attr({
                width: G(i),
                x: (i > 0 ? 0 : i) + c
            })), this.selectionMarker && s && (i = e - h, this.selectionMarker.attr({
                height: G(i),
                y: (i > 0 ? 0 : i) + h
            })), l && !this.selectionMarker && n.panning && t.pan(r))
        },
        drop: function(t) {
            var n = this.chart,
                r = this.hasPinched;
            if (this.selectionMarker) {
                var i = {
                    xAxis: [],
                    yAxis: [],
                    originalEvent: t.originalEvent || t
                }, s = this.selectionMarker,
                    o = s.x,
                    u = s.y,
                    a;
                if (this.hasDragged || r) tn(n.axes, function(e) {
                    if (e.zoomEnabled) {
                        var t = e.horiz,
                            n = e.minPixelPadding,
                            r = e.toValue((t ? o : u) + n),
                            t = e.toValue((t ? o + s.width : u + s.height) - n);
                        !isNaN(r) && !isNaN(t) && (i[e.xOrY + "Axis"].push({
                            axis: e,
                            min: Q(r, t),
                            max: K(r, t)
                        }), a = !0)
                    }
                }), a && an(n, "selection", i, function(t) {
                    n.zoom(e(t, r ? {
                        animation: !1
                    } : null))
                });
                this.selectionMarker = this.selectionMarker.destroy(), r && this.scaleGroups({
                    translateX: n.plotLeft,
                    translateY: n.plotTop,
                    scaleX: 1,
                    scaleY: 1
                })
            }
            n && (d(n.container, {
                cursor: n._cursor
            }), n.cancelClick = this.hasDragged, n.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
        },
        onContainerMouseDown: function(e) {
            e = this.normalize(e), e.preventDefault && e.preventDefault(), this.dragStart(e)
        },
        onDocumentMouseUp: function(e) {
            this.drop(e)
        },
        onDocumentMouseMove: function(e) {
            var t = this.chart,
                n = this.chartPosition,
                r = t.hoverSeries,
                e = fn(e);
            n && r && r.isCartesian && !t.isInsidePlot(e.pageX - n.left - t.plotLeft, e.pageY - n.top - t.plotTop) && this.reset()
        },
        onContainerMouseLeave: function() {
            this.reset(), this.chartPosition = null
        },
        onContainerMouseMove: function(e) {
            var t = this.chart,
                e = this.normalize(e);
            e.returnValue = !1, t.mouseIsDown === "mousedown" && this.drag(e), t.isInsidePlot(e.chartX - t.plotLeft, e.chartY - t.plotTop) && this.runPointActions(e)
        },
        inClass: function(e, t) {
            for (var n; e;) {
                if (n = c(e, "class")) {
                    if (n.indexOf(t) !== -1) return !0;
                    if (n.indexOf("highcharts-container") !== -1) return !1
                }
                e = e.parentNode
            }
        },
        onTrackerMouseOut: function(e) {
            var t = this.chart.hoverSeries;
            t && !t.options.stickyTracking && !this.inClass(e.toElement || e.relatedTarget, "highcharts-tooltip") && t.onMouseOut()
        },
        onContainerClick: function(t) {
            var n = this.chart,
                r = n.hoverPoint,
                i = n.plotLeft,
                s = n.plotTop,
                o = n.inverted,
                u, a, f, t = this.normalize(t);
            t.cancelBubble = !0, n.cancelClick || (r && this.inClass(t.target, "highcharts-tracker") ? (u = this.chartPosition, a = r.plotX, f = r.plotY, e(r, {
                pageX: u.left + i + (o ? n.plotWidth - f : a),
                pageY: u.top + s + (o ? n.plotHeight - a : f)
            }), an(r.series, "click", e(t, {
                point: r
            })), r.firePointEvent("click", t)) : (e(t, this.getCoordinates(t)), n.isInsidePlot(t.chartX - i, t.chartY - s) && an(n, "click", t)))
        },
        onContainerTouchStart: function(e) {
            var t = this.chart;
            e.touches.length === 1 ? (e = this.normalize(e), t.isInsidePlot(e.chartX - t.plotLeft, e.chartY - t.plotTop) && (this.runPointActions(e), this.pinch(e))) : e.touches.length === 2 && this.pinch(e)
        },
        onContainerTouchMove: function(e) {
            (e.touches.length === 1 || e.touches.length === 2) && this.pinch(e)
        },
        onDocumentTouchEnd: function(e) {
            this.drop(e)
        },
        setDOMEvents: function() {
            var e = this,
                t = e.chart.container,
                n;
            this._events = n = [
                [t, "onmousedown", "onContainerMouseDown"],
                [t, "onmousemove", "onContainerMouseMove"],
                [t, "onclick", "onContainerClick"],
                [t, "mouseleave", "onContainerMouseLeave"],
                [z, "mousemove", "onDocumentMouseMove"],
                [z, "mouseup", "onDocumentMouseUp"]
            ], dt && n.push([t, "ontouchstart", "onContainerTouchStart"], [t, "ontouchmove", "onContainerTouchMove"], [z, "touchend", "onDocumentTouchEnd"]), tn(n, function(t) {
                e["_" + t[2]] = function(n) {
                    e[t[2]](n)
                }, t[1].indexOf("on") === 0 ? t[0][t[1]] = e["_" + t[2]] : on(t[0], t[1], e["_" + t[2]])
            })
        },
        destroy: function() {
            var e = this;
            tn(e._events, function(t) {
                t[1].indexOf("on") === 0 ? t[0][t[1]] = null : un(t[0], t[1], e["_" + t[2]])
            }), delete e._events, clearInterval(e.tooltipTimeout)
        }
    }, q.prototype = {
        init: function(e, r) {
            var i = this,
                s = r.itemStyle,
                o = p(r.padding, 8),
                u = r.itemMarginTop || 0;
            this.options = r, r.enabled && (i.baseline = n(s.fontSize) + 3 + u, i.itemStyle = s, i.itemHiddenStyle = t(s, r.itemHiddenStyle), i.itemMarginTop = u, i.padding = o, i.initialItemX = o, i.initialItemY = o - 5, i.maxItemWidth = 0, i.chart = e, i.itemHeight = 0, i.lastLineHeight = 0, i.render(), on(i.chart, "endResize", function() {
                i.positionCheckboxes()
            }))
        },
        colorizeItem: function(e, t) {
            var n = this.options,
                r = e.legendItem,
                i = e.legendLine,
                s = e.legendSymbol,
                o = this.itemHiddenStyle.color,
                n = t ? n.itemStyle.color : o,
                u = t ? e.color : o,
                o = e.options && e.options.marker,
                a = {
                    stroke: u,
                    fill: u
                }, f;
            r && r.css({
                fill: n,
                color: n
            }), i && i.attr({
                stroke: u
            });
            if (s) {
                if (o)
                    for (f in o = e.convertAttribs(o), o) r = o[f], r !== U && (a[f] = r);
                s.attr(a)
            }
        },
        positionItem: function(e) {
            var t = this.options,
                n = t.symbolPadding,
                t = !t.rtl,
                r = e._legendItemPos,
                i = r[0],
                r = r[1],
                s = e.checkbox;
            e.legendGroup && e.legendGroup.translate(t ? i : this.legendWidth - i - 2 * n - 4, r), s && (s.x = i, s.y = r)
        },
        destroyItem: function(e) {
            var t = e.checkbox;
            tn(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(t) {
                e[t] && e[t].destroy()
            }), t && L(e.checkbox)
        },
        destroy: function() {
            var e = this.group,
                t = this.box;
            t && (this.box = t.destroy()), e && (this.group = e.destroy())
        },
        positionCheckboxes: function(e) {
            var t = this.group.alignAttr,
                n, r = this.clipHeight || this.legendHeight;
            t && (n = t.translateY, tn(this.allItems, function(i) {
                var s = i.checkbox,
                    o;
                s && (o = n + s.y + (e || 0) + 3, d(s, {
                    left: t.translateX + i.legendItemWidth + s.x - 20 + "px",
                    top: o + "px",
                    display: o > n - 6 && o < n + r - 6 ? "" : Ct
                }))
            }))
        },
        renderTitle: function() {
            var e = this.padding,
                t = this.options.title,
                n = 0;
            t.text && (this.title || (this.title = this.chart.renderer.label(t.text, e - 3, e - 4, null, null, null, null, null, "legend-title").attr({
                zIndex: 1
            }).css(t.style).add(this.group)), n = this.title.getBBox().height, this.contentGroup.attr({
                translateY: n
            })), this.titleHeight = n
        },
        renderItem: function(e) {
            var n, r = this,
                i = r.chart,
                s = i.renderer,
                o = r.options,
                u = o.layout === "horizontal",
                a = o.symbolWidth,
                f = o.symbolPadding,
                l = r.itemStyle,
                c = r.itemHiddenStyle,
                h = r.padding,
                p = !o.rtl,
                d = o.width,
                m = o.itemMarginBottom || 0,
                g = r.itemMarginTop,
                y = r.initialItemX,
                w = e.legendItem,
                E = e.series || e,
                S = E.options,
                x = S.showCheckbox,
                T = o.useHTML;
            !w && (e.legendGroup = s.g("legend-item").attr({
                zIndex: 1
            }).add(r.scrollGroup), E.drawLegendSymbol(r, e), e.legendItem = w = s.text(o.labelFormat ? b(o.labelFormat, e) : o.labelFormatter.call(e), p ? a + f : -f, r.baseline, T).css(t(e.visible ? l : c)).attr({
                align: p ? "left" : "right",
                zIndex: 2
            }).add(e.legendGroup), (T ? w : e.legendGroup).on("mouseover", function() {
                e.setState("hover"), w.css(r.options.itemHoverStyle)
            }).on("mouseout", function() {
                w.css(e.visible ? l : c), e.setState()
            }).on("click", function(t) {
                var n = function() {
                    e.setVisible()
                }, t = {
                        browserEvent: t
                    };
                e.firePointEvent ? e.firePointEvent("legendItemClick", t, n) : an(e, "legendItemClick", t, n)
            }), r.colorizeItem(e, e.visible), S && x) && (e.checkbox = v("input", {
                type: "checkbox",
                checked: e.selected,
                defaultChecked: e.selected
            }, o.itemCheckboxStyle, i.container), on(e.checkbox, "click", function(t) {
                an(e, "checkboxClick", {
                    checked: t.target.checked
                }, function() {
                    e.select()
                })
            })), s = w.getBBox(), n = e.legendItemWidth = o.itemWidth || a + f + s.width + h + (x ? 20 : 0), o = n, r.itemHeight = a = s.height, u && r.itemX - y + o > (d || i.chartWidth - 2 * h - y) && (r.itemX = y, r.itemY += g + r.lastLineHeight + m, r.lastLineHeight = 0), r.maxItemWidth = K(r.maxItemWidth, o), r.lastItemY = g + r.itemY + m, r.lastLineHeight = K(a, r.lastLineHeight), e._legendItemPos = [r.itemX, r.itemY], u ? r.itemX += o : (r.itemY += g + a + m, r.lastLineHeight = a), r.offsetWidth = d || K(u ? r.itemX - y : o, r.offsetWidth)
        },
        render: function() {
            var t = this,
                n = t.chart,
                r = n.renderer,
                i = t.group,
                s, o, u, a, f = t.box,
                c = t.options,
                h = t.padding,
                p = c.borderWidth,
                d = c.backgroundColor;
            t.itemX = t.initialItemX, t.itemY = t.initialItemY, t.offsetWidth = 0, t.lastItemY = 0, i || (t.group = i = r.g("legend").attr({
                zIndex: 7
            }).add(), t.contentGroup = r.g().attr({
                zIndex: 1
            }).add(i), t.scrollGroup = r.g().add(t.contentGroup), t.clipRect = r.clipRect(0, 0, 9999, n.chartHeight), t.contentGroup.clip(t.clipRect)), t.renderTitle(), s = [], tn(n.series, function(e) {
                var t = e.options;
                t.showInLegend && !l(t.linkedTo) && (s = s.concat(e.legendItems || (t.legendType === "point" ? e.data : e)))
            }), T(s, function(e, t) {
                return (e.options && e.options.legendIndex || 0) - (t.options && t.options.legendIndex || 0)
            }), c.reversed && s.reverse(), t.allItems = s, t.display = o = !! s.length, tn(s, function(e) {
                t.renderItem(e)
            }), u = c.width || t.offsetWidth, a = t.lastItemY + t.lastLineHeight + t.titleHeight, a = t.handleOverflow(a);
            if (p || d) u += h, a += h, f ? u > 0 && a > 0 && (f[f.isNew ? "attr" : "animate"](f.crisp(null, null, null, u, a)), f.isNew = !1) : (t.box = f = r.rect(0, 0, u, a, c.borderRadius, p || 0).attr({
                stroke: c.borderColor,
                "stroke-width": p || 0,
                fill: d || Ct
            }).add(i).shadow(c.shadow), f.isNew = !0), f[o ? "show" : "hide"]();
            t.legendWidth = u, t.legendHeight = a, tn(s, function(e) {
                t.positionItem(e)
            }), o && i.align(e({
                width: u,
                height: a
            }, c), !0, "spacingBox"), n.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(e) {
            var t = this,
                n = this.chart,
                r = n.renderer,
                i = this.options,
                s = i.y,
                s = n.spacingBox.height + (i.verticalAlign === "top" ? -s : s) - this.padding,
                o = i.maxHeight,
                u = this.clipRect,
                a = i.navigation,
                f = p(a.animation, !0),
                l = a.arrowSize || 12,
                c = this.nav;
            return i.layout === "horizontal" && (s /= 2), o && (s = Q(s, o)), e > s && !i.useHTML ? (this.clipHeight = n = s - 20 - this.titleHeight, this.pageCount = J(e / n), this.currentPage = p(this.currentPage, 1), this.fullHeight = e, u.attr({
                height: n
            }), c || (this.nav = c = r.g().attr({
                zIndex: 1
            }).add(this.group), this.up = r.symbol("triangle", 0, 0, l, l).on("click", function() {
                t.scroll(-1, f)
            }).add(c), this.pager = r.text("", 15, 10).css(a.style).add(c), this.down = r.symbol("triangle-down", 0, 0, l, l).on("click", function() {
                t.scroll(1, f)
            }).add(c)), t.scroll(0), e = s) : c && (u.attr({
                height: n.chartHeight
            }), c.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0), e
        },
        scroll: function(e, t) {
            var n = this.pageCount,
                r = this.currentPage + e,
                i = this.clipHeight,
                s = this.options.navigation,
                o = s.activeColor,
                u = s.inactiveColor,
                s = this.pager,
                a = this.padding;
            r > n && (r = n), r > 0 && (t !== U && M(t, this.chart), this.nav.attr({
                translateX: a,
                translateY: i + 7 + this.titleHeight,
                visibility: "visible"
            }), this.up.attr({
                fill: r === 1 ? u : o
            }).css({
                cursor: r === 1 ? "default" : "pointer"
            }), s.attr({
                text: r + "/" + this.pageCount
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: r === n ? u : o
            }).css({
                cursor: r === n ? "default" : "pointer"
            }), i = -Q(i * (r - 1), this.fullHeight - i + a) + 1, this.scrollGroup.animate({
                translateY: i
            }), s.attr({
                text: r + "/" + n
            }), this.currentPage = r, this.positionCheckboxes(i))
        }
    }, R.prototype = {
        init: function(e, n) {
            var r, s = e.series;
            e.series = null, r = t(yt, e), r.series = e.series = s;
            var s = r.chart,
                o = s.margin,
                o = i(o) ? o : [o, o, o, o];
            this.optionsMarginTop = p(s.marginTop, o[0]), this.optionsMarginRight = p(s.marginRight, o[1]), this.optionsMarginBottom = p(s.marginBottom, o[2]), this.optionsMarginLeft = p(s.marginLeft, o[3]), this.runChartClick = (o = s.events) && !! o.click, this.bounds = {
                h: {},
                v: {}
            }, this.callback = n, this.isResizing = 0, this.options = r, this.axes = [], this.series = [], this.hasCartesianSeries = s.showAxes;
            var u = this,
                a;
            u.index = Tt.length, Tt.push(u), s.reflow !== !1 && on(u, "load", function() {
                u.initReflow()
            });
            if (o)
                for (a in o) on(u, a, o[a]);
            u.xAxis = [], u.yAxis = [], u.animation = ht ? !1 : p(s.animation, !0), u.pointCount = 0, u.counters = new x, u.firstRender()
        },
        initSeries: function(e) {
            var t = this.options.chart;
            return (t = Kt[e.type || t.type || t.defaultSeriesType]) || A(17, !0), t = new t, t.init(this, e), t
        },
        addSeries: function(e, t, n) {
            var r, i = this;
            return e && (t = p(t, !0), an(i, "addSeries", {
                options: e
            }, function() {
                r = i.initSeries(e), i.isDirtyLegend = !0, t && i.redraw(n)
            })), r
        },
        addAxis: function(e, n, r, i) {
            var n = n ? "xAxis" : "yAxis",
                s = this.options;
            new j(this, t(e, {
                index: this[n].length
            })), s[n] = h(s[n] || {}), s[n].push(e), p(r, !0) && this.redraw(i)
        },
        isInsidePlot: function(e, t, n) {
            var r = n ? t : e,
                e = n ? e : t;
            return r >= 0 && r <= this.plotWidth && e >= 0 && e <= this.plotHeight
        },
        adjustTickAmounts: function() {
            this.options.chart.alignTicks !== !1 && tn(this.axes, function(e) {
                e.adjustTickAmount()
            }), this.maxTicks = null
        },
        redraw: function(e) {
            var t = this.axes,
                n = this.series,
                r = this.pointer,
                i = this.legend,
                s = this.isDirtyLegend,
                o, u = this.isDirtyBox,
                a = n.length,
                f = a,
                l = this.renderer,
                c = l.isHidden(),
                h = [];
            M(e, this);
            for (c && this.cloneRenderTo(); f--;)
                if (e = n[f], e.isDirty && e.options.stacking) {
                    o = !0;
                    break
                }
            if (o)
                for (f = a; f--;)
                    if (e = n[f], e.options.stacking) e.isDirty = !0;
            tn(n, function(e) {
                e.isDirty && e.options.legendType === "point" && (s = !0)
            }), s && i.options.enabled && (i.render(), this.isDirtyLegend = !1), this.hasCartesianSeries && (this.isResizing || (this.maxTicks = null, tn(t, function(e) {
                e.setScale()
            })), this.adjustTickAmounts(), this.getMargins(), tn(t, function(e) {
                e.isDirtyExtremes && (e.isDirtyExtremes = !1, h.push(function() {
                    an(e, "afterSetExtremes", e.getExtremes())
                }));
                if (e.isDirty || u || o) e.redraw(), u = !0
            })), u && this.drawChartBox(), tn(n, function(e) {
                e.isDirty && e.visible && (!e.isCartesian || e.xAxis) && e.redraw()
            }), r && r.reset && r.reset(!0), l.draw(), an(this, "redraw"), c && this.cloneRenderTo(!0), tn(h, function(e) {
                e.call()
            })
        },
        showLoading: function(t) {
            var n = this.options,
                r = this.loadingDiv,
                i = n.loading;
            r || (this.loadingDiv = r = v(Nt, {
                className: "highcharts-loading"
            }, e(i.style, {
                zIndex: 10,
                display: Ct
            }), this.container), this.loadingSpan = v("span", null, i.labelStyle, r)), this.loadingSpan.innerHTML = t || n.lang.loading, this.loadingShown || (d(r, {
                opacity: 0,
                display: "",
                left: this.plotLeft + "px",
                top: this.plotTop + "px",
                width: this.plotWidth + "px",
                height: this.plotHeight + "px"
            }), ln(r, {
                opacity: i.style.opacity
            }, {
                duration: i.showDuration || 0
            }), this.loadingShown = !0)
        },
        hideLoading: function() {
            var e = this.options,
                t = this.loadingDiv;
            t && ln(t, {
                opacity: 0
            }, {
                duration: e.loading.hideDuration || 100,
                complete: function() {
                    d(t, {
                        display: Ct
                    })
                }
            }), this.loadingShown = !1
        },
        get: function(e) {
            var t = this.axes,
                n = this.series,
                r, i;
            for (r = 0; r < t.length; r++)
                if (t[r].options.id === e) return t[r];
            for (r = 0; r < n.length; r++)
                if (n[r].options.id === e) return n[r];
            for (r = 0; r < n.length; r++) {
                i = n[r].points || [];
                for (t = 0; t < i.length; t++)
                    if (i[t].id === e) return i[t]
            }
            return null
        },
        getAxes: function() {
            var e = this,
                t = this.options,
                n = t.xAxis = h(t.xAxis || {}),
                t = t.yAxis = h(t.yAxis || {});
            tn(n, function(e, t) {
                e.index = t, e.isX = !0
            }), tn(t, function(e, t) {
                e.index = t
            }), n = n.concat(t), tn(n, function(t) {
                new j(e, t)
            }), e.adjustTickAmounts()
        },
        getSelectedPoints: function() {
            var e = [];
            return tn(this.series, function(t) {
                e = e.concat(nn(t.points || [], function(e) {
                    return e.selected
                }))
            }), e
        },
        getSelectedSeries: function() {
            return nn(this.series, function(e) {
                return e.selected
            })
        },
        showResetZoom: function() {
            var e = this,
                t = yt.lang,
                n = e.options.chart.resetZoomButton,
                r = n.theme,
                i = r.states,
                s = n.relativeTo === "chart" ? null : "plotBox";
            this.resetZoomButton = e.renderer.button(t.resetZoom, null, null, function() {
                e.zoomOut()
            }, r, i && i.hover).attr({
                align: n.position.align,
                title: t.resetZoomTitle
            }).add().align(n.position, !1, s)
        },
        zoomOut: function() {
            var e = this;
            an(e, "selection", {
                resetSelection: !0
            }, function() {
                e.zoom()
            })
        },
        zoom: function(e) {
            var t, n = this.pointer,
                r = !1,
                s;
            !e || e.resetSelection ? tn(this.axes, function(e) {
                t = e.zoom()
            }) : tn(e.xAxis.concat(e.yAxis), function(e) {
                var i = e.axis,
                    s = i.isXAxis;
                if (n[s ? "zoomX" : "zoomY"] || n[s ? "pinchX" : "pinchY"]) t = i.zoom(e.min, e.max), i.displayBtn && (r = !0)
            }), s = this.resetZoomButton, r && !s ? this.showResetZoom() : !r && i(s) && (this.resetZoomButton = s.destroy()), t && this.redraw(p(this.options.chart.animation, e && e.animation, this.pointCount < 100))
        },
        pan: function(e) {
            var t = this.xAxis[0],
                n = this.mouseDownX,
                r = t.pointRange / 2,
                i = t.getExtremes(),
                s = t.translate(n - e, !0) + r,
                n = t.translate(n + this.plotWidth - e, !0) - r;
            (r = this.hoverPoints) && tn(r, function(e) {
                    e.setState()
                }), t.series.length && s > Q(i.dataMin, i.min) && n < K(i.dataMax, i.max) && t.setExtremes(s, n, !0, !1, {
                    trigger: "pan"
                }), this.mouseDownX = e, d(this.container, {
                    cursor: "move"
                })
        },
        setTitle: function(e, n) {
            var r, i = this,
                s = i.options,
                o;
            o = s.title = t(s.title, e), r = s.subtitle = t(s.subtitle, n), s = r, tn([
                ["title", e, o],
                ["subtitle", n, s]
            ], function(e) {
                var t = e[0],
                    n = i[t],
                    r = e[1],
                    e = e[2];
                n && r && (i[t] = n = n.destroy()), e && e.text && !n && (i[t] = i.renderer.text(e.text, 0, 0, e.useHTML).attr({
                    align: e.align,
                    "class": "highcharts-" + t,
                    zIndex: e.zIndex || 4
                }).css(e.style).add().align(e, !1, "spacingBox"))
            })
        },
        getChartSize: function() {
            var e = this.options.chart,
                t = this.renderToClone || this.renderTo;
            this.containerWidth = Yt(t, "width"), this.containerHeight = Yt(t, "height"), this.chartWidth = K(0, e.width || this.containerWidth || 600), this.chartHeight = K(0, p(e.height, this.containerHeight > 19 ? this.containerHeight : 400))
        },
        cloneRenderTo: function(e) {
            var t = this.renderToClone,
                n = this.container;
            e ? t && (this.renderTo.appendChild(n), L(t), delete this.renderToClone) : (n && this.renderTo.removeChild(n), this.renderToClone = t = this.renderTo.cloneNode(0), d(t, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), z.body.appendChild(t), n && t.appendChild(n))
        },
        getContainer: function() {
            var t, i = this.options.chart,
                s, o, u;
            this.renderTo = t = i.renderTo, u = "highcharts-" + mt++, r(t) && (this.renderTo = t = z.getElementById(t)), t || A(13, !0), s = n(c(t, "data-highcharts-chart")), !isNaN(s) && Tt[s] && Tt[s].destroy(), c(t, "data-highcharts-chart", this.index), t.innerHTML = "", t.offsetWidth || this.cloneRenderTo(), this.getChartSize(), s = this.chartWidth, o = this.chartHeight, this.container = t = v(Nt, {
                className: "highcharts-container" + (i.className ? " " + i.className : ""),
                id: u
            }, e({
                position: "relative",
                overflow: "hidden",
                width: s + "px",
                height: o + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0
            }, i.style), this.renderToClone || t), this._cursor = t.style.cursor, this.renderer = i.forExport ? new dn(t, s, o, !0) : new pt(t, s, o), ht && this.renderer.create(this, t, s, o)
        },
        getMargins: function() {
            var e = this.options.chart,
                t = e.spacingTop,
                n = e.spacingRight,
                r = e.spacingBottom,
                e = e.spacingLeft,
                i, s = this.legend,
                o = this.optionsMarginTop,
                u = this.optionsMarginLeft,
                a = this.optionsMarginRight,
                f = this.optionsMarginBottom,
                c = this.options.title,
                h = this.options.subtitle,
                d = this.options.legend,
                v = p(d.margin, 10),
                m = d.x,
                g = d.y,
                y = d.align,
                b = d.verticalAlign;
            this.resetMargins(), i = this.axisOffset, (this.title || this.subtitle) && !l(this.optionsMarginTop) && (h = K(this.title && !c.floating && !c.verticalAlign && c.y || 0, this.subtitle && !h.floating && !h.verticalAlign && h.y || 0)) && (this.plotTop = K(this.plotTop, h + p(c.margin, 15) + t)), s.display && !d.floating && (y === "right" ? l(a) || (this.marginRight = K(this.marginRight, s.legendWidth - m + v + n)) : y === "left" ? l(u) || (this.plotLeft = K(this.plotLeft, s.legendWidth + m + v + e)) : b === "top" ? l(o) || (this.plotTop = K(this.plotTop, s.legendHeight + g + v + t)) : b === "bottom" && !l(f) && (this.marginBottom = K(this.marginBottom, s.legendHeight - g + v + r))), this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin), this.extraTopMargin && (this.plotTop += this.extraTopMargin), this.hasCartesianSeries && tn(this.axes, function(e) {
                e.getOffset()
            }), l(u) || (this.plotLeft += i[3]), l(o) || (this.plotTop += i[0]), l(f) || (this.marginBottom += i[2]), l(a) || (this.marginRight += i[1]), this.setChartSize()
        },
        initReflow: function() {
            function e(e) {
                var s = n.width || Yt(r, "width"),
                    o = n.height || Yt(r, "height"),
                    e = e ? e.target : W;
                if (!t.hasUserSize && s && o && (e === W || e === z)) {
                    if (s !== t.containerWidth || o !== t.containerHeight) clearTimeout(i), t.reflowTimeout = i = setTimeout(function() {
                        t.container && (t.setSize(s, o, !1), t.hasUserSize = null)
                    }, 100);
                    t.containerWidth = s, t.containerHeight = o
                }
            }
            var t = this,
                n = t.options.chart,
                r = t.renderTo,
                i;
            on(W, "resize", e), on(t, "destroy", function() {
                un(W, "resize", e)
            })
        },
        setSize: function(e, t, n) {
            var r = this,
                i, s, o;
            r.isResizing += 1, o = function() {
                r && an(r, "endResize", null, function() {
                    r.isResizing -= 1
                })
            }, M(n, r), r.oldChartHeight = r.chartHeight, r.oldChartWidth = r.chartWidth, l(e) && (r.chartWidth = i = K(0, V(e)), r.hasUserSize = !! i), l(t) && (r.chartHeight = s = K(0, V(t))), d(r.container, {
                width: i + "px",
                height: s + "px"
            }), r.setChartSize(!0), r.renderer.setSize(i, s, n), r.maxTicks = null, tn(r.axes, function(e) {
                e.isDirty = !0, e.setScale()
            }), tn(r.series, function(e) {
                e.isDirty = !0
            }), r.isDirtyLegend = !0, r.isDirtyBox = !0, r.getMargins(), r.redraw(n), r.oldChartHeight = null, an(r, "resize"), wt === !1 ? o() : setTimeout(o, wt && wt.duration || 500)
        },
        setChartSize: function(e) {
            var t = this.inverted,
                n = this.renderer,
                r = this.chartWidth,
                i = this.chartHeight,
                s = this.options.chart,
                o = s.spacingTop,
                u = s.spacingRight,
                a = s.spacingBottom,
                f = s.spacingLeft,
                l = this.clipOffset,
                c, h, p, d;
            this.plotLeft = c = V(this.plotLeft), this.plotTop = h = V(this.plotTop), this.plotWidth = p = K(0, V(r - c - this.marginRight)), this.plotHeight = d = K(0, V(i - h - this.marginBottom)), this.plotSizeX = t ? d : p, this.plotSizeY = t ? p : d, this.plotBorderWidth = t = s.plotBorderWidth || 0, this.spacingBox = n.spacingBox = {
                x: f,
                y: o,
                width: r - f - u,
                height: i - o - a
            }, this.plotBox = n.plotBox = {
                x: c,
                y: h,
                width: p,
                height: d
            }, n = J(K(t, l[3]) / 2), r = J(K(t, l[0]) / 2), this.clipBox = {
                x: n,
                y: r,
                width: $(this.plotSizeX - K(t, l[1]) / 2 - n),
                height: $(this.plotSizeY - K(t, l[2]) / 2 - r)
            }, e || tn(this.axes, function(e) {
                e.setAxisSize(), e.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var e = this.options.chart,
                t = e.spacingRight,
                n = e.spacingBottom,
                r = e.spacingLeft;
            this.plotTop = p(this.optionsMarginTop, e.spacingTop), this.marginRight = p(this.optionsMarginRight, t), this.marginBottom = p(this.optionsMarginBottom, n), this.plotLeft = p(this.optionsMarginLeft, r), this.axisOffset = [0, 0, 0, 0], this.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var e = this.options.chart,
                t = this.renderer,
                n = this.chartWidth,
                r = this.chartHeight,
                i = this.chartBackground,
                s = this.plotBackground,
                o = this.plotBorder,
                u = this.plotBGImage,
                a = e.borderWidth || 0,
                f = e.backgroundColor,
                l = e.plotBackgroundColor,
                c = e.plotBackgroundImage,
                h = e.plotBorderWidth || 0,
                p, d = this.plotLeft,
                v = this.plotTop,
                m = this.plotWidth,
                g = this.plotHeight,
                y = this.plotBox,
                b = this.clipRect,
                w = this.clipBox;
            p = a + (e.shadow ? 8 : 0);
            if (a || f) i ? i.animate(i.crisp(null, null, null, n - p, r - p)) : (i = {
                fill: f || Ct
            }, a && (i.stroke = e.borderColor, i["stroke-width"] = a), this.chartBackground = t.rect(p / 2, p / 2, n - p, r - p, e.borderRadius, a).attr(i).add().shadow(e.shadow));
            l && (s ? s.animate(y) : this.plotBackground = t.rect(d, v, m, g, 0).attr({
                fill: l
            }).add().shadow(e.plotShadow)), c && (u ? u.animate(y) : this.plotBGImage = t.image(c, d, v, m, g).add()), b ? b.animate({
                width: w.width,
                height: w.height
            }) : this.clipRect = t.clipRect(w), h && (o ? o.animate(o.crisp(null, d, v, m, g)) : this.plotBorder = t.rect(d, v, m, g, 0, h).attr({
                stroke: e.plotBorderColor,
                "stroke-width": h,
                zIndex: 1
            }).add()), this.isDirtyBox = !1
        },
        propFromSeries: function() {
            var e = this,
                t = e.options.chart,
                n, r = e.options.series,
                i, s;
            tn(["inverted", "angular", "polar"], function(o) {
                n = Kt[t.type || t.defaultSeriesType], s = e[o] || t[o] || n && n.prototype[o];
                for (i = r && r.length; !s && i--;)(n = Kt[r[i].type]) && n.prototype[o] && (s = !0);
                e[o] = s
            })
        },
        render: function() {
            var t = this,
                r = t.axes,
                i = t.renderer,
                s = t.options,
                o = s.labels,
                u = s.credits,
                a;
            t.setTitle(), t.legend = new q(t, s.legend), tn(r, function(e) {
                e.setScale()
            }), t.getMargins(), t.maxTicks = null, tn(r, function(e) {
                e.setTickPositions(!0), e.setMaxTicks()
            }), t.adjustTickAmounts(), t.getMargins(), t.drawChartBox(), t.hasCartesianSeries && tn(r, function(e) {
                e.render()
            }), t.seriesGroup || (t.seriesGroup = i.g("series-group").attr({
                zIndex: 3
            }).add()), tn(t.series, function(e) {
                e.translate(), e.setTooltipPoints(), e.render()
            }), o.items && tn(o.items, function(r) {
                var s = e(o.style, r.style),
                    u = n(s.left) + t.plotLeft,
                    a = n(s.top) + t.plotTop + 12;
                delete s.left, delete s.top, i.text(r.html, u, a).attr({
                    zIndex: 2
                }).css(s).add()
            }), u.enabled && !t.credits && (a = u.href, t.credits = i.text(u.text, 0, 0).on("click", function() {
                a && (location.href = a)
            }).attr({
                align: u.position.align,
                zIndex: 8
            }).css(u.style).add().align(u.position)), t.hasRendered = !0
        },
        destroy: function() {
            var e = this,
                t = e.axes,
                n = e.series,
                r = e.container,
                i, s = r && r.parentNode;
            an(e, "destroy"), Tt[e.index] = U, e.renderTo.removeAttribute("data-highcharts-chart"), un(e);
            for (i = t.length; i--;) t[i] = t[i].destroy();
            for (i = n.length; i--;) n[i] = n[i].destroy();
            tn("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function(t) {
                var n = e[t];
                n && n.destroy && (e[t] = n.destroy())
            }), r && (r.innerHTML = "", un(r), s && L(r));
            for (i in e) delete e[i]
        },
        isReadyToRender: function() {
            var e = this;
            return !lt && W == W.top && z.readyState !== "complete" || ht && !W.canvg ? (ht ? gn.push(function() {
                e.firstRender()
            }, e.options.global.canvasToolsURL) : z.attachEvent("onreadystatechange", function() {
                z.detachEvent("onreadystatechange", e.firstRender), z.readyState === "complete" && e.firstRender()
            }), !1) : !0
        },
        firstRender: function() {
            var e = this,
                t = e.options,
                n = e.callback;
            e.isReadyToRender() && (e.getContainer(), an(e, "init"), e.resetMargins(), e.setChartSize(), e.propFromSeries(), e.getAxes(), tn(t.series || [], function(t) {
                e.initSeries(t)
            }), an(e, "beforeRender"), e.pointer = new I(e, t), e.render(), e.renderer.draw(), n && n.apply(e, [e]), tn(e.callbacks, function(t) {
                t.apply(e, [e])
            }), e.cloneRenderTo(!0), an(e, "load"))
        }
    }, R.prototype.callbacks = [];
    var yn = function() {};
    yn.prototype = {
        init: function(e, t, n) {
            return this.series = e, this.applyOptions(t, n), this.pointAttr = {}, e.options.colorByPoint && (t = e.options.colors || e.chart.options.colors, this.color = this.color || t[e.colorCounter++], e.colorCounter === t.length) && (e.colorCounter = 0), e.chart.pointCount++, this
        },
        applyOptions: function(t, n) {
            var r = this.series,
                i = r.pointValKey,
                t = yn.prototype.optionsToObject.call(this, t);
            return e(this, t), this.options = this.options ? e(this.options, t) : t, i && (this.y = this[i]), this.x === U && r && (this.x = n === U ? r.autoIncrement() : n), this
        },
        optionsToObject: function(e) {
            var t, n = this.series,
                r = n.pointArrayMap || ["y"],
                i = r.length,
                o = 0,
                u = 0;
            if (typeof e == "number" || e === null) t = {
                y: e
            };
            else if (s(e)) {
                t = {}, e.length > i && (n = typeof e[0], n === "string" ? t.name = e[0] : n === "number" && (t.x = e[0]), o++);
                for (; u < i;) t[r[u++]] = e[o++]
            } else typeof e == "object" && (t = e, e.dataLabels && (n._hasPointLabels = !0), e.marker && (n._hasPointMarkers = !0));
            return t
        },
        destroy: function() {
            var e = this.series.chart,
                t = e.hoverPoints,
                n;
            e.pointCount--, t && (this.setState(), f(t, this), !t.length) && (e.hoverPoints = null), this === e.hoverPoint && this.onMouseOut();
            if (this.graphic || this.dataLabel) un(this), this.destroyElements();
            this.legendItem && e.legend.destroyItem(this);
            for (n in this) this[n] = null
        },
        destroyElements: function() {
            for (var e = "graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","), t, n = 6; n--;) t = e[n], this[t] && (this[t] = this[t].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        select: function(e, t) {
            var n = this,
                r = n.series,
                i = r.chart,
                e = p(e, !n.selected);
            n.firePointEvent(e ? "select" : "unselect", {
                accumulate: t
            }, function() {
                n.selected = n.options.selected = e, r.options.data[en(n, r.data)] = n.options, n.setState(e && "select"), t || tn(i.getSelectedPoints(), function(e) {
                    e.selected && e !== n && (e.selected = e.options.selected = !1, r.options.data[en(e, r.data)] = e.options, e.setState(""), e.firePointEvent("unselect"))
                })
            })
        },
        onMouseOver: function(e) {
            var t = this.series,
                n = t.chart,
                r = n.tooltip,
                i = n.hoverPoint;
            i && i !== this && i.onMouseOut(), this.firePointEvent("mouseOver"), r && (!r.shared || t.noSharedTooltip) && r.refresh(this, e), this.setState("hover"), n.hoverPoint = this
        },
        onMouseOut: function() {
            var e = this.series.chart,
                t = e.hoverPoints;
            if (!t || en(this, t) === -1) this.firePointEvent("mouseOut"), this.setState(), e.hoverPoint = null
        },
        tooltipFormatter: function(e) {
            var t = this.series,
                n = t.tooltipOptions,
                r = p(n.valueDecimals, ""),
                i = n.valuePrefix || "",
                s = n.valueSuffix || "";
            return tn(t.pointArrayMap || ["y"], function(t) {
                t = "{point." + t;
                if (i || s) e = e.replace(t + "}", i + t + "}" + s);
                e = e.replace(t + "}", t + ":,." + r + "f}")
            }), b(e, {
                point: this,
                series: this.series
            })
        },
        update: function(e, t, n) {
            var r = this,
                s = r.series,
                o = r.graphic,
                u, a = s.data,
                f = s.chart,
                t = p(t, !0);
            r.firePointEvent("update", {
                options: e
            }, function() {
                r.applyOptions(e), i(e) && (s.getAttribs(), o && o.attr(r.pointAttr[s.state])), u = en(r, a), s.xData[u] = r.x, s.yData[u] = s.toYData ? s.toYData(r) : r.y, s.zData[u] = r.z, s.options.data[u] = r.options, s.isDirty = !0, s.isDirtyData = !0, t && f.redraw(n)
            })
        },
        remove: function(e, t) {
            var n = this,
                r = n.series,
                i = r.chart,
                s, o = r.data;
            M(t, i), e = p(e, !0), n.firePointEvent("remove", null, function() {
                s = en(n, o), o.splice(s, 1), r.options.data.splice(s, 1), r.xData.splice(s, 1), r.yData.splice(s, 1), r.zData.splice(s, 1), n.destroy(), r.isDirty = !0, r.isDirtyData = !0, e && i.redraw()
            })
        },
        firePointEvent: function(e, t, n) {
            var r = this,
                i = this.series.options;
            (i.point.events[e] || r.options && r.options.events && r.options.events[e]) && this.importEvents(), e === "click" && i.allowPointSelect && (n = function(e) {
                    r.select(null, e.ctrlKey || e.metaKey || e.shiftKey)
                }), an(this, e, t, n)
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var e = t(this.series.options.point, this.options).events,
                    n;
                this.events = e;
                for (n in e) on(this, n, e[n]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(e) {
            var n = this.plotX,
                r = this.plotY,
                i = this.series,
                s = i.options.states,
                o = hn[i.type].marker && i.options.marker,
                u = o && !o.enabled,
                a = o && o.states[e],
                f = a && a.enabled === !1,
                l = i.stateMarkerGraphic,
                c = this.marker || {}, h = i.chart,
                p = this.pointAttr,
                e = e || "";
            e === this.state || this.selected && e !== "select" || s[e] && s[e].enabled === !1 || e && (f || u && !a.enabled) || (this.graphic ? (s = o && this.graphic.symbolName && p[e].r, this.graphic.attr(t(p[e], s ? {
                x: n - s,
                y: r - s,
                width: 2 * s,
                height: 2 * s
            } : {}))) : (e && a && (s = a.radius, c = c.symbol || i.symbol, l && l.currentSymbol !== c && (l = l.destroy()), l ? l.attr({
                x: n - s,
                y: r - s
            }) : (i.stateMarkerGraphic = l = h.renderer.symbol(c, n - s, r - s, 2 * s, 2 * s).attr(p[e]).add(i.markerGroup), l.currentSymbol = c)), l && l[e && h.isInsidePlot(n, r) ? "show" : "hide"]()), this.state = e)
        }
    };
    var bn = function() {};
    bn.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: yn,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        colorCounter: 0,
        init: function(t, n) {
            var i, s, o = t.series;
            this.chart = t, this.options = n = this.setOptions(n), this.bindAxes(), e(this, {
                name: n.name,
                state: "",
                pointAttr: {},
                visible: n.visible !== !1,
                selected: n.selected === !0
            }), ht && (n.animation = !1), s = n.events;
            for (i in s) on(this, i, s[i]);
            if (s && s.click || n.point && n.point.events && n.point.events.click || n.allowPointSelect) t.runTrackerClick = !0;
            this.getColor(), this.getSymbol(), this.setData(n.data, !1), this.isCartesian && (t.hasCartesianSeries = !0), o.push(this), this._i = o.length - 1, T(o, function(e, t) {
                return p(e.options.index, e._i) - p(t.options.index, e._i)
            }), tn(o, function(e, t) {
                e.index = t, e.name = e.name || "Series " + (t + 1)
            }), i = n.linkedTo, this.linkedSeries = [], r(i) && (i = i === ":previous" ? o[this.index - 1] : t.get(i)) && (i.linkedSeries.push(this), this.linkedParent = i)
        },
        bindAxes: function() {
            var e = this,
                t = e.options,
                n = e.chart,
                r;
            e.isCartesian && tn(["xAxis", "yAxis"], function(i) {
                tn(n[i], function(n) {
                    r = n.options;
                    if (t[i] === r.index || t[i] !== U && t[i] === r.id || t[i] === U && r.index === 0) n.series.push(e), e[i] = n, n.isDirty = !0
                }), e[i] || A(17, !0)
            })
        },
        autoIncrement: function() {
            var e = this.options,
                t = this.xIncrement,
                t = p(t, e.pointStart, 0);
            return this.pointInterval = p(this.pointInterval, e.pointInterval, 1), this.xIncrement = t + this.pointInterval, t
        },
        getSegments: function() {
            var e = -1,
                t = [],
                n, r = this.points,
                i = r.length;
            if (i)
                if (this.options.connectNulls) {
                    for (n = i; n--;) r[n].y === null && r.splice(n, 1);
                    r.length && (t = [r])
                } else tn(r, function(n, s) {
                    n.y === null ? (s > e + 1 && t.push(r.slice(e + 1, s)), e = s) : s === i - 1 && t.push(r.slice(e + 1, s + 1))
                });
            this.segments = t
        },
        setOptions: function(e) {
            var n = this.chart.options,
                r = n.plotOptions,
                i = r[this.type];
            return this.userOptions = e, e = t(i, r.series, e), this.tooltipOptions = t(n.tooltip, e.tooltip), i.marker === null && delete e.marker, e
        },
        getColor: function() {
            var e = this.options,
                t = this.userOptions,
                n = this.chart.options.colors,
                r = this.chart.counters,
                i;
            i = e.color || hn[this.type].color, !i && !e.colorByPoint && (l(t._colorIndex) ? e = t._colorIndex : (t._colorIndex = r.color, e = r.color++), i = n[e]), this.color = i, r.wrapColor(n.length)
        },
        getSymbol: function() {
            var e = this.userOptions,
                t = this.options.marker,
                n = this.chart,
                r = n.options.symbols,
                n = n.counters;
            this.symbol = t.symbol, this.symbol || (l(e._symbolIndex) ? e = e._symbolIndex : (e._symbolIndex = n.symbol, e = n.symbol++), this.symbol = r[e]), /^url/.test(this.symbol) && (t.radius = 0), n.wrapSymbol(r.length)
        },
        drawLegendSymbol: function(e) {
            var t = this.options,
                n = t.marker,
                r = e.options.symbolWidth,
                i = this.chart.renderer,
                s = this.legendGroup,
                e = e.baseline,
                o;
            t.lineWidth && (o = {
                "stroke-width": t.lineWidth
            }, t.dashStyle && (o.dashstyle = t.dashStyle), this.legendLine = i.path(["M", 0, e - 4, "L", r, e - 4]).attr(o).add(s)), n && n.enabled && (t = n.radius, this.legendSymbol = i.symbol(this.symbol, r / 2 - t, e - 4 - t, 2 * t, 2 * t).add(s))
        },
        addPoint: function(e, t, n, r) {
            var i = this.options,
                s = this.data,
                o = this.graph,
                u = this.area,
                a = this.chart,
                f = this.xData,
                l = this.yData,
                c = this.zData,
                h = this.names,
                d = o && o.shift || 0,
                v = i.data;
            M(r, a), o && n && (o.shift = d + 1), u && (n && (u.shift = d + 1), u.isArea = !0), t = p(t, !0), r = {
                series: this
            }, this.pointClass.prototype.applyOptions.apply(r, [e]), f.push(r.x), l.push(this.toYData ? this.toYData(r) : r.y), c.push(r.z), h && (h[r.x] = r.name), v.push(e), i.legendType === "point" && this.generatePoints(), n && (s[0] && s[0].remove ? s[0].remove(!1) : (s.shift(), f.shift(), l.shift(), c.shift(), v.shift())), this.getAttribs(), this.isDirtyData = this.isDirty = !0, t && a.redraw()
        },
        setData: function(e, t) {
            var n = this.points,
                i = this.options,
                u = this.chart,
                a = null,
                f = this.xAxis,
                l = f && f.categories && !f.categories.length ? [] : null,
                c;
            this.xIncrement = null, this.pointRange = f && f.categories ? 1 : i.pointRange, this.colorCounter = 0;
            var h = [],
                d = [],
                v = [],
                m = e ? e.length : [],
                g = (c = this.pointArrayMap) && c.length,
                y = !! this.toYData;
            if (m > (i.turboThreshold || 1e3)) {
                for (c = 0; a === null && c < m;) a = e[c], c++;
                if (o(a)) {
                    a = p(i.pointStart, 0), i = p(i.pointInterval, 1);
                    for (c = 0; c < m; c++) h[c] = a, d[c] = e[c], a += i;
                    this.xIncrement = a
                } else if (s(a))
                    if (g)
                        for (c = 0; c < m; c++) i = e[c], h[c] = i[0], d[c] = i.slice(1, g + 1);
                    else
                        for (c = 0; c < m; c++) i = e[c], h[c] = i[0], d[c] = i[1]
            } else
                for (c = 0; c < m; c++) e[c] !== U && (i = {
                    series: this
                }, this.pointClass.prototype.applyOptions.apply(i, [e[c]]), h[c] = i.x, d[c] = y ? this.toYData(i) : i.y, v[c] = i.z, l && i.name) && (l[c] = i.name);
            this.requireSorting && h.length > 1 && h[1] < h[0] && A(15), r(d[0]) && A(14, !0), this.data = [], this.options.data = e, this.xData = h, this.yData = d, this.zData = v, this.names = l;
            for (c = n && n.length || 0; c--;) n[c] && n[c].destroy && n[c].destroy();
            f && (f.minRange = f.userMinRange), this.isDirty = this.isDirtyData = u.isDirtyBox = !0, p(t, !0) && u.redraw(!1)
        },
        remove: function(e, t) {
            var n = this,
                r = n.chart,
                e = p(e, !0);
            n.isRemoving || (n.isRemoving = !0, an(n, "remove", null, function() {
                n.destroy(), r.isDirtyLegend = r.isDirtyBox = !0, e && r.redraw(t)
            })), n.isRemoving = !1
        },
        processData: function(e) {
            var t = this.xData,
                n = this.yData,
                r = t.length,
                i = 0,
                s = r,
                o, u, a = this.xAxis,
                f = this.options,
                l = f.cropThreshold,
                c = this.isCartesian;
            if (c && !this.isDirty && !a.isDirty && !this.yAxis.isDirty && !e) return !1;
            if (c && this.sorted && (!l || r > l || this.forceCrop))
                if (e = a.getExtremes(), a = e.min, l = e.max, t[r - 1] < a || t[0] > l) t = [], n = [];
                else if (t[0] < a || t[r - 1] > l) {
                for (e = 0; e < r; e++)
                    if (t[e] >= a) {
                        i = K(0, e - 1);
                        break
                    }
                for (; e < r; e++)
                    if (t[e] > l) {
                        s = e + 1;
                        break
                    }
                t = t.slice(i, s), n = n.slice(i, s), o = !0
            }
            for (e = t.length - 1; e > 0; e--)
                if (r = t[e] - t[e - 1], r > 0 && (u === U || r < u)) u = r;
            this.cropped = o, this.cropStart = i, this.processedXData = t, this.processedYData = n, f.pointRange === null && (this.pointRange = u || 1), this.closestPointRange = u
        },
        generatePoints: function() {
            var e = this.options.data,
                t = this.data,
                n, r = this.processedXData,
                i = this.processedYData,
                s = this.pointClass,
                o = r.length,
                u = this.cropStart || 0,
                a, f = this.hasGroupedData,
                l, c = [],
                p;
            !t && !f && (t = [], t.length = e.length, t = this.data = t);
            for (p = 0; p < o; p++) a = u + p, f ? c[p] = (new s).init(this, [r[p]].concat(h(i[p]))) : (t[a] ? l = t[a] : e[a] !== U && (t[a] = l = (new s).init(this, e[a], r[p])), c[p] = l);
            if (t && (o !== (n = t.length) || f))
                for (p = 0; p < n; p++)
                    if (p === u && !f && (p += o), t[p]) t[p].destroyElements(), t[p].plotX = U;
            this.data = t, this.points = c
        },
        translate: function() {
            this.processedXData || this.processData(), this.generatePoints();
            for (var e = this.options, t = e.stacking, n = this.xAxis, r = n.categories, i = this.yAxis, s = this.points, o = s.length, u = !! this.modifyValue, a, f = i.series, c = f.length, h = e.pointPlacement === "between", e = e.threshold; c--;)
                if (f[c].visible) {
                    f[c] === this && (a = !0);
                    break
                }
            for (c = 0; c < o; c++) {
                var f = s[c],
                    d = f.x,
                    v = f.y,
                    m = f.low,
                    g = i.stacks[(v < e ? "-" : "") + this.stackKey];
                i.isLog && v <= 0 && (f.y = v = null), f.plotX = n.translate(d, 0, 0, 0, 1, h), t && this.visible && g && g[d] && (m = g[d], g = m.total, m.cum = m = m.cum - v, v = m + v, a && (m = p(e, i.min)), i.isLog && m <= 0 && (m = null), t === "percent" && (m = g ? m * 100 / g : 0, v = g ? v * 100 / g : 0), f.percentage = g ? f.y * 100 / g : 0, f.total = f.stackTotal = g, f.stackY = v), f.yBottom = l(m) ? i.translate(m, 0, 1, 0, 1) : null, u && (v = this.modifyValue(v, f)), f.plotY = typeof v == "number" && v !== Infinity ? V(i.translate(v, 0, 1, 0, 1) * 10) / 10 : U, f.clientX = h ? n.translate(d, 0, 0, 0, 1) : f.plotX, f.negative = f.y < (e || 0), f.category = r && r[f.x] !== U ? r[f.x] : f.x
            }
            this.getSegments()
        },
        setTooltipPoints: function(e) {
            var t = [],
                n, r, i = (n = this.xAxis) ? n.tooltipLen || n.len : this.chart.plotSizeX,
                s, o, u = [];
            if (this.options.enableMouseTracking !== !1) {
                e && (this.tooltipPoints = null), tn(this.segments || this.points, function(e) {
                    t = t.concat(e)
                }), n && n.reversed && (t = t.reverse()), e = t.length;
                for (o = 0; o < e; o++) {
                    s = t[o], n = t[o - 1] ? r + 1 : 0;
                    for (r = t[o + 1] ? K(0, $((s.clientX + (t[o + 1] ? t[o + 1].clientX : i)) / 2)) : i; n >= 0 && n <= r;) u[n++] = s
                }
                this.tooltipPoints = u
            }
        },
        tooltipHeaderFormatter: function(e) {
            var t = this.tooltipOptions,
                n = t.xDateFormat,
                r = this.xAxis,
                i = r && r.options.type === "datetime",
                s = t.headerFormat,
                u;
            if (i && !n)
                for (u in St)
                    if (St[u] >= r.closestPointRange) {
                        n = t.dateTimeLabelFormats[u];
                        break
                    }
            return i && n && o(e.key) && (s = s.replace("{point.key}", "{point.key:" + n + "}")), b(s, {
                point: e,
                series: this
            })
        },
        onMouseOver: function() {
            var e = this.chart,
                t = e.hoverSeries;
            t && t !== this && t.onMouseOut(), this.options.events.mouseOver && an(this, "mouseOver"), this.setState("hover"), e.hoverSeries = this
        },
        onMouseOut: function() {
            var e = this.options,
                t = this.chart,
                n = t.tooltip,
                r = t.hoverPoint;
            r && r.onMouseOut(), this && e.events.mouseOut && an(this, "mouseOut"), n && !e.stickyTracking && (!n.shared || this.noSharedTooltip) && n.hide(), this.setState(), t.hoverSeries = null
        },
        animate: function(t) {
            var n = this,
                r = n.chart,
                s = r.renderer,
                o;
            o = n.options.animation;
            var u = r.clipBox,
                a = r.inverted,
                f;
            o && !i(o) && (o = hn[n.type].animation), f = "_sharedClip" + o.duration + o.easing;
            if (t) t = r[f], o = r[f + "m"], t || (r[f] = t = s.clipRect(e(u, {
                width: 0
            })), r[f + "m"] = o = s.clipRect(-99, a ? -r.plotLeft : -r.plotTop, 99, a ? r.chartWidth : r.chartHeight)), n.group.clip(t), n.markerGroup.clip(o), n.sharedClipKey = f;
            else {
                if (t = r[f]) t.animate({
                    width: r.plotSizeX
                }, o), r[f + "m"].animate({
                    width: r.plotSizeX + 99
                }, o);
                n.animate = null, n.animationTimeout = setTimeout(function() {
                    n.afterAnimate()
                }, o.duration)
            }
        },
        afterAnimate: function() {
            var e = this.chart,
                t = this.sharedClipKey,
                n = this.group;
            n && this.options.clip !== !1 && (n.clip(e.clipRect), this.markerGroup.clip()), setTimeout(function() {
                t && e[t] && (e[t] = e[t].destroy(), e[t + "m"] = e[t + "m"].destroy())
            }, 100)
        },
        drawPoints: function() {
            var t, n = this.points,
                r = this.chart,
                i, s, o, u, a, f, l, c, h = this.options.marker,
                d, v = this.markerGroup;
            if (h.enabled || this._hasPointMarkers)
                for (o = n.length; o--;)(u = n[o], i = u.plotX, s = u.plotY, c = u.graphic, f = u.marker || {}, t = h.enabled && f.enabled === U || f.enabled, d = r.isInsidePlot(i, s, r.inverted), t && s !== U && !isNaN(s) && u.y !== null) ? (t = u.pointAttr[u.selected ? "select" : ""], a = t.r, f = p(f.symbol, this.symbol), l = f.indexOf("url") === 0, c) ? c.attr({
                    visibility: d ? lt ? "inherit" : "visible" : "hidden"
                }).animate(e({
                    x: i - a,
                    y: s - a
                }, c.symbolName ? {
                    width: 2 * a,
                    height: 2 * a
                } : {})) : d && (a > 0 || l) && (u.graphic = r.renderer.symbol(f, i - a, s - a, 2 * a, 2 * a).attr(t).add(v)) : c && (u.graphic = c.destroy())
        },
        convertAttribs: function(e, t, n, r) {
            var i = this.pointAttrToOptions,
                s, o, u = {}, e = e || {}, t = t || {}, n = n || {}, r = r || {};
            for (s in i) o = i[s], u[s] = p(e[o], t[s], n[s], r[s]);
            return u
        },
        getAttribs: function() {
            var t = this,
                n = t.options,
                r = hn[t.type].marker ? n.marker : n,
                i = r.states,
                s = i.hover,
                o, u = t.color,
                a = {
                    stroke: u,
                    fill: u
                }, f = t.points || [],
                c = [],
                h, p = t.pointAttrToOptions,
                d = n.negativeColor,
                v;
            n.marker ? (s.radius = s.radius || r.radius + 2, s.lineWidth = s.lineWidth || r.lineWidth + 1) : s.color = s.color || pn(s.color || u).brighten(s.brightness).get(), c[""] = t.convertAttribs(r, a), tn(["hover", "select"], function(e) {
                c[e] = t.convertAttribs(i[e], c[""])
            }), t.pointAttr = c;
            for (u = f.length; u--;) {
                a = f[u], (r = a.options && a.options.marker || a.options) && r.enabled === !1 && (r.radius = 0), a.negative && d && (a.color = a.fillColor = d), o = n.colorByPoint || a.color;
                if (a.options)
                    for (v in p) l(r[p[v]]) && (o = !0);
                o ? (r = r || {}, h = [], i = r.states || {}, o = i.hover = i.hover || {}, n.marker || (o.color = pn(o.color || a.color).brighten(o.brightness || s.brightness).get()), h[""] = t.convertAttribs(e({
                    color: a.color
                }, r), c[""]), h.hover = t.convertAttribs(i.hover, c.hover, h[""]), h.select = t.convertAttribs(i.select, c.select, h[""]), a.negative && n.marker && (h[""].fill = h.hover.fill = h.select.fill = t.convertAttribs({
                    fillColor: d
                }).fill)) : h = c, a.pointAttr = h
            }
        },
        update: function(n, r) {
            var i = this.chart,
                s = this.type,
                n = t(this.userOptions, {
                    animation: !1,
                    index: this.index,
                    pointStart: this.xData[0]
                }, n);
            this.remove(!1), e(this, Kt[n.type || s].prototype), this.init(i, n), p(r, !0) && i.redraw(!1)
        },
        destroy: function() {
            var e = this,
                t = e.chart,
                n = /AppleWebKit\/533/.test(nt),
                r, i, s = e.data || [],
                o, u, a;
            an(e, "destroy"), un(e), tn(["xAxis", "yAxis"], function(t) {
                if (a = e[t]) f(a.series, e), a.isDirty = a.forceRedraw = !0
            }), e.legendItem && e.chart.legend.destroyItem(e);
            for (i = s.length; i--;)(o = s[i]) && o.destroy && o.destroy();
            e.points = null, clearTimeout(e.animationTimeout), tn("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","), function(t) {
                e[t] && (r = n && t === "group" ? "hide" : "destroy", e[t][r]())
            }), t.hoverSeries === e && (t.hoverSeries = null), f(t.series, e);
            for (u in e) delete e[u]
        },
        drawDataLabels: function() {
            var e = this,
                n = e.options.dataLabels,
                r = e.points,
                i, s, o, u;
            if (n.enabled || e._hasPointLabels) e.dlProcessOptions && e.dlProcessOptions(n), u = e.plotGroup("dataLabelsGroup", "data-labels", e.visible ? "visible" : "hidden", n.zIndex || 6), s = n, tn(r, function(r) {
                var a, f = r.dataLabel,
                    c, h, d = r.connector,
                    v = !0;
                i = r.options && r.options.dataLabels, a = s.enabled || i && i.enabled;
                if (f && !a) r.dataLabel = f.destroy();
                else if (a) {
                    a = n.rotation, n = t(s, i), c = r.getLabelConfig(), o = n.format ? b(n.format, c) : n.formatter.call(c, n), n.style.color = p(n.color, n.style.color, e.color, "black");
                    if (f) {
                        if (l(o)) f.attr({
                            text: o
                        }), v = !1;
                        else if (r.dataLabel = f = f.destroy(), d) r.connector = d.destroy()
                    } else if (l(o)) {
                        f = {
                            fill: n.backgroundColor,
                            stroke: n.borderColor,
                            "stroke-width": n.borderWidth,
                            r: n.borderRadius || 0,
                            rotation: a,
                            padding: n.padding,
                            zIndex: 1
                        };
                        for (h in f) f[h] === U && delete f[h];
                        f = r.dataLabel = e.chart.renderer[a ? "text" : "label"](o, 0, -999, null, null, null, n.useHTML).attr(f).css(n.style).add(u).shadow(n.shadow)
                    }
                    f && e.alignDataLabel(r, f, n, null, v)
                }
            })
        },
        alignDataLabel: function(t, n, r, i, s) {
            var o = this.chart,
                u = o.inverted,
                a = p(t.plotX, -999),
                t = p(t.plotY, -999),
                f = n.getBBox(),
                i = e({
                    x: u ? o.plotWidth - t : a,
                    y: V(u ? o.plotHeight - a : t),
                    width: 0,
                    height: 0
                }, i);
            e(r, {
                width: f.width,
                height: f.height
            }), r.rotation ? (i = {
                align: r.align,
                x: i.x + r.x + i.width / 2,
                y: i.y + r.y + i.height / 2
            }, n[s ? "attr" : "animate"](i)) : n.align(r, null, i), n.attr({
                visibility: r.crop === !1 || o.isInsidePlot(a, t, u) ? o.renderer.isSVG ? "inherit" : "visible" : "hidden"
            })
        },
        getSegmentPath: function(e) {
            var t = this,
                n = [],
                r = t.options.step;
            return tn(e, function(i, s) {
                var o = i.plotX,
                    u = i.plotY,
                    a;
                t.getPointSpline ? n.push.apply(n, t.getPointSpline(e, i, s)) : (n.push(s ? "L" : "M"), r && s && (a = e[s - 1], r === "right" ? n.push(a.plotX, u) : r === "center" ? n.push((a.plotX + o) / 2, a.plotY, (a.plotX + o) / 2, u) : n.push(o, a.plotY)), n.push(i.plotX, i.plotY))
            }), n
        },
        getGraphPath: function() {
            var e = this,
                t = [],
                n, r = [];
            return tn(e.segments, function(i) {
                n = e.getSegmentPath(i), i.length > 1 ? t = t.concat(n) : r.push(i[0])
            }), e.singlePoints = r, e.graphPath = t
        },
        drawGraph: function() {
            var e = this,
                t = this.options,
                n = [
                    ["graph", t.lineColor || this.color]
                ],
                r = t.lineWidth,
                i = t.dashStyle,
                s = this.getGraphPath(),
                o = t.negativeColor;
            o && n.push(["graphNeg", o]), tn(n, function(n, o) {
                var u = n[0],
                    a = e[u];
                a ? (cn(a), a.animate({
                    d: s
                })) : r && s.length && (a = {
                    stroke: n[1],
                    "stroke-width": r,
                    zIndex: 1
                }, i && (a.dashstyle = i), e[u] = e.chart.renderer.path(s).attr(a).add(e.group).shadow(!o && t.shadow))
            })
        },
        clipNeg: function() {
            var e = this.options,
                t = this.chart,
                n = t.renderer,
                r = e.negativeColor,
                i, s = this.posClip,
                o = this.negClip;
            i = t.chartWidth;
            var u = t.chartHeight,
                a = K(i, u);
            r && this.graph && (r = J(this.yAxis.len - this.yAxis.translate(e.threshold || 0)), e = {
                x: 0,
                y: 0,
                width: a,
                height: r
            }, a = {
                x: 0,
                y: r,
                width: a,
                height: a - r
            }, t.inverted && n.isVML && (e = {
                x: t.plotWidth - r - t.plotLeft,
                y: 0,
                width: i,
                height: u
            }, a = {
                x: r + t.plotLeft - i,
                y: 0,
                width: t.plotLeft + r,
                height: i
            }), this.yAxis.reversed ? (t = a, i = e) : (t = e, i = a), s ? (s.animate(t), o.animate(i)) : (this.posClip = s = n.clipRect(t), this.graph.clip(s), this.negClip = o = n.clipRect(i), this.graphNeg.clip(o), this.area && (this.area.clip(s), this.areaNeg.clip(o))))
        },
        invertGroups: function() {
            function e() {
                var e = {
                    width: t.yAxis.len,
                    height: t.xAxis.len
                };
                tn(["group", "markerGroup"], function(n) {
                    t[n] && t[n].attr(e).invert()
                })
            }
            var t = this,
                n = t.chart;
            on(n, "resize", e), on(t, "destroy", function() {
                un(n, "resize", e)
            }), e(), t.invertGroups = e
        },
        plotGroup: function(e, t, n, r, i) {
            var s = this[e],
                o = !s,
                u = this.chart,
                a = this.xAxis,
                f = this.yAxis;
            return o && (this[e] = s = u.renderer.g(t).attr({
                visibility: n,
                zIndex: r || .1
            }).add(i)), s[o ? "attr" : "animate"]({
                translateX: a ? a.left : u.plotLeft,
                translateY: f ? f.top : u.plotTop,
                scaleX: 1,
                scaleY: 1
            }), s
        },
        render: function() {
            var e = this.chart,
                t, n = this.options,
                r = n.animation && !! this.animate && e.renderer.isSVG,
                i = this.visible ? "visible" : "hidden",
                s = n.zIndex,
                o = this.hasRendered,
                u = e.seriesGroup;
            t = this.plotGroup("group", "series", i, s, u), this.markerGroup = this.plotGroup("markerGroup", "markers", i, s, u), r && this.animate(!0), this.getAttribs(), t.inverted = e.inverted, this.drawGraph && (this.drawGraph(), this.clipNeg()), this.drawDataLabels(), this.drawPoints(), this.options.enableMouseTracking !== !1 && this.drawTracker(), e.inverted && this.invertGroups(), n.clip !== !1 && !this.sharedClipKey && !o && t.clip(e.clipRect), r ? this.animate() : o || this.afterAnimate(), this.isDirty = this.isDirtyData = !1, this.hasRendered = !0
        },
        redraw: function() {
            var e = this.chart,
                t = this.isDirtyData,
                n = this.group,
                r = this.xAxis,
                i = this.yAxis;
            n && (e.inverted && n.attr({
                width: e.plotWidth,
                height: e.plotHeight
            }), n.animate({
                translateX: p(r && r.left, e.plotLeft),
                translateY: p(i && i.top, e.plotTop)
            })), this.translate(), this.setTooltipPoints(!0), this.render(), t && an(this, "updatedData")
        },
        setState: function(e) {
            var t = this.options,
                n = this.graph,
                r = this.graphNeg,
                i = t.states,
                t = t.lineWidth,
                e = e || "";
            this.state !== e && (this.state = e, i[e] && i[e].enabled === !1 || (e && (t = i[e].lineWidth || t + 1), n && !n.dashstyle && (e = {
                "stroke-width": t
            }, n.attr(e), r && r.attr(e))))
        },
        setVisible: function(e, t) {
            var n = this,
                r = n.chart,
                i = n.legendItem,
                s, o = r.options.chart.ignoreHiddenSeries,
                u = n.visible;
            s = (n.visible = e = n.userOptions.visible = e === U ? !u : e) ? "show" : "hide", tn(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(e) {
                n[e] && n[e][s]()
            }), r.hoverSeries === n && n.onMouseOut(), i && r.legend.colorizeItem(n, e), n.isDirty = !0, n.options.stacking && tn(r.series, function(e) {
                e.options.stacking && e.visible && (e.isDirty = !0)
            }), tn(n.linkedSeries, function(t) {
                t.setVisible(e, !1)
            }), o && (r.isDirtyBox = !0), t !== !1 && r.redraw(), an(n, s)
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(e) {
            this.selected = e = e === U ? !this.selected : e, this.checkbox && (this.checkbox.checked = e), an(this, e ? "select" : "unselect")
        },
        drawTracker: function() {
            var e = this,
                t = e.options,
                n = t.trackByArea,
                r = [].concat(n ? e.areaPath : e.graphPath),
                i = r.length,
                s = e.chart,
                o = s.pointer,
                u = s.renderer,
                a = s.options.tooltip.snap,
                f = e.tracker,
                l = t.cursor,
                l = l && {
                    cursor: l
                }, c = e.singlePoints,
                h, p = function() {
                    s.hoverSeries !== e && e.onMouseOver()
                };
            if (i && !n)
                for (h = i + 1; h--;) r[h] === "M" && r.splice(h + 1, 0, r[h + 1] - a, r[h + 2], "L"), (h && r[h] === "M" || h === i) && r.splice(h, 0, "L", r[h - 2] + a, r[h - 1]);
            for (h = 0; h < c.length; h++) i = c[h], r.push("M", i.plotX - a, i.plotY, "L", i.plotX + a, i.plotY);
            f ? f.attr({
                d: r
            }) : (e.tracker = f = u.path(r).attr({
                "class": "highcharts-tracker",
                "stroke-linejoin": "round",
                visibility: e.visible ? "visible" : "hidden",
                stroke: kt,
                fill: n ? kt : Ct,
                "stroke-width": t.lineWidth + (n ? 0 : 2 * a),
                zIndex: 2
            }).addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function(e) {
                o.onTrackerMouseOut(e)
            }).css(l).add(e.markerGroup), dt) && f.on("touchstart", p)
        }
    }, Gt = m(bn), Kt.line = Gt, hn.area = t(Qt, {
        threshold: 0
    }), Gt = m(bn, {
        type: "area",
        getSegments: function() {
            var e = [],
                t = [],
                n = [],
                r = this.xAxis,
                i = this.yAxis,
                s = i.stacks[this.stackKey],
                o = {}, u, a, f = this.points,
                l, c;
            if (this.options.stacking && !this.cropped) {
                for (l = 0; l < f.length; l++) o[f[l].x] = f[l];
                for (c in s) n.push(+c);
                n.sort(function(e, t) {
                    return e - t
                }), tn(n, function(e) {
                    o[e] ? t.push(o[e]) : (u = r.translate(e), a = i.toPixels(s[e].cum, !0), t.push({
                        y: null,
                        plotX: u,
                        clientX: u,
                        plotY: a,
                        yBottom: a,
                        onMouseOver: xt
                    }))
                }), t.length && e.push(t)
            } else bn.prototype.getSegments.call(this), e = this.segments;
            this.segments = e
        },
        getSegmentPath: function(e) {
            var t = bn.prototype.getSegmentPath.call(this, e),
                n = [].concat(t),
                r, i = this.options;
            t.length === 3 && n.push("L", t[1], t[2]);
            if (i.stacking && !this.closedStacks)
                for (r = e.length - 1; r >= 0; r--) r < e.length - 1 && i.step && n.push(e[r + 1].plotX, e[r].yBottom), n.push(e[r].plotX, e[r].yBottom);
            else this.closeSegment(n, e);
            return this.areaPath = this.areaPath.concat(n), t
        },
        closeSegment: function(e, t) {
            var n = this.yAxis.getThreshold(this.options.threshold);
            e.push("L", t[t.length - 1].plotX, n, "L", t[0].plotX, n)
        },
        drawGraph: function() {
            this.areaPath = [], bn.prototype.drawGraph.apply(this);
            var e = this,
                t = this.areaPath,
                n = this.options,
                r = [
                    ["area", this.color, n.fillColor]
                ];
            n.negativeColor && r.push(["areaNeg", n.negativeColor, n.negativeFillColor]), tn(r, function(r) {
                var i = r[0],
                    s = e[i];
                s ? s.animate({
                    d: t
                }) : e[i] = e.chart.renderer.path(t).attr({
                    fill: p(r[2], pn(r[1]).setOpacity(n.fillOpacity || .75).get()),
                    zIndex: 0
                }).add(e.group)
            })
        },
        drawLegendSymbol: function(e, t) {
            t.legendSymbol = this.chart.renderer.rect(0, e.baseline - 11, e.options.symbolWidth, 12, 2).attr({
                zIndex: 3
            }).add(t.legendGroup)
        }
    }), Kt.area = Gt, hn.spline = t(Qt), vn = m(bn, {
        type: "spline",
        getPointSpline: function(e, t, n) {
            var r = t.plotX,
                i = t.plotY,
                s = e[n - 1],
                o = e[n + 1],
                u, a, f, l;
            if (s && o) {
                e = s.plotY, f = o.plotX;
                var o = o.plotY,
                    c;
                u = (1.5 * r + s.plotX) / 2.5, a = (1.5 * i + e) / 2.5, f = (1.5 * r + f) / 2.5, l = (1.5 * i + o) / 2.5, c = (l - a) * (f - r) / (f - u) + i - l, a += c, l += c, a > e && a > i ? (a = K(e, i), l = 2 * i - a) : a < e && a < i && (a = Q(e, i), l = 2 * i - a), l > o && l > i ? (l = K(o, i), a = 2 * i - l) : l < o && l < i && (l = Q(o, i), a = 2 * i - l), t.rightContX = f, t.rightContY = l
            }
            return n ? (t = ["C", s.rightContX || s.plotX, s.rightContY || s.plotY, u || r, a || i, r, i], s.rightContX = s.rightContY = null) : t = ["M", r, i], t
        }
    }), Kt.spline = vn, hn.areaspline = t(hn.area), mn = Gt.prototype, vn = m(vn, {
        type: "areaspline",
        closedStacks: !0,
        getSegmentPath: mn.getSegmentPath,
        closeSegment: mn.closeSegment,
        drawGraph: mn.drawGraph
    }), Kt.areaspline = vn, hn.column = t(Qt, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 0,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: .1,
                shadow: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        stickyTracking: !1,
        threshold: 0
    }), vn = m(bn, {
        type: "column",
        tooltipOutsidePlot: !0,
        requireSorting: !1,
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color",
            r: "borderRadius"
        },
        trackerGroups: ["group", "dataLabelsGroup"],
        init: function() {
            bn.prototype.init.apply(this, arguments);
            var e = this,
                t = e.chart;
            t.hasRendered && tn(t.series, function(t) {
                t.type === e.type && (t.isDirty = !0)
            })
        },
        getColumnMetrics: function() {
            var e = this,
                t = e.chart,
                n = e.options,
                r = this.xAxis,
                i = r.reversed,
                s, o = {}, u, a = 0;
            n.grouping === !1 ? a = 1 : tn(t.series, function(t) {
                var n = t.options;
                t.type === e.type && t.visible && e.options.group === n.group && (n.stacking ? (s = t.stackKey, o[s] === U && (o[s] = a++), u = o[s]) : n.grouping !== !1 && (u = a++), t.columnIndex = u)
            });
            var t = Q(G(r.transA) * (r.ordinalSlope || n.pointRange || r.closestPointRange || 1), r.len),
                r = t * n.groupPadding,
                f = (t - 2 * r) / a,
                c = n.pointWidth,
                n = l(c) ? (f - c) / 2 : f * n.pointPadding,
                c = p(c, f - 2 * n);
            return e.columnMetrics = {
                width: c,
                offset: n + (r + ((i ? a - (e.columnIndex || 0) : e.columnIndex) || 0) * f - t / 2) * (i ? -1 : 1)
            }
        },
        translate: function() {
            var e = this,
                t = e.chart,
                n = e.options,
                r = n.stacking,
                i = n.borderWidth,
                s = e.yAxis,
                o = e.translatedThreshold = s.getThreshold(n.threshold),
                u = p(n.minPointLength, 5),
                n = e.getColumnMetrics(),
                a = n.width,
                f = J(K(a, 1 + 2 * i)),
                l = n.offset;
            bn.prototype.translate.apply(e), tn(e.points, function(n) {
                var c = Q(K(-999, n.plotY), s.len + 999),
                    h = p(n.yBottom, o),
                    d = n.plotX + l,
                    v = J(Q(c, h)),
                    c = J(K(c, h) - v),
                    m = s.stacks[(n.y < 0 ? "-" : "") + e.stackKey];
                r && e.visible && m && m[n.x] && m[n.x].setOffset(l, f), G(c) < u && u && (c = u, v = G(v - o) > u ? h - u : o - (s.translate(n.y, 0, 1, 0, 1) <= o ? u : 0)), n.barX = d, n.pointWidth = a, n.shapeType = "rect", n.shapeArgs = n = t.renderer.Element.prototype.crisp.call(0, i, d, v, f, c), i % 2 && (n.y -= 1, n.height += 1)
            })
        },
        getSymbol: xt,
        drawLegendSymbol: Gt.prototype.drawLegendSymbol,
        drawGraph: xt,
        drawPoints: function() {
            var e = this,
                n = e.options,
                r = e.chart.renderer,
                i;
            tn(e.points, function(s) {
                var o = s.plotY,
                    u = s.graphic;
                o !== U && !isNaN(o) && s.y !== null ? (i = s.shapeArgs, u ? (cn(u), u.animate(t(i))) : s.graphic = r[s.shapeType](i).attr(s.pointAttr[s.selected ? "select" : ""]).add(e.group).shadow(n.shadow, null, n.stacking && !n.borderRadius)) : u && (s.graphic = u.destroy())
            })
        },
        drawTracker: function() {
            var e = this,
                t = e.chart.pointer,
                n = e.options.cursor,
                r = n && {
                    cursor: n
                }, i = function(t) {
                    var n = t.target,
                        r;
                    for (e.onMouseOver(); n && !r;) r = n.point, n = n.parentNode;
                    r !== U && r.onMouseOver(t)
                };
            tn(e.points, function(e) {
                e.graphic && (e.graphic.element.point = e), e.dataLabel && (e.dataLabel.element.point = e)
            }), e._hasTracking ? e._hasTracking = !0 : tn(e.trackerGroups, function(n) {
                e[n] && (e[n].addClass("highcharts-tracker").on("mouseover", i).on("mouseout", function(e) {
                    t.onTrackerMouseOut(e)
                }).css(r), dt) && e[n].on("touchstart", i)
            })
        },
        alignDataLabel: function(e, n, r, i, s) {
            var o = this.chart,
                u = o.inverted,
                a = e.dlBox || e.shapeArgs,
                f = e.below || e.plotY > p(this.translatedThreshold, o.plotSizeY),
                l = p(r.inside, !! this.options.stacking);
            a && (i = t(a), u && (i = {
                x: o.plotWidth - i.y - i.height,
                y: o.plotHeight - i.x - i.width,
                width: i.height,
                height: i.width
            }), !l) && (u ? (i.x += f ? 0 : i.width, i.width = 0) : (i.y += f ? i.height : 0, i.height = 0)), r.align = p(r.align, !u || l ? "center" : f ? "right" : "left"), r.verticalAlign = p(r.verticalAlign, u || l ? "middle" : f ? "top" : "bottom"), bn.prototype.alignDataLabel.call(this, e, n, r, i, s)
        },
        animate: function(e) {
            var t = this.yAxis,
                n = this.options,
                r = this.chart.inverted,
                i = {};
            lt && (e ? (i.scaleY = .001, e = Q(t.pos + t.len, K(t.pos, t.toPixels(n.threshold))), r ? i.translateX = e - t.len : i.translateY = e, this.group.attr(i)) : (i.scaleY = 1, i[r ? "translateX" : "translateY"] = t.pos, this.group.animate(i, this.options.animation), this.animate = null))
        },
        remove: function() {
            var e = this,
                t = e.chart;
            t.hasRendered && tn(t.series, function(t) {
                t.type === e.type && (t.isDirty = !0)
            }), bn.prototype.remove.apply(e, arguments)
        }
    }), Kt.column = vn, hn.bar = t(hn.column), mn = m(vn, {
        type: "bar",
        inverted: !0
    }), Kt.bar = mn, hn.scatter = t(Qt, {
        lineWidth: 0,
        tooltip: {
            headerFormat: '<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
            followPointer: !0
        },
        stickyTracking: !1
    }), mn = m(bn, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["markerGroup"],
        drawTracker: vn.prototype.drawTracker,
        setTooltipPoints: xt
    }), Kt.scatter = mn, hn.pie = t(Qt, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function() {
                return this.point.name
            }
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: .1,
                shadow: !1
            }
        },
        stickyTracking: !1,
        tooltip: {
            followPointer: !0
        }
    }), Qt = {
        type: "pie",
        isCartesian: !1,
        pointClass: m(yn, {
            init: function() {
                yn.prototype.init.apply(this, arguments);
                var t = this,
                    n;
                return t.y < 0 && (t.y = null), e(t, {
                    visible: t.visible !== !1,
                    name: p(t.name, "Slice")
                }), n = function() {
                    t.slice()
                }, on(t, "select", n), on(t, "unselect", n), t
            },
            setVisible: function(e) {
                var t = this,
                    n = t.series,
                    r = n.chart,
                    i;
                t.visible = t.options.visible = e = e === U ? !t.visible : e, n.options.data[en(t, n.data)] = t.options, i = e ? "show" : "hide", tn(["graphic", "dataLabel", "connector", "shadowGroup"], function(e) {
                    t[e] && t[e][i]()
                }), t.legendItem && r.legend.colorizeItem(t, e), !n.isDirty && n.options.ignoreHiddenPoint && (n.isDirty = !0, r.redraw())
            },
            slice: function(e, t, n) {
                var r = this.series;
                M(n, r.chart), p(t, !0), this.sliced = this.options.sliced = e = l(e) ? e : !this.sliced, r.options.data[en(this, r.data)] = this.options, e = e ? this.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                }, this.graphic.animate(e), this.shadowGroup && this.shadowGroup.animate(e)
            }
        }),
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color"
        },
        getColor: xt,
        animate: function(e) {
            var t = this,
                n = t.points,
                r = t.startAngleRad;
            e || (tn(n, function(e) {
                var n = e.graphic,
                    e = e.shapeArgs;
                n && (n.attr({
                    r: t.center[3] / 2,
                    start: r,
                    end: r
                }), n.animate({
                    r: e.r,
                    start: e.start,
                    end: e.end
                }, t.options.animation))
            }), t.animate = null)
        },
        setData: function(e, t) {
            bn.prototype.setData.call(this, e, !1), this.processData(), this.generatePoints(), p(t, !0) && this.chart.redraw()
        },
        getCenter: function() {
            var e = this.options,
                t = this.chart,
                r = 2 * (e.slicedOffset || 0),
                i, s = t.plotWidth - 2 * r,
                o = t.plotHeight - 2 * r,
                t = e.center,
                e = [p(t[0], "50%"), p(t[1], "50%"), e.size || "100%", e.innerSize || 0],
                u = Q(s, o),
                a;
            return sn(e, function(e, t) {
                return a = /%$/.test(e), i = t < 2 || t === 2 && a, (a ? [s, o, u, u][t] * n(e) / 100 : e) + (i ? r : 0)
            })
        },
        translate: function(e) {
            this.generatePoints();
            var t = 0,
                n = 0,
                r = this.options,
                i = r.slicedOffset,
                s = i + r.borderWidth,
                o, u, a, f = this.startAngleRad = et / 180 * ((r.startAngle || 0) % 360 - 90),
                l = this.points,
                c = 2 * et,
                h = r.dataLabels.distance,
                p = r.ignoreHiddenPoint,
                d, v = l.length,
                m;
            e || (this.center = e = this.getCenter()), this.getX = function(t, n) {
                return a = X.asin((t - e[1]) / (e[2] / 2 + h)), e[0] + (n ? -1 : 1) * Y(a) * (e[2] / 2 + h)
            };
            for (d = 0; d < v; d++) m = l[d], t += p && !m.visible ? 0 : m.y;
            for (d = 0; d < v; d++) {
                m = l[d], r = t ? m.y / t : 0, o = V((f + n * c) * 1e3) / 1e3;
                if (!p || m.visible) n += r;
                u = V((f + n * c) * 1e3) / 1e3, m.shapeType = "arc", m.shapeArgs = {
                    x: e[0],
                    y: e[1],
                    r: e[2] / 2,
                    innerR: e[3] / 2,
                    start: o,
                    end: u
                }, a = (u + o) / 2, a > .75 * c && (a -= 2 * et), m.slicedTranslation = {
                    translateX: V(Y(a) * i),
                    translateY: V(Z(a) * i)
                }, o = Y(a) * e[2] / 2, u = Z(a) * e[2] / 2, m.tooltipPos = [e[0] + o * .7, e[1] + u * .7], m.half = a < c / 4 ? 0 : 1, m.angle = a, s = Q(s, h / 2), m.labelPos = [e[0] + o + Y(a) * h, e[1] + u + Z(a) * h, e[0] + o + Y(a) * s, e[1] + u + Z(a) * s, e[0] + o, e[1] + u, h < 0 ? "center" : m.half ? "right" : "left", a], m.percentage = r * 100, m.total = t
            }
            this.setTooltipPoints()
        },
        drawGraph: null,
        drawPoints: function() {
            var t = this,
                n = t.chart.renderer,
                r, i, s = t.options.shadow,
                o, u;
            s && !t.shadowGroup && (t.shadowGroup = n.g("shadow").add(t.group)), tn(t.points, function(a) {
                i = a.graphic, u = a.shapeArgs, o = a.shadowGroup, s && !o && (o = a.shadowGroup = n.g("shadow").add(t.shadowGroup)), r = a.sliced ? a.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                }, o && o.attr(r), i ? i.animate(e(u, r)) : a.graphic = i = n.arc(u).setRadialReference(t.center).attr(a.pointAttr[a.selected ? "select" : ""]).attr({
                    "stroke-linejoin": "round"
                }).attr(r).add(t.group).shadow(s, o), a.visible === !1 && a.setVisible(!1)
            })
        },
        drawDataLabels: function() {
            var e = this,
                t = e.data,
                n, r = e.chart,
                i = e.options.dataLabels,
                s = p(i.connectorPadding, 10),
                o = p(i.connectorWidth, 1),
                u = r.plotWidth,
                r = r.plotHeight,
                a, f, l = p(i.softConnector, !0),
                c = i.distance,
                h = e.center,
                d = h[2] / 2,
                v = h[1],
                m = c > 0,
                g, y, b, w, E = [
                    [],
                    []
                ],
                S, x, T, N, k, L = [0, 0, 0, 0],
                A = function(e, t) {
                    return t.y - e.y
                }, O = function(e, t) {
                    e.sort(function(e, n) {
                        return e.angle !== void 0 && (n.angle - e.angle) * t
                    })
                };
            if (i.enabled || e._hasPointLabels) {
                bn.prototype.drawDataLabels.apply(e), tn(t, function(e) {
                    e.dataLabel && E[e.half].push(e)
                });
                for (N = 0; !w && t[N];) w = t[N] && t[N].dataLabel && (t[N].dataLabel.getBBox().height || 21), N++;
                for (N = 2; N--;) {
                    var t = [],
                        M = [],
                        _ = E[N],
                        D = _.length,
                        P;
                    O(_, N - .5);
                    if (c > 0) {
                        for (k = v - d - c; k <= v + d + c; k += w) t.push(k);
                        y = t.length;
                        if (D > y) {
                            n = [].concat(_), n.sort(A);
                            for (k = D; k--;) n[k].rank = k;
                            for (k = D; k--;) _[k].rank >= y && _.splice(k, 1);
                            D = _.length
                        }
                        for (k = 0; k < D; k++) {
                            n = _[k], b = n.labelPos, n = 9999;
                            var H, B;
                            for (B = 0; B < y; B++) H = G(t[B] - b[1]), H < n && (n = H, P = B);
                            if (P < k && t[k] !== null) P = k;
                            else
                                for (y < D - k + P && t[k] !== null && (P = y - D + k); t[P] === null;) P++;
                            M.push({
                                i: P,
                                y: t[P]
                            }), t[P] = null
                        }
                        M.sort(A)
                    }
                    for (k = 0; k < D; k++) {
                        n = _[k], b = n.labelPos, g = n.dataLabel, T = n.visible === !1 ? "hidden" : "visible", n = b[1];
                        if (c > 0) {
                            if (y = M.pop(), P = y.i, x = y.y, n > x && t[P + 1] !== null || n < x && t[P - 1] !== null) x = n
                        } else x = n;
                        S = i.justify ? h[0] + (N ? -1 : 1) * (d + c) : e.getX(P === 0 || P === t.length - 1 ? n : x, N), g._attr = {
                            visibility: T,
                            align: b[6]
                        }, g._pos = {
                            x: S + i.x + ({
                                left: s,
                                right: -s
                            }[b[6]] || 0),
                            y: x + i.y - 10
                        }, g.connX = S, g.connY = x, this.options.size === null && (y = g.width, S - y < s ? L[3] = K(V(y - S + s), L[3]) : S + y > u - s && (L[1] = K(V(S + y - u + s), L[1])), x - w / 2 < 0 ? L[0] = K(V(-x + w / 2), L[0]) : x + w / 2 > r && (L[2] = K(V(x + w / 2 - r), L[2])))
                    }
                }
                if (C(L) === 0 || this.verifyDataLabelOverflow(L)) this.placeDataLabels(), m && o && tn(this.points, function(t) {
                    a = t.connector, b = t.labelPos, (g = t.dataLabel) && g._pos ? (S = g.connX, x = g.connY, f = l ? ["M", S + (b[6] === "left" ? 5 : -5), x, "C", S, x, 2 * b[2] - b[4], 2 * b[3] - b[5], b[2], b[3], "L", b[4], b[5]] : ["M", S + (b[6] === "left" ? 5 : -5), x, "L", b[2], b[3], "L", b[4], b[5]], a ? (a.animate({
                        d: f
                    }), a.attr("visibility", T)) : t.connector = a = e.chart.renderer.path(f).attr({
                        "stroke-width": o,
                        stroke: i.connectorColor || t.color || "#606060",
                        visibility: T
                    }).add(e.group)) : a && (t.connector = a.destroy())
                })
            }
        },
        verifyDataLabelOverflow: function(e) {
            var t = this.center,
                n = this.options,
                r = n.center,
                i = n = n.minSize || 80,
                s;
            return r[0] !== null ? i = K(t[2] - K(e[1], e[3]), n) : (i = K(t[2] - e[1] - e[3], n), t[0] += (e[3] - e[1]) / 2), r[1] !== null ? i = K(Q(i, t[2] - K(e[0], e[2])), n) : (i = K(Q(i, t[2] - e[0] - e[2]), n), t[1] += (e[0] - e[2]) / 2), i < t[2] ? (t[2] = i, this.translate(t), tn(this.points, function(e) {
                e.dataLabel && (e.dataLabel._pos = null)
            }), this.drawDataLabels()) : s = !0, s
        },
        placeDataLabels: function() {
            tn(this.points, function(e) {
                var e = e.dataLabel,
                    t;
                e && ((t = e._pos) ? (e.attr(e._attr), e[e.moved ? "animate" : "attr"](t), e.moved = !0) : e && e.attr({
                    y: -999
                }))
            })
        },
        alignDataLabel: xt,
        drawTracker: vn.prototype.drawTracker,
        drawLegendSymbol: Gt.prototype.drawLegendSymbol,
        getSymbol: xt
    }, Qt = m(bn, Qt), Kt.pie = Qt, e(Highcharts, {
        Axis: j,
        Chart: R,
        Color: pn,
        Legend: q,
        Pointer: I,
        Point: yn,
        Tick: P,
        Tooltip: F,
        Renderer: pt,
        Series: bn,
        SVGElement: D,
        SVGRenderer: dn,
        arrayMin: N,
        arrayMax: C,
        charts: Tt,
        dateFormat: bt,
        format: b,
        pathAnim: Et,
        getOptions: function() {
            return yt
        },
        hasBidiBug: ct,
        isTouchDevice: at,
        numberFormat: g,
        seriesTypes: Kt,
        setOptions: function(e) {
            return yt = t(yt, e), _(), yt
        },
        addEvent: on,
        removeEvent: un,
        createElement: v,
        discardElement: L,
        css: d,
        each: tn,
        extend: e,
        map: sn,
        merge: t,
        pick: p,
        splat: h,
        extendClass: m,
        pInt: n,
        wrap: function(e, t, n) {
            var r = e[t];
            e[t] = function() {
                var e = Array.prototype.slice.call(arguments);
                return e.unshift(r), n.apply(this, e)
            }
        },
        svg: lt,
        canvas: ht,
        vml: !lt && !ht,
        product: "Highcharts",
        version: "3.0.1"
    })
}(),
function(e, t) {
    function n(e, t, n) {
        this.init.call(this, e, t, n)
    }

    function r(e, t, n) {
        e.call(this, t, n), this.chart.polar && (this.closeSegment = function(e) {
            var t = this.xAxis.center;
            e.push("L", t[0], t[1])
        }, this.closedStacks = !0)
    }

    function i(e, t) {
        var n = this.chart,
            r = this.options.animation,
            i = this.group,
            s = this.markerGroup,
            o = this.xAxis.center,
            u = n.plotLeft,
            a = n.plotTop;
        if (n.polar) {
            if (n.renderer.isSVG)
                if (r === !0 && (r = {}), t) {
                    if (n = {
                        translateX: o[0] + u,
                        translateY: o[1] + a,
                        scaleX: .001,
                        scaleY: .001
                    }, i.attr(n), s) s.attrSetters = i.attrSetters, s.attr(n)
                } else n = {
                    translateX: u,
                    translateY: a,
                    scaleX: 1,
                    scaleY: 1
                }, i.animate(n, r), s && s.animate(n, r), this.animate = null
        } else e.call(this, t)
    }
    var s = e.arrayMin,
        o = e.arrayMax,
        u = e.each,
        a = e.extend,
        f = e.merge,
        l = e.map,
        c = e.pick,
        h = e.pInt,
        p = e.getOptions().plotOptions,
        d = e.seriesTypes,
        v = e.extendClass,
        m = e.splat,
        g = e.wrap,
        y = e.Axis,
        b = e.Tick,
        w = e.Series,
        E = d.column.prototype,
        S = Math,
        x = S.round,
        T = S.floor,
        N = S.ceil,
        C = S.min,
        k = S.max,
        L = function() {};
    a(n.prototype, {
        init: function(e, t, n) {
            var r = this,
                i = r.defaultOptions;
            r.chart = t, t.angular && (i.background = {}), r.options = e = f(i, e), (e = e.background) && u([].concat(m(e)).reverse(), function(e) {
                var t = e.backgroundColor,
                    e = f(r.defaultBackgroundOptions, e);
                t && (e.backgroundColor = t), e.color = e.backgroundColor, n.options.plotBands.unshift(e)
            })
        },
        defaultOptions: {
            center: ["50%", "50%"],
            size: "85%",
            startAngle: 0
        },
        defaultBackgroundOptions: {
            shape: "circle",
            borderWidth: 1,
            borderColor: "silver",
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "#FFF"],
                    [1, "#DDD"]
                ]
            },
            from: Number.MIN_VALUE,
            innerRadius: 0,
            to: Number.MAX_VALUE,
            outerRadius: "105%"
        }
    });
    var A = y.prototype,
        b = b.prototype,
        O = {
            getOffset: L,
            redraw: function() {
                this.isDirty = !1
            },
            render: function() {
                this.isDirty = !1
            },
            setScale: L,
            setCategories: L,
            setTitle: L
        }, M = {
            isRadial: !0,
            defaultRadialGaugeOptions: {
                labels: {
                    align: "center",
                    x: 0,
                    y: null
                },
                minorGridLineWidth: 0,
                minorTickInterval: "auto",
                minorTickLength: 10,
                minorTickPosition: "inside",
                minorTickWidth: 1,
                plotBands: [],
                tickLength: 10,
                tickPosition: "inside",
                tickWidth: 2,
                title: {
                    rotation: 0
                },
                zIndex: 2
            },
            defaultRadialXOptions: {
                gridLineWidth: 1,
                labels: {
                    align: null,
                    distance: 15,
                    x: 0,
                    y: null
                },
                maxPadding: 0,
                minPadding: 0,
                plotBands: [],
                showLastLabel: !1,
                tickLength: 0
            },
            defaultRadialYOptions: {
                gridLineInterpolation: "circle",
                labels: {
                    align: "right",
                    x: -3,
                    y: -2
                },
                plotBands: [],
                showLastLabel: !1,
                title: {
                    x: 4,
                    text: null,
                    rotation: 90
                }
            },
            setOptions: function(e) {
                this.options = f(this.defaultOptions, this.defaultRadialOptions, e)
            },
            getOffset: function() {
                A.getOffset.call(this), this.chart.axisOffset[this.side] = 0, this.center = this.pane.center = d.pie.prototype.getCenter.call(this.pane)
            },
            getLinePath: function(e, t) {
                var n = this.center,
                    t = c(t, n[2] / 2 - this.offset);
                return this.chart.renderer.symbols.arc(this.left + n[0], this.top + n[1], t, t, {
                    start: this.startAngleRad,
                    end: this.endAngleRad,
                    open: !0,
                    innerR: 0
                })
            },
            setAxisTranslation: function() {
                A.setAxisTranslation.call(this), this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.isXAxis) && (this.minPixelPadding = this.transA * this.minPointOffset + (this.reversed ? (this.endAngleRad - this.startAngleRad) / 4 : 0))
            },
            beforeSetTickPositions: function() {
                this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange)
            },
            setAxisSize: function() {
                A.setAxisSize.call(this), this.center && (this.len = this.width = this.height = this.isCircular ? this.center[2] * (this.endAngleRad - this.startAngleRad) / 2 : this.center[2] / 2)
            },
            getPosition: function(e, t) {
                return this.isCircular || (t = this.translate(e), e = this.min), this.postTranslate(this.translate(e), c(t, this.center[2] / 2) - this.offset)
            },
            postTranslate: function(e, t) {
                var n = this.chart,
                    r = this.center,
                    e = this.startAngleRad + e;
                return {
                    x: n.plotLeft + r[0] + Math.cos(e) * t,
                    y: n.plotTop + r[1] + Math.sin(e) * t
                }
            },
            getPlotBandPath: function(e, t, n) {
                var r = this.center,
                    i = this.startAngleRad,
                    s = r[2] / 2,
                    o = [c(n.outerRadius, "100%"), n.innerRadius, c(n.thickness, 10)],
                    u = /%$/,
                    a, f = this.isCircular;
                return this.options.gridLineInterpolation === "polygon" ? r = this.getPlotLinePath(e).concat(this.getPlotLinePath(t, !0)) : (f || (o[0] = this.translate(e), o[1] = this.translate(t)), o = l(o, function(e) {
                    return u.test(e) && (e = h(e, 10) * s / 100), e
                }), n.shape === "circle" || !f ? (e = -Math.PI / 2, t = Math.PI * 1.5, a = !0) : (e = i + this.translate(e), t = i + this.translate(t)), r = this.chart.renderer.symbols.arc(this.left + r[0], this.top + r[1], o[0], o[0], {
                    start: e,
                    end: t,
                    innerR: c(o[1], o[0] - o[2]),
                    open: a
                })), r
            },
            getPlotLinePath: function(e, t) {
                var n = this.center,
                    r = this.chart,
                    i = this.getPosition(e),
                    s, o, a;
                return this.isCircular ? a = ["M", n[0] + r.plotLeft, n[1] + r.plotTop, "L", i.x, i.y] : this.options.gridLineInterpolation === "circle" ? (e = this.translate(e)) && (a = this.getLinePath(0, e)) : (s = r.xAxis[0], a = [], e = this.translate(e), n = s.tickPositions, s.autoConnect && (n = n.concat([n[0]])), t && (n = [].concat(n).reverse()), u(n, function(t, n) {
                    o = s.getPosition(t, e), a.push(n ? "L" : "M", o.x, o.y)
                })), a
            },
            getTitlePosition: function() {
                var e = this.center,
                    t = this.chart,
                    n = this.options.title;
                return {
                    x: t.plotLeft + e[0] + (n.x || 0),
                    y: t.plotTop + e[1] - {
                        high: .5,
                        middle: .25,
                        low: 0
                    }[n.align] * e[2] + (n.y || 0)
                }
            }
        };
    g(A, "init", function(e, r, i) {
        var s, o = r.angular,
            u = r.polar,
            l = i.isX,
            h = o && l,
            p, d;
        d = r.options;
        var v = i.pane || 0;
        if (o) {
            if (a(this, h ? O : M), p = !l) this.defaultRadialOptions = this.defaultRadialGaugeOptions
        } else u && (a(this, M), this.defaultRadialOptions = (p = l) ? this.defaultRadialXOptions : f(this.defaultYAxisOptions, this.defaultRadialYOptions));
        e.call(this, r, i), !h && (o || u) && (e = this.options, r.panes || (r.panes = []), this.pane = (s = r.panes[v] = r.panes[v] || new n(m(d.pane)[v], r, this), v = s), v = v.options, r.inverted = !1, d.chart.zoomType = null, this.startAngleRad = r = (v.startAngle - 90) * Math.PI / 180, this.endAngleRad = d = (c(v.endAngle, v.startAngle + 360) - 90) * Math.PI / 180, this.offset = e.offset || 0, (this.isCircular = p) && i.max === t && d - r === 2 * Math.PI && (this.autoConnect = !0))
    }), g(b, "getPosition", function(e, t, n, r, i) {
        var s = this.axis;
        return s.getPosition ? s.getPosition(n) : e.call(this, t, n, r, i)
    }), g(b, "getLabelPosition", function(e, t, n, r, i, s, o, u, a) {
        var f = this.axis,
            l = s.y,
            p = s.align,
            d = (f.translate(this.pos) + f.startAngleRad + Math.PI / 2) / Math.PI * 180;
        return f.isRadial ? (e = f.getPosition(this.pos, f.center[2] / 2 + c(s.distance, -25)), s.rotation === "auto" ? r.attr({
            rotation: d
        }) : l === null && (l = h(r.styles.lineHeight) * .9 - r.getBBox().height / 2), p === null && (p = f.isCircular ? d > 20 && d < 160 ? "left" : d > 200 && d < 340 ? "right" : "center" : "center", r.attr({
            align: p
        })), e.x += s.x, e.y += l) : e = e.call(this, t, n, r, i, s, o, u, a), e
    }), g(b, "getMarkPath", function(e, t, n, r, i, s, o) {
        var u = this.axis;
        return u.isRadial ? (e = u.getPosition(this.pos, u.center[2] / 2 + r), t = ["M", t, n, "L", e.x, e.y]) : t = e.call(this, t, n, r, i, s, o), t
    }), p.arearange = f(p.area, {
        lineWidth: 1,
        marker: null,
        threshold: null,
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },
        trackByArea: !0,
        dataLabels: {
            verticalAlign: null,
            xLow: 0,
            xHigh: 0,
            yLow: 0,
            yHigh: 0
        }
    }), d.arearange = e.extendClass(d.area, {
        type: "arearange",
        pointArrayMap: ["low", "high"],
        toYData: function(e) {
            return [e.low, e.high]
        },
        pointValKey: "low",
        translate: function() {
            var e = this.yAxis;
            d.area.prototype.translate.apply(this), u(this.points, function(t) {
                t.y !== null && (t.plotLow = t.plotY, t.plotHigh = e.translate(t.high, 0, 1, 0, 1))
            })
        },
        getSegmentPath: function(e) {
            var t = [],
                n = e.length,
                r = w.prototype.getSegmentPath,
                i, s;
            s = this.options;
            for (var o = s.step; n--;) i = e[n], t.push({
                plotX: i.plotX,
                plotY: i.plotHigh
            });
            return e = r.call(this, e), o && (o === !0 && (o = "left"), s.step = {
                left: "right",
                center: "center",
                right: "left"
            }[o]), t = r.call(this, t), s.step = o, s = [].concat(e, t), t[0] = "L", this.areaPath = this.areaPath.concat(e, t), s
        },
        drawDataLabels: function() {
            var e = this.data,
                t = e.length,
                n, r = [],
                i = w.prototype,
                s = this.options.dataLabels,
                o, u = this.chart.inverted;
            if (s.enabled || this._hasPointLabels) {
                for (n = t; n--;) o = e[n], o.y = o.high, o.plotY = o.plotHigh, r[n] = o.dataLabel, o.dataLabel = o.dataLabelUpper, o.below = !1, u ? (s.align = "left", s.x = s.xHigh) : s.y = s.yHigh;
                i.drawDataLabels.apply(this, arguments);
                for (n = t; n--;) o = e[n], o.dataLabelUpper = o.dataLabel, o.dataLabel = r[n], o.y = o.low, o.plotY = o.plotLow, o.below = !0, u ? (s.align = "right", s.x = s.xLow) : s.y = s.yLow;
                i.drawDataLabels.apply(this, arguments)
            }
        },
        alignDataLabel: d.column.prototype.alignDataLabel,
        getSymbol: d.column.prototype.getSymbol,
        drawPoints: L
    }), p.areasplinerange = f(p.arearange), d.areasplinerange = v(d.arearange, {
        type: "areasplinerange",
        getPointSpline: d.spline.prototype.getPointSpline
    }), p.columnrange = f(p.column, p.arearange, {
        lineWidth: 1,
        pointRange: null
    }), d.columnrange = v(d.arearange, {
        type: "columnrange",
        translate: function() {
            var e = this.yAxis,
                t;
            E.translate.apply(this), u(this.points, function(n) {
                var r = n.shapeArgs;
                n.plotHigh = t = e.translate(n.high, 0, 1, 0, 1), n.plotLow = n.plotY, r.y = t, r.height = n.plotY - t
            })
        },
        trackerGroups: ["group", "dataLabels"],
        drawGraph: L,
        pointAttrToOptions: E.pointAttrToOptions,
        drawPoints: E.drawPoints,
        drawTracker: E.drawTracker,
        animate: E.animate,
        getColumnMetrics: E.getColumnMetrics
    }), p.gauge = f(p.line, {
        dataLabels: {
            enabled: !0,
            y: 15,
            borderWidth: 1,
            borderColor: "silver",
            borderRadius: 3,
            style: {
                fontWeight: "bold"
            },
            verticalAlign: "top",
            zIndex: 2
        },
        dial: {},
        pivot: {},
        tooltip: {
            headerFormat: ""
        },
        showInLegend: !1
    }), b = {
        type: "gauge",
        pointClass: e.extendClass(e.Point, {
            setState: function(e) {
                this.state = e
            }
        }),
        angular: !0,
        drawGraph: L,
        trackerGroups: ["group", "dataLabels"],
        translate: function() {
            var e = this.yAxis,
                t = this.options,
                n = e.center;
            this.generatePoints(), u(this.points, function(r) {
                var i = f(t.dial, r.dial),
                    s = h(c(i.radius, 80)) * n[2] / 200,
                    o = h(c(i.baseLength, 70)) * s / 100,
                    u = h(c(i.rearLength, 10)) * s / 100,
                    a = i.baseWidth || 3,
                    l = i.topWidth || 1,
                    p = e.startAngleRad + e.translate(r.y, null, null, null, !0);
                t.wrap === !1 && (p = Math.max(e.startAngleRad, Math.min(e.endAngleRad, p))), p = p * 180 / Math.PI, r.shapeType = "path", r.shapeArgs = {
                    d: i.path || ["M", -u, -a / 2, "L", o, -a / 2, s, -l / 2, s, l / 2, o, a / 2, -u, a / 2, "z"],
                    translateX: n[0],
                    translateY: n[1],
                    rotation: p
                }, r.plotX = n[0], r.plotY = n[1]
            })
        },
        drawPoints: function() {
            var e = this,
                t = e.yAxis.center,
                n = e.pivot,
                r = e.options,
                i = r.pivot,
                s = e.chart.renderer;
            u(e.points, function(t) {
                var n = t.graphic,
                    i = t.shapeArgs,
                    o = i.d,
                    u = f(r.dial, t.dial);
                n ? (n.animate(i), i.d = o) : t.graphic = s[t.shapeType](i).attr({
                    stroke: u.borderColor || "none",
                    "stroke-width": u.borderWidth || 0,
                    fill: u.backgroundColor || "black",
                    rotation: i.rotation
                }).add(e.group)
            }), n ? n.animate({
                translateX: t[0],
                translateY: t[1]
            }) : e.pivot = s.circle(0, 0, c(i.radius, 5)).attr({
                "stroke-width": i.borderWidth || 0,
                stroke: i.borderColor || "silver",
                fill: i.backgroundColor || "black"
            }).translate(t[0], t[1]).add(e.group)
        },
        animate: function(e) {
            var t = this;
            e || (u(t.points, function(e) {
                var n = e.graphic;
                n && (n.attr({
                    rotation: t.yAxis.startAngleRad * 180 / Math.PI
                }), n.animate({
                    rotation: e.shapeArgs.rotation
                }, t.options.animation))
            }), t.animate = null)
        },
        render: function() {
            this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup), d.pie.prototype.render.call(this), this.group.clip(this.chart.clipRect)
        },
        setData: d.pie.prototype.setData,
        drawTracker: d.column.prototype.drawTracker
    }, d.gauge = e.extendClass(d.line, b), p.boxplot = f(p.column, {
        fillColor: "#FFFFFF",
        lineWidth: 1,
        medianWidth: 2,
        states: {
            hover: {
                brightness: -0.3
            }
        },
        threshold: null,
        tooltip: {
            pointFormat: '<span style="color:{series.color};font-weight:bold">{series.name}</span><br/>Minimum: {point.low}<br/>Lower quartile: {point.q1}<br/>Median: {point.median}<br/>Higher quartile: {point.q3}<br/>Maximum: {point.high}<br/>'
        },
        whiskerLength: "50%",
        whiskerWidth: 2
    }), d.boxplot = v(d.column, {
        type: "boxplot",
        pointArrayMap: ["low", "q1", "median", "q3", "high"],
        toYData: function(e) {
            return [e.low, e.q1, e.median, e.q3, e.high]
        },
        pointValKey: "high",
        pointAttrToOptions: {
            fill: "fillColor",
            stroke: "color",
            "stroke-width": "lineWidth"
        },
        drawDataLabels: L,
        translate: function() {
            var e = this.yAxis,
                t = this.pointArrayMap;
            d.column.prototype.translate.apply(this), u(this.points, function(n) {
                u(t, function(t) {
                    n[t] !== null && (n[t + "Plot"] = e.translate(n[t], 0, 1, 0, 1))
                })
            })
        },
        drawPoints: function() {
            var e = this,
                n = e.points,
                r = e.options,
                i = e.chart.renderer,
                s, o, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, N, C, k, L, A, O = e.doQuartiles !== !1,
                M = parseInt(e.options.whiskerLength, 10) / 100;
            u(n, function(n) {
                d = n.graphic, L = n.shapeArgs, m = {}, b = {}, E = {}, A = n.color || e.color, n.plotY !== t && ((s = n.pointAttr[n.selected ? "selected" : ""], S = L.width, N = T(L.x), C = N + S, k = x(S / 2), o = T(O ? n.q1Plot : n.lowPlot), a = T(O ? n.q3Plot : n.lowPlot), f = T(n.highPlot), l = T(n.lowPlot), m.stroke = n.stemColor || r.stemColor || A, m["stroke-width"] = n.stemWidth || r.stemWidth || r.lineWidth, m.dashstyle = n.stemDashStyle || r.stemDashStyle, b.stroke = n.whiskerColor || r.whiskerColor || A, b["stroke-width"] = n.whiskerWidth || r.whiskerWidth || r.lineWidth, E.stroke = n.medianColor || r.medianColor || A, E["stroke-width"] = n.medianWidth || r.medianWidth || r.lineWidth, h = m["stroke-width"] % 2 / 2, p = N + k + h, v = ["M", p, a, "L", p, f, "M", p, o, "L", p, l, "z"], O && (h = s["stroke-width"] % 2 / 2, p = T(p) + h, o = T(o) + h, a = T(a) + h, N += h, C += h, g = ["M", N, a, "L", N, o, "L", C, o, "L", C, a, "L", N, a, "z"]), M && (h = b["stroke-width"] % 2 / 2, f += h, l += h, y = ["M", p - k * M, f, "L", p + k * M, f, "M", p - k * M, l, "L", p + k * M, l]), h = E["stroke-width"] % 2 / 2, c = x(n.medianPlot) + h, w = ["M", N, c, "L", C, c, "z"], d) ? (n.stem.animate({
                    d: v
                }), M && n.whiskers.animate({
                    d: y
                }), O && n.box.animate({
                    d: g
                }), n.medianShape.animate({
                    d: w
                })) : (n.graphic = d = i.g().add(e.group), n.stem = i.path(v).attr(m).add(d), M && (n.whiskers = i.path(y).attr(b).add(d)), O && (n.box = i.path(g).attr(s).add(d)), n.medianShape = i.path(w).attr(E).add(d)))
            })
        }
    }), p.errorbar = f(p.boxplot, {
        color: "#000000",
        grouping: !1,
        linkedTo: ":previous",
        tooltip: {
            pointFormat: p.arearange.tooltip.pointFormat
        },
        whiskerWidth: null
    }), d.errorbar = v(d.boxplot, {
        type: "errorbar",
        pointArrayMap: ["low", "high"],
        toYData: function(e) {
            return [e.low, e.high]
        },
        pointValKey: "high",
        doQuartiles: !1,
        getColumnMetrics: function() {
            return this.linkedParent && this.linkedParent.columnMetrics || d.column.prototype.getColumnMetrics.call(this)
        }
    }), g(A, "getSeriesExtremes", function(e, t) {
        e.call(this, t);
        if (!this.isXAxis) {
            var n = this,
                r = [],
                i = !0;
            u(n.series, function(e) {
                if (e.visible && e.stackKey && e.type === "waterfall" && HighchartsAdapter.inArray(e.stackKey) === -1) {
                    i && (n.dataMin = n.dataMax = null, i = !1);
                    var t = e.processedYData,
                        s = t.length,
                        o = t[0],
                        u = t[0],
                        a = e.options.threshold,
                        f = n.stacks,
                        l = e.stackKey,
                        h = "-" + l,
                        p, d, v, m;
                    for (m = 0; m < s; m++) v = t[m] < a ? h : l, p = f[v][m].total, m > a && (p += d, f[v][m].setTotal(p), f[v][m]._cum = null), p < o && (o = p), p > u && (u = p), d = p;
                    e.dataMin = o, e.dataMax = u, n.dataMin = C(c(n.dataMin, o), o, a), n.dataMax = k(c(n.dataMax, u), u, a), r.push(e.stackKey), typeof a == "number" && (n.dataMin >= a ? (n.dataMin = a, n.ignoreMinPadding = !0) : n.dataMax < a && (n.dataMax = a, n.ignoreMaxPadding = !0))
                }
            })
        }
    }), p.waterfall = f(p.column, {
        lineWidth: 1,
        lineColor: "#333",
        dashStyle: "dot",
        borderColor: "#333"
    }), d.waterfall = v(d.column, {
        type: "waterfall",
        upColorProp: "fill",
        pointArrayMap: ["y", "low"],
        pointValKey: "y",
        init: function(e, t) {
            t.stacking = !0, d.column.prototype.init.call(this, e, t)
        },
        translate: function() {
            var e = this.yAxis,
                t, n, r, i, s, o, u, a, f, l, c, h, p = this.options.borderWidth % 2 / 2;
            d.column.prototype.translate.apply(this), r = this.points, f = u = r[0], o = a = r[0].y;
            for (n = 1, t = r.length; n < t; n++) i = r[n], s = i.shapeArgs, l = this.getStack(n), c = this.getStack(n - 1), h = this.getStackY(c), f === null && (f = i, a = 0), i.y && !i.isSum && !i.isIntermediateSum && (o += i.y, a += i.y), i.isSum || i.isIntermediateSum ? (i.isIntermediateSum ? (l = this.getSumEdges(f, r[n - 1]), i.y = a, f = null) : (l = this.getSumEdges(u, r[n - 1]), i.y = o), s.y = i.plotY = l[1], s.height = l[0] - l[1]) : i.y < 0 ? (c = l._cum === null ? c.total : l._cum, l._cum = c + i.y, i = N(e.translate(c, 0, 1)) - p, l = e.translate(l._cum, 0, 1), s.y = i, s.height = N(l - i)) : s.height = T(h - s.y)
        },
        processData: function(e) {
            w.prototype.processData.call(this, e);
            var e = this.yData,
                t = e.length,
                n, r;
            for (r = 0; r < t; r++) n = e[r], n !== null && typeof n != "number" && (e[r] = n === "sum" ? null : n === "intermediateSum" ? null : n[0])
        },
        toYData: function(e) {
            return e.isSum ? "sum" : e.isIntermediateSum ? "intermediateSum" : [e.y]
        },
        getAttribs: function() {
            d.column.prototype.getAttribs.apply(this, arguments);
            var t = this.options,
                n = t.states,
                r = t.upColor || this.color,
                t = e.Color(r).brighten(.1).get(),
                i = f(this.pointAttr),
                s = this.upColorProp;
            i[""][s] = r, i.hover[s] = n.hover.upColor || t, i.select[s] = n.select.upColor || r, u(this.points, function(e) {
                e.y > 0 && !e.color && (e.pointAttr = i, e.color = r)
            })
        },
        getGraphPath: function() {
            var e = this.data,
                t = e.length,
                n = x(this.options.lineWidth + this.options.borderWidth) % 2 / 2,
                r = [],
                i, s, o;
            for (o = 1; o < t; o++) s = e[o].shapeArgs, i = e[o - 1].shapeArgs, s = ["M", i.x + i.width, i.y + n, "L", s.x, i.y + n], e[o - 1].y < 0 && (s[2] += i.height, s[5] += i.height), r = r.concat(s);
            return r
        },
        getStack: function(e) {
            var t = this.yAxis.stacks,
                n = this.stackKey;
            return this.processedYData[e] < this.options.threshold && (n = "-" + n), t[n][e]
        },
        getStackY: function(e) {
            return N(this.yAxis.translate(e.total, null, !0))
        },
        getSumEdges: function(e, t) {
            var n, r, i;
            return r = this.options.threshold, n = e.y >= r ? e.shapeArgs.y + e.shapeArgs.height : e.shapeArgs.y, r = t.y >= r ? t.shapeArgs.y : t.shapeArgs.y + t.shapeArgs.height, r > n && (i = n, n = r, r = i), [n, r]
        },
        drawGraph: w.prototype.drawGraph
    }), p.bubble = f(p.scatter, {
        dataLabels: {
            inside: !0,
            style: {
                color: "white",
                textShadow: "0px 0px 3px black"
            },
            verticalAlign: "middle"
        },
        marker: {
            lineColor: null,
            lineWidth: 1
        },
        minSize: 8,
        maxSize: "20%",
        tooltip: {
            pointFormat: "({point.x}, {point.y}), Size: {point.z}"
        },
        zThreshold: 0
    }), d.bubble = v(d.scatter, {
        type: "bubble",
        pointArrayMap: ["y", "z"],
        trackerGroups: ["group", "dataLabelsGroup"],
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor"
        },
        applyOpacity: function(t) {
            var n = this.options.marker,
                r = c(n.fillOpacity, .5),
                t = t || n.fillColor || this.color;
            return r !== 1 && (t = e.Color(t).setOpacity(r).get("rgba")), t
        },
        convertAttribs: function() {
            var e = w.prototype.convertAttribs.apply(this, arguments);
            return e.fill = this.applyOpacity(e.fill), e
        },
        getRadii: function(e, t, n, r) {
            var i, s, o, u = this.zData,
                a = [];
            for (s = 0, i = u.length; s < i; s++) o = t - e, o = o > 0 ? (u[s] - e) / (t - e) : .5, a.push(S.round(n + o * (r - n)) / 2);
            this.radii = a
        },
        animate: function(e) {
            var t = this.options.animation;
            e || (u(this.points, function(e) {
                var n = e.graphic,
                    e = e.shapeArgs;
                n && e && (n.attr("r", 1), n.animate({
                    r: e.r
                }, t))
            }), this.animate = null)
        },
        translate: function() {
            var e, n = this.data,
                r, i, s = this.radii;
            d.scatter.prototype.translate.call(this);
            for (e = n.length; e--;) r = n[e], i = s[e], r.negative = r.z < (this.options.zThreshold || 0), i >= this.minPxSize / 2 ? (r.shapeType = "circle", r.shapeArgs = {
                x: r.plotX,
                y: r.plotY,
                r: i
            }, r.dlBox = {
                x: r.plotX - i,
                y: r.plotY - i,
                width: 2 * i,
                height: 2 * i
            }) : r.shapeArgs = r.plotY = r.dlBox = t
        },
        drawLegendSymbol: function(e, t) {
            var n = h(e.itemStyle.fontSize) / 2;
            t.legendSymbol = this.chart.renderer.circle(n, e.baseline - n, n).attr({
                zIndex: 3
            }).add(t.legendGroup)
        },
        drawPoints: d.column.prototype.drawPoints,
        alignDataLabel: d.column.prototype.alignDataLabel
    }), y.prototype.beforePadding = function() {
        var e = this.len,
            n = this.chart,
            r = 0,
            i = e,
            a = this.isXAxis,
            f = a ? "xData" : "yData",
            l = this.min,
            p = {}, d = S.min(n.plotWidth, n.plotHeight),
            v = Number.MAX_VALUE,
            m = -Number.MAX_VALUE,
            g = this.max - l,
            y = e / g,
            b = [];
        this.allowZoomOutside = !0, this.tickPositions && (u(this.series, function(e) {
            var t = e.options;
            e.type === "bubble" && e.visible && (b.push(e), a) && (u(["minSize", "maxSize"], function(e) {
                var n = t[e],
                    r = /%$/.test(n),
                    n = h(n);
                p[e] = r ? d * n / 100 : n
            }), e.minPxSize = p.minSize, e = e.zData, v = S.min(v, S.max(s(e), t.displayNegative === !1 ? t.zThreshold : -Number.MAX_VALUE)), m = S.max(m, o(e)))
        }), u(b, function(e) {
            var t = e[f],
                n = t.length,
                s;
            a && e.getRadii(v, m, p.minSize, p.maxSize);
            if (g > 0)
                for (; n--;) s = e.radii[n], r = Math.min((t[n] - l) * y - s, r), i = Math.max((t[n] - l) * y + s, i)
        }), g > 0 && c(this.options.min, this.userMin) === t && c(this.options.max, this.userMax) === t && (i -= e, y *= (e + r - i) / e, this.min += r / y, this.max += i / y))
    };
    var _ = w.prototype,
        p = e.Pointer.prototype;
    _.toXY = function(e) {
        var t, n = this.chart;
        t = e.plotX;
        var r = e.plotY;
        e.rectPlotX = t, e.rectPlotY = r, e.clientX = t / Math.PI * 180, t = this.xAxis.postTranslate(e.plotX, this.yAxis.len - r), e.plotX = e.polarPlotX = t.x - n.plotLeft, e.plotY = e.polarPlotY = t.y - n.plotTop
    }, g(d.area.prototype, "init", r), g(d.areaspline.prototype, "init", r), g(d.spline.prototype, "getPointSpline", function(e, t, n, r) {
        var i, s, o, u, a, f, l;
        return this.chart.polar ? (i = n.plotX, s = n.plotY, e = t[r - 1], o = t[r + 1], this.connectEnds && (e || (e = t[t.length - 2]), o || (o = t[1])), e && o && (u = e.plotX, a = e.plotY, t = o.plotX, f = o.plotY, u = (1.5 * i + u) / 2.5, a = (1.5 * s + a) / 2.5, o = (1.5 * i + t) / 2.5, l = (1.5 * s + f) / 2.5, t = Math.sqrt(Math.pow(u - i, 2) + Math.pow(a - s, 2)), f = Math.sqrt(Math.pow(o - i, 2) + Math.pow(l - s, 2)), u = Math.atan2(a - s, u - i), a = Math.atan2(l - s, o - i), l = Math.PI / 2 + (u + a) / 2, Math.abs(u - l) > Math.PI / 2 && (l -= Math.PI), u = i + Math.cos(l) * t, a = s + Math.sin(l) * t, o = i + Math.cos(Math.PI + l) * f, l = s + Math.sin(Math.PI + l) * f, n.rightContX = o, n.rightContY = l), r ? (n = ["C", e.rightContX || e.plotX, e.rightContY || e.plotY, u || i, a || s, i, s], e.rightContX = e.rightContY = null) : n = ["M", i, s]) : n = e.call(this, t, n, r), n
    }), g(_, "translate", function(e) {
        e.call(this);
        if (this.chart.polar && !this.preventPostTranslate)
            for (var e = this.points, t = e.length; t--;) this.toXY(e[t])
    }), g(_, "getSegmentPath", function(e, t) {
        var n = this.points;
        return this.chart.polar && this.options.connectEnds !== !1 && t[t.length - 1] === n[n.length - 1] && n[0].y !== null && (this.connectEnds = !0, t = [].concat(t, [n[0]])), e.call(this, t)
    }), g(_, "animate", i), g(E, "animate", i), g(_, "setTooltipPoints", function(e, t) {
        return this.chart.polar && a(this.xAxis, {
            tooltipLen: 360
        }), e.call(this, t)
    }), g(E, "translate", function(e) {
        var t = this.xAxis,
            n = this.yAxis.len,
            r = t.center,
            i = t.startAngleRad,
            s = this.chart.renderer,
            o, u;
        this.preventPostTranslate = !0, e.call(this);
        if (t.isRadial) {
            t = this.points;
            for (u = t.length; u--;) o = t[u], e = o.barX + i, o.shapeType = "path", o.shapeArgs = {
                d: s.symbols.arc(r[0], r[1], n - o.plotY, null, {
                    start: e,
                    end: e + o.pointWidth,
                    innerR: n - c(o.yBottom, n)
                })
            }, this.toXY(o)
        }
    }), g(E, "alignDataLabel", function(e, t, n, r, i, s) {
        this.chart.polar ? (e = t.rectPlotX / Math.PI * 180, r.align === null && (r.align = e > 20 && e < 160 ? "left" : e > 200 && e < 340 ? "right" : "center"), r.verticalAlign === null && (r.verticalAlign = e < 45 || e > 315 ? "bottom" : e > 135 && e < 225 ? "top" : "middle"), _.alignDataLabel.call(this, t, n, r, i, s)) : e.call(this, t, n, r, i, s)
    }), g(p, "getIndex", function(e, t) {
        var n, r = this.chart,
            i;
        return r.polar ? (i = r.xAxis[0].center, n = t.chartX - i[0] - r.plotLeft, r = t.chartY - i[1] - r.plotTop, n = 180 - Math.round(Math.atan2(n, r) / Math.PI * 180)) : n = e.call(this, t), n
    }), g(p, "getCoordinates", function(e, t) {
        var n = this.chart,
            r = {
                xAxis: [],
                yAxis: []
            };
        return n.polar ? u(n.axes, function(e) {
            var i = e.isXAxis,
                s = e.center,
                o = t.chartX - s[0] - n.plotLeft,
                s = t.chartY - s[1] - n.plotTop;
            r[i ? "xAxis" : "yAxis"].push({
                axis: e,
                value: e.translate(i ? Math.PI - Math.atan2(o, s) : Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2)), !0)
            })
        }) : r = e.call(this, t), r
    })
}(Highcharts);
var Timeline = function(e, t) {
    t.label_width = t.label_width || 100, t.hour_spacing = t.hour_spacing || null, t.first_hour_width = t.first_hour_width || 0;
    var n = t.width,
        r = {}, i = e.find(".hours"),
        s = e.find(".night"),
        o, u = 0,
        a, f, l = function(e) {
            return e.cloudCover < .2 ? 0 : e.cloudCover < .8 ? 1 : 2
        }, c = function(e) {
            var t = UIManager.si_units() ? .127 : .005;
            if (!e.precipIntensity || e.precipIntensity < t) return 0;
            var n = Forecaster.precip_intensity(e, !0);
            return n ? Math.round(1 + n) : 0
        }, h = function(e) {
            var t = new Date(1e3 * e);
            t.setHours(t.getHours() + u);
            var n = t.getHours();
            return t.getMinutes() > 30 && (n++, n == 24 && (n = 0)), n
        }, p = function(e) {
            var t = h(e);
            return t == 0 ? t = "12AM" : t < 12 ? t += "AM" : t == 12 ? t = "noon" : (t -= 12, t += "PM"), t
        }, d = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }, v = function(t) {
            var r = e.find(".hour_ticks");
            r.empty();
            var i = n / t.length,
                s = 0;
            for (var o = 0; o < t.length; o++) s > n && (s = n), $("<span />").addClass(o % 2 == 0 ? "even" : "odd").css("left", s).appendTo(r), s += i;
            r.find("span").eq(0).addClass("first"), r.find("span").eq(1).addClass("second")
        }, m = function(e) {
            i.empty();
            var t = new Date(1e3 * o),
                r, s;
            t.setHours(t.getHours(), 0, 0, 0);
            for (var u = 0; u < e.length; u++) {
                r = e[u].time, ENV.is_mobile && u == 0 ? s = 3 : s = u == 0 ? 1 : w(r);
                if (s >= 0 && s < n) {
                    var a = $("<span />").addClass("hour").css("left", s);
                    if (u == 0 || u > 1 && h(r) % 2 == 0) {
                        var f = p(r);
                        ENV.is_mobile && f == "midnight" && (f = "12AM"), $("<span />").html(f).addClass(f.replace(" ", "")).appendTo(a)
                    }
                    a.appendTo(i)
                }
                t.setHours(t.getHours() + 1)
            }
            i.find(".hour").eq(0).addClass("first")
        }, g = function(t) {
            var r = e.find(".stripes");
            r.empty();
            var i = n / 24,
                s, o, u = 0,
                a, f = 5,
                l = 0,
                c = [];
            for (var h = 0; h < t.length; h++) {
                a = l * i;
                if (a >= n) continue;
                var p = i * t[h].num_hours + 1;
                1 + a + p > n && (p -= 1 + a + p - n);
                var d = $("<span />").addClass(t[h].type + t[h].range).addClass(t[h].type).css({
                    left: a,
                    width: p
                });
                s = null, t[h].range == 0 ? o = "clear" : t[h].type == "c" ? t[h].range == 2 ? o = "cloudy" : t[h].range == 1 ? o = "partly cloudy" : o = "" : t[h].range == 4 ? o = "heavy " + t[h].precip_type : t[h].range == 2 ? o = "scattered light " + t[h].precip_type : t[h].range == 1 ? o = t[h].precip_type == "snow" ? "possible flurries" : "possible drizzle" : o = t[h].precip_type, o.length * f <= p && (s = $("<span />").html(o).appendTo(d), c.push(o)), d.appendTo(r), u++, l += t[h].num_hours
            }
            r.find("> span").eq(0).addClass("first")
        }, y = function(t) {
            var r = e.find(".temps");
            r.empty();
            var i = Infinity,
                s = -Infinity;
            for (var o = 0; o < t.length; o++) t[o].temperature !== null && (t[o].temperature < i && (i = t[o].temperature), t[o].temperature > s && (s = t[o].temperature));
            var u = function(e) {
                var o = t[e].time,
                    u = t[e].temperature,
                    a = .25 + .75 * (u - i) / (s - i);
                u == null ? u = "-" : u = Math.round(u) + "&deg;";
                var f = e == 0 ? 1 : w(o);
                ENV.is_mobile && e == 0 && (f = 3);
                if (f < 0 || f > n) return;
                $("<span><span>" + u + "</span></span>").css({
                    left: f,
                    opacity: a
                }).appendTo(r)
            };
            u(0);
            for (var o = h(t[0].time) % 2 ? 3 : 2; o < t.length; o += 2) u(o);
            r.find("> span").eq(0).addClass("first")
        }, b = function() {
            e.find(".now").remove();
            var t = (new Date).getTime() / 1e3,
                r = w(t);
            if (r < 0 || r > n) return;
            $("<span />").addClass("now").css("left", r).appendTo(e)
        }, w = function(e) {
            var t = n / 86400,
                r = e - o;
            return r * t
        };
    return r.load = function(i) {
        o = i.hourly.data[0].time, u = (i.offset || 0) + (new Date(1e3 * o)).getTimezoneOffset() / 60, a = i.latitude, f = i.longitude;
        var s = i.hourly.data.slice(0, 24);
        if (t.width) {
            var h = t.width / 24,
                p = Math.ceil(t.label_width / h - 1e-4);
            p > t.hour_spacing && (t.hour_spacing = p)
        }
        n || (n = Math.ceil(24 * t.label_width / min_spacing)), e.css("width", n), t.hour_spacing === null && (t.hour_spacing = n / 24), v(s), m(s);
        var d = [],
            w = {}, E, S, x, T, N = "rain";
        s[0].precipType ? N = s[0].precipType : s[0].temperature && (N = s[0].temperature <= (UIManager.si_units() ? 0 : 32) ? "snow" : "rain");
        for (var C = 0; C < s.length; C++) {
            S = l(s[C]), x = c(s[C]), T = s[C].precipType || N, E = x > 0 ? "p" : "c";
            var k = {
                type: E,
                range: E == "p" ? x : S,
                precip_type: E == "p" ? T : null,
                num_hours: 0
            };
            if (k.type != w.type || k.range != w.range) C > 0 && d.push(w), w = k;
            N = T, w.num_hours++
        }
        d.push(w), g(d), y(s), b(), r.params = t
    }, r
}, Loader = {
        start: function() {},
        stop: function() {}
    };
(function() {
    function g() {
        var e = Date.now(),
            t;
        for (t = i + 2; t--;) l[t] = 0, c[t] = 0;
        h = !0, d = .5, p = 1, f.length = 0, f.push({
            x: Math.random(),
            t: e - 500
        }, {
            x: Math.random(),
            t: e - 250
        }, {
            x: Math.random(),
            t: e - 0
        })
    }

    function y() {
        p > .1 && f.push({
            x: Math.random(),
            t: Date.now()
        })
    }

    function b() {
        var e = i;
        while (e--) l[e + 1] = (c[e] + c[e + 2] - l[e + 1]) * o;
        e = c, c = l, l = e
    }

    function w(e, t) {
        e *= i;
        var n = r * i,
            s = Math.ceil(e - n),
            o = Math.floor(e + n) + 1,
            u, a;
        for (u = s; u !== o; ++u) a = e - u, l[u + 1] -= Math.sqrt(n * n - a * a) * t / n
    }

    function E() {
        var i = Date.now(),
            s = Math.sqrt((p + r * 3) / n),
            o = r * 2,
            u = Math.PI * 11 / 6,
            a = Math.PI * 7 / 6,
            l, c, h, d;
        for (l = f.length; l--;) h = f[l].x * (1 - o) + r, c = i - f[l].t, d = n * c * c - r, c >= s ? (w(h, d), f.splice(l, 1)) : (t.beginPath(), t.moveTo(h * e.width, (d - o) * e.height), t.arc(h * e.width, d * e.height, r * e.width, u, a, !1), t.fill())
    }

    function S() {
        var n = e.width / (i - 1),
            r = i;
        t.beginPath(), t.moveTo(0, e.height), t.lineTo(e.width, e.height);
        while (r--) t.lineTo(r * n, (p + l[r + 1] * s) * e.height);
        t.fill()
    }

    function x() {
        var n = Math.max(e.width, e.height),
            r = n * a,
            i = n - r,
            s;
        t.fillStyle = "#f8f8f8", t.fillRect(0, 0, e.width, e.height), t.fillStyle = "#d3d3d3", t.save(), b(), S(), E(), t.restore(), p += (d - p) * u, v && Math.abs(d - p) < .005 && (p = d, s = v, v = undefined, s())
    }

    function T(e) {
        var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            }, n = function() {
                h && (t(n), e())
            };
        n()
    }
    var e = document.getElementById("loader_canvas");
    if (!e) return;
    var t = e.getContext("2d"),
        n = 1 / 1048576,
        r = 1 / 16,
        i = 48,
        s = 1 / 8,
        o = .75,
        u = 1 / 16,
        a = 1 / 8,
        f = [],
        l = new Array(i + 2),
        c = new Array(i + 2),
        h, p, d, v, m;
    Loader.start = function(e) {
        g(), v = e, m = setInterval(y, 1e3 / 3), T(x)
    }, Loader.stop = function(e) {
        d = 0, v = function() {
            clearInterval(m), h = !1, typeof e == "function" && e()
        }
    }
})(), jQuery.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
}, jQuery.browser || (matched = jQuery.uaMatch(navigator.userAgent), browser = {}, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0), jQuery.browser = browser);
var ENV = function() {
    var e = {}, t = $(e);
    e.is_retina = isRetina(), e.is_online = window.navigator.onLine, e.is_homescreen = window.navigator.standalone, e.has_geolocation = !! navigator.geolocation, e.is_ie = $.browser.msie, e.is_old_ie = e.is_ie && parseInt($.browser.version, 0) < 10, e.is_webkit = navigator.userAgent.match(/webkit/i), e.is_mozilla = $.browser.mozilla, e.is_chrome = /chrome/.test(navigator.userAgent.toLowerCase()), e.is_mobile_chrome = /crios/.test(navigator.userAgent.toLowerCase()), e.is_iphone = navigator.userAgent.match(/like Mac OS X/i) && navigator.userAgent.match(/iPhone/i), e.is_mobile = navigator.userAgent.match(/(iphone|ipod|(android.*?mobile)|(mobile.*?firefox)|blackberry|nokia)/i), e.is_tablet = navigator.userAgent.match(/(ipad|android(?!.*mobile))/i), e.is_android = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    if (e.is_android) var n = navigator.userAgent,
    r = parseFloat(n.slice(n.indexOf("Android") + 8));
    return e.is_retina = window.devicePixelRatio && window.devicePixelRatio > 1, e.is_mobile_site = !! window.location.href.match(/mobile.html/i), e.has_avenir = /Mac OS X 10_8/.test(navigator.userAgent) || /iPhone OS 6/.test(navigator.userAgent), e.begin = function() {
        $.browser.msie && parseInt($.browser.version, 0) < 9 ? t.trigger("criteria_failed", "old_ie") : $.browser.safari && parseInt($.browser.version, 0) < 533 ? t.trigger("criteria_failed", "old_safari") : e.is_online ? e.is_android && r < 4 ? t.trigger("criteria_failed", "old_android") : t.trigger("criteria_met") : t.trigger("criteria_failed", "not_online")
    }, e.is_mobile ? $("body").addClass("mobile") : $("body").addClass("desktop"), e.is_iphone && $("body").addClass("iphone"), e.is_chrome && $("body").addClass("chrome"), e.is_mobile_chrome && $("body").addClass("mobile_chrome"), e.is_android && $("body").addClass("android"), e.has_avenir && $("body").addClass("has_avenir"), e.is_tablet && $("body").addClass("tablet"), e
}(),
    Slider = function(e, t) {
        var n = $(e),
            r = n.find(".handle"),
            i = !1,
            s = !1,
            o, u, a, f, l = !1,
            c = 0,
            h = 0,
            p, d, v = t.change,
            m = t.start,
            g = t.stop,
            y = t.stop_animating_to,
            b = t.move_on_down == null ? !0 : t.move_on_down,
            w = t.max_speed != null ? t.max_speed : .35,
            E = t.speed_multiple != null ? t.speed_multiple : .01,
            S = t.stop_decay != null ? t.stop_decay : .004,
            x = t.snap_distance != null ? t.snap_distance : 50,
            T = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                    window.setTimeout(e, 11)
                }
            }(),
            N = function(e) {
                return e < 0 ? -1 : 1
            }, C = function() {
                var e = (new Date).getTime(),
                    t = e - d || 0;
                i || s ? (p = E * (a - c), Math.abs(p) > w && (p = N(p) * w)) : p *= Math.exp(-t * S), Math.abs(p) < .005 && (p = 0), c = Math.min(u, Math.max(0, c + p * t)), h = c / u, r.css("left", c), d = e, v && v(h), i || p != 0 ? T(C) : s && y ? (s = !1, y()) : g && g()
            }, k = function(e) {
                e.stopPropagation(), e.preventDefault(), o = n.offset().left, u = n.width(), i = !0, l = !1;
                var t = e.touches || e.originalEvent.touches;
                f = a = (t ? t[0].pageX : e.clientX) - o, d = (new Date).getTime(), $touchmove_elem.unbind("mouseup", L), $touchmove_elem.unbind("touchend", L), $touchmove_elem.bind("mouseup", L), $touchmove_elem.bind("touchend", L), $touchmove_elem.unbind("mousemove", A), $touchmove_elem.unbind("touchmove", A), $touchmove_elem.bind("mousemove", A), $touchmove_elem.bind("touchmove", A), b && (Math.abs(c - a) > x ? (c = a, h = c / u, r.css("left", c), m && m(), v && v()) : m && m(), C())
            }, L = function() {
                i = !1, $touchmove_elem.unbind("mouseup", L), $touchmove_elem.unbind("mousemove", A), $touchmove_elem.unbind("touchend", L), $touchmove_elem.unbind("touchmove", A), l || n.trigger("tap")
            }, A = function(e) {
                e.preventDefault();
                var t = e.touches || e.originalEvent.touches;
                a = (t ? t[0].pageX : e.clientX) - o, !l && Math.abs(a - f) > 10 && (l = !0, n.trigger("start_move"), b || (m && m(), C()))
            }, O = function(e) {
                h = e, c = h * n.width(), r.css("left", c)
            }, M = function(e) {
                if (i) return;
                u == null && (u = n.width()), a = e * u, s = !0, C()
            };
        return n.bind("mousedown", k), n.bind("touchstart", k), $touchmove_elem = ENV.is_android ? n : $("body"), n.set_val = O, n.animate_to = M, n
    }, Sidebar = function() {
        var e = {}, t = $(e),
            n = $("#main"),
            r = n[0],
            i = $("#sidebar_grippy"),
            s = $("#sidebar"),
            o = 50,
            u = !1,
            a = 0,
            f = !1,
            l, c, h, p = function() {
                u ? i.css("height", $(window).height()) : i.css("height", $("#search_area").height())
            }, d = function(e) {
                t.trigger("started_closing_sidebar");
                var n = e ? 200 : 150;
                translate_transition(r, n + "ms ease-out"), translate(r, 0, 0), u = !1, p(), setTimeout(function() {
                    $("body").removeClass("sidebar_open").removeClass("sliding_main"), t.trigger("finished_closing_sidebar"), UIManager.start_wobble()
                }, n)
            }, v = function(e) {
                t.trigger("started_opening_sidebar"), $("body").addClass("sidebar_open");
                var n = e ? 200 : 250;
                translate_transition(r, n + "ms ease-out"), translate(r, $("body").width() - o, 0), u = !0, p(), setTimeout(function() {
                    t.trigger("finished_opening_sidebar"), $("body").removeClass("sliding_main")
                }, n)
            }, m = function(e) {
                t.trigger("started_hiding_sidebar");
                var n = e ? 200 : 150;
                translate_transition(r, n + "ms ease-out"), translate(r, $("body").width(), 0), setTimeout(function() {
                    t.trigger("finished_hiding_sidebar"), $("body").removeClass("sliding_main")
                }, n)
            }, g = function(t) {
                if (e.map_revealed) return;
                t.stopPropagation(), t.stopImmediatePropagation();
                var n = t.originalEvent.changedTouches[0].clientX - c;
                return l || (l = n), h = n < l ? -1 : 1, l = n, translate(r, Math.max(0, n), 0), !1
            }, y, b;
        i.bind("touchstart", function(e) {
            return e.stopPropagation(), e.stopImmediatePropagation(), y = e.originalEvent.touches[0].pageX, b = e.originalEvent.touches[0].pageY, f = !0, l = null, h = null, UIManager.overview_icons.pause(), UIManager.stop_wobble(), c = e.originalEvent.changedTouches[0].clientX, u && (c -= $("body").width() - o), translate_transition(r, null), $("body").bind("touchmove", g).addClass("sliding_main"), !1
        }), i.bind("touchend", function(t) {
            f = !1, $("body").unbind("touchmove", g);
            if (e.map_revealed) return E();
            h ? h < 0 ? d(!0) : v(!0) : u ? d(!1) : y > $("body").width() - 90 ? w() : $("#search_area .refresh").is(":visible") && $.touching({
                x: y,
                y: 20
            }, $("#search_area .refresh")).length ? $("#search_area .refresh").trigger("click") : v(!1)
        }), ENV.is_mobile && (s.bind("touchmove", function(e) {
            e.preventDefault()
        }), $("#forecast_form .clear").bind("click", function(e) {
            e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), $("#forecast_location_field").val("").focus()
        })), e.map_revealed = !1;
        var w = function() {
            t.trigger("reveal_map");
            var n = 350;
            $("#map_area").addClass("revealed"), $("#search_area").addClass("map"), translate_transition(r, n + "ms ease-out"), translate(r, 0, $(window).height() - $("#search_area").height()), e.map_revealed = !0, UIManager.overview_icons.pause(), UIManager.stop_wobble(), Map.load_animation()
        }, E = function() {
                t.trigger("hide_map");
                var n = 350;
                Map.stop_animation(), UIManager.start_wobble(), UIManager.overview_icons.play(), $("#search_area").removeClass("map"), translate_transition(r, n + "ms ease-out"), translate(r, 0, 0), e.map_revealed = !1, setTimeout(function() {
                    $("#map_area").removeClass("revealed")
                }, n + 10)
            };
        return e.close_sidebar = d, e.open_sidebar = v, e.hide_sidebar = m, e.is_open = function() {
            return u
        }, e
    }(),
    LocationManager = function() {
        var e = {}, t = $(e);
        e.forecasts = [], e.use_current_location = !1;
        var n, r, i;
        e.blank_load = function() {
            var e = store.enabled && store.get("last_location");
            if (e && e.lat != null && e.lon != null) return t.trigger("location_updated", e);
            LocationManager.update_current_location(!0)
        }, e.save_last_location = function(e) {
            if (!e.name || e.lat == null || e.lon == null) return;
            store.enabled && store.set("last_location", {
                name: e.name,
                lat: e.lat,
                lon: e.lon
            })
        }, e.ip_geolocate = function(e) {
            i = $.get("/ipgeo", function(t) {
                return t ? e(null, t) : e(new Error("Cannot IP geolocate"))
            })
        }, e.update_current_location = function(n) {
            if (!n) {
                e.use_current_location = !1, store.enabled && store.set("use_current_location", null);
                return
            }
            UIManager.page_loading(!window.mobile), i && i.abort();
            var r = function(n, r, i) {
                e.use_current_location = !0, store.enabled && store.set("use_current_location", !0), t.trigger("location_updated", {
                    lat: n,
                    lon: r,
                    name: i || "Current Location"
                })
            }, s = function() {
                    e.use_current_location = !1, console.log("An error occurred. Your location could not be determined")
                }, o = function() {
                    e.ip_geolocate(function(e, t) {
                        return e ? s() : r(t.latitude, t.longitude, t.name)
                    })
                }, u, a = !1;
            ENV.has_geolocation ? (a = !1, u = setTimeout(function() {
                a = !0, o()
            }, 5e3), setTimeout(function() {
                navigator.geolocation.getCurrentPosition(function(e) {
                    clearTimeout(u);
                    if (a) return;
                    e && e.coords ? r(e.coords.latitude, e.coords.longitude) : o()
                }, function() {
                    clearTimeout(u);
                    if (a) return;
                    e.ip_geolocate(function(e, t) {
                        return e ? s() : r(t.latitude, t.longitude, t.name)
                    })
                }, {
                    enableHighAccuracy: !0,
                    timeout: 4500
                })
            }, 0)) : o()
        }, e.get_saved_forecasts = function(t) {
            if (typeof t == "undefined") return e.forecasts;
            if (typeof t == "number") return e.forecasts[t]
        }, e.add_location = function(t, n) {
            if (e.use_current_location && !n) return e.loc_for_lat_long(Forecaster.latitude, Forecaster.longitude, !0, function(n) {
                return e.add_location(t, n.name)
            });
            n = n || Forecaster.location_str || (window.mobile ? $("#search_area .location_field").html() : $("#search_area .location_field").val()) || $("#forecast_location_field").val(), store.enabled && store.set("did_change_saved_forecasts", !0);
            var r = {
                name: n,
                lat: Forecaster.latitude,
                lon: Forecaster.longitude
            }, i = !1;
            for (var s = 0; s < e.forecasts.length; s++) {
                if (Math.abs(r.lat - e.forecasts[s].lat) > 1e-4) continue;
                if (Math.abs(r.lon - e.forecasts[s].lon) > 1e-4) continue;
                i = !0;
                break
            }
            if (i) return;
            e.forecasts.push(r), store.enabled && store.set("forecasts", e.forecasts), UIManager.build_saved_forecasts()
        }, e.remove_location = function(t) {
            e.forecasts.splice(t, 1), store.enabled && store.set("forecasts", e.forecasts), store.enabled && store.set("did_change_saved_forecasts", !0), UIManager.build_saved_forecasts(), e.forecasts.length == 0 && UIManager.exit_forecast_editing()
        };
        var s = function(e) {
            return e.replace(/(\b)([a-zA-Z])/g, function(e) {
                return e.toUpperCase()
            })
        };
        return e.loc_for_string = function(e, t) {
            t = t || $.noop, n && n.abort(), n = $.get("/geo?q=" + e, function(n) {
                if (!n || n == "null") return UIManager.page_error("location");
                var r;
                !isNaN(+e[0]) || (e.match(/,/g) || []).length > 1 ? r = s(e) : r = n.street ? n.street + ", " + n.name : n.name, Forecaster.location_str = n.name, t({
                    name: r,
                    city_state: n.name,
                    street: n.street,
                    lat: n.latitude,
                    lon: n.longitude
                })
            }).error(function() {
                UIManager.page_error("location")
            })
        }, e.loc_for_lat_long = function(e, n, i, s) {
            s = s || $.noop, r && r.abort(), r = $.get("/rgeo?lat=" + e + "&lon=" + n + (i ? "&hires" : ""), function(r) {
                if (!r) return;
                Forecaster.location_str = r.name;
                var i = r.street ? r.street + ", " + r.name : r.name,
                    o = {
                        name: i,
                        city_state: r.name,
                        street: r.street,
                        lat: e,
                        lon: n
                    };
                s(o), t.trigger("new_location_str", o)
            })
        }, e.highlight_if_saved = function(t, n) {
            for (var r = 0; r < e.forecasts.length; r++) {
                if (Math.abs(Forecaster.latitude - e.forecasts[r].lat) > .001) continue;
                if (Math.abs(Forecaster.longitude - e.forecasts[r].lon) > .001) continue;
                $("#location_list .saved_forecast.editable").eq(r).addClass("selected");
                break
            }
        }, e
    }(),
    Settings = function() {
        var e = {}, t = $(e);
        e.load_settings = function() {
            store.enabled ? (LocationManager.forecasts = store.get("forecasts"), (!LocationManager.forecasts || !LocationManager.forecasts.length) && n()) : (console.log("NO LOCALSTORAGE!"), n()), UIManager.build_saved_forecasts(), t.trigger("settings_loaded")
        };
        var n = function() {
            if (store.enabled && store.get("did_change_saved_forecasts")) return;
            LocationManager.forecasts = [{
                name: "New York, NY",
                lat: 40.7142,
                lon: -74.0064
            }, {
                name: "London, UK",
                lat: 51.5171,
                lon: -0.1062
            }, {
                name: "Sydney, Australia",
                lat: -33.8683,
                lon: 151.2086
            }]
        };
        return e
    }(),
    Forecaster = function() {
        var e = {}, t = $(e);
        e.latitude = null, e.longitude = null, e.time = null, e.timezone_offset = null, e.tz_offset_from_local = null, e.location_str = null;
        var n = function(t) {
            e.tz_offset_from_local = t.offset + (new Date(1e3 * t.currently.time)).getTimezoneOffset() / 60
        }, r, i = function(e) {
                return !e || !e.currently || !e.hourly || !e.hourly.data || !e.hourly.data.length ? !0 : !1
            };
        e.get_forecast = function(s, o, u, a) {
            if (!s) return;
            if (u) {
                var f = window.mobile ? !1 : e.latitude != null || e.longitude != null;
                UIManager.page_loading(o ? !0 : f), r && r.abort()
            }
            if (s.lat != null && s.lon != null && s.time != null) {
                var l = Math.round(s.lat * 200) / 200,
                    c = Math.round(s.lon * 200) / 200,
                    h = "/forecast?q=" + l + "," + c + "," + s.time + "&satellites";
                store.enabled && store.get("use_si") && (h += "&si"), r = $.get(h, function(r) {
                    u && (e.latitude = s.lat, e.longitude = s.lon, e.time = s.time, e.timezone_offset = r.offset, n(r), UIManager.page_loaded(u));
                    if (typeof a == "function") a(r);
                    else {
                        if (i(r)) return t.trigger("invalid_time_forecast", r);
                        t.trigger("time_forecast_loaded", r)
                    }
                })
            } else if (s.lat != null && s.lon != null) {
                var l = Math.round(s.lat * 200) / 200,
                    c = Math.round(s.lon * 200) / 200,
                    h = "/forecast?q=" + l + "," + c + "&satellites";
                store.enabled && store.get("use_si") && (h += "&si"), u == "forecast" && (h += "&raw"), r = $.get(h, function(r) {
                    u && (e.latitude = s.lat, e.longitude = s.lon, e.time = null, e.timezone_offset = r.offset, n(r), UIManager.page_loaded(u));
                    if (typeof a == "function") a(r);
                    else {
                        if (i(r)) return t.trigger("invalid_forecast", r);
                        t.trigger("forecast_loaded", r)
                    }
                })
            }
        };
        var s = function(e) {
            return e !== undefined ? Math.max(8, Math.min(75, (.005986595422 * e - 1.0127734) * e + 34.31493722)) : 10
        }, o = function(e, t) {
                var n = t ? -3 : -2.209389806;
                return 4 * (1 - Math.exp(n * Math.sqrt(e)))
            };
        return e.precip_intensity = function(e, t) {
            if (!e.precipIntensity) return 0;
            var n = e.precipIntensity,
                r = e.temperature;
            return UIManager.si_units() && (n /= 25.4, r = r * 1.8 + 32), e.precipType === "snow" && (n *= .4 * s(r)), o(n, t)
        }, e
    }();
(function(e) {
    var t = ["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"],
        n = {
            transform: ["transition", "transform"],
            WebkitTransform: ["WebkitTransition", "-webkit-transform"],
            msTransform: ["msTransition", "-ms-transform"],
            MozTransform: ["MozTransition", "-moz-transform"],
            OTransform: ["OTransition", "-o-transform"]
        }, r = e("body")[0],
        i = "transform",
        s = "transition";
    while (p = t.shift()) typeof r.style[p] != "undefined" && (i = p);
    s = n[i], window.translate = function(e, t, n) {
        e.style[i] = "translate3d(" + t + "px, " + n + "px, 0)"
    }, window.translate_transition = function(e, t) {
        e.style[s[0]] = t ? s[1] + " " + t : ""
    }
})(jQuery);
var UIManager = function() {
    function I(e, t) {
        return t.mean + t.amplitude * Math.cos(e * Math.PI / 43200 + t.phase)
    }

    function q(e, t, n) {
        var r = [],
            i = (new Date).getTime() / 1e3,
            s = i + n * 3600,
            o = "0,0,0",
            u, a = {
                precipIntensity: 0,
                precipIntensity_si: 0
            }, f = {
                temperature: 20,
                temperature_si: 36,
                precipIntensity: .075,
                precipIntensity_si: 1.905
            };
        t == "temperature" && (u = m.flags.bias || {});
        for (var l = 0; l < m.sources.length; l++) {
            if (!m.sources[l].hourly) continue;
            var c = DataPoints.infillHourly(m.sources[l].hourly.data),
                h = m.sources[l].flags.sources[0],
                p, d = {
                    name: h,
                    data: [],
                    color: "rgba(" + o + ", 0.3)",
                    marker: {
                        enabled: !1,
                        symbol: "none"
                    },
                    lineWidth: 3,
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    },
                    animation: !1
                };
            for (var v = 0; v < c.length; v++) {
                if (c[v][t] == null || c[v + 2] && c[v + 2].time < i) continue;
                if (c[v - 2] && c[v - 2].time > s) break;
                p = c[v][t], u && (p += u[h] ? I(c[v].time, u[h]) : 0), p < 0 && t == "precipIntensity" && (p = 0), d.data.push([1e3 * c[v].time, p])
            }
            r.push(d)
        }
        var d = {
            name: "Forecast",
            data: [],
            color: "rgba(" + o + ", 1.0)",
            marker: {
                enabled: !1,
                symbol: "none"
            },
            lineWidth: 6,
            states: {
                hover: {
                    lineWidth: 6
                }
            },
            animation: !1
        }, c = DataPoints.infillHourly(m.hourly.data);
        for (var v = 0; v < c.length; v++) {
            if (c[v][t] == null || c[v + 2] && c[v + 2].time < i) continue;
            if (c[v - 2] && c[v - 2].time > s) break;
            p = c[v][t], p < 0 && t == "precipIntensity" && (p = 0), d.data.push([1e3 * c[v].time, p])
        }
        r.push(d);
        var g = new Highcharts.Chart({
            chart: {
                renderTo: e,
                type: "spline",
                backgroundColor: "transparent"
            },
            credits: {
                enabled: !1
            },
            title: null,
            subtitle: null,
            xAxis: {
                type: "datetime",
                min: (new Date).getTime(),
                max: (new Date).getTime() + n * 36e5,
                labels: {
                    style: {
                        color: "#111",
                        font: '14px "AvenirNextCondensed-DemiBold", "AvenirNextLTW01-DemiCn", "Arial Narrow", Verdana, sans-serif',
                        fontWeight: "bold"
                    },
                    formatter: function() {
                        return n == 1 ? moment(this.value).add("hours", Forecaster.tz_offset_from_local).format("h:mm") : n == 24 ? moment(this.value).add("hours", Forecaster.tz_offset_from_local).format("ha") : moment(this.value).add("hours", Forecaster.tz_offset_from_local).format("ddd ha")
                    }
                }
            },
            yAxis: {
                title: null,
                startOnTick: !1,
                endOnTick: !1,
                min: a[t] == null ? null : G ? a[t + "_si"] : a[t],
                minRange: (G ? f[t + "_si"] : f[t]) || null,
                labels: {
                    style: {
                        color: "#111",
                        font: n == 1 ? '14px "AvenirNextCondensed-DemiBold", "AvenirNextLTW01-DemiCn", "Arial Narrow", Verdana, sans-serif' : '16px "AvenirNextCondensed-DemiBold", "AvenirNextLTW01-DemiCn", "Arial Narrow", Verdana, sans-serif',
                        fontWeight: "bold"
                    },
                    useHTML: !0,
                    formatter: function() {
                        return F(t, this.value)
                    }
                },
                tickPixelInterval: n == 1 ? 30 : 40
            },
            tooltip: {
                enabled: !1
            },
            legend: {
                enabled: !1
            },
            series: r
        })
    }
    var e = {}, t = $(e),
        n = $("#outlook"),
        r = $("#forecast .next_hour > .inner"),
        i = $("#forecast .next_24_hours"),
        s = $("#forecast .next_7_days"),
        o = $("#forecast .overview_container"),
        u = $("#forecast .pull_to_refresh_background"),
        a = $("#forecast .pull_to_refresh_indicator"),
        f = [148, 147, 147, 146, 144, 142, 140, 139, 138, 138, 139, 142, 145, 148, 151, 153, 155, 155, 154, 152, 149, 146, 143, 141, 140, 139, 139, 141, 143, 147, 150, 152, 154, 155, 155, 154, 152, 150, 149, 147, 146, 146, 147, 148, 149, 151, 151, 152, 151, 150, 149, 148, 147, 146, 145, 143, 142, 140, 139, 139, 139, 138, 138, 138, 137, 138, 139, 141, 144, 147, 150, 152, 154, 156, 158, 159, 161, 162, 162, 161, 159, 157, 154, 152, 151, 149, 148, 147, 145, 144, 143, 144, 146, 150, 154, 157, 160, 161, 160, 159, 158, 157, 157, 157, 157, 157, 157, 156, 155, 154, 154, 155, 156, 159, 161, 162, 163, 162, 160, 157, 154, 151, 149, 148, 148, 148, 149, 150, 150, 150, 149, 147, 145, 143, 141, 139, 138, 137, 136, 136, 135, 135, 135, 134, 134, 133, 132, 132, 132, 133, 135, 137, 139, 142, 144, 147, 150, 154, 156, 157, 157, 155, 151, 146, 140, 135, 131, 128, 126, 124, 122, 122, 123, 125, 128, 130, 131, 132, 131, 130, 129, 129, 130, 131, 132, 133, 133, 132, 129, 126, 124, 122, 122, 123, 126, 129, 134, 138, 141, 143, 144, 144, 143, 143, 145, 147, 150, 154, 157, 159, 160, 161, 162, 162, 161, 161, 159, 157, 155, 152, 148, 145, 141, 137, 134, 132, 130, 129, 130, 131, 133, 137, 140, 144, 148, 152, 155, 157, 158, 158, 158, 158, 158, 160, 161, 162, 163, 163, 161, 159, 157, 154, 152, 150, 149, 148],
        l = f.length,
        c = $("#splash_screen"),
        h = $("#loading_screen"),
        p = $("#location_strip"),
        d = Handlebars.compile($("#day_template").html()),
        v = Handlebars.compile($("#saved_forecast_template").html()),
        m;
    e.overview_icons = new Skycons({
        color: "#222",
        resizeClear: ENV.is_android
    }), e.outlook_icons = new Skycons({
        color: "#444",
        resizeClear: ENV.is_android
    }), window.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
            window.setTimeout(e, 11)
        }
    }();
    var g = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }, y = function() {
            $("#search_area .buttons .time_machine_modal .datepicker input").pickadate({
                format: "mmm d, yyyy",
                dateMin: [1945, 1, 1],
                dateMax: 730,
                yearSelector: 70,
                onSelect: function() {
                    $("#search_area .buttons .time_machine_modal .time_field").val(this.getDate())
                }
            })
        }, b = null;
    e.toggle_time_machine_modal = function(e) {
        e == null && (e = !$("#search_area .buttons").hasClass("modal_revealed")), clearTimeout(b), e ? ($("#search_area .buttons .time_machine_modal").css("display", "block"), b = setTimeout(function() {
            $("#search_area .buttons").addClass("modal_revealed")
        }, 0), $("#search_area .buttons .time_machine_modal .time_field").focus().select()) : ($("#search_area .buttons").removeClass("modal_revealed"), $("#search_area .buttons .time_machine_modal .time_field").blur(), b = setTimeout(function() {
            $("#search_area .buttons .time_machine_modal").css("display", "none")
        }, 200)), $("#search_area .buttons .time_machine_modal .error").hide()
    };
    var w = null,
        E = function() {
            $("#loading").addClass("revealed"), Loader.start()
        }, S = function() {
            clearTimeout(w), $("#loading").removeClass("revealed"), Loader.stop()
        };
    e.page_loaded = function(t) {
        $("#location_list .saved_forecast").removeClass("selected"), LocationManager.highlight_if_saved(), t == "forecast" ? ($("#time_machine").hide(), $("#location_stats").hide(), $("#forecast").show(), ENV.is_iphone && $("#loading").hasClass("revealed") && setTimeout(jt, 750)) : t == "time_machine" ? ($("#forecast").hide(), $("#location_stats").hide(), $("#time_machine").show()) : t == "location_stats" && ($("#forecast").hide(), $("#time_machine").hide(), $("#location_stats").show()), t != "forecast" && (e.overview_icons.pause(), e.outlook_icons.pause()), $("body").removeClass("loading"), S()
    }, e.page_loading = function(e) {
        $("body").addClass("loading"), clearTimeout(tt);
        var t = function() {
            $(".page").hide(), E()
        };
        e ? (clearTimeout(w), window.mobile || (w = setTimeout(t, 3e3))) : t()
    }, e.first_hour_precip = function(e) {
        if (e && e.minutely)
            for (var t = 0; t < e.minutely.data.length - 1; t++)
                if (X(e.minutely.data[t]) > 0) return !0;
        return !1
    };
    var x = function(e) {
        var t = Math.round(7 * e / 360);
        return ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][t]
    }, T = function(e, t) {
            var n = $("#outlook .panel").eq(e),
                r = window.mobile ? at.find(".timeline") : n.find(".timeline"),
                i = n.find(".text");
            (new Timeline(r, {
                width: 852,
                label_width: 100,
                hour_spacing: 3
            })).load(t);
            var s = n.find("table thead tr"),
                o = n.find("table tbody tr");
            s.empty(), o.empty();
            var u = t.daily.data[0] || {}, a = "";
            if (!window.mobile) {
                var f = [];
                if (u.temperatureMin != null) {
                    var l = Math.round(u.temperatureMin) + "&deg;";
                    u.temperatureMinTime != null && (l += " at " + moment(1e3 * u.temperatureMinTime).add("hours", Forecaster.tz_offset_from_local).format("h A")), f.push('<span class="title">Low</span><span class="val">' + l + "</span>")
                }
                if (u.temperatureMax != null) {
                    var l = Math.round(u.temperatureMax) + "&deg;";
                    u.temperatureMaxTime != null && (l += " at " + moment(1e3 * u.temperatureMaxTime).add("hours", Forecaster.tz_offset_from_local).format("h A")), f.push('<span class="title">High</span><span class="val">' + l + "</span>")
                }
                u.temperatureMaxTime && u.temperatureMinTime && u.temperatureMaxTime < u.temperatureMinTime && f.reverse(), a += f.join("")
            }
            if (u.time) {
                var c = u.sunriseTime,
                    h = u.sunsetTime;
                if (c && h) {
                    var p = moment(1e3 * c).add("hours", Forecaster.tz_offset_from_local).format("h:mm A"),
                        d = moment(1e3 * h).add("hours", Forecaster.tz_offset_from_local).format("h:mm A");
                    a += '<span class="title">Sunrise</span><span class="val">' + p + "</span>", a += '<span class="title">Sunset</span><span class="val">' + d + "</span>"
                }
            }
            i.html(a).show(), window.mobile || $('<a href="javascript:;" class="more"><span class="pictos">Y</span> Details</a>').bind("click", function() {
                Router.set_latlon_hash("f", t.latitude, t.longitude, null, t.currently.time)
            }).appendTo(i), window.mobile && (u.summary && n.find(".details .text_summary").html(u.summary), setTimeout(function() {
                if (C == null) return;
                at.css("top", n.find(".details .text").offset().top + 30).show().addClass("revealed"), at.find(".scroll").scrollLeft(1)
            }, 300)), n.find(".loading").hide(), n.find(".details").show()
        }, N = function(e, t, n, r) {
            Forecaster.get_forecast({
                lat: n,
                lon: r,
                time: t
            }, null, null, function(t) {
                T(e, t)
            })
        }, C = null,
        k, L = 190,
        A = function(t, n, r) {
            return C == t ? e.hide_day_panel() : (C != null && e.hide_day_panel(!0), C = t, window.mobile ? _(t, n, r) : ENV.is_tablet ? M(t, n, r) : O(t, n, r), N(t, n, r.latitude, r.longitude))
        }, O = function(e, t, n) {
            var r = $("#outlook .panel").eq(e);
            r.addClass("revealed"), k = r.data("closed_height"), k || (k = r.height(), r.data("closed_height", k)), r.stop(!0).animate({
                height: 265
            }, 200, function() {
                setTimeout(D, 100)
            }), r.find(".loading").stop(!0).fadeIn()
        }, M = function(e, t, r) {
            var i = $("#outlook .panel"),
                s = $("#outlook .panel").eq(e),
                o = 200;
            for (var u = 0; u <= e; u++) translate(i[u], 0, 0);
            for (var u = e + 1; u < i.length; u++) translate(i[u], 0, o);
            s.find(".loading").stop(!0).fadeIn(), $("#outlook .panel").eq(e + 1).addClass("top_border"), setTimeout(function() {
                s.addClass("revealed"), setTimeout(D, 100)
            }, 150), n.css("height", n.height() + o)
        }, _ = function(e, t, n) {
            var r = $("#outlook .panel"),
                i = $("#outlook .panel").eq(e),
                s = i.height(),
                o = e * s,
                u = Math.min(wt - L - s, Math.max(0, o - L / 2)),
                a = u - o,
                f = u + s + L - (e + 1) * s;
            for (var l = 0; l <= e; l++) translate(r[l], 0, a);
            for (var l = e + 1; l < r.length; l++) translate(r[l], 0, f);
            i.addClass("revealed revealing"), i.find(".loading").stop(!0).fadeIn(), setTimeout(function() {
                at.find(".scroll").scrollLeft(1), i.removeClass("revealing")
            }, 300)
        }, D = function() {
            return;
            var e, t, n, r, i
        };
    e.hide_day_panel = function(e) {
        if (C == null) return;
        window.mobile ? B(e) : ENV.is_tablet ? H(e) : P(e), C = null, n.css("height", "")
    };
    var P = function(e) {
        var t = $("#outlook .panel").eq(C);
        t.removeClass("revealed"), t.stop(!0).animate({
            height: k
        }, 200, function() {
            t.find(".details").hide()
        })
    }, H = function(e) {
            var t = $("#outlook .panel"),
                n = t.eq(C);
            n.removeClass("revealed"), n.find(".details").hide(), t.removeClass("top_border");
            for (var r = 0; r < t.length; r++) translate(t[r], 0, 0)
        }, B = function(e) {
            var t = $("#outlook .panel"),
                n = t.eq(C);
            at.removeClass("revealed").css("top", -999), setTimeout(function() {
                at.hide()
            }, 250), n.removeClass("revealed"), n.find(".details").hide();
            if (!e)
                for (var r = 0; r < t.length; r++) translate(t[r], 0, 0)
        };
    e.build_outlook = function(t) {
        if (!m || !m.daily) return;
        var r = m.daily.data,
            i = window.mobile ? n.find(".days") : n,
            s = t ? 0 : 50,
            o = window.mobile ? (wt - s) / 7 : wt / 7;
        i.empty();
        var u = [],
            a = Infinity,
            f = -Infinity;
        for (var l = 0; l < 7; l++)(function(t) {
            var n = r[t];
            if (!n) return;
            var s = moment.unix(n.time + 43200).add("hours", Forecaster.tz_offset_from_local),
                l = {
                    date: s.format("YYYY-MM-DD"),
                    name: t === 0 ? "Today" : s.format("ddd")
                };
            n.summary && (l.summary = n.summary), n.icon && (l.conditions = n.icon), n.temperatureMin && n.temperatureMinTime && (l.temperature_min = Math.round(parseFloat(n.temperatureMin)), l.temperature_min_time = parseInt(n.temperatureMinTime, 10), a = Math.min(a, l.temperature_min)), n.temperatureMax && n.temperatureMaxTime && (l.temperature_max = Math.round(parseFloat(n.temperatureMax)), l.temperature_max_time = parseInt(n.temperatureMaxTime, 10), f = Math.max(f, l.temperature_max)), u.push(l);
            var c = $(d(l));
            c.find(".top").bind("click", function() {
                A(t, n.time, m)
            });
            var h = $('<canvas id="day_icon' + t + '" style="width:36px; height:36px"></canvas>');
            ENV.is_retina ? h.attr("width", 72).attr("height", 72) : h.attr("width", 36).attr("height", 36), h.appendTo(c.find(".day_icon")), setTimeout(function() {
                e.outlook_icons.remove("day_icon" + t), e.outlook_icons.set("day_icon" + t, e.skycon_type(n.icon))
            }, 0), window.mobile && c.css("height", o), i.append(c)
        })(l);
        window.mobile && !t && et(!0), window.mobile || e.outlook_icons.play();
        var c = i.children(".day"),
            h = f - a;
        h < 4 && (h = 4), c.each(function(e, t) {
            var n = $(t).find(".ranger"),
                i = r[e];
            if (i) {
                var s = (i.temperatureMin - a) / h * 100,
                    o = (i.temperatureMax - a) / h * 100;
                n.css({
                    left: s + "%",
                    right: 100 - o + "%"
                }), window.mobile && n.css("top", wt / 14 - 10)
            }
        })
    };
    var j = ["rain", "snow", "sleet", "hail", "wind", "fog", "cloudy", "partly-cloudy-day", "partly-cloudy-night", "clear-day", "clear-night"];
    e.skycon_type = function(e) {
        return e === "rain" ? Skycons.RAIN : e === "snow" ? Skycons.SNOW : e === "sleet" ? Skycons.SLEET : e === "hail" ? Skycons.SLEET : e === "wind" ? Skycons.WIND : e === "fog" ? Skycons.FOG : e === "cloudy" ? Skycons.CLOUDY : e === "partly-cloudy-day" ? Skycons.PARTLY_CLOUDY_DAY : e === "partly-cloudy-night" ? Skycons.PARTLY_CLOUDY_NIGHT : e === "clear-day" ? Skycons.CLEAR_DAY : e === "clear-night" ? Skycons.CLEAR_NIGHT : Skycons.CLOUDY
    }, e.build_overview = function() {
        if (!m || !m.hourly || !m.hourly.data[0]) {
            o.hide();
            return
        }
        var t = e.first_hour_precip(m),
            n = (new Date).getTime() / 1e3;
        t ? o.removeClass("clear").addClass("precip") : o.removeClass("precip").addClass("clear");
        var r, i = m.currently,
            s = m.hourly && m.hourly.data,
            u = m.daily && m.daily.data && m.daily.data[0],
            a = m.minutely ? m.minutely.summary : m.hourly.data[0].summary,
            f = 0,
            l = 0;
        if (s)
            for (var c = 0; c < s.length; c++) {
                if (s[c].time < n) continue;
                f = s[c].temperature - i.temperature, l = s[c].pressure - i.pressure, Math.abs(f) < .5 && (f = 0), Math.abs(l) < .0175 && (l = 0);
                break
            }
        var h = i.apparentTemperature == null ? i.temperature : i.apparentTemperature,
            p = i.summary + " · Feels&nbsp;like&nbsp;" + Math.round(h) + "&deg;";
        o.find(".temp").html("<span>" + Math.round(i.temperature) + "&deg;</span>"), o.find(".currently .desc").html(p), o.find(".next_hour .desc").html(a || "N/A"), o.find(".next_24_hours .desc").html(m.hourly.summary), o.find(".next_7_days .desc").html(m.daily.summary), o.find("section.currently .current_container").removeClass("show_more"), window.mobile && Ft(), f == 0 && l == 0 ? r = "Temp and pressure are steady." : (f == 0 ? r = "Temp is steady. " : f < 0 ? r = "Temp is falling. " : r = "Temp is rising. ", l == 0 ? r += "Pressure is steady." : l < 0 ? r += "Pressure is falling." : r += "Pressure is rising."), o.find(".currently .temps .dir").html(r), !u || u.temperatureMin == null || u.temperatureMax == null ? r = "" : (r = 'Low, <span class="m">' + Math.round(u.temperatureMin) + '&deg;</span> at <span class="m">' + moment(1e3 * u.temperatureMinTime).add("hours", Forecaster.tz_offset_from_local).format("hA") + "</span>,<br/>", r += 'High, <span class="m">' + Math.round(u.temperatureMax) + '&deg;</span> at <span class="m">' + moment(1e3 * u.temperatureMaxTime).add("hours", Forecaster.tz_offset_from_local).format("hA") + "</span>."), o.find(".currently .temps .high_low").html(r);
        if (i.windSpeed == null) r = "&#8212;";
        else {
            r = Math.round(i.windSpeed) + " " + e.speed_units();
            if (i.windBearing != null) {
                var d = "frame_" + Math.round(7 * i.windBearing / 360);
                r += '<div class="windicator ' + d + '"" title="' + Math.round(i.windSpeed) + " " + e.speed_units() + " winds from the " + x(i.windBearing) + '" />'
            }
        }
        o.find(".currently .wind .val").html(r), i.humidity == null ? r = "&#8212;" : r = Math.round(100 * i.humidity) + "%", o.find(".currently .humidity .val").html(r), i.dewPoint == null ? r = "&#8212;" : r = Math.round(i.dewPoint), o.find(".currently .dewpoint .val").html(r), i.visibility == null ? r = "&#8212;" : r = Math.round(i.visibility) + (G ? " km" : " mi"), o.find(".currently .visibility .val").html(r), i.pressure == null ? r = "&#8212;" : r = Math.round(i.pressure) + " mb", o.find(".currently .pressure .val").html(r), o.removeClass(j.join(" ")), j.indexOf(i.icon) !== -1 && o.addClass(i.icon), e.overview_icons.set("icon_current", e.skycon_type(i.icon)), e.overview_icons.play(), o.show().css("visibility", "visible"), window.mobile && (o.find(".timeline").addClass("hide_now"), (new Timeline(o.find(".timeline"), {
            width: 850,
            label_width: 100,
            hour_spacing: 3
        })).load(m), Dt(1e3), setTimeout(At, 0))
    };
    var F = function(e, t) {
        var n = "";
        return e == "temperature" ? n = "<span>&deg;</span>" : e == "precipIntensity" && (n = ' <span style="font-size:12px">' + (G ? "mm/hr" : "in/hr") + "</span>"), "" + t + n
    };
    e.build_lines = function() {
        q("precip_lines", "precipIntensity", 24), q("temp_lines", "temperature", 24)
    }, e.build_world_maps = function() {
        var e = [{
            label: "north_america",
            sat: [38, -97, 0, -10, .8],
            bb: [23, 51, -130, -63]
        }, {
            label: "uk",
            sat: [54, -5, 0, -20, .25],
            bb: [49, 59.7, -12, 3]
        }, {
            label: "europe",
            sat: [48, 12, 0, -20, .75]
        }, {
            label: "middle_east",
            sat: [28, 55, 0, -20, 1.2]
        }, {
            label: "africa",
            sat: [0, 20, 0, 0, 1.65]
        }, {
            label: "asia",
            sat: [32, 110, 0, 0, 1.2]
        }, {
            label: "australia",
            sat: [-29, 134, 0, -20, .9]
        }, {
            label: "south_america",
            sat: [-17, -65, 0, 0, 1.5]
        }],
            t = m.latitude,
            n = m.longitude,
            r;
        for (var i = 0; i < e.length; i++) {
            var s = e[i].bb;
            if (!s) continue;
            if (t >= s[0] && t <= s[1] && n >= s[2] && n <= s[3]) {
                r = e[i];
                break
            }
        }
        r || (e.sort(function(e, r) {
            return Math.pow(e.sat[0] - t, 2) + Math.pow(e.sat[1] - n, 2) - (Math.pow(r.sat[0] - t, 2) + Math.pow(r.sat[1] - n, 2))
        }), r = e[0]);
        var o = "?latitude=" + r.sat[0] + "&longitude=" + r.sat[1] + "&theta=" + r.sat[2] + "&phi=" + r.sat[3] + "&zoom=" + r.sat[4] + "&width=" + $("#weather_maps .temperature img").width() + "&height=" + $("#weather_maps .temperature img").height();
        $("#weather_maps .temperature img").attr("src", "/atlas/temperature.png" + o + "&weather_label=1&label_scale=1.15&label_count=18&label_stroke_col=FFFFFFCC&hide_units=1");
        var o = "?latitude=" + r.sat[0] + "&longitude=" + r.sat[1] + "&theta=" + r.sat[2] + "&phi=" + r.sat[3] + "&zoom=" + r.sat[4] + "&width=" + $("#weather_maps .precipitation img").width() + "&height=" + $("#weather_maps .precipitation img").height();
        r.label == "uk" ? o += "&weather_layer=local" : r.label == "europe" && (o += "&weather_layer=global"), $("#weather_maps .precipitation img").attr("src", "/atlas/precipitation.png" + o), $("#weather_maps .temperature").attr("href", "/atlas#temperature-" + r.label), $("#weather_maps .precipitation").attr("href", "/atlas#precipitation-" + r.label)
    };
    var R = function(e, t) {
        var n = (e + t) * l | 0,
            r = (e - t) * l | 0;
        return f[(n + l) % l] - f[(r + l) % l]
    }, U = function(e) {
            return e !== undefined ? Math.max(8, Math.min(75, (.005986595422 * e - 1.0127734) * e + 34.31493722)) : 10
        }, z = function(e) {
            return (1 - Math.cos(e * Math.PI)) * .5
        }, W = function(e) {
            return 4 * (1 - Math.exp(-2.209389806 * Math.sqrt(e)))
        }, X = function(e) {
            var t = e.precipIntensity || 0;
            return G && (t /= 25.4), t *= z(e.precipProbability || 0), t < .0019 ? 0 : (e.precipType === "snow" && (t *= .5 * U(e.temperature)), t)
        };
    e.start_wobble = e.stop_wobble = function() {}, e.display_wobble = function() {
        function E() {
            if (!w) return;
            requestAnimFrame(E), S()
        }

        function S() {
            y.clearRect(0, 0, v, g), y.beginPath(), y.fillStyle = "rgba(0, 20, 50, 0.1)", y.strokeStyle = "rgba(0, 10, 20, 0.5)";
            var e, t = 1e-4 * (Date.now() - p);
            t >= 1 && (p = Date.now());
            for (var n = b.length; n--;) e = b[n].intensity + R(n / b.length, t) * b[n].error, y.lineTo(n * v / (b.length - 1), g * (1 - e));
            y.lineTo(-10, g), y.lineTo(v, g), y.fill(), y.stroke()
        }
        if (!m) return;
        $("#wobble_container").remove();
        var t = e.first_hour_precip(m);
        if (!t) return;
        var n, i = 80;
        window.mobile ? n = bt - 3 : ENV.is_tablet ? n = 255 : n = 275;
        var s = 1;
        ENV.is_retina && (s = 2);
        var u = $("<div />").attr({
            id: "wobble_container"
        }).css({
            width: n + "px"
        }),
            a = $("<canvas />").attr({
                id: "wobble_canvas",
                width: n * s,
                height: i * s
            }).css({
                width: n + "px",
                height: i + "px"
            }).appendTo(u),
            f = $("<div />").addClass("labels"),
            l;
        for (var c = 0; c < 6; c++) l = $("<span />").addClass("label"), c == 5 && l.addClass("last"), c % 2 == 0 && $("<span />").addClass("text").html(10 * (c + 1) + " min").appendTo(l), l.appendTo(f);
        f.prependTo(u);
        var h = $("<div />").addClass("intensity_labels");
        $("<div><span>heavy</span></div>").addClass("heavy").appendTo(h), $("<div><span>med</span></div>").addClass("med").appendTo(h), $("<div><span>light</span></div>").addClass("light").appendTo(h), h.appendTo(u), window.mobile ? u.prependTo(o.find(".timeline_scroll .scroll")) : u.appendTo(r);
        var p = Date.now(),
            d = a,
            v = d.attr("width"),
            g = d.attr("height"),
            y = d[0].getContext("2d"),
            b = [],
            w = !1;
        e.start_wobble = function() {
            if (w) return;
            w = !0, E()
        }, e.stop_wobble = function() {
            w = !1
        };
        var x = m.minutely.data;
        for (var c = 0; c < x.length; c++) {
            var T = X(x[c]);
            T = W(T), T <= 1 ? T *= .15 : T <= 2 ? T = .15 + (T - 1) * (.33 - .15) : T <= 3 ? T = .33 + (T - 2) * .34 : T = .67 + (T - 3) * (1 - .67), b.push({
                intensity: T,
                error: x[c].precipIntensity ? .0025 * Math.min(10, x[c].precipIntensityError / x[c].precipIntensity) : 0
            })
        }
        e.start_wobble()
    }, e.display_alert = function() {
        if (!m) return;
        var e = $("#alerts"),
            t = e.find(".inner");
        t.empty(), e.hide(), o.removeClass("alerts");
        if (!m.alerts || m.alerts.length == 0) return;
        var n, r = m.alerts,
            i = 0;
        for (var s = 0; s < r.length; s++) {
            if (r[s].title.match(/Special Weather Statement/i) || r[s].title.match(/Advisory/i) || r[s].title.match(/Statement/i)) continue;
            i++, r[s].uri ? n = $('<a href="' + r[s].uri + '" target="_blank" class="alert"><span class="pictos">!</span>' + r[s].title + "</a>") : n = $('<span class="alert"><span class="pictos">!</span>' + r[s].title + "</span>"), n.click(function() {
                if (ENV.is_iphone && ENV.is_homescreen) return confirm("This will take you to Safari. Press cancel to stay in Forecast.")
            }), i == 1 && n.addClass("visible"), n.appendTo(t)
        }
        if (i == 0) return;
        i > 1 ? e.addClass("paginate").find(".pagination .num").html("1 of " + i) : e.removeClass("paginate"), o.addClass("alerts"), e.show(), window.mobile && Ft()
    }, e.next_alert = function() {
        var e = $("#alerts .alert"),
            t = 0;
        for (var n = 0; n < e.length; n++)
            if (e.eq(n).hasClass("visible")) {
                t = n;
                break
            }
        t++, t >= e.length && (t = 0), e.removeClass("visible"), e.eq(t).addClass("visible"), $("#alerts .pagination .num").html(t + 1 + " of " + e.length)
    }, e.build_saved_forecasts = function() {
        var e = LocationManager.forecasts,
            t = $("#location_list");
        t.empty();
        if (!e || !e.length) {
            $("#edit_locations_button").addClass("disabled");
            return
        }
        $("#edit_locations_button").removeClass("disabled");
        var n = function(e) {
            LocationManager.update_current_location(!1), Router.set_latlon_hash("f", e.lat, e.lon, e.name), window.mobile && Sidebar.close_sidebar()
        };
        $.each(e, function(e, r) {
            var i = $(v(r));
            i.bind("click", function() {
                $("#saved_forecasts").hasClass("editing") || n(r)
            }), i.find(".delete_button").click(function() {
                if (window.mobile) {
                    var t = $(this).parents(".saved_forecast.editable").first();
                    $("#location_list .editable.deleting").not(t).removeClass("deleting"), t.toggleClass("deleting")
                } else LocationManager.remove_location(e)
            }), i.find(".delete_confirm_button").click(function() {
                LocationManager.remove_location(e)
            }), i.appendTo(t)
        }), LocationManager.highlight_if_saved(Forecaster.latitude, Forecaster.longitude)
    }, e.toggle_forecast_editing = function() {
        window.mobile ? $("#location_list .editable").length ? ($("#location_list .editable.deleting").removeClass("deleting"), $("#saved_forecasts").toggleClass("editing")) : e.exit_forecast_editing() : p.hasClass("editing") ? (p.removeClass("editing"), $("#edit_locations_button span").text("Edit")) : (p.addClass("editing"), $("#edit_locations_button span").text("Done"))
    }, e.exit_forecast_editing = function() {
        window.mobile ? ($("#location_list .editable.deleting").removeClass("deleting"), $("#saved_forecasts").removeClass("editing")) : p.removeClass("editing")
    }, e.build_time_machine = function(t) {
        var n = new Date,
            r = Math.round(n / 1e3),
            i = moment(1e3 * t.currently.time).startOf("day").unix() > moment(n.getTime()).startOf("day").unix(),
            s = t.currently.time - r > 604800,
            o = t.daily.data[0];
        s ? $("#time_machine").addClass("far_future") : $("#time_machine").removeClass("far_future"), (new Timeline($("#time_machine .timeline"), {
            width: 850,
            label_width: 100,
            hour_spacing: 3
        })).load(t);
        var u = $("#time_machine .slider_details thead tr"),
            a = $("#time_machine .slider_details tbody tr").eq(0),
            f = $("#time_machine .slider_details tbody tr").eq(1),
            l = $("#time_machine .slider_details .summary"),
            c = null,
            h = function(n) {
                var r = o.time + n * 86400,
                    i = Math.floor(n * 24),
                    h = t.hourly.data[i];
                if (i == c || !h) return;
                c = i, s || l.html(h.summary), u.empty(), a.empty(), f.empty();
                var p = h.temperature != null ? Math.round(h.temperature) + "&deg;" : "&mdash;";
                $("<td>Temp</td>").appendTo(u), $("<td></td>").html(p).appendTo(a), s && $("<td></td>").html(h.temperatureError ? "&plusmn;" + Math.round(h.temperatureError) + "&deg;" : "").appendTo(f);
                var d = h.windSpeed != null ? Math.round(h.windSpeed) + " " + e.speed_units() : "&mdash;";
                h.windBearing != null && (d += " (" + x(h.windBearing) + ")"), $("<td>Wind</td>").appendTo(u), $("<td></td>").html(d).appendTo(a), s && $("<td></td>").html(h.windSpeedError ? "&plusmn;" + Math.round(h.windSpeedError) + " " + e.speed_units() : "").appendTo(f), $("<td>Humidity</td>").appendTo(u), $("<td></td>").html(h.humidity != null ? Math.round(100 * h.humidity) + "%" : "&mdash;").appendTo(a), s && $("<td></td>").html(h.humidityError ? "&plusmn;" + Math.round(100 * h.humidityError) + "%" : "").appendTo(f), $("<td>Visibility</td>").appendTo(u), $("<td></td>").html(h.visibility != null ? Math.round(h.visibility) + (G ? " km" : " mi") : "&mdash;").appendTo(a), s && $("<td></td>").html(h.visibilityError ? "&plusmn;" + Math.round(h.visibilityError) + (G ? " km" : " mi") : "").appendTo(f), $("<td>Pressure</td>").appendTo(u), $("<td></td>").html(h.pressure != null ? Math.round(h.pressure) + " mb" : "&mdash;").appendTo(a), s && $("<td></td>").html(h.pressureError ? "&plusmn;" + Math.round(h.pressureError) + " mb" : "").appendTo(f)
            };
        $("#time_machine .slider").slider({
            min: 0,
            max: 1e3,
            value: 500,
            animate: "fast",
            slide: h
        });
        var p = new Slider($("#time_machine .slider"), {
            change: h,
            max_speed: 999,
            snap_distance: 999
        });
        h(0), setTimeout(function() {
            p.animate_to(.5)
        }, 250);
        var d = $("#time_machine .day_time").empty(),
            v = moment(1e3 * t.currently.time).add("hours", Forecaster.tz_offset_from_local).format("dddd, MMMM D, YYYY");
        $("<span>[</span>").addClass("pictos prev").appendTo(d).click(V), $("<span></span>").addClass("val").html(v).appendTo(d), $("<span>]</span>").addClass("pictos next").appendTo(d).click(J);
        var m = "";
        if (s) {
            if (o.precipProbability) {
                var g = Math.round(100 * o.precipProbability),
                    y = "precipitation";
                o.temperatureMax != null && o.temperatureMin != null && (o.temperatureMin > (G ? 4.444 : 40) ? y = "rain" : o.temperatureMax < (G ? 0 : 32) ? y = "snow" : y = "precipitation (rain or snow)"), m = "On this day there is a " + g + "% chance of " + y
            }
        } else m = o.summary.replace(/\.$/, "");
        o.temperatureMin && o.temperatureMax && (m ? m += ", with a high temperature of " : m += "High temperature of ", m += Math.round(o.temperatureMax) + "&deg; around " + moment(1e3 * o.temperatureMaxTime).add("hours", Forecaster.tz_offset_from_local).format("h[&nbsp;]A") + ", and a low of " + Math.round(o.temperatureMin) + "&deg; around " + moment(1e3 * o.temperatureMinTime).add("hours", Forecaster.tz_offset_from_local).format("h[&nbsp;]A")), m += ".";
        var b = t.daily && t.daily.data[0] && t.daily.data[0].sunriseTime,
            w = t.daily && t.daily.data[0] && t.daily.data[0].sunsetTime;
        b && w && (m += b > r ? " The sun will rise at " : " The sun rose at ", m += moment(1e3 * b).add("hours", Forecaster.tz_offset_from_local).format("h:mm[&nbsp;]A"), m += w > r ? " and will set at " : " and set at ", m += moment(1e3 * w).add("hours", Forecaster.tz_offset_from_local).format("h:mm[&nbsp;]A") + "."), $("#time_machine .day_summary").html(m), $("#time_machine .share a.facebook").attr("href", "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href)), $("#time_machine .share a.twitter").attr("href", "http://twitter.com/home?status=" + encodeURIComponent("The weather on " + v + ": " + window.location.href)), $("#time_machine .share a.gplus").attr("href", "https://plusone.google.com/_/+1/confirm?hl=en&url=" + encodeURIComponent(window.location.href))
    }, e.time_machine_advance_day = function(e) {
        var t = moment(1e3 * Forecaster.time).add("days", e);
        $("#search_area .buttons .time_machine_modal .time_field").val(t.format("MMMM D, YYYY")), $(UIManager).trigger("time_chosen")
    };
    var V = function() {
        e.time_machine_advance_day(-1)
    }, J = function() {
            e.time_machine_advance_day(1)
        };
    e.page_error = function(e) {
        if (window.mobile) return K(e);
        $(".page").hide(), $("#error > .error").hide(), $("#error .error." + e).show(), $("#error").show(), S()
    };
    var K = function(e) {
        var t = "";
        e == "location" ? t = "I can't find that location.\nPlease make sure it is spelled correctly." : e == "forecast" ? t = "Looks like we don't have a forecast for this location.\nMake sure it is spelled correctly, or try some alternatives." : e == "not_online" ? t = "Oops, it looks like you aren't connected to the Internet." : e == "old_android" && (t = "Forecast currently only support Android phones and tablets that are running Android 4.0 or higher."), Router.reload(), t && alert(t)
    }, Q = function() {
            var e = o.find("section.currently .current_container");
            e.toggleClass("show_more"), e.hasClass("show_more") ? o.find("section.currently .more_button").html("-") : o.find("section.currently .more_button").html("+")
        }, G = !1;
    e.si_units = function() {
        return G
    }, e.speed_units = function() {
        return G ? "km/h" : "mph"
    }, e.change_units = function(e, t) {
        var n = e == "c";
        t && G == n && (t = !1), window.mobile ? ($("#sidebar .si_toggle").removeClass("f").removeClass("c").addClass(e), Sidebar.is_open && setTimeout(Sidebar.close_sidebar, 750)) : ($("#units_toggle span").removeClass("selected"), $("#units_toggle span." + e).addClass("selected")), G = n, store.enabled && store.set("use_si", G), t && Router.reload()
    }, e.toggle_units = function() {
        var t = store.enabled && store.get("use_si") ? "f" : "c";
        e.change_units(t, !0)
    };
    var Y = !1,
        Z = !1,
        et = function(t) {
            if (!t) {
                Y = !1, window.mobile && e.build_outlook("hide_mobile_sponsor"), $("body").removeClass("show_sponsor");
                return
            }
            Y = !0, $("body").addClass("show_sponsor")
        }, tt = null,
        nt = !1,
        rt = 0,
        it = function() {
            if (window.blurred) {
                nt = !0;
                return
            }
            nt = !1, $("#search_area .refresh").addClass("loading"), e.page_loading(window.mobile ? !1 : !0), Router.reload()
        }, st = function() {
            clearTimeout(tt);
            var t = e.first_hour_precip(m),
                n = t ? 12e4 : 6e5;
            nt && (n = 0), tt = setTimeout(it, n)
        };
    $(window).blur(function() {
        window.blurred = !0
    }), $(window).focus(function() {
        window.blurred = !1, st()
    }), e.set_forecast = function(t) {
        m = t, Map.stop_animation(), e.build_outlook(), e.build_overview(), e.display_wobble(), e.display_alert(), window.mobile || (e.build_lines(), e.build_world_maps(), st())
    };
    var ot = "";
    $("#search_area .location_controls .clear").bind("click", function(e) {
        e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), ot = window.mobile ? $("#search_area .location_field").html() : $("#search_area .location_field").val(), $("#search_area .location_field").html("").val("").focus()
    }), $("#search_area .location_field").bind("focus", function(e) {
        ot = $("#search_area .location_field").val() || ot
    }), $("#search_area .location_field").bind("blur", function(e) {
        $("#search_area .location_field").val() || $("#search_area .location_field").val(ot)
    });
    var ut = $("#forecast .overview_container > .inner"),
        at = $("#day_timeline"),
        ft = !1,
        lt = !1,
        ct = !1,
        ht = !1,
        pt, dt, vt, mt, gt, yt, bt, wt, Et, St = !1,
        xt, Tt, Nt = function() {
            if (ct) return;
            ENV.is_iphone ? (translate(ut[0], 0, -wt), clearTimeout(xt), xt = setTimeout(function() {
                o.css("height", gt - n.find(".sponsor").height())
            }, 1e3)) : (n.find(".sponsor").hide(), clearTimeout(Tt), Tt = setTimeout(function() {
                n.find(".sponsor").css("opacity", 0).show().animate({
                    opacity: 1
                }, 250)
            }, 350), translate_transition(o[0], "250ms linear"), translate(o[0], 0, -wt)), $("body").addClass("outlook_revealed"), ENV.is_iphone && u.hide(), e.stop_wobble(), e.overview_icons.pause(), e.outlook_icons.play(), ct = !0, _gat._getTrackerByName()._trackEvent("Forecast Sections", location.host, "Mobile Outlook", 0)
        }, Ct = !1,
        kt = function() {
            if (!ct && ENV.is_iphone) return;
            Ct = !0, ENV.is_iphone ? (clearTimeout(xt), translate(ut[0], 0, 0), o.css("height", gt)) : (clearTimeout(Tt), translate_transition(o[0], "250ms linear"), translate(o[0], 0, 0)), $("body").removeClass("outlook_revealed"), setTimeout(function() {
                Ct = !1, ENV.is_iphone ? u.show() : translate_transition(o[0], null)
            }, 250), ct = !1, e.hide_day_panel(), e.start_wobble(), e.outlook_icons.pause(), e.overview_icons.play(), o.scrollTop(1), _gat._getTrackerByName()._trackEvent("Forecast Sections", location.host, "Mobile Forecast", 0)
        }, Lt = function() {
            var e = o.scrollTop(),
                t = o.find("> .inner").height() + $("#search_area").height() - o.height() - e;
            return [e, t]
        }, At = function() {
            if (ft) return;
            var e = Lt();
            e[0] <= 0 ? o.scrollTop(1) : e[1] <= 0 && o.scrollTop(e[0] - 1)
        }, Ot = !1,
        Mt, _t = function() {
            ENV.is_iphone && a.addClass("in_front").find(".pictos span").html("."), Ot = !1, Mt = (new Date).getTime(), o.find(".location_field").addClass("hidden"), Router.reload(!0)
        }, Dt = function(e) {
            Math.max(0, e - ((new Date).getTime() - Mt)), setTimeout(function() {
                o.find(".location_field").removeClass("hidden"), ENV.is_iphone && (a.addClass("hidden"), setTimeout(function() {
                    a.removeClass("in_front").find(".pictos span").html("{").removeClass("active"), translate(a[0], 0, 0)
                }, 250))
            }, e)
        }, Pt = function() {
            var e = o.scrollTop();
            if (e > 0) return;
            var t = -58,
                n = Math.min(-t, -e);
            e <= t ? (a.find(".pictos span").addClass("active"), Ot = !0) : e > t && (a.find(".pictos span").removeClass("active"), Ot = !1), a.removeClass("hidden"), translate(a[0], 0, n)
        }, Ht = function() {
            n.addClass("bounce"), translate(n[0], 0, 0)
        }, Bt = function() {
            var e = o.find(".timeline_scroll .scroll");
            e.css("webkitAnimationName", ""), e.unbind("webkitAnimationEnd", Bt)
        }, jt = function() {
            var e = o.find(".timeline_scroll .scroll");
            e.bind("webkitAnimationEnd", Bt), e.css("webkitAnimationName", "timeline_bounce")
        }, Ft = function() {
            var e = wt - 30;
            gt < 465 && $("#alerts").is(":visible") && (e -= 40);
            var t = 115,
                n = Math.min(120, (e - t) / 3),
                r = Math.min(140, e - 3 * n),
                i = Math.max(0, e - 3 * n - r) / 2;
            o.find(".sections").css({
                width: bt,
                "margin-top": i
            }), o.find("section.currently").css("height", t);
            var s = o.find("section.timeline_scroll");
            s.css("height", e - 3 * n);
            var u = gt - (s.position().top + s.height());
            s.find(".scroll").css("top", u < 15 ? u - 15 : 0);
            if (window.mobile) {
                var a = o.find(".next_24_hours .desc").height() - o.find(".next_hour .desc").height();
                o.find("section.next_hour").css("height", n - a), o.find("section.next_24_hours").css("height", n + a)
            } else {
                var a = o.find(".next_24_hours .desc").height() - o.find(".next_hour .desc").height();
                o.find("section.next_hour").css("height", n - a), o.find("section.next_24_hours").css("height", n + a), o.find("section.next_7_days").css("height", n + a)
            }
        }, It = function() {
            gt = $(window).height(), yt = $("#search_area").height(), wt = gt - yt, bt = $(window).width(), n.css({
                height: wt,
                top: yt
            }), $("#forecast").css("height", gt), ut.css("height", gt), $("#loading").css("height", gt), Ft(), o.css("height", gt), $("#map_area").css("height", wt), $("#map").css({
                width: bt,
                height: wt
            }), $("#forecast_location_field").css("width", bt - 58)
        };
    window.mobile && It(), e.setup_mobile = function() {
        It();
        var t = !1;
        $("#sidebar, #map_area .top_bar").bind("touchstart", function(e) {
            t = !0
        }), $("body").bind("touchstart", function(e) {
            t && e.preventDefault()
        }), $("body").bind("touchend", function(e) {
            t = !1
        }), o.bind("scroll", function() {
            ENV.is_iphone && !ft && !ct && u.show(), ENV.is_iphone && ft && !ct && Pt(), At()
        }), o.bind("touchend", function(t) {
            if (St) {
                t.preventDefault(), St = !1, qt();
                return
            }
            ct ? e.outlook_icons.play() : Sidebar.map_revealed || e.overview_icons.play();
            if (ft) {
                var n = Lt();
                ct || (Ot ? _t() : Dt(0)), lt ? vt > dt ? kt() : !ct && pt - vt > 10 ? Nt() : e.start_wobble() : r || (ct ? kt() : $.touching({
                    x: mt,
                    y: vt
                }, o.find("section.currently")).length > 0 ? Q() : Nt())
            } else ct && Ht(), ct && (Et ? (Et.removeClass("highlighted"), Et.find(".top").trigger("click")) : C && e.hide_day_panel());
            ft = !1, lt = !1, ht = !1, r = !1
        });
        var r = !1;
        o.find(".timeline_scroll").bind("touchmove", function(e) {
            r = !0
        }), o.bind("touchstart", function(t) {
            if (Ct) return;
            pt = dt = vt = t.originalEvent.touches[0].pageY, mt = t.originalEvent.touches[0].pageX;
            if (ct && $.touching({
                x: mt,
                y: vt
            }, n.find(".sponsor")).length) {
                St = !0, o.css("pointer-events", "none");
                return
            }
            St = !1, n.removeClass("bounce"), e.overview_icons.pause(), e.outlook_icons.pause();
            if (ct) {
                var r = $.touching({
                    x: mt,
                    y: vt
                }, $("#outlook .panel"));
                $("#outlook .panel").removeClass("highlighted"), r.length && (Et = r.eq(0), Et.addClass("highlighted"))
            } else {
                if (vt <= yt) {
                    t.preventDefault();
                    return
                }
                var i = o.find(".timeline_scroll"),
                    s = i.position().top;
                if (vt >= s && vt <= s + i.find(".scroll").height()) return
            } if (ct && vt > yt) {
                t.preventDefault();
                return
            }
            ct && vt <= yt ? ht = !0 : ht = !1, ENV.is_iphone || t.preventDefault(), ft = !0
        }), o.bind("touchmove", function(t) {
            if (St) {
                t.stopPropagation(), t.preventDefault();
                return
            }
            dt = vt, vt = t.originalEvent.touches[0].pageY, mt = t.originalEvent.touches[0].pageY, !lt && Math.abs(vt - pt) > 10 && (lt = !0, e.stop_wobble()), !ENV.is_iphone && ft && (t.preventDefault(), translate(o[0], 0, Math.min(0, vt - pt))), Et && !$.touching({
                x: mt,
                y: vt
            }, Et).length && (Et.removeClass("highlighted"), Et = null), ct && !ht && C == null && translate(n[0], 0, (vt - pt) / 3)
        }), At();
        var i = !1;
        at.find(".scroll").bind("touchstart", function() {
            i = !0
        }).bind("touchend", function() {
            i = !1
        }), ENV.is_iphone && at.find(".scroll").bind("scroll", function() {
            if (i) return;
            var e = at.find(".scroll"),
                t = e.scrollLeft(),
                n = at.width(),
                r = at.find(".timeline_container").width();
            t <= 0 ? e.scrollLeft(1) : t >= r - n && e.scrollLeft(r - n - 1)
        })
    };
    var qt = function() {
        setTimeout(function() {
            o.css("pointer-events", "auto")
        }, ENV.is_android ? 350 : 0)
    };
    $(window).bind("touchend", qt);
    try {
        screen.lockOrientation("portrait")
    } catch (Rt) {}
    var Ut = function() {
        if (window.mobile) {
            Math.abs(window.orientation) == 90 ? $("body").addClass("landscape") : $("body").removeClass("landscape");
            if ($("body").hasClass("install")) return;
            setTimeout(function() {
                document.body.scrollLeft = 0, document.body.scrollTop = 0
            }, 0), Math.abs(window.orientation) == 90 ? e.hide_day_panel() : zt()
        } else Math.abs(window.orientation) == 90 && $("html, body").animate({
            scrollTop: $("#map").position().top + 7
        }, 250)
    }, zt = function() {
            if ($(window).width() > $(window).height()) return setTimeout(zt, 100);
            It(), e.build_outlook()
        };
    $(window).bind("orientationchange", Ut);
    var Wt = function() {
        if (!$("#fusion_ad .fusionentire").length) return setTimeout(Wt, 200);
        $("#fusion_ad a").attr("target", "_blank")
    };
    $(document).ready(function() {
        Math.abs(window.orientation) == 90 && Ut(), y(), window.mobile || (o.find("section.currently").bind("click", Q), $("#search_area .buttons .time_machine").click(function(t) {
            t.stopPropagation(), e.toggle_time_machine_modal()
        }), $("#search_area .buttons .time_machine_modal").bind("click mousedown touchstart", function(e) {
            e.stopPropagation()
        }), $(window).bind("click", function() {
            $("#search_area .buttons").hasClass("modal_revealed") && e.toggle_time_machine_modal(!1)
        })), $("#units_toggle .f").click(function() {
            e.change_units("f", !0)
        }), $("#units_toggle .c").click(function() {
            e.change_units("c", !0)
        }), $("#sidebar .si_toggle").click(e.toggle_units), e.change_units(store.enabled && store.get("use_si") ? "c" : "f"), window.mobile && $("#alerts").bind("touchstart", function(e) {
            e.stopPropagation()
        }), (window.mobile || ENV.is_tablet) && new FastClick(document.body)
    }), document.addEventListener("touchstart", function() {}, !0), window.mobile && $("#loading").bind("touchmove", function(e) {
        e.stopPropagation(), e.preventDefault()
    });
    if (ENV.is_iphone) {
        var Xt, Vt = function() {
                window.innerWidth < 800 ? $("#iphone_install").addClass("hidden") : $("#iphone_install").removeClass("hidden")
            };
        Vt(), $(window).bind("gestureend", function(e) {
            Xt = setTimeout(Vt, 250)
        }), $(window).bind("gesturestart", function(e) {
            clearTimeout(Xt), $("#iphone_install").addClass("hidden")
        }), $("#iphone_install").show().bind("touchend", function(e) {
            e.preventDefault(), $("#iphone_install").toggleClass("open")
        }), $("#mobile_link").remove(), $("#desktop_link").remove()
    } else $("#iphone_install").remove(), ENV.is_mobile && ($("#mobile_link").show(), $("#desktop_link").show());
    $("body").bind("dblclick", function() {
        if (document.selection && document.selection.empty) document.selection.empty();
        else if (window.getSelection) {
            var e = window.getSelection();
            e.removeAllRanges()
        }
    }), ENV.is_homescreen && ENV.is_tablet && $("#footer").remove(), $("#search_area .refresh").bind("click", it), ENV.is_tablet && $("body").addClass("tablet"), e.show_mobile_splash = function() {
        console.log(show)
    };
    if (ENV.is_retina) {
        var $t = $("#icon_current").width(),
            Jt = $("#icon_current").height();
        $("#icon_current").attr("width", 2 * $t).attr("height", 2 * Jt)
    }
    return Wt(), e
}(),
    Time = {};
Time.correction = 0, Time.now = function() {
    return Math.round((new Date).getTime() / 1e3) + Time.correction
}, Time.BOD = function(e) {
    e || (e = Time.now());
    var t = new Date(e * 1e3);
    return t.setUTCHours(0, 0, 0, 0), Math.round(t.getTime() / 1e3)
};
var Base64Ajax = function(e, t) {
    var n = function(e) {
        var t = "",
            n, r = new Array(4),
            i = 0,
            s = 0,
            o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        while (i < e.length) {
            n = new Array(3);
            for (jnx = 0; jnx < n.length; jnx++) i < e.length ? n[jnx] = e.charCodeAt(i++) & 255 : n[jnx] = 0;
            r[0] = n[0] >> 2, r[1] = (n[0] & 3) << 4 | n[1] >> 4, r[2] = (n[1] & 15) << 2 | n[2] >> 6, r[3] = n[2] & 63, s = i - (e.length - 1);
            switch (s) {
                case 2:
                    r[3] = 64, r[2] = 64;
                    break;
                case 1:
                    r[3] = 64;
                    break;
                default:
            }
            for (jnx = 0; jnx < r.length; jnx++) t += o.charAt(r[jnx])
        }
        return t
    }, r = function(e) {
            if (typeof Uint8Array == "undefined") return n(e);
            var t = "",
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                i = new Uint8Array(e),
                s = i.byteLength,
                o = s % 3,
                u = s - o,
                a, f, l, c, h;
            for (var p = 0; p < u; p += 3) h = i[p] << 16 | i[p + 1] << 8 | i[p + 2], a = (h & 16515072) >> 18, f = (h & 258048) >> 12, l = (h & 4032) >> 6, c = h & 63, t += r[a] + r[f] + r[l] + r[c];
            return o == 1 ? (h = i[u], a = (h & 252) >> 2, f = (h & 3) << 4, t += r[a] + r[f] + "==") : o == 2 && (h = i[u] << 8 | i[u + 1], a = (h & 64512) >> 10, f = (h & 1008) >> 4, l = (h & 15) << 2, t += r[a] + r[f] + r[l] + "="), t
        }, i = function(e, t) {
            var n = new XMLHttpRequest;
            return "withCredentials" in n ? n.open("GET", e, !0) : typeof XDomainRequest != "undefined" && (n = new XDomainRequest, n.open("GET", e)), typeof n.overrideMimeType != "undefined" && n.overrideMimeType("text/plain; charset=x-user-defined"), n.responseType = "arraybuffer", n.onload = function(e) {
                var i = e.currentTarget && e.currentTarget.response ? e.currentTarget.response : n.responseText;
                t(r(i))
            }, n.send(), n
        };
    return i(e, t)
}, Map = function() {
        function xt(e, t, n, r, i, s, o, u, a) {
            dt = r - e, vt = i - t, mt = s - n;
            var f = 1 / Math.sqrt(dt * dt + vt * vt + mt * mt);
            dt *= f, vt *= f, mt *= f, at = mt * u - vt * a, ft = dt * a - mt * o, lt = vt * o - dt * u;
            var l = 1 / Math.sqrt(at * at + ft * ft + lt * lt);
            at *= l, ft *= l, lt *= l, ct = mt * ft - vt * lt, ht = dt * lt - mt * at, pt = vt * at - dt * ft, gt = -(e * at + t * ft + n * lt), yt = -(e * ct + t * ht + n * pt), bt = -(e * dt + t * vt + n * mt)
        }

        function Tt(e, t, n, r, i, s) {
            var o = -(e * r + t * i + n * s),
                u = o * o - (e * e + t * t + n * n) + 1;
            if (u <= 0) return 0;
            var a = o - Math.sqrt(u);
            if (a <= 0) return 0;
            var f = e + r * a,
                l = t + i * a,
                c = n + s * a,
                h = (Math.PI * .5 - Math.acos(l)) * 180 / Math.PI,
                p = Math.atan2(c, f) * 180 / Math.PI;
            return [h, p]
        }

        function Nt(e, t, n, r, i) {
            e *= Math.PI / 180, t *= Math.PI / 180, n *= Math.PI / 180, r *= Math.PI / 180;
            var s = Math.cos(e) * Math.cos(t),
                o = Math.sin(e),
                u = Math.cos(e) * Math.sin(t);
            wt = s + i * Math.cos(e + r) * Math.cos(t + n), Et = o + i * Math.sin(e + r), St = u + i * Math.cos(e + r) * Math.sin(t + n), xt(wt, Et, St, s, o, u, 0, 1, 0)
        }

        function Ct(e, t, n, r) {
            if (U == 3) return kt(e, t, n);
            var i = e * at + t * ft + n * lt + gt,
                s = e * ct + t * ht + n * pt + yt,
                o = e * dt + t * vt + n * mt + bt,
                u = E / o;
            return [E * .5 + i * u - (r ? 0 : S), E * .5 + s * u]
        }

        function kt(e, t, n) {
            var r = e * at + t * ft + n * lt + gt,
                i = e * ct + t * ht + n * pt + yt,
                s = e * dt + t * vt + n * mt + bt,
                o = w / s,
                u = (E - w) / 2;
            return [w * .5 + r * o, w * .5 + i * o + u]
        }

        function Lt(e, t, n) {
            return e *= Math.PI / 180, t *= Math.PI / 180, Ct(Math.cos(e) * Math.cos(t), Math.sin(e), Math.cos(e) * Math.sin(t), n)
        }

        function At(e, t) {
            var n = 1 / (w - 1),
                r = 1 / (E - 1),
                i = e * n - .5,
                s = t * r - .5,
                o = 1 / Math.sqrt(i * i + s * s + 1);
            return i *= o, s *= o, Tt(wt, Et, St, i * at + s * ct + o * dt, i * ft + s * ht + o * vt, i * lt + s * pt + o * mt)
        }
        var e = !0,
            t = !0,
            n = !0,
            r = ENV.is_mozilla,
            s = ENV.is_webkit,
            o = ENV.is_ie;
        try {
            new Int32Array
        } catch (u) {
            e = !1
        }
        if (ENV.is_ie && !ENV.is_old_ie || $.browser.safari && +$.browser.version.split(".")[0] < 536) t = !1;
        var a = {};
        window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                window.setTimeout(e, 11)
            }
        }();
        var f = $("#map");
        if (f.length == 0) return null;
        var l = $("#map .map_container"),
            c = $("#map canvas"),
            h = c[0],
            p = h.getContext("2d"),
            d = +c.attr("width"),
            v = +c.attr("height"),
            m = d,
            g = v,
            y = 1,
            b = velocity_offset_y = 0,
            w = c.width(),
            E = c.height(),
            S = 0,
            x = 500,
            T = x,
            N = x,
            C = null,
            k = null,
            L = window.mobile ? $("#map_area > .time") : $("#map .top_bar .time span"),
            A = $("#map .controls"),
            O = A.find(".play_button"),
            M = A.find(".timeline"),
            _ = w - A.find(".play_button").width(),
            D = $("#map .slider"),
            P = $("#map .timeline .progress"),
            H = D.width() / 2,
            B = $("#map .levels"),
            j = $("#map .map_container .cities"),
            F = $("#map .map_container .location"),
            I, q, R, U = null,
            z, W, X, V, J = 0,
            K = !1,
            Q = !1,
            G, Y, Z, et = [],
            tt = [],
            nt = [],
            rt, it, st, ot, ut;
        a.resize = function(e, t, n) {
            e -= 2 * n, t -= 2 * n, d = m = w = e, v = g = E = t;
            if (U == 3) S = 0;
            else {
                var r = Lt(G, Y, !0);
                S = Math.max(0, Math.min(E - w, r[0] - w / 2))
            }
            l.css({
                width: e,
                height: t,
                top: n,
                left: n
            }), c.attr("width", e).attr("height", t), _ = w - A.find(".play_button").width(), H = D.width() / 2
        };
        var at, ft, lt, ct, ht, pt, dt, vt, mt, gt, yt, bt, wt, Et, St, Ot = function() {
                var e = U == 0 ? "h:mm" : "ddd",
                    t = Time.now(),
                    n = (t - rt) / ut;
                if (ut == 0 || n < 0) n = 0;
                var r = A.find(".timeline .labels");
                r.html("");
                var i = n * _;
                window.mobile && (i = Math.round(i) + 3), $('<div class="now"></div>').css("left", i).appendTo(r);
                var s = moment(rt * 1e3).add("hours", Forecaster.tz_offset_from_local),
                    o = moment(it * 1e3).add("hours", Forecaster.tz_offset_from_local);
                U > 0 && s.startOf("day");
                var u, a, f = 0;
                while (s < o) a = (s.unix() - rt - 3600 * Forecaster.tz_offset_from_local) / ut, a >= 0 && (u = $('<div class="tick"></div>').css({
                    left: Math.round(a * _)
                }).addClass(f % 2 == 0 ? "even" : "odd"), (!window.mobile || f % 2 == 0) && $('<span class="time"></span>').html(s.format(e)).appendTo(u), u.appendTo(r)), U == 0 ? s.add("seconds", 1200) : s.add("days", 1), f++
            }, Mt = function(e) {
                if (e) {
                    P.show();
                    var t = n = _;
                    st = rt, ot = it
                } else var t = _ * (st - rt) / ut,
                n = _ * (it - ot) / ut;
                P.find(".pre").css("width", t), P.find(".post").css("width", n)
            }, _t = function(e) {
                dn++;
                if (!e && dn % 10 != 0) return;
                var t = moment(cn * 1e3).add("hours", Forecaster.tz_offset_from_local);
                if (U == 0) {
                    var n = t.format("h:mma");
                    n == "12:NaNam" ? (console.log("NaN on map:", cn, t), L.html("")) : L.html(n)
                } else {
                    var r = "";
                    cn < J ? cn >= J - 86400 ? r = "Yesterday" : r = t.format("[Last] ddd") : cn < J + 86400 ? r = "Today" : cn < J + 172800 ? r = "Tomorrow" : r = t.format("ddd"), L.html(r + " " + t.format("ha"))
                }
            }, Dt = function() {
                D.set_val(Math.max(0, (cn - rt) / ut))
            }, Pt = function(e) {
                gn = !0, cn = rt + e * ut, cn < st ? (cn = st, Dt()) : cn > ot && (cn = ot, Dt())
            }, Ht = null,
            Bt = !1,
            jt = !1,
            Ft = function() {
                if (Bt) return;
                Bt = !0, jt = !0, pn ? a.stop_animation() : qn(), ENV.is_mobile || UIManager.outlook_icons.pause();
                if (ENV.is_tablet || !window.mobile && ENV.is_mobile) UIManager.overview_icons.pause(), UIManager.stop_wobble()
            }, It = function(e) {
                if (!e) {
                    var t = Time.now(),
                        n = Math.abs(t - cn);
                    if (U == 0 && n < 600 || U > 0 && n < 36e3) {
                        D.animate_to(Math.max(0, (t - rt) / ut));
                        return
                    }
                }
                clearInterval(Ht), Ht = null, Bt = !1, _t(!0), nr(), Xt(), ENV.is_mobile || UIManager.outlook_icons.play();
                if (ENV.is_tablet || !window.mobile && ENV.is_mobile) UIManager.overview_icons.play(), UIManager.start_wobble()
            }, qt = function() {
                It(!0)
            }, Rt = [],
            Ut = !1,
            zt = function(e) {
                Rt.push(e), Xt()
            }, Wt = function() {
                if (Bt || !Rt.length) {
                    Ut = !1;
                    return
                }
                Ut = !0;
                var e = Rt.shift();
                e && e(), setTimeout(Wt, 0)
            }, Xt = function() {
                Ut || Wt()
            }, Vt = function(e, t) {
                m = Math.round(e * y), g = Math.round(t * y), C.prop("width", m).prop("height", g), c.prop("width", m).prop("height", g).css({
                    width: e,
                    height: t
                }), I = p.createImageData(m, g), R = I.data.length / 4, n && (q = new Int32Array(I.data.buffer))
            }, $t = function(t) {
                if (t.data.buffer) return new Int32Array(t.data.buffer);
                var n = t.data,
                    r = n.length / 4,
                    s = e ? new Int32Array(r) : new Array(r);
                for (i = 0; i < r; i++) s[i] = n[4 * i + 3] << 24 | n[4 * i + 2] << 16 | n[4 * i + 1] << 8 | n[4 * i];
                return s
            }, Jt = function() {
                if (!tt.length) return;
                for (var e = tt.length; e--;) tt[e].i = e;
                rt = tt[0].time, it = tt[tt.length - 1].time, ut = it - rt
            }, Kt = function() {
                tt.sort(function(e, t) {
                    return e.time - t.time
                }), Jt()
            }, Qt = function(e) {
                if (!e) return;
                var t = (ENV.is_old_ie ? "darkskysatellite/" : "http://darkskysatellite.s3.amazonaws.com/") + Z.sid + "/" + e + ".png",
                    n = {
                        time: e,
                        loaded: !1,
                        src: t,
                        velocity: [0, 0],
                        dt: null,
                        end_x: 0,
                        end_y: 0
                    };
                return tt.push(n), sn.push(n), n
            }, Gt = function(e) {
                for (var t = tt.length; t--;)
                    if (tt[t].time == e.time) {
                        tt.splice(t, 1);
                        break
                    }
                var n = nt.indexOf(e.time);
                n >= 0 && nt.splice(n, 1), Jt(), Yt()
            }, Yt = function(e) {
                var t = Time.now(),
                    n = t - t % V,
                    r = n,
                    e, i = [],
                    s = [];
                for (var o = tt.length; o--;) {
                    e = tt[o];
                    if (e.time >= r) e.loaded ? i.push(e.time) : i = [];
                    else {
                        if (!e.loaded) break;
                        s.push(e.time)
                    }
                }
                nt = s.concat(i), nt.sort(), st = nt[0], ot = nt[nt.length - 1], xn = En * tt.length, Mt(), Ot(), Dt()
            }, Zt = function(t, n) {
                k.clearRect(0, 0, 64, 1), k.drawImage(t.img, 0, 0, 64, 1, 0, 0, 64, 1);
                var r = k.getImageData(0, 0, 64, 1).data,
                    s = e ? new Int32Array([0, 0]) : new Array([0, 0]);
                for (i = 0; i < 32; i++) r[i * 4] & 1 ? s[0] |= 1 << i : s[0] &= ~(1 << i), r[(i + 32) * 4] & 1 ? s[1] |= 1 << i : s[1] &= ~(1 << i);
                r = null, t.velocity[0] = s[0] / 1e6, t.velocity[1] = s[1] / 1e6, n()
            }, en = function(e, t, n) {
                e.is_finishing_loading = !0, t ? (e.end_x = V * t.velocity[0], e.end_y = V * t.velocity[1]) : e.end_x = e.end_y = 0;
                var r = -S;
                k.clearRect(0, 0, m, g), k.drawImage(e.img, r + y * b, y * velocity_offset_y, g, g), t && k.drawImage(t.img, r + y * (b - V * t.velocity[0]), y * (velocity_offset_y - V * t.velocity[1]), g, g);
                var i = $t(k.getImageData(0, 0, m, g));
                k.drawImage(e.img, r + y * b, y * velocity_offset_y, g, g), e.pixels = $t(k.getImageData(0, 0, m, g));
                for (var s = R; s--;) e.pixels[s] = e.pixels[s] & 255 | i[s] << 8 & 65280;
                return e.loaded = !0, Yt(e), i = null, e.used_as_first_img = !0, e.used_as_second_img && (e.img = null), t && (t.used_as_second_img = !0, t.used_as_first_img && (t.img = null)), typeof n == "function" ? n(null) : null
            }, tn = function() {
                var e = tt.length,
                    t;
                for (var n = 0; n < e; n++) {
                    if (tt[n].loaded || tt[n].is_finishing_loading) continue;
                    t = n == e - 1;
                    if (tt[n].img_loaded && (t || tt[n + 1].img_loaded)) return en(tt[n], t ? null : tt[n + 1], tn)
                }
            }, nn = function(e, n) {
                e.img = new Image, e.img.crossOrigin = "anonymous", e.img.onerror = function() {
                    return Gt(e), typeof n == "function" ? n(null) : null
                }, e.img.onload = function() {
                    Zt(e, function() {
                        un[0] += e.velocity[0], un[1] += e.velocity[1], un[2]++, !un.finished && un[2] >= (Q ? 5 : 2) && (un[0] /= un[2], un[1] /= un[2], un.finished = !0, b = 1.15 * Math.abs(Math.ceil(V * un[0])), velocity_offset_y = 1.15 * Math.abs(Math.ceil(V * un[1])), Vt(d + 2 * b, v + 2 * velocity_offset_y)), e.img_loaded = !0, un.finished && tn(), typeof n == "function" && n()
                    })
                };
                var r = "";
                Time.now() - e.time > 1200 ? r = e.time : r = Time.now(), t ? e.img.src = e.src + "?" + r : Base64Ajax(e.src + "?" + r, function(t) {
                    e.img.src = "data:image/png;base64," + t
                })
            }, rn = function(e, n) {
                var r = new Image;
                r.crossOrigin = "anonymous", r.onerror = function() {
                    return Gt(e), typeof n == "function" ? n(null) : null
                }, r.onload = function() {
                    var t = a.is_old_ie ? 100 : 0;
                    setTimeout(function() {
                        zt(function() {
                            return k.clearRect(0, 0, m, g), U == 3 ? k.drawImage(r, 0, 0, T, N, 0, y * S, m, m) : k.drawImage(r, 0, 0, T, N, -y * S, 0, g, g), e.pixels = $t(k.getImageData(0, 0, m, g)), e.loaded = !0, Yt(e), typeof n == "function" ? n(null) : null
                        })
                    }, t)
                };
                var i = "";
                Time.now() - e.time > 21600 ? i = e.time : i = Time.now(), t ? r.src = e.src + "?" + i : Base64Ajax(e.src + "?" + i, function(e) {
                    r.src = "data:image/png;base64," + e
                })
            }, sn = [],
            on = function() {
                if (sn.length == 0) {
                    Yn(!0), P.hide(), !Bt && !pn && Dt(), Q && zn && (!Bt && !jt && a.start_animation(), zn = !1);
                    return
                }
                nt.length > 0 && Yn();
                var e = sn.shift();
                return U == 0 ? nn(e, on) : rn(e, on)
            }, un = [0, 0, 0],
            an = function() {
                Mt(!0);
                var e = Time.now(),
                    t = e - e % V,
                    n = [],
                    r = [];
                for (var i = 0; i < W; i++) {
                    var s = t + i * V;
                    if (s - Time.now() > 3600 * X) break;
                    n.push(t + i * V)
                }
                for (var i = 1; i <= z; i++) r.push(t - i * V);
                while (n.length > 0 || r.length > 0) Qt(n.shift()), Qt(r.shift());
                Kt(), un = [0, 0, 0], U != 0 && Vt(d, v);
                for (var i = 0; i < 4; i++) on()
            }, fn = function() {
                var e = Time.now(),
                    t = e - e % V,
                    n = t + V;
                Qt(t), Qt(n), Kt(), U != 0 && Vt(d, v), on(), on()
            }, ln = 0,
            cn = null,
            hn = 0,
            pn = !1,
            dn = 0,
            vn, mn, gn = !1,
            yn = 0,
            bn = 0,
            wn = Date.now(),
            En, Sn, xn, Tn = function(e, t, n) {
                var r = 0,
                    i = [61494528, 111826176, 179463680, 246831890, 314073870, 397501206, 481715218, 582248726, 666331155, 767257366, 867789076, 968321814, 1069181204, 1186556181, 1287154452, 1404594965, 1522232086, 1639607061, 1757047574, 1874488086, 1975085589, 2092526102, -2084934891, -1967494378, -1850053866, -1732613355, -1615172842, -1514444267, -1413846250, -1313248747, -1212519658, -1111856362, -1011127530, -927306986, -843421162, -759469547, -675648746, -608539882, -541431018, -491099370, -440833514, -423990504, -424056037, -424056035, -424121568, -424121565, -424252634, -424252630, -424252626, -424252621, -424252618, -424318150, -424383682, -424383678, -424449210, -424449204, -424514736, -424514731, -424580262, -424645792, -424645788, -424711318, -424776849, -424776844, -424907911, -424907905, -424973437, -424973430, -425038961, -425104492, -425170023, -425235553, -425301084, -425366615, -425366610, -425432141, -425563208, -425563203, -425628734, -425759802, -425825332, -425890865, -425956396, -426021928, -426087461, -426152993, -426284061, -426349594, -426480663, -426546195, -426611729, -426742798, -426808077, -426938890, -427069448, -427134982, -427330820, -427461377, -427591937, -427788033, -427918849, -428114689, -428244993, -428441089, -428637185, -428898561, -429028865, -429290241, -429486081, -429681921, -429877761, -430073345, -430334977, -430530817, -430726657, -430922497, -431118337, -431379713, -431575809, -431771393, -431966977, -432228609, -432358657, -432554497, -432684801, -432815105, -433010945, -433206785, -433337089, -433467393, -433597697, -433728001, -433793025, -433923329, -433988353, -434053121, -434052609, -434052097, -434051585, -434050817, -434050561, -434050049, -434049537, -434049281, -433983233, -433917441, -433785857, -433654785, -433457665, -433260801, -433063937, -432801537, -432604673, -432342273, -432080129, -431752193, -431424257, -431162113, -430899713, -430440961, -430113281, -429785089, -429391873, -428998657, -428605441, -428277761, -427884545, -427556865, -427098113, -426639361, -426246145, -425852929, -425525249, -425066497, -424738817, -424345601, -423952385, -423559169, -423165953, -422772737, -422510593, -422182913, -421855233, -421527553, -421199873, -420937729, -420675585, -420413441, -420216833, -419954689, -419758081, -419627009, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419759361, -420022529, -420285697, -420548865, -420943617, -421272577, -421667329, -422062081, -422522625, -422917377, -423377921, -423838465, -424299009, -424891137, -425285889, -425812225, -426338561, -426930689, -427391233, -427851777, -428443905, -428904705, -429430785, -429957121, -430483457, -431009793, -431470337, -431930881, -432391425, -432851969, -433312513, -433707265, -434102017, -434496769, -434957313, -435220481, -435483649, -435812609];
                for (var s = R; s--;) r = t * (n[s] & 255) + e * (n[s] >> 8), q[s] = i[r | 0]
            }, Nn = function() {
                var e = tt[(cn - rt) / V | 0];
                if (!e || !e.loaded) return !1;
                var t = e.pixels,
                    n = (cn - e.time) / V,
                    r = 1 - n;
                return Tn(n, r, t), p.putImageData(I, 0, 0), s ? h.style["-webkit-transform"] = "translate3d(" + (e.end_x * n - b) + "px, " + (e.end_y * n - velocity_offset_y) + "px, 0)" : o ? h.style["-ms-transform"] = "translate(" + (e.end_x * n - b) + "px, " + (e.end_y * n - velocity_offset_y) + "px)" : h.style.transform = "translate(" + (e.end_x * n - b) + "px, " + (e.end_y * n - velocity_offset_y) + "px)", _t(), !0
            }, Cn = function(e, t, n, r) {
                var i = 0,
                    s = 0,
                    o = 0,
                    u = [61494528, 111826176, 179463680, 246831890, 314073870, 397501206, 481715218, 582248726, 666331155, 767257366, 867789076, 968321814, 1069181204, 1186556181, 1287154452, 1404594965, 1522232086, 1639607061, 1757047574, 1874488086, 1975085589, 2092526102, -2084934891, -1967494378, -1850053866, -1732613355, -1615172842, -1514444267, -1413846250, -1313248747, -1212519658, -1111856362, -1011127530, -927306986, -843421162, -759469547, -675648746, -608539882, -541431018, -491099370, -440833514, -423990504, -424056037, -424056035, -424121568, -424121565, -424252634, -424252630, -424252626, -424252621, -424252618, -424318150, -424383682, -424383678, -424449210, -424449204, -424514736, -424514731, -424580262, -424645792, -424645788, -424711318, -424776849, -424776844, -424907911, -424907905, -424973437, -424973430, -425038961, -425104492, -425170023, -425235553, -425301084, -425366615, -425366610, -425432141, -425563208, -425563203, -425628734, -425759802, -425825332, -425890865, -425956396, -426021928, -426087461, -426152993, -426284061, -426349594, -426480663, -426546195, -426611729, -426742798, -426808077, -426938890, -427069448, -427134982, -427330820, -427461377, -427591937, -427788033, -427918849, -428114689, -428244993, -428441089, -428637185, -428898561, -429028865, -429290241, -429486081, -429681921, -429877761, -430073345, -430334977, -430530817, -430726657, -430922497, -431118337, -431379713, -431575809, -431771393, -431966977, -432228609, -432358657, -432554497, -432684801, -432815105, -433010945, -433206785, -433337089, -433467393, -433597697, -433728001, -433793025, -433923329, -433988353, -434053121, -434052609, -434052097, -434051585, -434050817, -434050561, -434050049, -434049537, -434049281, -433983233, -433917441, -433785857, -433654785, -433457665, -433260801, -433063937, -432801537, -432604673, -432342273, -432080129, -431752193, -431424257, -431162113, -430899713, -430440961, -430113281, -429785089, -429391873, -428998657, -428605441, -428277761, -427884545, -427556865, -427098113, -426639361, -426246145, -425852929, -425525249, -425066497, -424738817, -424345601, -423952385, -423559169, -423165953, -422772737, -422510593, -422182913, -421855233, -421527553, -421199873, -420937729, -420675585, -420413441, -420216833, -419954689, -419758081, -419627009, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419430401, -419759361, -420022529, -420285697, -420548865, -420943617, -421272577, -421667329, -422062081, -422522625, -422917377, -423377921, -423838465, -424299009, -424891137, -425285889, -425812225, -426338561, -426930689, -427391233, -427851777, -428443905, -428904705, -429430785, -429957121, -430483457, -431009793, -431470337, -431930881, -432391425, -432851969, -433312513, -433707265, -434102017, -434496769, -434957313, -435220481, -435483649, -435812609];
                for (var a = R; a--;) i = t * (n[a] & 255) + e * (n[a] >> 8), o = u[i | 0], s = 4 * a, r[s + 3] = o >>> 24, r[s + 2] = o >> 16 & 255, r[s + 1] = o >> 8 & 255, r[s] = o & 255
            }, kn = function(e, t, n, r) {
                var i = 0,
                    s = 0,
                    o = 0,
                    u = [3, 2, 1, 0, 6, 4, 2, 0, 10, 7, 4, 0, 14, 10, 5, 1, 18, 13, 7, 1, 23, 16, 9, 2, 28, 20, 11, 2, 34, 24, 14, 3, 39, 28, 16, 3, 45, 33, 19, 4, 51, 37, 21, 4, 57, 41, 24, 5, 63, 46, 26, 5, 70, 51, 29, 6, 76, 55, 32, 6, 83, 60, 35, 7, 90, 66, 38, 8, 97, 71, 41, 8, 104, 76, 44, 9, 111, 81, 47, 10, 117, 85, 49, 10, 124, 90, 52, 11, 131, 96, 55, 11, 138, 101, 58, 12, 145, 106, 61, 13, 152, 111, 64, 13, 159, 116, 67, 14, 165, 121, 69, 14, 171, 125, 72, 15, 177, 128, 74, 15, 183, 133, 77, 16, 189, 138, 79, 16, 195, 143, 82, 17, 200, 146, 84, 17, 205, 150, 85, 18, 210, 154, 87, 17, 215, 157, 90, 19, 219, 160, 92, 19, 223, 163, 94, 19, 226, 165, 95, 19, 229, 166, 95, 20, 230, 168, 97, 22, 230, 167, 97, 24, 230, 167, 97, 26, 230, 166, 97, 29, 230, 166, 97, 32, 230, 164, 97, 34, 230, 164, 97, 38, 230, 164, 97, 41, 230, 164, 97, 46, 230, 164, 97, 49, 230, 163, 97, 52, 230, 162, 97, 56, 230, 162, 97, 60, 230, 161, 97, 63, 230, 161, 97, 69, 230, 161, 97, 72, 230, 161, 97, 77, 230, 160, 97, 81, 230, 159, 97, 87, 230, 159, 97, 90, 230, 158, 97, 96, 230, 157, 97, 100, 230, 157, 97, 105, 230, 155, 97, 109, 230, 155, 97, 115, 230, 154, 97, 118, 230, 154, 97, 124, 230, 153, 97, 129, 230, 152, 97, 133, 230, 152, 97, 138, 230, 151, 97, 143, 230, 150, 97, 148, 230, 149, 97, 152, 230, 149, 97, 157, 230, 148, 97, 161, 230, 146, 97, 166, 230, 146, 97, 170, 230, 145, 97, 175, 230, 143, 97, 179, 230, 143, 97, 184, 230, 142, 97, 187, 230, 141, 97, 191, 230, 140, 97, 195, 230, 139, 97, 198, 230, 138, 97, 201, 230, 136, 97, 205, 230, 135, 97, 207, 230, 133, 97, 210, 230, 133, 97, 214, 230, 132, 97, 216, 230, 130, 97, 218, 230, 129, 97, 219, 230, 127, 98, 222, 230, 125, 100, 224, 230, 124, 100, 225, 230, 122, 103, 227, 230, 120, 105, 230, 230, 118, 106, 230, 230, 115, 108, 230, 230, 114, 109, 230, 230, 111, 112, 230, 230, 109, 115, 230, 230, 106, 116, 230, 230, 104, 118, 230, 230, 100, 121, 230, 230, 98, 124, 230, 230, 95, 126, 230, 230, 92, 129, 230, 230, 89, 132, 230, 230, 87, 134, 230, 230, 84, 138, 230, 230, 80, 140, 230, 230, 78, 143, 230, 230, 75, 145, 230, 230, 72, 148, 230, 230, 69, 151, 230, 230, 66, 153, 230, 230, 63, 155, 230, 230, 60, 159, 230, 230, 58, 162, 230, 230, 54, 164, 230, 230, 52, 168, 230, 230, 50, 170, 230, 230, 48, 173, 230, 230, 46, 176, 230, 230, 43, 179, 230, 230, 41, 181, 230, 230, 39, 184, 230, 230, 37, 187, 230, 230, 35, 189, 230, 230, 33, 192, 230, 230, 32, 194, 230, 230, 31, 197, 230, 230, 30, 198, 230, 230, 29, 201, 230, 230, 29, 203, 230, 230, 29, 205, 230, 230, 29, 207, 230, 230, 29, 209, 230, 230, 29, 210, 230, 230, 29, 212, 230, 230, 29, 214, 230, 230, 29, 215, 230, 230, 30, 216, 230, 230, 31, 217, 230, 230, 32, 219, 230, 230, 34, 219, 230, 230, 37, 221, 230, 230, 40, 222, 230, 230, 42, 223, 230, 230, 46, 224, 230, 230, 49, 225, 230, 230, 52, 225, 230, 230, 56, 225, 230, 230, 60, 226, 230, 230, 65, 227, 230, 230, 69, 227, 230, 230, 72, 228, 230, 230, 78, 228, 230, 230, 83, 228, 230, 230, 87, 230, 230, 230, 93, 230, 230, 230, 98, 230, 230, 230, 104, 230, 230, 230, 108, 230, 230, 230, 114, 230, 230, 230, 118, 230, 230, 230, 124, 230, 230, 230, 131, 230, 230, 230, 136, 230, 230, 230, 142, 230, 230, 230, 146, 230, 230, 230, 152, 230, 230, 230, 157, 230, 230, 230, 162, 230, 230, 230, 168, 230, 230, 230, 173, 230, 230, 230, 179, 230, 230, 230, 184, 230, 230, 230, 188, 230, 230, 230, 192, 230, 230, 230, 197, 230, 230, 230, 201, 230, 230, 230, 206, 230, 230, 230, 209, 230, 230, 230, 213, 230, 230, 230, 216, 230, 230, 230, 219, 230, 230, 230, 223, 230, 230, 230, 225, 230, 230, 230, 227, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 225, 225, 230, 230, 222, 222, 230, 230, 218, 218, 230, 230, 215, 215, 230, 230, 209, 209, 230, 230, 205, 205, 230, 230, 199, 199, 230, 230, 194, 194, 230, 230, 188, 188, 230, 230, 182, 182, 230, 230, 176, 176, 230, 230, 170, 170, 230, 230, 163, 163, 230, 230, 155, 155, 230, 230, 150, 150, 230, 230, 143, 143, 230, 230, 135, 135, 230, 230, 127, 127, 230, 230, 121, 121, 230, 230, 115, 115, 230, 230, 106, 106, 230, 230, 100, 99, 230, 230, 93, 93, 230, 230, 86, 86, 230, 230, 78, 78, 230, 230, 71, 71, 230, 230, 65, 65, 230, 230, 59, 59, 230, 230, 52, 52, 230, 230, 46, 46, 230, 230, 40, 40, 230, 230, 34, 34, 230, 230, 29, 29, 230, 230, 23, 23, 230, 230, 17, 17, 230, 230, 14, 14, 230, 230, 10, 10, 230, 230, 5, 5, 230];
                for (var a = R; a--;) i = t * (n[a] & 255) + e * (n[a] >> 8), o = 4 * (i | 0), s = 4 * a, r[s + 3] = u[o], r[s + 2] = u[o + 1], r[s + 1] = u[o + 2], r[s] = u[o + 3]
            }, Ln = function() {
                var e = tt[(cn - rt) / V | 0];
                if (!e || !e.loaded) return !1;
                var t = e.pixels,
                    n = (cn - e.time) / V,
                    i = 1 - n;
                return ENV.is_android ? kn(n, i, t, I.data) : Cn(n, i, t, I.data), p.putImageData(I, 0, 0), s ? h.style["-webkit-transform"] = "translate3d(" + (e.end_x * n - b) + "px, " + (e.end_y * n - velocity_offset_y) + "px, 0)" : o ? c.css("-ms-transform", "translate(" + (e.end_x * n - b) + "px, " + (e.end_y * n - velocity_offset_y) + "px)") : r ? c.css("-moz-transform", "translate(" + (e.end_x * n - b) + "px, " + (e.end_y * n - velocity_offset_y) + "px)") : h.style.transform = "translate(" + (e.end_x * n - b) + "px, " + (e.end_y * n - velocity_offset_y) + "px)", _t(), !0
            }, An = function(e, t, n, r, i, s, o, u, a, f, l, c) {
                var h = 0,
                    p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75448064, 162157824, 245586688, 347232512, 447764480, 565271552, 682776832, 817125888, 951147264, 1085496064, 1219779584, 1354062848, 1504992e3, 1639275520, 1773362176, 1924488448, 2058705664, -2102109184, -1967825920, -1850385152, -1732944640, -1632346880, -1531618048, -1447731968, -1363845888, -1296737024, -1280025598, -1280091129, -1280156660, -1280287983, -1280288490, -1280354021, -1280485344, -1280485849, -1280551379, -1280682956, -1280683461, -1280814526, -1280945846, -1280946350, -1281143207, -1281143710, -1281340566, -1281340815, -1281472390, -1281603455, -1281668984, -1281800047, -1281865575, -1282062176, -1282127703, -1282258768, -1282455369, -1282455362, -1282586426, -1282717491, -1282914094, -1282979623, -1283110689, -1283372827, -1283438359, -1283569425, -1283766029, -1283831561, -1284028166, -1284224001, -1284289281, -1284419585, -1284680961, -1284745985, -1284942081, -1285137921, -1285333761, -1285529345, -1285790721, -1285986305, -1286247169, -1286443009, -1286704129, -1286899713, -1287160833, -1287487233, -1287748097, -1287943937, -1288139009, -1288400129, -1288660993, -1288856577, -1289117441, -1289312769, -1289573889, -1289769473, -1290030081, -1290225665, -1290420993, -1290616577, -1290812161, -1291007745, -1291203073, -1291267329, -1291463169, -1291527681, -1291657473, -1291787777, -1291786753, -1291785729, -1291784961, -1291784193, -1291783425, -1291782657, -1291782145, -1291781377, -1291780865, -1291780097, -1291780097, -1291649025, -1291649025, -1291452417, -1291321345, -1291190273, -1290993665, -1290797057, -1290600449, -1290403841, -1290207233, -1289945089, -1289748481, -1289486337, -1289224193, -1289027585, -1288699905, -1288437761, -1288110081, -1287913473, -1287585793, -1287258113, -1286930433, -1286602753, -1286275073, -1285947393, -1285619713, -1285292033, -1285029889, -1284636673, -1284374529, -1283981313, -1283588097, -1283325953, -1282867201, -1282539521, -1282211841, -1281884161, -1281556481, -1281294337, -1280901121, -1280507905, -1280245761, -1279852545, -1279590401, -1279328257, -1278935041, -1278672897, -1278345217, -1278083073, -1277820929, -1277558785, -1277231105, -1277034497, -1276772353, -1276510209, -1276313601, -1276116993, -1275920385, -1275723777, -1275592705, -1275396097, -1275199489, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275397377, -1275660545, -1275923713, -1276252673, -1276581633, -1276910593, -1277371137, -1277700097, -1278226433, -1278555393, -1279015937, -1279476481, -1280002817, -1280463361, -1280923905, -1281450241, -1282042369, -1282502913, -1283095041, -1283555585, -1284081921, -1284542977, -1285068801, -1285595137, -1286187265, -1286647809, -1287108353, -1287568897, -1288029441, -1288489985, -1288950529, -1289345281, -1289740033, -1290200577, -1290595329, -1290858497, -1291121665, -1291516417];
                for (var d = R; d--;) h = t * (e[d] >> n & 255) + u * (o[d] >> a & 255) + i * (r[d] >> s & 255) + l * (f[d] >> c & 255), q[d] = p[h | 0]
            }, On = function() {
                var e = (cn - rt) / Sn,
                    t = xn - 1,
                    n = Math.max(0, e | 0),
                    r = n / En | 0,
                    i = n % En,
                    s = i * 8,
                    o = Math.min(n + 1, t),
                    u = o / En | 0,
                    a = o % En,
                    f = a * 8,
                    l = Math.max(0, n - 1),
                    c = l / En | 0,
                    h = l % En,
                    d = h * 8,
                    v = Math.min(n + 2, t),
                    m = v / En | 0,
                    g = v % En,
                    y = g * 8,
                    b = (tt[r] || {}).pixels,
                    w = (tt[u] || {}).pixels,
                    E = (tt[c] || {}).pixels,
                    S = (tt[m] || {}).pixels;
                if (!b || !w || !E || !S) return !1;
                var x = Math.max(0, e - n),
                    T = .25 + .25 * (1 - x),
                    N = .25 + .25 * x,
                    C = .25 * (1 - x),
                    k = .25 * x;
                return An(b, T, s, E, C, d, w, N, f, S, k, y), p.putImageData(I, 0, 0), _t(), !0
            }, Mn = function(e, t, n, r, i, s, o, u, a, f, l, c, h) {
                var p = 0,
                    d = 0,
                    v = 0,
                    m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75448064, 162157824, 245586688, 347232512, 447764480, 565271552, 682776832, 817125888, 951147264, 1085496064, 1219779584, 1354062848, 1504992e3, 1639275520, 1773362176, 1924488448, 2058705664, -2102109184, -1967825920, -1850385152, -1732944640, -1632346880, -1531618048, -1447731968, -1363845888, -1296737024, -1280025598, -1280091129, -1280156660, -1280287983, -1280288490, -1280354021, -1280485344, -1280485849, -1280551379, -1280682956, -1280683461, -1280814526, -1280945846, -1280946350, -1281143207, -1281143710, -1281340566, -1281340815, -1281472390, -1281603455, -1281668984, -1281800047, -1281865575, -1282062176, -1282127703, -1282258768, -1282455369, -1282455362, -1282586426, -1282717491, -1282914094, -1282979623, -1283110689, -1283372827, -1283438359, -1283569425, -1283766029, -1283831561, -1284028166, -1284224001, -1284289281, -1284419585, -1284680961, -1284745985, -1284942081, -1285137921, -1285333761, -1285529345, -1285790721, -1285986305, -1286247169, -1286443009, -1286704129, -1286899713, -1287160833, -1287487233, -1287748097, -1287943937, -1288139009, -1288400129, -1288660993, -1288856577, -1289117441, -1289312769, -1289573889, -1289769473, -1290030081, -1290225665, -1290420993, -1290616577, -1290812161, -1291007745, -1291203073, -1291267329, -1291463169, -1291527681, -1291657473, -1291787777, -1291786753, -1291785729, -1291784961, -1291784193, -1291783425, -1291782657, -1291782145, -1291781377, -1291780865, -1291780097, -1291780097, -1291649025, -1291649025, -1291452417, -1291321345, -1291190273, -1290993665, -1290797057, -1290600449, -1290403841, -1290207233, -1289945089, -1289748481, -1289486337, -1289224193, -1289027585, -1288699905, -1288437761, -1288110081, -1287913473, -1287585793, -1287258113, -1286930433, -1286602753, -1286275073, -1285947393, -1285619713, -1285292033, -1285029889, -1284636673, -1284374529, -1283981313, -1283588097, -1283325953, -1282867201, -1282539521, -1282211841, -1281884161, -1281556481, -1281294337, -1280901121, -1280507905, -1280245761, -1279852545, -1279590401, -1279328257, -1278935041, -1278672897, -1278345217, -1278083073, -1277820929, -1277558785, -1277231105, -1277034497, -1276772353, -1276510209, -1276313601, -1276116993, -1275920385, -1275723777, -1275592705, -1275396097, -1275199489, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275397377, -1275660545, -1275923713, -1276252673, -1276581633, -1276910593, -1277371137, -1277700097, -1278226433, -1278555393, -1279015937, -1279476481, -1280002817, -1280463361, -1280923905, -1281450241, -1282042369, -1282502913, -1283095041, -1283555585, -1284081921, -1284542977, -1285068801, -1285595137, -1286187265, -1286647809, -1287108353, -1287568897, -1288029441, -1288489985, -1288950529, -1289345281, -1289740033, -1290200577, -1290595329, -1290858497, -1291121665, -1291516417];
                for (var g = R; g--;) p = t * (e[g] >> n & 255) + u * (o[g] >> a & 255) + i * (r[g] >> s & 255) + l * (f[g] >> c & 255), v = m[p | 0], d = 4 * g, h[d + 3] = v >>> 24, h[d + 2] = v >> 16 & 255, h[d + 1] = v >> 8 & 255, h[d] = v & 255
            }, _n = function(e, t, n, r, i, s, o, u, a, f, l, c, h) {
                var p = 0,
                    d = 0,
                    v = 0,
                    m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 1, 0, 9, 6, 3, 0, 14, 9, 5, 0, 20, 14, 7, 0, 26, 18, 9, 0, 33, 23, 12, 0, 40, 28, 14, 0, 48, 34, 17, 0, 56, 39, 20, 0, 64, 45, 23, 0, 72, 51, 26, 0, 80, 57, 29, 0, 89, 63, 32, 0, 97, 69, 35, 0, 105, 74, 38, 0, 114, 81, 42, 0, 122, 87, 44, 0, 130, 92, 47, 0, 138, 98, 50, 0, 145, 103, 53, 0, 152, 108, 55, 0, 158, 112, 58, 0, 164, 116, 60, 0, 169, 120, 62, 0, 174, 124, 63, 0, 178, 126, 65, 0, 179, 126, 65, 1, 179, 126, 65, 5, 179, 125, 65, 8, 179, 124, 64, 12, 179, 124, 62, 15, 179, 123, 62, 19, 179, 121, 62, 22, 179, 121, 60, 27, 179, 121, 60, 32, 179, 119, 59, 37, 179, 119, 58, 41, 179, 118, 58, 46, 179, 117, 57, 52, 179, 117, 55, 58, 179, 114, 55, 62, 179, 114, 53, 69, 179, 112, 53, 74, 179, 112, 52, 79, 179, 111, 51, 86, 179, 110, 51, 91, 179, 109, 51, 95, 179, 107, 51, 102, 179, 107, 51, 107, 179, 105, 51, 112, 179, 104, 51, 119, 179, 102, 51, 124, 179, 100, 51, 128, 179, 100, 51, 133, 179, 99, 51, 139, 179, 98, 51, 144, 179, 95, 51, 147, 179, 95, 51, 152, 179, 93, 51, 157, 179, 91, 51, 161, 179, 90, 51, 164, 179, 88, 51, 168, 179, 86, 51, 171, 179, 86, 51, 173, 179, 84, 51, 175, 179, 81, 53, 179, 179, 81, 53, 179, 179, 79, 55, 179, 179, 77, 58, 179, 179, 76, 59, 179, 179, 74, 60, 179, 179, 72, 62, 179, 179, 69, 65, 179, 179, 67, 67, 179, 179, 65, 69, 179, 179, 62, 72, 179, 179, 60, 76, 179, 179, 58, 78, 179, 179, 55, 81, 179, 179, 53, 84, 179, 179, 50, 86, 179, 179, 46, 90, 179, 179, 44, 93, 179, 179, 41, 95, 179, 179, 39, 100, 179, 179, 37, 102, 179, 179, 34, 106, 179, 179, 32, 109, 179, 179, 29, 112, 179, 179, 27, 116, 179, 179, 24, 119, 179, 179, 22, 121, 179, 179, 19, 126, 179, 179, 17, 128, 179, 179, 15, 132, 179, 179, 13, 135, 179, 179, 11, 138, 179, 179, 8, 140, 179, 179, 6, 144, 179, 179, 6, 147, 179, 179, 4, 150, 179, 179, 3, 152, 179, 179, 1, 156, 179, 179, 0, 158, 179, 179, 0, 161, 179, 179, 0, 164, 179, 179, 0, 166, 179, 179, 0, 168, 179, 179, 0, 170, 179, 179, 0, 172, 179, 179, 0, 173, 179, 179, 0, 175, 179, 179, 0, 177, 179, 179, 0, 179, 179, 179, 0, 179, 179, 179, 1, 179, 179, 179, 1, 179, 179, 179, 4, 179, 179, 179, 5, 179, 179, 179, 6, 179, 179, 179, 8, 179, 179, 179, 11, 179, 179, 179, 13, 179, 179, 179, 15, 179, 179, 179, 17, 179, 179, 179, 20, 179, 179, 179, 22, 179, 179, 179, 25, 179, 179, 179, 27, 179, 179, 179, 29, 179, 179, 179, 33, 179, 179, 179, 36, 179, 179, 179, 39, 179, 179, 179, 41, 179, 179, 179, 45, 179, 179, 179, 48, 179, 179, 179, 52, 179, 179, 179, 55, 179, 179, 179, 59, 179, 179, 179, 62, 179, 179, 179, 66, 179, 179, 179, 69, 179, 179, 179, 72, 179, 179, 179, 77, 179, 179, 179, 79, 179, 179, 179, 84, 179, 179, 179, 88, 179, 179, 179, 91, 179, 179, 179, 95, 179, 179, 179, 99, 179, 179, 179, 102, 179, 179, 179, 106, 179, 179, 179, 110, 179, 179, 179, 112, 179, 179, 179, 117, 179, 179, 179, 121, 179, 179, 179, 124, 179, 179, 179, 128, 179, 179, 179, 131, 179, 179, 179, 133, 179, 179, 179, 138, 179, 179, 179, 140, 179, 179, 179, 144, 179, 179, 179, 147, 179, 179, 179, 150, 179, 179, 179, 152, 179, 179, 179, 156, 179, 179, 179, 158, 179, 179, 179, 161, 179, 179, 179, 164, 179, 179, 179, 166, 179, 179, 179, 168, 179, 179, 179, 170, 179, 179, 179, 172, 179, 179, 179, 173, 179, 179, 179, 175, 179, 179, 179, 178, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 175, 175, 179, 179, 173, 173, 179, 179, 170, 170, 179, 179, 166, 166, 179, 179, 163, 163, 179, 179, 159, 159, 179, 179, 154, 154, 179, 179, 151, 151, 179, 179, 145, 145, 179, 179, 142, 142, 179, 179, 137, 137, 179, 179, 132, 132, 179, 179, 126, 126, 179, 179, 121, 121, 179, 179, 117, 117, 179, 179, 111, 111, 179, 179, 105, 105, 179, 179, 100, 100, 179, 179, 93, 93, 179, 179, 88, 88, 179, 179, 83, 83, 179, 179, 78, 77, 179, 179, 72, 72, 179, 179, 67, 67, 179, 179, 60, 60, 179, 179, 55, 55, 179, 179, 51, 51, 179, 179, 46, 46, 179, 179, 41, 41, 179, 179, 36, 36, 179, 179, 31, 31, 179, 179, 27, 27, 179, 179, 22, 22, 179, 179, 18, 18, 179, 179, 13, 13, 179, 179, 11, 11, 179, 179, 8, 8, 179, 179, 4, 4, 179];
                for (var g = R; g--;) p = t * (e[g] >> n & 255) + u * (o[g] >> a & 255) + i * (r[g] >> s & 255) + l * (f[g] >> c & 255), v = 4 * (p | 0), d = 4 * g, h[d + 3] = m[v], h[d + 2] = m[v + 1], h[d + 1] = m[v + 2], h[d] = m[v + 3]
            }, Dn = function() {
                var e = (cn - rt) / Sn,
                    t = xn - 1,
                    n = Math.max(0, e | 0),
                    r = n / En | 0,
                    i = n % En,
                    s = i * 8,
                    o = Math.min(n + 1, t),
                    u = o / En | 0,
                    a = o % En,
                    f = a * 8,
                    l = Math.max(0, n - 1),
                    c = l / En | 0,
                    h = l % En,
                    d = h * 8,
                    v = Math.min(n + 2, t),
                    m = v / En | 0,
                    g = v % En,
                    y = g * 8,
                    b = (tt[r] || {}).pixels,
                    w = (tt[u] || {}).pixels,
                    E = (tt[c] || {}).pixels,
                    S = (tt[m] || {}).pixels;
                if (!b || !w || !E || !S) return !1;
                var x = Math.max(0, e - n),
                    T = .25 + .25 * (1 - x),
                    N = .25 + .25 * x,
                    C = .25 * (1 - x),
                    k = .25 * x;
                return ENV.is_android ? _n(b, T, s, E, C, d, w, N, f, S, k, y, I.data) : Mn(b, T, s, E, C, d, w, N, f, S, k, y, I.data), p.putImageData(I, 0, 0), _t(), !0
            }, Pn = function(e, t, n, r, i, s) {
                var o = 0,
                    u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75448064, 162157824, 245586688, 347232512, 447764480, 565271552, 682776832, 817125888, 951147264, 1085496064, 1219779584, 1354062848, 1504992e3, 1639275520, 1773362176, 1924488448, 2058705664, -2102109184, -1967825920, -1850385152, -1732944640, -1632346880, -1531618048, -1447731968, -1363845888, -1296737024, -1280025598, -1280091129, -1280156660, -1280287983, -1280288490, -1280354021, -1280485344, -1280485849, -1280551379, -1280682956, -1280683461, -1280814526, -1280945846, -1280946350, -1281143207, -1281143710, -1281340566, -1281340815, -1281472390, -1281603455, -1281668984, -1281800047, -1281865575, -1282062176, -1282127703, -1282258768, -1282455369, -1282455362, -1282586426, -1282717491, -1282914094, -1282979623, -1283110689, -1283372827, -1283438359, -1283569425, -1283766029, -1283831561, -1284028166, -1284224001, -1284289281, -1284419585, -1284680961, -1284745985, -1284942081, -1285137921, -1285333761, -1285529345, -1285790721, -1285986305, -1286247169, -1286443009, -1286704129, -1286899713, -1287160833, -1287487233, -1287748097, -1287943937, -1288139009, -1288400129, -1288660993, -1288856577, -1289117441, -1289312769, -1289573889, -1289769473, -1290030081, -1290225665, -1290420993, -1290616577, -1290812161, -1291007745, -1291203073, -1291267329, -1291463169, -1291527681, -1291657473, -1291787777, -1291786753, -1291785729, -1291784961, -1291784193, -1291783425, -1291782657, -1291782145, -1291781377, -1291780865, -1291780097, -1291780097, -1291649025, -1291649025, -1291452417, -1291321345, -1291190273, -1290993665, -1290797057, -1290600449, -1290403841, -1290207233, -1289945089, -1289748481, -1289486337, -1289224193, -1289027585, -1288699905, -1288437761, -1288110081, -1287913473, -1287585793, -1287258113, -1286930433, -1286602753, -1286275073, -1285947393, -1285619713, -1285292033, -1285029889, -1284636673, -1284374529, -1283981313, -1283588097, -1283325953, -1282867201, -1282539521, -1282211841, -1281884161, -1281556481, -1281294337, -1280901121, -1280507905, -1280245761, -1279852545, -1279590401, -1279328257, -1278935041, -1278672897, -1278345217, -1278083073, -1277820929, -1277558785, -1277231105, -1277034497, -1276772353, -1276510209, -1276313601, -1276116993, -1275920385, -1275723777, -1275592705, -1275396097, -1275199489, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275397377, -1275660545, -1275923713, -1276252673, -1276581633, -1276910593, -1277371137, -1277700097, -1278226433, -1278555393, -1279015937, -1279476481, -1280002817, -1280463361, -1280923905, -1281450241, -1282042369, -1282502913, -1283095041, -1283555585, -1284081921, -1284542977, -1285068801, -1285595137, -1286187265, -1286647809, -1287108353, -1287568897, -1288029441, -1288489985, -1288950529, -1289345281, -1289740033, -1290200577, -1290595329, -1290858497, -1291121665, -1291516417];
                for (var a = R; a--;) o = t * (e[a] >> n & 255) + i * (r[a] >> s & 255), q[a] = u[o | 0]
            }, Hn = function() {
                var e = (cn - rt) / Sn,
                    t = Math.max(0, e | 0),
                    n = t / En | 0,
                    r = t % En,
                    i = r * 8,
                    s = Math.min(t + 1, xn - 1),
                    o = s / En | 0,
                    u = s % En,
                    a = u * 8,
                    f = tt[n].pixels,
                    l = tt[o].pixels;
                if (!f || !l) return !1;
                var c = Math.max(0, e - t),
                    h = 1 - c;
                return Pn(f, h, i, l, c, a), p.putImageData(I, 0, 0), _t(), !0
            }, Bn = function(e, t, n, r, i, s, o) {
                var u = 0,
                    a = 0,
                    f = 0,
                    l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75448064, 162157824, 245586688, 347232512, 447764480, 565271552, 682776832, 817125888, 951147264, 1085496064, 1219779584, 1354062848, 1504992e3, 1639275520, 1773362176, 1924488448, 2058705664, -2102109184, -1967825920, -1850385152, -1732944640, -1632346880, -1531618048, -1447731968, -1363845888, -1296737024, -1280025598, -1280091129, -1280156660, -1280287983, -1280288490, -1280354021, -1280485344, -1280485849, -1280551379, -1280682956, -1280683461, -1280814526, -1280945846, -1280946350, -1281143207, -1281143710, -1281340566, -1281340815, -1281472390, -1281603455, -1281668984, -1281800047, -1281865575, -1282062176, -1282127703, -1282258768, -1282455369, -1282455362, -1282586426, -1282717491, -1282914094, -1282979623, -1283110689, -1283372827, -1283438359, -1283569425, -1283766029, -1283831561, -1284028166, -1284224001, -1284289281, -1284419585, -1284680961, -1284745985, -1284942081, -1285137921, -1285333761, -1285529345, -1285790721, -1285986305, -1286247169, -1286443009, -1286704129, -1286899713, -1287160833, -1287487233, -1287748097, -1287943937, -1288139009, -1288400129, -1288660993, -1288856577, -1289117441, -1289312769, -1289573889, -1289769473, -1290030081, -1290225665, -1290420993, -1290616577, -1290812161, -1291007745, -1291203073, -1291267329, -1291463169, -1291527681, -1291657473, -1291787777, -1291786753, -1291785729, -1291784961, -1291784193, -1291783425, -1291782657, -1291782145, -1291781377, -1291780865, -1291780097, -1291780097, -1291649025, -1291649025, -1291452417, -1291321345, -1291190273, -1290993665, -1290797057, -1290600449, -1290403841, -1290207233, -1289945089, -1289748481, -1289486337, -1289224193, -1289027585, -1288699905, -1288437761, -1288110081, -1287913473, -1287585793, -1287258113, -1286930433, -1286602753, -1286275073, -1285947393, -1285619713, -1285292033, -1285029889, -1284636673, -1284374529, -1283981313, -1283588097, -1283325953, -1282867201, -1282539521, -1282211841, -1281884161, -1281556481, -1281294337, -1280901121, -1280507905, -1280245761, -1279852545, -1279590401, -1279328257, -1278935041, -1278672897, -1278345217, -1278083073, -1277820929, -1277558785, -1277231105, -1277034497, -1276772353, -1276510209, -1276313601, -1276116993, -1275920385, -1275723777, -1275592705, -1275396097, -1275199489, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275068417, -1275397377, -1275660545, -1275923713, -1276252673, -1276581633, -1276910593, -1277371137, -1277700097, -1278226433, -1278555393, -1279015937, -1279476481, -1280002817, -1280463361, -1280923905, -1281450241, -1282042369, -1282502913, -1283095041, -1283555585, -1284081921, -1284542977, -1285068801, -1285595137, -1286187265, -1286647809, -1287108353, -1287568897, -1288029441, -1288489985, -1288950529, -1289345281, -1289740033, -1290200577, -1290595329, -1290858497, -1291121665, -1291516417];
                for (var c = R; c--;) u = t * (e[c] >> n & 255) + i * (r[c] >> s & 255), f = l[u | 0], a = 4 * c, o[a + 3] = f >>> 24, o[a + 2] = f >> 16 & 255, o[a + 1] = f >> 8 & 255, o[a] = f & 255
            }, jn = function(e, t, n, r, i, s, o) {
                var u = 0,
                    a = 0,
                    f = 0,
                    l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 1, 0, 9, 6, 3, 0, 14, 9, 5, 0, 20, 14, 7, 0, 26, 18, 9, 0, 33, 23, 12, 0, 40, 28, 14, 0, 48, 34, 17, 0, 56, 39, 20, 0, 64, 45, 23, 0, 72, 51, 26, 0, 80, 57, 29, 0, 89, 63, 32, 0, 97, 69, 35, 0, 105, 74, 38, 0, 114, 81, 42, 0, 122, 87, 44, 0, 130, 92, 47, 0, 138, 98, 50, 0, 145, 103, 53, 0, 152, 108, 55, 0, 158, 112, 58, 0, 164, 116, 60, 0, 169, 120, 62, 0, 174, 124, 63, 0, 178, 126, 65, 0, 179, 126, 65, 1, 179, 126, 65, 5, 179, 125, 65, 8, 179, 124, 64, 12, 179, 124, 62, 15, 179, 123, 62, 19, 179, 121, 62, 22, 179, 121, 60, 27, 179, 121, 60, 32, 179, 119, 59, 37, 179, 119, 58, 41, 179, 118, 58, 46, 179, 117, 57, 52, 179, 117, 55, 58, 179, 114, 55, 62, 179, 114, 53, 69, 179, 112, 53, 74, 179, 112, 52, 79, 179, 111, 51, 86, 179, 110, 51, 91, 179, 109, 51, 95, 179, 107, 51, 102, 179, 107, 51, 107, 179, 105, 51, 112, 179, 104, 51, 119, 179, 102, 51, 124, 179, 100, 51, 128, 179, 100, 51, 133, 179, 99, 51, 139, 179, 98, 51, 144, 179, 95, 51, 147, 179, 95, 51, 152, 179, 93, 51, 157, 179, 91, 51, 161, 179, 90, 51, 164, 179, 88, 51, 168, 179, 86, 51, 171, 179, 86, 51, 173, 179, 84, 51, 175, 179, 81, 53, 179, 179, 81, 53, 179, 179, 79, 55, 179, 179, 77, 58, 179, 179, 76, 59, 179, 179, 74, 60, 179, 179, 72, 62, 179, 179, 69, 65, 179, 179, 67, 67, 179, 179, 65, 69, 179, 179, 62, 72, 179, 179, 60, 76, 179, 179, 58, 78, 179, 179, 55, 81, 179, 179, 53, 84, 179, 179, 50, 86, 179, 179, 46, 90, 179, 179, 44, 93, 179, 179, 41, 95, 179, 179, 39, 100, 179, 179, 37, 102, 179, 179, 34, 106, 179, 179, 32, 109, 179, 179, 29, 112, 179, 179, 27, 116, 179, 179, 24, 119, 179, 179, 22, 121, 179, 179, 19, 126, 179, 179, 17, 128, 179, 179, 15, 132, 179, 179, 13, 135, 179, 179, 11, 138, 179, 179, 8, 140, 179, 179, 6, 144, 179, 179, 6, 147, 179, 179, 4, 150, 179, 179, 3, 152, 179, 179, 1, 156, 179, 179, 0, 158, 179, 179, 0, 161, 179, 179, 0, 164, 179, 179, 0, 166, 179, 179, 0, 168, 179, 179, 0, 170, 179, 179, 0, 172, 179, 179, 0, 173, 179, 179, 0, 175, 179, 179, 0, 177, 179, 179, 0, 179, 179, 179, 0, 179, 179, 179, 1, 179, 179, 179, 1, 179, 179, 179, 4, 179, 179, 179, 5, 179, 179, 179, 6, 179, 179, 179, 8, 179, 179, 179, 11, 179, 179, 179, 13, 179, 179, 179, 15, 179, 179, 179, 17, 179, 179, 179, 20, 179, 179, 179, 22, 179, 179, 179, 25, 179, 179, 179, 27, 179, 179, 179, 29, 179, 179, 179, 33, 179, 179, 179, 36, 179, 179, 179, 39, 179, 179, 179, 41, 179, 179, 179, 45, 179, 179, 179, 48, 179, 179, 179, 52, 179, 179, 179, 55, 179, 179, 179, 59, 179, 179, 179, 62, 179, 179, 179, 66, 179, 179, 179, 69, 179, 179, 179, 72, 179, 179, 179, 77, 179, 179, 179, 79, 179, 179, 179, 84, 179, 179, 179, 88, 179, 179, 179, 91, 179, 179, 179, 95, 179, 179, 179, 99, 179, 179, 179, 102, 179, 179, 179, 106, 179, 179, 179, 110, 179, 179, 179, 112, 179, 179, 179, 117, 179, 179, 179, 121, 179, 179, 179, 124, 179, 179, 179, 128, 179, 179, 179, 131, 179, 179, 179, 133, 179, 179, 179, 138, 179, 179, 179, 140, 179, 179, 179, 144, 179, 179, 179, 147, 179, 179, 179, 150, 179, 179, 179, 152, 179, 179, 179, 156, 179, 179, 179, 158, 179, 179, 179, 161, 179, 179, 179, 164, 179, 179, 179, 166, 179, 179, 179, 168, 179, 179, 179, 170, 179, 179, 179, 172, 179, 179, 179, 173, 179, 179, 179, 175, 179, 179, 179, 178, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 175, 175, 179, 179, 173, 173, 179, 179, 170, 170, 179, 179, 166, 166, 179, 179, 163, 163, 179, 179, 159, 159, 179, 179, 154, 154, 179, 179, 151, 151, 179, 179, 145, 145, 179, 179, 142, 142, 179, 179, 137, 137, 179, 179, 132, 132, 179, 179, 126, 126, 179, 179, 121, 121, 179, 179, 117, 117, 179, 179, 111, 111, 179, 179, 105, 105, 179, 179, 100, 100, 179, 179, 93, 93, 179, 179, 88, 88, 179, 179, 83, 83, 179, 179, 78, 77, 179, 179, 72, 72, 179, 179, 67, 67, 179, 179, 60, 60, 179, 179, 55, 55, 179, 179, 51, 51, 179, 179, 46, 46, 179, 179, 41, 41, 179, 179, 36, 36, 179, 179, 31, 31, 179, 179, 27, 27, 179, 179, 22, 22, 179, 179, 18, 18, 179, 179, 13, 13, 179, 179, 11, 11, 179, 179, 8, 8, 179, 179, 4, 4, 179];
                for (var c = R; c--;) u = t * (e[c] >> n & 255) + i * (r[c] >> s & 255), f = 4 * (u | 0), a = 4 * c, o[a + 3] = l[f], o[a + 2] = l[f + 1], o[a + 1] = l[f + 2], o[a] = l[f + 3]
            }, Fn = function() {
                var e = (cn - rt) / Sn,
                    t = Math.max(0, e | 0),
                    n = t / En | 0,
                    r = t % En,
                    i = r * 8,
                    s = Math.min(t + 1, xn - 1),
                    o = s / En | 0,
                    u = s % En,
                    a = u * 8,
                    f = tt[n].pixels,
                    l = tt[o].pixels;
                if (!f || !l) return !1;
                var c = Math.max(0, e - t),
                    h = 1 - c;
                return ENV.is_android ? jn(f, h, i, l, c, a, I.data) : Bn(f, h, i, l, c, a, I.data), p.putImageData(I, 0, 0), _t(), !0
            }, In = function() {}, qn = function() {
                if (pn) {
                    var e = Date.now(),
                        t = (e - ln) / 1e3;
                    ln = e, cn += t * hn, cn > ot && (cn = st)
                }
                In(), (pn || Bt) && requestAnimFrame(qn)
            }, Rn = function() {
                Dt()
            }, Un = null,
            zn = !1;
        a.start_animation = function() {
            if (pn) return;
            if (nt.length < 2) return setTimeout(a.start_animation, 250);
            cn || (cn = st + 1);
            for (var e = nt.length; e--;)
                if (cn >= nt[e] && cn < nt[e + 1]) {
                    vn = tt[e], mn = tt[e + 1];
                    break
                }
            U == 0 ? hn = 800 : U == 2 ? hn = 3e4 : hn = 6e4, pn = !0, gn = !0, ln = Date.now(), qn(), Un = setInterval(Rn, 100), ENV.is_mobile || UIManager.outlook_icons.pause();
            if (ENV.is_tablet || !window.mobile && ENV.is_mobile) UIManager.overview_icons.pause(), UIManager.stop_wobble();
            O.removeClass("playing").addClass("playing")
        }, a.stop_animation = function() {
            pn = !1, O.removeClass("playing").addClass("paused"), clearInterval(Un), Dt(), ENV.is_mobile || UIManager.outlook_icons.play();
            if (ENV.is_tablet || !window.mobile && ENV.is_mobile) UIManager.overview_icons.play(), UIManager.start_wobble()
        };
        var Wn = function(e) {
            e && (e.preventDefault(), e.stopPropagation()), pn ? a.stop_animation() : a.start_animation()
        }, Xn, Vn = function() {
                l.css("background", "transparent");
                var e = "";
                ENV.is_retina && (ENV.is_tablet ? e = "_1160" : e = "_1000"), f.addClass("background_loading");
                var t = "http://darkskysatellitemaps.s3.amazonaws.com/" + Z.sid + e + ".png?1",
                    n = new Image;
                n.onload = function() {
                    l.css("background", "transparent url(" + t + ") " + -S + "px 50% no-repeat").css("background-size", (U == 3 ? w : E) + "px"), f.removeClass("background_loading")
                }, n.src = t, Xn && Xn.abort(), Xn = $.ajax({
                    url: "http://darkskysatellitemaps.s3.amazonaws.com/" + Z.sid + "_cities.js",
                    dataType: "jsonp"
                })
            };
        a.load_cities = function(e) {
            j.empty();
            var t;
            for (var n = e.length; n--;) {
                t = e[n];
                var r = Lt(t[1], t[2]);
                $('<span class="city"></span>').css({
                    left: r[0] - 4,
                    top: r[1] - 6
                }).addClass("size" + t[3]).html("&#9679;" + t[0]).appendTo(j)
            }
        };
        var $n = function() {
            var e = Lt(G, Y);
            F.css({
                left: e[0] - F.width() / 2,
                top: e[1] - F.height() + 6
            }).show()
        }, Jn = function(e, t) {
                if (e == U && !t) return !0;
                pn && a.stop_animation();
                var n = !1;
                for (var i = 0; i < et.length; i++)
                    if (+et[i].sid[0] == e) {
                        n = !0, Z = et[i];
                        break
                    }
                if (!n) return !1;
                Nt(Z.lat, Z.lon, Z.theta, Z.phi, Z.zoom), U = e, f.removeClass("level0").removeClass("level2").removeClass("level3").addClass("level" + U), L.empty(), U == 0 ? (z = 18, W = 8, X = 1.5, V = 600) : (z = 9, W = 10, X = 174, V = 64800, En = 3, Sn = V / En);
                if (window.mobile) {
                    if (U == 3) a.resize($(window).width(), $(window).width(), 5), $("#map .map_container, #map .global_shadow").css("margin-top", ($("#map_area").height() - l.height() - $("#map .top_bar").height()) / 2);
                    else {
                        var s = $(window).height() - $("#search_area").height() - $("#map .top_bar").height(),
                            o = $(window).width();
                        a.resize(o, s, 0), l.css("margin-top", 0)
                    }
                    D.css({
                        top: $("#map .top_bar").height() + 1,
                        height: $("#map_area").height() - $("#map .top_bar").height()
                    })
                }
                return rr(), In = U == 0 ? Nn : Q ? On : Hn, p.clearRect(0, 0, m, g), r ? c.css("-moz-transform", "translate(0px, 0px)") : h.style["-webkit-transform"] = "translate3d(0, 0, 0)", gn = !1, cn = Time.now(), B.find("li").removeClass("selected"), B.find("li.level" + U).addClass("selected"), Vn(), window.mobile ? Q && an() : Q ? an() : fn(), $n(), !0
            }, Kn = !1,
            Qn = null,
            Gn = function() {
                Kn = !0, $("#map .map_container .loading").show()
            }, Yn = function(e) {
                if (!Kn) return;
                clearTimeout(Qn);
                if (!tt.length) {
                    f.addClass("disabled"), $("#map .map_container .loading").hide(), $("#map .disabled").show();
                    return
                }
                f.removeClass("disabled"), $("#map .disabled").hide();
                if (cn < st || cn > ot) cn = Time.now();
                var t = cn - cn % V,
                    n = t + V;
                if (nt.indexOf(t) == -1 || nt.indexOf(n) == -1) {
                    if (!e) {
                        Qn = setTimeout(Yn, 250);
                        return
                    }
                    cn = st
                }
                if (!In()) {
                    Qn = setTimeout(Yn, 250);
                    return
                }
                Kn = !1, _t(!0), Dt(), $("#map .map_container .loading").hide()
            }, Zn = !1,
            er = null,
            tr = function() {
                if (window.mobile) return;
                clearTimeout(er), f.removeClass("hide_controls")
            }, nr = function() {
                if (window.mobile || Zn || pn || Bt) return;
                clearTimeout(er), er = setTimeout(function() {
                    f.addClass("hide_controls")
                }, 1e3)
            }, rr = function() {
                for (var e = 0; e < tt.length; e++) tt[e].img = tt[e].pixels = null;
                Rt = [], Ut = !1, nt = [], tt = [], sn = [], rt = it = 0, st = ot = 0, vn = mn = 0, cn = Time.now(), jt = !1, Gn()
            }, ir = function() {
                B.empty();
                if (et.length <= 1) {
                    window.mobile ? $("#map .top_bar .global").show() : $("#map .top_bar").addClass("only_global"), B.hide();
                    return
                }
                $("#map .top_bar .global").hide(), $("#map .top_bar").removeClass("only_global");
                var e = 80;
                for (var t = 0; t < et.length; t++)(function(t) {
                    var n = +et[t].sid[0],
                        r = n == 0 ? "Local" : n == 2 ? "Regional" : "Global";
                    $("<li><a>" + r + "</a></li>").css("width", e).addClass("level" + n).click(function(e) {
                        e.stopPropagation(), e.preventDefault(), Jn(n)
                    }).appendTo(B)
                })(t);
                var n = 1 + et.length + et.length * e,
                    r = (f.width() - n) / 2;
                B.css({
                    width: n
                }), $("#map .top_bar .label, #map .top_bar .time").css("width", r), B.find("li").removeClass("selected"), U != null && B.find("li.level" + U).addClass("selected"), B.show()
            }, sr = !1;
        a.initialize = function(e) {
            f.bind("mouseover", function() {
                Zn = !0, tr()
            }), f.bind("mouseout", function() {
                Zn = !1, nr()
            }), !ENV.is_mobile && !ENV.is_tablet && (F.bind("mouseover", function() {
                F.addClass("highlighted")
            }), F.bind("mousedown", function() {
                F.addClass("highlighted")
            }), F.bind("mouseout", function() {
                F.removeClass("highlighted")
            }), F.draggable({
                stop: function(e, t) {
                    F.removeClass("highlighted");
                    var n = t.position.left + F.width() / 2,
                        r = t.position.top + F.height() - 6,
                        i = At(n, r);
                    i ? setTimeout(function() {
                        K = !0;
                        var e = At(n, r);
                        e && Router.set_latlon_hash("f", e[0], e[1], null, null, !0)
                    }, 500) : F.animate({
                        top: [t.originalPosition.top, "linear"],
                        left: [t.originalPosition.left, "linear"]
                    }, 300)
                }
            })), $("#map .loading").show(), ENV.is_tablet && ($("#map .load_animation").addClass("hidden"), $("#map .load_animation_small").addClass("hidden")), C = $("<canvas />"), C.css({
                position: "absolute",
                top: -2 * E,
                left: -2 * w
            }), C.attr("width", m), C.attr("height", g), C.appendTo($("body")), k = C[0].getContext("2d"), n = !! k.createImageData(1, 1).data.buffer, n ? ENV.is_iphone ? ENV.is_retina ? y = .725 : y = .5 : ENV.is_webkit && ENV.is_tablet ? ENV.is_retina ? y = .6 : y = .5 : ENV.is_mobile || ENV.is_tablet ? y = .6 : y = 1 : (y = ENV.is_old_ie ? .7 : .7, Nn = Ln, On = Dn, Hn = Fn), window.mobile || (M.css("width", _), A.find(".play_button").click(Wn)), D = new Slider(D, {
                change: Pt,
                start: Ft,
                stop: It,
                stop_animating_to: qt,
                move_on_down: window.mobile ? !1 : !0,
                max_speed: ENV.is_mobile || ENV.is_tablet ? .2 : .35
            }), window.mobile && (D.bind("touchstart", function() {
                $("#map .slider .handle").removeClass("minimized")
            }), D.bind("touchend", function() {
                $("#map .slider .handle").addClass("minimized")
            }), D.bind("tap", Wn), $("#map .top_bar").bind("touchmove", function(e) {
                e.preventDefault(), e.stopPropagation()
            })), sr = !0, typeof e == "function" && e()
        };
        var or;
        return a.set = function(e) {
            clearTimeout(or);
            if (!sr) return setTimeout(function() {
                a.set(e)
            }, 200);
            G = e.latitude, Y = e.longitude, Time.correction = e.currently.time - Math.round((new Date).getTime() / 1e3);
            var t = new Date(1e3 * Time.now());
            t.setHours(0, 0, 0, 0), J = Math.round(t.getTime() / 1e3) + 3600 * Forecaster.tz_offset_from_local;
            var n = e.flags.satellites,
                r = n.length != et.length,
                i = !1,
                s = [!1, !1, !1, !1];
            for (var o = 0; o < n.length; o++) {
                s[+n[o].sid[0]] = !0;
                if (!et[o] || et[o].sid != n[o].sid) r = !0;
                Z && Z.sid == n[o].sid && (i = !0)
            }
            var u = null;
            if (r) {
                et = n, ir();
                if (K && U != null && s[U]) u = U;
                else {
                    Q = !1, f.removeClass("animation_loaded"), zn = !0;
                    var l = window.mobile ? Math.max(0, et.length - 2) : Math.max(0, et.length - 1);
                    u = +et[l].sid[0]
                }
                i || Jn(u, !0)
            }(!K || !i || r && U != u) && $n(), K = !1
        }, a.load_animation = function() {
            if (Q || !window.mobile && !tt.length) return;
            $(window).height() < f.height() + f.position().top && $("html, body").animate({
                scrollTop: f.position().top + 10
            }, 250), Q = !0, f.addClass("animation_loaded"), Jn(U, !0)
        }, $("#map .map_container, #map .load_animation, #map .load_animation_small").click(function() {
            Q ? Wn() : a.load_animation(), ENV.is_tablet && tr()
        }), a.images = function() {
            return tt
        }, a
    }(),
    test_data = {
        days: [{
            temperatureMin: 23.17035980346019,
            temperatureMax: 33.76026401883471,
            temperatureError: 10.354621367561817,
            windSpeed: 8.82938623743374,
            humidity: .6728126485717144,
            cloudCover: .6071039826409974,
            precipProbability: .09468224757527684
        }, {
            temperatureMin: 23.03806588240459,
            temperatureMax: 33.624405826855615,
            temperatureError: 10.376858020305313,
            windSpeed: 8.845552979699072,
            humidity: .6718992238326474,
            cloudCover: .6036108457964805,
            precipProbability: .09221234206572641
        }, {
            temperatureMin: 22.911793603264066,
            temperatureMax: 33.495918094251984,
            temperatureError: 10.398012367583577,
            windSpeed: 8.861699364749162,
            humidity: .6709881516307767,
            cloudCover: .5995135193155362,
            precipProbability: .08621764349867582
        }, {
            temperatureMin: 22.791580383240106,
            temperatureMax: 33.374838894711985,
            temperatureError: 10.418047124802838,
            windSpeed: 8.877823519968937,
            humidity: .6700797019364582,
            cloudCover: .5978184415270897,
            precipProbability: .08604306939500457
        }, {
            temperatureMin: 22.677461844104215,
            temperatureMax: 33.26120410661554,
            temperatureError: 10.436926681997358,
            windSpeed: 8.893923406436588,
            humidity: .6691741439429418,
            cloudCover: .5994313739477316,
            precipProbability: .09261464228104027
        }, {
            temperatureMin: 22.569471801642436,
            temperatureMax: 33.1550474024028,
            temperatureError: 10.454617193501209,
            windSpeed: 8.909996816281469,
            humidity: .6682717459866053,
            cloudCover: .6029238150969634,
            precipProbability: .10083986206223572
        }, {
            temperatureMin: 22.467642255634928,
            temperatureMax: 33.0564002385963,
            temperatureError: 10.47108666330566,
            windSpeed: 8.92604137030081,
            humidity: .6673727754674378,
            cloudCover: .6056515183021386,
            precipProbability: .10642962195052778
        }, {
            temperatureMin: 22.372003380373854,
            temperatureMax: 32.96529184647961,
            temperatureError: 10.486305025876094,
            windSpeed: 8.942054515839597,
            humidity: .6664774987698059,
            cloudCover: .6054850469117645,
            precipProbability: .10450246046258481
        }, {
            temperatureMin: 22.282583515722013,
            temperatureMax: 32.88174922343562,
            temperatureError: 10.50024422221427,
            windSpeed: 8.958033524937528,
            humidity: .6655861811835168,
            cloudCover: .6020959000989803,
            precipProbability: .09760766171279613
        }, {
            temperatureMin: 22.19940915871514,
            temperatureMax: 32.80579712494654,
            temperatureError: 10.512878270964348,
            windSpeed: 8.973975492746723,
            humidity: .6646990868252071,
            cloudCover: .5970480152756149,
            precipProbability: .09678478071564293
        }, {
            temperatureMin: 22.122504955710266,
            temperatureMax: 32.73745805725833,
            temperatureError: 10.524183334374179,
            windSpeed: 8.989877336223481,
            humidity: .6638164785600806,
            cloudCover: .5926830653067453,
            precipProbability: .10212736676559535
        }, {
            temperatureMin: 22.05189369508245,
            temperatureMax: 32.67675227071162,
            temperatureError: 10.534137778936946,
            windSpeed: 9.005735793097061,
            humidity: .6629386179240142,
            cloudCover: .5905207160276971,
            precipProbability: .10230843029897074
        }, {
            temperatureMin: 21.98759630047217,
            temperatureMax: 32.623697753741084,
            temperatureError: 10.54272223055239,
            windSpeed: 9.021547421118079,
            humidity: .6620657650460609,
            cloudCover: .5901906032461482,
            precipProbability: .09732766933285993
        }, {
            temperatureMin: 21.92963182458508,
            temperatureMax: 32.57831022754514,
            temperatureError: 10.54991962406118,
            windSpeed: 9.037308597588781,
            humidity: .6611981785713655,
            cloudCover: .5895966938133262,
            precipProbability: .09646429728329547
        }, {
            temperatureMin: 21.878017443546376,
            temperatureMax: 32.54060314142733,
            temperatureError: 10.555715247021118,
            windSpeed: 9.053015519177114,
            humidity: .6603361155845243,
            cloudCover: .5862704114119445,
            precipProbability: .09917971199746417
        }, {
            temperatureMin: 21.832768451811052,
            temperatureMax: 32.51058766881106,
            temperatureError: 10.56009677760881,
            windSpeed: 9.068664202016057,
            humidity: .6594798315334053,
            cloudCover: .5791324198506764,
            precipProbability: .09935279822733563
        }, {
            temperatureMin: 21.793898257631927,
            temperatureMax: 32.48827270392865,
            temperatureError: 10.563054316546305,
            windSpeed: 9.084250482089596,
            humidity: .6586295801534537,
            cloudCover: .5695908225511929,
            precipProbability: .09569250312673332
        }, {
            temperatureMin: 21.76141837908644,
            temperatureMax: 32.473664859185796,
            temperatureError: 10.564580412967679,
            windSpeed: 9.099770015905973,
            humidity: .6577856133925026,
            cloudCover: .561239226736148,
            precipProbability: .08861656495022656
        }, {
            temperatureMin: 21.73533844066358,
            temperatureMax: 32.46676846320214,
            temperatureError: 10.564670084156916,
            windSpeed: 9.115218281458725,
            humidity: .6569481813361172,
            cloudCover: .5582026261085459,
            precipProbability: .0825958321086903
        }, {
            temperatureMin: 21.71566617041191,
            temperatureMax: 32.46758555952868,
            temperatureError: 10.563320829104338,
            windSpeed: 9.13059057947568,
            humidity: .6561175321334899,
            cloudCover: .5629694991590718,
            precipProbability: .08598429981741566
        }, {
            temperatureMin: 21.702407397649736,
            temperatureMax: 32.47611590604212,
            temperatureError: 10.560532635845492,
            windSpeed: 9.145882034955608,
            humidity: .6552939119239062,
            cloudCover: .5748894832356646,
            precipProbability: .09545485135472503
        }, {
            temperatureMin: 21.695566051237513,
            temperatureMax: 32.492356975016676,
            temperatureError: 10.556307982562645,
            windSpeed: 9.161087598991866,
            humidity: .654477564763809,
            cloudCover: .5902005280881132,
            precipProbability: .09852663749940245
        }, {
            temperatureMin: 21.695144158413804,
            temperatureMax: 32.51630395387311,
            temperatureError: 10.550651832445642,
            windSpeed: 9.176202050882136,
            humidity: .6536687325544803,
            cloudCover: .6036405486674158,
            precipProbability: .09622120529269212
        }, {
            temperatureMin: 21.70114184419477,
            temperatureMax: 32.5479497466048,
            temperatureError: 10.543571622325436,
            windSpeed: 9.191220000522742,
            humidity: .6528676549703593,
            cloudCover: .6108408565002535,
            precipProbability: .09893024791234639
        }, {
            temperatureMin: 21.713557331336364,
            temperatureMax: 32.58728497588035,
            temperatureError: 10.535077245110019,
            windSpeed: 9.206135891086046,
            humidity: .6520745693880236,
            cloudCover: .6102691753671049,
            precipProbability: .10544024642109778
        }, {
            temperatureMin: 21.732386940862078,
            temperatureMax: 32.63429798582243,
            temperatureError: 10.525181026068884,
            windSpeed: 9.2209440019787,
            humidity: .6512897108158471,
            cloudCover: .6037296295697457,
            precipProbability: .10860240057944516
        }, {
            temperatureMin: 21.757625093151947,
            temperatureMax: 32.68897484546152,
            temperatureError: 10.513897693028518,
            windSpeed: 9.235638452078357,
            humidity: .6505133118243633,
            cloudCover: .5952039442318054,
            precipProbability: .10843241807646146
        }, {
            temperatureMin: 21.789264309597034,
            temperatureMax: 32.75129935286413,
            temperatureError: 10.501244340557458,
            windSpeed: 9.250213203246044,
            humidity: .6497456024773492,
            cloudCover: .588701679529097,
            precipProbability: .10707392899264033
        }, {
            temperatureMin: 21.82729521481453,
            temperatureMax: 32.82125303993362,
            temperatureError: 10.487240388235383,
            windSpeed: 9.264662064111116,
            humidity: .6489868102636531,
            cloudCover: .5862904983759428,
            precipProbability: .10699489838251348
        }, {
            temperatureMin: 21.871706539426462,
            temperatureMax: 32.898815177882845,
            temperatureError: 10.471907533116392,
            windSpeed: 9.278978694125238,
            humidity: .6482371600297844,
            cloudCover: .5873297776468166,
            precipProbability: .11206987678014864
        }, {
            temperatureMin: 21.92248512339897,
            temperatureMax: 32.9839627833763,
            temperatureError: 10.455269696511921,
            windSpeed: 9.293156607881611,
            humidity: .6474968739132856,
            cloudCover: .589228286022243,
            precipProbability: .11710050948377677
        }, {
            temperatureMin: 21.979615919941626,
            temperatureMax: 33.07667062534096,
            temperatureError: 10.437352965233854,
            windSpeed: 9.307189179695209,
            humidity: .6467661712769097,
            cloudCover: .5891936211571792,
            precipProbability: .11194814417138144
        }, {
            temperatureMin: 22.043081999966386,
            temperatureMax: 33.17691123244233,
            temperatureError: 10.41818552745303,
            windSpeed: 9.321069648439606,
            humidity: .6460452686436177,
            cloudCover: .5859188582482723,
            precipProbability: .1015592627929235
        }, {
            temperatureMin: 22.11286455710405,
            temperatureMax: 33.28465490122523,
            temperatureError: 10.397797603342482,
            windSpeed: 9.334791122635453,
            humidity: .6453343796324188,
            cloudCover: .5802454274339707,
            precipProbability: .09862465023673637
        }, {
            temperatureMin: 22.18894291327708,
            temperatureMax: 33.39986970491531,
            temperatureError: 10.376221370688715,
            windSpeed: 9.348346585785569,
            humidity: .6446337148950688,
            cloudCover: .5744804502682017,
            precipProbability: .10134454499150297
        }, {
            temperatureMin: 22.27129452482645,
            temperatureMax: 33.52252150287968,
            temperatureError: 10.353490885667455,
            windSpeed: 9.361728901950988,
            humidity: .6439434820536512,
            cloudCover: .5708510511085475,
            precipProbability: .10123439858268059
        }, {
            temperatureMin: 22.359894989192462,
            temperatureMax: 33.65257395074353,
            temperatureError: 10.329641998993251,
            windSpeed: 9.374930821562382,
            humidity: .6432638856390527,
            cloudCover: .5700781418988716,
            precipProbability: .09899182596202126
        }, {
            temperatureMin: 22.454718052145346,
            temperatureMax: 33.789988511159855,
            temperatureError: 10.304712267664339,
            windSpeed: 9.38794498746051,
            humidity: .6425951270303583,
            cloudCover: .5709604496960253,
            precipProbability: .09784315585659487
        }, {
            temperatureMin: 22.555735615565037,
            temperatureMax: 33.934724465228676,
            temperatureError: 10.278740862535992,
            windSpeed: 9.400763941159527,
            humidity: .6419374043951769,
            cloudCover: .5712352667429353,
            precipProbability: .09856096971690924
        }, {
            temperatureMin: 22.662917745767324,
            temperatureMax: 34.086738924563214,
            temperatureError: 10.251768471966523,
            windSpeed: 9.413380129326281,
            humidity: .6412909126309208,
            cloudCover: .5691955951472701,
            precipProbability: .10250058358939203
        }, {
            temperatureMin: 22.77623268237405,
            temperatureMax: 34.24598684399845,
            temperatureError: 10.223837201790365,
            windSpeed: 9.42578591046877,
            humidity: .6406558433070498,
            cloudCover: .5650599225795926,
            precipProbability: .10531786412704057
        }, {
            temperatureMin: 22.89564684772379,
            temperatureMax: 34.41242103493884,
            temperatureError: 10.194990471882546,
            windSpeed: 9.437973561826263,
            humidity: .6400323846083136,
            cloudCover: .5612019205105173,
            precipProbability: .1003866018671397
        }, {
            temperatureMin: 23.021124856822322,
            temperatureMax: 34.585992179341865,
            temperatureError: 10.165272909587644,
            windSpeed: 9.449935286453899,
            humidity: .6394207212789774,
            cloudCover: .5609988108922835,
            precipProbability: .094642724578746
        }, {
            temperatureMin: 23.15262952782733,
            temperatureMax: 34.76664884433136,
            temperatureError: 10.134730240294724,
            windSpeed: 9.461663220493712,
            humidity: .6388210345680868,
            cloudCover: .5668779080655567,
            precipProbability: .09909554107682232
        }, {
            temperatureMin: 23.290121893066875,
            temperatureMax: 34.954337497438615,
            temperatureError: 10.103409175447135,
            windSpeed: 9.473149440624042,
            humidity: .6382335021757589,
            cloudCover: .5786543204718056,
            precipProbability: .10788266372205567
        }, {
            temperatureMin: 23.433561210585637,
            temperatureMax: 35.14900252246511,
            temperatureError: 10.07135729828286,
            windSpeed: 9.484385971679412,
            humidity: .6376582982005184,
            cloudCover: .5931510887054574,
            precipProbability: .10966291864054262
        }, {
            temperatureMin: 23.582904976218227,
            temperatureMax: 35.35058623596268,
            temperatureError: 10.038622947607015,
            windSpeed: 9.495364794431767,
            humidity: .6370955930877196,
            cloudCover: .6054167150658664,
            precipProbability: .10596274780826288
        }, {
            temperatureMin: 23.738108936183817,
            temperatureMax: 35.559028904326404,
            temperatureError: 10.005255099903296,
            windSpeed: 9.506077853524976,
            humidity: .63654555357903,
            cloudCover: .6109748188672571,
            precipProbability: .10221821718924051
        }, {
            temperatureMin: 23.899127100199646,
            temperatureMax: 35.77426876149522,
            temperatureError: 9.971303250095323,
            windSpeed: 9.516517065553174,
            humidity: .6360083426630271,
            cloudCover: .6079500555373781,
            precipProbability: .09933926641123253
        }, {
            temperatureMin: 24.065911755108242,
            temperatureMax: 35.99624202725408,
            temperatureError: 9.93681729127262,
            windSpeed: 9.526674327274081,
            humidity: .6354841195269001,
            cloudCover: .5979506153647073,
            precipProbability: .09830450189708356
        }, {
            temperatureMin: 24.23841347901725,
            temperatureMax: 36.22488292613375,
            temperatureError: 9.901847393698324,
            windSpeed: 9.536541523947898,
            humidity: .6349730395092773,
            cloudCover: .5852389419646146,
            precipProbability: .09696020644628385
        }, {
            temperatureMin: 24.416581155942776,
            temperatureMax: 36.46012370690165,
            temperatureError: 9.86644388341773,
            windSpeed: 9.546110537792195,
            humidity: .6344752540541974,
            cloudCover: .5746325516633747,
            precipProbability: .09152699543053243
        }, {
            temperatureMin: 24.60036199095701,
            temperatureMax: 36.70189466263729,
            temperatureError: 9.830657120787684,
            windSpeed: 9.55537325654319,
            humidity: .633990910666235,
            cloudCover: .5692442120052419,
            precipProbability: .08859776456934705
        }, {
            temperatureMin: 24.789701525832168,
            temperatureMax: 36.950124151388614,
            temperatureError: 9.794537379246856,
            windSpeed: 9.564321582113676,
            humidity: .6335201528667883,
            cloudCover: .5692294261691363,
            precipProbability: .09575269065464832
        }, {
            temperatureMin: 24.98454365517818,
            temperatureMax: 37.20473861740105,
            temperatureError: 9.758134724646427,
            windSpeed: 9.572947439337339,
            humidity: .6330631201515529,
            cloudCover: .5721339636049575,
            precipProbability: .10391456694317946
        }, {
            temperatureMin: 25.184830643066437,
            temperatureMax: 37.46566261291325,
            temperatureError: 9.721498895458788,
            windSpeed: 9.581242784789698,
            humidity: .6326199479491854,
            cloudCover: .5745526427417694,
            precipProbability: .1018518509168651
        }, {
            temperatureMin: 25.390503140140375,
            temperatureMax: 37.73281882051395,
            temperatureError: 9.684679184179766,
            windSpeed: 9.58919961567513,
            humidity: .6321907675811756,
            cloudCover: .5741163774300224,
            precipProbability: .09473088394198224
        }, {
            temperatureMin: 25.60150020120008,
            temperatureMax: 38.006128076053386,
            temperatureError: 9.647724320236307,
            windSpeed: 9.596809978769942,
            humidity: .631775706222927,
            cloudCover: .5706983619706177,
            precipProbability: .0912203699153042
        }, {
            temperatureMin: 25.817759303262743,
            temperatureMax: 38.285509392100565,
            temperatureError: 9.6106823547077,
            windSpeed: 9.604065979410699,
            humidity: .6313748868660802,
            cloudCover: .5662270217383981,
            precipProbability: .09158378511221675
        }, {
            temperatureMin: 26.03921636408912,
            temperatureMax: 38.57087998194188,
            temperatureError: 9.573600547163279,
            windSpeed: 9.61095979051767,
            humidity: .6309884282820583,
            cloudCover: .5633154338377142,
            precipProbability: .09451636986131662
        }, {
            temperatureMin: 26.265805761172942,
            temperatureMax: 38.86215528411294,
            temperatureError: 9.536525254913963,
            windSpeed: 9.617483661642359,
            humidity: .6306164449868822,
            cloudCover: .5635880785475843,
            precipProbability: .09748656217046929
        }, {
            temperatureMin: 26.49746035118527,
            temperatureMax: 39.15924898745544,
            temperatureError: 9.49950182496836,
            windSpeed: 9.623629928028995,
            humidity: .6302590472072288,
            cloudCover: .5667248082384313,
            precipProbability: .09678025580326895
        }, {
            temperatureMin: 26.73411148987173,
            temperatureMax: 39.462073056693015,
            temperatureError: 9.46257448897699,
            windSpeed: 9.629391019678733,
            humidity: .6299163408477743,
            cloudCover: .5707796327653728,
            precipProbability: .0968390119012939
        }, {
            temperatureMin: 26.975689052392646,
            temperatureMax: 39.77053775851885,
            temperatureError: 9.425786261439915,
            windSpeed: 9.634759470406202,
            humidity: .6295884274598096,
            cloudCover: .5735477518217232,
            precipProbability: .10252793872532155
        }, {
            temperatureMin: 27.222121454102414,
            temperatureMax: 40.08455168818439,
            temperatureError: 9.389178841444538,
            windSpeed: 9.6397279268776,
            humidity: .6292754042111471,
            cloudCover: .5741123839772599,
            precipProbability: .1048337460848851
        }, {
            temperatureMin: 27.473335671761994,
            temperatureMax: 40.404021796585205,
            temperatureError: 9.352792518190652,
            windSpeed: 9.644289157619275,
            humidity: .6289773638573335,
            cloudCover: .5735826579616425,
            precipProbability: .09616325481165607
        }, {
            temperatureMin: 27.729257265177317,
            temperatureMax: 40.72885341783379,
            temperatureError: 9.31666608054965,
            windSpeed: 9.648436061986503,
            humidity: .6286943947141553,
            cloudCover: .5745094458470011,
            precipProbability: .08648177750380055
        }, {
            temperatureMin: 27.98981039925655,
            temperatureMax: 41.058950297309984,
            temperatureError: 9.28083673089409,
            windSpeed: 9.652161679081265,
            humidity: .6284265806314774,
            cloudCover: .5792627866533017,
            precipProbability: .08612118328619182
        }, {
            temperatureMin: 28.254917866483268,
            temperatureMax: 41.39421462018433,
            temperatureError: 9.245340003422195,
            windSpeed: 9.655459196608517,
            humidity: .6281740009683943,
            cloudCover: .5883063465076439,
            precipProbability: .09218181956101769
        }, {
            temperatureMin: 28.52450110979333,
            temperatureMax: 41.7345470404026,
            temperatureError: 9.210209687189957,
            windSpeed: 9.658321959660485,
            humidity: .6279367305697069,
            cloudCover: .5994228312361106,
            precipProbability: .09943619723108164
        }, {
            temperatureMin: 28.798480245853494,
            temperatureMax: 42.07984671012358,
            temperatureError: 9.175477754050684,
            windSpeed: 9.660743479417683,
            humidity: .6277148397437596,
            cloudCover: .6084449957680419,
            precipProbability: .10476357060691587
        }, {
            temperatureMin: 29.07677408873287,
            temperatureMax: 42.43001130960283,
            temperatureError: 9.141174291688891,
            windSpeed: 9.662717441757104,
            humidity: .627508394241591,
            cloudCover: .6112022738722676,
            precipProbability: .1053935830873425
        }, {
            temperatureMin: 29.35930017395995,
            temperatureMax: 42.78493707751259,
            temperatureError: 9.107327441921646,
            windSpeed: 9.66423771575611,
            humidity: .6273174552374584,
            cloudCover: .6056803571055247,
            precipProbability: .10530816846680086
        }, {
            temperatureMin: 29.645974782957985,
            temperatureMax: 43.14451884168784,
            temperatureError: 9.073963344426316,
            windSpeed: 9.665298362082293,
            humidity: .6271420793107109,
            cloudCover: .5932214500155505,
            precipProbability: .10894334118909245
        }, {
            temperatureMin: 29.93671296785355,
            temperatureMax: 43.50865005029124,
            temperatureError: 9.041106086039346,
            windSpeed: 9.665893641258878,
            humidity: .6269823184290181,
            cloudCover: .5780756715224357,
            precipProbability: .10910722095144859
        }, {
            temperatureMin: 30.231428576647797,
            temperatureMax: 43.8772228033874,
            temperatureError: 9.008777655755479,
            windSpeed: 9.666018021795217,
            humidity: .62683821993298,
            cloudCover: .5654907619272184,
            precipProbability: .10119332299106809
        }, {
            temperatureMin: 30.53003427874533,
            temperatureMax: 44.250127884914846,
            temperatureError: 8.976997905541797,
            windSpeed: 9.665666188172924,
            humidity: .6267098265220891,
            cloudCover: .5593146264434975,
            precipProbability: .09636783045082715
        }, {
            temperatureMin: 30.83244159083214,
            temperatureMax: 44.62725479505016,
            temperatureError: 8.94578451706528,
            windSpeed: 9.664833048677059,
            humidity: .6265971762420854,
            cloudCover: .5603462830804179,
            precipProbability: .10219101529543967
        }, {
            temperatureMin: 31.13856090309535,
            temperatureMax: 45.008491782950685,
            temperatureError: 8.915152974416795,
            windSpeed: 9.663513743063378,
            humidity: .6265003024736758,
            cloudCover: .5662607411069781,
            precipProbability: .11032837709246786
        }, {
            temperatureMin: 31.44830150577585,
            temperatureMax: 45.39372587986933,
            temperatureError: 8.885116542898286,
            windSpeed: 9.66170365005124,
            humidity: .6264192339226513,
            cloudCover: .5730812129391423,
            precipProbability: .11269375169309391
        }, {
            temperatureMin: 31.761571616048407,
            temperatureMax: 45.78284293262883,
            temperatureError: 8.855686253923887,
            windSpeed: 9.6593983946337,
            humidity: .6263539946113701,
            cloudCover: .5773513276840866,
            precipProbability: .10877587054090883
        }, {
            temperatureMin: 32.07827840521825,
            temperatureMax: 46.17572763744869,
            temperatureError: 8.826870896069108,
            windSpeed: 9.65659385519465,
            humidity: .6263046038716523,
            cloudCover: .5778219833772084,
            precipProbability: .10009215606480437
        }, {
            temperatureMin: 32.398328026229436,
            temperatureMax: 46.572263574112064,
            temperatureError: 8.798677012285959,
            windSpeed: 9.653286170424911,
            humidity: .6262710763390354,
            cloudCover: .5757884770875937,
            precipProbability: .0924739669597673
        }, {
            temperatureMin: 32.72162564147121,
            temperatureMax: 46.97233324046271,
            temperatureError: 8.7711089032853,
            windSpeed: 9.649471746027636,
            humidity: .6262534219484527,
            cloudCover: .5739988733108841,
            precipProbability: .09096110014322732
        }, {
            temperatureMin: 33.04807545088303,
            temperatureMax: 47.37581808722433,
            temperatureError: 8.744168637071217,
            windSpeed: 9.645147261204963,
            humidity: .6262516459312832,
            cloudCover: .5748527140970847,
            precipProbability: .08973415254110023
        }, {
            temperatureMin: 33.377580720341264,
            temperatureMax: 47.782598553128885,
            temperatureError: 8.717856064595804,
            windSpeed: 9.640309674917662,
            humidity: .6262657488137969,
            cloudCover: .5789703670392596,
            precipProbability: .08503008937510213
        }, {
            temperatureMin: 33.71004381032318,
            temperatureMax: 48.1925541003451,
            temperatureError: 8.69216884148628,
            windSpeed: 9.63495623190908,
            humidity: .6262957264170058,
            cloudCover: .5849445065117663,
            precipProbability: .08639608266109784
        }, {
            temperatureMin: 34.045366204839674,
            temperatureMax: 48.60556325019716,
            temperatureError: 8.6671024557803,
            windSpeed: 9.629084468486107,
            humidity: .6263415698578992,
            cloudCover: .5903565643291921,
            precipProbability: .0974523251726687
        }, {
            temperatureMin: 34.38344854062892,
            temperatureMax: 49.02150361916012,
            temperatureError: 8.642650261588999,
            windSpeed: 9.622692218049362,
            humidity: .6264032655520758,
            cloudCover: .5933839684362257,
            precipProbability: .10629499539134761
        }, {
            temperatureMin: 34.72419063659823,
            temperatureMax: 49.440251955126236,
            temperatureError: 8.618803518591704,
            windSpeed: 9.615777616365145,
            humidity: .6264807952177707,
            cloudCover: .5939808226515803,
            precipProbability: .10553489953491942
        }, {
            temperatureMin: 35.06749152351062,
            temperatureMax: 49.861684173926086,
            temperatureError: 8.595551437250535,
            windSpeed: 9.60833910657241,
            humidity: .6265741358812695,
            cloudCover: .5938830605158462,
            precipProbability: .09962771121874277
        }, {
            temperatureMin: 35.41324947390442,
            temperatureMax: 50.28567539609806,
            temperatureError: 8.572881229617792,
            windSpeed: 9.600375443917539,
            humidity: .6266832598837201,
            cloudCover: .5954088597447289,
            precipProbability: .09372639627523453
        }, {
            temperatureMin: 35.76136203223652,
            temperatureMax: 50.712099983892465,
            temperatureError: 8.5507781655942,
            windSpeed: 9.591885700210947,
            humidity: .6268081348893272,
            cloudCover: .5997715542926759,
            precipProbability: .09233228889698135
        }, {
            temperatureMin: 36.11172604524357,
            temperatureMax: 51.140831578500745,
            temperatureError: 8.5292256344814,
            windSpeed: 9.582869267999193,
            humidity: .6269487238949274,
            cloudCover: .6059524980614021,
            precipProbability: .09720236812458244
        }, {
            temperatureMin: 36.464237692506735,
            temperatureMax: 51.57174313749912,
            temperatureError: 8.508205211657947,
            windSpeed: 9.57332586444622,
            humidity: .6271049852409677,
            cloudCover: .6108916592816783,
            precipProbability: .1007378093463942
        }, {
            temperatureMin: 36.81596407140715,
            temperatureMax: 52.00470697249233,
            temperatureError: 8.487696730194445,
            windSpeed: 9.563255534919245,
            humidity: .6272768726238366,
            cloudCover: .6110002855031188,
            precipProbability: .09819685815930172
        }, {
            temperatureMin: 37.16474019334605,
            temperatureMax: 52.43959478695248,
            temperatureError: 8.46767835721017,
            windSpeed: 9.552658656273005,
            humidity: .6274643351095952,
            cloudCover: .6042122212606812,
            precipProbability: .0976484551876073
        }, {
            temperatureMin: 37.515330405445894,
            temperatureMax: 52.876277714233865,
            temperatureError: 8.448126674760898,
            windSpeed: 9.54153593982825,
            humidity: .6276673171490622,
            cloudCover: .5914263011212605,
            precipProbability: .10155043728160269
        }, {
            temperatureMin: 37.86763082025986,
            temperatureMax: 53.31462635576113,
            temperatureError: 8.429016765035557,
            windSpeed: 9.529888434039494,
            humidity: .6278857585942771,
            cloudCover: .576474501818062,
            precipProbability: .09902917637069399
        }, {
            temperatureMin: 38.221537043572106,
            temperatureMax: 53.75451081937146,
            temperatureError: 8.410322299627772,
            windSpeed: 9.517717526847933,
            humidity: .6281195947163273,
            cloudCover: .5645356820601142,
            precipProbability: .08714418561800018
        }, {
            temperatureMin: 38.57694420533041,
            temperatureMax: 54.195800757804605,
            temperatureError: 8.39201563263753,
            windSpeed: 9.50502494771589,
            humidity: .6283687562245232,
            cloudCover: .5597699565792592,
            precipProbability: .07590775711775781
        }, {
            temperatureMin: 38.93374699072271,
            temperatureMax: 54.63836540732846,
            temperatureError: 8.374067897347938,
            windSpeed: 9.491812769338994,
            humidity: .6286331692869306,
            cloudCover: .56339473733786,
            precipProbability: .07177942302402034
        }, {
            temperatureMin: 39.2918396713833,
            temperatureMax: 55.08207362648547,
            temperatureError: 8.356449106212427,
            windSpeed: 9.478083409032974,
            humidity: .6289127555522546,
            cloudCover: .5732055306372889,
            precipProbability: .07510199769387964
        }, {
            temperatureMin: 39.651116136722244,
            temperatureMax: 55.52679393495457,
            temperatureError: 8.339128253879116,
            windSpeed: 9.46383962979259,
            humidity: .6292074321730495,
            cloudCover: .5847779974071833,
            precipProbability: .08332837469705211
        }, {
            temperatureMin: 40.01146992536956,
            temperatureMax: 55.972394552510295,
            temperatureError: 8.322073422970652,
            windSpeed: 9.449084541019811,
            humidity: .6295171118302761,
            cloudCover: .5936945480762429,
            precipProbability: .08827097460652548
        }, {
            temperatureMin: 40.37279425672012,
            temperatureMax: 56.41874343807295,
            temperatureError: 8.305251892330702,
            windSpeed: 9.433821598919836,
            humidity: .6298417027591644,
            cloudCover: .5976109683225898,
            precipProbability: .08642672337477468
        }, {
            temperatureMin: 40.73498206257682,
            temperatureMax: 56.86570832883496,
            temperatureError: 8.288630247441661,
            windSpeed: 9.418054606562366,
            humidity: .6301811087764174,
            cloudCover: .5971025085309416,
            precipProbability: .08650719235534667
        }, {
            temperatureMin: 41.0979260188762,
            temperatureMax: 57.313156779452534,
            temperatureError: 8.272174492712166,
            windSpeed: 9.401787713607728,
            humidity: .6305352293087093,
            cloudCover: .5949256292315289,
            precipProbability: .09132746065487914
        }, {
            temperatureMin: 41.46151857749074,
            temperatureMax: 57.76095620129357,
            temperatureError: 8.255850165328281,
            windSpeed: 9.385025415696491,
            humidity: .630903959422484,
            cloudCover: .5942043593681773,
            precipProbability: .09111671788538356
        }, {
            temperatureMin: 41.82565199809865,
            temperatureMax: 58.2089739017243,
            temperatureError: 8.239622450357825,
            windSpeed: 9.367772553501974,
            humidity: .6312871898550488,
            cloudCover: .5966103994170887,
            precipProbability: .08484341915385862
        }, {
            temperatureMin: 42.19021838010841,
            temperatureMax: 58.65707712343174,
            temperatureError: 8.223456296794064,
            windSpeed: 9.350034311445638,
            humidity: .6316848070469554,
            cloudCover: .6015494432511068,
            precipProbability: .08320245036205294
        }, {
            temperatureMin: 42.555109694633536,
            temperatureMax: 59.10513308376013,
            temperatureError: 8.207316534222496,
            windSpeed: 9.331816216075305,
            humidity: .6320966931756516,
            cloudCover: .6067420908549718,
            precipProbability: .08922999826674077
        }, {
            temperatureMin: 42.920217816501854,
            temperatureMax: 59.55300901405858,
            temperatureError: 8.191167989792788,
            windSpeed: 9.313124134107367,
            humidity: .632522726190388,
            cloudCover: .6097662477362211,
            precipProbability: .0973543418432621
        }, {
            temperatureMin: 43.285434556297666,
            temperatureMax: 60.00057219902297,
            temperatureError: 8.174975605177034,
            windSpeed: 9.29396427013328,
            humidity: .6329627798483832,
            cloudCover: .6095847478584422,
            precipProbability: .10268640972303333
        }, {
            temperatureMin: 43.650651692419174,
            temperatureMax: 60.44769001602261,
            temperatureError: 8.158704553195678,
            windSpeed: 9.274343163991762,
            humidity: .6334167237522463,
            cloudCover: .607125050435989,
            precipProbability: .10030711277513206
        }, {
            temperatureMin: 44.015761003146345,
            temperatureMax: 60.89422997439851,
            temperatureError: 8.142320353793261,
            windSpeed: 9.254267687809158,
            humidity: .633884423388598,
            cloudCover: .6045723259903407,
            precipProbability: .0911160564766832
        }, {
            temperatureMin: 44.38065429871102,
            temperatureMax: 61.34005975472389,
            temperatureError: 8.12578898904791,
            windSpeed: 9.233745042708904,
            humidity: .6343657401679444,
            cloudCover: .6038281207505495,
            precipProbability: .08575987822782276
        }, {
            temperatureMin: 44.74522345335454,
            temperatureMax: 61.78504724801322,
            temperatureError: 8.10907701690102,
            windSpeed: 9.212782755193578,
            humidity: .6348605314657374,
            cloudCover: .6051060938230964,
            precipProbability: .08726894433905796
        }, {
            temperatureMin: 45.10936043736848,
            temperatureMax: 62.229060594868336,
            temperatureError: 8.092151683297171,
            windSpeed: 9.191388673201828,
            humidity: .6353686506646337,
            cloudCover: .6065748105124742,
            precipProbability: .08595476213643023
        }, {
            temperatureMin: 45.47295734910578,
            temperatureMax: 62.67196822455234,
            temperatureError: 8.074981032428363,
            windSpeed: 9.169570961843275,
            humidity: .6358899471979494,
            cloudCover: .6053448677899805,
            precipProbability: .08099130021959505
        }, {
            temperatureMin: 45.83590644695417,
            temperatureMax: 63.11363889397558,
            temperatureError: 8.05753401478188,
            windSpeed: 9.147338098815391,
            humidity: .6364242665942751,
            cloudCover: .5992869047934839,
            precipProbability: .08228987277000877
        }, {
            temperatureMin: 46.19810018126312,
            temperatureMax: 63.55394172658679,
            temperatureError: 8.03978059269691,
            windSpeed: 9.124698869506199,
            humidity: .6369714505232367,
            cloudCover: .5886325849762278,
            precipProbability: .08991897010683997
        }, {
            temperatureMin: 46.55943122621228,
            temperatureMax: 63.992746251153925,
            temperatureError: 8.021691843141712,
            windSpeed: 9.101662361786417,
            humidity: .6375313368424304,
            cloudCover: .576373953583008,
            precipProbability: .09537394861687505
        }, {
            temperatureMin: 46.919792511614894,
            temperatureMax: 64.42992244042645,
            temperatureError: 8.003240057430604,
            windSpeed: 9.07823796049672,
            humidity: .6381037596454533,
            cloudCover: .5671183982599933,
            precipProbability: .09523995125367422
        }, {
            temperatureMin: 47.279077254644754,
            temperatureMax: 64.86534074966427,
            temperatureError: 7.984398837608122,
            windSpeed: 9.054435341634187,
            humidity: .638688549311077,
            cloudCover: .5649230036339732,
            precipProbability: .08972196550351087
        }, {
            temperatureMin: 47.63717899147864,
            temperatureMax: 65.29887215502545,
            temperatureError: 7.965143189236753,
            windSpeed: 9.030264466243802,
            humidity: .6392855325535047,
            cloudCover: .5712335136774798,
            precipProbability: .08255567372214194
        }, {
            temperatureMin: 47.99399160884345,
            temperatureMax: 65.73038819179816,
            temperatureError: 7.94544961033417,
            windSpeed: 9.005735574020566,
            humidity: .639894532473714,
            cloudCover: .5840416282105046,
            precipProbability: .0824667066693552
        }, {
            temperatureMin: 48.349409375460056,
            temperatureMax: 66.15976099246758,
            temperatureError: 7.925296176216253,
            windSpeed: 8.980859176627815,
            humidity: .640515368611886,
            cloudCover: .5987439650296653,
            precipProbability: .08902056285310606
        }, {
            temperatureMin: 48.70332697337363,
            temperatureMax: 66.58686332460638,
            temperatureError: 7.904662620012974,
            windSpeed: 8.955646050738528,
            humidity: .6411478570008787,
            cloudCover: .6102793335636637,
            precipProbability: .09057439707776427
        }, {
            temperatureMin: 49.055639529161446,
            temperatureMax: 67.01156862857606,
            temperatureError: 7.883530408636219,
            windSpeed: 8.930107230806327,
            humidity: .6417918102207252,
            cloudCover: .6154383876676753,
            precipProbability: .08608002597231494
        }, {
            temperatureMin: 49.40624264501023,
            temperatureMax: 67.43375105502913,
            temperatureError: 7.861882813990064,
            windSpeed: 8.904254001572157,
            humidity: .642447037454193,
            cloudCover: .614158532352053,
            precipProbability: .08566869012758034
        }, {
            temperatureMin: 49.755032429649674,
            temperatureMax: 67.85328550220098,
            temperatureError: 7.839704979227623,
            windSpeed: 8.87809789031523,
            humidity: .6431133445433125,
            cloudCover: .6091793498397251,
            precipProbability: .0889427745311711
        }, {
            temperatureMin: 50.10190552913919,
            temperatureMax: 68.27004765298102,
            temperatureError: 7.816983979871011,
            windSpeed: 8.851650658854709,
            humidity: .6437905340469116,
            cloudCover: .6043239170247742,
            precipProbability: .08761198131375207
        }, {
            temperatureMin: 50.4467591574935,
            temperatureMax: 68.68391401174904,
            temperatureError: 7.793708879625348,
            windSpeed: 8.824924295310383,
            humidity: .6444784052991239,
            cloudCover: .6023940832981026,
            precipProbability: .08154155919970621
        }, {
            temperatureMin: 50.78949112713979,
            temperatureMax: 69.09476194097127,
            temperatureError: 7.769870780731481,
            windSpeed: 8.797931005630165,
            humidity: .6451767544688544,
            cloudCover: .6038276469601238,
            precipProbability: .07509551273591496
        }, {
            temperatureMin: 51.12999987919869,
            temperatureMax: 69.50246969753925,
            temperatureError: 7.745462868717037,
            windSpeed: 8.770683204893226,
            humidity: .6458853746201693,
            cloudCover: .6067876297585096,
            precipProbability: .07185843595336332
        }, {
            temperatureMin: 51.46818451357813,
            temperatureMax: 69.9069164688458,
            temperatureError: 7.720480451420044,
            windSpeed: 8.743193508396585,
            humidity: .6466040557736311,
            cloudCover: .6085224891246092,
            precipProbability: .07615152907335328
        }, {
            temperatureMin: 51.803944818872516,
            temperatureMax: 70.30798240858397,
            temperatureError: 7.694920992175163,
            windSpeed: 8.71547472253509,
            humidity: .6473325849684972,
            cloudCover: .6071287117079386,
            precipProbability: .08412294151231454
        }, {
            temperatureMin: 52.137181302057016,
            temperatureMax: 70.70554867226006,
            temperatureError: 7.668784137067668,
            windSpeed: 8.687539835482555,
            humidity: .6480707463258445,
            cloudCover: .6026616322344719,
            precipProbability: .08440230680739202
        }, {
            temperatureMin: 52.467795217969666,
            temperatureMax: 71.09949745241005,
            temperatureError: 7.642071736176561,
            windSpeed: 8.659402007684369,
            humidity: .6488183211125361,
            cloudCover: .5969692737402715,
            precipProbability: .0781460082694136
        }, {
            temperatureMin: 52.795688598572134,
            temperatureMax: 71.48971201350773,
            temperatureError: 7.614787858744187,
            windSpeed: 8.631074562170943,
            humidity: .6495750878060286,
            cloudCover: .5924059926248598,
            precipProbability: .07701746850113893
        }, {
            temperatureMin: 53.12076428197888,
            temperatureMax: 71.8760767265579,
            temperatureError: 7.586938802225826,
            windSpeed: 8.602570974701353,
            humidity: .6503408221600114,
            cloudCover: .5902559100570595,
            precipProbability: .08033004784739847
        }, {
            temperatureMin: 53.44292594124987,
            temperatureMax: 72.25847710335708,
            temperatureError: 7.558533095189358,
            windSpeed: 8.57390486374704,
            humidity: .6511152972708772,
            cloudCover: .589866326582339,
            precipProbability: .07908039578035402
        }, {
            temperatureMin: 53.76207811293205,
            temperatureMax: 72.63679983042104,
            temperatureError: 7.529581494051375,
            windSpeed: 8.545089980326603,
            humidity: .651898283644933,
            cloudCover: .5890597742338884,
            precipProbability: .07409170269790269
        }, {
            temperatureMin: 54.07812622534931,
            temperatureMax: 73.01093280256083,
            temperatureError: 7.500096973652664,
            windSpeed: 8.51614019770072,
            humidity: .6526895492664174,
            cloudCover: .5856135567105812,
            precipProbability: .07069006169794809
        }, {
            temperatureMin: 54.39097662662499,
            temperatureMax: 73.38076515610224,
            temperatureError: 7.4700947116925205,
            windSpeed: 8.487069500938432,
            humidity: .6534888596662508,
            cloudCover: .5789266696679439,
            precipProbability: .07006057302856764
        }, {
            temperatureMin: 54.700536612433574,
            temperatureMax: 73.74618730173732,
            temperatureError: 7.439592067057731,
            windSpeed: 8.457891976365188,
            humidity: .654295977991512,
            cloudCover: .5708346681011068,
            precipProbability: .07264591998185799
        }, {
            temperatureMin: 55.006714453470046,
            temperatureMax: 74.10709095699802,
            temperatureError: 7.408608552098435,
            windSpeed: 8.42862180090329,
            humidity: .6551106650756202,
            cloudCover: .5649894811013919,
            precipProbability: .07442096651684542
        }, {
            temperatureMin: 55.30941942263247,
            temperatureMax: 74.46336917834205,
            temperatureError: 7.377165798919321,
            windSpeed: 8.399273231315595,
            humidity: .6559326795092126,
            cloudCover: .5650419846674308,
            precipProbability: .06796598851363546
        }, {
            temperatureMin: 55.60856182190559,
            temperatureMax: 74.81491639284364,
            temperatureError: 7.345287519770557,
            windSpeed: 8.369860593363624,
            humidity: .6567617777116679,
            cloudCover: .5725823008572909,
            precipProbability: .05829283013458761
        }, {
            temperatureMin: 55.90405300894024,
            temperatureMax: 75.16162842947598,
            temperatureError: 7.312999461638765,
            windSpeed: 8.34039827089069,
            humidity: .6575977140032983,
            cloudCover: .5859885221793414,
            precipProbability: .05789747054661732
        }, {
            temperatureMin: 56.19580542332085,
            temperatureMax: 75.5034025499799,
            temperatureError: 7.2803293551538095,
            windSpeed: 8.310900694841807,
            humidity: .6584402406781419,
            cloudCover: .6008820425523829,
            precipProbability: .06424782911958987
        }, {
            temperatureMin: 56.48373261251016,
            temperatureMax: 75.84013747930737,
            temperatureError: 7.247306857942419,
            windSpeed: 8.281382332231148,
            humidity: .6592891080773587,
            cloudCover: .6120275468333006,
            precipProbability: .06637504920406191
        }, {
            temperatureMin: 56.76774925746824,
            temperatureMax: 76.17173343563178,
            temperatureError: 7.213963492574583,
            windSpeed: 8.251857675068349,
            humidity: .6601440646632146,
            cloudCover: .6157235747825377,
            precipProbability: .06521963807004894
        }, {
            temperatureMin: 57.04777119793353,
            temperatureMax: 76.49809215991445,
            temperatureError: 7.180332579263163,
            windSpeed: 8.222341229255049,
            humidity: .6610048570936277,
            cloudCover: .6114487904474555,
            precipProbability: .06675591429363038
        }, {
            temperatureMin: 57.3237154573618,
            temperatureMax: 76.81911694502224,
            temperatureError: 7.146449163491082,
            windSpeed: 8.192847503463335,
            humidity: .6618712302972217,
            cloudCover: .6019201495287773,
            precipProbability: .0705306189941254
        }, {
            temperatureMin: 57.59550026751343,
            temperatureMax: 77.13471266438289,
            temperatureError: 7.112349938754342,
            windSpeed: 8.163390998006959,
            humidity: .6627429275489192,
            cloudCover: .5915680344445358,
            precipProbability: .07495014371963354
        }, {
            temperatureMin: 57.86304509268381,
            temperatureMax: 77.44478580017395,
            temperatureError: 7.078073164621977,
            windSpeed: 8.133986193717039,
            humidity: .6636196905460101,
            cloudCover: .584271181027739,
            precipProbability: .07739166516156777
        }, {
            temperatureMin: 58.12627065356719,
            temperatureMax: 77.74924447103275,
            temperatureError: 7.0436585803267,
            windSpeed: 8.104647540833557,
            humidity: .6645012594846943,
            cloudCover: .5815603445336145,
            precipProbability: .07377647833802528
        }, {
            temperatureMin: 58.38509895074832,
            temperatureMax: 78.04799845928501,
            temperatureError: 7.0091473141120915,
            windSpeed: 8.0753894479238,
            humidity: .6653873731370765,
            cloudCover: .5822000346696613,
            precipProbability: .06971994992520576
        }, {
            temperatureMin: 58.639453287817894,
            temperatureMax: 78.34095923767603,
            temperatureError: 6.974581788573428,
            windSpeed: 8.046226270839911,
            humidity: .6662777689285502,
            cloudCover: .5832712950038348,
            precipProbability: .07464279061665068
        }, {
            temperatureMin: 58.88925829409548,
            temperatureMax: 78.62803999560465,
            temperatureError: 6.940005622240146,
            windSpeed: 8.017172301725491,
            humidity: .6671721830156283,
            cloudCover: .5820532281566299,
            precipProbability: .08223937298730538
        }, {
            temperatureMin: 59.13443994696704,
            temperatureMax: 78.90915566484652,
            temperatureError: 6.905463527658043,
            windSpeed: 7.988241758083663,
            humidity: .6680703503641169,
            cloudCover: .5775981874098469,
            precipProbability: .08034585913976401
        }, {
            temperatureMin: 59.37492559381689,
            temperatureMax: 79.18422294476203,
            temperatureError: 6.871001206238554,
            windSpeed: 7.959448771917518,
            humidity: .6689720048276481,
            cloudCover: .5711296910004401,
            precipProbability: .0722473387937321
        }, {
            temperatureMin: 59.61064397355842,
            temperatureMax: 79.4531603269796,
            temperatureError: 6.836665240151525,
            windSpeed: 7.930807378953467,
            humidity: .6698768792265298,
            cloudCover: .5651125869075114,
            precipProbability: .06698697573689082
        }, {
            temperatureMin: 59.841525237748044,
            temperatureMax: 79.71588811954858,
            temperatureError: 6.802502981545455,
            windSpeed: 7.902331507959107,
            humidity: .6707847054269678,
            cloudCover: .5616269076787875,
            precipProbability: .06467477840730161
        }, {
            temperatureMin: 60.06750097128421,
            temperatureMax: 79.9723284705541,
            temperatureError: 6.768562439386733,
            windSpeed: 7.874034970166522,
            humidity: .6716952144204585,
            cloudCover: .5610673085662788,
            precipProbability: .06334733017720671
        }, {
            temperatureMin: 60.28850421268026,
            temperatureMax: 80.22240539118565,
            temperatureError: 6.734892164215691,
            windSpeed: 7.84593144881119,
            humidity: .6726081364035368,
            cloudCover: .5619683842123542,
            precipProbability: .0621809228181243
        }, {
            temperatureMin: 60.50446947390637,
            temperatureMax: 80.46604477825461,
            temperatureError: 6.70154113112293,
            windSpeed: 7.818034488797949,
            humidity: .6735232008577118,
            cloudCover: .5620594596342262,
            precipProbability: .05914042551150769
        }, {
            temperatureMin: 60.715332759794734,
            temperatureMax: 80.70317443615224,
            temperatureError: 6.668558621254326,
            windSpeed: 7.790357486503429,
            humidity: .6744401366296494,
            cloudCover: .5598940293485702,
            precipProbability: .05843956644472693
        }, {
            temperatureMin: 60.92103158700221,
            temperatureMax: 80.93372409824359,
            temperatureError: 6.635994102157049,
            windSpeed: 7.762913679727198,
            humidity: .6753586720114816,
            cloudCover: .5560283287481125,
            precipProbability: .06581787664254297
        }, {
            temperatureMin: 61.121505002528174,
            temperatureMax: 81.15762544768765,
            temperatureError: 6.603897107282168,
            windSpeed: 7.735716137799251,
            humidity: .6762785348213526,
            cloudCover: .5529649062733691,
            precipProbability: .07306656280374643
        }, {
            temperatureMin: 61.31669360177205,
            temperatureMax: 81.37481213768281,
            temperatureError: 6.572317114961696,
            windSpeed: 7.7087777518560285,
            humidity: .6771994524840617,
            cloudCover: .5537980923805924,
            precipProbability: .06969007088847486
        }, {
            temperatureMin: 61.50653954613955,
            temperatureMax: 81.58521981112527,
            temperatureError: 6.541303427179648,
            windSpeed: 7.682111225293705,
            humidity: .6781211521118286,
            cloudCover: .5602837456949016,
            precipProbability: .06260527234356163
        }, {
            temperatureMin: 61.690986580180585,
            temperatureMax: 81.7887861196805,
            temperatureError: 6.51090504845697,
            windSpeed: 7.655729064408572,
            humidity: .6790433605851623,
            cloudCover: .5714455537456343,
            precipProbability: .06263172878827504
        }, {
            temperatureMin: 61.86998004825765,
            temperatureMax: 81.98545074225811,
            temperatureError: 6.481170565170388,
            windSpeed: 7.629643569234084,
            humidity: .6799658046337856,
            cloudCover: .5835853277379499,
            precipProbability: .06756018958750983
        }, {
            temperatureMin: 62.04346691074368,
            temperatureMax: 82.1751554028858,
            temperatureError: 6.452148025623895,
            windSpeed: 7.603866824583239,
            humidity: .6808882109176287,
            cloudCover: .5918079729150918,
            precipProbability: .0719603788259703
        }, {
            temperatureMin: 62.21139575973683,
            temperatureMax: 82.35784388797867,
            temperatureError: 6.42388482118989,
            windSpeed: 7.578410691306402,
            humidity: .6818103061077946,
            cloudCover: .592322517865862,
            precipProbability: .07420666257742291
        }, {
            temperatureMin: 62.37371683429502,
            temperatureMax: 82.53346206299565,
            temperatureError: 6.396427568833974,
            windSpeed: 7.553286797771574,
            humidity: .6827318169675788,
            cloudCover: .5843188476626711,
            precipProbability: .07262470446739439
        }, {
            temperatureMin: 62.53038203518096,
            temperatureMax: 82.7019578884815,
            temperatureError: 6.3698219953342905,
            windSpeed: 7.528506531577051,
            humidity: .6836524704334276,
            cloudCover: .5704137546018365,
            precipProbability: .07001555758938753
        }, {
            temperatureMin: 62.68134493911458,
            temperatureMax: 82.86328143548673,
            temperatureError: 6.344112823501276,
            windSpeed: 7.504081031504099,
            humidity: .6845719936958473,
            cloudCover: .5554115285421632,
            precipProbability: .07072190490461754
        }, {
            temperatureMin: 62.826560812528584,
            temperatureMax: 83.01738490036252,
            temperatureError: 6.319343660699032,
            windSpeed: 7.480021179717203,
            humidity: .6854901142802561,
            cloudCover: .5440217914752358,
            precipProbability: .068350754825102
        }, {
            temperatureMin: 62.96598662482637,
            temperatureMax: 83.1642226189265,
            temperatureError: 6.295556889963122,
            windSpeed: 7.456337594220545,
            humidity: .6864065601277004,
            cloudCover: .5387254590537147,
            precipProbability: .05676555801629248
        }, {
            temperatureMin: 63.09958106113068,
            temperatureMax: 83.3037510799937,
            temperatureError: 6.272793564003005,
            windSpeed: 7.433040621576542,
            humidity: .6873210596755045,
            cloudCover: .5388779261155212,
            precipProbability: .04636330992019257
        }, {
            temperatureMin: 63.2273045345265,
            temperatureMax: 83.43592893826971,
            temperatureError: 6.251093302369598,
            windSpeed: 7.410140329895235,
            humidity: .688233341937717,
            cloudCover: .5414489492263014,
            precipProbability: .047589646772949225
        }, {
            temperatureMin: 63.34911919779206,
            temperatureMax: 83.56071702660265,
            temperatureError: 6.230494192060225,
            windSpeed: 7.387646502100043,
            humidity: .6891431365854079,
            cloudCover: .5429096356403462,
            precipProbability: .054222637845213306
        }, {
            temperatureMin: 63.464988954614554,
            temperatureMax: 83.6780783675886,
            temperatureError: 6.211032691824106,
            windSpeed: 7.36556862947657,
            humidity: .6900501740267924,
            cloudCover: .5411829534819268,
            precipProbability: .05761107801389104
        }, {
            temperatureMin: 63.57487947028329,
            temperatureMax: 83.78797818452956,
            temperatureError: 6.19274354042182,
            windSpeed: 7.343915905511014,
            humidity: .6909541854871043,
            cloudCover: .5365972774938633,
            precipProbability: .05712914517562271
        }, {
            temperatureMin: 63.67875818186762,
            temperatureMax: 83.89038391173781,
            temperatureError: 6.175659669081764,
            windSpeed: 7.32269722002371,
            humidity: .6918549030882297,
            cloudCover: .5313931732913112,
            precipProbability: .053671081403644405
        }, {
            temperatureMin: 63.77659430786291,
            temperatureMax: 83.98526520418635,
            temperatureError: 6.159812118385436,
            windSpeed: 7.301921153602769,
            humidity: .692752059928112,
            cloudCover: .528172226385721,
            precipProbability: .05048362397289321
        }, {
            temperatureMin: 63.86835885731358,
            temperatureMax: 84.0725939465005,
            temperatureError: 6.14522995980186,
            windSpeed: 7.281595972344125,
            humidity: .6936453901598156,
            cloudCover: .5282617190926718,
            precipProbability: .051624421274140325
        }, {
            temperatureMin: 63.95402463840368,
            temperatureMax: 84.15234426128919,
            temperatureError: 6.1319402220790264,
            windSpeed: 7.261729622901527,
            humidity: .6945346290703115,
            cloudCover: .5309725330971612,
            precipProbability: .05210615658748562
        }, {
            temperatureMin: 64.03356626651279,
            temperatureMax: 84.22449251681297,
            temperatureError: 6.11996782268758,
            windSpeed: 7.2423297278517325,
            humidity: .6954195131589141,
            cloudCover: .5341610256875045,
            precipProbability: .047325976418936745
        }, {
            temperatureMin: 64.10696017174071,
            temperatureMax: 84.2890173339867,
            temperatureError: 6.109335504498258,
            windSpeed: 7.22340358137819,
            humidity: .6962997802153804,
            cloudCover: .5357088802604285,
            precipProbability: .046537683231232856
        }, {
            temperatureMin: 64.17418460588833,
            temperatureMax: 84.34589959271442,
            temperatureError: 6.100063777861337,
            windSpeed: 7.204958145278387,
            humidity: .6971751693975784,
            cloudCover: .5349782188123876,
            precipProbability: .056028265297350104
        }, {
            temperatureMin: 64.23521964890551,
            temperatureMax: 84.39512243755534,
            temperatureError: 6.092170868241435,
            windSpeed: 7.1870000452961404,
            humidity: .6980454213088048,
            cloudCover: .5333101309450251,
            precipProbability: .06503865685348303
        }, {
            temperatureMin: 64.29004721479207,
            temperatureMax: 84.43667128271817,
            temperatureError: 6.0856726695467165,
            windSpeed: 7.169535567783892,
            humidity: .6989102780746315,
            cloudCover: .5332084425733082,
            precipProbability: .06425435026625584
        }, {
            temperatureMin: 64.33865105695642,
            temperatureMax: 84.47053381638341,
            temperatureError: 6.080582703276428,
            windSpeed: 7.152570656695882,
            humidity: .6997694834193356,
            cloudCover: .5366522036692528,
            precipProbability: .05738532221912305
        }, {
            temperatureMin: 64.3810167730315,
            temperatureMax: 84.49670000435148,
            temperatureError: 6.076912083595121,
            windSpeed: 7.136110910915666,
            humidity: .7006227827418355,
            cloudCover: .5435382775096494,
            precipProbability: .049920052612928444
        }, {
            temperatureMin: 64.41713180914068,
            temperatureMax: 84.51516209301617,
            temperatureError: 6.074669488426429,
            windSpeed: 7.120161581919682,
            humidity: .7014699231911162,
            cloudCover: .5512340652409661,
            precipProbability: .04577806816249883
        }, {
            temperatureMin: 64.4469854636204,
            temperatureMax: 84.52591461166222,
            temperatureError: 6.07386113664326,
            windSpeed: 7.104727571777119,
            humidity: .7023106537411872,
            cloudCover: .555616780058792,
            precipProbability: .04779215726184883
        }, {
            temperatureMin: 64.47056889018775,
            temperatureMax: 84.52895437408624,
            temperatureError: 6.074490771415083,
            windSpeed: 7.089813431489328,
            humidity: .7031447252654407,
            cloudCover: .5531252476013917,
            precipProbability: .05086033184867598
        }, {
            temperatureMin: 64.48787510056464,
            temperatureMax: 84.52428047954106,
            temperatureError: 6.076559649756747,
            windSpeed: 7.075423359667639,
            humidity: .7039718906104807,
            cloudCover: .5427380136674383,
            precipProbability: .05017195644175652
        }, {
            temperatureMin: 64.49889896654751,
            temperatureMax: 84.51189431300261,
            temperatureError: 6.080066538306878,
            windSpeed: 7.061561201550888,
            humidity: .7047919046693645,
            cloudCover: .5267755931809573,
            precipProbability: .05288126864448247
        }, {
            temperatureMin: 64.50363722152724,
            temperatureMax: 84.49179954475908,
            temperatureError: 6.0850077153473245,
            windSpeed: 7.048230448362282,
            humidity: .7056045244542348,
            cloudCover: .5100293205411258,
            precipProbability: .06244459543429662
        }, {
            temperatureMin: 64.50208846145611,
            temperatureMax: 84.4640021293242,
            temperatureError: 6.091376979058624,
            windSpeed: 7.035434237005856,
            humidity: .7064095091683055,
            cloudCover: .49761706718992516,
            precipProbability: .06723247558037915
        }, {
            temperatureMin: 64.49425314526509,
            temperatureMax: 84.42851030367198,
            temperatureError: 6.099165661990058,
            windSpeed: 7.023175350100466,
            humidity: .7072066202772326,
            cloudCover: .4926599579573794,
            precipProbability: .06092019566073139
        }, {
            temperatureMin: 64.48013359472817,
            temperatureMax: 84.38533458479644,
            temperatureError: 6.1083626517062335,
            windSpeed: 7.011456216351431,
            humidity: .7079956215797935,
            cloudCover: .49497680690473117,
            precipProbability: .052416037398040016
        }, {
            temperatureMin: 64.45973399377219,
            temperatureMax: 84.33448776659479,
            temperatureError: 6.118954417555912,
            windSpeed: 7.00027891125769,
            humidity: .7087762792778746,
            cloudCover: .5014454291263756,
            precipProbability: .049279452883103016
        }, {
            temperatureMin: 64.43306038723934,
            temperatureMax: 84.2759849160766,
            temperatureError: 6.1309250434925735,
            windSpeed: 6.989645158152651,
            humidity: .7095483620457549,
            cloudCover: .5077855592928661,
            precipProbability: .05202044426193317
        }, {
            temperatureMin: 64.40012067909561,
            temperatureMax: 84.20984336889921,
            temperatureError: 6.144256266860107,
            windSpeed: 6.979556329576691,
            humidity: .7103116410986376,
            cloudCover: .5107717542431361,
            precipProbability: .05897738787067458
        }, {
            temperatureMin: 64.3609246300865,
            temperatureMax: 84.13608272423032,
            temperatureError: 6.1589275230414,
            windSpeed: 6.970013448977894,
            humidity: .7110658902604744,
            cloudCover: .5096947912906992,
            precipProbability: .0636334433030998
        }, {
            temperatureMin: 64.31548385484747,
            temperatureMax: 84.05472483894108,
            temperatureError: 6.17491599585185,
            windSpeed: 6.961017192739212,
            humidity: .7118108860309635,
            cloudCover: .5063503476752941,
            precipProbability: .06149814007702231
        }, {
            temperatureMin: 64.26381181846104,
            temperatureMax: 83.96579382112832,
            temperatureError: 6.192196673544834,
            windSpeed: 6.952567892528092,
            humidity: .7125464076517695,
            cloudCover: .5036736284684394,
            precipProbability: .05965332900666595
        }, {
            temperatureMin: 64.20592383246652,
            temperatureMax: 83.86931602297265,
            temperatureError: 6.210742410281214,
            windSpeed: 6.944665537964088,
            humidity: .7132722371719695,
            cloudCover: .5038798818830398,
            precipProbability: .0619820477919123
        }, {
            temperatureMin: 64.1418370503243,
            temperatureMax: 83.7653200329271,
            temperatureError: 6.230523992900519,
            windSpeed: 6.937309779601921,
            humidity: .7139881595126139,
            cloudCover: .5072000203558572,
            precipProbability: .05920274050774584
        }, {
            temperatureMin: 64.07157046232997,
            temperatureMax: 83.65383666724813,
            temperatureError: 6.251510212817398,
            windSpeed: 6.930499932224646,
            humidity: .7146939625304535,
            cloudCover: .5119024524166609,
            precipProbability: .04894821455836441
        }, {
            temperatureMin: 63.995144889990826,
            temperatureMax: 83.5348989608633,
            temperatureError: 6.273667942853528,
            windSpeed: 6.9242349784417465,
            humidity: .7153894370808261,
            cloudCover: .5155107987698226,
            precipProbability: .043064207511174374
        }, {
            temperatureMin: 63.91258297985262,
            temperatureMax: 83.40854215758132,
            temperatureError: 6.296962218801833,
            windSpeed: 6.918513572588343,
            humidity: .7160743770796167,
            cloudCover: .5164219346238165,
            precipProbability: .047402870131880326
        }, {
            temperatureMin: 63.823909196791725,
            temperatureMax: 83.27480369965066,
            temperatureError: 6.321356325507732,
            windSpeed: 6.913334044918979,
            humidity: .716748579564321,
            cloudCover: .514908692387203,
            precipProbability: .056711416974391186
        }, {
            temperatureMin: 63.729149816763794,
            temperatureMax: 83.13372321666249,
            temperatureError: 6.346811887239816,
            windSpeed: 6.908694406090864,
            humidity: .717411844754185,
            cloudCover: .5128797349594948,
            precipProbability: .06544566611674771
        }, {
            temperatureMin: 63.628332919018035,
            temperatureMax: 82.98534251380836,
            temperatureError: 6.3732889621114035,
            windSpeed: 6.9045923519298285,
            humidity: .7180639761094286,
            cloudCover: .5125333763616372,
            precipProbability: .06836583211840318
        }, {
            temperatureMin: 63.52148837777692,
            temperatureMax: 82.82970555949309,
            temperatureError: 6.40074614030343,
            windSpeed: 6.901025268473927,
            humidity: .7187047803894507,
            cloudCover: .5147304399063873,
            precipProbability: .06399726341195786
        }, {
            temperatureMin: 63.40864785338422,
            temperatureMax: 82.66685847230525,
            temperatureError: 6.4291406458292455,
            windSpeed: 6.897990237286382,
            humidity: .7193340677101112,
            cloudCover: .5181141476761715,
            precipProbability: .06069986093924929
        }, {
            temperatureMin: 63.289844782922316,
            temperatureMax: 82.49684950735129,
            temperatureError: 6.458428441572596,
            windSpeed: 6.895484041032025,
            humidity: .7199516516000015,
            cloudCover: .5195940178094252,
            precipProbability: .06261690549242115
        }, {
            temperatureMin: 63.165114370305076,
            temperatureMax: 82.31972904195639,
            temperatureError: 6.488564337321356,
            windSpeed: 6.893503169310081,
            humidity: .7205573490556829,
            cloudCover: .5160151914747089,
            precipProbability: .061080206434286265
        }, {
            temperatureMin: 63.03449357584559,
            temperatureMax: 82.1355495607373,
            temperatureError: 6.519502100511704,
            windSpeed: 6.89204382473469,
            humidity: .7211509805959296,
            cloudCover: .5061124130534571,
            precipProbability: .05426025933043605
        }, {
            temperatureMin: 62.89802110530495,
            temperatureMax: 81.94436564004909,
            temperatureError: 6.551194569390393,
            windSpeed: 6.891101929256791,
            humidity: .7217323703149024,
            cloudCover: .4916231374892855,
            precipProbability: .052960757840273286
        }, {
            temperatureMin: 62.755737398420635,
            temperatureMax: 81.74623393181344,
            temperatureError: 6.583593768296358,
            windSpeed: 6.8906731307182065,
            humidity: .7223013459342784,
            cloudCover: .47685195536060293,
            precipProbability: .05930973297858657
        }, {
            temperatureMin: 62.60768461692586,
            temperatureMax: 81.54121314673175,
            temperatureError: 6.616651024757426,
            windSpeed: 6.890752809630094,
            humidity: .7228577388543121,
            cloudCover: .46681728302648556,
            precipProbability: .06398110624333889
        }, {
            temperatureMin: 62.453906632054945,
            temperatureMax: 81.32936403688714,
            temperatureError: 6.650317088092993,
            windSpeed: 6.891336086167898,
            humidity: .7234013842037633,
            cloudCover: .4649048663974014,
            precipProbability: .06202057536707147
        }, {
            temperatureMin: 62.29444901154418,
            temperatureMax: 81.11074937774322,
            temperatureError: 6.684542249209861,
            windSpeed: 6.892417827372391,
            humidity: .7239321208887847,
            cloudCover: .4712527088022142,
            precipProbability: .05384701613691584
        }, {
            temperatureMin: 62.12935900612783,
            temperatureMax: 80.88543394954159,
            temperatureError: 6.719276461275245,
            windSpeed: 6.893992654549687,
            humidity: .7244497916406433,
            cloudCover: .4827225915896527,
            precipProbability: .04291269026634165
        }, {
            temperatureMin: 61.958685535536695,
            temperatureMax: 80.65348451810553,
            temperatureError: 6.754469460948531,
            windSpeed: 6.896054950859885,
            humidity: .7249542430623258,
            cloudCover: .49447255825596304,
            precipProbability: .03813009467514038
        }, {
            temperatureMin: 61.78247917400443,
            temperatureMax: 80.41496981505873,
            temperatureError: 6.790070889852385,
            windSpeed: 6.898598869085664,
            humidity: .7254453256739785,
            cloudCover: .5022952341656332,
            precipProbability: .04201973602795601
        }, {
            temperatureMin: 61.600792135278,
            temperatureMax: 80.16996051745414,
            temperatureError: 6.826030415962883,
            windSpeed: 6.901618339570391,
            humidity: .7259228939572306,
            cloudCover: .5044965007238654,
            precipProbability: .044717192377034524
        }, {
            temperatureMin: 61.41367825714882,
            temperatureMax: 79.9185292268352,
            temperatureError: 6.862297854598883,
            windSpeed: 6.905107078317116,
            humidity: .7263868063983017,
            cloudCover: .5023685240159478,
            precipProbability: .04357521653005014
        }, {
            temperatureMin: 61.22119298549668,
            temperatureMax: 79.66075044771871,
            temperatureError: 6.898823288691937,
            windSpeed: 6.9090585952384584,
            humidity: .7268369255299124,
            cloudCover: .499097032684946,
            precipProbability: .048016966355439304
        }, {
            temperatureMin: 61.02339335786211,
            temperatureMax: 79.39670056552178,
            temperatureError: 6.935557188020035,
            windSpeed: 6.913466202545977,
            humidity: .7272731179720525,
            cloudCover: .49779179654074523,
            precipProbability: .05795329191453938
        }, {
            temperatureMin: 60.82033798654344,
            temperatureMax: 79.12645782392157,
            temperatureError: 6.972450527091426,
            windSpeed: 6.918323023270709,
            humidity: .7276952544714906,
            cloudCover: .49976982452331714,
            precipProbability: .06287982317682857
        }, {
            temperatureMin: 60.61208704122969,
            temperatureMax: 78.85010230167514,
            temperatureError: 7.009454901368383,
            windSpeed: 6.9236219999036415,
            humidity: .7281032099400718,
            cloudCover: .5040183555329104,
            precipProbability: .06045383429925765
        }, {
            temperatureMin: 60.39870223117013,
            temperatureMax: 78.56771588888896,
            temperatureError: 7.046522641525299,
            windSpeed: 6.92935590314585,
            humidity: .7284968634917819,
            cloudCover: .5080509768671918,
            precipProbability: .05569490752380552
        }, {
            temperatureMin: 60.18024678688921,
            temperatureMax: 78.2793822627505,
            temperatureError: 7.083606925440763,
            windSpeed: 6.935517340757691,
            humidity: .7288760984785824,
            cloudCover: .5095634639187029,
            precipProbability: .052869972423944867
        }, {
            temperatureMin: 59.95678544145024,
            temperatureMax: 77.985186862736,
            temperatureError: 7.1206618876297405,
            windSpeed: 6.942098766497036,
            humidity: .7292408025249563,
            cloudCover: .5078593214775023,
            precipProbability: .05666977354479593
        }, {
            temperatureMin: 59.728384411271726,
            temperatureMax: 77.6852168652922,
            temperatureError: 7.15764272582831,
            windSpeed: 6.949092489135039,
            humidity: .7295908675612267,
            cloudCover: .5041914789686791,
            precipProbability: .06525680466147385
        }, {
            temperatureMin: 59.49511137650882,
            temperatureMax: 77.37956115800301,
            temperatureError: 7.194505804451623,
            windSpeed: 6.956490681539627,
            humidity: .7299261898555663,
            cloudCover: .5008420729690877,
            precipProbability: .06769827528771266
        }, {
            temperatureMin: 59.257035460995894,
            temperatureMax: 77.06831031325086,
            temperatureError: 7.231208754653952,
            windSpeed: 6.964285389815214,
            humidity: .7302466700447479,
            cloudCover: .49953451856143066,
            precipProbability: .06251743078321995
        }, {
            temperatureMin: 59.014227211764926,
            temperatureMax: 76.75155656137886,
            temperatureError: 7.2677105707288225,
            windSpeed: 6.972468542488492,
            humidity: .7305522131635738,
            cloudCover: .500185025362529,
            precipProbability: .06055977832393215
        }, {
            temperatureMin: 58.76675857814017,
            temperatureMax: 76.42939376335927,
            temperatureError: 7.303971702597021,
            windSpeed: 6.981031959728892,
            humidity: .7308427286730219,
            cloudCover: .5008090096189441,
            precipProbability: .06266083238006344
        }, {
            temperatureMin: 58.5147028904192,
            temperatureMax: 76.10191738298226,
            temperatureError: 7.339954144141086,
            windSpeed: 6.989967362593216,
            humidity: .7311181304870759,
            cloudCover: .4987096730534384,
            precipProbability: .059679719563861304
        }, {
            temperatureMin: 58.25813483814114,
            temperatureMax: 75.76922445856732,
            temperatureError: 7.375621517155579,
            windSpeed: 6.999266382283621,
            humidity: .7313783369982354,
            cloudCover: .4922917308176345,
            precipProbability: .05236447814944881
        }, {
            temperatureMin: 57.99713044795842,
            temperatureMax: 75.43141357420747,
            temperatureError: 7.410939150694574,
            windSpeed: 7.008920569407979,
            humidity: .7316232711016976,
            cloudCover: .48242486705451587,
            precipProbability: .04841110127483327
        }, {
            temperatureMin: 57.73176706110314,
            temperatureMax: 75.08858483055779,
            temperatureError: 7.445874155610042,
            windSpeed: 7.018921403232142,
            humidity: .7318528602181997,
            cloudCover: .47248495793962547,
            precipProbability: .050295961683538754
        }, {
            temperatureMin: 57.46212331047538,
            temperatureMax: 74.74083981517533,
            temperatureError: 7.480395494087642,
            windSpeed: 7.029260300912966,
            humidity: .7320670363155304,
            cloudCover: .4669255280493074,
            precipProbability: .05769202900116222
        }, {
            temperatureMin: 57.1882790973364,
            temperatureMax: 74.38828157241173,
            temperatureError: 7.5144740439998285,
            windSpeed: 7.039928626701649,
            humidity: .732265735928688,
            cloudCover: .4690728373713898,
            precipProbability: .06636953794461004
        }, {
            temperatureMin: 56.91031556763785,
            temperatureMax: 74.03101457288402,
            temperatureError: 7.5480826579103315,
            windSpeed: 7.050917701106652,
            humidity: .7324489001786944,
            cloudCover: .47931568838246613,
            precipProbability: .0675036680489572
        }, {
            temperatureMin: 56.6283150879719,
            temperatureMax: 73.66914468251422,
            temperatureError: 7.581196216578008,
            windSpeed: 7.062218810006146,
            humidity: .7326164747900211,
            cloudCover: .49469413145646923,
            precipProbability: .06268619346313536
        }, {
            temperatureMin: 56.34236122116658,
            temperatureMax: 73.30277913116038,
            temperatureError: 7.613791676823109,
            windSpeed: 7.073823213698266,
            humidity: .7327684101067083,
            cloudCover: .5101596747892198,
            precipProbability: .06377703211482184
        }, {
            temperatureMin: 56.05253870152464,
            temperatureMax: 72.93202648084295,
            temperatureError: 7.645848113633929,
            windSpeed: 7.085722155880902,
            humidity: .7329046611070296,
            cloudCover: .5208831796379024,
            precipProbability: .07053180622682194
        }, {
            temperatureMin: 55.75893340971302,
            temperatureMax: 72.5569965935732,
            temperatureError: 7.677346756407406,
            windSpeed: 7.097906872548286,
            humidity: .7330251874168767,
            cloudCover: .5244217017084777,
            precipProbability: .07237635172156924
        }, {
            temperatureMin: 55.46163234731636,
            temperatureMax: 72.17780059880033,
            temperatureError: 7.7082710192327015,
            windSpeed: 7.110368600796279,
            humidity: .7331299533217086,
            cloudCover: .5216359436772878,
            precipProbability: .06988737560509252
        }, {
            temperatureMin: 55.1607236110557,
            temperatureMax: 71.79455086048188,
            temperatureError: 7.7386065251429095,
            windSpeed: 7.123098587525785,
            humidity: .7332189277771178,
            cloudCover: .5159302364215498,
            precipProbability: .07058732403641903
        }, {
            temperatureMin: 54.85629636668377,
            temperatureMax: 71.40736094378622,
            temperatureError: 7.768341124276289,
            windSpeed: 7.136088098033763,
            humidity: .7332920844180569,
            cloudCover: .5112881025738742,
            precipProbability: .0743421141251193
        }, {
            temperatureMin: 54.54844082256334,
            temperatureMax: 71.01634558144168,
            temperatureError: 7.797464905904323,
            windSpeed: 7.149328424483259,
            humidity: .7333494015666338,
            cloudCover: .5101997032945619,
            precipProbability: .07788386359401214
        }, {
            temperatureMin: 54.237248202935625,
            temperatureMax: 70.62162063973919,
            temperatureError: 7.825970204300725,
            windSpeed: 7.162810894242156,
            humidity: .7333908622385437,
            cloudCover: .5125845860258621,
            precipProbability: .07837214519760324
        }, {
            temperatureMin: 53.92281072089048,
            temperatureMax: 70.22330308419828,
            temperatureError: 7.853851598441931,
            windSpeed: 7.176526878082267,
            humidity: .7334164541480849,
            cloudCover: .5162146356600243,
            precipProbability: .0719494792102972
        }, {
            temperatureMin: 53.60522155103994,
            temperatureMax: 69.8215109449061,
            temperatureError: 7.881105905545721,
            windSpeed: 7.1904677982280285,
            humidity: .7334261697118333,
            cloudCover: .5182872351302125,
            precipProbability: .06344951358159055
        }, {
            temperatureMin: 53.28457480190844,
            temperatureMax: 69.41636328154539,
            temperatureError: 7.9077321684716795,
            windSpeed: 7.20462513624816,
            humidity: .7334200060508543,
            cloudCover: .517173990610953,
            precipProbability: .06398450730731835
        }, {
            temperatureMin: 52.96096548804911,
            temperatureMax: 69.00798014811319,
            temperatureError: 7.933731637023267,
            windSpeed: 7.218990440779625,
            humidity: .733397964991573,
            cloudCover: .5133226940841266,
            precipProbability: .07069999773223323
        }, {
            temperatureMin: 52.6344895018846,
            temperatureMax: 68.59648255734446,
            temperatureError: 7.959107743207492,
            windSpeed: 7.233555335076314,
            humidity: .7333600530652346,
            cloudCover: .5088312276820022,
            precipProbability: .07142963929332224
        }, {
            temperatureMin: 52.305243585296395,
            temperatureMax: 68.18199244485699,
            temperatureError: 7.9838660705247575,
            windSpeed: 7.248311524374674,
            humidity: .7333062815059509,
            cloudCover: .5060162996424924,
            precipProbability: .06740300043362883
        }, {
            temperatureMin: 51.973325300954144,
            temperatureMax: 67.76463263301594,
            temperatureError: 8.008014317376986,
            windSpeed: 7.26325080306675,
            humidity: .7332366662474065,
            cloudCover: .5058948964386082,
            precipProbability: .06730501876264705
        }, {
            temperatureMin: 51.63883300340978,
            temperatureMax: 67.34452679454155,
            temperatureError: 8.03156225469797,
            windSpeed: 7.27836506167515,
            humidity: .7331512279181004,
            cloudCover: .5075363384046985,
            precipProbability: .07023707526918144
        }, {
            temperatureMin: 51.301865809950414,
            temperatureMax: 66.92179941586011,
            temperatureError: 8.054521677925587,
            windSpeed: 7.293646293620568,
            humidity: .7330499918352489,
            cloudCover: .5087076807888883,
            precipProbability: .07186225879932837
        }, {
            temperatureMin: 50.96252357122656,
            temperatureMax: 66.49657576021676,
            temperatureError: 8.076906353450369,
            windSpeed: 7.309086601775301,
            humidity: .7329329879972954,
            cloudCover: .5074411615170943,
            precipProbability: .07123004117494304
        }, {
            temperatureMin: 50.62090684166819,
            temperatureMax: 66.06898183055851,
            temperatureError: 8.09873195968955,
            windSpeed: 7.324678204796622,
            humidity: .7328002510749987,
            cloudCover: .5035686115384591,
            precipProbability: .06740891208878978
        }, {
            temperatureMin: 50.27711684968438,
            temperatureMax: 65.63914433219414,
            temperatureError: 8.120016022950699,
            windSpeed: 7.340413443232098,
            humidity: .7326518204011735,
            cloudCover: .4992440429914177,
            precipProbability: .0645343793975761
        }, {
            temperatureMin: 49.93125546766935,
            temperatureMax: 65.20719063525206,
            temperatureError: 8.140777848262275,
            windSpeed: 7.356284785391554,
            humidity: .7324877399590352,
            cloudCover: .4980381937297384,
            precipProbability: .06963803721442606
        }, {
            temperatureMin: 49.583425181815514,
            temperatureMax: 64.77324873693352,
            temperatureError: 8.16103844536219,
            windSpeed: 7.372284832979241,
            humidity: .7323080583691571,
            cloudCover: .5030216347988689,
            precipProbability: .07670843683989843
        }, {
            temperatureMin: 49.233729061742565,
            temperatureMax: 64.33744722358999,
            temperatureError: 8.180820450048536,
            windSpeed: 7.388406326480421,
            humidity: .7321128288750747,
            cloudCover: .5148768132964117,
            precipProbability: .07394735011567778
        }, {
            temperatureMin: 48.88227072995856,
            temperatureMax: 63.899915232614084,
            temperatureError: 8.200148041108848,
            windSpeed: 7.404642150297466,
            humidity: .7319021093274958,
            cloudCover: .5311260361285607,
            precipProbability: .0656746505097076
        }, {
            temperatureMin: 48.52915433115217,
            temperatureMax: 63.46078241417741,
            temperatureError: 8.219046853056035,
            windSpeed: 7.420985337629657,
            humidity: .7316759621671741,
            cloudCover: .5469884250783261,
            precipProbability: .0632657934376735
        }, {
            temperatureMin: 48.17448450133315,
            temperatureMax: 63.02017889281163,
            temperatureError: 8.237543884910515,
            windSpeed: 7.4374290750928855,
            humidity: .7314344544063883,
            cloudCover: .5574948498760864,
            precipProbability: .06565866664551966
        }, {
            temperatureMin: 47.818366336825974,
            temperatureMax: 62.578235228849664,
            temperatureError: 8.255667405278574,
            windSpeed: 7.453966707073708,
            humidity: .7311776576091077,
            cloudCover: .5597878264535173,
            precipProbability: .06731620525987767
        }, {
            temperatureMin: 47.460905363128916,
            temperatureMax: 62.13508237973602,
            temperatureError: 8.273446853986652,
            windSpeed: 7.470591739815212,
            humidity: .7309056478697592,
            cloudCover: .5544095388750881,
            precipProbability: .06812735996031506
        }, {
            temperatureMin: 47.102207503644024,
            temperatureMax: 61.690851661224414,
            temperatureError: 8.290912740540927,
            windSpeed: 7.487297845229232,
            humidity: .730618505790703,
            cloudCover: .5449109720735985,
            precipProbability: .06829794083730885
        }, {
            temperatureMin: 46.74237904828659,
            temperatureMax: 61.245674708464385,
            temperatureError: 8.30809653968954,
            windSpeed: 7.504078864433033,
            humidity: .7303163164583343,
            cloudCover: .5360089977296922,
            precipProbability: .06996524986157779
        }, {
            temperatureMin: 46.381526621994894,
            temperatureMax: 60.799683436994634,
            temperatureError: 8.325030584372813,
            windSpeed: 7.520928811006702,
            humidity: .729999169417868,
            cloudCover: .5312831958254725,
            precipProbability: .07680427250282636
        }, {
            temperatureMin: 46.0197571531303,
            temperatureMax: 60.35301000365303,
            temperatureError: 8.341747956353922,
            windSpeed: 7.537841873968272,
            humidity: .7296671586468273,
            cloudCover: .5316205604373061,
            precipProbability: .0824114750796717
        }, {
            temperatureMin: 45.65717784179396,
            temperatureMax: 59.90578676741937,
            temperatureError: 8.358282374828258,
            windSpeed: 7.5548124204657015,
            humidity: .7293203825271605,
            cloudCover: .5351725182715464,
            precipProbability: .07799329219081252
        }, {
            temperatureMin: 45.29389612806164,
            temperatureMax: 59.45814625018986,
            temperatureError: 8.37466808331552,
            windSpeed: 7.571834998181735,
            humidity: .7289589438161156,
            cloudCover: .5387419045441335,
            precipProbability: .07112683662705162
        }, {
            temperatureMin: 44.9300196601446,
            temperatureMax: 59.01022109751068,
            temperatureError: 8.39093973514288,
            windSpeed: 7.5889043374515595,
            humidity: .7285829496157906,
            cloudCover: .5397455952626294,
            precipProbability: .07350408042120758
        }, {
            temperatureMin: 44.56565626249329,
            temperatureMax: 58.56214403927147,
            temperatureError: 8.407132277831655,
            windSpeed: 7.606015353091974,
            humidity: .7281925113413775,
            cloudCover: .5376290008495795,
            precipProbability: .08086338339480424
        }, {
            temperatureMin: 44.20091390384679,
            temperatureMax: 58.114047850374256,
            temperatureError: 8.423280836702348,
            windSpeed: 7.623163145940155,
            humidity: .7277877446881592,
            cloudCover: .5339785307490349,
            precipProbability: .084377583088953
        }, {
            temperatureMin: 43.835900665237084,
            temperatureMax: 57.66606531139217,
            temperatureError: 8.439420598015468,
            windSpeed: 7.640343004102381,
            humidity: .7273687695972363,
            cloudCover: .5313602940912854,
            precipProbability: .08399295013909545
        }, {
            temperatureMin: 43.470724707964386,
            temperatureMax: 57.21832916921807,
            temperatureError: 8.455586691966632,
            windSpeed: 7.657550403912832,
            humidity: .7269357102199661,
            cloudCover: .5316505683513059,
            precipProbability: .08147273766707265
        }, {
            temperatureMin: 43.104180578929245,
            temperatureMax: 56.77097209773489,
            temperatureError: 8.471814075854608,
            windSpeed: 7.674781010601557,
            humidity: .7264886948811925,
            cloudCover: .5348926795534842,
            precipProbability: .0786923741837003
        }, {
            temperatureMin: 42.731319749978056,
            temperatureMax: 56.32412665849703,
            temperatureError: 8.488137417740845,
            windSpeed: 7.692030678673554,
            humidity: .7260278560412062,
            cloudCover: .5393687161143961,
            precipProbability: .0788942851257926
        }, {
            temperatureMin: 42.35864502680595,
            temperatureMax: 55.87792526145264,
            temperatureError: 8.504590980917536,
            windSpeed: 7.709295451998957,
            humidity: .7255533302565006,
            cloudCover: .5428240160298914,
            precipProbability: .07813901987245991
        }, {
            temperatureMin: 41.98626684097619,
            temperatureMax: 55.432500125704465,
            temperatureError: 8.521208509498985,
            windSpeed: 7.726571563615905,
            humidity: .725065258139311,
            cloudCover: .5440726785518861,
            precipProbability: .07142933144512045
        }, {
            temperatureMin: 41.61429553618174,
            temperatureMax: 54.987983240333705,
            temperatureError: 8.538023115448327,
            windSpeed: 7.743855435248182,
            humidity: .7245637843159353,
            cloudCover: .5439637790473342,
            precipProbability: .06764408864642739
        }, {
            temperatureMin: 41.24284133554815,
            temperatureMax: 54.54450632528765,
            temperatureError: 8.555067167347508,
            windSpeed: 7.761143676539113,
            humidity: .7240490573838848,
            cloudCover: .545051898338338,
            precipProbability: .07592976493717342
        }, {
            temperatureMin: 40.87201430897155,
            temperatureMax: 54.10220079234603,
            temperatureError: 8.572372181214005,
            windSpeed: 7.7784330840040665,
            humidity: .7235212298678668,
            cloudCover: .5500853526577607,
            precipProbability: .08764055620291793
        }, {
            temperatureMin: 40.50192434050336,
            temperatureMax: 53.661197706184645,
            temperatureError: 8.589968713662122,
            windSpeed: 7.795720639705221,
            humidity: .7229804581745639,
            cloudCover: .5601539974302315,
            precipProbability: .09183847833274979
        }, {
            temperatureMin: 40.132681095787554,
            temperatureMax: 53.22162774553605,
            temperatureError: 8.607886257700494,
            windSpeed: 7.813003509650531,
            humidity: .7224269025462952,
            cloudCover: .5735953703043973,
            precipProbability: .09068677644318208
        }, {
            temperatureMin: 39.764393989567196,
            temperatureMax: 52.78362116446484,
            temperatureError: 8.626153141450454,
            windSpeed: 7.830279041920805,
            humidity: .7218607270135445,
            cloudCover: .5863793349988121,
            precipProbability: .08904844259236211
        }, {
            temperatureMin: 39.39717215326097,
            temperatureMax: 52.3473077537754,
            temperatureError: 8.644796430061868,
            windSpeed: 7.84754476452909,
            humidity: .7212820993463396,
            cloudCover: .5938781257170532,
            precipProbability: .08885681972789056
        }, {
            temperatureMin: 39.03112440262271,
            temperatureMax: 51.9128168025472,
            temperatureError: 8.663841831094913,
            windSpeed: 7.864798383015642,
            humidity: .7206911910045446,
            cloudCover: .5931359845444454,
            precipProbability: .09205766171240211
        }, {
            temperatureMin: 38.66635920550128,
            temperatureMax: 51.48027705982613,
            temperatureError: 8.683313603626331,
            windSpeed: 7.882037777783374,
            humidity: .7200881770870629,
            cloudCover: .584432753328091,
            precipProbability: .09504238560895563
        }, {
            temperatureMin: 38.30298464969782,
            temperatureMax: 51.04981669647297,
            temperatureError: 8.703234471329594,
            windSpeed: 7.899261001179167,
            humidity: .7194732362799171,
            cloudCover: .5712802039989092,
            precipProbability: .09321435166101406
        }, {
            temperatureMin: 37.9411084109336,
            temperatureMax: 50.62156326718339,
            temperatureError: 8.723625539767077,
            windSpeed: 7.916466274324027,
            humidity: .7188465508033518,
            cloudCover: .5588173917675071,
            precipProbability: .09330555804739465
        }, {
            temperatureMin: 37.58083772094988,
            temperatureMax: 50.19564367269044,
            temperatureError: 8.744506218121236,
            windSpeed: 7.933651983700426,
            humidity: .718208306357798,
            cloudCover: .551427356516247,
            precipProbability: .10075377385163505
        }, {
            temperatureMin: 37.222279335727265,
            temperatureMax: 49.77218412216291,
            temperatureError: 8.765894145580193,
            windSpeed: 7.95081667750014,
            humidity: .7175586920688529,
            cloudCover: .5508087243767222,
            precipProbability: .10488764551606918
        }, {
            temperatureMin: 36.865539503852126,
            temperatureMax: 49.35131009580496,
            temperatureError: 8.787805122580584,
            windSpeed: 7.967959061739228,
            humidity: .7168979004312511,
            cloudCover: .5554759843366219,
            precipProbability: .0969950102846885
        }, {
            temperatureMin: 36.51072393503697,
            temperatureMax: 48.9331463076726,
            temperatureError: 8.810253047096948,
            windSpeed: 7.985077996147059,
            humidity: .7162261272518204,
            cloudCover: .5618791894969558,
            precipProbability: .0848737384034234
        }, {
            temperatureMin: 36.15793776879266,
            temperatureMax: 48.517816668721906,
            temperatureError: 8.833249856154556,
            windSpeed: 8.00217248983533,
            humidity: .7155435715914479,
            cloudCover: .5664651242975766,
            precipProbability: .07744046573770877
        }, {
            temperatureMin: 35.80728554327322,
            temperatureMax: 48.10544425008823,
            temperatureError: 8.85680547272754,
            windSpeed: 8.019241696753612,
            humidity: .7148504357061133,
            cloudCover: .5675278677400095,
            precipProbability: .07575901494617153
        }, {
            temperatureMin: 35.458871164301335,
            temperatureMax: 47.69615124661787,
            temperatureError: 8.880927758170333,
            windSpeed: 8.036284910939765,
            humidity: .7141469249869271,
            cloudCover: .5658703901418788,
            precipProbability: .07907426271413291
        }, {
            temperatureMin: 35.1127978745754,
            temperatureMax: 47.290058940663236,
            temperatureError: 8.905622470315647,
            windSpeed: 8.053301561570331,
            humidity: .7134332478993102,
            cloudCover: .564006809123652,
            precipProbability: .08308456046246454
        }, {
            temperatureMin: 34.76916822308174,
            temperatureMax: 46.88728766613649,
            temperatureError: 8.93089322735666,
            windSpeed: 8.070291207821416,
            humidity: .7127096159211801,
            cloudCover: .5644656594877375,
            precipProbability: .08319472859302605
        }, {
            temperatureMin: 34.42808403470232,
            temperatureMax: 46.487956772860265,
            temperatureError: 8.956741477616141,
            windSpeed: 8.087253533545052,
            humidity: .7119762434803111,
            cloudCover: .5682353408847113,
            precipProbability: .08464596920178952
        }, {
            temperatureMin: 34.089646380042545,
            temperatureMax: 46.092184591196066,
            temperatureError: 8.983166475289027,
            windSpeed: 8.10418834177109,
            humidity: .7112333478907819,
            cloudCover: .5742592816980406,
            precipProbability: .09138098399339607
        }, {
            temperatureMin: 33.75395554548248,
            temperatureMax: 45.700088396982494,
            temperatureError: 9.01016526222922,
            windSpeed: 8.121095549041609,
            humidity: .7104811492885901,
            cloudCover: .5802320553013659,
            precipProbability: .09362998588401246
        }, {
            temperatureMin: 33.421111003463906,
            temperatureMax: 45.31178437678477,
            temperatureError: 9.037732655835278,
            windSpeed: 8.137975179587235,
            humidity: .7097198705664125,
            cloudCover: .5841599860596981,
            precipProbability: .0860925573787088
        }, {
            temperatureMin: 33.091211383006524,
            temperatureMax: 44.92738759346346,
            temperatureError: 9.065861243072968,
            windSpeed: 8.154827359353218,
            humidity: .7089497373075752,
            cloudCover: .5856934734289566,
            precipProbability: .07985893564276067
        }, {
            temperatureMin: 32.7643544404875,
            temperatureMax: 44.54701195208151,
            temperatureError: 9.09454138065677,
            windSpeed: 8.171652309885182,
            humidity: .7081709777191706,
            cloudCover: .5863797929584805,
            precipProbability: .08299970883436401
        }, {
            temperatureMin: 32.44063703067288,
            temperatureMax: 44.17077016615221,
            temperatureError: 9.123761201395459,
            windSpeed: 8.188450342081811,
            humidity: .7073838225644749,
            cloudCover: .5886408409641536,
            precipProbability: .09111754901310255
        }, {
            temperatureMin: 32.12015507801813,
            temperatureMax: 43.79877372423479,
            temperatureError: 9.153506626690655,
            windSpeed: 8.20522184982587,
            humidity: .7065885050945556,
            cloudCover: .5940649291888551,
            precipProbability: .09869009508540849
        }, {
            temperatureMin: 31.803003548242476,
            temperatureMax: 43.43113285690332,
            temperatureError: 9.18376138516072,
            windSpeed: 8.221967303500605,
            humidity: .7057852609791393,
            cloudCover: .6020513981772714,
            precipProbability: .10138326950010292
        }, {
            temperatureMin: 31.48927642018924,
            temperatureMax: 43.067956504082275,
            temperatureError: 9.21450703734584,
            windSpeed: 8.238687243403433,
            humidity: .7049743282367898,
            cloudCover: .6096881792948973,
            precipProbability: .09684834155644334
        }, {
            temperatureMin: 31.179066657976126,
            temperatureMax: 42.70935228276288,
            temperatureError: 9.245723006434057,
            windSpeed: 8.255382273063836,
            humidity: .7041559471643821,
            cloudCover: .6130534246563559,
            precipProbability: .09161074773318693
        }, {
            temperatureMin: 30.872466183450523,
            temperatureMax: 42.355426455114845,
            temperatureError: 9.277386614931793,
            windSpeed: 8.272053052477576,
            humidity: .7033303602658886,
            cloudCover: .60930121879377,
            precipProbability: .09081542523825537
        }, {
            temperatureMin: 30.569565848951143,
            temperatureMax: 42.00628389699854,
            temperatureError: 9.309473127186337,
            windSpeed: 8.288700291265254,
            humidity: .7024978121805326,
            cloudCover: .5983966768503893,
            precipProbability: .08722326260257092
        }, {
            temperatureMin: 30.270455410383654,
            temperatureMax: 41.662028066890535,
            temperatureError: 9.341955797652513,
            windSpeed: 8.30532474176686,
            humidity: .7016585496102629,
            cloudCover: .5835019788781233,
            precipProbability: .07825440403100993
        }, {
            temperatureMin: 29.9752235006263,
            temperatureMax: 41.32276097522174,
            temperatureError: 9.374805924779665,
            windSpeed: 8.321927192079674,
            humidity: .7008128212467083,
            cloudCover: .5697212916128361,
            precipProbability: .07552736762849473
        }, {
            temperatureMin: 29.683957603266304,
            temperatureMax: 40.98858315415393,
            temperatureError: 9.407992910380882,
            windSpeed: 8.338508459053033,
            humidity: .6999608776974333,
            cloudCover: .5618029847403124,
            precipProbability: .08383787595542219
        }, {
            temperatureMin: 29.39674402667269,
            temperatureMax: 40.65959362778787,
            temperatureError: 9.441484324330927,
            windSpeed: 8.355069381247192,
            humidity: .699102971411688,
            cloudCover: .5619763043695162,
            precipProbability: .09368268491594672
        }, {
            temperatureMin: 29.113667878429496,
            temperatureMax: 40.3358898828197,
            temperatureError: 9.475245974425462,
            windSpeed: 8.371610811867201,
            humidity: .6982393566056301,
            cloudCover: .5690408121164053,
            precipProbability: .09797952703795454
        }, {
            temperatureMin: 28.834813040108365,
            temperatureMax: 40.017567839655605,
            temperatureError: 9.509241981220354,
            windSpeed: 8.388133611683248,
            humidity: .6973702891869594,
            cloudCover: .5791591510830882,
            precipProbability: .09618815166474186
        }, {
            temperatureMin: 28.560262142414345,
            temperatureMax: 39.70472182398672,
            temperatureError: 9.543434857656104,
            windSpeed: 8.4046386419457,
            humidity: .6964960266791088,
            cloudCover: .5878953620748142,
            precipProbability: .09023010077497323
        }, {
            temperatureMin: 28.29009654070468,
            temperatureMax: 39.397444538840084,
            temperatureError: 9.577785593259998,
            windSpeed: 8.42112675730637,
            humidity: .6956168281449305,
            cloudCover: .5923932735144203,
            precipProbability: .0873426695427902
        }, {
            temperatureMin: 28.024396290878606,
            temperatureMax: 39.09582703710559,
            temperatureError: 9.612253742706217,
            windSpeed: 8.437598798755943,
            humidity: .6947329541099242,
            cloudCover: .5925552644482517,
            precipProbability: .09145348372687429
        }, {
            temperatureMin: 27.763240125653823,
            temperatureMax: 38.79995869455867,
            temperatureError: 9.646797518502117,
            windSpeed: 8.45405558658736,
            humidity: .6938446664850377,
            cloudCover: .5906686498251094,
            precipProbability: .0944926693928362
        }, {
            temperatureMin: 27.50670543123795,
            temperatureMax: 38.50992718337557,
            temperatureError: 9.681373887558207,
            windSpeed: 8.470497913395429,
            humidity: .6929522284890633,
            cloudCover: .5897964417837019,
            precipProbability: .09291435279156979
        }, {
            temperatureMin: 27.254868224398486,
            temperatureMax: 38.2258184461515,
            temperatureError: 9.715938671388711,
            windSpeed: 8.486926537122747,
            humidity: .6920559045706544,
            cloudCover: .5919105416700025,
            precipProbability: .09613165614964529
        }, {
            temperatureMin: 27.00780312993286,
            temperatureMax: 37.947716670437494,
            temperatureError: 9.750446649679821,
            windSpeed: 8.503342174163128,
            humidity: .6911559603299141,
            cloudCover: .5968340864384387,
            precipProbability: .10572631271673451
        }, {
            temperatureMin: 26.76558335856206,
            temperatureMax: 37.675704263791296,
            temperatureError: 9.784851666953719,
            windSpeed: 8.519745492529465,
            humidity: .6902526624397525,
            cloudCover: .6025419091006258,
            precipProbability: .11034455436464237
        }, {
            temperatureMin: 26.52828068523285,
            temperatureMax: 37.4098618293587,
            temperatureError: 9.81910674204804,
            windSpeed: 8.536137105099298,
            humidity: .6893462785668372,
            cloudCover: .6065552705106448,
            precipProbability: .10565247932776776
        }, {
            temperatureMin: 26.295965427846884,
            temperatureMax: 37.15026814199204,
            temperatureError: 9.85316418012299,
            windSpeed: 8.552517562946536,
            humidity: .6884370772922513,
            cloudCover: .6075336105757606,
            precipProbability: .09727725895867924
        }, {
            temperatureMin: 26.068706426429088,
            temperatureMax: 36.897000124902675,
            temperatureError: 9.886975686901303,
            windSpeed: 8.56888734876723,
            humidity: .6875253280319686,
            cloudCover: .6060758270561161,
            precipProbability: .09060054275642888
        }, {
            temperatureMin: 25.846571022727733,
            temperatureMax: 36.65013282686926,
            temperatureError: 9.920492484840324,
            windSpeed: 8.585246870412393,
            humidity: .6866113009569735,
            cloudCover: .6042414198708084,
            precipProbability: .0908524237140012
        }, {
            temperatureMin: 25.629625040254428,
            temperatureMax: 36.40973940000114,
            temperatureError: 9.953665430930156,
            windSpeed: 8.601596454534635,
            humidity: .685695266913206,
            cloudCover: .6040900105362371,
            precipProbability: .09840285148026785
        }, {
            temperatureMin: 25.41793276478823,
            temperatureMax: 36.1758910780581,
            temperatureError: 9.986445135807344,
            windSpeed: 8.617936340358513,
            humidity: .6847774973413233,
            cloudCover: .6061496508313466,
            precipProbability: .10362195315700322
        }, {
            temperatureMin: 25.211556925318305,
            temperatureMax: 35.948657155345,
            temperatureError: 10.018782083870322,
            windSpeed: 8.63426667358407,
            humidity: .6838582641962648,
            cloudCover: .6087955035043741,
            precipProbability: .10270043487519713
        }, {
            temperatureMin: 25.01055867545824,
            temperatureMax: 35.728104966177476,
            temperatureError: 10.05062675407929,
            windSpeed: 8.650587500432858,
            humidity: .6829378398666437,
            cloudCover: .6090008942616916,
            precipProbability: .10465626981662833
        }, {
            temperatureMin: 24.814997575330036,
            temperatureMax: 35.514299864928944,
            temperatureError: 10.08192974112221,
            windSpeed: 8.666898761843836,
            humidity: .6820164970940521,
            cloudCover: .6041080686281125,
            precipProbability: .11065390576744294
        }, {
            temperatureMin: 24.624931573906846,
            temperatureMax: 35.30730520666472,
            temperatureError: 10.112641876626876,
            windSpeed: 8.68320028782908,
            humidity: .6810945088922447,
            cloudCover: .5936291752135784,
            precipProbability: .11018888926863746
        }, {
            temperatureMin: 24.44041699184674,
            temperatureMax: 35.10718232837004,
            temperatureError: 10.142714350098878,
            windSpeed: 8.699491791997291,
            humidity: .6801721484662209,
            cloudCover: .5800071816831236,
            precipProbability: .10217438882655644
        }, {
            temperatureMin: 24.26150850480276,
            temperatureMax: 34.91399053077259,
            temperatureError: 10.172098829266252,
            windSpeed: 8.715772866252875,
            humidity: .6792496891312746,
            cloudCover: .5678051180688329,
            precipProbability: .09561007424380907
        }, {
            temperatureMin: 24.088259127221153,
            temperatureMax: 34.727787060771156,
            temperatureError: 10.20074757951261,
            windSpeed: 8.732042975678853,
            humidity: .6783274042320242,
            cloudCover: .5616580527890891,
            precipProbability: .09470470066463839
        }, {
            temperatureMin: 23.92072019663102,
            temperatureMax: 34.54862709447284,
            temperatureError: 10.228613582083208,
            windSpeed: 8.74830145361158,
            humidity: .6774055670613874,
            cloudCover: .5640301736707125,
            precipProbability: .09921030825789602
        }, {
            temperatureMin: 23.758941358432924,
            temperatureMax: 34.37656372084198,
            temperatureError: 10.255650650751507,
            windSpeed: 8.764547496914464,
            humidity: .6764844507796092,
            cloudCover: .5739652192601196,
            precipProbability: .10567587044859994
        }, {
            temperatureMin: 23.602970551188903,
            temperatureMax: 34.21164792596956,
            temperatureError: 10.281813546637533,
            windSpeed: 8.780780161457619,
            humidity: .6755643283333241,
            cloudCover: .5875100947562641,
            precipProbability: .10541089844071257
        }, {
            temperatureMin: 23.452853992414795,
            temperatureMax: 34.05392857796522,
            temperatureError: 10.307058090874646,
            windSpeed: 8.796998357810965,
            humidity: .6746454723746781,
            cloudCover: .5996035199976968,
            precipProbability: .09757332675906709
        }, {
            temperatureMin: 23.308636164887393,
            temperatureMax: 33.90345241247508,
            temperatureError: 10.33134127482637,
            windSpeed: 8.813200847157814,
            humidity: .6737281551805125,
            cloudCover: .6064430536169073,
            precipProbability: .09327225979686248
        }],
        monthly: {
            temperatureMin: {
                min: ["January", 22.087022114569223],
                max: ["July", 64.04197466845834]
            },
            temperatureMax: {
                min: ["January", 32.81752362016866],
                max: ["July", 84.13030118174744]
            },
            temperatureError: {
                min: ["July", 6.140871905935371],
                max: ["January", 10.504286437717745]
            },
            windSpeed: {
                min: ["August", 6.911499128072752],
                max: ["March", 9.647160089721057]
            },
            humidity: {
                min: ["March", .6276066083339461],
                max: ["September", .7322521509810982]
            },
            cloudCover: {
                min: ["August", .5018039963779445],
                max: ["April", .5956349019190301]
            },
            precipProbability: {
                min: ["July", .0547359850147825],
                max: ["February", .0996985606124524]
            }
        }
    }, LocationStats = function() {
        var e = {}, t = function(e, t, n) {
                n(test_data)
            }, n = function(e) {
                var t = Infinity,
                    n = -Infinity,
                    r = e.length,
                    i = (new Date).getFullYear(),
                    s = "Date,Temperature\n",
                    o, u, a, f;
                for (y = 0; y < 2; y++)
                    for (var l = 0; l < e.length; l++) o = e[l], u = (o.temperatureMax + o.temperatureMin) / 2, a = new Date(i, 0, y * r + l), s += a + "," + o.temperatureMin + ";" + u + ";" + o.temperatureMax + "\n", o.temperatureMin < t && (t = o.temperatureMin), o.temperatureMax > n && (n = o.temperatureMax);
                var c = new Dygraph($("#location_stats .plot_container")[0], s, {
                    customBars: !0,
                    valueRange: [t - 10, n + 10],
                    fillAlpha: .25,
                    strokeWidth: 0,
                    showLabelsOnHighlight: !1,
                    colors: ["rgb(100, 95, 65)"],
                    ylabel: "Temperature (F)"
                })
            }, r = function(e, t) {
                $("<div></div>").addClass("stat").append($("<div></div>").addClass("label").html(e)).append($("<div></div>").addClass("value").html(t)).appendTo($("#location_stats .monthly"))
            }, i = function(e) {
                $("#location_stats .monthly").empty(), e.temperatureMax && (r("Coldest", e.temperatureMax.min[0] + " (avg high: " + Math.round(e.temperatureMax.min[1]) + "&deg;)"), r("Warmest", e.temperatureMax.max[0] + " (avg high: " + Math.round(e.temperatureMax.max[1]) + "&deg;)")), e.precipProbability && (r("Most Precip", e.precipProbability.max[0]), r("Least Precip", e.precipProbability.min[0])), e.humidity && r("Most Humid", e.humidity.max[0] + " (avg: " + Math.round(100 * e.humidity.max[1]) + "%)"), e.cloudCover && (r("Cloudiest", e.cloudCover.max[0]), r("Sunniest", e.cloudCover.min[0])), e.windSpeed && r("Windiest", e.windSpeed.max[0] + " (avg: " + Math.round(e.windSpeed.max[1]) + " " + UIManager.speed_units() + ")")
            };
        return e.load = function(e) {
            UIManager.page_loading(), t(e.latitude, e.longitude, function(e) {
                n(e.days), i(e.monthly), UIManager.page_loaded("location_stats")
            })
        }, e
    }(),
    Router = function() {
        var e = {}, t = $(e);
        e.set_hash = function(e, t) {
            e = e.replace("#", "");
            var n = window.location.hash.replace("#", ""),
                i = e == n || !e.match("/f/") != !window.location.hash.match("/f/") || e.split("/").length != window.location.hash.split("/").length;
            i && UIManager.page_loading(), e == n ? hash_processor(t) : (r = t, window.location.hash = e)
        };
        var n = !0,
            r = !1;
        return e.set_latlon_hash = function(t, r, i, s, o, u) {
            var a = "/" + t + "/" + parseFloat(r).toFixed(4) + "," + parseFloat(i).toFixed(4);
            o != null && (a += "/" + o), s ? ($(LocationManager).trigger("new_location_str", {
                name: s,
                lat: +r,
                lon: +i
            }), n = !1) : n = !0, e.set_hash(a, u)
        }, e.hash_parse = function() {
            var e = window.location.hash,
                t = e.split("/");
            return {
                loc: t[2],
                time: t[3] ? +t[3] : null
            }
        }, hash_processor = function(e, i) {
            var s = window.location.hash,
                o = s.split("/"),
                u = o[2],
                a = o[3];
            e = e || r, r = !1;
            var f = s.match("#/f/") ? "forecast" : "location_stats";
            if (f == "forecast" && u && a) {
                var l = u.split(",")[0],
                    c = u.split(",")[1];
                $("body").first().removeClass("forecast stats time").addClass("time"), Forecaster.get_forecast({
                    lat: l,
                    lon: c,
                    time: a
                }, null, "time_machine"), !form_submitted && n && LocationManager.loc_for_lat_long(l, c, !e)
            } else if (u) {
                var l = +u.split(",")[0],
                    c = +u.split(",")[1],
                    h = store.enabled && store.get("last_location");
                h && h.name && l == h.lat && c == h.lon && ($(LocationManager).trigger("new_location_str", h), n = !1), $("body").first().removeClass("forecast stats time").addClass(f == "forecast" ? "forecast" : "stats"), f == "forecast" ? Forecaster.get_forecast({
                    lat: l,
                    lon: c
                }, i, "forecast") : LocationStats.load({
                    lat: l,
                    lon: c
                }), !i && !form_submitted && n && LocationManager.loc_for_lat_long(l, c, !e)
            }
            form_submitted = !1, n = !0, t.trigger("load_page", {
                lat: l,
                lon: c,
                time: a
            })
        }, e.reload = function(e) {
            hash_processor(!1, e && typeof e != "object")
        }, $(window).bind("hashchange", e.reload), e
    }();
$(window).load(ENV.begin), window.applicationCache && (window.applicationCache.addEventListener("updateready", function(e) {
    console.log("updateready fired"), window.applicationCache.status == window.applicationCache.UPDATEREADY ? (window.applicationCache.swapCache(), console.log("swapCache called"), $.get("/app_reload.json", function(e) {
        e && e.version != null && store.enabled && e.version != store.get("app_reload_version") ? (console.log("cache reload immediately, v:", e.version), store.enabled && store.set("app_reload_version", e.version), window.location.reload()) : console.log("cache reload next time, v:", e.version)
    })) : console.log("Manifest did’t change, nothing new")
}, !1), window.applicationCache.addEventListener("error", function(e) {
    console.log("ERROR updating application cache")
}), store.enabled && store.get("app_reload_version") == null && $.get("/app_reload.json", function(e) {
    e && e.version != null && store.enabled && store.set("app_reload_version", e.version)
})), $(ENV).bind("criteria_met", function() {
    Settings.load_settings()
}), $(ENV).bind("criteria_failed", function(e, t) {
    t == "not_homescreen" ? ($("#install").show(), $("body").addClass("install")) : UIManager.page_error(t)
}), $(Settings).bind("settings_loaded", function() {
    window.mobile && (UIManager.setup_mobile(), $("#time_machine_view").show()), Map.initialize();
    var e = Router.hash_parse();
    e.time ? Router.reload() : store.enabled && store.get("use_current_location") ? LocationManager.update_current_location(!0) : (LocationManager.update_current_location(!1), window.mobile || !window.location.hash || window.location.hash == "#" || window.location.hash == "#/" ? LocationManager.blank_load() : Router.reload()), $("#sidebar").show()
}), $(UIManager).bind("forecast_clicked", function(e, t) {
    $("#saved_forecasts .saved_forecast").removeClass("selected"), t.elem.addClass("selected"), window.mobile && Sidebar.close_sidebar(), Router.set_latlon_hash("f", t.lat, t.lon, t.name)
}), $(LocationManager).bind("new_location_str", function(e, t) {
    LocationManager.save_last_location(t), $("#current_location").text(t.name), window.mobile ? $("#search_area .location_field").html(t.name) : $("#search_area .location_field").val(t.name), $("#sidebar #forecast_location_field").val(t.name)
}), $("#current_location_entry").on("click", function() {
    window.mobile && Sidebar.close_sidebar(), LocationManager.update_current_location(!0)
}), $(LocationManager).bind("location_updated", function(e, t) {
    $("#saved_forecasts .saved_forecast").removeClass("selected");
    if (Forecaster.latitude == t.lat && Forecaster.longitude == t.lon) return Router.reload();
    t.name && $(LocationManager).trigger("new_location_str", t), Router.set_latlon_hash("f", t.lat, t.lon, t.name)
}), $(Forecaster).bind("requesting_forecast", UIManager.show_loading_screen), $(Forecaster).bind("forecast_loaded", function(e, t) {
    UIManager.set_forecast(t), setTimeout(function() {
        $("#search_area .refresh").removeClass("loading")
    }, 500)
}), $(Forecaster).bind("forecast_loaded", function(e, t) {
    Map.set(t)
}), $(Forecaster).bind("time_forecast_loaded", function(e, t) {
    UIManager.build_time_machine(t), setTimeout(function() {
        $("#search_area .refresh").removeClass("loading")
    }, 500)
}), $(Forecaster).bind("current_conditions_loaded", function(e, t) {}), $("#edit_locations_button, #edit_forecasts_button").on("click", function() {
    if ($(this).hasClass("disabled")) return;
    UIManager.toggle_forecast_editing()
}), $("#done_forecasts_button").on("click", UIManager.exit_forecast_editing), $(Sidebar).bind("finished_closing_sidebar started_opening_sidebar started_hiding_sidebar", UIManager.exit_forecast_editing), $(".saved_forecast.editable .delete_button").on("click", function(e) {
    return event.preventDefault(), $(this).parents(".saved_forecast.editable").first().toggleClass("deleting"), !1
}), $(Forecaster).bind("invalid_forecast", function(e) {
    UIManager.page_error("forecast")
}), $(Forecaster).bind("invalid_time_forecast", function(e) {
    UIManager.page_error("time_machine")
});
var form_submitted = !1;
$("#sidebar #forecast_location_field").click(function() {
    $(this).select()
}), $("#search_area .location_field").bind("focus", function() {
    var e = $(this);
    setTimeout(function() {
        e.select()
    }, 0)
});
var submit_form = function(e, t) {
    var n = window.mobile ? $("#sidebar #forecast_location_field").val().trim() : $("#search_area .location_field").val().trim(),
        r = t ? "s" : "f";
    form_submitted = !0, window.mobile && Sidebar.close_sidebar(), $("#sidebar #forecast_location_field").blur(), $("#search_area .location_field").blur();
    if (!n) return LocationManager.update_current_location(!0);
    n.toLowerCase() == "current location" ? LocationManager.use_current_location || LocationManager.update_current_location(!1) : LocationManager.use_current_location && e == null && LocationManager.update_current_location(!1);
    if (n && n.match(/^[\d\-\.]+\s*,\s*[\d\-\.]+$/) !== null) {
        var i = n.split(",")[0],
            s = n.split(",")[1],
            o = "/" + r + "/" + i + "," + s;
        e != null && (o += "/" + e), Router.set_hash(o)
    } else if (LocationManager.use_current_location) Router.set_latlon_hash(r, Forecaster.latitude, Forecaster.longitude, null, e);
    else {
        UIManager.page_loading();
        if (n == Forecaster.location_str && Forecaster.latitude != null && Forecaster.longitude != null) {
            var u = !window.location.hash.match("#/" + r + "/"),
                a = e != Forecaster.time;
            if (u || a) {
                var o = "/" + r + "/" + Forecaster.latitude + "," + Forecaster.longitude;
                e != null && (o += "/" + e), Router.set_hash(o)
            } else Router.reload();
            return
        }
        LocationManager.loc_for_string(n, function(t) {
            t.name ? $(LocationManager).trigger("new_location_str", t) : LocationManager.loc_for_lat_long(t.lat, t.lon, !0), Router.set_latlon_hash(r, t.lat, t.lon, t.name, e)
        })
    }
};
$("#search_area .buttons .forecast").click(function() {
    submit_form()
}), $("#sidebar #forecast_form").submit(function(e) {
    return e.preventDefault(), window.mobile ? $("#search_area .location_field").html($("#sidebar #forecast_location_field").val()) : $("#search_area .location_field").val($("#sidebar #forecast_location_field").val()), submit_form(), Sidebar.close_sidebar(), !1
}), $("#search_area .location_field").keydown(function(e) {
    e.which == 13 && submit_form()
}), $("#search_area .submit_button").click(function() {
    submit_form()
}), $("#search_area .buttons .stats").click(function() {
    submit_form(null, !0)
}), $("#add_location_button").click(LocationManager.add_location), $("#search_area .buttons .time_machine_modal .time_submit").click(function() {
    $(UIManager).trigger("time_chosen")
}), $("#search_area .buttons .time_machine_modal .time_field").keydown(function(e) {
    e.which == 13 && $(UIManager).trigger("time_chosen")
}), $(UIManager).bind("time_chosen", function(e) {
    var t = $("#search_area .buttons .time_machine_modal .time_field").val(),
        n = Date.parseFancy(t);
    if (!n) $("#search_area .buttons .time_machine_modal .error").fadeIn(100);
    else {
        var r = moment(n).startOf("day").add("hours", 12 - Forecaster.tz_offset_from_local);
        submit_form(r.unix())
    }
}), $(Router).bind("load_page", function(e, t) {
    $("#error").hide(), !window.mobile && UIManager.toggle_time_machine_modal && UIManager.toggle_time_machine_modal(!1), UIManager.hide_day_panel()
}), $(Forecaster).bind("time_forecast_loaded", function(e, t) {
    t.currently && $("#search_area .buttons .time_machine_modal .time_field").val(moment(1e3 * t.currently.time).add("hours", Forecaster.tz_offset_from_local).format("MMMM D, YYYY"))
});
var DataPoints = function() {
    var e = {}, t = function(e, t, n) {
            return e === undefined || n >= 1 ? t : t === undefined || n <= 0 ? e : e + (t - e) * n
        }, n = function(e, t, n) {
            if (e === undefined || n >= 1) return t;
            if (t === undefined || n <= 0) return e;
            e *= Math.PI / 180, t *= Math.PI / 180;
            var r = Math.atan2(Math.sin(e) * (1 - n) + Math.sin(t) * n, Math.cos(e) * (1 - n) + Math.cos(t) * n) * 180 / Math.PI;
            return r >= 0 ? r : r + 360
        }, r = function(e, n, r, i, s) {
            if (e === undefined || i === undefined) return t(n, r, s);
            if (n === undefined || s >= 1) return r;
            if (r === undefined || s <= 0) return n;
            var o = -0.5 * e + 1.5 * n - 1.5 * r + .5 * i,
                u = e - 2.5 * n + 2 * r - .5 * i,
                a = -0.5 * e + .5 * r,
                f = n;
            return ((o * s + u) * s + a) * s + f
        }, i = function(e, t, r, i, s) {
            if (e === undefined || i === undefined) return n(t, r, s);
            if (t === undefined || s >= 1) return r;
            if (r === undefined || s <= 0) return t;
            e *= Math.PI / 180, t *= Math.PI / 180, r *= Math.PI / 180, i *= Math.PI / 180;
            var o = Math.cos(e),
                u = Math.sin(e),
                a = Math.cos(t),
                f = Math.sin(t),
                l = Math.cos(r),
                c = Math.sin(r),
                h = Math.cos(i),
                p = Math.sin(i),
                d = -0.5 * o + 1.5 * a - 1.5 * l + .5 * h,
                v = o - 2.5 * a + 2 * l - .5 * h,
                m = -0.5 * o + .5 * l,
                g = a,
                y = -0.5 * u + 1.5 * f - 1.5 * c + .5 * p,
                b = u - 2.5 * f + 2 * c - .5 * p,
                w = -0.5 * u + .5 * c,
                E = f,
                S = Math.atan2(((y * s + b) * s + w) * s + E, ((d * s + v) * s + m) * s + g) * 180 / Math.PI;
            return S >= 0 ? S : S + 360
        };
    e.cubic = function(e, n, s, o, u) {
        var a = new DataPoint,
            f, l;
        for (f in a)
            if (s.hasOwnProperty(f) && f.indexOf("Error") === -1) switch (f) {
                case "time":
                case "forecastTime":
                case "precipIntensityMaxTime":
                case "temperatureMinTime":
                case "temperatureMaxTime":
                    a[f] = Math.round(t(n[f], s[f], u));
                    break;
                case "precipType":
                    a[f] = u < .5 ? n[f] !== undefined ? n[f] : s[f] : s[f] !== undefined ? s[f] : n[f];
                    break;
                case "windBearing":
                    a[f] = i(e && e[f], n[f], s[f], o && o[f], u);
                    break;
                case "summary":
                case "icon":
                case "sunriseTime":
                case "sunsetTime":
                    break;
                default:
                    l = f + "Error", n[f] !== undefined ? s[f] !== undefined ? (a[f] = r(e && e[f], n[f], s[f], o && o[f], u), a[l] = r(e && e[l], n[l], s[l], o && o[l], u)) : (a[f] = n[f], a[l] = n[l]) : s[f] !== undefined && (a[f] = s[f], a[l] = s[l])
            }
            return a
    };
    var s = function(e, t) {
        return t *= 3600, e = new Date((e + t) * 1e3), e.setUTCHours(0, 0, 0, 0), Math.floor(e.getTime() / 1e3) - t
    };
    return e.infillHourly = function(t) {
        if (!t || !t.length) return t;
        var n = [],
            r = t[0].time,
            i = 0;
        while (i !== t.length) r < t[i].time ? (n.push(e.cubic(t[i - 2], t[i - 1], t[i], t[i + 1], (r - t[i - 1].time) / (t[i].time - t[i - 1].time))), r += 3600) : r > t[i].time ? ++i : (n.push(t[i]), r += 3600, ++i);
        return n
    }, e
}();

