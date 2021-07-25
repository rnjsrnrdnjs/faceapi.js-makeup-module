let faceX,faceY,faceDx,faceDy;
let features;
async function makeUploading(resizedResults,featuresFace){
	console.log(featuresFace);
	features=featuresFace;
	const canvas=document.getElementById('canvas');
	const ctx=canvas.getContext('2d');
	const myImg=document.getElementById('myImg');

	await facePoint(features);
	//await foundation();
}
async function foundation(){
	const canvas=document.getElementById('canvas');
	const ctx=canvas.getContext('2d');
	canvas.style.display="none";
	const makeUp=document.getElementById('makeUp');
	const mtx=makeUp.getContext('2d');
	const myImg=document.getElementById('myImg');
	
	mtx.drawImage(myImg,0,0);
	let r=247,g=233,b=211,a=1;
	let imageData=mtx.getImageData(0,0,makeUp.width,makeUp.height);
	
	let centerJx=0,centerJy=0;
	for(let i=0;i<features.jaw.length;i++){
		centerJx+=features.jaw[i].x;
		centerJy+=features.jaw[i].y;
	}
	centerJx/=features.jaw.length;
	centerJy/=features.jaw.length;
	console.log(centerJx,centerJy);
	let faceR,faceG,faceB,faceA;
	
	let cx=0,cy=0;
	for(let i=0;i<imageData.data.length;i+=4){
		if(faceX<=cx && cx<=faceX+faceDx && faceY<=cy && cy<=faceY+faceDy){
		
		for(let j=0;j<features.jaw.length;j++){
			if(cx==Math.floor(features.jaw[j].x) && cy==Math.floor(features.jaw[j].y)){
				console.log(true);
				faceR=imageData.data[i];
				faceG=imageData.data[i+1];
				faceB=imageData.data[i+2];
				faceA=imageData.data[i+3];
				console.log(faceR,faceG,faceB);
			}
		}
		}
		cx++;
		if(cx==makeUp.width){
			cy++;
			cx%=makeUp.width;
		}
	}
	
	cx=0,cy=0;
	for(let i=0;i<imageData.data.length;i+=4){
		if(faceX<=cx && cx<=faceX+faceDx && faceY<=cy && cy<=faceY+faceDy){
	//		if(Math.abs(imageData.data[i]-r)<=50 && Math.abs(imageData.data[i+1]-g)<=150 && Math.abs(imageData.data[i+2]-b)<=150 ){
				imageData.data[i]+=25
				imageData.data[i+1]+=25
				imageData.data[i+2]+=25
		//	}
		}
		
		cx++;
		if(cx==makeUp.width){
			cy++;
			cx%=makeUp.width;
		}
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

