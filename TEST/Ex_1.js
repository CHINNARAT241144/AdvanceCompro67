let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

for (let cr_1 of values1){
    for(let cr_3 of values3) {
        if(cr_1 === cr_3){
            console.log(`The values1 เหมือนกับ values3,ที่คำว่า: ${cr_1}`);
        } 
    }
}

for (let cr_1 of values1){
    for(let cr_2 of values2) {
        if(cr_1 === cr_2){
            console.log(`The values1 เหมือนกับ values2,ที่คำว่า: ${cr_1}`);
        } 
    }
}

for (let cr_2 of values2){
    for(let cr_3 of values3) {
        if(cr_2 === cr_3){
            console.log(`The values2 เหมือนกับ values3,ที่คำว่า: ${cr_2}`);
        } 
    }
}
