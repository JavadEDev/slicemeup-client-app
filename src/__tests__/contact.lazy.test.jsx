import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";

const queryCLient = new QueryClient();

const fetchMocker = createFetchMock(vi);

fetchMocker.enableMocks();

test("can submit contact form", async () => {
  fetchMocker.mockResponse(JSON.stringify({ status: "ok" }));
  const screen = render(
    <QueryClientProvider client={queryCLient}>
      <Route.options.component />
    </QueryClientProvider>,
  );

  const nameInput = screen.getByLabelText("Name");
  const emailInput = screen.getByLabelText("Email");
  const msgTextArea = screen.getByLabelText("Message");

  const textData = {
    name: "Javad",
    email: "Javad@example.com",
    message: "Just test contact form",
  };

  nameInput.value = textData.name;
  emailInput.value = textData.email;
  msgTextArea.value = textData.message;

  const btn = screen.getByRole("button");
  btn.click();

  const h3 = await screen.findByRole("heading", { level: 3 });

  expect(h3.innerText).toContain("Message Sent Successfully!");

  const requests = fetchMocker.requests();
  expect(requests.length).toBe(1);
  expect(requests[0].url).toBe("http://localhost:3000/api/contact");
  expect(fetchMocker).toHaveBeenCalledWith("/api/contact", {
    body: JSON.stringify(textData),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
});
