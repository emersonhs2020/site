
import Link from "next/link";

export default function Home() {

  return (
    <>
      <h1 className="font-bold mb-2">Acessar Perfil</h1>

      <div>

        <Link href="/perfil/nome?lang=pt" className="hover:underline">
          IEFP
        </Link>
       
      </div>
    </>
  );
}