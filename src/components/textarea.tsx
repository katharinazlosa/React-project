type TextareaType = {
  id: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

const Textarea = ({ id, onChange, value, label }: TextareaType) => {
  return (
    <>
      <div className="textarea">
        <label className="field__label" htmlFor={id}>
          {label ? label : id}
        </label>
        <textarea
          id="questionbox"
          name="questionbox"
          rows="7"
          cols="30"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
            onChange(e.target.value)
          }
        ></textarea>
      </div>
    </>
  );
};

export default Textarea;
