import React from 'react';
import Helmet from 'react-helmet';
import { Entity } from 'aframe-react';
import { AFrameRenderer, Marker } from 'react-web-ar';
// import aframe from '../../src/js/a-frame';
// import arjs from '../../src/js/ar-js';

import { PageWrapper } from '@ui/atoms';

const Arjs = (
  <>
    <div className="arjs-loader">
      <div>Loading, please wait...</div>
    </div>
    <a-scene
      vr-mode-ui="enabled: false;"
      embedded
      arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
    >
      <a-nft
        type="nft"
        url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/data/dataNFT/pinball"
        smooth="true"
        smoothCount="10"
        smoothTolerance="0.01"
        smoothThreshold="5"
      >
        <a-entity
          gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
          position="75 150 0"
          rotation="90 90 90"
          scale="10 10 10"
        ></a-entity>
      </a-nft>
      <a-entity camera></a-entity>
    </a-scene>
  </>
);

type Props = {};

export const Ar: React.FC<Props> = ({}) => {
  const [loading, setLoading] = React.useState(true);

  const handleLoad = React.useCallback(() => {
    setLoading(false);
  }, []);

  React.useEffect(() => {
    // window.addEventListener('load', handleLoad);
    // return () => window.removeEventListener('load', handleLoad);
    if (document.readyState === 'complete') {
      handleLoad();
    }
  }, [document.readyState]);

  return (
    <>
      <Helmet>
        {/* <script
          src="https://aframe.io/releases/0.7.0/aframe.min.js"
          type="text/javascript"
        />
        <script
          src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"
          type="text/javascript"
        /> */}
        <script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
      </Helmet>
      {loading ? <div>Wait pls!</div> : Arjs}
    </>
  );
};

export default Ar;
