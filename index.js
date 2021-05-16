// Your code here
// let employee = {firstName: "Julius", familyName: "Caesar", title: "General", payPerHour: 27, 

// timeInEvents: [
//     {
//         "type": "TimeIn",
//         "date": "044-03-14",
//         "hour": 900
//     },
//     {
//         "type": "TimeIn",
//         "date": "0044-03-15 ",
//         "hour": 900
//     },
//     ], timeOutEvents: [{
//         "type": "TimeOut",
//         "date": "0044-03-14",
//         "hour": 2100
//     },
//         {
//             "type": "TimeOut",
//             "date": "0044-03-15",
//             "hour": 1100
//         }
//     ]}

//     let arrayOfArrays = [
//         ["moe", "sizlak", "barkeep", 2],
//         ["bartholomew", "simpson", "scamp", 3]
//       ]
//       let dateStamp = "2018-01-01 2300"

// function createEmployeeRecord(testEmployee){
//     let employee = {}
//     employee.firstName = testEmployee[0]
//     employee.familyName = testEmployee[1]
//     employee.title = testEmployee[2]
//     employee.payPerHour = testEmployee[3]
//     employee.timeInEvents = []
//     employee.timeOutEvents = []
//     return employee
// }


// function createEmployeeRecords(arrayOfArrays){
    
//     let employeeRecords = []
//     arrayOfArrays.forEach(function(arrays) {
//         let employee = {}
//         employee.firstName = arrays[0]
//         employee.familyName = arrays[1]
//         employee.title = arrays[2]
//         employee.payPerHour = arrays[3]
//         employee.timeInEvents = []
//         employee.timeOutEvents = []
//         employeeRecords.push(employee)  
//     })
//     return employeeRecords
// }

// createEmployeeRecords(arrayOfArrays)

// function createTimeInEvent (employee, dateStamp){
//     let timeInEvent = {}
//     let newEventArray = dateStamp.split(' ')
//     let type = "TimeIn"
//     let hour = newEventArray[1]
//     let date = newEventArray[0]
//     timeInEvent.type = type
//     timeInEvent.date = date
//     timeInEvent.hour = parseInt(hour, 10)
//     employee.timeInEvents.push(timeInEvent)
//     return employee
// }

// createTimeInEvent(employee, dateStamp)

// function createTimeOutEvent(employee, dateStamp){
//     let timeOutEvent = {}
//     let newEventArray = dateStamp.split(' ')
//     let type = "TimeOut"
//     let hour = newEventArray[1]
//     let date = newEventArray[0]
//     timeOutEvent.type = type
//     timeOutEvent.date = date
//     timeOutEvent.hour = parseInt(hour, 10)
//     employee.timeOutEvents.push(timeOutEvent)
//     return employee 
// }
// createTimeOutEvent(employee, dateStamp)

// function hoursWorkedOnDate(employee, dateStamp){
//     let timeIn = employee.timeInEvents[0].hour
//     let timeOut = employee.timeOutEvents[0].hour
//     return (timeOut - timeIn) / 100
// }



// function wagesEarnedOnDate(employee, dateStamp){
//     let timeIn = employee.timeInEvents[0].hour
//     let timeOut = employee.timeOutEvents[0].hour
//     let hoursWorked = (timeOut - timeIn) / 100
//     let employeeRate = employee.payPerHour
//     return hoursWorked * employeeRate
// }

// function allWagesFor(employeeRecord){
    // FIRST TRY
    // return employeeRecord.timeOutEvents.reduce((accumulator, currentValue)=>{
    //     return accumulator + wagesEarnedOnDate(employeeRecord, currentValue.date);
    // })
    // SECOND TRY
    // let employeeCopy = Object.assign({}, employeeRecord);
    // let totalWage = 0;
    // employeeCopy.timeOutEvents.forEach((timeOutEvent)=>{
    //     totalWage += wagesEarnedOnDate( employeeCopy, timeOutEvent.date)
    //     // employeeCopy.timeOutEvents.shift();
    // })
    // return totalWage;
    // THIRD TRY
    // let totalWage = 0;
    // employeeRecord.timeOutEvents.forEach((timeOutEvent)=>{
    //     totalWage += wagesEarnedOnDate(employeeRecord, timeOutEvent.date)
    // })
    // return totalWage;
// }


let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

let createTimeOutEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

let hoursWorkedOnDate = function(employee, soughtDate){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(employee, dateSought){
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}

let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}