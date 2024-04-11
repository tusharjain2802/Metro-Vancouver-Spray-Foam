
const HeroSection = () => {
    const videoSource = "../../assets/videos/heroVideo.mp4";

    return (
        <div className="relative w-full mt-[100px] h-[450px] overflow-hidden">
            hero
            
<img src={videoSource} alt="Video test" style={{ width: '100px', height: '100px' }} />


            {/* Overlay Content */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
                    <p className="mt-2 text-xl">Experience the beauty of nature.</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
