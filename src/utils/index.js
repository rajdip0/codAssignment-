export default class DetectContactInfo {
     #phoneNumberRegx = /(?:\b\d[\d\-#$@*%\s]*\d\b|\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b)/;
     #emailRegx = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;
     static instance = null;

     mergeSort(arr) {
          if (arr.length <= 1) {
               return arr;
          }
          const middle = Math.floor(arr.length / 2);
          const left = arr.slice(0, middle);
          const right = arr.slice(middle);
          return this.merge(this.mergeSort(left), this.mergeSort(right));
     }

     merge(left, right) {
          let result = [];
          let leftIndex = 0;
          let rightIndex = 0;

          while (leftIndex < left.length && rightIndex < right.length) {
               if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
               } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
               }
          }

          return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
     }

     detectContactInfo(text) {

          const matches = text.match(this.#phoneNumberRegx) || [];
          const isPhoneNumber = matches.length > 0 && matches[0].length >= 10;
          const isEmail = text.match(this.#emailRegx) !== null;

          if (isPhoneNumber || isEmail) {
               return {
                    isPhoneNumber,
                    isEmail,
                    text
               }
          }
          return {
               isPhoneNumber: false,
               isEmail: false,
               text: ''
          };
     }


}