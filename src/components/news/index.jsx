import React from "react";
import "./news.css";

function News(){
    return (
      <>
        <header className="site-header">
          <div className="container">
            <div className="site-header__wrapper">
              <div className="header__start">
                <h1 className="header__title">NEWSLETTER</h1>
              </div>
              <div className="header__end">
                <input
                  className="header__input"
                  type="text"
                  placeholder="Search for headlines"
                />
                <button className="header__button" type="search">
                  SEARCH
                </button>
              </div>
            </div>
            <div className="site-nav">
              <nav className="navbar">
                <ul className="site-list">
                  <li className="site-item">
                    <a href="/" className="site-link">
                      Politics
                    </a>
                  </li>
                  <li className="site-item">
                    <a href="/" className="site-link site-link__world">
                      World
                    </a>
                  </li>
                  <li className="site-item">
                    <a href="/" className="site-link">
                      Economy
                    </a>
                  </li>
                  <li className="site-item">
                    <a href="/" className="site-link">
                      Science & Tech
                    </a>
                  </li>
                  <li className="site-item">
                    <a href="/" className="site-link">
                      Business
                    </a>
                  </li>
                  <li className="site-item">
                    <a href="/" className="site-link">
                      Travel
                    </a>
                  </li>
                  <li className="site-item">
                    <a href="/" className="site-link">
                      Climate
                    </a>
                  </li>
                  <li className="site-item">
                    <a href="/" className="site-link">
                      Lifestyle
                    </a>
                  </li>
                  <li className="site-item">
                    <a href="/" className="site-link">
                      Food
                    </a>
                  </li>
                  <li className="site-item">
                    <a href="/" className="site-link">
                      Sports
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="site-nav__end">
                <ul className="end-list">
                  <li className="end-item">
                    <span className="site-time">13:40</span>
                  </li>
                  <li className="end-item">
                    <img src="images/Shape.png" alt="closed" />
                  </li>
                  <li className="end-item">
                    <img src="images/gradus.png" alt="gradus" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="site-header__end">
            <div className="container">
              <div className="site-header__end-wrapper">
                <div className="site-header__left">
                  <img src="images/bayden.jpg" alt="bayden" />
                  <div className="left-title__wrapper">
                    <a href="/">
                      <p className="left-title">
                        Philomena Cunk Is Weird Enough to Take on the World
                      </p>
                      <p className="left-description">
                        The new Netflix show “Cunk on Earth” looks like an
                        ambitious BBC documentary. Until its fictional host,
                        created by Charlie Brooker, starts to ask some deeply
                        silly questions.
                      </p>
                    </a>
                    <img
                      className="left-end__img"
                      src="images/BBS_y.jpg"
                      alt="opa"
                    />
                  </div>
                </div>
                <div className="site-header__right">
                  <div className="site-header__right-top">
                    <div className="right-start">
                      <p className="right-start__title">
                        Secretary of State Antony J. Blinken on Friday canceled
                        a weekend trip to Beijing after a Chinese spy balloon
                        was sighted above the Rocky Mountain state of Montana,
                        igniting a frenzy of media coverage and political
                        commentary over a machine that the Pentagon said posed
                        no threat to the United States.
                      </p>
                    </div>
                    <div className="right-end">
                      <img src="images/blinken.jpg" alt="ballons" />
                    </div>
                  </div>
                  <div className="site-header__right-end">
                    <div className="right-end__start">
                      <img src="images/ballons.jpg" alt="ballons" />
                    </div>
                    <div className="right-end__title">
                      <h4 className="Airports-title">
                        More Airports to Use Greener ‘Glide’ Approach to Landing
                      </h4>
                      <div className="arxive">
                        <span>By Ginny Dennis</span>
                        <span>Feb. 4, 2023</span>
                      </div>
                      <hr className="header-line" />
                      <p className="Airports-description">
                        The Stopping Home Office Work’s Unproductive Problems
                        (SHOW UP, get it?) Act of 2023 passed the
                        Republican-majority US House of Representatives on a
                        close-to-party-line vote l...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}

export default News ;