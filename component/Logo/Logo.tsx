import Image from 'next/image'

import Hex from '../Common/Hex'

export default function Logo() {
  return (
    <div className="logo">
      <Image
        src="/logo.png"
        alt="nug/kuc"
        priority
        width={182}
        height={205}
        className="z-10 absolute w-[4rem] logo__image"
      />
      <Hex
        id="logo-shape"
        width={182}
        height={205}
        className="w-[4rem] h-[4.5rem] animate-logo-spin logo__shape"
      />
    </div>
  )
}
