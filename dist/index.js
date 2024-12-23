"use strict";var O=function(i,n){return function(){return n||i((n={exports:{}}).exports,n),n.exports}};var p=O(function(W,q){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),f=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),E=require('@stdlib/utils-constant-function/dist'),x=require('@stdlib/utils-noop/dist'),A=require('@stdlib/object-assign/dist'),T=require('@stdlib/assert-is-number/dist').isPrimitive,V=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/assert-is-plain-object/dist'),j=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,z=require('@stdlib/assert-is-positive-number/dist').isPrimitive,I=require('@stdlib/assert-has-own-property/dist'),c=require('@stdlib/constants-float64-max/dist'),d=require('@stdlib/random-base-gumbel/dist').factory,h=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function m(i,n,o){var r,e,t,l,v;if(!T(i)||V(i))throw new TypeError(s('0pn6v',i));if(!z(n))throw new TypeError(s('0pn72',n));if(arguments.length>2){if(!F(o))throw new TypeError(s('0pn2V',o));if(r=A({},o),I(r,"iter")){if(!j(r.iter))throw new TypeError(s('0pn2t',"iter",r.iter))}else r.iter=c;t=d(i,n,r),r.prng===void 0&&r.copy!==!1&&(r.state=t.state)}else t=d(i,n),r={iter:c,state:t.state};return v=0,e={},a(e,"next",y),a(e,"return",L),r&&r.prng?(a(e,"seed",null),a(e,"seedLength",null),f(e,"state",E(null),x),a(e,"stateLength",null),a(e,"byteLength",null)):(u(e,"seed",P),u(e,"seedLength",R),f(e,"state",G,S),u(e,"stateLength",b),u(e,"byteLength",w)),a(e,"PRNG",t.PRNG),h&&a(e,h,N),e;function y(){return v+=1,l||v>r.iter?{done:!0}:{value:t(),done:!1}}function L(g){return l=!0,arguments.length?{value:g,done:!0}:{done:!0}}function N(){return m(i,n,r)}function P(){return t.PRNG.seed}function R(){return t.PRNG.seedLength}function b(){return t.PRNG.stateLength}function w(){return t.PRNG.byteLength}function G(){return t.PRNG.state}function S(g){t.PRNG.state=g}}q.exports=m
});var M=p();module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
