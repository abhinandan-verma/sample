function handleMenu(){
    var menu = document.getElementById("menu");
    if(menu.style.display === "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }

    console.log("Menu clicked");
}