import Octagon from "@/components/Octagon";
import Trapezoids from "@/components/Trapezoids";

export default function Home() {
    const radius = 100
    const gap = 60
    const level = 4
  return (<>
        <Octagon radius={radius} gap={gap} level={level}/>
  </>

  );
}
