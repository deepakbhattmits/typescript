"use strict";
const moveAnimal = (animal) => {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('animal is moving at speed : ', speed);
};
moveAnimal({ type: 'bird', flyingSpeed: 10 });
