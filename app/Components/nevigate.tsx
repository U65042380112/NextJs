'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Client } from "undici-types";
export default function nevigate() {
    const pathname = usePathname();
  return (
    <div style={{textAlign:"center",fontSize:45}}>
      <Link  href="/Home" className={pathname==='/Home'? "active1":""}>Home</Link>|
      <Link  href="/profile" className={pathname==='/profile'? "active2":""}>Profile</Link>|
      <Link  href="/about" className={pathname==='/about'? "active3":""}>About</Link>|
      <Link  href="/profile/info" className={pathname==='/profile/info'? "active4":""}>Info</Link>
    </div>
  )
}
