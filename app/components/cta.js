import React from "react";
import styled from 'styled-components';
import commonStyles from "../common-styles";
import Btn from "./btn";
import { AccentText } from "../components-with-styles";

export default function Cta(props) {
  const { text, btnText, gradientColor } = props;

  const CtaWrap = styled.div`
    border-radius: ${commonStyles.design.borderRadius};
    padding: 30px 5px;
    max-width: 840px;

    @media (min-width: ${commonStyles.breakpoints.sm}px) {
      padding: 30px;
    }

    @media (min-width: ${commonStyles.breakpoints.lg}px) {
      padding: 40px 60px;
    }
  `;

  return (
    <CtaWrap className={`mx-auto bg-gradient--${gradientColor}`}>
      <AccentText className="text-stroke">
        { text }
      </AccentText>
      <div className="pt-4 text-center">
        <iframe
          src="https://ipfs.thirdwebcdn.com/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0xE4E9127f70c731cfF4eAb1507F6fb5e6124113e9&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%7D"
          width="600px"
          height="600px"
          style={{ maxWidth: '100%' }}
          >
        </iframe>
      </div>
    </CtaWrap>
  )
}