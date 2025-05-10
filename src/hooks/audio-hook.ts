import { createContext, useContext } from "react";

interface AudioContextValue {
  audioSrc: string | undefined;
  setAudioSrc: React.Dispatch<React.SetStateAction<string | undefined>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  currentTime: number;
  duration: number;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  togglePlay: () => void;
  handleTimeUpdate: () => void;
  handleVolumeChange: (volume: number) => void;
}

const AudioContext = createContext<AudioContextValue | undefined>(undefined);

const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

export type { AudioContextValue };
export { AudioContext, useAudio };
