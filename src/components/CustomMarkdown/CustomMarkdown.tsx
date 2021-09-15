import { FC } from 'react'
import { Options, default as Markdown } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const components = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        showLineNumbers
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
}

export const CustomMarkdown: FC<Options> = ({ children, ...rest }) => {
  return (
    <Markdown {...rest} components={components}>
      {children}
    </Markdown>
  )
}
