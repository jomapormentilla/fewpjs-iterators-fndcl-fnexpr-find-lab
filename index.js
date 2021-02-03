const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
] 

function superbowlWin( obj ) {
  let result = obj.find(prop => {
    return prop["result"] === "W"
  })

  if (result) {
    return result["year"]
  }
}

superbowlWin(record)