"use client";
import ModoUI from "./ModoUI";

export default function CaseUI({ project }) {
  if (project === "modo") return <ModoUI />;
  if (project === "hemma")
    return (
      <section className="case-ui-section" aria-labelledby="ui-heading-hemma">
        <div className="case-ui-heading">
          <h3 id="ui-heading-hemma">Home, without the hard part.</h3>
          <p>
            A connected journey from finding a place to making the first
            introduction.
          </p>
        </div>
        <div
          className="ui-board ui-board-hemma"
          tabIndex="0"
          role="img"
          aria-label="Three flat Hemma app screens showing home discovery, property details, and a conversation"
        >
          <div className="ui-board-content" aria-hidden="true">
            <div className="hemma-screen-row">
              <div className="app-screen">
                <div className="app-screen-top">
                  <strong className="hemma-ui-brand">hemma</strong>
                  <span className="ui-avatar">AM</span>
                </div>
                <div className="app-screen-body">
                  <p className="ui-overline">A NEW CHAPTER STARTS HERE</p>
                  <h4>Find your place.</h4>
                  <div className="ui-search">
                    <svg viewBox="0 0 24 24">
                      <circle cx="10" cy="10" r="6" />
                      <path d="m15 15 5 5" />
                    </svg>
                    <span>Stockholm, Sweden</span>
                  </div>
                  <div className="ui-filter-row">
                    <span className="active">For you</span>
                    <span>Apartments</span>
                    <span>Houses</span>
                  </div>
                  <img
                    className="ui-property-photo"
                    src="/zenia/hemma-interior.webp"
                    alt=""
                    width="1448"
                    height="1086"
                  />
                  <div className="ui-property-summary">
                    <div>
                      <h5>Linnégatan 12</h5>
                      <p>Östermalm, Stockholm</p>
                    </div>
                    <span className="ui-heart">♡</span>
                  </div>
                  <div className="ui-property-features">
                    <span>2 rooms</span>
                    <span>54 m²</span>
                    <span>Furnished</span>
                  </div>
                  <strong className="ui-rent">
                    12 500 kr <small>/ month</small>
                  </strong>
                  <div className="ui-small-callout">
                    <span className="ui-small-icon">✓</span>
                    <div>
                      <strong>A little peace of mind.</strong>
                      <p>Verified homes. Clear agreements.</p>
                    </div>
                  </div>
                </div>
                <div className="app-bottom-nav">
                  <span className="selected">Discover</span>
                  <span>Saved</span>
                  <span>Messages</span>
                  <span>Profile</span>
                </div>
              </div>
              <div className="app-screen app-screen-detail">
                <div className="app-screen-top">
                  <span className="ui-back">‹</span>
                  <strong className="hemma-ui-brand">hemma</strong>
                  <span className="ui-heart">♡</span>
                </div>
                <img
                  className="ui-property-detail-photo"
                  src="/zenia/hemma-interior.webp"
                  alt=""
                  width="1448"
                  height="1086"
                />
                <div className="app-screen-body">
                  <p className="ui-overline">ÖSTERMALM, STOCKHOLM</p>
                  <h4>
                    Room for your
                    <br />
                    next chapter.
                  </h4>
                  <div className="ui-property-features">
                    <span>2 rooms</span>
                    <span>54 m²</span>
                    <span>From 1 Nov</span>
                  </div>
                  <p className="ui-description">
                    Morning light, room to breathe, and a neighbourhood to make
                    your own.
                  </p>
                  <div className="ui-host">
                    <span className="ui-avatar">SL</span>
                    <div>
                      <strong>Sofia L.</strong>
                      <p>Verified landlord</p>
                    </div>
                    <span className="ui-verified">✓</span>
                  </div>
                  <div className="ui-price-row">
                    <strong>
                      12 500 kr<small>per month</small>
                    </strong>
                    <span className="ui-faux-button">Get in touch</span>
                  </div>
                </div>
              </div>
              <div className="app-screen">
                <div className="app-screen-top">
                  <strong className="hemma-ui-brand">hemma</strong>
                  <span className="ui-avatar">AM</span>
                </div>
                <div className="app-screen-body">
                  <p className="ui-overline">A GOOD FIRST CONVERSATION</p>
                  <h4>Say hello.</h4>
                  <div className="ui-conversation-property">
                    <img
                      src="/zenia/hemma-interior.webp"
                      alt=""
                      width="1448"
                      height="1086"
                    />
                    <div>
                      <strong>Linnégatan 12</strong>
                      <p>2 rooms · 54 m²</p>
                    </div>
                  </div>
                  <div className="ui-chat-date">Today</div>
                  <div className="ui-chat-bubble outgoing">
                    Hi Sofia! Your apartment looks lovely. Is it possible to
                    arrange a viewing?
                  </div>
                  <div className="ui-chat-bubble incoming">
                    Hi Alex! Absolutely. Would Thursday afternoon work for you?
                  </div>
                  <div className="ui-chat-bubble outgoing short">
                    That sounds perfect. Thank you!
                  </div>
                  <div className="ui-chat-confirmation">
                    <span>✓</span>
                    <div>
                      <strong>You’re one step closer.</strong>
                      <p>Viewing · Thursday, 16:00</p>
                    </div>
                  </div>
                </div>
                <div className="ui-message-input">
                  <span>Write a message…</span>
                  <span className="ui-send">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui-caption">
          <span>Discover. Explore. Connect.</span>
          <span>Interface design</span>
        </div>
      </section>
    );
  // Shares the Relay dashboard layout; .shelfwise-ui recolours it.
  if (project === "shelfwise")
    return (
      <section className="case-ui-section" aria-labelledby="ui-heading-shelfwise">
        <div className="case-ui-heading">
          <h3 id="ui-heading-shelfwise">What’s low, what’s next.</h3>
          <p>
            One overview for the whole kitchen, from stock levels to the
            shopping list.
          </p>
        </div>
        <div
          className="ui-board ui-board-shelfwise"
          tabIndex="0"
          role="img"
          aria-label="Flat ShelfWise desktop dashboard showing stock levels, items running low, stock value and a ready shopping list"
        >
          <div className="ui-board-content" aria-hidden="true">
            <div className="desktop-screen relay-ui shelfwise-ui">
              <aside className="relay-sidebar">
                <strong className="relay-ui-brand">
                  Shelf<span>Wise</span>
                </strong>
                <div className="relay-ui-workspace">
                  <span>T</span>
                  <div>
                    <strong>Trattoria Nord</strong>
                    <small>2 locations</small>
                  </div>
                </div>
                <div className="relay-ui-nav">
                  <span className="active">
                    <i>◫</i> Overview
                  </span>
                  <span>
                    <i>□</i> Inventory
                  </span>
                  <span>
                    <i>◎</i> Recipes
                  </span>
                  <span>
                    <i>⌁</i> Suppliers
                  </span>
                  <span>
                    <i>▤</i> Shopping lists
                  </span>
                </div>
                <div className="relay-ui-user">
                  <span className="ui-avatar">LS</span>
                  <div>
                    <strong>Lina Svensson</strong>
                    <small>Head chef</small>
                  </div>
                </div>
              </aside>
              <div className="relay-main">
                <div className="relay-topbar">
                  <span>
                    Trattoria Nord / <strong>Overview</strong>
                  </span>
                  <div>
                    <span className="ui-notification">◌</span>
                    <span className="ui-avatar">LS</span>
                  </div>
                </div>
                <div className="relay-content">
                  <div className="relay-greeting">
                    <div>
                      <p className="ui-overline">TUESDAY, 13 OCTOBER</p>
                      <h4>Good morning, Lina.</h4>
                      <p>Here’s what the kitchen needs today.</p>
                    </div>
                    <span className="relay-period">This week⌄</span>
                  </div>
                  <div className="relay-metrics">
                    <div>
                      <span>Items tracked</span>
                      <strong>
                        248<small className="neutral">Live</small>
                      </strong>
                      <p>Across both locations</p>
                    </div>
                    <div>
                      <span>Running low</span>
                      <strong>
                        5<small>Reorder</small>
                      </strong>
                      <p>Added to your shopping list</p>
                    </div>
                    <div>
                      <span>Expiring soon</span>
                      <strong>
                        2<small>2 days</small>
                      </strong>
                      <p>Use first in today’s prep</p>
                    </div>
                  </div>
                  <div className="relay-dashboard-row">
                    <div className="relay-shipments">
                      <div className="ui-panel-heading">
                        <strong>Stock levels</strong>
                        <span>View all</span>
                      </div>
                      <div className="ui-shipment-table">
                        <div className="ui-table-head">
                          <span>Item</span>
                          <span>On hand</span>
                          <span>Status</span>
                        </div>
                        <div>
                          <strong>Tomatoes</strong>
                          <span>4 kg</span>
                          <em className="low">Low</em>
                        </div>
                        <div>
                          <strong>Mozzarella</strong>
                          <span>12 pcs</span>
                          <em>In stock</em>
                        </div>
                        <div>
                          <strong>Fresh basil</strong>
                          <span>3 bunches</span>
                          <em className="planned">Expiring</em>
                        </div>
                        <div>
                          <strong>Olive oil</strong>
                          <span>6 L</span>
                          <em>In stock</em>
                        </div>
                      </div>
                    </div>
                    <div className="relay-performance">
                      <div className="ui-panel-heading">
                        <strong>Stock value</strong>
                      </div>
                      <strong className="ui-performance-number">
                        38 400<span> kr</span>
                      </strong>
                      <p>Across both locations.</p>
                      <div className="ui-bar-chart">
                        <span style={{ "--bar": "70%" }}></span>
                        <span style={{ "--bar": "58%" }}></span>
                        <span style={{ "--bar": "64%" }}></span>
                        <span style={{ "--bar": "82%" }}></span>
                        <span style={{ "--bar": "60%" }}></span>
                        <span style={{ "--bar": "88%" }}></span>
                        <span style={{ "--bar": "76%" }}></span>
                      </div>
                      <div className="ui-chart-labels">
                        <span>Mon</span>
                        <span>Sun</span>
                      </div>
                    </div>
                  </div>
                  <div className="relay-bottom-note">
                    <span className="ui-verified">✓</span>
                    <div>
                      <strong>Your shopping list is ready.</strong>
                      <span>
                        Five items from three suppliers, grouped so ordering
                        takes minutes.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui-caption">
          <span>Stock control, without the spreadsheet.</span>
          <span>Interface design</span>
        </div>
      </section>
    );
  if (project === "relay")
    return (
      <section className="case-ui-section" aria-labelledby="ui-heading-relay">
        <div className="case-ui-heading">
          <h3 id="ui-heading-relay">Complex operations. A clear view.</h3>
          <p>
            A single workspace for the details, decisions, and deliveries that
            keep things moving.
          </p>
        </div>
        <div
          className="ui-board ui-board-relay"
          tabIndex="0"
          role="img"
          aria-label="Flat Relay desktop dashboard showing delivery metrics, shipments, and performance"
        >
          <div className="ui-board-content" aria-hidden="true">
            <div className="desktop-screen relay-ui">
              <aside className="relay-sidebar">
                <strong className="relay-ui-brand">
                  relay<span>●</span>
                </strong>
                <div className="relay-ui-workspace">
                  <span>R</span>
                  <div>
                    <strong>Relay workspace</strong>
                    <small>Operations team</small>
                  </div>
                </div>
                <div className="relay-ui-nav">
                  <span className="active">
                    <i>◫</i> Overview
                  </span>
                  <span>
                    <i>□</i> Shipments
                  </span>
                  <span>
                    <i>⌁</i> Routes
                  </span>
                  <span>
                    <i>◉</i> Fleet
                  </span>
                  <span>
                    <i>▥</i> Reports
                  </span>
                </div>
                <div className="relay-ui-user">
                  <span className="ui-avatar">AM</span>
                  <div>
                    <strong>Alex Morgan</strong>
                    <small>Workspace admin</small>
                  </div>
                </div>
              </aside>
              <div className="relay-main">
                <div className="relay-topbar">
                  <span>
                    Workspace / <strong>Overview</strong>
                  </span>
                  <div>
                    <span className="ui-notification">◌</span>
                    <span className="ui-avatar">AM</span>
                  </div>
                </div>
                <div className="relay-content">
                  <div className="relay-greeting">
                    <div>
                      <p className="ui-overline">MONDAY, 14 SEPTEMBER</p>
                      <h4>Good morning, Alex.</h4>
                      <p>Everything you need to keep today moving.</p>
                    </div>
                    <span className="relay-period">This week⌄</span>
                  </div>
                  <div className="relay-metrics">
                    <div>
                      <span>Total deliveries</span>
                      <strong>
                        24<small>+12%</small>
                      </strong>
                      <p>Across your network</p>
                    </div>
                    <div>
                      <span>On the move</span>
                      <strong>
                        18<small className="neutral">Live</small>
                      </strong>
                      <p>Moving right on schedule</p>
                    </div>
                    <div>
                      <span>Delivered</span>
                      <strong>
                        6<small>100%</small>
                      </strong>
                      <p>Completed on time today</p>
                    </div>
                  </div>
                  <div className="relay-dashboard-row">
                    <div className="relay-shipments">
                      <div className="ui-panel-heading">
                        <strong>Active shipments</strong>
                        <span>View all</span>
                      </div>
                      <div className="ui-shipment-table">
                        <div className="ui-table-head">
                          <span>Shipment</span>
                          <span>Destination</span>
                          <span>Status</span>
                        </div>
                        <div>
                          <strong>SE–2048</strong>
                          <span>Stockholm</span>
                          <em>On the move</em>
                        </div>
                        <div>
                          <strong>SE–2049</strong>
                          <span>Uppsala</span>
                          <em>On the move</em>
                        </div>
                        <div>
                          <strong>SE–2050</strong>
                          <span>Gothenburg</span>
                          <em className="delivered">Delivered</em>
                        </div>
                        <div>
                          <strong>SE–2051</strong>
                          <span>Malmö</span>
                          <em className="planned">Scheduled</em>
                        </div>
                      </div>
                    </div>
                    <div className="relay-performance">
                      <div className="ui-panel-heading">
                        <strong>On-time performance</strong>
                      </div>
                      <strong className="ui-performance-number">
                        98.4<span>%</span>
                      </strong>
                      <p>Keeping your promises.</p>
                      <div className="ui-bar-chart">
                        <span style={{ "--bar": "50%" }}></span>
                        <span style={{ "--bar": "65%" }}></span>
                        <span style={{ "--bar": "55%" }}></span>
                        <span style={{ "--bar": "80%" }}></span>
                        <span style={{ "--bar": "73%" }}></span>
                        <span style={{ "--bar": "92%" }}></span>
                        <span style={{ "--bar": "88%" }}></span>
                      </div>
                      <div className="ui-chart-labels">
                        <span>Mon</span>
                        <span>Sun</span>
                      </div>
                    </div>
                  </div>
                  <div className="relay-bottom-note">
                    <span className="ui-verified">✓</span>
                    <div>
                      <strong>Everything’s looking good.</strong>
                      <span>
                        Your network is up to date. No issues need your
                        attention.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui-caption">
          <span>A calmer way to keep things moving.</span>
          <span>Interface design</span>
        </div>
      </section>
    );
  if (project === "form")
    return (
      <section className="case-ui-section" aria-labelledby="ui-heading-form">
        <div className="case-ui-heading">
          <h3 id="ui-heading-form">Give good design a little space.</h3>
          <p>
            An online store that lets the materials, the craftsmanship, and the
            products speak.
          </p>
        </div>
        <div
          className="ui-board ui-board-form"
          tabIndex="0"
          role="img"
          aria-label="Flat Form furniture website with product photography and a shopping collection"
        >
          <div className="ui-board-content" aria-hidden="true">
            <div className="desktop-screen form-ui">
              <div className="form-ui-header">
                <strong className="form-ui-brand">form</strong>
                <div>
                  <span>Furniture</span>
                  <span>Lighting</span>
                  <span>Objects</span>
                  <span>Our story</span>
                </div>
                <span className="form-bag">Bag (0)</span>
              </div>
              <div className="form-ui-hero">
                <div>
                  <p className="ui-overline">LESS, BUT BETTER.</p>
                  <h4>
                    Room
                    <br />
                    to live.
                  </h4>
                  <p>
                    Considered furniture.
                    <br />
                    For the everyday moments.
                  </p>
                  <span className="form-ui-cta">Explore the collection</span>
                </div>
                <img
                  src="/zenia/form-chair.webp"
                  alt=""
                  width="1448"
                  height="1086"
                />
              </div>
              <div className="form-ui-editorial">
                <div>
                  <span className="ui-overline">MADE TO STAY</span>
                  <h5>
                    A quieter kind
                    <br />
                    of statement.
                  </h5>
                </div>
                <p>
                  Honest materials. Thoughtful details.
                  <br />
                  Pieces that feel at home, wherever life takes you.
                </p>
                <span>Discover our approach</span>
              </div>
              <div className="form-ui-product-strip">
                <img
                  src="/zenia/form-chair.webp"
                  alt=""
                  width="1448"
                  height="1086"
                />
                <div>
                  <span className="ui-overline">MEET THE COLLECTION</span>
                  <h5>The everyday chair.</h5>
                  <p>Natural oak. A softer place to land.</p>
                  <span>Explore seating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui-caption">
          <span>Considered design, from first look to final detail.</span>
          <span>Interface design</span>
        </div>
      </section>
    );
  return null;
}
