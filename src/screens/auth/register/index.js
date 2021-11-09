import React, { Fragment } from "react";
import Header from "../../../components/header";
import { Column, Section, Title, Container, Card } from "rbx";
import logoImage from "../../../assets/images/logo.png";
import "../../../styles/auth.scss";

const RegisterScreen = () => (
  <Fragment>
    <Header />
    <Section size="medium" className="auth">
      <Container>
        <Column.Group centered>
          <Column size={3}>
            <Card>
              <Card.Content>
                <Section>
                  <Column.Group>
                    <Column size={12}>
                      <img src={logoImage} />
                    </Column>
                  </Column.Group>
                  <Column.Group>
                    <Column size={12}>
                      <Title size={6} class="has-text-grey has-text-centered">
                        Your notes on the cloud
                      </Title>
                    </Column>
                  </Column.Group>
                </Section>

              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
);

export default RegisterScreen;