import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn()
const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  // { sendMail:  sendMailSpy}
);

describe("submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64test.jpg",
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toBeCalled();
    // expect(sendMailSpy).toBeCalled();
  });
  it("should not be able submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64test.jpg",
      })
    ).rejects.toThrow();
  });
  it("should not be able submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "IDEA",
        comment: "",
        screenshot: "data:image/png;base64test.jpg",
      })
    ).rejects.toThrow();
  });
  it("should not be able submit feedback without screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "IDEA",
        comment: "tá tudo bugado",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
