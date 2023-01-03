console.log("Alive");

const animal = {
    name: 'Dog',
    kind: 'Mammal',
    speak: function (message) {
        console.log(`${this.name} says: '${message}'`);
    }
};

animal.speak('Hey bro!!!');

/* const animal = {
    name: prompt('Enter the name of the animal:'),
    kind: prompt('Enter the kind of the animal:'),
    speak: function(message) {
      console.log(`${this.name} says: '${message}'`);
    }
  };
  
  const inputMessage = document.querySelector('#input-message');
  animal.speak(inputMessage.value); */