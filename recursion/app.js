function sum(num) {
  if (num > 0) {
    return num + sum(num - 1);
  } else {
    return num;
  }
}

/*

function sum(5) {
    if (5 > 0) {
      return 5 + sum(5 - 1);
    } else {
      return 5;
    }
  }

  */
