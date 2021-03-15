module.exports = function toReadable (number) {
  console.log(number)
  const array = String(number).split('');
  const unitsArray = ['',' one',' two',' three',' four',' five',' six',' seven',' eight',' nine'];
  const teensArray = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const dozensArray = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

  if (number == 0 || number == '') return 'zero';
  if (array.length == 1) {
    return (unitsArray[array[0]]).trim();
  }
  else if (array.length == 2) {
    if (array[0] == 1) {
      return teensArray[array[1]];
    }
    else return (dozensArray[array[0]] + unitsArray[array[1]]);
  } 
  else if (array.length == 3) {
    if (array[1] == 1) {
      return ((unitsArray[array[0]]).trim() + ' hundred ' + teensArray[array[2]]);
    }
    if (array[1] == 0) {
      return ((unitsArray[array[0]]).trim() + ' hundred' + unitsArray[array[2]]);
    }
    else return ((unitsArray[array[0]]).trim() + ' hundred ' + dozensArray[array[1]] + unitsArray[array[2]]);
  };
}
