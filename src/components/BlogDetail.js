import React from 'react'
import Markdown from 'react-markdown'
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/styles/hljs/docco'; 

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

SyntaxHighlighter.registerLanguage('javascript', js);

class BlogDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editorValue: this.props.editorValue,
            contentValList: [],
            codeValList: [],
            detailDom: ''
        }
    }

    /**
     * @description [mounted]
     */
    componentDidMount() {
        this.sliceEditorVal(this.state.editorValue)
    }
    
    /**
     * @description [unmounted]
     */
    componentWillUnmount() {
  
    }

    /**
     * 
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    componentWillUpdate(nextProps, nextState) {
        
    }

    /**
     * 
     * @param {*} prevProps 
     * @param {*} prevState 
     */
    componentDidUpdate(prevProps, prevState) {
        
    }

    /**
     * 
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.hasOwnProperty('editorValue') && nextProps.editorValue !== this.state.editorValue) {
            this.setState({editorValue: nextProps.editorValue})
            this.sliceEditorVal(nextProps.editorValue)
        }
    }

    sliceEditorVal(value) {
        this.setState({contentValList: value.split('```')});
        this.setState({codeValList: value.match(/```([\s\S]*?)```/gim)})

        this.setContentListDom(this.state.contentValList || [], this.state.codeValList || [])
    }

    setContentListDom(contentValList, codeValList) {
        console.log(codeValList)
        let detailDom = contentValList.map((itm, idx) => {
            debugger
            if (codeValList.indexOf(itm) > -1) {
                console.log(`${itm}: `, itm)
                return <SyntaxHighlighter language='javascript' style={docco} key={idx}>{codeValList[codeValList.indexOf(itm)]}</SyntaxHighlighter>
            } else {
                return <Markdown source={itm} key={idx} />
            }
        })
        this.setState({detailDom})
    }

    render() {
        return (
            <div className="blog-detail">
                {this.state.detailDom}
            </div>
        );
    }
    
}

export default BlogDetail
