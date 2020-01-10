import React from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2';

class BlogForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editorValue: this.props.editorValue,
            editorOptions: {
                mode: 'xml',
                theme: 'material',
                lineNumbers: true
            }
        }
    }

    /**
     * @description [mounted]
     */
    componentDidMount() {
        
    }
    
    /**
     * @description [unmounted]
     */
    componentWillUnmount() {
  
    }

    render() {
        return (
            <div className="blog-form">
                <CodeMirror
                    value={this.state.editorValue}
                    options={this.state.editorOptions}
                    onBeforeChange={(editor, data, value) => {
                        this.setState({editorValue: value});
                        this.props.onEditorValueChange && this.props.onEditorValueChange(value)
                    }}
                    onChange={(editor, data, value) => {
                        // console.log(value)
                    }}
                />
            </div>
        );
    }

    
}

export default BlogForm
