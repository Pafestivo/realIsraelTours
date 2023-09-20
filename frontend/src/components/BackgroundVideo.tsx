import videoBG from "@/assets/videoBG.mp4";
import "@/styles/backgroundVideo.css";

export default function BackgroundVideo() {
  return (
    <video autoPlay muted loop>
      <source className="background-video" src={videoBG} type="video/mp4" />
    </video>
  );
}
