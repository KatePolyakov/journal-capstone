import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useCallback } from 'react';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import axios from '../../axios';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/auth';

import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import './AddPost.scss';

export const AddPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isAuth = useSelector(selectIsAuth);

  const [isLoading, setIsLoading] = useState(false);

  const inputFileRef = useRef(null); //photo
  const [imageUrl, setImageUrl] = useState('');

  const [text, setText] = useState(''); //post hooks
  const [title, setTitle] = useState(''); //title hooks
  const [tags, setTags] = useState(''); //tags hooks

  //edit post
  const isEditing = Boolean(id);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData);
      setImageUrl(data.url);
    } catch (error) {
      console.warn(error);
      alert('Error');
    }
  };

  //remove image
  const onClickRemoveImage = () => {
    setImageUrl('');
  };

  const onChange = useCallback((value) => {
    setText(value);
  }, []);
  //edit post
  useEffect(() => {
    if (id) {
      axios.get(`/posts/${id}`).then(({ data }) => {
        setTitle(data.title);
        setText(data.text);
        setImageUrl(data.imageUrl);
        setTags(data.tags.join(','));
      });
    }
  }, [id]);
  const onSubmit = async () => {
    try {
      setIsLoading(true);

      const fields = {
        title,
        imageUrl,
        tags,
        text,
      };

      const { data } = isEditing
        ? await axios.patch(`/posts/${id}`, fields)
        : await axios.post('/posts', fields);

      const _id = isEditing ? id : data._id;

      navigate(`/posts/${_id}`);
    } catch (error) {
      console.warn(error);
      alert('Error post');
    }
  };

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
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

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="addpost">
      <div className="addpost__wrapper">
        <button onClick={() => inputFileRef.current.click()} className="addpost__preview">
          PREVIEW
        </button>
        <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
        {imageUrl && (
          <>
            <button onClick={onClickRemoveImage} className="addpost__delete">
              DELETE
            </button>
            <img className='addpost__image' src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
          </>
        )}
        <input
          className="addpost__title"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="addpost__tags"
          placeholder="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <div className="addpost__form">
          <SimpleMDE
            className="addpost__form-text"
            value={text}
            onChange={onChange}
            options={options}
          />
          <div className="addpost__form-buttons-group">
            <button className="addpost__form-submit" onClick={onSubmit}>
              {isEditing ? 'SAVE' : 'PUBLIC'}
            </button>
            <a href="/">
              <button className="addpost__form-cancel">CANCEL</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
