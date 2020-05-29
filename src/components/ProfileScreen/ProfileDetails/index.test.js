import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";

import ProfileDetails from "./index";
import { profile } from "../../../__tests__/data.mocks";

test("Should render profile with passed props!", () => {
  const { getByText, getByTestId, getByAltText } = render(
    <ProfileDetails profile={profile} />,
  );

  expect(getByText(profile.login)).toBeInTheDocument();
  expect(getByText(profile.name)).toBeInTheDocument();
  expect(getByText(profile.blog)).toBeInTheDocument();
  expect(getByText(profile.bio)).toBeInTheDocument();
  expect(getByText(profile.location)).toBeInTheDocument();
  expect(getByAltText(profile.name)).toBeInTheDocument();

  expect(getByTestId("profile-avatar")).toBeInTheDocument();
});
