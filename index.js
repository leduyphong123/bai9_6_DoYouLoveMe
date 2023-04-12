let resultYes = document.getElementById("YES");
resultYes.addEventListener("click", showYes);

function showYes() {
    alert("<3");
}


let resultNo = document.getElementById("NO");
resultNo.addEventListener("click", showNo);

function showNo() {
    let ranValue = Math.floor(Math.random() * 100)+50;
    if ( parseInt(resultNo.style.left) <=200 ) {
        resultNo.style.left = parseInt(resultNo.style.left) + ranValue + "px";
    } else{
        resultNo.style.left = parseInt(resultNo.style.left) - ranValue -400 + "px";
    }

    if ( parseInt(resultNo.style.top) <=200 ) {
        resultNo.style.top = parseInt(resultNo.style.top) + ranValue + "px";
    } else{
        resultNo.style.top = parseInt(resultNo.style.top) - ranValue -400+ "px";
    }
}

function init() {
    resultNo.style.position = "relative";
    resultNo.style.left = "0px";
    resultNo.style.top = "0px";
}

window.onload = init;