import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import HeroFull from "../components/sections/HeroFull";
import Team from "../components/sections/Team";
import GenericSection from "../components/sections/GenericSection";
import Roadmap from "../components/sections/Roadmap";
import Cta from "../components/sections/Cta";
// import some required elements
import Image from "../components/elements/Image";
import Input from "../components/elements/Input";
import ButtonGroup from "../components/elements/ButtonGroup";
import Button from "../components/elements/Button";
import Modal from "../components/elements/Modal";
import Accordion from "../components/elements/Accordion";
import AccordionItem from "../components/elements/AccordionItem";

class Secondary extends React.Component {
  state = {
    demoModalActive: false,
  };

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  };

  render() {
    const genericSection01Header = {
      title: "Buttons - Lorem ipsum is placeholder text commonly used.",
    };

    const genericSection02Header = {
      title: "Sign up to our mailing list",
    };

    const genericSection03Header = {
      title: "Modal - Lorem ipsum is placeholder text commonly used.",
    };

    const genericSection04Header = {
      title: "Frequently Asked Questions (FAQs)",
    };

    return (
      <React.Fragment>
        {/* <HeroFull className="illustration-section-02" /> */}
        <Team className="illustration-section-04" />
        {/* 
        <GenericSection topDivider>
          <div className="container-xs">
            <h2 className="mt-0">
              Lorem ipsum is placeholder text commonly used in the graphic.
            </h2>
            <p>
              Lorem ipsum dolor sit amet,{" "}
              <a href="#0">consectetur adipiscing elit</a>, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <figure>
              <Image
                className="image-larger"
                src={require("./../assets/images/image-placeholder.svg")}
                alt="Placeholder"
                width={712}
                height={400}
              />
              <figcaption className="text-color-low">
                A super-nice image{" "}
                <span role="img" aria-label="smile">
                  😀
                </span>
              </figcaption>
            </figure>
            <h4>Flexibility</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </GenericSection> */}

        {/* <GenericSection topDivider className="center-content">
          <div className="container-xs">
            <SectionHeader
              data={genericSection01Header}
              className="center-content"
            />
            <ButtonGroup>
              <Button color="primary" wideMobile>
                Get started
              </Button>
              <Button color="secondary" wideMobile>
                Get started
              </Button>
              <Button color="dark" wideMobile>
                Get started
              </Button>
            </ButtonGroup>
          </div>
        </GenericSection> */}

        {/* <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader
              data={genericSection02Header}
              className="center-content"
            />
            <form style={formStyle}>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden
                >
                  <Button color="primary">Get the latest updates</Button>
                </Input>
              </div> */}
              {/* <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden
                  status="error"
                  hint="Something is wrong."
                >
                  <Button color="primary">Early access</Button>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden
                  status="success"
                  hint="You've done it."
                >
                  <Button color="primary">Early access</Button>
                </Input>
              </div> */}
            {/* </form>
          </div>
        </GenericSection> */}

        {/* <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader
              data={genericSection03Header}
              className="center-content"
            />
            <div className="center-content">
              <Button
                color="secondary"
                aria-controls="demo-modal"
                onClick={this.openModal}
              >
                Open modal
              </Button>
            </div>
            <Modal
              id="demo-modal"
              show={this.state.demoModalActive}
              handleClose={this.closeModal}
            >
              <div className="center-content">
                <Image
                  className="mb-16"
                  src={require("./../assets/images/abstract-icon.svg")}
                  alt="Diamond"
                  width={53}
                  height={56}
                />
                <h3 className="mt-0 mb-12">Join our newsletter</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <Input
                type="email"
                label="This is a label"
                placeholder="Your best email.."
                formGroup="desktop"
                labelHidden
              >
                <Button color="primary">Early access</Button>
              </Input>
              <div className="center-content mt-24">
                <a
                  className="func-link text-xxs fw-500 tt-u"
                  aria-label="close"
                  href="#0"
                  onClick={this.closeModal}
                >
                  No thanks!
                </a>
                ``
              </div>
            </Modal>
          </div>
        </GenericSection> */}

        <GenericSection topDivider className="illustration-section-06" id="faqs">
          <div className="container-xs">
            <SectionHeader
              data={genericSection04Header}
              className="center-content"
            />
            <Accordion>
              <AccordionItem title="When are you launching?">
                We are in active development. We will be launching a testent
                version early Q4. After this launch we will incorporate the
                feedback gathered, and launch a mainnet version later in 2020.
                Read more about our <a href="https://medium.com/goodghosting/confession-time-whats-next-f5ac52aa517d" target="_blank" rel="noopener"> development plans in this blog post.</a>
              </AccordionItem>
              <AccordionItem
                title="How are you getting such high interest rates?"
                active
              >
                <span>
                  We deposit your principal into two decentralized finance
                  (DeFi) services (
                </span>
                <a
                  href="https://aave.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AAVE
                </a>
                <span> and </span>
                <a
                  href="https://yearn.finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yearn Finance
                </a>
                <span>
                  ). Both use non-custodial borrowing and lending platforms that
                  run on the Ethereum blockchain. This currently generates
                  higher interest rates than your bank. Learn more here. Please
                  note past interest rates returns does not indicate future
                  returns.
                </span>
              </AccordionItem>
              <AccordionItem title="Which coins do you support?">
                <span>We currently support </span>
                <a
                  href="https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/dai"
                  target="_blank"
                >
                  DAI
                </a>
                {/* <span> and </span>
                <a href="https://www.circle.com/en/usdc" target="_blank"  rel="noopener noreferrer">
                  USDC
                </a> */}
                <span>
                  , however we are looking at adding more tokens. If there is a
                  particular token you would like please let us know on our
                  discord.
                </span>
              </AccordionItem>
              <AccordionItem title="Is the annual percentage yield (APY) guaranteed?">
                No, the minimal APY that is indicated is an estimation based on
                historical data. Past performance is no guarantee of future
                results. Actual APY will fluctuate based on supply and demand of
                the underlying assets, as well as how many people complete the
                game.
              </AccordionItem>
              <AccordionItem title="Which DeFi platforms are you using?">
                <span>We currently support </span>
                <a
                  href="https://aave.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AAVE
                </a>
                <span> and </span>
                <a
                  href="https://yearn.finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yearn.finance
                </a>
                <span>
                  . We are researching adding alternative platforms. Let us know
                  if there is one you are looking for. We also use Uniswap to
                  convert your stable coins to ETH if you choose to do so.
                </span>
              </AccordionItem>
              <AccordionItem title="Is my money safe?">
                As with all DeFi products there is an inherent risk. Although we
                plug into audited platforms, our smart contracts are not
                audited. Please do not add more money than you can afford to
                lose.
              </AccordionItem>
              <AccordionItem title="If I add a portion of ETH to my regular savings, how is the interest calculated?">
                It’s not. Any ETH portion is completely standalone to the rest
                of the game logic, it is just an option to add a regular
                contribution (e.g. dollar-cost average into ETH). You can
                withdraw this at any point without affecting you capability to
                collect interest.
              </AccordionItem>
              <AccordionItem title="What about gas costs?">
                We know Ethereum gas costs are high, so we are sponsoring our
                users transaction fees for their first complete saving game. In
                the future, we will be using layer 2 solutions to reduce our gas
                costs.
              </AccordionItem>
              <AccordionItem title="How do you make money?">
                Currently we are a free service, however in the future we will
                likely charge a small transaction fee to fund the project.
              </AccordionItem>
            </Accordion>
          </div>
        </GenericSection>

        <Roadmap topDivider />
        <Cta topDivider bottomDivider split className="reveal-from-top" />
      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: "420px",
  margin: "0 auto",
};

export default Secondary;
