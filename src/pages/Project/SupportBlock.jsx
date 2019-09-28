import React from "react";
import BodyText from "../../components/BodyText";
import { ACCENT, PRIMARY } from "../../theme";
import GithubButton from "./GithubButton";
import SectionDivider from "../Home/SectionDivider";
import Button from "./Button";

/**
 *   githubLink
 *   demoLink
 */

const SupportBlock = ({ githubLink, demoLink, handleNavigation }) => {
  return (
    <div>
      <div>
        <BodyText
          sizer={1.75}
          tag="p"
          altText={false}
          color={ACCENT}
          style={{
            fontWeight: 700,
            textAlign: "left",
            textTransform: "uppercase",
            margin: 0,
            marginBottom: "1rem",
            marginTop: "2rem"
          }}
        >
          Support
        </BodyText>
      </div>
      <div>
        <BodyText
          sizer={1.25}
          tag="span"
          altText={false}
          color={ACCENT}
          style={{
            fontWeight: 700,
            textAlign: "left",
            textTransform: "uppercase",
            margin: 0,
            paddingRight: ".5rem"
          }}
        >
          Bugs -
        </BodyText>
        <BodyText
          sizer={1.15}
          tag="span"
          altText={true}
          color={ACCENT}
          style={{
            fontWeight: 700,
            textAlign: "left",
            margin: 0
          }}
        >
          If you find bugs you can{" "}
          <a
            css={`
              text-transform: none;
              color: ${PRIMARY};
              text-decoration: none;
              transition: all 200ms ease-in-out;
              border-bottom: 0px solid transparent;
              &:hover {
                border-bottom: 1px solid ${PRIMARY};
              }
            `}
            href="mailto:rinciarijoc@gmail.com"
          >
            email me
          </a>{" "}
          or{" "}
          <a
            css={`
              text-transform: none;
              color: ${PRIMARY};
              text-decoration: none;
              transition: all 200ms ease-in-out;
              border-bottom: 0px solid transparent;
              &:hover {
                border-bottom: 1px solid ${PRIMARY};
              }
            `}
            href={`https://www.github.com/jonathanRinciari${githubLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            open an issue
          </a>{" "}
          on Github!
        </BodyText>
      </div>
      <div
        css={`
          margin-top: 1rem;
        `}
      >
        <BodyText
          sizer={1.25}
          tag="span"
          altText={false}
          color={ACCENT}
          style={{
            fontWeight: 700,
            textAlign: "left",
            textTransform: "uppercase",
            margin: 0,
            paddingRight: ".5rem"
          }}
        >
          Improve It -
        </BodyText>
        <BodyText
          sizer={1.15}
          tag="span"
          altText={true}
          color={ACCENT}
          style={{
            fontWeight: 700,
            textAlign: "left",
            margin: 0
          }}
        >
          Help to make it simpler, more semantic, and more stable. Even a
          spelling mistake helps a lot!
        </BodyText>
      </div>
      <div
        css={`
          margin-top: 1rem;
          margin-bottom: 4rem;
        `}
      >
        {demoLink ? (
          <>
            <BodyText
              sizer={1.15}
              tag="span"
              altText={false}
              color={PRIMARY}
              style={{
                fontWeight: 700,
                textAlign: "left",
                textTransform: "uppercase",
                margin: 0,
                paddingRight: ".5rem"
              }}
            >
              <a
                css={`
                  text-transform: none;
                  color: ${PRIMARY};
                  text-decoration: none;
                  transition: all 200ms ease-in-out;
                  border-bottom: 0px solid transparent;
                  &:hover {
                    border-bottom: 1px solid ${PRIMARY};
                  }
                `}
                href={`${demoLink}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Demo
              </a>
            </BodyText>
            <BodyText
              sizer={1.15}
              tag="span"
              altText={false}
              color={PRIMARY}
              style={{
                fontWeight: 700,
                textAlign: "left",
                textTransform: "uppercase",
                margin: 0,
                paddingRight: ".5rem"
              }}
            >
              |
            </BodyText>
          </>
        ) : null}
        <BodyText
          sizer={1.15}
          tag="span"
          altText={false}
          color={PRIMARY}
          style={{
            fontWeight: 700,
            textAlign: "left",
            textTransform: "uppercase",
            margin: 0,
            paddingRight: ".5rem"
          }}
        >
          <a
            css={`
              text-transform: none;
              color: ${PRIMARY};
              text-decoration: none;
              transition: all 200ms ease-in-out;
              border-bottom: 0px solid transparent;
              &:hover {
                border-bottom: 1px solid ${PRIMARY};
              }
            `}
            href={`https://www.github.com/jonathanRinciari${githubLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source on Github
          </a>
        </BodyText>
      </div>
      <div
        css={`
          margin-bottom: 2rem;
          display: flex;
          @media(max-width: 767px) {
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      >
        <GithubButton />
        <Button marginLeft={true} text={'More Projects...'} minWidth="120" maxWidth="170" handleOnClick={handleNavigation} />
      </div>
      <SectionDivider />
    </div>
  );
};

export default SupportBlock;
