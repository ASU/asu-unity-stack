import React, { useEffect } from "react";
import { Table } from "./Tables";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  decorators: [
    Story => (
      <div className="container">
        <Story />
      </div>
    ),
  ],
  globals: {
    framework: "react",
  },
  tags: ["!bootstrap"],
};

export const BasicTable: StoryObj<typeof Table> = {
  args: {
    columns: 5,
    fixed: false
  }
};

export const FixedTable: StoryObj<typeof Table> = {
  args: {
    columns: 12,
    fixed: true
  }
};

export default meta;
