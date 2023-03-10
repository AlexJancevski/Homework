const fs = require('fs');

class User {
    constructor(username, password, age, isActive, dateCreated) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.isActive = isActive;
        this.dateCreated = dateCreated;
    }
}

const users = [
    new User('user1', 'password1', 25, true, new Date()),
    new User('user2', 'password2', 30, true, new Date()),
    new User('user3', 'password3', 20, true, new Date()),
    new User('user4', 'password4', 35, true, new Date()),
    new User('user5', 'password5', 40, true, new Date()),
    new User('user6', 'password6', 22, true, new Date()),
    new User('user7', 'password7', 28, true, new Date()),
    new User('user8', 'password8', 45, true, new Date()),
    new User('user9', 'password9', 27, true, new Date()),
    new User('user10', 'password10', 32, true, new Date())
];

fs.writeFileSync('users.json', JSON.stringify(users));

function createUser(username, password, age) {
    const user = new User(username, password, age, true, new Date());
    const data = fs.readFileSync('users.json');
    const users = JSON.parse(data);
    users.push(user);
    fs.writeFileSync('users.json', JSON.stringify(users));
}

function setInactiveOldUsers() {
    const data = fs.readFileSync('users.json');
    const users = JSON.parse(data);
    const currentDate = new Date();
    users.forEach(user => {
        const diffInTime = currentDate.getTime() - user.dateCreated.getTime();
        const diffInDays = diffInTime / (1000 * 3600 * 24);
        if (diffInDays > 1 && user.isActive) {
            user.isActive = false;
        }
    });
    fs.writeFileSync('users.json', JSON.stringify(users));
}

function deleteUserByUsername(username) {
    const data = fs.readFileSync('users.json');
    const users = JSON.parse(data);
    const updatedUsers = users.filter(user => user.username !== username);
    fs.writeFileSync('users.json', JSON.stringify(updatedUsers));
}

function deleteInactiveUsers() {
    const data = fs.readFileSync('users.json');
    const users = JSON.parse(data);
    const updatedUsers = users.filter(user => user.isActive);
    fs.writeFileSync('users.json', JSON.stringify(updatedUsers));
}