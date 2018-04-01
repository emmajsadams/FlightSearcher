export default (datetime: string) => {
  const milli = datetime.replace(/\/Date\((-?\d+)\)\//, "$1");
  return new Date(parseInt(milli, 0)).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
};
