import Octagon from "@/components/Octagon";
import Image from "next/image";
import Header from "@/components/header/Header";
import VirtuesBox from "@/components/boxes/VirtuesBox";
import WordsBox from "@/components/boxes/WordsBox";
import ColorPicker from "@/components/colorPicker/ColorPicker";
import Properties from "@/components/properties/Properties";

export default function Home() {
    const radius = 80
    const gap = 80
    const level = 4
  return (<div className={'relative'}>
          <Image className={'absolute top-0 left-0 w-full h-full object-cover'
          } src={'/images/main-background.png'} alt={'Main Background'} width={844} height={600} />
          <Header />

          <div className={'relative flex w-max m-auto gap-4 py-10'}>
              {/* <WordsBox /> */}
              <Octagon radius={radius} gap={gap} level={level}/>
              {/* <VirtuesBox /> */}
               <ColorPicker />
              <Properties/>

          </div>
  </div>

  );
}