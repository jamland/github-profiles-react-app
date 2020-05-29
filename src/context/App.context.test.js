import "@testing-library/jest-dom/extend-expect";
import React, { useContext } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import { AppContext, ContextProvider } from "../context/App.context.js";

import { profile } from "../__tests__/data.mocks";

const defaultState = {};

describe("Context API", () => {
  test("Should correctly update searchQuery and pass correct value ", () => {
    const { getByTestId, getByText } = render(
      <ContextProvider value={defaultState}>
        <TestContextSearchData />
      </ContextProvider>,
    );

    const input = getByTestId("input");
    fireEvent.change(input, { target: { value: "facebook" } });

    expect(getByText("facebook")).toBeInTheDocument();
  });

  test("Should correctly fetch / update profile data and pass it to components ", async () => {
    fetch.mockResponse(JSON.stringify(profile));

    const { getByTestId, getByText } = render(
      <ContextProvider value={defaultState}>
        <TestContextProfileFlow />
      </ContextProvider>,
    );

    const button = getByTestId("button");
    fireEvent.click(button);

    // wait for appearance of elements after fetch
    await waitFor(() => {
      expect(getByText(profile.login)).toBeInTheDocument();
      expect(getByText(profile.name)).toBeInTheDocument();
      expect(getByText(profile.blog)).toBeInTheDocument();
      expect(getByText(profile.bio)).toBeInTheDocument();
      expect(getByText(profile.location)).toBeInTheDocument();
    });
  });
});

const TestContextSearchData = () => {
  const { state, setSearchQuery } = useContext(AppContext);

  return (
    <>
      <div>{state.searchQuery}</div>
      <input
        data-testid="input"
        type="text"
        onChange={e => setSearchQuery(e.target.value)}
      />
    </>
  );
};

const TestContextProfileFlow = () => {
  const { state, getUserProfile } = useContext(AppContext);

  return (
    <>
      <button data-testid="button" onClick={() => getUserProfile("jamland")}>
        Fetch me
      </button>

      {!!state.profile && (
        <>
          <div>{state.profile.data?.login}</div>
          <div>{state.profile.data?.name}</div>
          <div>{state.profile.data?.blog}</div>
          <div>{state.profile.data?.bio}</div>
          <div>{state.profile.data?.location}</div>
        </>
      )}
    </>
  );
};
