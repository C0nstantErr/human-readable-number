module.exports = function toReadable (number) {
  const digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six' , 'seven', 'eight', 'nine'];
  let result = '';

  // let thousands;
  let hundreds; 
  let dozens;

  let thousands = Math.trunc(number / 1000);
  let reminder = number % 1000; 
  if (thousands) {
    result += digit[thousands] + ' ' + 'thousand';
  }

  hundreds = Math.trunc(reminder / 100);
  reminder = reminder % 100; 

  if (hundreds) {
      result += digit[hundreds] + ' ' + 'hundred';    
  }

  dozens = Math.trunc(reminder / 10);
  if (dozens > 1) {
    switch (dozens) {
      case 2: 
        result += ' ' + 'twenty';
        break;
      case 3: 
        result += ' ' + 'thirty';
        break;
      case 4: 
        result += ' ' + 'forty';
        break;
      case 5:
        result += ' ' + 'fifty';
        break;
      case 8: 
        result += ' ' + 'eighty';
        break;
      default:
        result += ' ' + digit[dozens] + 'ty';
    }
  } else if (dozens == 1) {
    switch (reminder) {
      case 10: 
        result += ' ' + 'ten';
        break;
      case 11:
        result += ' ' + 'eleven';
        break;
      case 12:
        result += ' ' + 'twelve';
        break;
      case 13:
        result += ' ' + 'thirteen';
        break;
      case 15: 
        result += ' ' + 'fifteen';
        break;
      case 18: 
        result += ' ' + 'eighteen';
        break;
      default: 
        result += ' ' + digit[reminder % 10] + 'teen';
    }
  }

  reminder = reminder % 10;

  if (reminder && dozens > 1) {
    result += ' ' + digit[reminder];
  } else if (reminder && dozens < 1) {
    result += ' ' + digit[reminder];
  }

  if (number === 0) return digit[0];
  else return result.trim(); 
}
