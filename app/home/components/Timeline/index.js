import React from 'react'

export default function index() {
  return (
    <div>
      <main class="home">
        <div class="home-header">
          <h1>Home</h1>
          <div class="tabs">
            <div class="tab">
              <span>Following</span>
              <div class="highlight"></div>
            </div>
            <div class="tab">
              <span>Favorites 🌠</span>
            </div>
          </div>
        </div>

        <div class="new-tuit">
          <div class="pfp">
            <img src="https://picsum.photos/100/100" alt="" />
          </div>
          <div class="new-tuit-content">
            <textarea
              class="new-tuit-text"
              placeholder="What is happening?!"
            ></textarea>
            <div class="new-tuit-buttons">
              <div class="attachments">
                <span>
                  <i class="fa-regular fa-image"></i>
                </span>
                <span>
                  <i class="fa-solid fa-film"></i>
                </span>
                <span>
                  <i class="fa-solid fa-square-poll-horizontal"></i>
                </span>
                <span>
                  <i class="fa-regular fa-face-smile"></i>
                </span>
                <span>
                  <i class="fa-regular fa-calendar-plus"></i>
                </span>
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
              </div>
              <input class="btn-tuit" type="button" value="Tuit" />
            </div>
          </div>
        </div>

        <div id="timeline" class="timeline"></div>
      </main>
    </div>
  )
}
