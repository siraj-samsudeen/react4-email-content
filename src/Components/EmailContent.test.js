import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmailContent from './EmailContent';

test("checking the email content title", () => {
    render(<EmailContent />);
    screen.getByTitle("Email Content");
})

test("checking whether the  type select input is present", () => {
    render(<EmailContent />);
    var x = screen.queryByLabelText(/type/i, { selector: "select" });
    expect(x).toBeVisible();
});

test("checking whether the subject input is present", () => {
    render(<EmailContent />);
    var x = screen.queryByLabelText(/subject/i, { selector: "input" });
    expect(x).toBeInTheDocument();
});

test("checking whether the body textarea is present", () => {
    render(<EmailContent />);
    var x = screen.getByLabelText(/body/i, { selector: "textarea" });
    expect(x).toBeInTheDocument();
});

test("checking whether the update button is present", () => {
    render(<EmailContent />);
    var x = screen.getByRole('button', { name: /update/i });
    expect(x).toBeInTheDocument();
});

test("checking whether the cancel button is present", () => {
    render(<EmailContent />);
    var x = screen.getByRole('button', { name: /cancel/i });
    expect(x).toBeInTheDocument();
});

test("checking whether data is loaded after changing type", () => {
    render(<EmailContent />);
    var type = screen.getByLabelText(/type/i, { selector: "select" });
    userEvent.selectOptions(type, "2")
    var subject = screen.getByLabelText(/subject/i, { selector: "input" });
    expect(subject.value).toEqual("new subject")

    var body = screen.getByLabelText(/body/i, { selector: "textarea" });
    expect(body.value).toEqual("new body")
});

test("checking whether data is reset on cancel button click", () => {
    render(<EmailContent />);
    var type = screen.getByLabelText(/type/i, { selector: "select" });
    userEvent.selectOptions(type, "2");
    var type = screen.getByLabelText(/type/i, { selector: "select" });
    var subject = screen.getByLabelText(/subject/i, { selector: "input" });
    var body = screen.getByLabelText(/body/i, { selector: "textarea" });
    var cancelBtn = screen.getByRole('button', { name: /cancel/i });
    userEvent.click(cancelBtn);
    expect(subject.value).toEqual("")
    expect(type.value).toEqual("");
    expect(body.value).toEqual("")

});