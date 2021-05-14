// Your code here

function createEmployeeRecord(testEmployee){
    let employee = {}
    employee.firstName = testEmployee[0]
    employee.familyName = testEmployee[1]
    employee.title = testEmployee[2]
    employee.payPerHour = testEmployee[3]
    employee.timeInEvents = []
    employee.timeOutEvents = []
    return employee
}
let arrayOfArrays = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]


function createEmployeeRecords(arrayOfArrays){
    
    let employeeRecords = []
    arrayOfArrays.forEach(function(arrays) {
        let employee = {}
        employee.firstName = arrays[0]
        employee.familyName = arrays[1]
        employee.title = arrays[2]
        employee.payPerHour = arrays[3]
        employee.timeInEvents = []
        employee.timeOutEvents = []
        employeeRecords.push(employee)  
         
    })
    console.log(employeeRecords)
    createTimeInEvent(employeeRecords)
    return employeeRecords

}

createEmployeeRecords(arrayOfArrays)
// push time in object into time in array
// employee object needs to get into other function

function createTimeInEvent(employeeRecords){
    let timeInEvent = {}
    let newEvent = "2014-02-28 1400"
    let newEventArray = newEvent.split(" ");
    let dateIn = newEventArray[0]
    let timeIn = newEventArray[1]
    timeInEvent.date = dateIn 
    timeInEvent.time = timeIn
    employeeRecords.forEach((employeeRecord) =>{  
    let employeeTimeIn = employeeRecord.timeInEvents
    employeeTimeIn.push(timeInEvent)
    debugger;
    return employeeRecord

})
}
