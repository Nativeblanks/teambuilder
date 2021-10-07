const Engineer = require('../lib/Engineer')

test( 'create engineer', () => {
    const engineer = new Engineer('dave',1,'na@na.com', 'this.github')

    expect(engineer.name).toBe('dave')
    expect(engineer.id).toBe(1)
    expect(engineer.email).toBe("na@na.com")
    expect(engineer.github).toBe("this.github")
})

test (' getGithub function', () => {
    const engineer = new Engineer('dave',1,'na@na.com', 'this.github')
    expect(engineer.getGithub()).toBe("this.github")

});

test (' getGithub function', () => {
    const engineer = new Engineer('dave',1,'na@na.com', 'this.github')
    expect(engineer.getRole()).toBe("Engineer")

});


