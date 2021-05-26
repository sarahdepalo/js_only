'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // Header Elements
    const headerElement = document.createElement('header');
    container.append(headerElement);

    const navElement = document.createElement('nav');
    headerElement.append(navElement);

    const h1Element = document.createElement('h1');
    h1Element.innerText = 'HighOnCoding';
    navElement.append(h1Element);

    //UL elements
    const ulElement = document.createElement('ul');
    navElement.append(ulElement);

    const liElement1 = document.createElement('li');
    liElement1.classList.add('menu');
    liElement1.innerText = 'Home';
    ulElement.append(liElement1);

    const liElement2 = document.createElement('li');
    liElement2.classList.add('menu');
    liElement2.innerText = 'Categories';
    ulElement.append(liElement2);

    //Main Body Elements:
    const mainElement = document.createElement('main');
    container.append(mainElement);

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');
    mainElement.append(mainContainer);
    //h2 

    const h2Element = document.createElement('h2');
    h2Element.innerText = 'Curse of the Current Reviews';
    mainContainer.append(h2Element);
    //paragraphs

    const pElement1 = document.createElement('p');
    pElement1.innerText = 'Cupcake ipsum dolor sit amet. Chocolate bar carrot cake lemon drops. Gummi bears gingerbread cupcake biscuit liquorice. Pudding bear claw donut oat cake cotton candy. Donut biscuit oat cake. Fruitcake icing chocolate bar croissant sugar plum lollipop. Macaroon sugar plum biscuit liquorice bonbon muffin dessert. Soufflé lemon drops pie pie sugar plum macaroon powder cupcake pie.';
    mainContainer.append(pElement1);
    

    //Container 2:
    const secondaryContainer = document.createElement('div');
    secondaryContainer.classList.add('bodyContainer');
    mainElement.append(secondaryContainer);

    const h3Element1 = document.createElement('h3');
    h3Element1.innerText = "Hello WatchKit";
    secondaryContainer.append(h3Element1);
    
    const pElement2 = document.createElement('p');
    pElement2.innerText = 'Cupcake ipsum dolor sit amet. Chocolate bar carrot cake lemon drops. Gummi bears gingerbread cupcake biscuit liquorice. Pudding bear claw donut oat cake cotton candy. Donut biscuit oat cake. Fruitcake icing chocolate bar croissant sugar plum lollipop. Macaroon sugar plum biscuit liquorice bonbon muffin dessert. Soufflé lemon drops pie pie sugar plum macaroon powder cupcake pie.';
    secondaryContainer.append(pElement2);

    const likesBar = document.createElement('div');
    likesBar.classList.add('likesBar');
    secondaryContainer.append(likesBar);

    //When you move onto styling have all the p's in the likesBar class go to inline styling. 
    const commentElement1 = document.createElement('li');
    commentElement1.innerHTML = "<li>12 Comments</li><li>124 likes</li>";
    likesBar.append(commentElement1);
    
    // Container 3:
    const thirdContainer = document.createElement('div');
    thirdContainer.classList.add('bodyContainer');
    mainElement.append(thirdContainer);

    const h3Element2 = document.createElement('h3');
    h3Element2.innerText = "Introduction to Swift";
    thirdContainer.append(h3Element2);

    const pElement3 = document.createElement('p');
    pElement3.innerText = 'Cupcake ipsum dolor sit amet. Chocolate bar carrot cake lemon drops. Gummi bears gingerbread cupcake biscuit liquorice. Pudding bear claw donut oat cake cotton candy. Donut biscuit oat cake. Fruitcake icing chocolate bar croissant sugar plum lollipop. Macaroon sugar plum biscuit liquorice bonbon muffin dessert. Soufflé lemon drops pie pie sugar plum macaroon powder cupcake pie.';
    thirdContainer.append(pElement3);

    const likesBar2 = document.createElement('div');
    likesBar2.classList.add('likesBar');
    thirdContainer.append(likesBar2);

    const commentElement2 = document.createElement('li');
    commentElement2.innerHTML = "<li>12 Comments</li><li>124 likes</li>";
    likesBar2.append(commentElement2);

})