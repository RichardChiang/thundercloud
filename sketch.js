var epoch = 0;

function preload() {
	song = loadSound('assets/relaxing_rain_thunder_trimmed.mp3');
}

function setup() {
	let cnv = createCanvas(800,400);
	cnv.mouseClicked(togglePlay);
	// song.loop()

	analyzer = new p5.Amplitude();

	analyzer.setInput(song);
}

function draw() {
	background(51);

	let rms = analyzer.getLevel();


	if (rms > 0.07) {
		textSize(320);
		text("BOOM,THUNDER", 10, 30);
	}
	if (song.isPlaying()) {
		if (epoch % 10 == 0) {
		console.log(epoch);
		console.log(rms);
		console.log("----");
		}
		if (rms > 0.07) {
			console.log("BOOOM");
			console.log(epoch);
			console.log(rms);
			console.log("----");
		}
		epoch = epoch + 1;
	}
	fill(51);
	ellipse(width / 2, height / 2, 150, 150);

	fill('white');
	stroke(0);
	ellipse(width / 2, height / 2, 10 + rms * 2000, 10 + rms * 2000);
}

// fade song if mouse is over canvas
function togglePlay() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}

