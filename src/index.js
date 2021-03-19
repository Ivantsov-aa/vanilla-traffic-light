let $lights = document.querySelectorAll('.bulb');
let timers = [5, 2, 4];
let counter = 0;
let $controlPanel = document.querySelector('#controlPanel');
let $controlButton = document.querySelectorAll('button');

window.addEventListener('load', illuminateLights);

let illuminateLights = setTimeout(() => {
    toggleLights();
}, 2000);

toggleLights = () => {
    for (i = 0; i < $lights.length; i++) {
        $lights[i].classList.remove('active');
    }
    $lights[counter].classList.add('active');
    setTimeout(toggleLights, timers[counter] * 1000 );
    counter = (counter + 1) % timers.length;
}

$controlPanel.addEventListener('click', (event) => {
    let targetButtonId = event.target.id;

    $lights.forEach(light => {
            if(targetButtonId === 'stopButton') {
                if(light.classList.contains('stopLight')){
                    light.classList.add('active');
                } else {
                    light.classList.remove('active');
                }
            }
            if(targetButtonId === 'slowButton') {
                if(light.classList.contains('slowLight')){
                    light.classList.add('active');
                } else {
                    light.classList.remove('active');
                };
            }
            if(targetButtonId === 'goButton') {
                if(light.classList.contains('goLight')){
                    light.classList.add('active');
                } else {
                    light.classList.remove('active');
                }
            }
            if(targetButtonId === 'clearButton') {
                light.classList.remove('active');
            }
    });
    toggleLights();
})
