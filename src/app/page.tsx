import Octagon from "@/components/Octagon";
import Image from "next/image";
import Header from "@/components/header/Header";

export default function Home() {
    const radius = 80
    const gap = 60
    const level = 4
  return (<div className={'relative max-h-screen'}>
          <Image className={'absolute top-0 left-0 min-w-full min-h-full max-h-screen object-cover'
          } src={'/images/main-background.png'} alt={'Main Background'} width={1440} height={1024} />
          <Header />
        <Octagon radius={radius} gap={gap} level={level}/>
  </div>

  );
}
