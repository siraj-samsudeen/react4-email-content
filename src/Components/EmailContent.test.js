import { render, screen } from '@testing-library/react';
import EmailContent from './EmailContent';

test("checking the email content title", () => {
    render(<EmailContent />);
    screen.getByTitle("Email Content");
})

test("checking whether the select input is present", () => {
    render(<EmailContent />);
    screen.getByLabelText(/type/i);
});