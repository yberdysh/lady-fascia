import './index.scss';
import ladyFascia from '../../assets/lady-fascia.png';
import underConstruction from '../../assets/under-construction.png';

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-content__construction">
          <div className="home-content__construction__header">
            <img
              className="home-content__construction__image"
              src={ladyFascia}
              alt="lady fascia"
            />
            <h1 className="home-content__construction__text">
              Dearest reader-- word has it that Lady Fascia toils with
              unwavering dedication, ensuring that this most esteemed website is
              crafted to perfection. One can only anticipate the grand reveal
              with bated breath.
            </h1>
          </div>
          <img
            src={underConstruction}
            alt="under construction"
            className="home-content__construction__construction-img"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
