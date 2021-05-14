const body = document.querySelector("body")

const userAgent = navigator.userAgent;

const IMG_NUMBER_LND = 3;
const IMG_NUMBER_POR = 0;

function isMobile(){
	if (userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || userAgent.match(/LG|SAMSUNG|Samsung/) != null){
		return true;
    } else{
		return false;
	}
}

function paintImageComputer(imgNumber){
    const image = new Image();
    image.src = `./images/landscape/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function paintImageMobile(imgNumber){
    const image = new Image();
    image.src = `./images/portrait/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandomComputer(){
    const number = Math.floor(Math.random() * IMG_NUMBER_LND);
    return number;
}

function genRandomMobile(){
    const number = Math.floor(Math.random() * IMG_NUMBER_POR);
    return number;
}

function init() {
    if(isMobile()){
        const randomNumber = genRandomMobile();
        paintImageMobile(randomNumber);
    }else{
        const randomNumber = genRandomComputer();
        paintImageComputer(randomNumber);
    }    
}

init();

