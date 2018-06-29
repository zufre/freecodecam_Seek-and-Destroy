function destroyer(arr) {
let args = [...arguments];
 args.splice(0,1);

 
 return arr.filter((value) => {
  return args.indexOf(value) === -1;
 });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
