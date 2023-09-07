import React from "react";
import Column from "./Column";
import Block from "./Block";

export default function Box() {
  return (
    <div className="flex w-full h-full justify-center">
      <div className="flex flex-row items-center mt-24">
        <Column>
          <Block />
          <Block />
          <Block />
        </Column>
        <Column>
          <Block />
          <Block />
        </Column>
        <Column>
          <Block />
        </Column>
      </div>
    </div>
  );
}
