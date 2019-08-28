let masivs = [];

function aizpildaMasivu(v){
    for(let j=0;j<v;j++){
        masivs[j]=j+1;
    }
}

function iegutPecIndex(i) {
  return masivs[i];
}

function mainitPecIndex(i, vertiba) {
  masivs[i] = vertiba;
}

function dzestPecIndex(i, veriba) {
  masivs[i] = masivs.splice(i, 1);
}

function printMasivs(){
    console.log(masivs);
}

function atrastVertibasIndexu(vertiba) {
  for (let i = 0; i < masivs.length; i++) {
    // var arii ar do .. while .., arī while ..
    if (vertiba === masivs[i]) {
      return 1;
    }
  }
}
