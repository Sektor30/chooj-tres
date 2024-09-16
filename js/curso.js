/* document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video-item');
    const videoPlayer = document.getElementById('video-player');

    videoItems.forEach(e => {
        e.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            videoPlayer.src = videoSrc;
            videoPlayer.play();
        });
    });
}); */




document.addEventListener('DOMContentLoaded', () => {
    const videos = [
        { title: 'Video de YouTube 1', src: 'https://www.youtube.com/embed/exUt98d7jVk', type: 'youtube' },
        { title: 'Video Local 1', src: 'videos/video1.mp4', type: 'local' },
        { title: 'Video Local 2', src: 'videos/video2.mp4', type: 'local' },
        { title: 'Video de YouTube 1', src: 'https://www.youtube.com/embed/eW3gMGqcZQc', type: 'youtube' },
        { title: 'Video de YouTube 2', src: 'https://www.youtube.com/embed/tgbNymZ7vqY', type: 'youtube' }
    ];

const videoList = document.getElementById('videoList');
    const videoPlayer = document.getElementById('videoPlayer');

    function loadVideo(src, type) {
        if (type === 'youtube') {
            videoPlayer.src = src;
        } else if (type === 'local') {
            videoPlayer.src = '';
            const videoSource = document.createElement('source');
            videoSource.src = src;
            videoSource.type = 'video/mp4';
            /* videoPlayer.innerHTML = ''; */ // Limpiar el contenido anterior

            videoPlayer.appendChild(videoSource);
            videoPlayer.load();
            

        }
        videoPlayer.style.display = 'block';
    }

    

    videos.forEach(video => {
        const button = document.createElement('button');
        button.textContent = video.title;

        
        button.addEventListener('click', () => loadVideo(video.src, video.type));
        videoList.appendChild(button);
    });
});
