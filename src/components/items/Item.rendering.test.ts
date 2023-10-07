// @vitest-environment jsdom

import { render, screen } from "../../test-utils";
import { describe, it, expect } from "vitest";
import ItemComponent from "./Item.vue";
import { ItemInterface } from "../../models/items";

describe("Item.component: rendering", () => {
  it("renders an Item text correctly", () => {
    const model: ItemInterface = {
      id: 1,
      name: "Unit test item 1",
      selected: false,
    };
    const testid = "unit-test-appearance-1";
    // render component
    render<typeof ItemComponent>(ItemComponent, {
      props: {
        testid,
        model,
      },
    });
    // get element reference by testid
    const liElement = screen.getByTestId(testid);
    // test
    expect(liElement).not.toBeNull();
    expect(liElement.innerHTML).toContain("Unit test item 1");
  });
});
