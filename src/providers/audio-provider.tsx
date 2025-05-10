import type { AudioContextValue } from "@/hooks/audio-hook";
import { AudioContext } from "@/hooks/audio-hook";
import React, { useState, useRef, useEffect } from "react";

interface AudioProviderProps {
  children: React.ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioSrc, setAudioSrc] = useState<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);

  const togglePlay = () => {
    if (audioRef.current?.paused && audioSrc) {
      audioRef.current
        .play()
        .catch((error) => console.error("Playback failed:", error));
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audioElement.addEventListener("play", handlePlay);
      audioElement.addEventListener("pause", handlePause);
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

      if (audioSrc) {
        audioElement.load();
        if (isPlaying) {
          audioElement
            .play()
            .catch((error) => console.error("Playback failed:", error));
        }
      }

      // if (isFirstLoad) {
      //   setIsFirstLoad(false);
      // }

      return () => {
        audioElement.removeEventListener("play", handlePlay);
        audioElement.removeEventListener("pause", handlePause);
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioSrc]); // Re-run effect when audioSrc changes

  const value: AudioContextValue = {
    audioSrc,
    setAudioSrc,
    isPlaying,
    setIsPlaying, // Make sure this is included
    audioRef,
    currentTime,
    duration,
    volume,
    setVolume,
    togglePlay,
    handleTimeUpdate,
    handleVolumeChange,
  };

  return (
    <AudioContext.Provider value={value}>
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      {children}
    </AudioContext.Provider>
  );
};
