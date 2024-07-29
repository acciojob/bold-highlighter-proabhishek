function highlight() {
    //Write your code here
    // Get all bold elements inside the paragraph
            const boldElements = document.querySelectorAll('#paragraph b');
            boldElements.forEach(element => {
                // Add the highlight class to each bold element
                element.classList.add('highlight');
            });

}


function return_normal() {
     const boldElements = document.querySelectorAll('#paragraph b');
            boldElements.forEach(element => {
                // Remove the highlight class from each bold element
                element.classList.remove('highlight');
            });
}
