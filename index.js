function cat(){
     var image =document.createElement('img');// creates an image element 
     var div= document.getElementById('cat-gen');// calling div in javascript by id
     image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";//giving src to image
     div.appendChild(image);// giving images as achild to the div
}