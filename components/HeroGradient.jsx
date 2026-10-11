'use client';

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

// Tweak live at https://shadergradient.co, then copy the values back here
export default function HeroGradient() {
  return (
    <ShaderGradientCanvas
      style={{ position: 'absolute', inset: 0 }}
      pixelDensity={1}
      fov={45}
      pointerEvents="none"
    >
      <ShaderGradient
        control="props"
        type="waterPlane"
        animate="on"
        uSpeed={0.18}
        uStrength={2.6}
        uDensity={1.3}
        uFrequency={5.5}
        uAmplitude={0}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        color1="#2b3cff"
        color2="#ffb21e"
        color3="#a6e6d2"
        reflection={0.1}
        brightness={1.15}
        lightType="3d"
        envPreset="city"
        grain="on"
        cAzimuthAngle={180}
        cPolarAngle={80}
        cDistance={2.8}
        cameraZoom={1}
      />
    </ShaderGradientCanvas>
  );
}
