import React from "react";
import { ACCENT } from "../../theme";
import BodyText from "../../components/BodyText";
import Item from "../../components/Item";

const HomeSection = ({ items, category, handleOnClick, ...props }) => {
  const icon = () => {
    if (category === "Featured Articles") {
      return (
        <svg
          fill={ACCENT}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          x="0"
          y="0"
          enableBackground="new 0 0 485.219 485.22"
          version="1.1"
          viewBox="0 0 485.219 485.22"
          xmlSpace="preserve"
        >
          <path d="M467.476 146.438l-21.445 21.455L317.35 39.23l21.445-21.457c23.689-23.692 62.104-23.692 85.795 0l42.886 42.897c23.657 23.679 23.657 62.078 0 85.768zm-300.243 257.31c-5.922 5.922-5.922 15.513 0 21.436 5.925 5.955 15.521 5.955 21.443 0L424.59 189.335l-21.469-21.457-235.888 235.87zM60 296.54c-5.925 5.927-5.925 15.514 0 21.44 5.922 5.923 15.518 5.923 21.443 0L317.35 82.113 295.914 60.67 60 296.54zm278.767-193L102.881 339.421c-11.845 11.822-11.815 31.041 0 42.886 11.85 11.846 31.038 11.901 42.914-.032l235.886-235.837-42.914-42.898zM145.734 446.572c-7.253-7.262-10.749-16.465-12.05-25.948-3.083.476-6.188.919-9.36.919-16.202 0-31.419-6.333-42.881-17.795-11.462-11.491-17.77-26.687-17.77-42.887 0-2.954.443-5.833.859-8.703-9.803-1.335-18.864-5.629-25.972-12.737-.682-.677-.917-1.596-1.538-2.338L0 485.216l147.748-36.986c-.651-.593-1.388-1.037-2.014-1.658z" />
        </svg>
      );
    } else if (category === "Recent Projects") {
      return (
        <svg
          fill={ACCENT}
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
      );
    }
  };
  return (
    <>
      {items && items.length > 0 ? (
        <div {...props}>
          <div
            css={`
              display: flex;
              align-items: center;
              padding: 1.5rem 0;
              padding-left: 1rem;
            `}
          >
            <div
              css={`
                width: 25px;
                height: 25px;
                @media (max-width: 767px) {
                  height: 20px;
                  width: 20px;
                }
              `}
            >
              {icon()}
            </div>
            <BodyText
              sizer={1.7}
              tag="h2"
              altText={true}
              style={{
                textTransform: "uppercase",
                margin: 0,
                marginLeft: "1rem"
              }}
            >
              {category}
            </BodyText>
          </div>
          {items && items.length > 0
            ? items.map((item, i) => SectionItem(item, i, handleOnClick))
            : null}
        </div>
      ) : null}
    </>
  );
};

const SectionItem = (item, i, onClick) => {
  return <Item  handleOnClick={() => onClick(item)} key={i} title={item.title} subtitle={item.subtext} />;
};

export default HomeSection;
