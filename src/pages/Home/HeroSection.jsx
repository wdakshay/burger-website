import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg={7} className="md-5 mb-lg-0">
              <div className="position-relative">
                <img src={Banner} alt="" className="img-fluid" />
                <div className="price_badge">
                  <div className="badge-text">
                    <h4 className="h4_xs">Only</h4>
                    <h4 className="h3_lg">$6.99</h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="hero_text text-center">
                <h1 className="text-white">New Burger</h1>
                <h2 className="text-white">With Onion</h2>
                <p className="text-white pb-4 pt-2">
                  Feugiat primis ligula risus auctor laoreet augue egestas
                  mauris viverra tortor in iaculis pretium at magna mauris ipsum
                  primis rhoncus feugiat
                </p>
                <Link to={"/"} className="btn order_now">
                  Order Now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
