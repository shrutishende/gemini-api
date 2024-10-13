"use client";

import { useState } from "react";
import { AIchatSession } from "../../AIModal";

const prompt = "top 10 online courses for react js for free.";

export default function Home() {
    const [summary, setSummary] = useState("");

    const generateResult = async () => {
        const result = await AIchatSession.sendMessage(prompt);
        setSummary(result.response.text());
    };

    return (
        <div>
            <form>
                <div onClick={() => generateResult()}>click me</div>
                {summary}
            </form>
        </div>
    );
}
