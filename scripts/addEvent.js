window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', myFunction);
    x.addEventListener('click', mySecondFunction);
    x.addEventListener('mouseout', myThirdFunction);
}

function myFunction() {
    document.getElementById('demo').textContent = 'Moused over!';
    return () => document.getElementById('demo').textContent = msg;
}

function mySecondFunction() {
    document.getElementById('demo').textContent = 'Clicked!';
    return () => document.getElementById('demo').textContent = msg;
}

function myThirdFunction() {
    document.getElementById('demo').textContent = 'Moused out!';
    return () => document.getElementById('demo').textContent = msg;
}
