const arr = [4,1,6,2,3,5,10,8,7,9];
const bucketSort = arr => {
   if (arr.length === 0) {
      return arr;
   }
   let i,
   minValue = arr[0],
   maxValue = arr[0],
   bucketSize = 5;
   arr.forEach(function (currentVal) {
      if (currentVal < minValue) {
         minValue = currentVal;
      } else if (currentVal > maxValue) {
         maxValue = currentVal;
      }
   })
//    console.log(minValue)
//    console.log(maxValue)
   let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
//    console.log(bucketCount)
   let allBuckets = new Array(bucketCount);
   for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
   }
//    console.log(allBuckets)
   arr.forEach(function (currentVal) {
      allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
   });
   console.log(allBuckets)

   arr.length = 0;
   console.log(arr)
   allBuckets.forEach(function(bucket) {
      insertion(bucket);
      bucket.forEach(function (element) {
         arr.push(element)
      });
   });
   return arr;
}
const insertion = arr => {
   let length = arr.length;
   let i, j;
   for(i = 1; i < length; i++) {
      let temp = arr[i];
      for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
         arr[j+1] = arr[j];
      }
      arr[j+1] = temp;
   }
   return arr;
};
console.log(bucketSort(arr));