const CLIPS = [
  { src: "/videos/adults/brian-bagwork.mp4", label: "Bag Work" },
  { src: "/videos/teens/teen-bagwork-explosive.mp4", label: "Teens" },
  { src: "/videos/kids/young-girl-padwork.mp4", label: "Youth" },
  { src: "/videos/adults/mens-class.mp4", label: "Open Class" },
];

export function VideoReel() {
  return (
    <section className="bg-ink border-t border-smoke overflow-hidden">
      <div className="px-5 md:px-10 py-10 max-w-[1600px] mx-auto">
        <p className="stamp text-bone/40">In The Gym</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-smoke">
        {CLIPS.map(({ src, label }) => (
          <div key={src} className="relative aspect-[9/16] overflow-hidden bg-ash">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={src} type="video/mp4" />
            </video>
            <span className="absolute bottom-3 left-3 stamp text-bone/80 bg-ink/70 px-2 py-1">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
