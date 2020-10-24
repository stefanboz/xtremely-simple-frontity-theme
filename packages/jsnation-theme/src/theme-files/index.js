import React from "react";
import { connect, Global, css, styled, Head } from "frontity";

import Link from "./link";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Header = styled.header`
  background-color: #eee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${(props) => (props.isPostType ? "lightseagreen" : "maroon")};
`;

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`;

const Button = styled.button`
  width: 92px;
  margin: 1em 0 0;
  padding: 0.5em;
  background: white;
  border: 1px solid #aaa;
  color: #888;

  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled.nav`
  display: flex;
  margin-top: 1em;

  & > div {
    margin-right: 1em;
  }
`;

const Main = styled.main`
  max-width: 800px;
  padding 1em;
  margin: auto;

  img {
    max-width: 100%;
  }

  h2 {
    margin: 0.5em;
  }

  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
`;

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          html {
            font-family: sans-serif;
          }
        `}
      />
      <Head>
        <title>Custom Frontity Theme</title>
        <meta name="author" content="Stefan Bozic" />
      </Head>
      <Header isPostType={data.isPostType}>
        <HeaderContent>
          <h1>Custom Frontity Theme</h1>
          {state.theme.isMenuOpen ? (
            <>
              <Button onClick={actions.theme.toggleMenu}>Hide Menu</Button>
              <Menu>
                <Link href="/">Home</Link>
                <Link href="/page/2">More Posts</Link>
                <Link href="/lorem-ipsum">Lorem Ipsum</Link>
              </Menu>
            </>
          ) : (
            <Button onClick={actions.theme.toggleMenu}>Show Menu</Button>
          )}
        </HeaderContent>
      </Header>

      <Main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Page />}
      </Main>
    </>
  );
};

export default connect(Root);
