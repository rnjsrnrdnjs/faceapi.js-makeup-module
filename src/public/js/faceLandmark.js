
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
async function faceDetection(blob,imageSize){
	const OPTION=new faceapi.SsdMobilenetv1Options({
		minConfidence:0.8,
	})
	let img = await faceapi.fetchImage(blob);
	let detections =await faceapi.detectAllFaces(img, OPTION);
	
    const resizeResults = faceapi.resizeResults(detections, imageSize);
    return resizeResults;
}



async function faceLandmark(blob,imageSize){
	const OPTION=new faceapi.SsdMobilenetv1Options({
		minConfidence:0.8,
	})
	let img = await faceapi.fetchImage(blob);
	let detections =await faceapi.detectSingleFace(img, OPTION).withFaceLandmarks();
    const resizeResults = faceapi.resizeResults(detections, imageSize);
    return resizeResults;
}



