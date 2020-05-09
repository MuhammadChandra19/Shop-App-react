import React, { useRef, useEffect, useState } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import "@app/views/styles/Components/imageAsync.scss"

interface ImageAsyncProps {
  imgUrl: string;
  onClick?: () => void
}
const ImageAsync: React.FC<ImageAsyncProps> = ({ imgUrl, onClick = () => { } }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true)
    }
    // console.log(imgUrl)
  })
  return (
    <div className="image-async" onClick={onClick}>

      <img
        style={{ display: isLoaded ? 'block' : 'none' }}
        ref={imgRef}
        src={imgUrl}
        onLoad={() => setIsLoaded(true)}
        decoding="async"
        alt="loading..."
      />


      {!isLoaded && <HomeOutlined style={{ color: "#7ACBCF" }} />}
    </div>
  );
};

export default ImageAsync;