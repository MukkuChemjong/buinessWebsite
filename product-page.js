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
      const rating = parseInt(star.dataset.value);

      star.forEach(function(s) {
        s.classList.remove('active');
      });

      for(let i = 0; i < rating; i++){
        stars[i].classList.add('active');
      }
    })
  })

  submitReviewButton.addEventListener('click', function() {
    const rating = document.querySelectorAll('.star.active').length;
    const review = reviewText.value;
    if (review && rating > 0) {
      // Create a new review element
      const newReview = document.createElement('div');
      newReview.classList.add('review');
      newReview.innerHTML = `
        <div class="rating">${'&#9733;'.repeat(rating)}</div>
        <div class="text">${review}</div>
      `;
      // Append the new review to the reviews container
      reviewsContainer.appendChild(newReview);
      // Reset star ratings and review text
      stars.forEach(function(star) {
        star.classList.remove('active');
      });
      reviewText.value = '';
    } else {
      alert('Please enter a review and rating.');
    }
  });

  submitReviewButton.addEventListener('click', function() {
    const reviewStars = document.querySelectorAll('.star.active').length;
    const reviewTextValue = reviewText.value;

    if(reviewStars && textReview > 0) {
      const newReview = document.createElement('div');
      newReview.classList.add('review');
      newReview.innerHTML = `
        <div class="rating">${'&#9733;'.rating(reviewStars)}</div>
        <div class="text">${reviewTextValue}</div>
      `
      reviewsContainer.appendChild(newReview);

      stars.forEach(function(star) {
        star.classList.remove('active');
      })

      reviewTextValue.value = '';
    } else {
      alert('Please enter a rating and a review.')
    }
  })
})
  