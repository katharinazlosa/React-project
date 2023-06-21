import { useEffect, useState } from "react";
import Button from "../components/button";

type ProgressBarProps = {
  bgcolor: string;
  completed: number;
  onFinish: () => void;
};

const ProgressBar = ({ bgcolor, completed, onFinish }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

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
          className={`progress-bar ${progress} ? progress-bar__finished : ""`}
          style={{ width: `${progress}%`, backgroundColor: `${bgcolor}` }}
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
