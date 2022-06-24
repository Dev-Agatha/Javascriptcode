let name = "Agatha Ehidiamen"
let height = "5ft3"
let country = "Nigeria"

let showname = document.getElementById('name')
let showheight = document.getElementById('height')
let showcountry = document.getElementById('country')

 

alert (
   `My Details are
   Name: ${name}
   Height: ${height} 
   Country: ${country}.`
)

function change(){
    showname.innerHTML = name
    showheight.innerHTML = height
    showcountry.innerHTML = country
    }
