import React, {useRef} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoIosSearch} from 'react-icons/io';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import {HiOutlineUserCircle} from 'react-icons/hi';

const Searchbar = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="flex justify-around items-center">
      {/* 메뉴 */}
      <button>
        <AiOutlineMenu />
      </button>
      {/* 로고 */}
      <button>
        <img className="w-24 h-6" src="/images/youtube.png" alt="home logo" />
      </button>
      {/* searchbar */}
      <form className="" onSubmit={handleSubmit}>
        <input ref={inputRef} className="" type="text" placeholder="Search" />
        <button className="m-1">
          <IoIosSearch />
        </button>
      </form>
      {/* 설정 */}
      <button>
        <BiDotsVerticalRounded />
      </button>
      {/* 로그인 */}
      <button className="flex items-center">
        <HiOutlineUserCircle />
        <p className="ml-2">Sign in</p>
      </button>
    </header>
  );
};

export default Searchbar;
