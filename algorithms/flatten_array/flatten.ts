function flatten(arr: any[]) {
  // Iterate through the array
  // accumulator is initialized to an empty []
  const flatArr = arr.reduce((acc, item) => {
    // If the current item is an array
    if (Array.isArray(item)) {
      // Recurse through that array and concat it to
      // the current accumulator array
      acc = acc.concat(flatten(item));
    } else {
      // Otherwise just push it onto the accumulator array
      acc.push(item);
    }

    return acc;
  }, []);

  return flatArr;
}

export default flatten;
