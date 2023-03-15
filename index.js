function saturdayFun(fun =`roller-skate`) {
    return `This Saturday, I want to ${fun}!`;
}

function mondayWork(office =`go to the office`) {
    return `This Monday, I will ${office}.`;
}
mondayWork(`work from home`);

function wrapAdjective(flair = `*`){
    return function (adjective =`a hard worker`){
        return `You are ${flair}${adjective}${flair}!`;
    };
}
wrapAdjective(`||`)(`a dedicated programmer`)