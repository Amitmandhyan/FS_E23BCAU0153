function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; 
    let bmi = (weight / (height * height)).toFixed(2);

    let bmiCategory = '';
    clearImages();

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
        document.getElementById('underweight-img').classList.add('visible');
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal';
        document.getElementById('normal-img').classList.add('visible');
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
        document.getElementById('overweight-img').classList.add('visible');
    } else {
        bmiCategory = 'Obesity';
        document.getElementById('obesity-img').classList.add('visible');
    }

    document.getElementById('bmi-value').innerText = `Your BMI: ${bmi}`;
    document.getElementById('bmi-category').innerText = `Category: ${bmiCategory}`;
}

function clearImages() {
    document.getElementById('underweight-img').classList.remove('visible');
    document.getElementById('normal-img').classList.remove('visible');
    document.getElementById('overweight-img').classList.remove('visible');
    document.getElementById('obesity-img').classList.remove('visible');
}
