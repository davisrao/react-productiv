import React, { useState } from "react";
import axios from "axios";
import Quote from "./Quote"

/** Render the Quote item.
 *
 * Props
 * - none

 *
 * State: 
 * - quote
 * 
 *  * { App } -> QuoteContainer
 */

function QuoteContainer() {
    const [quote, setQuote] = useState({ text: "I don't procrastinate, I just wait for the right moment", author: "Jean Paual Sartre" });

    /**Fetch a quote from axios */
    async function fetchQuote() {
        let resp = await axios.get("https://inspo-quotes-api.herokuapp.com/quotes/random");
        setQuote(resp.data.quote)
        console.log("resp", resp.data.quote);
        return quote
    };


    return (
        <div className="QuoteContainer">
            <Quote text={quote.text} author={quote.author} />
            <button onClick={fetchQuote}>Get Inspired</button>
        </div>
    );
}

export default QuoteContainer;
