
 //1 : rock ; 2:scessors 3:paper
  // 0 robot 1 user
function SetRobotChoice(rand){
    var img = document.getElementById('idrobotchoice');
    switch(rand){
        case 1 : img.src="Rock.png";
        break;
        case 2 : img.src="Scissors.png";
        break ;
        case 3 : img.src="paper.png";
    }
}
function RobotChoice(){
    let rand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    SetRobotChoice(rand);
    return rand;
}
function SetResult(robot,user){
    if(robot===1 && user === 2 || robot===2 && user === 3 || robot===3 && user === 1){
        var lblresultComment = document.getElementById('lblresultComment');
        lblresultComment.innerText = "ROBOT : YOU WIN";
        var robres = document.getElementById('user-res');
        let x = parseInt(robres.innerText);
        x=x+1;
        robres.innerText = x.toString();
    }
    else if (user===1 &&robot === 2 ||user===2 &&robot === 3 ||user===3 &&robot ===1  ){
        var lblresultComment = document.getElementById('lblresultComment');
        lblresultComment.innerText = "ROBOT : I WIN";
        var userres = document.getElementById('robot-res');
        let x = parseInt(userres.innerText);
        x=x+1;
        userres.innerText = x.toString();
    }
    else{
        var lblresultComment = document.getElementById('lblresultComment');
        lblresultComment.innerText = "ROBOT : ITS A DRAW";
    }

}
function clickOnRock(){
    let userchoice = 1;
    SetResult(1,RobotChoice());
}

function clickOnScessors(){
    let userchoice = 2;
    SetResult(2,RobotChoice());
}
function clickOnPaper(){
    let userchoice = 3;
    SetResult(3,RobotChoice());
}


