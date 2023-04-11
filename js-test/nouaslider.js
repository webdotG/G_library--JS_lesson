/* global noUiSlider:readonly */
const sliderElement = document.querySelector('.level-form__slider');
const valueElement = document.querySelector('.level-form__value');
const specialElement = document.querySelector('.level-form__special');

valueElement.value = 80;

noUiSlider.create(sliderElement, {
    range: {
        min: 0,
        max: 100,
    },
    start: 80,
    step: 1,
    connect: 'lower',
    format: {
        to: function (value) {
            if (Number.isInteger(value)) {
                return value.toFixed(0);
            }
            return value.toFixed(1);
        },
        from: function (value) {
            return parseFloat(value);
        },
    },
});

sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
});

specialElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
        sliderElement.noUiSlider.updateOptions({
            range: {
                min: 1,
                max: 10
            },
            start: 8,
            step: 0.1
        });
    } else {
        sliderElement.noUiSlider.updateOptions({
            range: {
                min: 0,
                max: 100,
            },
            step: 1
        });
        sliderElement.noUiSlider.set(80);
    }
});
//sliderElement.setAttribute('disabled', true);
//
// sliderElement.removeAttribute('disabled');
//
sliderElement.noUiSlider.destroy(); 
