import videoBG from "@/assets/videoBG.mp4";

export default function BackgroundVideo() {
  return (
    <video autoPlay muted loop>
      <source src={videoBG} type="video/mp4" />
    </video>
  );
}
