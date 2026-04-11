export default function MainExamplesItem() {
  return (
    <div className="main__examples__item">
      <div className="main__examples__item__description">
        <p className="main__examples__item__description__title purple-text">
          Featured Project
        </p>
        <p className="main__examples__item__description__subtitle">
          Example project
        </p>
        <p className="main__examples__item__description__more-text">
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </p>
        <div className="main__examples__item__description__clicks-container">
          <img
            src="./assets/click.png"
            alt="click"
            className="main__examples__item__description__clicks-container__item"
          />
          <img
            src="./assets/click.png"
            alt="click"
            className="main__examples__item__description__clicks-container__item"
          />
        </div>
      </div>
      <img
        src="./assets/project.png"
        alt="project"
        className="main__examples__item__prewiev"
      />
    </div>
  );
}
