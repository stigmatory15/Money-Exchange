// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
       let h = 50;
       let q = 25;
       let d = 10;
       let n = 5;
       let p = 1;
       let x = currency % h;
       let h1 = Math.trunc(currency / h);
       let x1 = x % q;
       let q1 = Math.trunc(x / q);
       let x2 = x1 % d;
       let d1 = Math.trunc(x1 / d);
       let x3 = x2 % n;
       let n1 = Math.trunc(x2 / n);
       let p1 = Math.trunc(x3 / p);
       let obj = {};
     if (currency > 10000) {
         obj.error = "You are rich, my friend! We don't have so much coins for exchange";
         return obj;
     }
     else {
         if (h1 > 0) { obj.H = h1; };
         if (q1 > 0) { obj.Q = q1; };
         if (d1 > 0) { obj.D = d1; };
         if (n1 > 0) { obj.N = n1; };
         if (p1 > 0) { obj.P = p1; };
     }
       return obj;
}
