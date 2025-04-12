import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Cartbar from "../src/CartBar";

test("cart bar displays empty cart message when empty", ()=> {
    render(<>
      <Cartbar cartItems={[]}/>
    </>)
    expect(screen.getByText('Looks like the cart is empty!')).toBeInTheDocument();
})
  
test("cart bar displaying list item(s) when cart has one or more item", () => {
const testItems = [
    {
    category: "test category 1",
    description: "test desc. 1",
    id: 1,
    image: 'testImg.url',
    price: 11,
    rating: {rate: 4.9, count: 120},
    title: "test title 1"
  }
]
    render(<Cartbar cartItems={testItems} />)
    screen.debug();
    expect(screen.queryByText('Looks like the cart is empty!')).not.toBeInTheDocument();
    expect(screen.getByRole('listitem')).toBeInTheDocument();
})