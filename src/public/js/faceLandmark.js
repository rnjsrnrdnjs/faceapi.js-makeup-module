
async function loadModels(){
	const MODEL_URL="/models";
	Promise.all([
    	faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
    faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
	]).then((val) => {
		console.log("model load complete");
	}).catch((err) => {
		console.log("model load fail");
	    console.log(err)
	});
}

const OPTION=new faceapi.SsdMobilenetv1Options({
	minConfidence:0.8,
});

async function faceDetection(blob,imageSize){
	let img = await faceapi.fetchImage(blob);
	let detections =await faceapi.detectAllFaces(img, OPTION);
	
    const resizeResults = faceapi.resizeResults(detections, imageSize);
    return resizeResults;
}


async function faceLandmark(blob,imageSize,idx){
	let img = await faceapi.fetchImage(blob);
	let detections =await faceapi.detectAllFaces(img, OPTION).withFaceLandmarks();
	console.log(detections);
	const features = {
		/*
		jawOutline : detections.landmarks.getJawOutline(),
		nose : detections.landmarks.getNose(),
		mouth : detections.landmarks.getMouth(),
		leftEye : detections.landmarks.getLeftEye(),
		rightEye : detections.landmarks.getRightEye(),
		leftEyeBbrow : detections.landmarks.getLeftEyeBrow(),
		rightEyeBrow : detections.landmarks.getRightEyeBrow(),
		*/
    	jaw: detections[idx].landmarks.positions.slice(0, 17),
    	eyebrowLeft: detections[idx].landmarks.positions.slice(17, 22),
    	eyebrowRight: detections[idx].landmarks.positions.slice(22, 27),
    	noseBridge: detections[idx].landmarks.positions.slice(27, 31),
    	nose: detections[idx].landmarks.positions.slice(31, 36),
    	eyeLeft: detections[idx].landmarks.positions.slice(36, 42),
    	eyeRight: detections[idx].landmarks.positions.slice(42, 48),
    	lipOuter: detections[idx].landmarks.positions.slice(48, 60),
    	lipInner: detections[idx].landmarks.positions.slice(60),
  	};

	//console.log(detections.landmarks.getNose());
    const resizeResults = faceapi.resizeResults(detections, imageSize);
    return [resizeResults,features];
}



