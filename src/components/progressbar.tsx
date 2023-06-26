import { useEffect, useState } from "react";
import Button from "../components/button";

type ProgressBarProps = {
  completed: number;
  onFinish?: () => void;
};

const ProgressBar = ({ completed, onFinish }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  const handleProgress = (progress: number) => {
    if (progress === 100) {
      onFinish && onFinish();
    }
    if (progress > 100) {
      return "100%";
    } else if (progress < 0) {
      return "0%";
    }
    return `${progress}%`;
  };

  useEffect(() => {
    setProgress(completed > 100 ? 100 : completed < 0 ? 0 : completed);
  }, [completed]);

  const handleMinusClick = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress - 1;
      return newProgress < 0 ? 0 : newProgress;
    });
  };

  const handlePlusClick = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 1;
      return newProgress > 100 ? 100 : newProgress;
    });
  };

  return (
    <>
      <div className="progress-container">
        <div
          className={`progress-bar ${
            progress === 100
          } ? progress-bar__finished : ""`}
          style={{ width: handleProgress(progress) }}
        >
          {progress}%
        </div>
      </div>
      <div className="progress-container--btn">
        <Button
          text="-"
          color="white"
          disabled={progress <= 0}
          onClick={handleMinusClick}
        />
        <Button
          text="+"
          color="white"
          disabled={progress >= 100}
          onClick={handlePlusClick}
        />
      </div>
    </>
  );
};

export default ProgressBar;
