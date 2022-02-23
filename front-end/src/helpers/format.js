//format in money format
const formatting = (str) => {
  //if number type, convert to string
  if (typeof str === "number") str = str.toString();
  //if comma included return the str
  if (str.includes(",")) return `$${str}`;
  //to keep track negative number
  const isNegative = str.includes("-");
  if (isNegative) str = str.slice(1);
  //keep track decimal number
  const isfloatNum = str.includes(".");
  if (str.split(".")[0].length >= 4) {
    if (isfloatNum) {
      const decArr = str.split(".");
      str = decArr[0];
      var decPart = decArr[1];
    }
    const newStr = str.split("").reverse().join("");
    const newArr = newStr.match(/\d{3}/g) || [];
    const revStr = newArr.join("");
    const returnVal = (newArr.join(",") + "," + newStr.slice(revStr.length))
      .split("")
      .reverse()
      .join("");
    let formatVal = returnVal[0] === "," ? returnVal.slice(1) : returnVal;
    formatVal = isfloatNum ? formatVal + "." + decPart : formatVal;
    return isNegative ? "-$" + formatVal : "$" + formatVal;
  }
  return isNegative ? "-$" + str : "$" + str;
};

export default formatting;
