import { render, screen } from '@testing-library/react';
import ToDo from './ToDo';

it("renders without crashing", () => {
    render(<ToDo />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<ToDo />);
    expect(asFragment()).toMatchSnapshot();
});