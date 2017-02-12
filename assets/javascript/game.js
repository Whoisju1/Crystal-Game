$(document).ready(function(){
   //gernerate random number
    var randomNum;
    
    function randomNumGenerator () {
        randomNum = Math.floor(Math.random() * 50) + 1;
        $("#random-number").text("Number: "+randomNum);
    }; //end of randomNum
    
    
    randomNumGenerator(); //number generated as soon as page loads
      
    //crystal pictures click events 
    var totalScore = 0;
    wins = 0;
    losses = 0;
    function tally () {
        if(totalScore === randomNum) {
                totalScore = 0;
                wins += 1;
                $('#wins').text("Wins: "+wins);
                $('#wins').animate();
                $('#user-score').html("Your Total Score: "+0);
                randomNumGenerator();
                crystalNum1 = crystalVal(); 
                crystalNum2 = crystalVal(); 
                crystalNum3 = crystalVal(); 
                crystalNum4 = crystalVal();
             } 
            if (totalScore > randomNum) {
                totalScore = 0;
                losses += 1;
                $('#user-score').html("Your Total Score: "+0);
                    $('#losses').html("Losses: "+losses);
                randomNumGenerator();
                crystalNum1 = crystalVal(); 
                crystalNum2 = crystalVal(); 
                crystalNum3 = crystalVal(); 
                crystalNum4 = crystalVal();
            } 
    };    
    
     function crystalVal () {
        return Math.floor(Math.random() * 10) + 1;
    };
    
    var crystalNum1 = crystalVal(); 
    var crystalNum2 = crystalVal(); 
    var crystalNum3 = crystalVal(); 
    var crystalNum4 = crystalVal();

    
    $('#crystal-1').on('click', function(){
            totalScore += crystalNum1;
            $('#user-score').html("Your Total Score: "+totalScore);
            tally();
        });
    $('#crystal-2').on('click', function(){
            totalScore += crystalNum2;
            $('#user-score').text("Your Total Score: "+totalScore); 
            tally();
        });
    $('#crystal-3').on('click', function(){
            totalScore += crystalNum3;
            $('#user-score').html("Your Total Score: "+totalScore);
            tally();
        });
    $('#crystal-4').on('click', function(){;
            totalScore += crystalNum1;
            $('#user-score').html("Your Total Score: "+totalScore); 
            tally();
        });
    
    
}); //end of document ready function



