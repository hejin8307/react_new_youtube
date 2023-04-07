import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
import {BsYoutube} from 'react-icons/bs';
import {IoIosSearch} from 'react-icons/io';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import {HiOutlineUserCircle} from 'react-icons/hi';

const Searchbar = () => {
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const {keyword} = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  // 뒤로가기 했을 때 searchbar에 검색한 키워드와 이전 페이지와 맞게 하기 위함
  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className="w-full px-4 py-2 flex items-center">
      {/* 메뉴 */}
      <button>
        <AiOutlineMenu size="24" />
      </button>
      {/* 로고 */}
      <Link to="/" className="flex items-center pl-4">
        {/* <img className="w-24 h-6" src="/images/youtube.png" alt="home logo" /> */}
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-kenyc font-bold text-2xl tracking-tighter ml-1">
          YouTube
        </h1>
      </Link>
      {/* searchbar */}
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="font-roboto w-7/12 py-2 border border-darkGrey rounded-tl-3xl rounded-bl-3xl outline-none indent-4"
          type="text"
          placeholder="Search"
          value={text}
          spellCheck="false"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="px-4 border-y border-r border-darkGrey bg-lightGrey rounded-tr-3xl rounded-br-3xl">
          <IoIosSearch size="24" />
        </button>
      </form>
      {/* 설정 */}
      <button>
        <BiDotsVerticalRounded size="24" />
      </button>
      {/* 로그인 */}
      <button className="flex items-center ml-4 pl-2 py-0.5 text-login border border-loginGrey rounded-3xl">
        <HiOutlineUserCircle size="32" />
        <p className="pl-2 pr-3 font-semibold whitespace-nowrap">Sign in</p>
      </button>
    </header>
  );
};

export default Searchbar;
