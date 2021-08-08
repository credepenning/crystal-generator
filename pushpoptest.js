const size = 160;
const lineNumb = 6;
let pallete = [];

const margin = size / 2
const coloumns = 4
const rows = 2
const padding = size * 0.2
const gridBox = size + padding
const startPos = (size / 2) + margin

allCrystals = []

function setup() {
	const totalX = startPos + gridBox * coloumns
	const totalY = startPos + gridBox * rows

	createCanvas(1000, 600);
	angleMode(DEGREES);
	noLoop();

	pallete = [
		color(255, 0, 137),
		color(0, 0, 0),
	]
}

function draw() {
	for(let x = 0; x < coloumns; x++){
		for(let y = 0; y < rows; y++){
			const posX = startPos + (x * gridBox)
			const posY = startPos + (y * gridBox)
			allCrystals.push(new Crystal(posX, posY))
		}
	}

	allCrystals.forEach(crystal => {
		crystal.render()
	})
}



