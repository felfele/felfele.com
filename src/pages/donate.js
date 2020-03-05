import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { TopPart } from '../components/TopPart';
import { BottomPart } from '../components/BottomPart';
import { Row } from '../components/Row';
import { SectionSeparator } from '../components/Section';

import { bankingData, ethereumData } from '../data/donate';

import ColorFacesIllustration from '../assets/color-faces-illustration.svg'

const DonateInfo = ({title, data}) => (
    <div
        style={{
            flexDirection: 'column',
        }}
    >
        <h3 style={{
            fontFamily: 'Jost',
            fontSize: 21,
            marginBottom: 0,
        }}>
            {title}
        </h3>
        <br />
        {Object.keys(data).map(key => {
            if (data[key]) {
                return (
                    <p
                        key={key}
                        style={{
                            fontSize: 14,
                            margin: 0,
                            wordBreak: 'break-word',
                            paddingBottom: 10,
                        }}
                    >
                        <b>{key}: </b>
                        <br/>
                        {data[key]}
                    </p>
                );
            }
        })}
    </div>
)

export const Donate = ({data}) => (
    <Fragment>
        <TopPart
            icon={<img src={ColorFacesIllustration} />}
            pageTitle='Donate'
            title='MAKE A DONATION'
            subTitle='We’ve been lucky enough to get this far with the help of of friends, and by investing our own resources. Boost your karma.'
        />
        <BottomPart>
            <Row>
                <DonateInfo
                    title='BANK TRANSFER'
                    data={bankingData}
                />
                <SectionSeparator/>
                <DonateInfo
                    title='ETHEREUM TRANSACTION'
                    data={ethereumData}
                />
            </Row>
        </BottomPart>
    </Fragment>
)

export default Donate;
