import { render } from "vitest-browser-react";
import { test, expect } from "vitest";
import Pizza from "../components/Pizza";

test("alt text renders on image", async () => {
  const name = "My favorite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} image={src} description="Cool browser test" />,
  );

  const img = await screen.getByRole("img");

  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute("src", src);
  await expect.element(img).toHaveAttribute("alt", name);
});
