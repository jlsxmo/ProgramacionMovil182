let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
}

for (prop in user) {
    console.log(prop, user[prop]);
}