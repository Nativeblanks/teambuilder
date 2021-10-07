const Intern = require('../lib/Intern')

test( ' create Intern object', () => {
    const intern = new Intern('dave',1,'na@na.com', 'highschool')

    expect(intern.name).toBe('dave')
    expect(intern.id).toBe(1)
    expect(intern.email).toBe("na@na.com")
    expect(intern.school).toBe("highschool")
});

test (' getGithub function', () => {
    const intern = new Intern('dave',1,'na@na.com', 'highschool')
    expect(intern.getSchool()).toBe("highschool")

});

test (' getGithub function', () => {
    const intern = new Intern('dave',1,'na@na.com', 'highschool')
    expect(intern.getRole()).toBe("Intern")

});