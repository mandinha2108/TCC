
const correctAnswer = 'D';

function checkAnswer(element, chosen) {
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => {
    opt.classList.remove('correct', 'incorrect');
    opt.style.pointerEvents = 'none';
  });

  if (chosen === correctAnswer) {
    element.classList.add('correct');
  } else {
    element.classList.add('incorrect');
    document.querySelector(`.quiz-option:nth-child(${['A','B','C','D'].indexOf(correctAnswer)+1})`).classList.add('correct');
  }
}
function changeVideo(videoId) {
  const iframe = document.getElementById("mainVideo");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}