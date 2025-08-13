import Logo from '@/public/sevampos-logo.png'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
       <div className="container mx-auto p-4">
         <Image className='max-w-44' src={Logo} alt="logo" />
       </div>
    </div>
  )
}
