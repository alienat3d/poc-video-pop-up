'use strict';

const trailer = document.querySelector('.trailer'),
  openButton = document.querySelector('.video-btn'),
  closeButton = document.querySelector('.close-btn'),
  video = document.querySelector('video');

openButton.addEventListener('click', () => trailer.classList.toggle('active'));

closeButton.addEventListener('click', () => trailer.classList.toggle('active'));

video.pause();
video.currentTime = 0;