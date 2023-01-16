var person = { firstName: 'Jimmy', lastName: 'Hendrix', hobby: 'Guitar' };
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('This persons name is:', fullName);
person.job = 'Musician';
console.log('This persons job is:', person.job);
person.previousJob = 'Pickup Guitarist';
console.log('This persons previous job is:', person.previousJob);
console.log('The complete person is:', person);
