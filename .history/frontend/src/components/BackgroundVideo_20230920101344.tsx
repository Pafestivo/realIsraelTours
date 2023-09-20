import backgroundVideo from "../assets/videoBG.mp4";
export default function backgroundVideo() {
  return (
    <video>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
}
