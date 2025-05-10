/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAudio } from "@/hooks/audio-hook";
import { useEffect, useMemo, useState } from "react";
import World from "@/assets/world.svg";

type RadioStation = {
  id: number;
  name: string;
  description: string;
  streamUrl: string;
};

const HomePage = () => {
  const { volume, handleVolumeChange, setAudioSrc, isPlaying, togglePlay } =
    useAudio();

  const [currentStation, setCurrentStation] = useState<RadioStation | null>();

  const radioStations = [
    {
      id: 1,
      name: "Radio City",
      description: "Online Radio Station in Nepal",
      streamUrl: "http://onlineradio.websoftitnepal.com:8036/stream/1/",
    },
    {
      id: 2,
      name: "Kantipur FM",
      description: "Nepal's First Private FM Radio Station",
      streamUrl: "http://broadcast.radiokantipur.com:7248/stream/1/",
    },
  ];

  const currentIndex = useMemo(() => {
    return radioStations.findIndex(
      (station) => station.id === currentStation?.id
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStation]);

  const handleNextStation = () => {
    const nextIndex = (currentIndex + 1) % radioStations.length;
    setCurrentStation(radioStations[nextIndex]);
  };

  const handlePreviousStation = () => {
    const previousIndex =
      (currentIndex - 1 + radioStations.length) % radioStations.length;
    setCurrentStation(radioStations[previousIndex]);
  };

  useEffect(() => {
    if (currentStation) {
      setAudioSrc(currentStation.streamUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStation]);

  useEffect(() => {
    if (!currentStation) {
      setCurrentStation(radioStations[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-teal-900/50">
      <div className="absolute top-0 left-0 w-full h-full right-0 bottom-0 bg-cover bg-center opacity-50">
        <img src={World} alt="World" />
      </div>
      <div className="flex flex-row items-center justify-center mt-4 relative z-10">
        <div className="w-[280px] h-[360px] bg-teal-900/50 rounded-2xl flex flex-col items-center p-8 border-r border-r-white">
          <h2 className="text-lg py-2 bg-white text-teal-900/50 w-full text-center rounded-lg">
            Radio Stations
          </h2>
          <div className="w-full flex flex-col mt-4 space-y-2">
            {radioStations.map((station) => (
              <div
                key={station.id}
                className="rounded-lg text-white p-2 bg-teal-900/20 w-full flex items-center"
                onClick={() => {
                  setCurrentStation(station);
                  setAudioSrc(station.streamUrl);
                }}
              >
                <span className="size-8 flex items-center justify-center mr-4 bg-white/80 hover:bg-white text-teal-900/50 rounded-full cursor-pointer">
                  {currentStation?.id === station.id ? (
                    <i className="fa-solid fa-pause"></i>
                  ) : (
                    <i className="fa-solid fa-play"></i>
                  )}
                </span>
                <span>{station.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[280px] h-[360px] bg-teal-900/50 rounded-2xl flex flex-col items-center">
          <div className="rounded-full w-[120px] h-[120px] bg-slate-400 mt-8 flex items-center justify-center overflow-hidden">
            <img src="/1.jpg" className="" />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-2xl text-white mt-4">{currentStation?.name}</h1>
            <p className="text-slate-200">{currentStation?.description}</p>
          </div>
          <div className="mt-8 flex flex-row items-center justify-center">
            <div>
              <i
                className="fa-solid fa-backward text-slate-200"
                onClick={handlePreviousStation}
              ></i>
            </div>
            <div className="w-12"></div>
            <div>
              {isPlaying ? (
                <i
                  onClick={togglePlay}
                  className="fa-solid fa-pause-circle fa-2xl text-slate-200"
                ></i>
              ) : (
                <i
                  onClick={togglePlay}
                  className="fa-solid fa-play-circle fa-2xl text-slate-200"
                ></i>
              )}
            </div>
            <div className="w-12"></div>
            <div>
              <i
                className="fa-solid fa-forward text-slate-200"
                onClick={handleNextStation}
              ></i>
            </div>
          </div>
          {/* Volume Slider */}
          <div className="flex flex-row items-center justify-center mt-4">
            <i className="fa-solid fa-volume-low text-slate-200"></i>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              className="w-32 mx-2"
              value={volume}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                handleVolumeChange(newVolume);
              }}
            />
            <i className="fa-solid fa-volume-high text-slate-200"></i>
          </div>
        </div>
        {/* <div
          className="mt-8 rounded-2xl bg-slate-400 p-8 flex flex-col items-center space-y-4"
          onClick={() =>
            setAudioSrc("http://onlineradio.websoftitnepal.com:8036/stream/1/")
          }
        >
          {audioSrc ===
          "http://onlineradio.websoftitnepal.com:8036/stream/1/" ? (
            <i className="fa-solid fa-pause text-xl"></i>
          ) : (
            <i className="fa-solid fa-play text-xl"></i>
          )}
          <span>Radio City</span>
        </div>
        <div
          className="mt-8 rounded-2xl bg-slate-400 p-8 flex flex-col items-center space-y-4"
          onClick={() =>
            setAudioSrc("http://broadcast.radiokantipur.com:7248/stream/1/")
          }
        >
          {audioSrc === "http://broadcast.radiokantipur.com:7248/stream/1/" ? (
            <i className="fa-solid fa-pause text-xl"></i>
          ) : (
            <i className="fa-solid fa-play text-xl"></i>
          )}
          <span>Radio Kantipur</span>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
