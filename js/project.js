// $("button").on("click", function(){
//   $(".book1").fadeIn(2000, function(){
//     console.log("It\'s Working!!!!");
//   });
// });



  $("button").on("click", function () {
    
    // $(".book").fadeIn(2000);
  

    for (let i = 0; i < book.length; i++) {


      $('#books').append(
        '<div class="book" >' +
        '<img src="' + book[i].image + '" alt="cover-page" class="image">' +
        '<div class="side-info">' + 
        '<p>Title : ' + book[i].title + '</p>' +
        '<p>Publisher : ' + book[i].publisher + '</p>' +
        '<p>Price : ' + book[i].price + '</p>' +
        '</div>' +
        '</div>'
       
      );
     
    }
    $(".book").fadeIn(2000);

  });

  
let book = [

  {
    title: 'Opposite Attractions',
    publisher: 'Independent House',
    price: '$15.95',
    image: 'images/Attraction.jpg'
  },
  {
    title: 'Celestine Prophecy',
    publisher: 'Warner Books, Inc.',
    price: '$20.00',
    image: 'images/Celestine.jpg'
  },

  {
    title: 'The Da Vinci Code',
    publisher: 'Anchor',
    price: '$8.99',
    image: 'images/DaVinciCode.jpg'
  },

  {
    title: 'Dragon Ball Super',
    publisher: 'VIZ Media LLC',
    price: '$8.49',
    image: 'images/DragonBallSuper.jpg'
  },

  {
    title: 'Eloquent Javascript',
    publisher: 'No Starch Press',
    price: '$27.00',
    image: 'images/Eloquent.jpeg'
  },

  {
    title: 'Emotional Intelligence',
    publisher: 'David Clark',
    price: '$14.95',
    image: 'images/EmotionalAI.jpg'
  },

  {
    title: 'Love & Lasagna',
    publisher: 'CreateSpace Independent',
    price: '$16.95',
    image: 'images/Lasagna.jpg'
  },

  {
    title: 'Behold a Pale Horse',
    publisher: 'Light Technology Publishing',
    price: '$15.99',
    image: 'images/PaleHorse.jpg'
  },

  {
    title: 'We Love Beef',
    publisher: 'Ownage Books',
    price: '$26.95',
    image: 'images/Steak.jpg'
  },
 
];




// for (let i = 0; i < book.length; i++) {
  
//   $('#books').append(
//     '<div class="book" >'+
//       '<img src="images/DragonBallSuper.jpg" alt="cover-page" class="image">'+
//         '<div class="side-info">'+
//           '<p>Title : ' + book[i].title + '</p>'+
//           '<p>Publisher : ' + book[i].publisher + '</p>'+
//           '<p>Price : ' + book[i].price + '</p>'+
//         '</div>'+
//       '</div>'
//   );
//   console.log(book[i]);
  
// }


  // for(let i = 0; i < book.length; i++) {
  //     book[i].title;
  //     book[i].publisher;
  //     book[i].price;
  //     book[i].image;
  //   console.log(
  //   book[i].title,
  //   book[i].publisher,
  //   book[i].price,
  //   book[i].image);
  // }

// $('.book').html(book);
//   alert('hello');
// $();

// $("button").on("click", function() {
//   $(".book1").animate({ "left": "+=50%" }, 5000);
//   $(".book2").animate({ "right": "+=50%" }, 5000);
// });