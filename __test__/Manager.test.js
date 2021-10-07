const Manager = require('../lib/Manager')


test( 'create Manager', () => {
    const manager = new Manager('dave',1,'na@na.com', 5521)

    expect(manager.name).toBe('dave')
    expect(manager.id).toBe(1)
    expect(manager.email).toBe("na@na.com")
    expect(manager.officeNumber).toBe(5521)
})

test( 'getOfficeNumber function test ', () => {
    const manager = new Manager('dave',1,'na@na.com', 5521)
    
    expect(manager.getOfficeNumber()).toBe(5521)
})

test( 'getRole function test ', () => {
    const manager = new Manager('dave',1,'na@na.com', 5521)
    
    expect(manager.getRole()).toBe("Manager")
})