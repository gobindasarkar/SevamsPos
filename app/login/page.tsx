import Image from "next/image";
import Logo from '@/public/sevampos-logo.png'
import sevam from '@/public/sevam.png'
import LoginForm from "@/components/LoginForm";
export default function page() {
  return (
    <div className="grid place-items-center min-h-screen p-4 bg-color1">
      <div className="max-w-xl w-full space-y-6">
        <div className="mb-5 text-center">
          <Image className="max-w-64 mx-auto object-cover mb-5" src={Logo} alt="Sevams Pos" />
          <h4 className="text-muted-foreground">Fine Dining Experience</h4>
        </div>
        <div className="rounded-lg border text-bcolor shadow-sm p-6 w-full max-w-md mx-auto bg-[#0f131a] border-bordercolor shadow-blue ">
          <div className="space-y-6">
            <div className="text-center ">
              <h2 className="text-2xl font-bold text-white mb-2">Welcome!</h2>
              <p className="text-muted-foreground">Enter your mobile number to continue</p>
            </div>
            <LoginForm />
            <p className="text-xs text-muted-foreground text-center">By continuing, you agree to receive SMS notifications about your order</p>
            <div className="text-xs text-muted-foreground text-end mt-0 capitalize flex items-center justify-end gap-x-2">powerd by  <div><Image width={90} className="object-cover" src={sevam} alt="Sevams Pos" /></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
