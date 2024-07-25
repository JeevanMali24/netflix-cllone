document.addEventListener("DOMContentLoaded", function () {
  const songs = [
    {
      title: "Song 1",
      url: "https://soundcloud.com/dirtyworkzofficial/refuzion-out-of-my-mind?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Song 2",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Song 3",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  ];

  const songList = document.getElementById("songList");
  const audioPlayer = document.getElementById("audioPlayer");
  const currentSong = document.getElementById("currentSong");

  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.addEventListener("click", () => {
      audioPlayer.src = song.url;
      audioPlayer.play();
      currentSong.textContent = `Now Playing: ${song.title}`;
    });
    songList.appendChild(li);
  });
});
