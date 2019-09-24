function zipList(list1, list2) {
  let combinedList = [];
  for (let i = 0; i < list1.length; i++) {
    combinedList.push(list1[i]);
    combinedList.push(list2[i]);
  }
  return combinedList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}




console.log(zipList([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
