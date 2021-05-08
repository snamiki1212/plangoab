import Image from "next/image";
export function HomePage() {
  return (
    <div>
      <div>this is header</div>
      <div>
        <div>this is hero</div>
        <Image src="/assets/airplane.png" width={680} height={382} />
      </div>
      <div>this is demo</div>
      <div>this is sponsered</div>
      <div>this is footer</div>
    </div>
  );
}
