import "@/styles/backgroundVideo.css";

export default function BackgroundVideo() {
  return (
    <video autoPlay muted loop>
      <source
        className="background-video"
        src="/videoBG.mp4"
        type="video/mp4"
      />
    </video>
  );
}
