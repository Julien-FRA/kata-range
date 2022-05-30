// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { calcSegment, Segment } from "./index";
expect.extend(matchers);

it("Should test same segment at [0,0]", function () {
  // Given
  const firstSegment: Segment = [{ value: 0, inclusion: "INCLUDED" }, { value: 0, inclusion: "INCLUDED" }];
  const secondSegment: Segment = [{ value: 0, inclusion: "INCLUDED" }, { value: 0, inclusion: "INCLUDED" }];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(true);
});

it("Should test segment at [0,0] and [0,1]", function () {
  // Given
  const firstSegment: Segment = [{ value: 0, inclusion: "INCLUDED" }, { value: 0, inclusion: "INCLUDED" }];
  const secondSegment: Segment = [{ value: 0, inclusion: "INCLUDED" }, { value: 1, inclusion: "INCLUDED" }];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(true);
});

it("Should test segment at [1,2] and [0,1]", function () {
  // Given
  const firstSegment: Segment = [{ value: 1, inclusion: "INCLUDED" }, { value: 2, inclusion: "INCLUDED" }];
  const secondSegment: Segment = [{ value: 0, inclusion: "INCLUDED" }, { value: 1, inclusion: "INCLUDED" }];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(false);
});

it("Should test segment at [0,1] and [1,2]", function () {
  // Given
  const firstSegment: Segment = [{ value: 0, inclusion: "INCLUDED" }, { value: 1, inclusion: "INCLUDED" }];
  const secondSegment: Segment = [{ value: 1, inclusion: "INCLUDED" }, { value: 2, inclusion: "INCLUDED" }];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(false);
});

it("Should test segment at [2,3] and [1,2]", function () {
  // Given
  const firstSegment: Segment = [{ value: 2, inclusion: "INCLUDED" }, { value: 3, inclusion: "INCLUDED" }]
  const secondSegment: Segment = [{ value: 1, inclusion: "INCLUDED" }, { value: 2, inclusion: "INCLUDED" }];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(false);
});

it("Should test segment at [1,2] and [0,2[", function () {
  // Given
  const firstSegment: Segment = [{ value: 1, inclusion: "INCLUDED" }, { value: 2, inclusion: "INCLUDED" }];
  const secondSegment: Segment = [{ value: 0, inclusion: "INCLUDED" }, { value: 2, inclusion: "NOT_INCLUDED" }];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(false);
});

it("Should test segment at ]1,2] and [0,2]", function () {
  // Given
  const firstSegment: Segment = [{ value: 1, inclusion: "NOT_INCLUDED" }, { value: 2, inclusion: "INCLUDED" }];
  const secondSegment: Segment = [{ value: 0, inclusion: "INCLUDED" }, { value: 2, inclusion: "INCLUDED" }];
  // When
  const inSegment = calcSegment(firstSegment, secondSegment);
  // Then
  expect(inSegment).toEqual(false);
});
