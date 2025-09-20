import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import styles from "./vantaBackground.module.css";



const VantaBackground = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = FOG({
            el: vantaRef.current,
            THREE: THREE,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0x157fc5,
            midtoneColor: 0xb81f69,
            lowlightColor: 0xd10202,
            baseColor: 0x100000,
            blurFactor: 0.6,
            speed: 2,
            zoom: 1.5,
        });

        return () => {
            if(vantaEffect) vantaEffect.destroy();
        };
    });
    
    return (
        <div className="background" ref={vantaRef}>

        </div>
    );
}

export default VantaBackground;
