let colorSelected = ""
let style = ""
let requestBtn = document.getElementById("but1")


//Function to capture users choice
requestBtn.addEventListener("click", function(){
    colorSelected = document.getElementById("color-picker").value.slice(1)  
    style = document.getElementById("style").value
fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelected}&mode=${style}&count=5`)
    .then(response => response.json())
    .then(data => {
        console.log(data.colors[0].hex.value)
        document.getElementById("c1").innerHTML = `<img src="${data.colors[0].image.bare}" alt="${data.colors[0].name.value}">`
        document.getElementById("c2").innerHTML = `<img src="${data.colors[1].image.bare}" alt="${data.colors[1].name.value}">`
        document.getElementById("c3").innerHTML = `<img src="${data.colors[2].image.bare}" alt="${data.colors[2].name.value}">`
        document.getElementById("c4").innerHTML = `<img src="${data.colors[3].image.bare}" alt="${data.colors[3].name.value}">`
        document.getElementById("c5").innerHTML = `<img src="${data.colors[4].image.bare}" alt="${data.colors[4].name.value}">`
        document.getElementById("hex1").innerHTML = `<p>${data.colors[0].hex.value}</p>`
        document.getElementById("hex2").innerHTML = `<p>${data.colors[1].hex.value}</p>`
        document.getElementById("hex3").innerHTML = `<p>${data.colors[2].hex.value}</p>`
        document.getElementById("hex4").innerHTML = `<p>${data.colors[3].hex.value}</p>`
        document.getElementById("hex5").innerHTML = `<p>${data.colors[4].hex.value}</p>`
    })

    
})


