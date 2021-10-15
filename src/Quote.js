import React from "react";

/** Simple presentation component for a quote.
 *
 * Props:
 * - quote {quote:{text:text, author:author}}
 *
 * { QuoteContainer } -> Todo
 **/

function Quote({ text, author }) {

  return (
    <div className="float-right">
        <i>{text} - {author}</i>
    </div>
  );
}

export default Quote;
