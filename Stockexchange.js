function computePrices(s, p, q) {

   let sCopy = [...s];
//    console.log(sCopy);

   s.sort(function(a, b) {
      return a - b
   });
//    console.log(s);

   let arrayS = [];

   let resultArray = [];

   let k = q.length;

   for (let i = 0; i < k; i++) {

         for (let j = 0; j < s.length; j++) {

          if(q[i] >= s[s.length - 1]) {

//                 arrayS.push(s[s.length - 1]);

                resultArray.push(p[sCopy.indexOf(s[s.length - 1])]);

                break;

             }

            else if(q[i] < s[j]) {

//                arrayS.push(s[j - 1]);

               resultArray.push(p[sCopy.indexOf(s[j - 1])])

               break;
            }
         }

//          console.log(arrayS);
   }


   return resultArray

}
// computePrices([1, 10, 3], [10, 5, 7], [2, 22, 123, 6, 5]);
// computePrices([1, 100], [10, 1000], [1, 2, 3, 5000]);
// computePrices([12, 15, 1, 50], [7, 32, 43, 77], [1, 12, 100, 1000]);
computePrices([1, 10, 3], [10, 5, 7], [2, 22, 123, 6, 5]);