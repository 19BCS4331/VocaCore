import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    
    const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(currentProgress);
  };
  
  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };
  
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.clientWidth;
    const percentage = (clickPosition / progressBarWidth) * 100;
    
    audioRef.current.currentTime = (percentage / 100) * audioRef.current.duration;
    setProgress(percentage);
  };
  
  return (
    <div className="audio-player">
      <audio 
        ref={audioRef} 
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      
      <div className="flex items-center space-x-3">
        <button 
          onClick={togglePlayPause}
          className="h-12 w-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white transition-colors duration-200"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6 ml-1" />
          )}
        </button>
        
        <div className="flex-1">
          <div 
            className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer"
            onClick={handleProgressBarClick}
          >
            <div 
              className="h-full bg-purple-600 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <div className="text-purple-600 dark:text-purple-400">
          <Volume2 className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;