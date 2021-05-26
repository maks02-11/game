$(document).ready(function(){
    let arr = $('[data-selector="check"]');
    let colorArr = ['green', 'red', 'blue', 'yellow', 'lime', 'black', 'green', 'red', 'blue', 'yellow', 'lime', 'black'];
    let arrCheck = [];
    let arrOpen = [];
    for(let i = 0; i < arr.length; i++){
        let randColor = Math.floor(Math.random() * colorArr.length);
        $(arr[i]).val(colorArr[randColor]);
        colorArr.splice(randColor,1);
    }
    
    $(arr).on('click', function(){
        let current = $(this).val();
        let currentEl = $(this);
        arrOpen.push(currentEl);
        $(this).parent().css('background-color', current);
        arrCheck.push(current);
        if(arrCheck.length == 2){
            if(arrCheck[0] == arrCheck[1]){
                setTimeout(function(){
                    $(`[value=${current}]`).parent().css('visibility', 'hidden');
                    arrOpen = [];
                    arrCheck = [];
                }, 800)
            }else{
                setTimeout(function(){
                    // console.log(arrOpen);
                    for(let j = 0; j < arrCheck.length; j++){
                        $(arrOpen[j]).parent().css('background-color', '#ccc');
                        // console.log(arrOpen[j]);
                    }
                    arrOpen = [];
                    arrCheck = [];
                }, 800)
            }
        }
    })
})