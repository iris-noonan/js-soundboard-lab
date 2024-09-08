const daftSound = document.querySelector("#soundboard")

daftSound.addEventListener("click", (evt) => {
      const audioElement = new Audio(`../sounds/${evt.target.id}.wav`)
      audioElement.volume = .05
      audioElement.play()
      console.log('Sound: ', evt.target.id)
  })