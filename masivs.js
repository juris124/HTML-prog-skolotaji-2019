let masivs=[];

function iegutPecIndex(i) {
    return masivs[i];
}

function mainitPecIndex(i, vertiba){
    masivs[i]=vertiba;
}

function dzestPecIndex(i,veriba){
    masivs[i]=masivs.splice(i,1)
}

function atrastVertibasIndexu(vertiba){
    for (let i=0;i<masivs.length;i++){ // var arii ar do .. while ..
        if (vertiba===masivs[i]){
            return 1;
        }
    }
}