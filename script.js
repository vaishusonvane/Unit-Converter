var feet = document.getElementById('feet');
var inche = document.getElementById('inche');

feet.addEventListener('input', function(){
    let f = this.value;
    let i = f*12;
    inche.value = i;
});
inche.addEventListener('input', function(){
    let i = this.value;
    let f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    feet.value = f;
});
