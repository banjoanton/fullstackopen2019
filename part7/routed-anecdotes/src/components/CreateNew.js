import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const CreateNew = (props) => {
    const [ content, setContent ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ info, setInfo ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNew({
            content,
            author,
            info,
            votes   : 0
        });
        props.history.push('/');
        props.setNotification(`A new anecdote created: "${content}"`);
        setTimeout(() => {
            props.setNotification('');
        }, 10000);
    };

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div>
                    author
                    <input name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    url for more info
                    <input name="info" value={info} onChange={(e) => setInfo(e.target.value)} />
                </div>
                <button>create</button>
            </form>
        </div>
    );
};

const Create = withRouter(CreateNew);
export default Create;
