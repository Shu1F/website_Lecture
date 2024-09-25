const person = {
    name: ['Shuichi', 'Fujiike'],
    age: 21,
    gender: 'male',
    interests: {
        sports: 'soccer',
        music: 'piano',
        food: 'sushi',
    },
    getFulName: function() {
        console.log(this.name[0] + this.name[1])
    }
};

person.getFulName();