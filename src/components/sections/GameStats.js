import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { displaySegment, weiToERC20 } from "./../../utils/utilities";
import web3 from "web3";
import dayjs from "dayjs";

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool,
  pricingSlider: PropTypes.bool,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false,
  pricingSlider: false,
};

class GameStats extends React.Component {
  handlePricingSwitch = (e) => {
    this.setState({ priceChangerValue: e.target.checked ? "1" : "0" });
  };

  handlePricingSlide = (e) => {
    this.setState({ priceChangerValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  };

  handleSliderValuePosition = (input) => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset =
      (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left =
      input.clientWidth * multiplier - thumbOffset + priceInputOffset + "px";
  };

  getPricingData = (values, set) => {
    return set !== undefined
      ? values[this.state.priceChangerValue][set]
      : values[this.state.priceChangerValue];
  };

  totalPoolAmount() {
    const BN = web3.utils.BN;
    let gamePrincipal = new BN(this.props.gameInfo.totalGamePrincipal);
    return web3.utils.fromWei(gamePrincipal);
  }

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      pricingSwitcher,
      pricingSlider,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "pricing section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "pricing-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
      title: props.isJoinable
        ? `Our Savings Pool closes ${dayjs().to(
            props.gameInfo.firstSegmentEnd
          )}`
        : "Our Savings Pool is live!",
      paragraph: props.isJoinable
        ? "👉 Make your first deposit by then!"
        : "👉 Don't forget to make your recurring deposits to stay alive!",
    };
    const numberOfPlayers = (status) => {
      const conditions = {
        dead: (player) =>
          parseInt(player.mostRecentSegmentPaid) <
          parseInt(props.gameInfo.currentSegment) - 2,
        alive: (player) =>
          parseInt(player.mostRecentSegmentPaid) >
          parseInt(props.gameInfo.currentSegment) - 2,
      };
      const deadPlayers = props.players.filter((player) =>
        conditions[status](player)
      );
      return deadPlayers.length;
    };

    const roundsLengthsSecs = props.gameInfo.segmentLengthInSecs;
    const numberOfPayableRounds = parseInt(props.gameInfo.lastSegment);
    const numberOfRounds = numberOfPayableRounds + 1;
    const gameLength = numberOfPayableRounds * roundsLengthsSecs;

    const gameData = [
      {
        label: "🕒 Game Duration",
        data: `${dayjs.duration(gameLength, "seconds").asDays()} days`,
      },
      {
        label: "🎯 Recurring Deposit",
        data: `${web3.utils.fromWei(
          this.props.gameInfo.rawSegmentPayment
        )} DAI every ${dayjs
          .duration(roundsLengthsSecs, "seconds")
          .asWeeks()} weeks`,
      },
      {
        label: "⏳ Current Round",
        data: !this.props.gameInfo.isGameCompleted
          ? `${displaySegment(
              this.props.gameInfo.currentSegment
            )} out of ${displaySegment(this.props.gameInfo.lastSegment - 1)}`
          : "Game Completed ✔️",
      },
      {
        label: "👻 Players Status",
        data: `${numberOfPlayers("alive")} Alive and ${numberOfPlayers(
          "dead"
        )} Dead`,
        //condition: !props.hidePlayersStatus,  //🚨 defaults to false so is not shown (see JoinableGame.js); not sure why you'd want to hide this?? because it is loading slowly?
      },
      {
        label: "🏦 Total Pool Funds",
        data: `${
          this.props.gameInfo &&
          weiToERC20(this.props.gameInfo.totalGamePrincipal)
        } DAI`,
      },
      {
        label: "💸 Total Pool Interest",
        data: `${
          this.props.gameInfo && weiToERC20(this.props.totalGameInterest)
        } DAI`, //🚨 would be nice if this can show more decimals!
      },
      {
        label: "💸 Pool APY",
        data: `${
          Math.round((this.props.gameInfo.poolAPY + Number.EPSILON) * 100) / 100
        }%`,
      },
    ];

    const valueStyle = {
      backgroundColor: "#F6F8FE",
      marginLeft: "18px",
      paddingLeft: "10px",
      paddingRight: "4px",
      borderRadius: "3px",
      fontFamily: "monospace",
      fontSize: "14pt",
    };
    return (
      <section className={outerClasses}>
        <div className="container">
          <div>
            <SectionHeader
              data={sectionHeader}
              className="center-content invert-color"
              tag="h3"
            />
            <div className={tilesClasses}>
              <div
                className="tiles-item reveal-from-top"
                style={{ opacity: "1", flexBasis: "500px", maxWidth: "500px" }}
              >
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div
                      className="pricing-item-header sans_serif"
                      style={{ textAlign: "left" }}
                    >
                      <h3 style={{ marginTop: "5px" }}>
                        Game Stats{" "}
                        <span role="img" aria-label="game emoji">
                          👾
                        </span>
                      </h3>
                      {gameData.map((item, i) => {
                        if (
                          item.hasOwnProperty("condition") &&
                          !item.condition
                        ) {
                          return null;
                        }
                        return (
                          <div key={i}>
                            <span
                              style={{ fontWeight: "600", fontSize: "0.85rem" }}
                            >
                              {item.label} : {"  "}
                            </span>
                            <span style={valueStyle}>{item.data}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

GameStats.propTypes = propTypes;
GameStats.defaultProps = defaultProps;

export default GameStats;
