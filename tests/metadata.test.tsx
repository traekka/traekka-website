import { render, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";

import { Metadata } from "@/layouts/Metadata";

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
  "next/head",
  () =>
    function Head(props: { children: ReactNode }) {
      // eslint-disable-next-line react/jsx-no-useless-fragment
      return <>{props.children}</>;
    },
);

describe("Metadata component", () => {
  describe("Render method", () => {
    it("should set page title from NextSeo title", async () => {
      const title = "Random title";
      const description = "Random description";

      render(<Metadata title={title} description={description} />);

      await waitFor(() => {
        expect(document.title).toEqual(title);
      });
    });
  });
});
