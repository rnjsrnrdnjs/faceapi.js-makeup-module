async function makeUploading(resizedResults,features){
	console.log(features);
	const canvas=document.getElementById('canvas');
	const ctx=canvas.getContext('2d');
	const myImg=document.getElementById('myImg');

	await facePoint(features);
	await foundation();
}
async function foundation(){
	const canvas=document.getElementById('canvas');
	const ctx=canvas.getContext('2d');
	canvas.style.display="none";
	const makeUp=document.getElementById('makeUp');
	const mtx=makeUp.getContext('2d');
	const myImg=document.getElementById('myImg');
	
	mtx.drawImage(myImg,0,0);
	let r=235,g=188,b=142;
	let minR=0,minG=0,minB=0;
	let imageData=mtx.getImageData(0,0,makeUp.width,makeUp.height);
	for(let i=0;i<imageData.data.length;i+=4){
		minR=Math.max(minR,Math.abs(imageData.data[i]-r));
		minG=Math.max(minG,Math.abs(imageData.data[i+1]-g));
		minB=Math.max(minB,Math.abs(imageData.data[i+2]-b));
	}
	console.log(minR,minG,minB);
	for(let i=0;i<imageData.data.length;i+=4){
		imageData.data[i]+=minR;
		imageData.data[i+1]+=minG;
		imageData.data[i+2]+=minB;
	}
	
	mtx.putImageData(imageData,0,0);
}

async function facePoint(features){
	const canvas=document.getElementById('canvas');
	const ctx=canvas.getContext('2d');
	//턱
	for(let i in features.jaw){
		ctx.fillStyle="white";
		ctx.beginPath();
		ctx.arc(features.jaw[i].x,features.jaw[i].y,3,0,2*Math.PI);
		ctx.fill();
	}
	
	
	//왼쪽눈
	for(let i in features.eyeLeft){
		ctx.fillStyle="white";
		ctx.beginPath();
		ctx.arc(features.eyeLeft[i].x,features.eyeLeft[i].y,1,0,2*Math.PI);
		ctx.fill();
	}
	
	
	//오른쪽 눈
	for(let i in features.eyeRight){
		ctx.fillStyle="white";
		ctx.beginPath();
		ctx.arc(features.eyeRight[i].x,features.eyeRight[i].y,1,0,2*Math.PI);
		ctx.fill();
	}
	
	//왼쪽 눈섭
	for(let i in features.eyebrowLeft){
		ctx.fillStyle="white";
		ctx.beginPath();
		ctx.arc(features.eyebrowLeft[i].x,features.eyebrowLeft[i].y,1,0,2*Math.PI);
		ctx.fill();
	}
	
	
	//오른쪽 눈섭
	for(let i in features.eyebrowRight){
		ctx.fillStyle="white";
		ctx.beginPath();
		ctx.arc(features.eyebrowRight[i].x,features.eyebrowRight[i].y,1,0,2*Math.PI);
		ctx.fill();
	}
	
	//입술 안쪽
	for(let i in features.lipInner){
		ctx.fillStyle="white";
		ctx.beginPath();
		ctx.arc(features.lipInner[i].x,features.lipInner[i].y,1,0,2*Math.PI);
		ctx.fill();
	}
	
	//입술 바깥쪽
	for(let i in features.lipOuter){
		ctx.fillStyle="white";
		ctx.beginPath();
		ctx.arc(features.lipOuter[i].x,features.lipOuter[i].y,1,0,2*Math.PI);
		ctx.fill();
	}
	
	//코선
	for(let i in features.noseBridge){
		ctx.fillStyle="white";
		ctx.beginPath();
		ctx.arc(features.noseBridge[i].x,features.noseBridge[i].y,2,0,2*Math.PI);
		ctx.fill();
	}
	//코선
	for(let i in features.nose){
		ctx.fillStyle="white";
		ctx.beginPath();
		ctx.arc(features.nose[i].x,features.nose[i].y,2,0,2*Math.PI);
		ctx.fill();
	}
}

