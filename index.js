function getNumbers(){
    
    //LOCAL VARIABLES INSTANTIATED
    let WB;
    let PB;
    let randomDraw = [];
    
    
    //FUNCTION FOR GETTING AN INDIVIDUAL WHITE BALL
    function getWB(){

    WB = Math.ceil(Math.random() * 69 );
    
    return WB;
    
    };   //END FUNCTION getWB
    
    
    //THIS FUNCTION GETS THE POWERBALL
    function getPB(){
    
    PB = Math.ceil(Math.random() * 26);
    
    return PB;
    
    };   //END FUNCTION getPB
    
  
   
    
    //LOOP TO GET THE FIVE WHITE BALLS
    for (let i=1; i<=5; i++)
        {
            getWB();
            randomDraw.push(WB);
        };
    
    randomDraw.sort()
    
    
    //THIS SECTION GETS THE POWERBALL
    PB = getPB();
    randomDraw.push(PB);
    
    console.log(randomDraw);
    
    
};   //END FUNCTION getNumbers


getNumbers();





