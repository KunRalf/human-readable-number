module.exports = function toReadable (number) {
  let numberNum1 = Math.floor(number/100)%10;
  let numberNum2 = Math.floor(number/10)%10;
  let numberNum3 = number%10;
  let readableNum1 = ['', ' one hundred', ' two hundred', ' three hundred', ' four hundred', ' five hundred', ' six hundred', ' seven hundred', ' eight hundred', ' nine hundred'];
  let readableNum2 = ['', ' ten', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
  let readableNum3 = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
  let readableNum23 = [' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
  let result = readableNum1[numberNum1];
  if (number === 0) return 'zero';
    if (numberNum2 != 1){
        result += readableNum2[numberNum2];
        result += readableNum3[numberNum3];
    } else {
        result += readableNum23[numberNum3];
    }
  return result.slice(1);
  }
   

