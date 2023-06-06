function configureListeners() {
    let images = document.getElementsByTagName('img')// select img elements  


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners  
        images[i].addEventListener("mouseover",addOpacity)   
        images[i].addEventListener("mouseout",removeOpacity)  
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    if(!this.classList.contains('dim')){ //checks to see if "this" img contains the dim class, if it does NOT, !, then... (classlist is a list of all usuable classes, if class is unavailable, returns a length =0)
        this.classList.add('dim') //it will add the class to the img!
    }
    getProductInfo(event.target.id); // gets the id (pn1-pn9) to be used in the switch comparison     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     if(this.classList.contains('dim')){ //if it has the class of dim...
        this.classList.remove('dim') // remove it!
     }

    let element = document.getElementById('color-price');
        element.textContent = ''; // having the blank space here makes the text content blank after mouseout
        
    let color = document.getElementById('color-name');
        color.textContent = ''; // having the blank space here makes the text content blank after mouseout

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) { // compares the id obtained in addOpacity
        case 'pn1':         
            // set variables for price and color name and invoke a function to update the price  
            price = '$14.99'
            colorName = 'Lime Green' 
            updatePrice(colorName, price)   
            break;           
        case 'pn2':
            // set variables for price and colorName name and invoke a function to update the price
            price = '$11.14'
            colorName = 'Medium Brown' 
            updatePrice(colorName, price)       
            break;            
        case 'pn3':
            // set variables for price and colorName name and invoke a function to update the price
            price = '$22.99'
            colorName = 'Royal Blue'   
            updatePrice(colorName, price)   
            break;   
        case 'pn4':
            // set variables for price and colorName name and invoke a function to update the price
            price = '$4.99'
            colorName = 'Solid Black'  
            updatePrice(colorName, price)    
            break;   
        case 'pn5':
            // set variables for price and colorName name and invoke a function to update the price
            price = '$8.22'
            colorName = 'Solid Cyan'   
            updatePrice(colorName, price)        
            break;   
        case 'pn6':
            // set variables for price and colorName name and invoke a function to update the price 
            price = '$11.99'
            colorName = 'Solid Purple' 
            updatePrice(colorName, price)          
            break;   
        case 'pn7':
            // set variables for price and colorName name and invoke a function to update the price
            price = '$13.42'
            colorName = 'Solid Red' 
            updatePrice(colorName, price)    
            break;   
        case 'pn8':
            // set variables for price and colorName name and invoke a function to update the price
            price = '$21.98'
            colorName = 'Solid White'   
            updatePrice(colorName, price)    
            break;   
        case 'pn9':
            // set variables for price and colorName name and invoke a function to update the price
            price = '$14.99'
            colorName = 'Solid Yellow'  
            updatePrice(colorName, price)   
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price')// select element with corresponding id
        // display price
        colorPrice.textContent=price

        let color = document.getElementById('color-name')// select element with corresponding id
        //display color name
        color.textContent = colorName //sets text content = specific color
    }
    
}
