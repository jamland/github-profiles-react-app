import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ContextProvider } from "../../../context/App.context";
import RepoList from "./index";

import { repos } from "../../../__tests__/data.mocks";

const defaultState = {
  repos: {
    isLoading: false,
    error: false,
    data: repos,
  },
};

const testUrl = "/profiles/facebook";

const match = {
  url: testUrl,
};

const RepoListWrapped = ({ defaultState }) => (
  <ContextProvider value={defaultState}>
    <MemoryRouter initialEntries={[testUrl]}>
      <RepoList match={match} />
    </MemoryRouter>
  </ContextProvider>
);

test("Should render repo list from context", () => {
  const { getByText, getByTestId } = render(
    <RepoListWrapped defaultState={defaultState} />,
  );

  expect(getByTestId("repo-list")).toBeInTheDocument();

  repos.forEach(repo => {
    expect(getByText(repo.name)).toBeInTheDocument();
    expect(getByText(repo.description)).toBeInTheDocument();
  });
});

test("Should render not loader on loaded state", () => {
  const { queryByTestId } = render(
    <RepoListWrapped defaultState={defaultState} />,
  );

  expect(queryByTestId("loader")).toBeNull();
});

const defaultStateLoading = {
  repos: {
    isLoading: true,
    error: false,
    data: null,
  },
};

test("Should render loader on loading state", () => {
  const { getByTestId } = render(
    <RepoListWrapped defaultState={defaultStateLoading} />,
  );

  expect(getByTestId("loader")).toBeInTheDocument();
});

test("Should not render content wrapper on loading state", () => {
  const { queryByTestId } = render(
    <RepoListWrapped defaultState={defaultStateLoading} />,
  );

  expect(queryByTestId("repo-list")).toBeNull();
});
