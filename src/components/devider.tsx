type DeviderProps = {
  marginTop?: "sm" | "md" | "ig";
  marginBottom?: "sm" | "md" | "ig";
};

const Devider = ({ marginTop = "md", marginBottom = "md" }: DeviderProps) => {
  return (
    <>
      <div
        className={`devider devider--mb--${marginBottom} devider--mt--${marginTop}`}
      ></div>
    </>
  );
};

export default Devider;
