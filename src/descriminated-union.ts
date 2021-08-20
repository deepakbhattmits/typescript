interface Bird
{
    type: 'bird';
    flyingSpeed: number;
}
interface Horse
{
    type: 'horse';
    runningSpeed: number;

}

type Animal = Bird | Horse;
const moveAnimal = (animal: Animal) =>
{
    let speed;
    switch (animal.type)
    {
        case 'bird':
            speed=animal.flyingSpeed;
            break;
        case 'horse':
            speed=animal.runningSpeed;
    }
    console.log('animal is moving at speed : ', speed )
    }

    moveAnimal({type:'bird',flyingSpeed:10})