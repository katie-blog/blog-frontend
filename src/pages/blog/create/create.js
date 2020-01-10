import React from 'react'
import BlogForm from '@/components/BlogForm'
import BlogDetail from '@/components/BlogDetail'
import styles from './create.scss'

class Create extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editorValue: "test hhhhhh"
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

    onEditorValueChange = (val) => {
        this.setState({'editorValue': val})
        
    }

    render() {
        return (
            <div className="blog-create">
                <h1>Page create</h1>
                <BlogForm editorValue={this.state.editorValue} onEditorValueChange={this.onEditorValueChange}></BlogForm>
                
                <BlogDetail editorValue={this.state.editorValue}></BlogDetail>
            </div>
        );
    }
}

export default Create
