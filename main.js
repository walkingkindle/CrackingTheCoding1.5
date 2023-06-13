

function OneAway(s1,s2){
    let counter = 0;
    if (s1 === s2){
        return true;
    }
    else{
        if(s2.length + 1 === s1.length || s1.length + 1 === s2.length){
            return true;
        }
        else{
            for (let i = 0; i < s1.length; i++){
                if(s1[i] !== s2[i]){
                    counter++;
                }
            }
            return counter <= 1;
        }

    }


}

console.log(OneAway("pale","bale"))