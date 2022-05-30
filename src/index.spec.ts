// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { calcSegment, Segment } from "./index";
expect.extend(matchers);

it("Should test empty segment", function () {
  // Given
  const firstSegment = [];
  const secondSegment = [];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(null);
});

it("Should test empty one segment", function () {
  // Given
  const firstSegment = [];
  const secondSegment = [0, 0];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(null);
});

it("Should test same segment at [0,0]", function () {
  // Given
  const firstSegment = [0, 0];
  const secondSegment = [0, 0];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(true);
});

it("Should test segment at [0,0] and [0,1]", function () {
  // Given
  const firstSegment = [0, 0];
  const secondSegment = [0, 1];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(true);
});

it("Should test segment at [1,2] and [0,1]", function () {
  // Given
  const firstSegment = [1, 2];
  const secondSegment = [0, 1];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(false);
});

it("Should test segment at [0,1] and [1,2]", function () {
  // Given
  const firstSegment = [0, 1];
  const secondSegment = [1, 2];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(false);
});



