document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('.offer-radio');

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            // Reset all offer boxes
            document.querySelectorAll('.offer-box').forEach(offerBox => {
                offerBox.querySelector('.discount-tag').style.display = 'block';
                offerBox.querySelector('.discount').style.display = 'none';
                offerBox.querySelector('.size-color-options').style.display = 'none'; 
            });

            // Update the selected offer box
            const offerBox = this.closest('.offer-box');
            offerBox.querySelector('.discount-tag').style.display = 'none';
            offerBox.querySelector('.discount').style.display = 'block';
            offerBox.querySelector('.size-color-options').style.display = 'block'; 
        });
    });
});
