function playMicSound() {
  const sound = new Audio("./sounds/mic.mp3");
  sound.play().catch(error => {
    console.log("Audio play error:", error);
  });
}
