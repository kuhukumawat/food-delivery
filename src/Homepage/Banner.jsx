export default function Banner() {
  return (
    <>
      <div className=" lg:px-[160px] px-[20px] pt-24 lg:py-4 lg:h-screen h-auto flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto   items-center justify-center bg-gradient-to-l from-orange-200 to-orange-600 lg:h-[600px]">
          {" "}
          <div className="max-w-[700px] flex flex-col gap-4 text-white p-4">
            <h1 className="text-4xl font-bold">
              Fresh, Fast, and Delivered Right to Your Door
            </h1>
            <p className="text-lg font-normal">
              Satisfy your cravings with our seamless food delivery service that
              brings delicious meals from your favorite local restaurants
              straight to your doorstep. Whether you're in the mood for comfort
              food, healthy options, or something new and exciting, we've got
              you covered. With just a few taps, you can enjoy a hot, freshly
              prepared meal without leaving the comfort of your home. Experience
              the convenience of fast, reliable delivery and savor every bite!
            </p>
          </div>
          <div>
            <img src="/banner-image.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
