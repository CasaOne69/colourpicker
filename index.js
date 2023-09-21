let colorSelected = ""
let style = ""
let requestBtn = document.getElementById("but1")


//Function to capture users choice
requestBtn.addEventListener("click", function(){
    colorSelected = document.getElementById("color-picker").value  
    style = document.getElementById("style").value
fetch (`"https://www.thecolorapi.com/scheme?hex=${colorSelected}&mode=${style}&count=5"`)
    .then(response => response.json())
    .then(data => console.log(data))


    console.log(colorSelected + style) 
    
})


