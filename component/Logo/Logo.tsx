import Image from 'next/image'

export default function Logo() {
  return (
    <div className="logo">
      <Image
        src="/logo.png"
        alt="nug/kuc"
        priority
        width={182}
        height={205}
        className="logo__image absolute z-10 w-[4rem]"
      />
      <Image
        src="/logo-shape.svg"
        alt=""
        width={182}
        height={205}
        className="logo__shape animate-logo-spin w-[4rem]"
      />
    </div>
  )
}
