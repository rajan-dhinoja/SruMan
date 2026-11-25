import Preloader from "@/components/Preloader";

export default function Loading() {
  return (
    <Preloader
      textKey="preloader.defaultText"
      subtitleKey="preloader.defaultSubtitle"
      fullScreen={true}
    />
  );
}
