import React from "react";

const ReviewModal = () => {
  return (
    <>
      <input type="checkbox" id="review-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Review</h3>
          <form className="py-4 form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Review</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
            <label className="label">
              <span className="label-text">
                Any suggetions for User Interface, or future versions
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>

            <label className="label">
              <span className="label-text">Did you find any bugs?</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
          </form>
          <div className="modal-action mb-20 lg:mb-0">
            <label
              htmlFor="review-modal"
              className="btn btn-outline rounded-sm normal-case"
            >
              Reset
            </label>
            <label
              htmlFor="review-modal"
              className="btn btn-outline rounded-sm normal-case"
            >
              Send
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
