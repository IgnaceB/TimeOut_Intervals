
// setting up constants
const container=document.getElementById("container")

const wide = 5
const height = 5
const wideDiv=90/wide
const heightDiv=70/height
const nr= wide*height
let score=""


//creating function that will highlight one div
const appear=()=>{
	let positionXY=Math.floor(Math.random()*wide*height)
	let positionX=positionXY%wide
	let positionY=(positionXY-positionX)/height
	positionY=String.fromCharCode(97+positionY)
	let positionID=positionY.concat(positionX)
	console.log(positionID)
	document.getElementById(positionID).className="OUT"
	setTimeout(function() {
		document.getElementById(positionID).className=""
	}, 1000);
}
//running function with interval

setInterval(appear,2000)

//function that increment score on click
const win=(event)=>{
	
	if (event.target.className=="OUT"){
		score++
		document.getElementById("score").innerText="SCORE = "+score
		event.target.className="WIN"
	}
	else{
		event.target.className=""
		score--
		document.getElementById("score").innerText="SCORE = "+score
	}
}

//create all divs and give them ID
const setUp=()=>{
	let line=""
	let column=""
	console.log(wideDiv)
	for (let i=0;i<nr;i++){
		const createDiv=document.createElement("div")
		container.appendChild(createDiv)
		createDiv.style=`width:${wideDiv}%; height:${heightDiv}%; border-radius:50%;border:solid 1px black;`
		line=String.fromCharCode(97 + Math.floor(i/wide))
		column=i-(Math.floor(i/wide)*wide)
		createDiv.id=line.concat(column)
		createDiv.addEventListener("click",win)
		

	}
	const createDiv=document.createElement("div")
	container.appendChild(createDiv)
	createDiv.id="score"
	createDiv.style="width:90%;height:10%;border:black solid 1px"
	createDiv.innerText="SCORE = "+score
}
setUp()
