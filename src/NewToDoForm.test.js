import { render, screen } from '@testing-library/react';
import NewToDoForm from './NewToDoForm';

it("renders without crashing", () => {
    render(<NewToDoForm />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<NewToDoForm />);
    expect(asFragment()).toMatchSnapshot();
});