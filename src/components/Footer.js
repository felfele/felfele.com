import React, { Component } from 'react';
import { contactData } from './../data/contact';
import { Link } from 'gatsby';

export class Footer extends Component {
    render() {
        return (
            <div style={styles.rootContainer}>
                <div style={styles.sectionsContainer}>
                    <div style={styles.section}>
                        <div style={styles.sectionTitle}>Developers</div>
                        <a href='https://github.com/felfele' target='_new'>
                            Github
                        </a>
                        <a href='https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md' target='_new'>
                            Guidelines
                        </a>
                        <a href='https://gitter.im/felfele/purple-lounge' target='_new'>
                            Gitter
                        </a>
                    </div>
                    <div style={styles.section}>
                        <div style={styles.sectionTitle}>Contribute</div>
                        <Link to="/donate">
                            Donate
                        </Link>
                        <Link to="/volunteer">
                            Volunteer
                        </Link>
                        <a href='https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md' target='_new'>
                            Code of Conduct
                        </a>
                    </div>
                    <div style={styles.section}>
                        <div style={styles.sectionTitle}>Help</div>
                        <a href={'mailto:support@felfele.com'}>Support</a>
                        <a href={contactData.github} target='_new'>
                            File a Bug
                        </a>
                    </div>
                    <div style={styles.section}>
                        <div style={styles.sectionTitle}>Legal</div>
                        <Link to="/contact">
                            Contact
                        </Link>
                        <Link to="/records">
                            Public Records
                        </Link>
                        <Link to="/privacy-policy">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div>
                    Built with&nbsp;
                    <a href='https://gatsbyjs.org' target='_blank'>
                        GatsbyJS
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;

const styles = {
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: 2,
        color: 'gray',
        paddingTop: 30,
    },
    sectionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingBottom: 50,
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
    },
    sectionTitle: {
        paddingBottom: 5,
        fontWeight: 600,
    },
};
