"use client";

export default function YouTubeEmbed() {
  const videoId = "eGwhAGXJ5S0";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playlist=${videoId}&loop=1`;

  return (
    <div className="max-w-6xl mx-auto px-4"> 
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl" 
          src={embedUrl}
          title="Board Members Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}