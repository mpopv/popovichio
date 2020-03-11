import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import styled from 'styled-components';
import { copyToClipboard } from '../utils/copy-to-clipboard';

const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 10px 0;
  padding: 10px;
  overflow-x: auto;
  & .token-lline {
    line-height: 1.3em;
    height: 1.3em;
  }
  font-family: monospace;
  font-size: 13px;
  font-weight: 500;
`;

const LineNo = styled.span`
  display: none;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 3px;
  margin: 0.25em;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  &:focus {
    opacity: 1;
    border-color: skyblue;
  }
`;

const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <LiveEditor />
        <LiveError />
        <div style={{ border: `2px solid #041623`, padding: `20px 25px` }}>
          <LivePreview />
        </div>
      </LiveProvider>
    );
  }

  const handleClick = () => {
    copyToClipboard(codeString);
  };

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default Code;
