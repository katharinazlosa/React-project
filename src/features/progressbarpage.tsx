import Container from "../components/container";
import ProgressBar from "../components/progressbar";

const ProgressBarPage = () => {
  return (
    <>
      <Container>
        <h1>Progress bar</h1>
        <ProgressBar
          onFinish={() => console.log("finished")}
          bgcolor="#6a1b9a"
          completed={30}
        />
        <ProgressBar bgcolor="#6a1b9a" completed={70} />
        <ProgressBar bgcolor="#6a1b9a" completed={56} />
      </Container>
    </>
  );
};

export default ProgressBarPage;
