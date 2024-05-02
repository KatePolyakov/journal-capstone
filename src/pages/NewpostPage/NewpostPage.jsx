import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';

//import axios from 'axios';

import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import './NewpostPage.scss';

export const NewpostPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  //const inputFileRef = useRef(null); //photo
  const [imageUrl, setImageUrl] = useState('');
  const [text, setText] = useState(''); //post hooks
  const [title, setTitle] = useState(''); //title hooks
  const [tags, setTags] = useState(''); //tags hooks

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const token = JSON.parse(localStorage.getItem('authToken'));
  //     const response = await axios.get('http://localhost:8080/auth/me', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setUser(response.data);
  //   };
  //   fetchProfile();
  // }, []);

  // console.log(user._id);

  // const handleChangeFile = async (event) => {
  //   try {
  //     const formData = new FormData();
  //     const file = event.target.files[0];
  //     formData.append('image', file);
  //     const { data } = await axios.post('/upload', formData);
  //     setImageUrl(data.url);
  //   } catch (error) {
  //     console.warn(error);
  //     alert('Error');
  //   }
  // };

  //remove image
  // const onClickRemoveImage = () => {
  //   setImageUrl('');
  // };
  const onChange = useCallback((value) => {
    setText(value);
  }, []);

  const handleAddPost = () => {
    axios
      .post('/posts', {
        title: title,
        text: text,
        imageUrl: imageUrl,
        tags: tags,

        // user:user._id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate(`/`);
  };

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '250px',
      autofocus: true,
      placeholder: 'Text...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );
  return (
    <div className="newpost-page">
      <div className="newpost-page__wrapper">
        <p className="newpost-page__title">Create a new post</p>

        <form className="newpost-page__form" id="newpost-page__form" onSubmit={handleAddPost}>
          <div className="newpost-page__form-input">
            <input
              className="newpost-page__form-title"
              type="text"
              name="title"
              id="title"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}></input>
          </div>
          <SimpleMdeReact
            options={options}
            className="newpost-page__form-text"
            value={text}
            onChange={onChange}
            name="text"
          />
          <div className="newpost-page__form-buttons-group">
            <button type="submit" className="newpost-page__form-submit">
              <p>SUBMIT</p>
            </button>
            <Link to="/">
              <button className="newpost-page__form-cancel">
                <p>CANCEL</p>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
