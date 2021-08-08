class Crystal{
	constructor(posX, posY){
		this.posX = posX
		this.posY = posY

		this.layers = []

		this.layerConstructors = [
		{
			name: 'Outline Shape',
			init: () => new Outline(),
			weight: 0.5
		},
		{
			name: 'Centered Shape',
			init: () => new CenteredShape(),
			weight: 0.3
		},
		{
			name: 'Circles',
			init: () => new Circles(),
			weight: 0.3
		},
		{
			name: 'Ring of Shapes',
			init: () => new RingOfShapes(),
			weight: 0.3
		},
		{
			name: 'Stepped Hexagon',
			init: () => new SteppedHex(),
			weight: 0.3
		},
		{
			name: 'Lines',
			init: () => new Lines(),
			weight: 0.3
		},
		{
			name: 'Dotted Lines',
			init: () => new DottedLines(),
			weight: 0.3
		},
		{
			name: 'Test Lines',
			init: () => testLines(),
			weight: 1
		}
		]

		this.layerConstructors.forEach(lcon => {
		this.picker = random(1)
		if (this.picker >= lcon.weight){
			this.layers.push(lcon.init())
			}
		})
	}

	render(){
	push()
	translate(this.posX, this.posY)
	this.layers.forEach(layers => {
		layers.render()
		})
	pop()
	}
}