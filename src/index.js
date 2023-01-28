
// You should implement your task here.

module.exports = function towelSort (matrix) {
      if (matrix == null) {
        return [];
    }
    let newArr = [];
    let newStr = matrix
        .map((item, index) => {
            return index % 2 != 0
                ? item.sort((a, b) => {
                      return b - a;
                  })
                : item.sort((a, b) => {
                      return a - b;
                  });
        })
        .forEach((index) => {
            index.forEach((i) => {
                newArr.push(i);
            });
        });

    return newArr;
}
