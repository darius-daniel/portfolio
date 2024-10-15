export default function Blur() {
  return (
    <div className="w-full h-2/3 lg:size-2/5 absolute z-0 md:max-lg:w-1/2">
      <span className="size-1/2 rounded-full absolute z-1 blur-[90px] bg-secondary-2"></span>
      <span className="size-1/2 rounded-full absolute z-1 top-1/3 left-1/2 blur-[90px] bg-secondary-3"></span>
    </div>
  );
}
