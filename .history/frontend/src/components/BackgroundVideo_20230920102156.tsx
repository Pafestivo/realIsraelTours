import videoBG from "@/assets/videoBG.mp4";

export default function BackgroundVideo() {
  return (
    <video>
      <source src={videoBG} type="video/mp4" />
    </video>
  );
}
