import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import PlantForm from './PlantForm';
import userEvent from "@testing-library/user-event";
test("renders PlantForm component without crashing", () => {
    render(<PlantForm />);
});
describe("PlantForm should submit a new plant array and display the array on the page", () => {
    test("name input should accept text", async () => {
        //LOOK AT THIS 
        // Arrange
        render(<PlantForm />);
        // Act
        const nameInput = screen.getByLabelText(/name/i);
        const idInput = screen.getByLabelText(/id/i);
        // const scientificNameInput = screen.getByLabelText(/scientificName/i);
        // const difficultyInput = screen.getByLabelText(/difficulty/);
        // const lightInput = screen.getByLabelText(/light/);
        const imgInput = screen.getByLabelText(/img/);
        // const sizesInput = screen.getByLabelText(/sizes/);
        // const wateringInput = screen.getLabelText(/watering/);
        // const descriptionInput = screen.getLabelText(/description/);
        const priceInput = screen.getByLabelText(/price/);
        const button = screen.getByRole('button', { value: /submit!/i });
        // Act
        userEvent.type(nameInput, 'plant');
        userEvent.type(idInput, "2");
        // userEvent.type(scientificNameInput, "is very cute");
        // userEvent.type(difficultyInput," hard");
        // userEvent.type(lightInput,"light" );
        userEvent.type(imgInput,"img");
        // userEvent.type(sizeInput, "small");
        // userEvent.type(wateringInput, "less");
        // userEvent.type(descriptionInput, "very very nice plant");
        userEvent.type(priceInput, "5");
        userEvent.click(button);
        // Assert
        const newPlant = await screen.findByText(/dog/i);
        expect(nameInput).toHaveValue('plant');
        expect(idInput).toHaveValue("2");
        // expect(scientificInput).toHaveValue("is very cute");
        // expect(difficultyInput).toBeTruthy();("hard")
        // expect(lightInput).toHaveValue('light');
        expect(imgInput).toHaveValue("img");
        // expect(sizesInput).toHaveValue("small");
        // expect(wateringInput).toHaveValues();('less')
        // expect(descriptionInput).toHaveValue("very very nice plant");
        expect(priceInput).toHaveValues("5");
        expect(newPlant).toBeTruthy();

    });
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});

test("form shows success message on submit with form details", () => {});
