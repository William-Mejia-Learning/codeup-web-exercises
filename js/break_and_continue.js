
    while(true) {
    var num = Number(prompt('Enter an odd number between 1 and 50:'))
        if (num >= 1 && num <= 50 && num % 2 === 1 && num) {
            break;
        }
    }

    console.log("Number to skip is:" + num)

    for (var i = 1; i < 50; i += 2) {
        if (i % 2 === 0 && num >= 0) {
            continue;
        }
        if(i == num){
            console.log("Yikes! Skipping number: " + num);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }

