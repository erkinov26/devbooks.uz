import React from "react";

export default function NotFound() {
  return (
    <div className="notFoundPage">
      <h1 className="section-title">DevBooks.uz</h1>
      <h1 className="notFoundPageSorry">
        {" "}
        Sorry! <i class="bx bx-message-rounded-error"></i>
      </h1>
      <h1 className="notFoundPageTitle">
        We can't seem to find the resource you're looking for.
      </h1>
      <p className="notFoundPageText">
        Please check that the Web site address is spelled correctly. Or go to
        our <span className="notFoundPageLink">home page</span>, and use the
        menus to navigate to a specific section.
      </p>
    </div>
  );
}
