interface User {
    name: string;
    age: number;
    occupation: string;
    car?: string;
    children?: number;
}

interface Admin extends User {
    role: string;
}

type Person = User | Admin;

const users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
