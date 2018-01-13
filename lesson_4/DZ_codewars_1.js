/*
Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.
 */
function always(n) {
    return function () { return n };

  //  return function always() { return n };

  /*  function always (n) {
        return function() {
            return n >= 0 ? n : undefined;
        }
    } */
}


console.log(always(45));