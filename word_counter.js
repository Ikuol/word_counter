let countTarget = document.querySelector('#word-count-input');
let wordCount = document.querySelector('#word-count');
    let characterCount = document.querySelector('#character-count');
    var count = function(){
        let characters = countTarget.value;
            let characterLength = characters.length;
        let words = characters.split(/[nrs]+/g).filter(function(word){
            return word.length > 0;
        });
            wordCount.innerHTML = words.length;
            characterCount.innerHTML = characterLength;
    };
    count();
    window.addEventListener('input', function(event){
        if(event.target.matches('#word-count-input')){
            count();
        }
    },
        false
    );