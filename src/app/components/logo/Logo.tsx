import Image from 'next/image';

interface LogoProps {
  className: string;
  width: number;
  height: number;
}

const Logo = ({ className, width, height }: LogoProps) => {
  return (
    <>
      <Image
        className={className}
        src="/casaNogal.jpg"
        alt="Casa Nogal"
        width={width}
        height={height}
      />
    </>
  )
}

export default Logo