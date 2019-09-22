import React from "react";
import BodyText from "./BodyText";
import { ACCENT } from "../theme";
import SectionDivider from "../pages/Home/SectionDivider";
import SummaryCard from "./SummaryCard";
import Footer from "./Footer";
import Item from "./Item";

const ItemsList = ({ title, subtext, items, activeTab, handleNavigation }) => {
  return (
    <div>
      <BodyText
        sizer={4}
        tag="h1"
        altText={false}
        color={ACCENT}
        style={{
          fontWeight: 700,
          textAlign: "left",
          textTransform: "uppercase",
          margin: 0
        }}
      >
        {title}
      </BodyText>
      <BodyText
        sizer={1.25}
        tag="p"
        altText={false}
        color={ACCENT}
        style={{
          fontWeight: 700,
          textAlign: "left",
          margin: 0,
          marginBottom: "2rem"
        }}
      >
        {subtext}
      </BodyText>
      <SectionDivider />
      <div
        css={`
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          margin-top: 2rem;
          padding-left: 1rem;
        `}
      >
        <div
          css={`
            width: 25px;
            height: 25px;
            display: flex;
            @media (max-width: 767px) {
              height: 22px;
              width: 22px;
            }
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 512 512"
          >
            <path d="M256 92.3c-74.2 0-127.8 55.3-136.3 114.7-5.3 39.6 7.5 78.2 34.1 107.4 23.4 25 36.2 58.4 36.2 92.8l-.1 54.2c0 21.9 18.1 39.6 40.5 39.6h52.2c22.4 0 40.5-17.7 40.5-39.6l.1-54.2c0-35.4 11.7-67.8 34.1-90.7 24.5-25 37.3-57.3 37.3-90.7-.1-74.1-63-133.5-138.6-133.5zm46.8 369.1c0 10.4-8.5 18.8-19.2 18.8h-52.2c-10.7 0-19.2-8.3-19.2-18.8v-24h90.5v24zm39.6-159.5c-26.6 27.1-40.5 64.6-40.5 105.3v9.4h-90.5v-9.4c0-38.6-16-77.1-42.6-106.3-23.4-25-33-57.3-28.8-90.7 7.5-50 54-97 116.1-97 65 0 117.2 51.1 117.2 112.6 0 28.1-10.7 55.2-30.9 76.1z" />
            <path d="M245.3 11H266.6V61H245.3z" />
            <path d="M385.1 107.4L400 122.3 436.5 87.2 421.5 72.3z" />
            <path d="M448.8 236.2H501V257.09999999999997H448.8z" />
            <path d="M11 236.2H63.2V257.09999999999997H11z" />
            <path d="M90.1 72.2L75.1 87.1 111.6 122.2 126.5 107.3z" />
          </svg>
        </div>
        <BodyText
          sizer={1.5}
          tag="p"
          altText={true}
          color={ACCENT}
          style={{
            fontWeight: 700,
            textAlign: "center",
            margin: 0,
            textTransform: "uppercase",
            marginLeft: "1.25rem"
          }}
        >
          {items.length} {title}
        </BodyText>
      </div>
      <div
        css={`
          display: flex;
          flex-direction: column;
        `}
      >
        {items.map(item => (
          <Item title={item.title} subtitle={item.subtext} />
        ))}
      </div>
      <SectionDivider />
      <SummaryCard />
      <Footer activeItem={activeTab} handleNavigation={handleNavigation} />
    </div>
  );
};

export default ItemsList;
