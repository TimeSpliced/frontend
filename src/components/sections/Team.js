import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Team extends React.Component {

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
      ...props
    } = this.props;

    const outerClasses = classNames(
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Meet the team',
      paragraph: 'We are a team of passionate builders, traders and occassional savers.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container" id="team">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-top" />
            <div className={tilesClasses}>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div className="team-item-image mb-24 illustration-element-03">
                    <a href="https://www.linkedin.com/in/rachblondon/" target="_blank" rel="noopener">
                      <Image
                        src={require('./../../assets/images/rachel.jpeg')}
                        alt="Team member 01"
                        width={180}
                        height={180} />
                    </a>
                    </div>
                  </div>
                  <div className="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                    <h5 className="team-item-name mt-0 mb-4">
                      Rachel Black
                    </h5>
                    <div className="team-item-role text-xxs tt-u fw-500 text-color-primary mb-8 sans_serif">
                      CEO | Frontend dev
                    </div>
                    <p className="m-0 text-sm">
                    Rachel is an experienced frontend developer. She also worked in developer relations for a number of blockchain projects, including 3Box and has most recently joined Twilio. She is passionate about building products and community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div className="team-item-image mb-24 illustration-element-04">
                    <a href="https://www.linkedin.com/in/giel-detienne-8a792094/" target="_blank" rel="noopener">
                      <Image
                        src={require('./../../assets/images/giel.jpg')}
                        alt="Team member 02"
                        width={180}
                        height={180} />
                    </a>
                    </div>
                  </div>
                  <div className="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                    <h5 className="team-item-name mt-0 mb-4">
                    Giel Detienne
                    </h5>
                    <div className="team-item-role text-xxs tt-u fw-500 text-color-primary mb-8 sans_serif">
                      COO | Crypto Economics
                    </div>
                    <p className="m-0 text-sm">
                    Heavy DeFi user and professional blockchain consultant. Experienced in digital asset management, yield optimization and research.<br/> Molecular scientist by training (PhD in Biotechnology). Member of the Melon Council DAO.
                    </p>
                  </div>
                </div>
              </div>


              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div className="team-item-image mb-24 illustration-element-06">
                    <a href="https://www.linkedin.com/in/babyjessiparker/" target="_blank" rel="noopener">
                      <Image
                        src={require('./../../assets/images/jessi.jpg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </a>
                    </div>
                  </div>
                  <div className="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                    <h5 className="team-item-name mt-0 mb-4">
                    Baby Jessi Parker
                    </h5>
                    <div className="team-item-role text-xxs tt-u fw-500 text-color-primary mb-8 sans_serif">
                      UX Designer | Community
                    </div>
                    <p className="m-0 text-sm">
                    UX/UI designer with a background in sales, customer relations and education. Interested in DeFi and becoming more involved within the blockchain ecosystem. Utilizes design thinking to create beautiful and immersive experiences for users.</p>
                  </div>
                </div>
              </div>

              {/* <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div className="team-item-image mb-24 illustration-element-07">
                      <Image
                        src={require('./../../assets/images/team-member-05.jpg')}
                        alt="Team member 05"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                    <h5 className="team-item-name mt-0 mb-4">
                      Clifford Kennedy
                    </h5>
                    <div className="team-item-role text-xxs tt-u fw-500 text-color-primary mb-8">
                      CEO & Co-Founder
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div className="team-item-image mb-24 illustration-element-03">
                      <Image
                        src={require('./../../assets/images/team-member-06.jpg')}
                        alt="Team member 06"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                    <h5 className="team-item-name mt-0 mb-4">
                      Clifford Kennedy
                    </h5>
                    <div className="team-item-role text-xxs tt-u fw-500 text-color-primary mb-8">
                      CEO & Co-Founder
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>
    );
  }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
