"use client";
import "../modo.css";

export default function ModoUI() {
  return (
    <section className="case-ui-section" aria-labelledby="ui-heading-modo">
      <div className="case-ui-heading">
        <h3 id="ui-heading-modo">From curious to creative.</h3>
        <p>Three moments in one considered journey: discover a workshop, explore the details, and make it a date.</p>
      </div>
      <div className="modo-board" tabIndex="0" role="img" aria-label="Three flat Modo interface concepts: workshop discovery, clay workshop details, and a booking summary">
        <div className="modo-screens" aria-hidden="true">
          <div className="modo-screen">
            <div className="modo-top"><strong>modo</strong><span>01 / Discover</span></div>
            <h4>Make<br />something new.</h4>
            <div className="modo-search">Find your next workshop</div>
            <div className="modo-chips"><span>For you</span><span>Clay</span><span>Print</span></div>
            <div className="modo-feature"><span>START WITH YOUR HANDS</span><strong>Clay<br />studio.</strong><p>A little time to make.</p><span>24 OCT · STOCKHOLM</span></div>
            <div className="modo-list"><strong>Clay studio</strong><span>Beginner friendly · 2 hours</span><b>650 kr</b></div>
            <div className="modo-bottom"><strong>Discover</strong><span>Saved</span><span>Bookings</span></div>
          </div>
          <div className="modo-screen">
            <div className="modo-top"><strong>modo</strong><span>02 / Explore</span></div>
            <p className="modo-kicker">SOMETHING JUST FOR YOU</p>
            <h4>A slower<br />Saturday.</h4>
            <p className="modo-description">Step away from the screen. Shape a bowl, learn the basics, and enjoy making something by hand.</p>
            <div className="modo-details"><div><span>When</span><strong>Saturday, 24 October<br />10:00–12:00</strong></div><div><span>Where</span><strong>Clay studio, Stockholm</strong></div><div><span>Experience</span><strong>Come as you are. All levels.</strong></div></div>
            <div className="modo-note">Materials, tools, and a little guidance.<br />Everything you need is included.</div>
            <div className="modo-price"><strong>650 kr <small>/ person</small></strong></div>
            <span className="modo-cta">Book a workshop</span>
          </div>
          <div className="modo-screen">
            <div className="modo-top"><strong>modo</strong><span>03 / Book</span></div>
            <p className="modo-kicker">A LITTLE TIME FOR YOURSELF</p>
            <h4>Make it<br />a date.</h4>
            <div className="modo-booking"><span>YOUR WORKSHOP</span><strong>Clay studio</strong><p>Saturday, 24 October<br />10:00–12:00 · Stockholm</p></div>
            <div className="modo-summary"><div><span>Participants</span><strong>1 person</strong></div><div><span>Workshop</span><strong>650 kr</strong></div><div><span>Materials</span><strong>Included</strong></div><div className="modo-total"><strong>Total</strong><strong>650 kr</strong></div></div>
            <p className="modo-description">A confirmation with everything you need will arrive by email.</p>
            <span className="modo-cta">Continue to payment</span>
          </div>
        </div>
      </div>
      <div className="ui-caption"><span>Discovery. Details. A clear next step.</span><span>Interface concept</span></div>
    </section>
  );
}
