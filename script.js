window.onload = function (){
    const inputText = document.getElementById('text-input');
    const memeText = document.getElementById('meme-text');
    const memeImage = document.getElementById('meme-image');
    const inputImg = document.getElementById('meme-insert');

    function memeTextAdder(event) {
        const input = event.target;
        memeText.innerText = input.value;
      }
      
      inputText.addEventListener('keyup', memeTextAdder);
      
     
      
      function memeImgAdder() {
        const imageURL = URL.createObjectURL(inputImg.files[0]);
        memeImage.src = imageURL;
        memeText.style.position = 'absolute';
        memeText.style.top = '85%';
      }
      
      inputImg.addEventListener('change', memeImgAdder);



}