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
    console.log(employee)
    
    return employeeRecords
    

}

createEmployeeRecords(arrayOfArrays)
// push time in object into time in array
// employee object needs to get into other function

let employee = ["moe", "sizlak", "barkeep", 2]
let dateStamp = "2018-01-01 2300"

function createTimeInEvent(employee, dateStamp){

    let timeInEvent = {}
    let newEventArray = dateStamp.split(" ");
    let dateIn = newEventArray[0]
    let timeIn = parseInt(newEventArray[1], 10)
    timeInEvent.date = dateIn 
    timeInEvent.time = timeIn 
    debugger;
    let employeeTimeIn = employee.timeInEvents
    employeeTimeIn.push(timeInEvent)
    
    return employee
}


