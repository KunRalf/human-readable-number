module.exports = function toReadable (number) {
  let num = String(number).split('');
  let numberNum1 = Number(num[0]); 
  let numberNum2 = Number(num[1]); 
  let numberNum3 = Number(num[2]); 
  let readableNumUntil10 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let readableNumDozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let readableHundred = ['', 'hundred'];
  let readableDesyatie = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    if (number === 0) return 'zero';
    if (number < 10) return `${readableNumUntil10[number]}`;
    if (number === 10) return `${readableNumDozens[1]}`;
    if (number > 10 && number <20) return (`${readableDesyatie[numberNum2]}`).trim();
    if (number >= 20 && number < 100) return `${readableNumDozens[numberNum1]} ` + `${readableNumUntil10[numberNum2]}`;
    if (number > 100 && number < 1000) {
      if (number > 120 && number < 200 || number > 220 && number < 300 || number > 320 && number < 400 || number > 420 && number < 500 
        || number > 520 && number < 600 || number > 620 && number < 700 || number > 720 && number < 800 || number > 820 && number < 900 
        || number > 920 && number < 1000) {
          return `${readableNumUntil10[numberNum1]} ` + `${readableHundred[1]} ` + `${readableNumDozens[numberNum2]} ` + `${readableNumUntil10[numberNum3]}`;
      }
      else if (number > 110 && number < 120 || number > 210 && number < 220 || number > 310 && number < 320 || number > 410 && number < 420 
        || number > 510 && number < 520 || number > 610 && number < 620 || number > 710 && number < 720 || number > 810 && number < 820 
        || number > 910 && number < 920) {
          return (`${readableNumUntil10[numberNum1]} ` + `${readableHundred[1]} ` + `${readableDesyatie[numberNum3]}`).trim();
        }
      else if (number === 110 ||number === 210 || number === 310 || number === 410 || number === 510 || number === 610 || number === 710 || number === 810 || number === 910){
        return `${readableNumUntil10[numberNum1]} ` + `${readableHundred[1]} ` + `${readableNumDozens[1]}`;
      }
      else if (number === 120 ||number === 220 || number === 320 || number === 420 || number === 520 || number === 620 || number === 720 || number === 820 || number === 920) {
        return `${readableNumUntil10[numberNum1]} ` + `${readableHundred[1]} ` + `${readableNumDozens[2]}`;
      }
      else {
        if ( numberNum3 === 0) {
          return (`${readableNumUntil10[numberNum1]} ` + `${readableHundred[1]} ` + `${readableDesyatie[numberNum2]}`).trim();
        } 
        else {
          return (`${readableNumUntil10[numberNum1]} ` + `${readableHundred[1]} ` + `${readableNumUntil10[numberNum3]}`).trim();
        }
      }
    }
    if (number === 100 || 200 || 300 || 400 || 500 || 600 || 700 || 800 || 900) return `${readableNumUntil10[numberNum1]} ` + `${readableHundred[1]}`;
  }
   

