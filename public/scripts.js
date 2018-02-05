window.onload = function(){
    showAndHide();
}
function showAndHide(){
    if(!isLoggedIn)
    {
        document.getElementById('authentificate').style.display = "inline-block";
        document.getElementById('logout').style.display = "none";
        document.getElementById('newTifu').style.display = "none";
    }
    else{
        document.getElementById('authentificate').style.display = "none";
        document.getElementById('logout').style.display = "inline-block";
        document.getElementById('newTifu').style.display = "inline-block";
    }
}