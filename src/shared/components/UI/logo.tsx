import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/assets/shared/desktop/logo.svg";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image src={logo} alt="audiophile" style={{cursor: "pointer"}}/>
      </Link>
    </>
  );
};

export default Logo;
