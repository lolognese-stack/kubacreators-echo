const VideoSection = () => {
  return (
    <section id="why" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">
          How we scaled this AI creator past 60k followers
        </h2>
        <div className="relative aspect-video rounded-2xl overflow-hidden glass-card glow-primary">
          <iframe
            src="https://www.loom.com/embed/de398e27baf04b7289129b06d36d3111"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            title="How We Generated $15,000 a Month with an AI Content Creator"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
