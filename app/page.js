import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-3 items-center justify-center">
          <p className="text-3xl font-bold">
            the best URL shortner in the market
          </p>
          <p className="px-30 text-center"> 
            we are the most straight forward url shortner.Most of the url shortner will track you or ask you to give your details for login.we understand your needs and hence we have created this url shortner
          </p>
          <div className='flex gap-3'>
                <Link href="shorten"><button className='text-white bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="github"><button className= 'text-white bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
            </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="vector image" src={"/vector.jpg"} fill={true}></Image>
        </div>
      </section>
    </main>
  );
}
