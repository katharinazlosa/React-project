type DividerProps = {
  marginTop?: "sm" | "md" | "ig";
  marginBottom?: "sm" | "md" | "ig";
};

const Divider = ({ marginTop = "md", marginBottom = "md" }: DividerProps) => {
  return (
    <>
      <div
        className={`divider divider--mb--${marginBottom} divider--mt--${marginTop}`}
      ></div>
    </>
  );
};

export default Divider;
