function highlight() {
    const strongElements = document.querySelectorAll('#paragraph strong');
    strongElements.forEach(element => {
        // Change the color of each strong element to green
        element.style.color = 'green';
    });

}


function return_normal() {
    const strongElements = document.querySelectorAll('#paragraph strong');
    strongElements.forEach(element => {
        // Change the color of each strong element to green
        element.style.color = 'black';
    });
}
