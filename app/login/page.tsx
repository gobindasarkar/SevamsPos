import Image from "next/image";
import sevam from '@/public/sevam.png'
import LoginForm from "@/components/LoginForm";
import BannderSlider from "@/components/BannderSlider";
export default function page() {
  return (
    <div className="grid place-items-center min-h-screen p-4 bg-color1">
      <div className="max-w-xl w-full space-y-6 overflow-hidden">
        <div className="mb-5 w-full max-w-md mx-auto">
          <BannderSlider />
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
