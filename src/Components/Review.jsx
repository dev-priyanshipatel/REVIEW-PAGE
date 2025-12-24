import { useRef, useState } from "react";

const Review = () => {
  const [input, setInput] = useState({
    rating: "",
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  const [error, setErr] = useState({});
  const formRef = useRef(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
    setErr({ ...error, [e.target.id + "Error"]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    const emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (input.rating === "") {
      errors.ratingError = "Please enter Rating";
    }

    if (input.name.trim() === "") {
      errors.nameError = "Please Enter Valid Name";
    }

    if (input.email.trim() === "" || !emailRgx.test(input.email.trim())) {
      errors.emailError = "Please Enter valid Email";
    }

    if (input.subject.trim() === "") {
      errors.subjectError = "Please Enter Valid Review Subject";
    }

    if (input.comment.trim() === "") {
      errors.commentError = "Plese Write Your Comment";
    }

    setErr(errors);
    if (Object.keys(errors).length > 0) return;
    setInput({
      rating: "",
      name: "",
      email: "",
      subject: "",
      comment: "",
    });
  };

  return (
    <div className="container  d-flex justify-content-center align-items-center">
      <div className="form-container py-5">
        <form noValidate onSubmit={handleSubmit} ref={formRef}>
          <div>
            <h1 className="text-center">Write Review</h1>

            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Rating :
              </label>
              <select
                className={` form-select ${
                  error.ratingError ? `border-danger` : ``
                }`}
                id="rating"
                value={input.rating}
                required
                onChange={handleChange}
              >
                <option value="">Select Rating</option>
                <option value="1">1 Star(Worst)</option>
                <option value="2">2 Star</option>
                <option value="3">3 Star(Average)</option>
                <option value="4">4 Star</option>
                <option value="5">5 Star(Best)</option>
              </select>
              <div className="error-msg">{error.ratingError || ""}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name :{" "}
              </label>
              <input
                type="text"
                className={` form-control ${
                  error.nameError ? `border-danger` : ``
                }`}
                id="name"
                value={input.name}
                required
                onChange={handleChange}
              />
              <div className="error-msg">{error.nameError || ""}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email :{" "}
              </label>
              <input
                type="email"
                className={` form-control ${
                  error.emailError ? `border-danger` : ``
                }`}
                id="email"
                value={input.email}
                required
                onChange={handleChange}
              />
              <div className="error-msg">{error.emailError || ""}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Review Subject :{" "}
              </label>
              <input
                type="text"
                className={` form-control ${
                  error.subjectError ? `border-danger` : ``
                }`}
                id="subject"
                value={input.subject}
                required
                onChange={handleChange}
              />
              <div className="error-msg">{error.subjectError || ""}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="comment" className="form-label d-block">
                Comment :{" "}
              </label>
              <textarea
                name="comment"
                id="comment"
                className={` form-control ${
                  error.commentError ? `border-danger` : ``
                }`}
                value={input.comment}
                required
                onChange={handleChange}
              ></textarea>
              <div className="error-msg">{error.commentError || ""}</div>
            </div>

            <div className="mb-3 text-center">
              <button className="btn bg-grey">Submit Review</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
