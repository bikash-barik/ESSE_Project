import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div class="column">
            <p>Company</p>

            <ul >
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div class="column">
            <p>Learn</p>

            <ul>
              <li>Algorithms</li>
              <li>Data Structures</li>
              <li>Languages</li>
              <li>CS Subjects</li>
              <li>Video Tutorials</li>
            </ul>
          </div>

          <div class="column">
            <p>Practice</p>

            <ul>
              <li>Company-wise</li>
              <li>Topic-wise</li>
              <li>Contests</li>
              <li>Subjective Questions</li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}