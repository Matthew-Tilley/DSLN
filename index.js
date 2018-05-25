function getNumbers(){
    
    //LOCAL VARIABLES INSTANTIATED
    let WB;
    let PB;
    let randomDraw = [];
    
    
    //FILTER TO HELP WITH NUMERIC SORTING
    function comparator(num1, num2){
        
        return num1 - num2;   
    }
    
    
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
    //ALSO RESOLVES POTENTIAL DUPLICATES
    for (let i=1; i<=5; i++)
        {
            
            getWB();
            
            if (randomDraw.indexOf(WB) !== -1)
                {
                    getWB;
                }
            
            randomDraw.push(WB);     
            
        };
    
    
    
    
    
    randomDraw.sort(comparator);
    
    
    
    
    
    
    //THIS SECTION GETS THE POWERBALL
    PB = getPB();
    randomDraw.push(PB);
    
    console.log(randomDraw);
    
    
};   //END FUNCTION getNumbers


getNumbers();





