document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.main-image-container img');
  let currentIndex = 0;

  document.getElementById('arrow-image-forward').addEventListener('click', function(){
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  })

  document.getElementById('arrow-image-back').addEventListener('click', function() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
  })

  document.getElementById('gallery-image1').addEventListener('click', function() {
    images[currentIndex].classList.remove('active');
    currentIndex = 0;
    images[currentIndex].classList.add('active');
  })

  document.getElementById('gallery-image2').addEventListener('click', function() {
    images[currentIndex].classList.remove('active');
    currentIndex = 1;
    images[currentIndex].classList.add('active');
  })

  document.getElementById('gallery-image3').addEventListener('click', function() {
    images[currentIndex].classList.remove('active');
    currentIndex = 2;
    images[currentIndex].classList.add('active');
  })

  const stars = document.querySelectorAll('.star');
  const reviewText = document.getElementById('review-text');
  const reviewsContainer = document.querySelector('.reviews');
  const submitReviewButton = document.querySelector('.submit-review'); 
 
  stars.forEach(function(star) {
    star.addEventListener('click', function() {
      const starDataValue = parseInt(star.dataset.value);

      stars.forEach(function(s) {
        s.classList.remove('active');
      });

      for(let i=0;i<starDataValue; i++){
        stars[i].classList.add('active');
      }
    });
  });

  submitReviewButton.addEventListener('click', function() {
    const rating = document.querySelectorAll('.star.active').length;
    const reviewTextValue = reviewText.value;

    if(rating > 0 && reviewTextValue != ''){
      const newReview = document.createElement('div');
      newReview.classList.add('review');

      newReview.innerHTML = `
        <div class="review-star">${'&#9733;'.repeat(rating) + '&#9734;'.repeat(5-rating)}</div>
        <div class="review-text">${reviewTextValue}</div>
      `
      reviewsContainer.appendChild(newReview);

      reviewTextValue.value = '';
    } else {
      alert('Please enter a valid rating and review.')
    }
  })
})
  