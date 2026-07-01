document.getElementById('scrapeBtn').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value.trim();
    const resultArea = document.getElementById('resultArea');
    const thumbnailPreview = document.getElementById('thumbnailPreview');
    const downloadBtn = document.getElementById('downloadBtn');

    if (!videoUrl) {
        alert('Please paste a valid YouTube URL first!');
        return;
    }

    // Function to extract YouTube Video ID using Regular Expression
    function getYoutubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    const videoId = getYoutubeId(videoUrl);

    if (videoId) {
        // YouTube's Max Resolution Thumbnail URL structure
        const hqThumbnailUrl = `https://youtube.com{videoId}/maxresdefault.jpg`;

        // Update UI
        thumbnailPreview.src = hqThumbnailUrl;
        downloadBtn.href = hqThumbnailUrl;
        
        // Open result pane with smooth transition
        resultArea.classList.remove('hidden');
        resultArea.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Invalid YouTube URL! Please check the link and try again.');
        resultArea.classList.add('hidden');
    }
});
