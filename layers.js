class Layer{
	constructor(){
		this.sides = lineNumb;
		this.numbShapes = randomSelect2() ? this.sides : this.sides * 2
		this.angle = 360 / this.numbShapes;
		this.stepOut = 8;
		this.singleStep = (size / 2) / (this.stepOut)
		this.thinStroke = 1
		this.ThickStroke = 3
		this.strokeColor = randomFromPallete()
		this.randomWeight = randomSelect2() ? this.thinStroke : this.ThickStroke;
	}
}

class Circles extends Layer{
	constructor(){
		super()
		console.log(this.angle)
		this.shapeSize = (size / 2) * 0.93;
		this.position = (size / 2) - (this.shapeSize / 2);
	}

	render(){
		noFill()

		stroke(this.strokeColor);
		strokeWeight(this.randomWeight);

		push()
		for(let i = 0; i <= this.numbShapes; i++){
			ellipse(this.position, 0, this.shapeSize, this.shapeSize)
			rotate(this.angle);
		}
		pop()
		}
}

class Lines extends Layer{
	constructor(){
		super()
		this.numSteps = randomSelect2() ? this.stepOut : int(this.stepOut * 1.25);
		this.start = floor(random(0, this.numSteps));	
		this.stop = floor(random(0, this.numSteps + 1));
		this.step = (size / 2) / this.numSteps;
	}

	render(){
		console.log(this.numbShapes)
		strokeWeight(this.randomWeight);
		stroke(this.strokeColor);

		push()
			for(let i = 0; i < this.numbShapes; i++){
				line(this.start * this.step, 0, this.stop * this.step, 0);
				rotate(this.angle);
			}
		pop();	
	}
}

class Outline extends Layer{
	constructor(){
		super()
		this.hexagonTrue = randomSelect2();
		console.log("hexagon boolean value: " + this.hexagonTrue)
	}

	render(){
		noFill()
		stroke(this.strokeColor);
		strokeWeight(this.randomWeight);

		push()
		if (this.hexagonTrue){
			hexagon(0, 0, size / 2)
			console.log(size)
		} else{
			ellipse(0, 0, size, size);
		}
		pop();

	}
}

class DottedLines extends Layer{
	constructor(){
		super()
		this.shapeSize = 3;
		this.centerOffset = this.singleStep;
		rectMode(CENTER)
	}

	render(){
		fill(this.strokeColor)
		noStroke()

		push()
		for(let i = 0; i < this.numbShapes; i++){
			for(let x = this.centerOffset; x < size / 2; x += this.singleStep){
				rect(x, 0, this.shapeSize, this.shapeSize)
			}
			rotate(this.angle)
		}
		pop()
	}
}

class CenteredShape extends Layer{
	constructor(){
		super()
		this.shapeSize = floor(random(this.stepOut) / 2, this.stepOut) * this.singleStep
		this.randomShape = random(1)
		rectMode(CENTER)
	}

	render(){
		fill(this.strokeColor)
		noStroke()

		console.log(this.randomShape)
		console.log(this.shapeSize)

		push()
		if (this.randomShape < 0.1){
			ellipse(0, 0, this.shapeSize, this.shapeSize)
		} else if (this.randomShape >= 0.1 && this.randomShape < 0.7){
			rect(0, 0, this.shapeSize, this.shapeSize)
		} else if(this.randomShape >= 0.7){
			rotate(60)
			hexagon(0, 0, this.shapeSize)
		}
		pop()

	}
}

class RingOfShapes extends Layer{
	constructor(){
		super()
		this.steps = floor(random(1, this.stepOut))
		this.center = this.steps * this.singleStep
		this.shapeSize = floor(random(this.stepOut / 2, this.stepOut) * 2);
		this.stepSize = floor(random(this.stepOut / 2, size / 2))
		this.randomShape = random(1)
		this.direction = random(1)
	}

	render(){
		rectMode(CENTER)
		noFill()
		strokeWeight(this.randomWeight)
		stroke(this.strokeColor)

		push()
		if(this.randomShape < 0.3){
			for(let i = 0; i < this.numbShapes; i++){
				rect(this.center, 0, this.shapeSize, this.shapeSize)
				rotate(this.angle)
				}
			} else if (this.randomShape >= 0.3 && this.randomShape < 0.6){
				for(let i = 0; i < this.numbShapes; i++){
				ellipse(this.center, 0, this.shapeSize, this.shapeSize)
				rotate(this.angle)
				}
			} else if (this.randomShape >= 0.6){
				for(let i = 0; i < this.numbShapes; i++){
					myTriangle(this.center, this.shapeSize, this.direction)
					rotate(this.angle)}
				}
		pop()
	}
}

class SteppedHex extends Layer{
	constructor(){
		super()
		this.centerOffset = (size / 2) * 0.15
		this.stepSize = ((size / 2) - this.centerOffset) / this.numbShapes
	}

	render(){
		noFill()
		stroke(this.strokeColor)
		strokeWeight(this.randomWeight)

		push()
		rotate(30)
		for(let i = 0; i < this.numbShapes; i++){
			hexagon(0, 0, this.centerOffset + (this.stepSize * i))
		}
		pop()
	}
}