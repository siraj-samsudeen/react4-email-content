import { render, screen } from '@testing-library/react';
import EmailContent from './EmailContent';

test("checking the email content title", () => {
    render
    render(<EmailContent />);
    var text = screen.getByText(/email content/i);
})