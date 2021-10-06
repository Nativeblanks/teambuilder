const Employee = require('../lib/Employee.js');


test( 'creates employee object', () => {
    const employee = new Employee('dave',1,"na@na.com");

    expect(employee.name).toBe('dave')
    expect(employee.id).toBe(1)
    expect(employee.email).toBe("na@na.com")
})

test( 'getName function', () => {
    const employee = new Employee('dave',1,"na@na.com")
    expect(employee.getName()).toBe('dave')

})

test( 'getId function', () => {
    const employee = new Employee('dave',1,"na@na.com")
    expect(employee.getId()).toBe(1)

})

test( 'getEmail function', () => {
    const employee = new Employee('dave',1,"na@na.com")
    expect(employee.getEmail()).toBe("na@na.com")

})