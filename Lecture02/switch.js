const ststus = 200;

switch (ststus) {
    case 200:
        console.log('OK!');
        break
    case 400: // or
    case 500: // or
        console.log('Error!');
        break
    default:
        console.log('Unknow status!');

}