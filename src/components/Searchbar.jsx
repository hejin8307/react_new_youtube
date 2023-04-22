import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
import {BsYoutube} from 'react-icons/bs';
import {IoIosSearch} from 'react-icons/io';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import {HiOutlineUserCircle} from 'react-icons/hi';
import {BiMoon, BiSun} from 'react-icons/bi';
import {useDarkMode} from '../context/DarkModeContext';

const Searchbar = () => {
  const [text, setText] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const {darkMode, toggleDarkMode} = useDarkMode();

  const navigate = useNavigate();

  const {keyword} = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  // 뒤로가기 했을 때 searchbar에 검색한 키워드와 이전 페이지와 맞게 하기 위함
  useEffect(() => setText(keyword || ''), [keyword]);

  const toggleDarkModeWithDropdown = () => {
    toggleDarkMode();
    setDropdown(false);
  };

  return (
    <header id="searchBox" className="w-full px-4 py-2 flex items-center">
      {/* 메뉴 */}
      <button>
        <AiOutlineMenu className="hidden sm:block" size="24" />
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
          className={`font-roboto w-7/12 py-2 border rounded-tl-3xl rounded-bl-3xl outline-none indent-4 ${
            darkMode ? 'bg-darkBlack border-darkLine' : 'border-darkGrey'
          }`}
          type="text"
          placeholder="Search"
          value={text}
          spellCheck="false"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className={`px-4 border-y border-r  rounded-tr-3xl rounded-br-3xl ${
            darkMode
              ? 'bg-darkSearch border-darkLine'
              : 'bg-lightGrey border-darkGrey'
          }`}
        >
          <IoIosSearch size="24" />
        </button>
      </form>

      {/* 다크모드 */}
      <div className="relative">
        <button onClick={() => setDropdown(!dropdown)}>
          <BiDotsVerticalRounded className="hidden sm:block" size="24" />
        </button>
        <div
          className={`${
            dropdown ? 'block' : 'hidden'
          } absolute checked:block rounded-md p-2 ${
            darkMode ? 'bg-dark_darkGrey' : 'bg-white'
          }`}
        >
          <button
            className="flex items-center"
            onClick={toggleDarkModeWithDropdown}
          >
            <BiMoon />
            <p className="pl-2">{darkMode ? 'LightMode' : 'DarkMode'}</p>
          </button>
        </div>
      </div>

      {/* 로그인 */}
      <button
        className={`flex items-center ml-4 pl-2 py-0.5 text-login border rounded-3xl ${
          darkMode ? 'border-darkLine' : 'border-loginGrey'
        }`}
      >
        <HiOutlineUserCircle
          className="mr-2 flex-shrink-0 sm:block"
          size="32"
        />
        <p className="pl-2 pr-3 font-semibold whitespace-nowrap hidden sm:block">
          Sign in
        </p>
      </button>
    </header>
  );
};

export default Searchbar;
