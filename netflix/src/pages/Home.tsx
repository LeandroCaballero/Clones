import MainLoyout from "../layouts/Main";

const Home = () => {
  return (
    <MainLoyout>
      <div className="h-screen">
        <video
          className="w-full h-full object-fill
      "
          muted
          autoPlay
          loop
        >
          <source
            src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      <div>test</div>
    </MainLoyout>
  );
};

export default Home;
