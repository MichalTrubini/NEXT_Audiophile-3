import { ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
  children: ReactNode;
  selector: string;
}

const Portal: React.FC<PortalProps> = ({ children, selector }) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

   const target = document.querySelector(selector) as Element | null;

   return mounted && target
      ? createPortal(children, target)
      : null
}

export default Portal