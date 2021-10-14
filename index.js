function receivesAFunction (callback){
    callback();
    return "The function has been called."
}

function returnsANamedFunction(){
    return function Named(){
        console.log('ANamedFunction')
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log('AnAnonymousFunction')
    }
}