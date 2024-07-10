const strat = Date.now();

console.log('starting timer....');


setTimeout(() => {
    const millis = Date.now() - strat;

    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);


},5000);