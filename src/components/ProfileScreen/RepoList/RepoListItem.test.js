import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import RepoListItem from "./RepoListItem";

import { repos } from "../../../__tests__/data.mocks";

const repo = repos[0];
const testUrl = "/profiles/facebook";

const RepoListItemWrapped = props => (
  <MemoryRouter initialEntries={[testUrl]}>
    <RepoListItem {...props} />
  </MemoryRouter>
);

test("Should render repo in list with passed props!", () => {
  const { getByText } = render(<RepoListItemWrapped repo={repo} />);

  expect(getByText(repo.name)).toBeInTheDocument();
  expect(getByText(repo.description)).toBeInTheDocument();
  expect(getByText(repo.language)).toBeInTheDocument();
});
