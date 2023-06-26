import Container from "../components/container";
import ProgressBar from "../components/progressbar";

const ProgressBarPage = () => {
  return (
    <>
      <Container>
        <h1>Progress bar</h1>
        <ProgressBar
          onFinish={() => console.log("finished")}
          // completed={progress}
          completed={30}
        />
        <ProgressBar completed={70} />
        <ProgressBar completed={56} />
      </Container>
    </>
  );
};

export default ProgressBarPage;
