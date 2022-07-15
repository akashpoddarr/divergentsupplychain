import React from "react";
import './Iphone.css'
export default function IphoneScreen() {
  return (
    <div>
      <div class="#iphone">
        <div class="#iphone-screen">
          <div class="#text-below">
            <h2>Activity A</h2>
            <h3>Recent activity</h3>
            <p>
              Did <em>Activity A</em> for 3 hours
            </p>
            <p>
              Started <em>Activity A</em>
            </p>
          </div>
          <button id="start" class="animate stopped">
            <div class="#button-info-container">
              <h2 class="activity">Activity A</h2>
              <p class="started-at"></p>
            </div>
            <span>Start</span>
          </button>
        </div>
      </div>
    </div>
  );
}
