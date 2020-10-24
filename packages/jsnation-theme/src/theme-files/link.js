import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`
  color: steelblue;
  text-decoration: none;
`;

const Link = ({ href, actions, children }) => {
  return (
    <div>
      <Anchor
        href={href}
        onClick={(event) => {
          event.preventDefault();
          actions.router.set(href);
        }}
      >
        {children}
      </Anchor>
    </div>
  );
};

export default connect(Link);
