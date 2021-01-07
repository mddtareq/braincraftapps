// input show
var inputText = document.getElementById('input-text');
var text = document.getElementById('text');

inputText.addEventListener('keyup', () => {
    text.innerText = inputText.value;
})

//font select
var defaultFault = document.getElementById('default-font');
var hanaleifill = document.getElementById('hanaleifill');
var geostarfill = document.getElementById('geostarfill');
var miltonian = document.getElementById('miltonian');
var crafter = document.getElementById('crafter');
var butcherman = document.getElementById('butcherman');


defaultFault.addEventListener('click', () => {
    text.className = "default-font";
})
hanaleifill.addEventListener('click', () => {
    text.className = "hanaleifill";
})
geostarfill.addEventListener('click', () => {
    text.className = "geostarfill";
})
miltonian.addEventListener('click', () => {
    text.className = "miltonian";
})
crafter.addEventListener('click', () => {
    text.className = "crafter";
})
butcherman.addEventListener('click', () => {
    text.className = "butcherman";
})

// animation select
var animate = document.getElementById('animate')
var flip = document.getElementById('flip');
var flash = document.getElementById('flash');
var zoom = document.getElementById('zoom');
var light = document.getElementById('light');
var heart = document.getElementById('heart-beat');
var bounce = document.getElementById('bounce');

function animateWait() {
    setTimeout(function () { animate.className = "fake-function"; }, 1001);
}

flip.addEventListener('click', () => {
    animate.className = "flip";
    animateWait();
})
flash.addEventListener('click', () => {
    animate.className = "rotate";
    animateWait();
})
zoom.addEventListener('click', () => {
    animate.className = "zoom";
    animateWait();
})
light.addEventListener('click', () => {
    animate.className = "light";
    animateWait();
})
heart.addEventListener('click', () => {
    animate.className = "heart-beat";
    animateWait();
})
bounce.addEventListener('click', () => {
    animate.className = "bounce";
    animateWait();
})

// image show
var imageFile = document.getElementById('image-file');
var imageSet = document.getElementById('image-set');
imageFile.addEventListener('change', (e) => {
    var name = e.target.files[0].name;
    if (name.match(/\.(jpg|jpeg|png|gif)$/)) {
        var reader = new FileReader();

        reader.onload = function (e) {
            imageSet.src = e.target.result;
        }

        reader.readAsDataURL(e.target.files[0]);
    }
    else {
        alert('Please choose only image');
        imageFile.value = '';
        imageSet.src = './images/tareq.jpeg';
    }
})
