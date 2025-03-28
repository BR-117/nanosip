import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">NanoSip</h1>

      {/* Hydrated Icon */}
      <div className="hydrated-icon">
        <Image 
          className="nanodrop"
          src="/assets/hydrated.png" // Path from the root since it's in the public folder
          alt="NanoSip Logo"
          width={300} 
          height={300}
        />
      </div>

      {/* Drink Options */}
      <div className="container-box">
        <div className="image-button">
          <p className="button-text">50ml</p>
          <Image className="buttons" src="/assets/options.png" width={200} height={200} alt="50ml" />
        </div>

        <div className="image-button">
          <p className="button-text">100ml</p>
          <Image className="buttons" src="/assets/options.png" width={200} height={200} alt="100ml" />
        </div>

        <div className="image-button">
          <p className="button-text">150ml</p>
          <Image className="buttons" src="/assets/options.png" width={200} height={200} alt="150ml" />
        </div>

        <div className="image-button">
          <p className="button-text">200ml</p>
          <Image className="buttons" src="/assets/options.png" width={200} height={200} alt="200ml" />
        </div>

        <div className="image-button">
          <p className="button-text">250ml</p>
          <Image className="buttons" src="/assets/options.png" width={200} height={200} alt="250ml" />
        </div>
      </div>
    </div>
  );
}
