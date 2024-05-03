import React from "react";
import { Meta } from "@storybook/react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from ".";
import { Button } from "@/components/Button";

const meta: Meta = {
  title: "OctaUI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

interface CardStoryArgs extends React.HTMLAttributes<HTMLDivElement> {}

const Template: (args: CardStoryArgs) => JSX.Element = (args) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>This is a description of the card.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content goes here.</p>
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});

