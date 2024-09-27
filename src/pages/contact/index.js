import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_en";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_en";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    title: "",
    message: "",
    email: "",
    guestName: "",
    phone: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.email || !formData.guestName || !formData.message) {
      setFormdata({
        ...formData,
        show: true,
        alertmessage: "Please fill all required fields!",
        variant: "danger",
      });
      return;
    }

    setFormdata({ ...formData, loading: true });

    const apiData = {
      title: formData.title,
      guestName: formData.guestName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await fetch("https://8dkwpnuz20.execute-api.us-east-2.amazonaws.com/prod/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      if (response.ok) {
        setFormdata({
          ...formData,
          loading: false,
          alertmessage: "SUCCESS! Thank you for your message.",
          variant: "success",
          show: true,
        });
      } else {
        throw new Error("Failed to submit the form.");
      }
    } catch (error) {
      setFormdata({
        ...formData,
        loading: false,
        alertmessage: `Failed to send! ${error.message}`,
        variant: "danger",
        show: true,
      });
      document.getElementsByClassName("co_alert")[0].scrollIntoView();
    }
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"}`}
              onClose={() => setFormdata({ ...formData, show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              {contactConfig.YOUR_FONE && (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="guestName"
                    name="guestName"
                    placeholder="Name *"
                    value={formData.guestName || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email *"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone (Optional)"
                    value={formData.phone || ""}
                    type="tel"
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Message Title *"
                    value={formData.title || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Message *"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit" disabled={formData.loading}>
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
