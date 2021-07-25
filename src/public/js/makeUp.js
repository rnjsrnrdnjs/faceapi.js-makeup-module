let faceX, faceY, faceDx, faceDy;
let features;
let makeUp;
let mtx;



async function makeUploading(resizedResults, featuresFace) {
	features = featuresFace;
	console.log(features);
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	const myImg = document.getElementById('myImg');
	makeUp = document.getElementById('makeUp');
	mtx = makeUp.getContext('2d');


	await facePoint(features);
	//canvas.style.display = 'none';
	//await foundation();
	//await jawLine();
	
}

async function faceSize() {
	
}
async function eyeSize() {
	
}
async function mouseSize() {
	
}
async function shoulderSize() {
	
}


async function lipTint() {
	
}
async function eyebrow() {
	
}
async function shadow() {
	
	
	for (let i in features.jaw) {
		mtx.fillStyle = 'white';
		mtx.beginPath();
		mtx.arc(features.jaw[i].x, features.jaw[i].y, 3, 0, 2 * Math.PI);
		mtx.fill();
	}
	
	
}

async function concealer() {
	
}
async function foundation() {
	
	const Hdiff = 0.08;
const Sdiff = 0.2;
const Ldiff = 0.2;
const foundationPower = 3;

const paleivory = new hslFROMrgb(254, 227, 198);
const warmivory = new hslFROMrgb(253, 231, 173);
const sand = new hslFROMrgb(248, 217, 153);
const rosebeige = new hslFROMrgb(249, 212, 160);

const limestone = new hslFROMrgb(237, 193, 146);
const beige = new hslFROMrgb(242, 194, 128);
const sienna = new hslFROMrgb(213, 159, 123);
const amber = new hslFROMrgb(188, 99, 55);

const honey = new hslFROMrgb(206, 151, 94);
const band = new hslFROMrgb(173, 138, 96);
const almond = new hslFROMrgb(147,95,55);
const bronze = new hslFROMrgb(115, 63, 23);

const umber = new hslFROMrgb(178, 102, 68);
const golden = new hslFROMrgb(128, 68, 34);
const expresso = new hslFROMrgb(96, 52, 17);
const chocolate = new hslFROMrgb(41, 23, 9);
	
	const myImg = document.getElementById('myImg');

	mtx.drawImage(myImg, 0, 0);

	let imageData = mtx.getImageData(0, 0, makeUp.width, makeUp.height);

	let cx = 0,
		cy = 0;
	for (let i = 0; i < imageData.data.length; i += 4) {
		const faceColor = new hslFROMrgb(
			imageData.data[i],
			imageData.data[i + 1],
			imageData.data[i + 2]
		);
		let ch = faceColor[0];
		let cs = faceColor[1];
		let cl = faceColor[2];
		if (
			faceX <= cx &&
			cx <= faceX + faceDx &&
			faceY - faceDy / 3 <= cy &&
			cy <= faceY + faceDy
		) {
			//console.log(ch,cs,cl);
		}
		if (
			Math.abs(paleivory[0] - ch) <= Hdiff &&
			Math.abs(paleivory[1] - cs) <= Sdiff &&
			Math.abs(paleivory[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(warmivory[0] - ch) <= Hdiff &&
			Math.abs(warmivory[1] - cs) <= Sdiff &&
			Math.abs(warmivory[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(sand[0] - ch) <= Hdiff &&
			Math.abs(sand[1] - cs) <= Sdiff &&
			Math.abs(sand[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(rosebeige[0] - ch) <= Hdiff &&
			Math.abs(rosebeige[1] - cs) <= Sdiff &&
			Math.abs(rosebeige[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}

		
		
		if (
			Math.abs(limestone[0] - ch) <= Hdiff &&
			Math.abs(limestone[1] - cs) <= Sdiff &&
			Math.abs(limestone[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(beige[0] - ch) <= Hdiff &&
			Math.abs(beige[1] - cs) <= Sdiff &&
			Math.abs(beige[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(sienna[0] - ch) <= Hdiff &&
			Math.abs(sienna[1] - cs) <= Sdiff &&
			Math.abs(sienna[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(amber[0] - ch) <= Hdiff &&
			Math.abs(amber[1] - cs) <= Sdiff &&
			Math.abs(amber[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		
		
		if (
			Math.abs(honey[0] - ch) <= Hdiff &&
			Math.abs(honey[1] - cs) <= Sdiff &&
			Math.abs(honey[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(band[0] - ch) <= Hdiff &&
			Math.abs(band[1] - cs) <= Sdiff &&
			Math.abs(band[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(almond[0] - ch) <= Hdiff &&
			Math.abs(almond[1] - cs) <= Sdiff &&
			Math.abs(almond[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(bronze[0] - ch) <= Hdiff &&
			Math.abs(bronze[1] - cs) <= Sdiff &&
			Math.abs(bronze[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}

		
		
		if (
			Math.abs(umber[0] - ch) <= Hdiff &&
			Math.abs(umber[1] - cs) <= Sdiff &&
			Math.abs(umber[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(golden[0] - ch) <= Hdiff &&
			Math.abs(golden[1] - cs) <= Sdiff &&
			Math.abs(golden[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(expresso[0] - ch) <= Hdiff &&
			Math.abs(expresso[1] - cs) <= Sdiff &&
			Math.abs(expresso[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		if (
			Math.abs(chocolate[0] - ch) <= Hdiff &&
			Math.abs(chocolate[1] - cs) <= Sdiff &&
			Math.abs(chocolate[2] - cl) <= Ldiff
		) {
			imageData.data[i] += foundationPower;
			imageData.data[i + 1] += foundationPower;
			imageData.data[i + 2] += foundationPower;
		}
		cx++;
		if (cx == makeUp.width) {
			cy++;
			cx %= makeUp.width;
		}
	}


	mtx.putImageData(imageData, 0, 0);
}

async function facePoint(features) {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	//턱
	for (let i in features.jaw) {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(features.jaw[i].x, features.jaw[i].y, 3, 0, 2 * Math.PI);
		ctx.fill();
	}

	//왼쪽눈
	for (let i in features.eyeLeft) {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(features.eyeLeft[i].x, features.eyeLeft[i].y, 1, 0, 2 * Math.PI);
		ctx.fill();
	}

	//오른쪽 눈
	for (let i in features.eyeRight) {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(features.eyeRight[i].x, features.eyeRight[i].y, 1, 0, 2 * Math.PI);
		ctx.fill();
	}

	//왼쪽 눈섭
	for (let i in features.eyebrowLeft) {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(features.eyebrowLeft[i].x, features.eyebrowLeft[i].y, 1, 0, 2 * Math.PI);
		ctx.fill();
	}

	//오른쪽 눈섭
	for (let i in features.eyebrowRight) {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(features.eyebrowRight[i].x, features.eyebrowRight[i].y, 1, 0, 2 * Math.PI);
		ctx.fill();
	}

	//입술 안쪽
	for (let i in features.lipInner) {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(features.lipInner[i].x, features.lipInner[i].y, 1, 0, 2 * Math.PI);
		ctx.fill();
	}

	//입술 바깥쪽
	for (let i in features.lipOuter) {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(features.lipOuter[i].x, features.lipOuter[i].y, 1, 0, 2 * Math.PI);
		ctx.fill();
	}

	//코선
	for (let i in features.noseBridge) {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(features.noseBridge[i].x, features.noseBridge[i].y, 2, 0, 2 * Math.PI);
		ctx.fill();
	}
	//코
	for (let i in features.nose) {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(features.nose[i].x, features.nose[i].y, 2, 0, 2 * Math.PI);
		ctx.fill();
	}
}

function hslFROMrgb(R, G, B) {
	let _R = R / 255;
	let _G = G / 255;
	let _B = B / 255;

	let H, S, L;

	let _Min = Math.min(_R, _G, _B); //Min. value of RGB
	let _Max = Math.max(_R, _G, _B); //Max. value of RGB
	let del_Max = _Max - _Min; //Delta RGB value

	L = (_Max + _Min) / 2;

	if (del_Max == 0) (H = 0), (S = 0);
	else {
		if (L < 0.5) S = del_Max / (_Max + _Min);
		else S = del_Max / (2 - _Max - _Min);
		let del_R = ((_Max - _R) / 6 + del_Max / 2) / del_Max;
		let del_G = ((_Max - _G) / 6 + del_Max / 2) / del_Max;
		let del_B = ((_Max - _B) / 6 + del_Max / 2) / del_Max;

		if (_R == _Max) H = del_B - del_G;
		else if (_G == _Max) H = 1 / 3 + del_R - del_B;
		else if (_B == _Max) H = 2 / 3 + del_G - del_R;

		if (H < 0) H += 1;
		if (H > 1) H -= 1;
	}
	return [H, S, L];
}