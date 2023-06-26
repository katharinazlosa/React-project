import Container from "../components/container";
import Devider from "../components/devider";
import Select from "../components/select";

export type OptionType = {
  label: string;
  value: string;
};

const selectOptions: OptionType[] = [
  {
    label: "Option 1",
    value: "option-1",
  },
  {
    label: "Option 2",
    value: "option-2",
  },
  {
    label: "Option 3",
    value: "option-3",
  },
];

const SelectPage = () => {
  return (
    <Container>
      <h1>Select</h1>
      <Devider />
      <p className="type--san-serif type--lg">Options</p>
      <Select
        options={selectOptions}
        onChange={(option) => console.log(option)} //callback
      />
    </Container>
  );
};

export default SelectPage;
