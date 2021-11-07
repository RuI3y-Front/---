var cells = document.querySelectorAll(".cell");
let turn = "x";
let message= document.getElementById("mesage")
isEnd=false;
var winningConditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function CheckWin() {
    debugger
    var isWon=winningConditions.some(function (winningConditions) { // اینجا میگیم حداقل یکی از این ها برنده بود ایزوین رو تروو کن
        var turnClass="fill-"+turn; //  برای چک کردن ارایه ها اول از همه باید ترن رو بدونیم بعد ادامه داستان
        var winning=winningConditions.every(function (index) {  //تمام ارایه ها رو میگیریم بعد ایندکس ارایه ها رو میگیرم
            return cells[index].classList.contains(turnClass) //  یعنی اینکه اگه همه سل ایندکس ها کلسه ترون کلس رو داشتن یعنی وین شده
        });
        if(winning){
            for(var j= 0;j<winningConditions.length; j++){
                cells[winningConditions[j]].classList.add("highlight")
            }
        }
        return winning
    })
    return isWon
}


function checkDraw() {
    fillCount=0
    for(var i=0; i<cells.length;i++){
        var cell=cells[i]
    if(
        cell.classList.contains("fill-x") ||
        cell.classList.contains("fill-o")
       
    ) fillCount++;
}
if(fillCount===9)return true;
return false;
}

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener(
    "click",
    function (e) {
        if(isEnd)return
      var cell = e.target; // اینجا ایی . تارگت اون جایی رو ک کلید کردیم رو نشون میده
      cell.classList.add("fill-" + turn);
      
        if(CheckWin()){
            message.innerHTML=turn.toLowerCase() +"Barande SHod"
            isEnd=true
        }else if(checkDraw()){
            message.innerHTML="Bazi Mosavi shod"
            isEnd=true
        }else{  
            //   if (turn === "x") turn = "o";  // این تابع پایینیه
            //   else turn = "x";
              turn=turn ==='x'?"o":"x";
             message.innerHTML =
                "Nobate " + turn.toLowerCase() + " ast.";}
    },
    { once: true } // باعث میشه ی بار کلیک بیشتر نکنیم
  );
}
