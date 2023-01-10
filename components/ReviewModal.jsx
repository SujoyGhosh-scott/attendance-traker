import React from "react";

const ReviewModal = () => {
  return (
    <>
      <input type="checkbox" id="review-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="review-modal"
            className="btn btn-sm btn-circle absolute right-3 top-3"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Add Review</h3>
          <form
            className="py-4 form-control w-full"
            action="https://formsubmit.co/2ad2c504e576b1d74790b5a0d8a3d3e0"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="From Attendance Tracker"
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="email"
            />
            <label className="label">
              <span className="label-text">Review</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type here"
              name="review"
            ></textarea>
            <label className="label">
              <span className="label-text">
                Any suggetions for User Interface, or future versions
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type here"
              name="suggetions"
            ></textarea>

            <label className="label">
              <span className="label-text">Did you find any bugs?</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type here"
              name="bugs"
            ></textarea>
            <div className="modal-action mb-20 lg:mb-0">
              <button
                type="reset"
                className="btn btn-outline rounded-sm normal-case"
              >
                Reset
              </button>
              <button
                type="submit"
                className="btn btn-outline rounded-sm normal-case"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
