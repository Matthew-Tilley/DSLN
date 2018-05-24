function getNumbers(){
    
    let WB;
    let PB;
    
    
    function getWB(){

    WB = Math.ceil(Math.random() * 69 );
    
    return WB;
    
    };   //END FUNCTION getWB
    
    
    
    function getPB(){
    
    PB = Math.ceil(Math.random() * 26);
    
    return PB;
    
    };   //END FUNCTION getPB
    
  
    console.log( getWB(), getPB() );
    
};   //END FUNCTION getNumbers


getNumbers();

