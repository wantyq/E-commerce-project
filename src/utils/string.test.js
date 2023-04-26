import { capitalizeFirstLetter } from "./string";

describe("capitalizeFirstLetter", () => {
    test("Passed string is valid value", () => {
        const value = "hats";

        const expectedValue = "Hats";

        const transformedValue = capitalizeFirstLetter(value);

        expect(transformedValue).toBe(expectedValue);
    });

    test("Passed value is empty string", () => {
        const value = "";
        const expectedValue = "";
        const transformedValue = capitalizeFirstLetter(value);
        expect(transformedValue).toBe(expectedValue);
    });

    test("Passed value is undefined", () => {
        const value = undefined;
        const expectedValue = "";
        const transformedValue = capitalizeFirstLetter(value);
        expect(transformedValue).toBe(expectedValue);
    });

    test("Passed value is an object", () => {
        const value = {};
        const expectedValue = "";
        const transformedValue = capitalizeFirstLetter(value);
        expect(transformedValue).toBe(expectedValue);
    })
});

