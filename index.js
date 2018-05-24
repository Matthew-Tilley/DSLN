function getNumbers(){
    
    let WB;
    let PB;
    
    let randomDraw = [];
    
    
    function getWB(){

    WB = Math.ceil(Math.random() * 69 );
    
    return WB;
    
    };   //END FUNCTION getWB
    
    
    
    function getPB(){
    
    PB = Math.ceil(Math.random() * 26);
    
    return PB;
    
    };   //END FUNCTION getPB
    
  
    console.log( getWB(), getPB() );
    
    
    for (let i=1; i<=5; i++)
        {
            getWB();
            randomDraw.push(WB);
        };
    
    console.log(randomDraw);
    console.log(randomDraw.toString());
    
};   //END FUNCTION getNumbers


getNumbers();



