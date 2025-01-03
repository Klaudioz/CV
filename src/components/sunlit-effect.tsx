"use client";

export function SunlitEffect() {
  return (
    <div id="dappled-light" className="touch-none">
      <div id="glow"></div>
      <div id="glow-bounce"></div>
      <div className="perspective">
        <div id="leaves" className="pointer-events-none">
          <svg style={{ width: 0, height: 0, position: 'absolute' }}>
            <defs>
              <filter id="wind" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" numOctaves="2" seed="1">
                  <animate 
                    attributeName="baseFrequency" 
                    dur="16s" 
                    keyTimes="0;0.33;0.66;1"
                    values="0.005 0.003;0.01 0.009;0.008 0.004;0.005 0.003" 
                    repeatCount="indefinite" 
                  />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic">
                  <animate 
                    attributeName="scale" 
                    dur="20s" 
                    keyTimes="0;0.25;0.5;0.75;1" 
                    values="45;55;75;55;45"
                    repeatCount="indefinite" 
                  />
                </feDisplacementMap>
              </filter>
            </defs>
          </svg>
        </div>
        <div id="blinds" className="pointer-events-none">
          <div className="shutters">
            {Array.from({ length: 23 }).map((_, i) => (
              <div key={i} className="shutter"></div>
            ))}
          </div>
          <div className="vertical">
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <div id="progressive-blur" className="pointer-events-none">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
} 