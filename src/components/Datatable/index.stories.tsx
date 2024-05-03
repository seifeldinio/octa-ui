import { Meta } from "@storybook/react";

import Datatable from ".";

const meta: Meta = {
  title: "OctaUI/Datatable",
  component: Datatable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

// interface DatatableStoryArgs {
//   rows: { [key: string]: any }[];
//   columns: string[];
// }

export const Default = () => (
  <Datatable
    rows={[
      { id: 1, name: "John Doe", age: 30, address: "123 Main St" },
      { id: 2, name: "Jane Smith", age: 25, address: "456 Elm St" },
    ]}
    columns={["name", "age", "address"]}
  />
);
