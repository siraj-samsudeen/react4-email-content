import { render, screen } from '@testing-library/react';
import EmailContent from './EmailContent';

test("checking the email content title", () => {
    render(<EmailContent />);
    screen.getByTitle("Email Content");
})

test("checking whether the  type select input is present", () => {
    render(<EmailContent />);
    screen.getByLabelText(/type/i, { selector: "select" });
});

test("checking whether the subject input is present", () => {
    render(<EmailContent />);
    screen.getByLabelText(/subject/i, { selector: "input" });
});
